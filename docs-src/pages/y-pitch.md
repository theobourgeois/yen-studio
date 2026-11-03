---
title: Y-Pitch
description: Y-Pitch, the built-in pitch and formant shifter: its two wheels and their physics, the keyboard, Single and Multi, and its presets.
---

Y-Pitch moves the pitch of a sound by hand. You turn a wheel, and the sound follows the pointer the way a weight on
an elastic would: straight there, or swinging past and back. A second wheel moves the formants, the voice's
character, on their own. Notes played on its keyboard, or from a channel of the song, move it too, so one vocal can
sing a melody or harmonies. Its settings are saved with the song, every change can be undone, and both wheels can be
automated.

## Add Y-Pitch to a track

1. Open [the Mixer](mixer) and pick a track.
2. Click an empty effect slot. The picker opens.
3. Under **Built in**, choose **Pitch and formants** ("Pitch and formants by hand, swings, harmonies from notes").

The window opens when you click the slot's name. Its title bar names the effect and its track, for example
"Y-Pitch (Insert 1)". Close it and the effect keeps playing. Delete the effect and the window closes.

The **Mix** knob at the window's bottom right sets how much of the shifted sound you hear against the dry sound. It's
the same knob as the slot's mix in the Mixer. See [Built-in effects](effects) for what every built-in effect shares.

## The window

- **The top bar**: the preset, **Resolution** and the **⋯** menu.
- **The wheels**: **Pitch** on the left and **Timbre** on the right, with the **Timbre** tab between them.
- **The bottom bar**: the lights, **Midi**, the channel its notes come from, **Origin** and **Mix**.
- **The keyboard** along the bottom.

::clip fx-pitch

## Turn a wheel

Each wheel is a dial. Its value is in semitones:

- **Drag round it**, from anywhere inside it. Hold <kbd>⇧</kbd> for fine.
- **Scroll** over it. A notch is a semitone when it snaps to semitones, an octave when it snaps to octaves, and a tenth
  of a semitone when it doesn't snap. Hold <kbd>⌘</kbd> for a hundredth of a semitone.
- **⌥-click** it, or click it with the middle button, to put it back to 0.
- **Double-click** it, or press <kbd>Enter</kbd> on it, to type a value. What's heard goes straight there, with no
  swing.
- The arrow keys step it while it has the focus, <kbd>⌘</kbd> for fine.

Right-click a wheel for its menu:

- **Type in value…**
- **Reset to 0**
- **Jump there (no swing)**: what's heard goes straight to where the pointer is, with no swing on the way.
- **Create automation clip** and the other automation items.

The dial shows the pointer, where you've set it, and what's heard as a glowing ring with a trail behind it. When the
two don't agree, the sound is still on its way, or swinging.

### Range and Snap

The two boxes in a wheel's top corners set how it turns. Click one for its list.

- **Range** (top left): how many semitones the whole dial spans, from 2 to 48. **24 semitones (±12)** is an octave
  either way. The Pitch wheel starts at 24, the Timbre wheel at 12.
- **Snap** (top right): where the pointer lands. **ON** is semitones (**Semitones** in the list), **OCT** is octaves
  (**Octaves**) and **OFF** is anywhere (**Off: anywhere**). Both wheels start on semitones.

### Gravity, inertia and smooth

Under each wheel, three knobs set how what's heard follows the pointer:

| Knob | What it does |
| --- | --- |
| **gravity** | How hard what's heard is held to the pointer. Low, it swings past and back, as on a weak elastic. High, it's clamped to the pointer. |
| **inertia** | How slowly what's heard heads for the pointer. You hear it most at low gravity. |
| **smooth** | How slowly the pointer itself is followed. High, it glides from pitch to pitch, and gravity and inertia matter less. |

They start at 75, 45 and 10. Each knob works like every knob in Yen Studio: drag up or down (<kbd>⌘</kbd> for fine),
scroll, ⌥-click to reset, and right-click for **Type in value…**, automation and [modulation](modulators).

> **Tip:** Set **gravity** near 0 and **smooth** to 0, then flick the Pitch wheel and let go: the pitch flies past and
> swings back. That's the **Wild Swing** preset.

## The Timbre wheel

The **Timbre** tab between the wheels opens and closes it:

- **On** (as it starts): the formants are the Timbre wheel's. At 0 they stay where they were, so a voice moved up or
  down by the Pitch wheel keeps its character. Turn the Timbre wheel to make the voice smaller and brighter (up) or
  bigger and darker (down) without changing its notes.
- **Off**: the formants move with the pitch, as a tape sped up or slowed down. The Timbre wheel is dimmed.

## Play it with notes

Notes move the pitch as well as the wheel. A note above the **Origin** shifts the sound up by the distance between
them: with the origin at C5, playing D5 moves the sound up two semitones. What's heard is the Pitch wheel plus that
shift, followed with the same gravity, inertia and smooth.

### The keyboard

- **Press a key** to play it. Drag along the keys to glide from one to the next.
- **⇧-click a key** to hold it on, until you click it again. Hold several to play a chord in Multi.
- **Right-click a key** to make it the origin.

The keyboard shows the origin as a dot and the notes playing as lit keys. In Single it rings the note the sound is at.
What you play on it isn't saved in the song.

### Notes from

The **Notes from** list picks a channel of the song whose notes play Y-Pitch as the song plays. **Keyboard only**, as
it starts, takes notes from the keyboard alone. A muted channel says **(muted)** in the list.

> **Tip:** Draw the melody on a channel, pick it in **Notes from**, then mute that channel. You hear only the shifted
> sound, not the instrument the notes are drawn on.

### Origin

**Origin** is the note that shifts nothing. It starts at C5. Drag it up or down or scroll over it, right-click it to
type a note (such as "C5", "F#4" or a MIDI note number), or right-click a key on the keyboard.

### Single and Multi

- **Single** (as it starts): the sound is always heard. The latest note moves it, and it stays there after the note
  ends, until the next one.
- **Multi**: each note plays the sound at its own pitch, so a chord makes harmonies. Without notes, it's silent.

The lights at the bottom left show **In** when sound is coming in and **Midi** when notes are playing it.

## Resolution

**Resolution** in the top bar trades how late it is against how clean it sounds:

- **Tight**: less late, for playing it live. Notes closer than about 90 Hz blur together.
- **Wide** (as it starts): the cleanest. Chords and low notes stay apart, and drums stay sharp. It's later, and Yen
  Studio makes up for the delay so the track stays in time.

## Presets

Pick one from **Preset** in the top bar. Each says what it does under its name. The name reads **Custom** once the
sound is your own. A preset sets the wheels and the Timbre tab, never **Notes from**, the origin, Single or Multi, or
Resolution.

| Preset | What it does |
| --- | --- |
| **Natural** | Nothing shifted, the knobs as they come: a fresh start |
| **Octave Up** | An octave higher, the voice's character kept |
| **Octave Down** | An octave lower, the voice's character kept |
| **Fifth Up** | Up a fifth, formants kept: a harmony to blend in |
| **Fourth Down** | Down a fourth, formants kept: a low harmony |
| **Chipmunk** | Up a fifth with the formants: the tape sped up |
| **Helium** | The same notes, the formants up: a small, bright voice |
| **Giant** | Down a fourth, the formants lower still: a big, dark voice |
| **Monster** | Down an octave with the formants: the tape slowed down |
| **Slow Tape** | A quarter-tone flat, as a tape running slow |
| **Turntable** | Nothing snapped, a little weight: play it like a record |
| **Springy** | Every move overshoots and settles: springy vibrato |
| **Wild Swing** | No gravity: swing it and the pitch flies past and back for octaves |
| **Slow Glide** | Notes and moves glide in, as a portamento |

The **⋯** menu (**Options**) has **Centre both wheels**, and **Copy state** and **Paste state** to put every setting
on another Y-Pitch.

## Automate Y-Pitch

These can be automated: the **Pitch** and **Timbre** wheels, and each wheel's **gravity**, **inertia** and
**smooth**.

- Right-click a wheel or a knob and choose **Create automation clip**.
- Or touch a control, then click **Automate “…”** in the window's title bar. It names the last control you touched
  and makes a clip of it.

See [Automation](automation).
