---
title: Y-Time
description: Y-Time, the built-in effect that shapes sound in time with the song: its lanes (time, volume, filter, pan, width, drive, crush and pitch), their waves, its presets and the assistant's.
---

Y-Time shapes sound in step with the song. It's built from **lanes**, each one a wave that moves one thing over and
over: time, volume, a filter, pan, width, drive, a bit crusher or pitch. The time lane keeps the last few beats of
what goes through it and plays back a moment of them, so repeats, stutters, half speed, tape stops and scratches are
just shapes. The others turn the sound into gates, pumps, wobbles, sweeps and drifts, each lane at its own length.

A whole set of lanes is a **preset**. Pick one of the factory's, save your own, or ask the assistant to make one.

Its settings are saved with the song and every change can be undone.

## Add Y-Time to a track

1. Open [the Mixer](mixer) and pick a track.
2. Click an empty effect slot. The picker opens.
3. Under **Built in**, choose **Chops and gates** ("Chops, repeats, half speed, gates").

The window opens when you click the slot's name. Its title bar names the effect and its track, for example
"Y-Time (Insert 1)". Close it and the effect keeps playing. Delete the effect and the window closes.

The slot's own mix knob in the Mixer sets how much of Y-Time you hear against the dry sound. See
[Built-in effects](effects) for what every built-in effect shares.

## The window

- **The top bar**: the preset, the song's tempo, and **Options**.
- **Lanes**, on the left: every lane in the order it shapes the sound, then the scratching clock and the output meters.
- **The glass**, the big panel: the picked lane's wave, to draw on.
- **Waves**, under it: shapes to put on the picked lane, and the time and volume slots.
- **The picked lane's controls**, along the bottom.

## Presets

The pill in the middle of the top bar names the preset loaded. Its arrows step through every preset, and clicking its
name opens the library:

- **Factory**: the factory's presets by category: **Time**, **Rhythm**, **Movement**, **Transitions** and **Lo-fi**.
- **Mine**: the presets you've saved.
- **From the assistant**: the ones the assistant made for you. Hover over the pill to read what it was asked for.
- **Save as new preset…**: keeps every lane as a preset of yours. Type its name and press <kbd>Enter</kbd>.
- **Delete “…”**: deletes the loaded preset, if it's yours or the assistant's.
- **Ask the assistant…**: see [Ask the assistant for a preset](#ask-the-assistant-for-a-preset).

Each item says how many lanes it has. Loading a preset is one undo step. Once you change a lane, the pill marks the
preset as changed.

Your presets and the assistant's are kept on this computer, not in the song, so any song's Y-Time can load them. A
song keeps its own lanes either way, so it sounds the same on a computer that doesn't have the preset.

### Ask the assistant for a preset

Choose **Ask the assistant…**, say what it should do ("a wobbly halftime with a sidechain pump"), and click **Make**. The
[assistant](assistant) opens, shapes this Y-Time's lanes, and saves the result under **From the assistant** with a short
name. Its changes are undo steps like yours.

You can also just ask it in the chat, for example "put a 1/8 filter wobble on the vocal's Y-Time".

## Lanes

A new Y-Time has two lanes: **Time** and **Volume**. Click **+ Lane** to add any of the others:

| Lane | Its wave moves |
| --- | --- |
| **Time** | Which moment plays: now, a moment ago, faster, slower or backwards. Always first. |
| **Volume** | The level, from silence to full. |
| **Filter** | A filter's cutoff, from 20 Hz to 20 kHz. |
| **Pan** | The sound from left to right. |
| **Width** | The stereo width, from mono to twice as wide. |
| **Drive** | Saturation, up to +24 dB of drive. |
| **Crush** | A bit crusher: higher on the wave is fewer bits and a lower sample rate. |
| **Pitch** | Pitch, an octave down to an octave up. |

Each lane's row shows its wave, its length and its mix. Click a row to pick the lane: its wave fills the glass and its
controls show along the bottom.

- **Turn a lane off**: click its power button. It's bypassed, not removed.
- **Change the order**: drag a row by its grip. Each lane shapes what the lanes above it made, so a filter after a drive
  sounds different from one before it. Time stays at the top.
- **Right-click a row** for **Save wave to Mine** and **Remove lane**.

Each kind of lane appears once.

### A lane's controls

| Control | What it does |
| --- | --- |
| **Mix** | How much of the shaped sound you hear over the sound coming in. |
| **Smooth** | Rounds off the wave's steps, up to 50 ms, so they don't click. |
| **Length** | How long one cycle of the wave lasts: 1/16, 1/8, 1/8T, 1/4, 1/4D, 1/2, 1 bar, 2 bars or 4 bars. |
| **Trigger** | **Sync** follows the song's bars. **Audio** starts the cycle again on each hit it hears. |

Some lanes have more:

- **Filter**: **LP** (low pass), **BP** (band pass) or **HP** (high pass), and **Res** for its resonance.
- **Drive**: **Tape**, **Tube** or **Fuzz**.
- **Crush**: **Rate**, the sample rate at the top of the wave.

The time and volume lanes have their own controls: see [Time and volume](#time-and-volume).

### Draw a wave

Pick a lane other than time or volume, and draw on the glass with the pens at its top:

- **Pointer**: drag points, click to add one, right-click to remove one.
- **Line**, **Arc** and **S-curve**: drag to draw that shape between two places. Click to stamp one in a grid cell.
- **Steps**: drag to paint a step in each grid cell.

**Grid** sets the cells: 1/8, 1/16 or 1/32 of the cycle, or 1/8 triplets.

### Put a wave on a lane

The **Waves** row under the glass has ready-made waves for the picked lane:

- **Shapes**: the factory's: **Ramp down**, **Ramp up**, **Arc**, **Triangle**, **Sine**, **Square**, **Pump**,
  **Gate 1/16**, **Stairs** and **Drift**, and for the time and volume lanes a few of their own, such as **Halftime**,
  **Tape stop** and **Trance gate**.
- **Mine**: waves you've saved. Right-click one to remove it.

Click a wave to put it on the lane. **Save wave** keeps the lane's wave in Mine, to put on other lanes and in other
songs. A time lane's wave goes only on time lanes.

## Time and volume

The time and volume lanes work as Y-Time always has: each has **36 slots**, each slot holding a shape, and one of each
plays. Pick either lane and the glass shows both envelopes, time above and volume below. Click the other one to edit it.

### Pick a slot

Pick the time or volume lane, then **Slots** in the Waves row. Each pad shows its slot's shape.

- Click a pad to pick it. While the song plays, it starts at its next sync point (see [Sync](#sync)).
- The slot playing is lit. A slot waiting for its sync point is outlined.
- A slot you've changed from its preset says "(changed)" in its hover tip.

The first slot of each, **Empty**, does nothing: time flows normally and the volume is full.

Right-click a pad for its menu:

- **Pick slot N**
- **Copy** and **Paste**: copy a slot's envelope onto another.
- **Clear**: an empty envelope.
- **Reset to its preset**: back to the shape it came with.
- **Create automation clip** and the other automation items. The picked slot can be automated, so the song can switch
  shapes bar by bar (see [Automate Y-Time](#automate-y-time)).

Beside the pads:

- **Link slots**: picking a time slot picks the volume slot with the same number, and the other way round.
- **One-shot**: a slot plays once, for a bar, then slot 1 (Empty) takes over.

#### The time slots

The time slots come with shapes such as **2 Beat Rpt**, **1/2 Repeat** to **1/16 Repeat**, **1 Beat Juggle**,
**Slow Dn Rpt**, **Spd Up Rpt**, **1/4 Pitch Up**, **1/4 Pitch Dn**, **Pitch Bend**, **Jumps**, **Reverse**,
**Backspin**, **Vinyl Off**, **Vinyl On**, **Vinyl Stop**, **Bar Scratch**, **Scratch**, **Trip Scratch**,
**1/2 Speed**, **X2 Speed**, **1/2 Grains**, **Slow Triplet**, **Underwater** and **Digital**.

#### The volume slots

The volume slots come with gates and fades such as **2 Beat Gate** to **1/8 Bt Gate**, **Trance Gt 1** to
**Trance Gt 4**, **Saw Gate 1**, **Off Beat**, **Dotted Gate**, **Swing Gate**, **1/4 Gate Out**, **1/4 Gate In**,
**Gate Fade**, **Tremolo Slow**, **Tremolo Fast**, **Sidechain**, **Copter**, **AM**, **Fade In**, **Fade Out**,
**Fade In Out** and **Mute**.

#### Rename a slot

Click the slot's name at the foot of the glass, type a new one, and press <kbd>Enter</kbd>. <kbd>Escape</kbd> keeps the
old name.

### Read the time envelope

The top of the envelope is now. Further down is further back in time. A point's height says which moment plays at that
point of the cycle. While the song plays, a line moves across it, and **Behind by** says how far behind the song the
sound is.

| What you draw | What you hear |
| --- | --- |
| A flat line | Normal speed, a fixed distance behind now. At the top, the sound as it is. |
| A line sloping down, less steep than the safety line | Slower, and lower in pitch, as a tape slowing down. |
| A line sloping up | Faster and higher in pitch. It can't go past now. |
| A line steeper than the safety line | Backwards. |
| A step | A jump to another moment: a repeat or a stutter. |
| A curve | A scratch. |

The **safety line** is a slope of one beat back per beat: following it is a pause. Lines twice as steep are drawn as
guides: following one is the sound played backwards at normal speed.

How far back the bottom reaches is the time lane's **Range**: **Linked** is eight beats for each bar of its length, as
Y-Time has always done; **1 bar**, **2 bars** and **4 bars** are fixed; **Fine 2.5 ms**, **Fine 10 ms** and
**Fine 20 ms** reach only a few milliseconds back, for chorus, warble and flutter.

> **Note:** Y-Time can only play back what it has heard. When the song starts, what it keeps is empty, so in the first
> bar it can't reach back before the start.

The volume envelope's top is full volume and its bottom is silence.

### Edit an envelope

Pick a slot, then draw on its envelope. Changes are saved in that slot.

- **Add a point**: right-click an empty place. Keep the button held to drag it into place. Hold <kbd>⇧</kbd> to put it
  on the line.
- **Move a point**: drag it. Hold <kbd>⇧</kbd> to move it only sideways, <kbd>⌘</kbd> to move it only up and down, or
  <kbd>⌥</kbd> to move it off the grid.
- **Delete a point**: ⌥-click it.
- **Bend a line**: drag a segment's tension handle up or down. Hold <kbd>⌘</kbd> for fine changes. Right-click the
  handle to make the line straight again.

Right-click a point for its menu. It says which point it is, then:

- **Delete**
- The curve from this point to the next: **Single**, **Double**, **Alt single**, **Alt double**, **Hold**,
  **Stairs**, **Smooth stairs**, **Pulse**, **Wave** or **Half sine**.
- On the time envelope, **Pitch**: **1 semitone up** or **1 semitone down**.

The first point can't be deleted, and its curve can't be changed.

The tools along the top of the glass:

- **Draw**: drag points, right-click to add one.
- **Step editing**: drag across the envelope to draw a step in each grid cell. Hold <kbd>⇧</kbd> for pulses.
- **Slide remaining points**: when you move a point, the points after it go along.
- **Freeze** (the snowflake): nothing can be edited, so you can click around without changing a shape.
- **Mapping envelope options**, for the slot shown: **Flip vertically**, **Scale levels up**, **Scale levels down**,
  **Normalize levels**, **Decimate points**, **Smooth up abrupt changes**, **Turn all points smooth**, then
  **Copy slot**, **Paste slot**, **Clear slot** and **Reset to its preset**.
- **Snap**: where points land. **Off**, or 1/16, 1/12, 1/8, 1/6, 1/4 or 1/3 of a beat. A new window snaps to 1/8.

### Their controls

Pick the time or volume lane and its controls show along the bottom.

| Control | Lane | What it does |
| --- | --- | --- |
| **Mix** | Both | How much of the envelope you hear. At 0% on the volume lane, the volume isn't touched. |
| **Length** | Both | How long one cycle lasts. 1 bar is Y-Time's classic. |
| **Range** | Time | How far back the envelope reaches (see [Read the time envelope](#read-the-time-envelope)). |
| **Hold** | Time | What the HOLD button repeats (see [HOLD and the scratching clock](#hold-and-the-scratching-clock)). |
| **Attack** | Volume | 0 to 500 ms: smooths the volume envelope where it rises. |
| **Release** | Volume | 0 to 1000 ms: smooths the volume envelope where it falls. |
| **Tension** | Volume | −100 to 100%: bends that smoothing's curve. |

The knobs work like every knob in Yen Studio: drag up or down (<kbd>⌘</kbd> for fine), scroll, ⌥-click to reset, and
right-click for **Type in value…**, automation and [modulation](modulators).

### Sync

Along the bottom, with either lane picked:

- **Trig sync**: when a slot you pick starts. **Off** starts it at once; the others wait for the next 1/4 beat,
  1/2 beat, 1, 2 or 4 beats. A new Y-Time waits for the next 1/4 beat.
- **Pos sync**: where in its envelope a slot starts. **Off** starts it from its beginning; the others start it where
  the song is inside that length. A new Y-Time uses 4 beats, so its envelopes stay in line with the bars.

## HOLD and the scratching clock

**HOLD**, with the time lane's controls, repeats a bar while you hold it down. What it repeats is set by the menu beside
it:

- **Last**: the bar just played.
- **Next**: the next bar.
- **Off**: the button does nothing.

The **scratching clock** is the platter under the lanes. Show or hide it from **Options**. It turns with the bar while
the song plays. Drag down on it to reach back in time, up to eight beats, and up to come forward again. Let go and the
sound springs back to now.

> **Note:** HOLD and the scratching clock are played live. What you do with them isn't saved in the song and can't be
> automated.

## Options

Click **Options** in the top bar:

- **Click reduction**: a jump fades across, so it doesn't click. On in a new Y-Time.
- **Smoothing attack compensation**: what's played after a jump starts the attack time earlier, so its start isn't
  lost under the **Attack** smoothing.
- **Remove DC offset**: filters out anything below about 10 Hz, which a slowed or stopped sound can leave behind.
- **HQ resampling**: a finer way of reading between samples when the speed changes.
- **View scratching clock**
- **Copy state** and **Paste state**: every setting, lane and slot, to put on another Y-Time.

> **Note:** **Trigger slots from MIDI notes** is in the menu but greyed: Y-Time can't hear MIDI notes yet. Pick slots
> by clicking them, or automate them.

## Automate Y-Time

These can be automated: the time slot, the volume slot, the time and volume lanes' **Mix**, **Attack**, **Release** and
**Tension**.

- Right-click a knob, or a slot pad, and choose **Create automation clip**.
- Or touch a control, then click **Automate “…”** in the window's title bar. It names the last control you touched
  and makes a clip of it.

Automating the time slot is how you write a performance: a repeat on the last beat of every fourth bar, a tape stop
before the drop. See [Automation](automation).

> **Tip:** Draw your own shape in a slot you don't use, then automate the slot number to call it in where you want it.
