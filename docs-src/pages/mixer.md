---
title: Mixer
description: Mixer tracks, routing, faders, mute and solo, sends, effect slots, delay compensation, groups, VCA faders and the Mixer's keys.
---

The Mixer is where every channel's sound ends up. Each channel in the [Channel rack](channel-rack) plays into a mixer
track; each track has a fader, pan, effect slots and an output, and every track ends in the master. It works the way
FL Studio's mixer does: route channels with <kbd>⌘L</kbd>, send tracks to each other with the switch under each
strip, and put effects in the slots on the right.

![The Mixer, with effects in the selected track's slots](shot:mixer "The Mixer: strips on the left, the selected track's effect slots on the right")

## Open the Mixer

Press <kbd>F9</kbd> (or <kbd>⌥4</kbd>), or use the Mixer button on the toolbar. It opens filling the window.
Double-click its title bar to make it a window you can move and resize, and double-click again to fill the window.

The Mixer has three parts:

- **The strips**: the master first (marked **M**), then the tracks. Scroll along them with the mouse wheel.
- **The inspector** on the right: the current track's name, its input, its effect slots and its delay compensation.
- **The title bar**: the Mixer menu (the arrow), the **SOLO** light, **MONO**, **DIM**, the view, and **+** to add a
  track.

## Tracks

### Add and delete tracks

- Click **+** in the title bar to add a track after the selected one, or the **+** after the last strip to add one at
  the end.
- Right-click a track's number or name and choose **Insert a track after**.
- To delete, select the tracks and press <kbd>⌥⌫</kbd>, or choose **Delete** from the track's menu or **Delete
  selected tracks** from the Mixer menu.

The master can't be deleted or moved.

### Select tracks

- Click a strip to select it. It becomes the *current* track, the one the inspector shows.
- <kbd>⌘</kbd>-click adds a track to the selection. <kbd>⇧</kbd>-click selects every track from the current one to
  the one you click.
- Drag across the names and meters to move the selection along. Hold <kbd>⌘</kbd> while you drag to add every track
  you pass over.
- <kbd>←</kbd> and <kbd>→</kbd> select the previous and next track. <kbd>⌘A</kbd> selects them all.
- <kbd>Esc</kbd>, or a click on empty space, keeps only the current track selected.

A control you move on a selected strip moves on every selected track: faders move together by the same number of
decibels, pan and stereo separation by the same amount, and mute, solo, invert and swap all take the state of the
strip you clicked.

### Rename, colour and reorder

- Double-click a track's name, press <kbd>F2</kbd> or <kbd>⇧⌘N</kbd>, or choose **Rename and color…** from its menu.
  Clear the name to go back to the track's number.
- **Colour ▸** in the track's menu picks a colour from a set of swatches, or **No colour**. A coloured track's strip
  is tinted.
- Drag a track's number to move it (the selected tracks go with it). A line shows where they'll land. You can also
  press <kbd>⌥←</kbd> and <kbd>⌥→</kbd>, or choose **Move left** and **Move right**.

## Route channels to the Mixer

A channel plays into the mixer track its settings name. To route several at once:

1. Select the channels in the [Channel rack](channel-rack).
2. Select a mixer track.
3. Press <kbd>⌘L</kbd> (**Route selected channels to this track**) to send them all there, or <kbd>⇧⌘L</kbd>
   (**…starting from this track**) to give each channel a track of its own, one after the other.

Both are in the Mixer menu and under **Channel routing ▸** in a track's menu. <kbd>⌥L</kbd> (**Select channels routed
here**) selects, in the Channel rack, every channel that plays into the current track.

## A strip, top to bottom

| Part | What it does |
| --- | --- |
| Group band | Shows when the Mixer has [groups](#groups-and-vca-faders). |
| Number | Drag it to reorder tracks. It turns purple with a microphone when the track takes an input. A clock means the track's delay is compensated. |
| Fold chip | On a track others send into: how many feed it. Click to fold them away. |
| Name and meter | Double-click the name to rename. The selected strip's meter is outlined. |
| Mute light | Click to mute. |
| **S** | Solo. |
| Pan | Left to right. |
| Fader | The level, with its value in dB under it. |
| Arm light | Arms the track to [record](recording) its input. Not on the master. |
| Invert phase, swap left/right | Two switches. |
| Stereo separation | Narrower or wider. |
| Output | Where the track goes: **→ M** for the master, a list of numbers, or **→ —** for nowhere. |
| Send switch | Sends the selected tracks to this one. See [Sends](#sends). |

## Faders, pan and stereo

**Fader.** Drag the handle, or press anywhere in the groove to bring the handle there and keep dragging. It catches at
0 dB on the way past; hold <kbd>⇧</kbd> to move through it. Hold <kbd>⌘</kbd> for fine changes. The mouse wheel moves
it too. <kbd>⌥</kbd>-click (or a middle click) puts it back at 0 dB. Right-click for **Reset**, **Type in value…**
(in dB) and the [automation](automation) items.

**Pan and stereo separation** are knobs: drag up or down, <kbd>⌥</kbd>-click to reset, right-click for **Reset**,
**Copy value**, **Paste value** and **Type in value…**. Stereo separation reads **As it is** in the middle; turned
right it makes the sound narrower, turned left wider.

**Invert phase** flips the track's polarity. **Swap left/right** swaps its two sides.

Every control on a strip can be [automated](automation) and [modulated](modulators): right-click it.

## Mute and solo

- Click the mute light to mute a track. Keep the button down and drag across other strips to mute them too.
- Click **S** to solo a track (drag across strips to solo several). <kbd>⌥</kbd>-click **S**, press <kbd>⌥S</kbd>,
  or <kbd>⌘</kbd>-click or right-click the mute light to solo a track alone.
- <kbd>⇧</kbd>-click **S** to make a track *solo safe* (a lock shows): it's never silenced by another track's solo.
  Useful for a reverb bus. **Solo safe** is also in the track's menu.
- The **SOLO** light in the title bar blinks while anything is soloed, with a count when more than one is. Click it
  to clear every solo (or choose **Clear all solos**).

Soloing a track keeps what it plays through: the buses it sends into stay on, and their **S** is outlined.

A muted or soloed-out strip is greyed. A track that's silent because of something further along (it sends into a
muted bus, or sends nowhere) is faded a little less; hover over it to see why.

## Routing

Every track goes to the master until you send it somewhere else. Click a strip's output label for its **Route to**
menu: every track it can go to, with a tick by those it goes to now, and **New bus**.

### Sends

The send switch under each strip works on the selected tracks:

- On a track that isn't selected, the switch is an up arrow. Click it to send the selected tracks there; click again
  to stop. It's half lit when only some of them send there.
- Once a track sends to it, the switch shows a knob: the send's level (100% to start). It moves the send of every
  selected track at once.
- On a selected track the switch is a down arrow. Drag it onto another strip to route the track there and nowhere
  else; hold <kbd>⌘</kbd> or <kbd>⌥</kbd> as you drop to add a send and keep the routes it has. A cable follows the
  pointer while you drag.
- A switch is greyed when sending there would make a loop: that track's sound already reaches the selected ones.

Right-click a send switch for **Route to this track** (or **Remove the sends**), **Route to this track only**,
**Sidechain to this track** (a send at 0%, as in FL Studio) and, once it sends, **Pre-fader**.

The same choices are under **Track routing ▸** in a track's menu, with **Route to the master only**.

### Pre-fader sends

A send is taken after the track's fader, so turning the track down turns the send down too. Tick **Pre-fader** in the
send switch's menu to take it before the fader instead: the send keeps its level whatever the fader does. A **PRE**
badge marks it.

### Buses

Select some tracks and press <kbd>⌘G</kbd> (**Route selected to a new bus**). A new track is added after them, they
all go into it, and you name it at once.

A track that others send into shows a fold chip with how many feed it. Click it to fold those tracks away and show
only the bus; click again to bring them back.

### Cables

The Mixer draws its routing the way FL Studio does. From each selected track, a cable runs from its send to every
track it goes to. Into a selected track, dashed cables come from the tracks that feed it. A 0% send is faint, and a
[sidechain key](sidechain) is dotted, in the accent colour.

## Effect slots

The inspector shows the current track's effect slots. An empty one reads **Slot** and its number.

### Add an effect

1. Click an empty slot.
2. Pick an effect: the [built-in effects](effects) come first (Y-EQ, Y-C, Y-L, Y-R, Y-Multiband, Y-Time,
   Y-Delay, Y-Tune, Y-Pan, Y-Pitch), then the [plugins](plugins) you've starred, then the rest of your effect plugins.
   **Plugin manager…** opens the Plugin manager, where you star the plugins you use so they come first.

A built-in effect's window opens at once; a plugin's opens when it has loaded. A spinner shows while it loads. If it
fails, the slot shows a warning and a button to try again.

### Use a slot

- Click its name to open or close its window.
- The light on the right turns it on or off (bypass). A bypassed effect's name is struck through.
- The small knob is its **mix**, from dry to 100% wet. It can be automated like any knob.
- A key badge shows when it [listens to a sidechain key](sidechain), with the number of the track it hears.

Click the slot's arrow, or right-click it, for its menu: **Open its window**, **Replace…**, **Bypass** or **Enable**,
**Sidechain input ▸**, **Move up**, **Move down** and **Delete**.

### Reorder, move and copy effects

- Turn the mouse wheel over a slot to move its effect up or down.
- Drag a slot onto another slot to swap them. Hold <kbd>⌘</kbd> to copy it there instead.
- Drag a slot onto another track's strip to move the effect to that track, with its settings and its automation.
  Hold <kbd>⌘</kbd> to copy it. A track with every slot full says **No free slot**.

## Delay compensation

Some effects and plugins delay their sound to do their work. Yen Studio delays every
other path to match, so the tracks stay in time. Sends and [sidechain keys](sidechain) are compensated too.

At the bottom of the inspector:

- **Plugin delay** says how much the track's effects delay it, in milliseconds and samples, or **none**. Only effects
  that are switched on count.
- **Offset** adds to that, in milliseconds. Use it when a track sounds late (or early) and its plugins don't say so:
  a positive offset means its sound is later than they report, and the other tracks wait for it. A negative one means
  it's early. **Reset** sets it back to 0.

A track whose delay is compensated shows a clock by its number. Hover over it for the plugins' delay and the offset.

## Groups and VCA faders

1. Select the tracks.
2. Right-click one and choose **Create group…**, then type its name.

A band with the group's name runs above its tracks. Click the band to select the group's tracks (<kbd>⌘</kbd>-click
adds them to the selection); double-click it to rename the group. **Ungroup** in a track's menu takes it out.

- **Link the group's controls**: a control moved on one of the group's tracks moves on all of them, whether or not
  they're selected. A link icon shows on the band.
- **VCA fader for the group**: adds a strip after the master, labelled **VCA** and the group's name. Its fader scales
  the level of every track in the group without mixing their sound together; each track keeps its own fader and
  automation. The VCA fader itself can't be automated yet. Its menu has **Remove the VCA fader**.

## Layout

- **Views.** The view name in the title bar (**Compact**, **Wide**, **Extra large**) switches to the next one; the
  Mixer menu lists them too. Extra large adds a list of each strip's effects: click one to open it. A bypassed one is
  struck through. The view is kept on this computer.
- **Docking.** **Dock to ▸ Left / Middle / Right** in a track's menu pins it. Left-docked tracks stay beside the
  master and right-docked ones at the far right while the middle scrolls.
- **Separators.** Tick **Separator before** in a track's menu to put a gap before its strip.

## Copy track state

Right-click a track and click **Copy track state**, then choose **Paste track state** on another. It copies the
track's effects with their settings, and its controls. You can also drag **Copy track state** from the menu onto
another strip to copy it there in one go.

> **Note:** a plugin's own settings carry over only within the same song.

## Meters

Each strip's meter shows both sides. It's green up to −18 dB, amber towards 0 dB and red over it, and stays red for
a moment after the sound goes over.

The **SEL** meter at the far left adds up the selected tracks' output, with a dB scale: select a few tracks to see how
loud they are together.

On the master:

- **MONO** sums the master to mono so you can check the mix there.
- **DIM** turns the master down by 20 dB so you can talk over it.

Neither changes an [export](export).

## Recording

A track that takes an input can be armed and recorded. Its input, monitoring and input offset are at the top of the
inspector. **Assign to new audio track** in a track's menu gives it a Playlist track where its takes land. See
[Recording audio](recording).

## Menus

**The Mixer menu** (the arrow in the title bar): **Add a track**, **Route selected to a new bus**, **Delete selected
tracks**, **Modulators…** (see [Modulators](modulators)), **Route selected channels to this track**, **Route selected
channels starting from this track**, and the views.

**A track's menu** (right-click its number or name):

- **Rename and color…**, **Colour ▸**
- **Channel routing ▸**, **Track routing ▸**, **Sidechain to ▸** (see [Sidechain](sidechain))
- **Copy track state**, **Paste track state**
- **Select channels routed here**
- **Assign to new audio track**
- **Solo**, **Solo alone**, **Solo safe**, **Clear all solos**
- **Move left**, **Move right**
- **Separator before**
- **Create group…**, **Ungroup**, **Link the group's controls**, **VCA fader for the group**
- **Dock to ▸**
- **Insert a track after**, **Delete**

## Keys

These work while the Mixer is in front.

| Key | What it does |
| --- | --- |
| <kbd>F9</kbd> | Open or close the Mixer |
| <kbd>←</kbd> / <kbd>→</kbd> | Select the previous or next track |
| <kbd>⌘A</kbd> | Select every track |
| <kbd>Esc</kbd> | Keep only the current track selected |
| <kbd>S</kbd> | Solo the selected tracks |
| <kbd>⌥S</kbd> | Solo them alone |
| <kbd>⌥←</kbd> / <kbd>⌥→</kbd> | Move the selected tracks left or right |
| <kbd>F2</kbd> or <kbd>⇧⌘N</kbd> | Rename the track |
| <kbd>⌘G</kbd> | Route the selected tracks to a new bus |
| <kbd>⌘L</kbd> | Route the selected channels to this track |
| <kbd>⇧⌘L</kbd> | Route the selected channels starting from this track |
| <kbd>⌥L</kbd> | Select the channels routed to this track |
| <kbd>⌥⌫</kbd> | Delete the selected tracks |
