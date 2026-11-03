---
title: Windows and the toolbar
description: How Yen Studio's windows move, snap and fill the screen, and what each part of the toolbar, the menu bar and the tab strip does.
---

Every part of Yen Studio is a window that floats over the desktop: the Channel rack, the Piano roll, the Playlist, the Mixer, the Browser, the Sampler and your plugins. The toolbar runs across the top, with the menus at its left and the song's name and the hint bar below them. This page covers the windows first, then the toolbar, then the menus and tabs around them.

![Yen Studio with the toolbar along the top and its windows open under it](shot:hero "The toolbar along the top, the windows under it.")

## Open a window

Each window has a button on the toolbar's second row, and a key:

| Window | Key | Also |
| --- | --- | --- |
| [Playlist](playlist) | <kbd>⌥1</kbd> | <kbd>F5</kbd> |
| [Channel rack](channel-rack) | <kbd>⌥2</kbd> | <kbd>F6</kbd> |
| [Piano roll](piano-roll) | <kbd>⌥3</kbd> | <kbd>F7</kbd> |
| [Mixer](mixer) | <kbd>⌥4</kbd> | <kbd>F9</kbd> |
| [Browser](browser) | <kbd>⌥5</kbd> | <kbd>⌥F8</kbd> |

The keys open a window, or close it if it's open. A toolbar button only opens its window, or brings it to the front if it's open already. The same windows are in the **Window** menu.

> **Tip:** On most Mac keyboards the F keys need <kbd>Fn</kbd>. The <kbd>⌥</kbd> keys don't.

The Piano roll shows the selected channel's notes. Click a channel's button in the rack to open its own window: the Sampler's settings, or your plugin.

## Move and arrange windows

- **Move a window** by dragging its title bar. Its edges stick to the edges of the desktop and of other windows, so they line up. Hold <kbd>⌥</kbd> while you drag to stop them sticking.
- **Bring a window to the front** by clicking anywhere in it.
- **Close a window** with the **×** at the right of its title bar.

### Resize, maximise and half the screen

Most windows can be resized. The Channel rack is the exception: it doesn't maximise or fill half the desktop.

- **Resize** a window by dragging any of its edges or corners.
- **Fill the desktop** by double-clicking the title bar, clicking the maximise button beside the **×**, or dragging the window to the top of the desktop. Double-click the title bar again, or click the restore button, to put it back.
- **Fill half the desktop** by dragging the window to its left or right edge.

While you drag to an edge, an outline shows where the window will go. Drag a window away from the top or a side and it goes back to its own size.

The Piano roll, the Playlist and the Mixer open filling the desktop. Double-click the title bar to make one a smaller window.

### The Channel rack's corner

Double-click the Channel rack's title bar to send it to the corner of the desktop, out of the way. Double-click it again to bring it back.

## The toolbar

From left to right, the toolbar's first row has the menus, the transport, the tempo and position, the recording switches, the main volume and two graphs. Undo, redo, Settings, Export and the assistant are at its end.

The second row starts with the song's name and the hint bar. Then come the window buttons, the pattern selector and the song position slider.

In a narrow window, some of the toolbar is hidden to make room. Widen the window to see it all again.

### Play, pause and stop

- **PAT / SONG** chooses what plays. The lit one is what you hear: **PAT** loops the pattern shown in the Channel rack, **SONG** plays the [Playlist](playlist). Click either one, or press <kbd>L</kbd> to switch.
- **Play** starts playing. While it plays, the button becomes **Pause**: click it to stop where you are, and the next play carries on from there.
- **Stop** stops and goes back to where play starts. Click **Stop** again while stopped to silence delays and reverbs that are still ringing.
- <kbd>Space</kbd> plays and stops, from anywhere.

A song that has clips in its Playlist opens in song mode.

### Record

The round **Record** button (<kbd>R</kbd>) turns recording on. While it's on, **Play** records the mixer tracks you've armed and the notes you play on the selected channel. Right-click it for the count-in, loop recording and how recorded notes are quantized. See [Recording](recording).

### Tempo

The tempo display shows the song's tempo in BPM.

- Drag it up or down to change it. The pointer keeps going past the edge of the screen.
- Scroll over it to move it a beat per minute at a time.
- Click it to type a tempo. <kbd>Return</kbd> sets it; <kbd>Esc</kbd> keeps the old one. <kbd>↑</kbd> and <kbd>↓</kbd> nudge it.

Right-click it for more:

- **Tap tempo…**: tap along to the beat, by clicking the pad or pressing any key at least three times, then click **Set tempo**.
- An automation clip for the tempo, so it can change during the song. See [Automation](automation).
- **Make … BPM the default**: new songs start at this tempo. **Reset the default** goes back to 140 BPM.

### Position

The position display shows where play is, or where it will start. Click it to switch between bars, steps and ticks (**B:S:T**) and minutes, seconds and hundredths (**M:S:CS**). Yen Studio remembers which you chose.

### Typing keyboard, count-in and metronome

After the position come three switches:

- **Typing keyboard** (<kbd>⌘T</kbd>) plays the selected channel from your computer's keyboard. <kbd>[</kbd> and <kbd>]</kbd> move it an octave. Its light blinks when a note comes in, from the keyboard or a MIDI controller. See [MIDI](midi).
- **Count-in** (**3·2·1**): while it's on, recording starts after the metronome counts you in. Right-click it to choose how many bars.
- **Metronome** clicks along while the song plays. Right-click it to choose its sound.

### Main volume and the graphs

The **Main volume** knob sets the level of everything the song puts out. Drag it; ⌥-click it to put it back.

The two graphs show the engine's output level and how hard it's working.

### Undo, redo, Settings, Export and the assistant

At the end of the first row:

- **Undo** and **Redo** (<kbd>⌘Z</kbd> and <kbd>⇧⌘Z</kbd>).
- **Settings** (<kbd>⌘,</kbd>).
- **Export** asks where to save, then opens the [export window](export).
- The [assistant](assistant).

### The hint bar

The hint bar, beside the song's name, says what's under the pointer: the name of a control and, often, what it does and its key. Move the pointer over anything you don't recognise and read the hint bar.

### The pattern selector

The pattern selector shows the pattern the Channel rack shows and **PAT** plays.

- Scroll over the name, or drag it up and down, to go through the patterns. Go past the last one for a new, empty pattern.
- Click the arrow for the list of patterns. Pick one, rename it, clone it or delete it.
- Click **+** for a new pattern. Give it a name.

<kbd>+</kbd> and <kbd>−</kbd> on the numeric keypad go to the next and previous pattern. On a keyboard without one, use **Patterns › Next Pattern** and **Previous Pattern**.

### The song position slider

The slider shows where play is in the pattern, or in the song in song mode. Click or drag it to move play there.

## The menu bar

The menus are at the left of the toolbar:

- **File**: New Song, Open…, Find Song… (<kbd>⌘P</kbd>), Save, Save a Copy…, Rename…, Export, Show in Finder, Home and Close Tab.
- **Edit**: Undo, Redo, Cut, Copy, Paste, Delete and Select All, which act on the window in front, and Settings….
- **View**: pattern or song mode, the metronome, the typing keyboard and the Channel rack's track selectors.
- **Patterns**: New Pattern, Clone Pattern, and the next and previous pattern.
- **Tools**: Record and Assign Free Mixer Tracks.
- **Window**: the Playlist, the Channel rack, the Piano roll, the Mixer, the Browser and the Graph editor.

Click a menu to open it. While one is open, move the pointer to another to open that, or press <kbd>←</kbd> and <kbd>→</kbd>.

The Mac's own menu bar, at the top of the screen, has most of the same File and Edit commands, plus the View menu's zoom (<kbd>⌘=</kbd>, <kbd>⌘−</kbd> and <kbd>⌘0</kbd>), full screen (<kbd>⌃⌘F</kbd>) and Help. **Help** shows the data folder and the logs, reports a problem and opens the website.

## The tab strip

Each song you open is a tab in the strip along the top of the window. The Home button starts the strip.

- Click a tab to switch to its song. Only the song in front is open: the others are saved and reopen when you switch.
- Click a tab's **×**, or press <kbd>⌘W</kbd>, to close it.
- Press <kbd>⇧⌘]</kbd> and <kbd>⇧⌘[</kbd>, or <kbd>⌃Tab</kbd> and <kbd>⌃⇧Tab</kbd>, to go through the tabs.
- Press <kbd>⌘P</kbd> to find a song by name and open it.

If you'd rather not have the strip, turn off **Show tabs** in **Settings › General**. The menus then start the window, after the Home button, and <kbd>⌘P</kbd> still switches songs.

## Themes and fonts

Yen Studio has light and dark themes, and some with a look of their own. **System** follows your Mac's light or dark setting. Choose one, and the fonts for text and numbers, in **Settings › General**. See [Settings](settings).
