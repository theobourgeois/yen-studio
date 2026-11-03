---
title: MIDI keyboards
description: Play Yen Studio from a MIDI keyboard or your computer's keys, and record what you play as notes.
---

A MIDI keyboard plays the channel selected in [the Channel rack](channel-rack). Plug it in and play: there's nothing
to set up. Your computer's own keys can do the same with the typing keyboard. Whatever you play, Record can keep as
notes in a pattern.

## Plug in a keyboard

1. Connect your MIDI keyboard or pad controller.
2. Select a channel in the Channel rack by clicking it.
3. Play.

Every MIDI input is used as soon as it's plugged in, and again when you unplug it and plug it back in. You don't need
to turn it on first.

To see your inputs or turn one off, open **Settings** (<kbd>⌘,</kbd>) › **Music** and find [MIDI inputs](settings#midi-inputs). Each input
has a switch, and a line that says what it's doing:

- **Playing the selected channel.** It works.
- **Couldn't be opened: another app may have it.** Quit the other app that's using the keyboard, or turn the keyboard
  off there.
- **Turned off.** Flip its switch to use it again.

Your choice is kept for the next time you open Yen Studio.

> **Tip:** If notes don't play, check the toolbar's typing keyboard button: its light blinks each time a note comes
> in, from a keyboard or from your computer's keys. No blink means the notes aren't reaching Yen Studio.

## Which channel plays

Your keyboard plays **the channel selected in the rack**. If several are selected, it plays the first. If none is,
it plays the channel open in [the Piano roll](piano-roll).

Switching channel in the Piano roll (its title, or <kbd>G</kbd>, <kbd>K</kbd>, <kbd>H</kbd> and <kbd>J</kbd>) selects
that channel in the rack too, so your keyboard follows what you're writing.

A note you're holding stays on the channel it started on. If you select another channel mid-note, the key still ends
the right note when you let go.

The keys you play light up on the Piano roll's keyboard when it shows that channel.

### Samplers and plugins

- **A sampler channel** plays its sample for as long as you hold the key, then its envelope's release. Its pitch
  follows the key you press.
- **A channel with one of your plugins** gets the notes as MIDI. If you've moved the channel's pitch knob, the keys
  are moved by the same number of whole semitones, as the pattern's notes are.

Press a key again before letting it go and the first note ends before the new one starts.

## Velocity

Notes play as hard as you hit the keys: the velocity your keyboard sends is the velocity you hear. There's no velocity
curve to set.

The typing keyboard has no velocity: every note it plays is at 100 out of 127.

## The sustain pedal

A sustain pedal (MIDI CC 64) works on both kinds of channel.

- **On a sampler**, notes you let go of while the pedal is down keep sounding. They end when you lift the pedal.
- **On a plugin**, the pedal goes to the plugin, which holds the notes itself.

## Pitch bend, mod wheel and other controllers

Pitch bend, the mod wheel, aftertouch and every other controller go to the plugin on the selected channel. What they
do is up to the plugin.

Samplers don't respond to them.

You can't link a hardware knob or fader to a control in Yen Studio.

## The typing keyboard

The typing keyboard turns your computer's keys into a piano for the selected channel.

1. Press <kbd>⌘T</kbd>, click the keyboard button on the toolbar, or choose **View › Typing Keyboard to Piano**.
2. Play on the letter rows.
3. Press <kbd>⌘T</kbd> again to turn it off.

The keys are laid out like a piano: two rows of white keys, with the black keys on the row above each.

| Row | Keys | Plays |
| --- | --- | --- |
| Bottom letters | Z X C V B N M , . / | The white keys, from C |
| Home row | S D G H J L ; | The black keys above them |
| Top letters | Q W E R T Y U I O P | The white keys, from the C an octave up |
| Numbers | 2 3 5 6 7 9 0 | The black keys above them |

- <kbd>[</kbd> and <kbd>]</kbd> move the whole keyboard down or up an octave. **Z** is C5 (MIDI note 60) until you
  move it.
- Holding a key plays one note. It doesn't repeat.
- The keys follow their place on the keyboard, not their letter, so the layout is the same on any keyboard language.
- The typing keyboard stays on or off as you leave it, in every song and the next time you open Yen Studio.
- If you switch to another app while holding keys, those notes end.

Its notes go through the same path as a MIDI keyboard's: they play the same channel, light up the same keys, and are
recorded the same way.

### Shortcuts while it's on

While the typing keyboard is on, the letter and number keys play notes instead of running shortcuts. Letters and
numbers that aren't part of the piano do nothing, so you can't change tools or mute channels by accident.

Shortcuts with ⌘, ⌥ or Ctrl still work, along with <kbd>Space</kbd> to play and stop. <kbd>⌘T</kbd> turns the typing
keyboard off.

## Record notes

1. Select the channel to record in the Channel rack.
2. Press <kbd>R</kbd>, or click **Record** on the toolbar. It turns red.
3. Press <kbd>Space</kbd>. The metronome counts in, then recording starts.
4. Play your keyboard.
5. Press <kbd>Space</kbd> to stop. The notes appear in a pattern on [the Playlist](playlist).

Recording always records into the song. If you're in pattern mode, Record switches to song mode first.

If no channel is selected and no mixer track is armed, there's nothing to record and Yen Studio says so. If you've
armed mixer tracks to record audio, the same take records both: see [Recording](recording).

If Record is turned on while the song is already playing, recording starts at once, with no count-in.

### Where the notes go

When you stop, every note you played becomes one undo step:

- If a clip of the selected pattern was already on the Playlist where recording started, the notes go into that
  pattern.
- Otherwise they go into the selected pattern if it isn't on the Playlist yet, or into a new pattern if it is. A clip of
  it is placed at the bar where recording started, on the first track it fits on. Using a new pattern means the
  selected pattern's clips elsewhere in the song don't change.

That pattern is then the one shown, so the Channel rack and the Piano roll show what you played.

Notes you play during the count-in land at the point where recording starts. A note you're still holding when you stop
ends where play stopped.

Yen Studio moves each note earlier by your audio output's latency. You play along to what you hear, and what you hear
leaves the computer a little late, so this puts each note where you meant it.

If you've placed **Start recording** and **Stop recording** markers on the Playlist, only notes that start between them
are kept.

### Recording in a loop

Turn on **Loop record** in Record's right-click menu to go round the time selection (or the whole song) until you stop.
Each pass adds its notes on top of the last, in the same pattern, so you can build a part up a layer at a time. A note
held past the end of the loop ends there.

To take notes out, edit the pattern in the Piano roll afterwards.

### How recorded notes are quantized

Recorded notes can be pulled onto the grid as they come in. The grid is [the Piano roll's snap](piano-roll#snap).

Right-click **Record** and pick one under **Recorded notes (on the Piano roll's snap)**:

| Option | What happens |
| --- | --- |
| Don't quantize | Notes stay where you played them. |
| Quantize start times | Starts go to the grid. Ends stay put, so lengths change. This is the default. |
| Quantize end times | Ends go to the grid. Starts stay put. |
| Quantize starts and ends | Both go to the grid. |
| Quantize starts, keeping lengths | Each note moves onto the grid and keeps its length. |

The snap has to be a fixed length (a step, a beat, a bar and so on) for this to happen. With the snap at **Line**,
**Cell** or **(none)**, recorded notes are always left as played. Line is the Piano roll's default, so pick a fixed snap
in the Piano roll before you record if you want notes quantized.

You can always quantize afterwards with the Piano roll's [Quantize](piano-roll#quantize) tools.

### Record's other options

Record's right-click menu also has:

- **Count-in**, and how many bars it counts. It's on by default, one bar.
- **Disarm on stop**: Record turns itself off when play stops.

These settings are kept for every song.

## What it doesn't do

- Playing several channels at once from different MIDI channels.
- Linking hardware knobs and faders to controls.
- A velocity curve.
- Other typing keyboard layouts.
