---
title: Y-Tune
description: Y-Tune, the built-in pitch correction: key and scale, Detect key, Retune Speed, the pitch graph, Edit scale, Create vibrato and presets.
---

Y-Tune corrects the pitch of a voice or an instrument as it plays. It hears the note being sung and pulls it to the
nearest note of a key and scale you choose. Fast, and you get the hard-tuned sound of modern rap and pop. Slow, and
it's a gentle fix that keeps the singer's slides. Its settings are saved with the song, every change can be undone,
and its knobs and its key can be automated.

## Add Y-Tune to a track

1. Open [the Mixer](mixer) and pick the track your vocal plays through.
2. Click an empty effect slot. The picker opens.
3. Under **Built in**, choose **Pitch correction** ("Pitch correction, hard tune to natural").

The window opens when you click the slot's name. Its title bar names the effect and its track, for example
"Y-Tune (Insert 1)". The window can be resized. Close it and the effect keeps playing. Delete the effect and the window
closes.

The slot's own mix knob in the Mixer sets how much of the tuned sound you hear against the sound as it was sung. See
[Built-in effects](effects) for what every built-in effect shares.

## The window

From top to bottom:

- **The top bar**: what's coming in, the key and scale, **Detect**, **Detune**, **Tracking**, the preset, and the
  **Formant**, **Classic** and **Overdrive** switches.
- **The display**: the note being heard, the **Pitch change** meter, the key, **Hold**, and the pitch graph.
- **The knobs**: **Retune Speed** and the knobs that shape it.
- **The tabs**: **Edit scale** and **Create vibrato**.

::clip fx-tune

## Set the key and scale

Pick the song's key from **Key** and its scale from **Scale**. A new Y-Tune is set to **Chromatic**, which tunes to
every note: it corrects a voice that's off pitch, but it can't tell a note that's wrong from one that's right. Set the
real key and scale and the voice is only pulled to the notes that belong.

The scales are **Chromatic**, **Major**, **Minor**, **Harmonic Minor**, **Jazz Melodic Minor**, **Dorian**,
**Phrygian**, **Lydian**, **Mixolydian**, **Locrian**, **Major Pentatonic**, **Minor Pentatonic**, **Blues**,
**Whole Tone** and **Diminished**.

The display says the key it's in, for example "A Minor". It adds "(edited)" once you've changed which notes it
tunes to (see [Edit the scale](#edit-the-scale)). Choosing a new key or scale starts its notes afresh.

### Detect key

Click **Detect** (the wand) and Y-Tune sets the key and scale from the song's notes:

- It reads the notes in your patterns, weighted by how long they are and how often their pattern is on
  [the Playlist](playlist). It doesn't listen to the audio.
- Drum channels are left out. Muted notes don't count.
- It picks a major or minor key.

A message says what it found. "Heard clearly in the song's notes" means the notes fit the key well. "The likeliest key
from the song's notes: check it by ear" means they fit it less well. If the song has no melody or chords to go by, it
says "No key to hear", and you choose the key yourself.

> **Tip:** Detect works best once the song has its chords or a bassline in. A song of only drums and a vocal
> recording has nothing for it to read.

## The top bar

| Control | What it does |
| --- | --- |
| **Input** | The kind of sound coming in: **Soprano**, **Alto/Tenor**, **Low Male**, **Instrument** or **Bass Instrument**. It sets the range of pitches Y-Tune listens for. Pick the one closest to the voice. |
| **Key**, **Scale** | The notes it tunes to. |
| **Detect** | Sets the key and scale from the song's notes. |
| **Detune** | Moves the tuning, up to 100 cents either way, for a song that isn't tuned to A4 = 440 Hz. Its readout says A4's new pitch. |
| **Tracking** | From choosy to relaxed: how unclear a pitch can be and still be tracked. It starts in the middle. Turn it towards relaxed for a breathy or rough voice it loses, towards choosy if it tunes sounds that aren't notes. |
| **Preset** | The presets (see [Presets](#presets)). |
| **Formant** | Keeps the voice's character when its pitch moves. Off, the character moves with the pitch, as a tape sped up or slowed down. |
| **Classic** | Sharper correction between notes, the older hard-tuned sound. It has no **Formant**, **Throat**, **Transpose** or **Flex**, so those are greyed. |
| **Overdrive** | Past Retune Speed 0. Each note is reached at once and exactly, and the voice becomes a buzz of one shape, almost a vocoder. **Retune Speed**, **Humanize**, **Flex** and **Natural Vibrato** don't apply. |

The **⋯** menu (**Options**) has:

- **Targeting ignores vibrato**: the note to tune to is chosen from the middle of the sung pitch, so a wide vibrato
  doesn't jump between notes.
- **Copy state** and **Paste state**: every setting, to put on another Y-Tune.

In a narrow window some labels are hidden: the wand alone is Detect.

## Read the display

- **Note**: the note being heard.
- **Pitch change**: how far it's being moved, from −100 to +100 cents. Its text says, for example, "+20 cents (was
  flat)", "−15 cents (was sharp)" or "in tune".
- **The pitch graph**: the sung pitch as a thin line and the tuned pitch as a thick one, over the last few seconds.
  Where they meet, the voice was already in tune.
- **Hold**: freezes the graph and the meter so you can look at what was sung. Click it again to let them run.

The keyboard down the graph's left side shows the notes of the scale, and you can edit them there:

- Click a key to tune to it.
- Right-click a key to remove it.
- ⇧-click a key to bypass it, and again to tune to it.

## The knobs

| Knob | Range | What it does |
| --- | --- | --- |
| **Retune Speed** | 0 to 400 ms | How fast a note is pulled into tune. Its readout says **Hard tune** (under 3 ms), **Fast**, **Natural** or **Slow** (80 ms and over). A new Y-Tune starts at 0. |
| **Humanize** | 0 to 100 | Slows the tuning on the held part of long notes, so they keep some life while short notes stay tight. |
| **Flex** | 0 to 100 | Tunes only what's sung close to a note, and leaves slides and bends alone. At 0, everything is tuned. Not in Classic. |
| **Natural vibrato** | −12 to +12 dB | Makes the singer's own vibrato wider or narrower. All the way down, it's almost flat. |
| **Transpose** | −12 to +12 semitones | Moves every tuned note up or down. Not in Classic. |
| **Throat** | 50 to 180 | The length of the voice's throat. Above 100 it's deeper, below it brighter. It needs **Formant** on and Classic off. |

The knobs work like every knob in Yen Studio: drag up or down (<kbd>⌘</kbd> for fine), scroll, ⌥-click to reset, and
right-click for **Type in value…**, automation and [modulation](modulators).

## Edit the scale

Open the **Edit scale** tab. Each of the twelve notes can be:

- **On**: a note to tune to. Click its name to switch it between on and removed.
- **Bypass** (**B**): a sung note near it passes as it's sung, untouched.
- **Remove** (**R**): never a target. A voice near it goes to the nearest other note. Right-clicking a note's name
  removes it too.

A note's setting is the same in every octave. The buttons on the right set them all:

- **Set all**: every note on.
- **Reset scale**: back to the notes of the key and scale.
- **Bypass all**: every note passes as it's sung.
- **Remove all**: every note removed but the key's own, so there's still something to tune to.
- **Set major** and **Set minor**: switch the scale.

> **Tip:** Remove a note that the singer keeps landing between, so they're always pulled the same way.

## Create vibrato

Open the **Create vibrato** tab to add a vibrato of Y-Tune's own after each note starts. A dot on the tab shows when
it's on.

| Control | What it does |
| --- | --- |
| **Shape** | **Off**, **Sine**, **Square** or **Saw**. Off is no vibrato. |
| **Rate** | How fast it wobbles, 0.1 to 10 Hz. |
| **Onset delay** | How long after a note starts the vibrato begins, up to 1.5 seconds. |
| **Onset rate** | How long it takes to grow to full depth once it begins, up to 1.5 seconds. |
| **Variation** | How much its rate and depth change from note to note, so it doesn't sound mechanical. |
| **Pitch** | How far it moves the pitch, up to 100 cents. |
| **Amplitude** | How much it moves the level. |
| **Formant** | How much it moves the voice's character along with the pitch. |

## Presets

Pick one from **Preset** in the top bar. Hover over one to read what it's for. A preset sets the sound, never the
input, the key or the scale, so you can try them on a vocal you've already set up. When you change the sound, the
preset menu says **Custom**.

| Preset | What it's for |
| --- | --- |
| **Hard Tune** | Retune Speed 0: every note snapped, the modern rap and pop sound |
| **Classic Hard Tune** | The classic hard-tuned sound: hard, bright, sharp steps between notes |
| **Robot** | Hard tuned, the vibrato flattened |
| **Overdrive** | Instant, exact notes, almost a vocoder |
| **Modern Pop** | Tight but alive: fast retune, sustained notes kept natural |
| **Natural Vocal** | Transparent correction that keeps the singer's slides |
| **Gentle Fix** | Only what's near a note, slowly: barely there |
| **Ballad** | Slow, smooth, the vibrato a touch wider |
| **Vibrato Lead** | Fast tuning with a vibrato of its own after each note's start |
| **Octave Up** | An octave higher, the voice's character kept |
| **Octave Down** | An octave lower, a little deeper in the throat |
| **Chipmunk** | Up a fifth, the character up with it |
| **Monster** | Down an octave, a long throat |

## Automate Y-Tune

Every knob can be automated, the vibrato's too, and so can **Key**, **Detune** and **Tracking**. The switches, the
input and the scale can't.

- Right-click a knob and choose **Create automation clip**.
- Or touch a control, then click **Automate “…”** in the window's title bar. It names the last control you touched
  and makes a clip of it.

Automating **Key** follows a song that changes key. See [Automation](automation).

## Tips

> **Tip:** For the hard-tuned sound, start from **Hard Tune**, set the key, and leave Retune Speed at 0. For a natural
> fix, start from **Natural Vocal** and raise **Flex** until the slides come back.

> **Tip:** If a note with a wide vibrato flickers between two notes, turn on **Targeting ignores vibrato** in the ⋯
> menu.

> **Note:** Y-Tune listens a little ahead to know the pitch, more for low voices than high ones. Yen Studio makes up
> for that delay, so the track stays in time with the others.
