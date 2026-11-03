---
title: Piano roll
description: Draw, select, move, quantize, chop and edit notes in Yen Studio's Piano roll, with every tool, menu and key.
---

The Piano roll is where you write a channel's notes. Pitch runs up the keyboard on the left, time runs along the ruler
on top, and each note is a bar on the grid. The notes belong to one channel in the pattern shown, the same notes the
[Channel rack](channel-rack)'s steps show. It works the way FL Studio's does: left-click adds, right-click deletes.

![The Piano roll with a melody, its velocity lane underneath](shot:piano)

## Open it

- Press <kbd>F7</kbd> or <kbd>⌥3</kbd>, click its button on the toolbar, or choose **Window › Piano Roll**. It opens
  on the channel selected in the rack.
- In the Channel rack, click a row's note preview, double-click a channel's select button, or right-click a channel
  and choose **Piano roll**.
- In [the Playlist](playlist), double-click a pattern clip. The Piano roll opens on the channel with the most notes in
  it.

The Piano roll fills the window when it opens. Double-click its title bar to make it a window of its own size. Its keys
only work while it's the window in front. <kbd>Escape</kbd> closes it.

If the rack has no channels, the Piano roll asks you to add one first.

### What's on screen

- **The title bar**: the target channel, the Tools menu, the Scale menu, the Stamp menu, the tools, the Snap menu and
  the ghost notes switch.
- **The keyboard** on the left. Click or drag on it to play keys.
- **The ruler** on top. It sets where play starts and holds [the time selection](#the-time-selection).
- **The grid**, where the notes are.
- **The event editor** underneath, with each note's velocity or pan.

While the song plays, a line moves across the grid with the playhead.

## Draw notes

1. Pick **Draw** (<kbd>P</kbd>).
2. Click an empty spot on the grid. A note starts at the beginning of the grid cell you clicked.
3. Keep the button down and drag to move it before you let go. ⇧-drag pulls out its length instead.

A new note is as long as the last note you clicked or resized, so click a note of the length you want before drawing
more. Until you do, new notes are a beat long.

When notes are selected, clicking an empty spot only deselects them. Click again to draw.

**Paint** (<kbd>B</kbd>) draws a run of notes as you drag, each the current length, at the pitch you pressed. Hold ⇧
to have each note follow the pointer's pitch instead.

While the song plays, a note you draw is heard as soon as you press. When it's stopped, the note you move is heard as
you drag it.

> **Tip:** Hold ⌥ while drawing or moving to turn the snap off and ignore [the song's scale](#the-songs-scale).

## Move, copy and resize notes

With Draw or Paint:

- **Drag a note** to move it. If it's selected, the whole selection moves with it.
- **⇧-drag a note** to move a copy of it (or of the selection). The copies end up selected.
- Once you're moving, hold ⇧ to keep the pitch, or ⌘ to keep the time.
- **Drag a note's right edge** to change its length. The end snaps to the nearest grid line.
- **Double-click a note** to open [Note properties](#note-properties).

Notes move by whole grid cells, so a note that sits off the grid keeps its offset. Notes move together: if one of them
would go past the top or bottom of the keyboard, none of them moves.

When more than one note is selected, a stretch handle appears at the selection's end. Drag it to stretch or squeeze the
notes in time from their start. It snaps; hold ⌥ for none.

## Delete and mute notes

- **Right-click** a note to delete it. Right-drag across the grid to delete every note you sweep over.
- The **Delete** tool (<kbd>D</kbd>) deletes notes with the left button too, by clicking or sweeping.
- <kbd>Delete</kbd> or <kbd>Backspace</kbd> deletes the selected notes.
- The **Mute** tool (<kbd>T</kbd>) mutes notes as you click or sweep. The first note you press decides: if it was
  playing, the notes you sweep are muted; if it was muted, they're unmuted. Muted notes stay in place and don't play.
- <kbd>⌥M</kbd> mutes the selected notes, and <kbd>⇧⌥M</kbd> unmutes them.

## The tools

The tool buttons are on the title bar.

| Tool | Key | What it does |
| --- | --- | --- |
| Draw | <kbd>P</kbd> | Click to add a note, drag to move or resize one. |
| Paint | <kbd>B</kbd> | Drag to lay down a run of notes. |
| Delete | <kbd>D</kbd> | Click or sweep to delete notes. |
| Mute | <kbd>T</kbd> | Click or sweep to mute or unmute notes. |
| Slice | <kbd>C</kbd> | Cut notes in two along a line in time. |
| Select | <kbd>E</kbd> | Drag a rectangle to select notes. |
| Zoom | <kbd>Z</kbd> | Drag a rectangle to zoom to it. |
| Playback | <kbd>Y</kbd> | Drag across notes to hear them. |

Right-click deletes with every tool except Zoom.

### Slice

1. Pick **Slice** (<kbd>C</kbd>).
2. Press where you want the cut, then drag up or down across the rows to cut.
3. Let go. Every note the line crosses is cut in two, and the pieces after the cut are selected.

The cut goes on the grid line nearest the pointer. Hold ⌥ to cut anywhere. Hold ⇧ to cut every row at once: the line
shows before you press.

The Slice tool cuts every note it crosses, selected or not.

### Zoom and Playback

With **Zoom**, drag a rectangle to fill the view with it. Click to zoom out. Right-click to go back to the view you had
before the last zoom, and right-click again to come back.

With **Playback**, drag along the grid. Each note under the pointer sounds as you pass it. You can do the same with
any tool by holding ⌥ and dragging with the right button.

## Select notes

- **Drag a rectangle** with the Select tool, or with ⌘ held in any tool. Hold ⇧ as well to add to the selection.
- **⌘-click** a note to select it alone. **⇧⌘-click** adds it to the selection or takes it out. With the Select tool,
  ⇧-click does the same.
- **⌘-drag on the keyboard** selects every note on the keys you drag over.
- <kbd>⌘A</kbd> selects every note, <kbd>⌘D</kbd> deselects, and <kbd>⇧I</kbd> inverts the selection.
- Right-click an empty spot, or ⌘-click one, to deselect.
- Selecting a range of time on the ruler selects the notes that start in it (see
  [The time selection](#the-time-selection)).

Selected notes are drawn highlighted. The selection clears when you switch pattern or channel.

### Commands act on the selection, or on every note

Most commands, such as quantize, chop, glue, legato and the moves with the arrow keys, change the selected notes. When
nothing is selected, they change every note of the channel in the pattern. Delete, copy and cut need a selection.

## Copy, paste and duplicate

- <kbd>⌘C</kbd> copies the selected notes and <kbd>⌘X</kbd> cuts them.
- <kbd>⌘V</kbd> pastes them at the first bar in view. The pasted notes are selected, ready to drag into place.
- <kbd>⌘B</kbd> duplicates the selection to the right. The copy goes straight after the selection, rounded up to the
  snap. If there's a time selection, the copy goes one time selection later, and the time selection moves along with
  it. Press <kbd>⌘B</kbd> again to keep repeating.

The **Edit** menu's Cut, Copy, Paste, Delete and Select All work on the Piano roll's notes while it's in front.

## Move notes with the keys

| Keys | Moves the notes |
| --- | --- |
| <kbd>⇧←</kbd> <kbd>⇧→</kbd> | Back or forward by a snap unit |
| <kbd>⌥←</kbd> <kbd>⌥→</kbd> | Back or forward by a tick |
| <kbd>⇧↑</kbd> <kbd>⇧↓</kbd> or <kbd>⌥↑</kbd> <kbd>⌥↓</kbd> | Up or down a semitone |
| <kbd>⌘↑</kbd> <kbd>⌘↓</kbd> | Up or down an octave |
| <kbd>⇧⌘←</kbd> <kbd>⇧⌘→</kbd> | Rotate by a snap unit: notes pushed past the pattern's end come round to its start |

A tick is the smallest step in time: a beat has 96, and a step (a sixteenth) has 24.

## Snap

The **Snap** menu (the magnet) sets the grid notes snap to when you draw, move, resize and slice them, and what
quantize and chop use.

- **Line** and **Cell** snap to the grid drawn at the current zoom. Zoom in and the grid gets finer, down to a step.
  Line is the default.
- **(none)** turns snapping off.
- The rest are fixed lengths: 1/6, 1/4, 1/3 and 1/2 of a step, a step, 1/6, 1/4, 1/3 and 1/2 of a beat, a beat and a
  bar.

Hold ⌥ while you drag to ignore the snap for that drag. The snap also decides whether
[recorded notes](midi#how-recorded-notes-are-quantized) are quantized.

## The time selection

The time selection is a red range on the ruler. While you're in pattern mode, playback loops it.

- **Select a range**: double-click the ruler and drag, or ⌘-drag on it. The notes that start in the range are selected
  too.
- **Clear it**: double-click the ruler without dragging, or right-click it. That also deselects the notes it selected.
- <kbd>⌘Enter</kbd> makes the time selection the span of the selected notes (or of every note).
- <kbd>⌘←</kbd> and <kbd>⌘→</kbd> move the time selection back or forward by its own length and select the notes
  in its new place. Use them to step through a pattern a section at a time.
- <kbd>⌘D</kbd> clears it along with the selection.

The range snaps to the grid; hold ⌥ for none. Closing the Piano roll stops looping it.

In song mode, the loop is [the Playlist](playlist)'s time selection instead.

## The ruler

- **Click or drag** on the ruler to set where play starts. If the song is playing, it jumps there.
- **Double-click and drag**, or **⌘-drag**, to make a [time selection](#the-time-selection).
- **Double-click** or **right-click** to clear the time selection.

## Zoom and scroll

| Do this | To |
| --- | --- |
| Scroll | Move up and down the keyboard |
| ⇧-scroll, or scroll sideways | Move along time |
| ⌘-scroll, or pinch | Zoom in time around the pointer |
| ⌘- or ⌥-scroll over the keyboard | Make the rows taller or shorter |
| Middle-drag | Pan |
| ⌘-middle-drag, or middle-drag on the keyboard | Make the rows taller or shorter |
| ⌘-right-click | Zoom to the selection (or every note); again to go back |
| <kbd>PageUp</kbd> / <kbd>PageDown</kbd> | Zoom in or out |
| <kbd>⇧1</kbd> <kbd>⇧2</kbd> <kbd>⇧3</kbd> | Show 1, 4 or 16 bars |
| <kbd>⇧4</kbd> | Show every note |
| <kbd>⇧5</kbd> | Show the time selection |
| <kbd>⇧0</kbd> | Centre on the playhead (or where play starts) |

Double-click the vertical scrollbar to bring the rows back to their usual height.

## Quantize

Quantizing pulls notes onto the grid. The grid is the snap, or a step when the snap is off.

- <kbd>⌃Q</kbd> **Quick quantize**: each note's start and end go to the nearest grid line. A note so short it would
  vanish keeps one grid cell.
- <kbd>⇧Q</kbd> **Quantize start times**: the starts go to the grid, and each note keeps its length.
- <kbd>⌥Q</kbd> **Quantize…**: opens the Quantizer.

### The Quantizer

The Quantizer quantizes part of the way, and shows and plays the result while it's open.

1. Select the notes, or select none to quantize them all.
2. Press <kbd>⌥Q</kbd>, or choose **Tools › Quantize…**.
3. Set the grid and the knobs. The Piano roll shows the result as you turn them, and plays it if the song is playing.
4. Click **Accept**. To leave the notes as they were, close the window or press <kbd>Escape</kbd>.

| Control | What it does |
| --- | --- |
| Grid | The grid to quantize to: the Piano roll's snap, or a length of its own. |
| START | How far each note's start moves towards the grid. |
| SENS | Only notes this close to a grid line move. All the way up, every note moves. |
| DUR | How far ends or lengths move towards the grid, when they're quantized. |
| SWING | Pushes every second grid line later. |
| Note ends | **Leave duration**, **Leave end time**, **Quantize end time** or **Quantize duration**. |

A line under the controls says how many notes will move. **Reset** puts the controls back as they start. Accept is one undo step. The Quantizer keeps its settings for the next time you open it.

## Chop

Chopping cuts notes into shorter ones.

- <kbd>⌘U</kbd> **Quick chop**: cuts each note into pieces the length of the snap.
- <kbd>⌥U</kbd> **Chop…**: opens the Chopper.

### The Chopper

The Chopper cuts notes in a rhythm, with accents and panning, and plays the result while it's open.

1. Select the notes, or select none to chop them all.
2. Press <kbd>⌥U</kbd>, or choose **Tools › Chop…**.
3. Pick a pattern and set the knobs. The Piano roll shows and plays the result as you go.
4. Click **Accept**. The pieces are selected. Close the window or press <kbd>Escape</kbd> to leave the notes as they
   were.

| Control | What it does |
| --- | --- |
| Pattern | The rhythm: **Default** cuts pieces the snap long, as Quick chop does. The others include Triplets, Dotted, Gallop, 3-3-2, Trap roll, Stutter, Ramp, Gate and Ping-pong. Each shows a hint in the menu. |
| Time mul | Makes the pattern slower or faster, from ×1/4 to ×4. |
| PAN | How much of the pattern's panning the pieces get. |
| VEL | How much of the pattern's accents the pieces get. |
| Absolute pattern | On, the rhythm counts from the pattern's start. Off, it counts from each note's start. |

The rhythm is measured on the snap. If the Chopper says the pattern is too fast, turn **Time mul** left or pick a
coarser snap. The Chopper keeps its settings for the next time you open it.

## Glue, legato and lengths

- <kbd>⌘G</kbd> **Glue**: notes of the same pitch that touch or overlap become one note. It keeps the first note's
  velocity and pan.
- <kbd>⌘L</kbd> **Quick legato**: each note is held until the next one starts. Notes that start together (a chord)
  end together.
- <kbd>⇧D</kbd> **Discard lengths**: every note becomes the snap's length (or a tick long with the snap off). Handy
  for drums and one-shots.

## The Tools menu

The wrench on the title bar. Each item works on the selection, or on every note when nothing is selected.

| Item | Key |
| --- | --- |
| Chop… | <kbd>⌥U</kbd> |
| Quick chop | <kbd>⌘U</kbd> |
| Glue | <kbd>⌘G</kbd> |
| Quick quantize | <kbd>⌃Q</kbd> |
| Quantize start times | <kbd>⇧Q</kbd> |
| Quantize… | <kbd>⌥Q</kbd> |
| Quick legato | <kbd>⌘L</kbd> |

## The event editor

The event editor under the grid shows a bar for each note: its velocity, or its pan.

- Click the lane's label, or press <kbd>F</kbd>, to switch between **Velocity** and **Pan**.
- **Drag across** the lane to draw values. Each note you pass takes the height of the pointer. If notes are
  selected, only they change.
- **⇧-drag** gives every note you sweep the same value: the height where you pressed.
- **⌥-drag** resets the notes you sweep: velocity to the default, pan to the centre.
- **Drag a bar's top** up or down to set that note alone. It selects the note.
- Press near a note's start and drag up or down to set it. Notes that start at the same moment (a chord) change
  together.
- Drag the lane's top edge to make it taller or shorter, and double-click that edge for its usual height.
- <kbd>⇧Enter</kbd> shows or hides the lane.

You can also change velocity on the grid: hold ⌥ and scroll over a note. It changes by 2% a notch, or 0.5% with ⌘ as
well. If the note is selected, the whole selection changes. A run of turns is one undo step.

## Note properties

Double-click a note to open its properties.

- **VEL** and **PAN** knobs set its velocity and pan.
- **Start time** (bar:step:tick, counted from 1) and **Duration** (bar:step:tick) set where it is and how long.

Click **Accept** or press <kbd>Enter</kbd> to keep the change. <kbd>Escape</kbd> or **Cancel** leaves it.

If the note you double-click is part of a selection, the window says how many more notes there are, and only VEL and
PAN show: they apply to all of them.

## Ghost notes

Ghost notes are the other channels' notes in the same pattern, drawn faintly behind this channel's. They help you
write a bass line against the kick, or a melody against the chords.

- Click the ghost notes switch on the title bar, or press <kbd>⌥V</kbd>, to show or hide them. They're on by
  default.
- Double right-click a ghost note to switch to its channel.

## The target channel

The window's title names the channel whose notes you're editing. Click it to pick another: the channels with notes in
this pattern come first, then the others.

| Key | Switches to |
| --- | --- |
| <kbd>G</kbd> / <kbd>K</kbd> | The channel above or below in the rack |
| <kbd>H</kbd> / <kbd>J</kbd> | The previous or next channel that has notes in this pattern |

You can drop a sample from [the Browser](browser) onto the Piano roll. If the target channel is a sampler, the sample
replaces its own. Otherwise a new channel is made for it and shown.

## The song's scale

The **Scale** menu (the note icon) lights the notes of a scale on the grid. While a scale is set, notes you draw and
move land on its notes: each goes to the nearest note of the scale, the lower one when two are as near. Moving notes
only in time doesn't change their pitch.

1. Click the **Scale** menu.
2. Pick a scale, then its root (C to B).

Choose **None** to turn it off. Hold ⌥ while drawing or moving to put a note anywhere.

The scale belongs to the song, not to the channel: it's saved with the song and shows on every channel. Changing it is
a step you can undo.

## The Stamp

The **Stamp** places a whole chord with one click.

1. Click the **Stamp** menu and pick a chord. The Piano roll switches to Draw.
2. Click the grid. The note you click is the chord's lowest note.
3. Keep the button down and drag to move the chord before you let go.

The menu has fixed chords (major, minor, sevenths, ninths, suspended chords and more) and two that follow
[the song's scale](#the-songs-scale): **Triad of the scale** and **Seventh of the scale**. These build the chord from
the scale's own notes, so they fit the key wherever you click. With no scale set, they use a major scale on the note
you click.

Pick **None (a note)** to go back to drawing single notes.

## Every key

These work while the Piano roll is the window in front.

| Key | Does |
| --- | --- |
| <kbd>P</kbd> <kbd>B</kbd> <kbd>D</kbd> <kbd>T</kbd> <kbd>C</kbd> <kbd>E</kbd> <kbd>Z</kbd> <kbd>Y</kbd> | Draw, Paint, Delete, Mute, Slice, Select, Zoom, Playback |
| <kbd>⌘A</kbd> | Select every note |
| <kbd>⌘D</kbd> | Deselect, and clear the time selection |
| <kbd>⇧I</kbd> | Invert the selection |
| <kbd>⌘C</kbd> <kbd>⌘X</kbd> <kbd>⌘V</kbd> | Copy, cut, paste |
| <kbd>⌘B</kbd> | Duplicate to the right |
| <kbd>Delete</kbd> | Delete the selected notes |
| <kbd>⌃Q</kbd> | Quick quantize |
| <kbd>⇧Q</kbd> | Quantize start times |
| <kbd>⌥Q</kbd> | The Quantizer |
| <kbd>⌘U</kbd> | Quick chop |
| <kbd>⌥U</kbd> | The Chopper |
| <kbd>⌘G</kbd> | Glue |
| <kbd>⌘L</kbd> | Quick legato |
| <kbd>⇧D</kbd> | Discard lengths |
| <kbd>⌥M</kbd> / <kbd>⇧⌥M</kbd> | Mute / unmute |
| <kbd>⇧←</kbd> <kbd>⇧→</kbd> | Move by a snap unit |
| <kbd>⌥←</kbd> <kbd>⌥→</kbd> | Move by a tick |
| <kbd>⇧↑</kbd> <kbd>⇧↓</kbd> | Move a semitone |
| <kbd>⌘↑</kbd> <kbd>⌘↓</kbd> | Move an octave |
| <kbd>⇧⌘←</kbd> <kbd>⇧⌘→</kbd> | Rotate within the pattern |
| <kbd>⌘←</kbd> <kbd>⌘→</kbd> | Move the time selection by its length |
| <kbd>⌘Enter</kbd> | Time selection around the notes |
| <kbd>F</kbd> | Velocity or pan in the event editor |
| <kbd>⇧Enter</kbd> | Show or hide the event editor |
| <kbd>⌥V</kbd> | Ghost notes on or off |
| <kbd>G</kbd> <kbd>K</kbd> | Channel above, below |
| <kbd>H</kbd> <kbd>J</kbd> | Previous, next channel with notes here |
| <kbd>PageUp</kbd> <kbd>PageDown</kbd> | Zoom in, out |
| <kbd>⇧1</kbd> to <kbd>⇧5</kbd>, <kbd>⇧0</kbd> | Zoom presets, centre on the playhead |
| <kbd>Escape</kbd> | Close the Piano roll |

The app's own keys still work with the Piano roll in front: <kbd>Space</kbd> to play, <kbd>⌘Z</kbd> and
<kbd>⇧⌘Z</kbd> to undo and redo, <kbd>L</kbd> for pattern or song mode, <kbd>R</kbd> to record, <kbd>⌘T</kbd> for
[the typing keyboard](midi#the-typing-keyboard), <kbd>⌘S</kbd> to save, and <kbd>F5</kbd> to <kbd>F9</kbd> for the
other windows. While the typing keyboard is on, the letter keys play notes instead of choosing tools. See
[Shortcuts](shortcuts) for the rest.
