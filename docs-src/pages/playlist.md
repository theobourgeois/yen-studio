---
title: Playlist
description: Arrange your song. Tracks, pattern, audio and automation clips, the tools and their keys, the Picker, slicing, stretching and consolidating.
---

The Playlist is where a song is put together. It's a stack of numbered tracks, and on them go clips: pattern clips
(the notes and steps of a pattern), audio clips (a sound file) and automation clips (a control's curve, see
[Automation](automation)). Any clip goes on any track. Press <kbd>F5</kbd> to show or hide it.

![The Playlist, with pattern clips and audio clips on its tracks](shot:playlist)

## Song mode and pattern mode

The PAT / SONG switch in the toolbar says what <kbd>Space</kbd> plays. PAT plays the pattern shown in the
[Channel rack](channel-rack), looped. SONG plays the Playlist. Press <kbd>L</kbd> to switch between them. A song that
already has clips opens in song mode.

In song mode, play loops the whole song, up to the end of its last clip's bar. Make a [time selection](#select-a-stretch-of-time)
and it loops that instead.

Automation clips play in song mode only.

## Put clips on the Playlist

The window's heading reads **Playlist › name**. That name is the *clip source*: what Draw and Paint add. Click the
heading to pick another pattern, audio clip or automation clip from its menu.

1. Pick what to add: from the heading's menu, or by clicking it in the [Picker](#the-picker).
2. Pick the Draw tool (<kbd>P</kbd>) and click an empty spot on a track. The clip goes at the start of the grid cell
   you clicked. Keep the button down and drag to move it before you let go.
3. To lay several in a row, use the Paint tool (<kbd>B</kbd>) and drag along the track. Holding <kbd>⇧</kbd> with Draw
   paints too.

Left-click adds. Right-click deletes: right-click a clip, or hold the right button and sweep across several.
Right-clicking where there's nothing deselects.

::clip song

You can also drag straight onto a track:

- Drag a pattern, audio clip or automation clip from the Picker. You see it where it will land. Drag several at once and
  they land on tracks one under another. What you drop is selected, and the first one becomes the clip source.
- Drop sound files from the [Browser](browser) or Finder. Each becomes an audio clip, one per track going down. Hold
  <kbd>⇧</kbd> as you drop to lay them one after another on a single track instead.

Hold <kbd>⌥</kbd> while you drag to place it off the grid.

Clicking a clip with Draw or Paint makes it the clip source, so the next one you add is the same.

## Move, copy and resize clips

With Draw or Paint:

- **Move:** drag a clip. If it's part of the selection, the whole selection moves with it.
- **Copy:** <kbd>⇧</kbd>-drag a clip.
- **Resize:** drag a clip's left or right edge.
- **Change track only:** hold <kbd>⌘</kbd> while you move, and the clips keep their place in time.
- **Off the grid:** hold <kbd>⌥</kbd>.

Double-click a clip to open what it plays. A pattern clip opens the [Piano roll](piano-roll) on the channel with the
most notes in it, or the Channel rack if the pattern only has steps. An audio clip opens its channel's settings. An
automation clip opens its window.

## The tools

The tool buttons are in the Playlist's toolbar. Each has a key, which works while the Playlist is the window in front.

| Tool | Key | What it does |
| --- | --- | --- |
| Draw | <kbd>P</kbd> | Click to add a clip of the clip source. Drag clips to move them, their edges to resize. |
| Paint | <kbd>B</kbd> | As Draw, but dragging along a track lays clip after clip. |
| Delete | <kbd>D</kbd> | Click or sweep to delete clips. |
| Mute | <kbd>T</kbd> | Click or sweep to mute or unmute clips. Everything you sweep over ends up the same. |
| Slip | <kbd>S</kbd> | Drag to slide what's inside a clip while the clip stays put. |
| Slice | <kbd>C</kbd> | Drag down across clips to cut them. See [Slice clips](#slice-clips). |
| Select | <kbd>E</kbd> | Click a clip to select it, or drag a rectangle. <kbd>⇧</kbd> adds to the selection. |
| Zoom | <kbd>Z</kbd> | Drag a rectangle to zoom into it. Click to zoom out. Right-click to go back and forth. |
| Playback | <kbd>Y</kbd> | Press and hold to play the song from there. It stops when you let go. |

A few work with any tool:

- <kbd>⌘</kbd>-click or <kbd>⌘</kbd>-drag selects, as the Select tool does.
- <kbd>⌥</kbd>-right-click plays the song from there.
- Double right-click switches to the Mute tool.
- <kbd>⌘</kbd>-right-drag zooms into a rectangle. <kbd>⌘</kbd>-right-click goes back.

## Get around

- **Scroll up and down** the tracks with the wheel. Hold <kbd>⇧</kbd>, or scroll sideways, to move along the song.
- **Zoom** with <kbd>⌘</kbd> and the wheel, or a pinch, around the pointer. <kbd>Page Up</kbd> and
  <kbd>Page Down</kbd> zoom around the middle.
- **Make tracks taller or shorter** with <kbd>⌘⌥</kbd> and the wheel, or <kbd>⌘</kbd> and a middle-button drag.
- **Pan** by dragging with the middle button, or by <kbd>⇧</kbd>-right-dragging.
- **The overview** along the top shows the whole song. Drag it to scroll; drag its ends to zoom.
- **The scrollbar** on the right scrolls the tracks. Drag its ends to change the tracks' height.

Keys for jumping to a view:

| Key | View |
| --- | --- |
| <kbd>⇧1</kbd> | 4 bars across |
| <kbd>⇧2</kbd> | 16 bars across |
| <kbd>⇧3</kbd> | 64 bars across |
| <kbd>⇧4</kbd> | The whole song |
| <kbd>⇧5</kbd> | The time selection |
| <kbd>⇧0</kbd> | Centre on the playhead |
| <kbd>Home</kbd> | Back to the song's start |

While the song plays, the view follows the playhead a page at a time. The playhead turns red while you record.

## Snap

The magnet in the toolbar sets what clips snap to. **Line** and **Cell** follow the grid you see, which gets finer as
you zoom in. The others are fixed: from a sixth of a step up to a whole bar, or **(none)**. Hold <kbd>⌥</kbd> while
you drag to ignore the snap for that drag.

## Select and edit

Most commands act on the selected clips. With nothing selected, they act on every clip.

| Key | What it does |
| --- | --- |
| <kbd>⌘A</kbd> | Select all |
| <kbd>⌘D</kbd> | Deselect (the clips and the time selection) |
| <kbd>⇧I</kbd> | Invert the selection |
| <kbd>⇧C</kbd> | Select every clip like the selected ones |
| <kbd>⌘C</kbd> / <kbd>⌘X</kbd> / <kbd>⌘V</kbd> | Copy, cut, paste |
| <kbd>⌘B</kbd> | Duplicate, to the right |
| <kbd>⌫</kbd> | Delete |
| <kbd>⌥M</kbd> / <kbd>⌥⇧M</kbd> | Mute / unmute |
| <kbd>⌃Q</kbd> | Quick quantize: start times onto the snap |
| <kbd>⇧←</kbd> / <kbd>⇧→</kbd> | Nudge by the snap |
| <kbd>⇧↑</kbd> / <kbd>⇧↓</kbd> | Move a track up or down |
| <kbd>⌘⌥C</kbd> | [Consolidate](#consolidate-clips-into-audio) |

Paste puts the clips at the first bar in view, on the tracks they came from, and selects them. Duplicate puts the copy
straight after, selects it, and moves the time selection along with it, so pressing <kbd>⌘B</kbd> again carries on.

The **Edit** menu (the arrow at the start of the toolbar) has the same commands, for when you'd rather click.

## Select a stretch of time

The ruler along the top is where play starts from. Click or drag in it to set that. If the song is playing, it jumps
there straight away.

To select a stretch of time, <kbd>⌘</kbd>-drag in the ruler, or double-click and drag. A time selection:

- loops in song mode,
- selects the clips in it,
- sets where a new automation clip goes.

Double-click the ruler without dragging, or right-click it, to clear it.

With a time selection:

| Key | What it does |
| --- | --- |
| <kbd>⌘←</kbd> / <kbd>⌘→</kbd> | Move it by its own length |
| <kbd>⌘Enter</kbd> | Make one around the selected clips |
| <kbd>⌘Insert</kbd> | Insert space: push everything from its start along by its length |
| <kbd>⌘⌥Insert</kbd> | Insert space, cutting clips that cross its start |
| <kbd>⌘⌫</kbd> | Delete space: take that time out and close the gap |

Inserting and deleting space moves the time markers too.

## Time markers

Press <kbd>⌥T</kbd> to add a marker. It goes where the song is: where you hear it while it plays in song mode, or
where play starts from when it doesn't. It's named "Marker 1", "Marker 2" and so on, and you can type a new name
straight away on the ruler.

Markers sit along the bottom of the ruler.

- Click one to play from it.
- Drag it to move it.
- Double-click it to rename it. <kbd>Enter</kbd> keeps the name, <kbd>Esc</kbd> doesn't.
- Right-click it to rename, delete, or turn it into a **Start recording** or **Stop recording** marker. With those,
  a recording keeps only what's between them. See [Recording](recording).

## Slice clips

- **With the Slice tool** (<kbd>C</kbd>): drag down across the clips. The cut goes straight down at the nearest grid
  line, across the tracks you drag over. Hold <kbd>⇧</kbd> to cut every track, top to bottom; you see the line before
  you click. Hold <kbd>⌥</kbd> to cut off the grid.
- **With a key:** point at a clip and press <kbd>Insert</kbd>. It's cut at the nearest grid line.
- **Into even pieces:** a clip's menu has **Chop**: every bar, every beat, every step, or at the snap. The pieces are
  selected.

Every piece is still a clip of the same pattern or sound. Use the Slip tool to change which part each one plays.

## Track headers

Each track has a header on the left with its name and a mute light.

- **Mute:** click the light, or the header around the name. **Solo:** right-click the light, or <kbd>⌘</kbd>-click it.
  <kbd>⌘</kbd>- or <kbd>⌥</kbd>-click on the header solos too.
- **Rename:** double-click the name.
- **Height:** drag the line under the track. <kbd>⌥</kbd>-click the line to reset it.

Right-click the name for the track's menu: rename and colour, size (50% to 300%), select its clips, mute or unmute all
its clips, solo, insert a track, move it up or down, or delete it (with its clips). **Consolidate this track** renders
its clips into audio on the same track.

**Audio track** makes the track record from a mixer track's input. It then shows an arm button and, when it's tall
enough, which mixer track and input it uses: click that to open the [Mixer](mixer) on it. See [Recording](recording).

## The Picker

Press <kbd>⌥P</kbd> to show or hide the Picker panel, on the Playlist's left. Its tabs list the song's **Patterns**,
**Audio clips** and **Automation clips**, each with a little picture of what it plays.

- Click one to make it the clip source. Clicking a pattern also shows it in the Channel rack.
- Drag one onto a track to place it.
- <kbd>⌘</kbd>-click to select several, <kbd>⇧</kbd>-click for a range.
- Double-click a pattern to show it in the Channel rack, an audio clip to select its channel, an automation clip to
  open its window.
- <kbd>⌥↑</kbd> and <kbd>⌥↓</kbd> move the selected patterns up and down the list.

Right-click a pattern for: transpose, rename, clone, split by channel, move up or down, and delete. Right-click an
audio clip or an automation clip to open its settings or delete it.

Deleting something in the Picker deletes its clips from the Playlist too. Delete every pattern and you're left with an
empty Pattern 1.

## The clip menu

Every clip has a small arrow at the start of its title. Click it, with any tool, for the clip's menu.

- **Preview:** hold it to hear the clip on its own.
- **Edit pattern**, **Channel settings** or **Automation settings:** open what the clip plays.
- **Rename and color…** and **Change color:** for what it plays, so every clip of it changes. A clip takes the colour
  of what it plays, or else its track's.
- **Make unique:** see [below](#make-unique).
- **Split by channel** (a pattern clip): see [below](#split-by-channel).
- **Chop:** cut it into even pieces.
- **Consolidate**, **Render as audio clip**, and on a rendered clip **Re-render** and **Unconsolidate:** see
  [Consolidate](#consolidate-clips-into-audio).
- **Select all similar clips**, **Mute** or **Unmute**, **Delete.**

An audio clip's menu also has **Stretch**, **Detect tempo**, **Automate** (volume or panning, see
[Automation](automation#automate-an-audio-clips-volume-or-pan)), **Reset fades and gain**, and
[Extract stems… and Convert to notes…](stems-and-notes).

An automation clip's menu has **Tools**, the same as in [its window](automation#the-automation-clips-window).

## Make unique

Every clip of a pattern plays that same pattern: change the notes and every copy changes. When you want one to be
different, use **Make unique** from its clip menu. That clip gets its own copy of the pattern, named "Pattern 1 #2" and
so on, and the others are left alone.

It works the same for an automation clip: it gets its own copy of the curve.

For an audio clip it's **Make unique as sample**: the clip gets a channel of its own, playing the same file. Then its
channel's settings (pitch, volume, stretch) are its own.

## Split by channel

A pattern can play several channels at once: a whole drum kit, say. **Split by channel** turns it into one pattern per
channel, and its clips on the Playlist are split the same way, each on a track. It's one step of undo.

It's in a pattern clip's menu, in the Playlist heading's menu when the clip source is a pattern, and in the Picker.

## Audio clips

### Fades and gain

An audio clip has small handles on its body:

- **Fades:** drag the corner at the top left along the clip for a fade-in, the top right for a fade-out.
- **Fade curves:** once a fade is long enough, drag the middle of its curve up or down to bend it.
- **Gain:** drag the half-circle in the middle of the clip's bottom edge up or down. It goes up to +36 dB; drag it
  far enough down and the clip is silent.

If several clips are selected, they all change alike. **Reset fades and gain** in the clip menu takes them back.

### Stretch

By default, a clip's edge resizes it. Turn on **Stretch** in the toolbar (<kbd>⇧M</kbd>) and dragging an audio
clip's edge stretches its sound to fit instead.

The clip menu's **Stretch** has more:

- **Mode:** **Stretch** keeps the pitch. **Resample** plays it faster and higher, or slower and lower, as a record
  would.
- **Reset pitch, keep speed:** back to the pitch it was recorded at, at the speed it plays now.
- **Time:** **None** (the file at its own speed), **Autodetect**, **Project tempo** (it sounds as it does now, then
  follows the song's tempo), a length in beats or bars, **Twice as long** or **Half as long**.
- **Follow its channel's:** once a clip has a stretch of its own, this gives it back the channel's.

If selected clips include the one you clicked, the selection changes with it.

A stretched clip follows the song's tempo: change the tempo and it keeps time. A channel's pitch makes its audio clips
higher or lower, never faster.

### Detect tempo

**Detect tempo** in an audio clip's menu listens to its file, works out its tempo, and stretches it to the song's.
You see the tempo it heard. A file that's too short to tell is left as it was.

## Consolidate clips into audio

Consolidating renders clips into audio clips that sound the same.

1. Select the clips. With nothing selected, <kbd>⌘⌥C</kbd> asks you to select some first.
2. Press <kbd>⌘⌥C</kbd>, or pick **Consolidate** from a clip's menu.

You get one audio clip per mixer track the clips play into, in their place. The clips you rendered go inside it, so
nothing is lost. The sound is as it reaches its mixer track, before that track's effects: the instrument and the
channel's volume and pan are in it; the track's effects, fader, pan and sends aren't, and still apply when it plays
back into the same track.

On a consolidated clip:

- **Re-render** renders the clips inside it again, as their patterns and instruments are now. Its copies and slices
  all play the new sound.
- **Unconsolidate** puts back the clips it was made from, wherever the clip has moved to. If you trimmed it, you get
  only the part inside.

**Render as audio clip** is the same render, but it leaves your clips as they are and puts the audio on the first
free tracks below. The new clip starts where the first clip does.

**Consolidate this track**, in a track's menu, does it for every clip on that track.

## Keys at a glance

These work while the Playlist is the window in front. <kbd>⌘</kbd> is Ctrl on Windows. See [Shortcuts](shortcuts)
for the rest of the app.

| Key | What it does |
| --- | --- |
| <kbd>P</kbd> <kbd>B</kbd> <kbd>D</kbd> <kbd>T</kbd> <kbd>S</kbd> <kbd>C</kbd> <kbd>E</kbd> <kbd>Z</kbd> <kbd>Y</kbd> | Draw, Paint, Delete, Mute, Slip, Slice, Select, Zoom, Playback |
| <kbd>⌥P</kbd> | Picker panel |
| <kbd>⇧M</kbd> | Stretch on or off |
| <kbd>⌥T</kbd> | Add a time marker |
| <kbd>Insert</kbd> | Slice the clip under the pointer |
| <kbd>⌃Q</kbd> or <kbd>⇧Q</kbd> | Quick quantize |
| <kbd>Esc</kbd> | Close the Playlist |
