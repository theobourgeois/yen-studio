---
title: Modulators
description: Make any control follow a track's level or a channel's notes: a filter that pumps with the kick, a fader that ducks, a reverb that opens up.
---

A modulator follows something in your song, either a mixer track's level or the notes of a channel, and moves
controls with it. Link a bass's filter cutoff to the kick's track and it dips on every hit. Link a reverb's mix to a
snare's notes and it opens up on every snare. It's what FL Studio's Peak Controller does, without an effect in a
slot: modulators belong to the song.

## Make a control follow a track

1. Right-click any control that can be [automated](automation): a mixer fader, a pan knob, an effect slot's mix, a
   knob in a built-in effect's window.
2. Open **Modulate ▸ Follow track ▸** and pick the track (the master is there too).

The control now moves with that track's level, taken after its effects. The Modulators window opens on that
modulator, so you can shape it.

If a modulator already follows that track, the control is linked to it rather than to a new one.

## Make a control follow a channel's notes

1. Right-click the control.
2. Open **Modulate ▸ Follow notes of ▸** and pick a channel from the Channel rack.

The modulator opens while any of the channel's notes play, as far as the note's velocity, and closes when they stop.
It follows the song's notes as the sequencer plays them. That means a muted channel still drives it: put a kick's
pattern on a muted channel to pump a pad without hearing the kick twice.

> **Note:** a notes modulator follows the notes in your patterns, not what you play on a MIDI keyboard.

## The Modulate menu

Right-click a control and open **Modulate ▸**. Once the control is linked, the item reads **Modulated by** and the
modulator's name, and the menu begins with:

- **Edit** the modulator (with the link's amount): opens it in the Modulators window.
- **Remove modulation**: takes this control off it. The control goes back to its own value.

Then, always:

- **Follow track ▸**: link it to a track's level.
- **Follow notes of ▸**: link it to a channel's notes.
- **Link to ▸**: link it to a modulator the song already has.
- **Modulators…**: open the Modulators window.

A control is moved by one modulator at most: linking it to another takes it off the first. The tempo can't be
modulated.

## The Modulators window

Open it from **Modulate ▸ Modulators…** on any control, or from the [Mixer](mixer)'s menu.

On the left are the song's modulators. Each row shows its name, how many controls it moves, and a bar with its level
as the song plays. **+ New** makes one that follows a track (**Follow track**) or a channel's notes (**Follow notes
of**), with nothing linked yet. Click a modulator to see it on the right.

### Name and source

- **Name**: a modulator is called after what it follows ("Kick level", "Kick notes") until you type a name.
- **Follows**: the track or channel it follows. Tracks are under *A track's level*, channels under *A channel's
  notes*.
- For a track, the second list says where its level is taken: **Before its effects**, **After its effects** (the
  default) or **After its fader**. These are the same places a [sidechain key](sidechain#where-the-key-is-taken) can
  be taken from.

The bin deletes the modulator. Every control it moved goes back to its own value.

### The follower

| Knob | What it does |
| --- | --- |
| **ATT** (attack) | How fast the level rises when the sound comes in. 2 ms to start. |
| **REL** (release) | How fast it falls back once the sound goes. 150 ms to start, so it recovers between kicks. |
| **GAIN** | Turns the source up or down before it's followed, in dB. Turn it up for a quiet source, so it reaches full level. |
| **TENS** (tension) | Bends the curve. **Straight** in the middle; one way the level is slower to rise, the other quicker. |

The **Level** bar beside them shows the modulator's level as the song plays.

### Moves: the links and their amounts

Under **Moves** is every control the modulator moves, with the track or effect it belongs to. Each one has:

- **An amount knob**, from −100% to +100%. At full level the control moves by that share of its whole range. A new
  link starts at −60%: it dips. Make it positive to push the control up instead.
- **Its range**, in the control's own words (for example, a fader's level from where it is to where it dips to).
- **×** to unlink it.

A link whose control has gone (its effect was deleted) is shown in red.

### Link a plugin's parameter

A plugin's window is the plugin's own, so you can't right-click its knobs. Instead:

1. Move the parameter in the plugin's window.
2. In the Modulators window, choose the modulator and click **Link** and the parameter's name, under **Moves**.

The same button offers the last of Yen Studio's own controls you touched.

## How it adds to automation

A modulator moves a control *from where it is*. If the control is automated, the modulator moves it from wherever its
[automation](automation) has it at that moment. So you can automate a filter opening over eight bars and have it pump
with the kick the whole way.

- A linked knob or fader moves as the modulator does, and shows a ring for how far the modulator can take it.
- Modulators play in pattern mode and song mode alike. Automation plays in song mode only.
- An [export](export) is modulated just as playback is.

## Timing

A modulator follows its source a little over a millisecond late. Unlike a [sidechain key](sidechain), it isn't
[delay-compensated](mixer#delay-compensation): if the source track has a plugin that delays it, the modulator follows
it as late as it is. For a tight duck on audio, key a [Y-C](y-c) from the track instead.
