---
title: Coming from FL Studio
description: What works the way FL Studio does, what's different, FL's keys on a Mac, and what Yen Studio can't do yet.
---

If you know FL Studio, you already know most of Yen Studio. The Channel rack, the Piano roll, the Playlist and the Mixer are laid out the way FL lays them out, and they take FL's clicks and most of its keys. This page is for the rest: the keys on a Mac, the places Yen Studio works differently, and what isn't there yet.

> **Note:** Yen Studio can't open FL Studio projects (`.flp` files). Start your songs in Yen Studio, or bring your samples over with the [Browser](browser).

## What's the same

- **PAT / SONG.** <kbd>L</kbd> switches. Pattern mode loops the pattern shown in the rack; song mode plays the Playlist.
- **The Channel rack.** Click a step to turn it on, right-click to turn it off, and drag to paint either way. A channel's button opens its settings. <kbd>1</kbd> to <kbd>0</kbd> mute the first ten channels and <kbd>⌘1</kbd> to <kbd>⌘0</kbd> solo them.
- **Knobs.** Drag to turn, hold <kbd>⌘</kbd> for fine moves, and ⌥-click to reset. Right-click for Reset, Copy value, Paste value and Type in value.
- **The Piano roll and the Playlist tools,** on FL's letters: Draw <kbd>P</kbd>, Paint <kbd>B</kbd>, Delete <kbd>D</kbd>, Mute <kbd>T</kbd>, Slice <kbd>C</kbd>, Select <kbd>E</kbd>, Zoom <kbd>Z</kbd> and Playback <kbd>Y</kbd>. The Playlist adds Slip <kbd>S</kbd>. Click adds, right-click deletes, and <kbd>⇧</kbd>-drag clones.
- **The Playlist.** Tracks aren't tied to channels. Pattern, audio and automation clips go on any track, and the Picker holds patterns, audio clips and automation clips.
- **The Mixer.** Inserts beside the master, effect slots, sends, routing, and <kbd>⌘L</kbd> to give the selected channels free mixer tracks.
- **The toolbar.** The transport, the tempo and position displays, the pattern selector and the hint bar are where FL keeps them. See [Windows and the toolbar](workspace).
- **Export.** <kbd>⌘R</kbd> exports a WAV and <kbd>⇧⌘R</kbd> an MP3. Both ask where to save first, then open the export window.

## FL's keys on a Mac

Yen Studio takes FL Studio's keys, moved onto a Mac keyboard:

- **Ctrl is <kbd>⌘</kbd>.** <kbd>Ctrl</kbd> works too.
- **Alt is <kbd>⌥</kbd>.**
- **The F keys need <kbd>Fn</kbd>** on most Mac keyboards, so the windows have <kbd>⌥</kbd> keys of their own.

| In FL Studio | In Yen Studio |
| --- | --- |
| F5 Playlist | <kbd>⌥1</kbd> (or <kbd>F5</kbd>) |
| F6 Channel rack | <kbd>⌥2</kbd> (or <kbd>F6</kbd>) |
| F7 Piano roll | <kbd>⌥3</kbd> (or <kbd>F7</kbd>) |
| F9 Mixer | <kbd>⌥4</kbd> (or <kbd>F9</kbd>) |
| Alt+F8 Browser | <kbd>⌥5</kbd> (or <kbd>⌥F8</kbd>) |
| F8 Plugin picker | <kbd>F8</kbd>, a new channel |
| F10 Settings | <kbd>⌘,</kbd> |
| Ctrl+S Save | <kbd>⌘S</kbd> |
| Ctrl+Z Undo | <kbd>⌘Z</kbd>, and <kbd>⇧⌘Z</kbd> or <kbd>⌘Y</kbd> to redo |
| Ctrl+R Export WAV | <kbd>⌘R</kbd> |
| Ctrl+Shift+R Export MP3 | <kbd>⇧⌘R</kbd> |
| Ctrl+T Typing keyboard to piano | <kbd>⌘T</kbd> |
| Ctrl+L Assign free mixer tracks | <kbd>⌘L</kbd> |
| Ctrl+B Duplicate | <kbd>⌘B</kbd> |
| Ctrl+Q Quick quantize | <kbd>⌃Q</kbd> (<kbd>⌘Q</kbd> is the Mac's Quit) |
| Alt+Q Quantizer | <kbd>⌥Q</kbd> |
| Ctrl+G Glue notes | <kbd>⌘G</kbd> in the Piano roll |
| Ctrl+U Chop, Alt+U Chopper | <kbd>⌘U</kbd>, <kbd>⌥U</kbd> |
| Shift+M Stretch | <kbd>⇧M</kbd> in the Playlist |
| Alt+P Picker | <kbd>⌥P</kbd> in the Playlist |
| Alt+T Time marker | <kbd>⌥T</kbd> in the Playlist |
| Ctrl+Alt+C Consolidate | <kbd>⌥⌘C</kbd> in the Playlist |
| Ctrl+Shift+←/→ Rotate steps | <kbd>⇧⌘←</kbd> / <kbd>⇧⌘→</kbd> |
| Alt+↑/↓ Move channels | <kbd>⌥↑</kbd> / <kbd>⌥↓</kbd> |
| Alt+C Clone channel | <kbd>⌥C</kbd> |
| Numpad +/− Next and previous pattern | The same, or the **Patterns** menu on a keyboard without a numeric keypad |

A Mac's <kbd>Delete</kbd> key is FL's Backspace, and it deletes the selection in the Piano roll and the Playlist. The full list is on the [Shortcuts](shortcuts) page.

### Keys in a plugin's window

While one of your plugins' windows is in front, it gets your keys first. The keys it doesn't use, such as <kbd>Space</kbd>, <kbd>F6</kbd>, <kbd>F7</kbd>, <kbd>⌘Z</kbd> and <kbd>⇧⌘Z</kbd>, go on to Yen Studio.

## What's different

### Windows

Every panel is a window, as in FL, but there's no docking: the windows float over the desktop. Drag one to the top to fill the desktop, or to a side to fill half of it. The Browser stays against the left edge. See [Windows and the toolbar](workspace).

Your plugins open in a window of their own, over Yen Studio's. Its title bar has the plugin's presets and a button for the channel's settings, which hold FL's wrapper controls: ON, PAN, VOL, PITCH and TRACK. PITCH moves the notes by whole semitones, whatever the plugin's own bend range. See [Plugins](plugins).

### Settings

There's no F10. Open Settings with <kbd>⌘,</kbd> or the gear on the toolbar. It floats over the song, which keeps playing, and the keys you press in it are its own: <kbd>Space</kbd> doesn't play. Audio devices, MIDI inputs and the rest are under **Music**. See [Settings](settings).

### The Channel rack

- The channel groups are fixed: **Unsorted** (every channel but the Playlist's audio clips), **Audio** and **All**.
- Turning a step off removes its note. There's no "Mute removed steps".
- Swing is the song's, on the rack. A sampler's settings have a **SWING** knob for how much of it that channel takes.
- Your plugins are found in the **Plugin manager**: click **More plugins…** in the plugin picker and star the ones you use. The picker lists our instruments and effects and the plugins you've starred.

### The Piano roll

- <kbd>Backspace</kbd> deletes, as <kbd>Delete</kbd> does. It doesn't toggle the snap.
- The Paint tool lays notes over what's already there, rather than replacing them.
- Notes resize from their right edge only.
- Each window has its own snap. There's no global snap.

### The Playlist

- Clips resize from either edge.
- <kbd>⇧</kbd> with the Slice tool cuts every track at once, straight down.
- Consolidate renders each mixer track's clips before that track's effects, so the mixer stays live. Its menu's **Unconsolidate** gives the clips back.
- Stretching has the Resample and Stretch modes, not FL's others.

### The Mixer

- Solo follows the routing: soloing a track keeps on what it sends into. Each strip has an **S** button, and a track can be solo safe.
- Plugin delay compensation is always on. There's no switch for it.
- <kbd>⌘G</kbd> routes the selected tracks to a new bus.
- Mixer tracks have no built-in EQ. Put [Y-EQ](y-eq) in a slot.

### The Browser

- It shows your own folders and nothing else: no plugins, presets or bundled kits. Drag a folder from Finder onto it to add it.
- The search works as you type, across every folder, in a flat list.
- <kbd>⇧↑</kbd> and <kbd>⇧↓</kbd> audition the next file in the selected channel, as in FL.

See [the Browser](browser).

### Automation

- Automation clips live in the Playlist's Picker, on its automation tab, not in the Channel rack.
- Automation plays only in song mode.
- ⌥-click deletes a point. A Mac has no right ⌥ to tell apart.
- To automate a control in one of our effects or your plugins, touch it, then click **Automate "…"** in the window's title bar.

See [Automation](automation).

### Recording and MIDI

- Audio is recorded from the dry input only.
- **Record** switches to song mode. There's no recording in pattern mode.
- Takes are always 32-bit float.
- Every MIDI input plays unless you turn it off in **Settings › Music**.
- The typing keyboard has the Piano layout only. <kbd>[</kbd> and <kbd>]</kbd> move it an octave.

See [Recording](recording) and [MIDI](midi).

### Export

- You can keep working on the song while it exports. What's exported is the song as it was when you started the export.
- The tail can ring out, be cut, or wrap round to the start so the export loops.
- Stems can be in any of the formats, not only WAV.
- **Keep it from clipping** is on at first: a mix that goes over full scale is turned down rather than clipped.

See [Export](export).

![The Mixer, with its tracks, sends and effect slots](shot:mixer "The Mixer.")

## What isn't there yet

Yen Studio is pre-alpha. These are some of the FL Studio features it doesn't have yet:

- Opening `.flp` projects.
- A Windows version.
- Arrangements and performance mode in the Playlist.
- Crossfades and reversing a single audio clip.
- Slide and portamento notes.
- Cut groups, polyphony settings and the arpeggiator in a channel's settings.
- Zipping channels, and channel groups of your own.
- Edit events and Link to controller on a knob's menu.
- Uploading an export to SoundCloud.

If something you rely on in FL Studio is missing, [tell us on GitHub](https://github.com/theobourgeois/yen-studio/issues).
