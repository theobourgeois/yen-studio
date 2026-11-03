---
title: Y-Pan
description: Y-Pan, the built-in auto-panner: its six modes, its knobs, the Tweak panel, the rhythm editors, Analog Style and its presets.
---

Y-Pan moves a sound across the stereo field. An LFO can sweep it, a rhythm can step it from place to place in time
with the song, chance can scatter it, or the sound's own hits can bounce it from side to side. It can also go past the
speakers. Its settings are saved with the song, every change can be undone, and its knobs can be automated.

## Add Y-Pan to a track

1. Open [the Mixer](mixer) and pick a track.
2. Click an empty effect slot. The picker opens.
3. Under **Built in**, choose **Auto-pan** ("Auto-panning: LFO, rhythms, random, on the hits").

The window opens when you click the slot's name. Its title bar names the effect and its track, for example
"Y-Pan (Insert 1)". Close it and the effect keeps playing. Delete the effect and the window closes.

The slot's own mix knob in the Mixer sets how much of Y-Pan you hear against the dry sound. See
[Built-in effects](effects) for what every built-in effect shares.

A new Y-Pan is the **Slow Pan** preset: a slow sweep back and forth across the speakers.

> **Note:** Y-Pan makes the sound mono, then places it. A wide stereo sound comes out as one point that moves.

## The window

- **The preset bar** along the top.
- **Position**: where the sound sits and how far it moves, and the meter.
- **Modulation**: what moves it. The mode's controls sit over the mode button.
- **Levels**: **Input**, **Output** and **Tweak**.
- **The Tweak panel**, under them when it's open.

::clip fx-pan

## Pick a mode

Click the mode button at the bottom of **Modulation** and choose one:

| Mode | What moves the sound |
| --- | --- |
| **LFO** | A repeating sweep at its own **Rate**, not in time with the song. |
| **Rhythm Step** | Steps from place to place, one step each **Rhythm**. |
| **Rhythm Shape** | A sweep each **Rhythm**, in time with the song. |
| **PingPong** | From one side to the other each time the sound hits. |
| **Random** | A new place picked by chance each **Rhythm**. |
| **Step** | A new place picked by chance each time the sound hits. |

Changing the mode keeps the other settings, so you can try the same width and smoothing in each.

## Position

| Knob | Ends | What it does |
| --- | --- | --- |
| **Offset** | Left, Right | Where the movement is centred, from 105° left to 105° right. It reads "Centre" in the middle. Past 90° is beyond the speakers. |
| **Width** | Min, Max | How far either side of the Offset the sound moves, up to 210°. A new Y-Pan uses 180°: from hard left to hard right. |
| **Smoothing** | Hard, Soft | How it gets from one place to the next. Hard jumps; soft glides. |
| **Feel** | Rush, Drag | Rhythm Step only. Moves the pattern earlier or later, up to a sixteenth note. It reads "On the beat" in the middle. |
| **Groove** | Shuf, Swng | Rhythm Shape only. Moves every second sweep later, towards a triplet, for a shuffle or a swing. It reads "Straight" in the middle. |

The **pan position meter** shows where the sound is now, with a fading trail of where it's been.

## Modulation

The controls here change with the mode.

### LFO

- **Rate**: how fast it sweeps, from 0.01 to 10 Hz.
- **Direction**: **Right to left**, **Back and forth** or **Left to right**. One way, it sweeps across and starts again;
  back and forth, it swings.

### Rhythm Step, Rhythm Shape and Random

- **Direction** (Rhythm Step and Rhythm Shape): the same three buttons as LFO.
- **Rhythm**: how long each step, sweep or random move lasts, from **1/32 note** to **4 bars**, straight, dotted
  (**dot**) or triplet (**trip**). Drag it up or down or scroll over it. Right-click it to pick one from the list, or
  choose **Edit…** to open the pattern's editor (not in Random).
- **Steps** (Rhythm Step): how many places it steps through before it repeats, 2 to 16.
- **Tap**: tap it three times in time to set the tempo yourself. That takes Y-Pan out of time with the song.
- **Tempo**: the tempo it runs at when it isn't in time with the song. Drag it or scroll over it. It's dimmed while
  Sync is on, and changing it turns Sync off.
- **Sync**: in time with the song. On in a new Y-Pan.

When the pattern is your own (see [The rhythm editors](#the-rhythm-editors)), **Rhythm** reads **Custom** and
**Steps** is dimmed: the pattern decides. In Rhythm Step, **Direction** is dimmed too.

### PingPong and Step

- **Trigger**: how loud the sound must get to count as a hit, from −40 dB to **Off**. The strip under it shows the
  level it hears.
- **Trigger** (the button): a hit now, by hand. It only works while the sound is under the Trigger level. It isn't
  saved in the song.
- **Divider**: how many hits make one move, from **Every trigger** up to every twelfth. The dots under it count the
  hits.

In PingPong, the sound starts at the left when the song starts playing, and goes to the other side of the Offset each
move. In Step, each move goes to a new place picked by chance. Smoothing sets how it glides there.

> **Tip:** To make it move on the kick and not the hats, open **Tweak** and filter what the trigger hears (see
> [Trigger filter](#trigger-filter)).

## Levels

**Input** and **Output** go from −24 to +24 dB. Each has a row of lights: green, then yellow 6 dB under clipping, then
red. Turning **Input** up drives the [Analog style](#analog-style) harder; **Output** sets the level that leaves.

## Tweak

Click **Tweak** to open more controls under the window. What's there depends on the mode.

### Dynamics

In LFO, Rhythm Step and Rhythm Shape, the sound's level can change the movement:

| Control | What it does |
| --- | --- |
| **Threshold** | The level, −40 to 0 dB, above which the sound changes the movement. The strip under it shows the level it hears. |
| **Attack**, **Release** | How fast the change comes in and goes away, up to 5 seconds each. |
| **Mode** | **Env**: the louder the sound is above the threshold, the more it changes. **Gate**: all or nothing, at the Attack and Release's pace. |
| **Offset Mod** | How far the Offset moves, left or right, when the sound is loud. |
| **Width Mod** | How much narrower (**Slim**) or wider (**Wide**) the movement gets. |
| **Rate Mod** | How much slower or faster it moves, in octaves. 1.00 doubles the rate. |

With every Mod at 0, the dynamics do nothing.

### Trigger filter

In PingPong and Step, the trigger can listen to part of the sound:

- **Type**: **HPF** (only the highs), **Off** or **LPF** (only the lows).
- **Cutoff**: from 100 Hz to 15 kHz.
- **Filter gain**: −20 to +20 dB, for a part that's too quiet to reach the Trigger level.
- **Monitor**: **On** lets you hear what the trigger hears, unpanned, while you set it. Turn it **Off** after.

A small picture shows the filter's curve. The filter only changes what the trigger listens to, not what you hear.

### Analog style

The saturation the sound goes through, in every mode:

| Style | What it does |
| --- | --- |
| **Clean** | The most range before it clips, fairly hard. A new Y-Pan uses it. |
| **Fat** | Smooth low-frequency distortion |
| **Squash** | Fat, more compressed |
| **Dirt** | Smooth broadband saturation |
| **Crunch** | Exaggerated high-end clipping |
| **Shred** | Lots of asymmetrical clipping |
| **Pump** | Extreme pumping compression |

In Random mode, **Analog style** is the only thing in Tweak.

## The rhythm editors

In Rhythm Step and Rhythm Shape, Tweak also shows the pattern the knobs make, as an editor you can draw in. Edit it and
the pattern becomes your own, and **Rhythm** reads **Custom**. While the song plays in time, a line follows where the
pattern is.

### Rhythm Step Editor

Each point is a place the sound steps to, at a time in the bar. Higher is further right.

- **Add a point**: click an empty place. It goes on the nearest grid line. Keep the button held to drag it.
- **Move a point**: drag it. Up and down is its place; sideways, its time on the grid. Hold <kbd>⌘</kbd> to move it off
  the grid. A point dropped on another's time goes back.
- **Delete a point**: ⌥-click or right-click it.

**Smoothing mode** sets the shape of each move from one point to the next: **Linear**, **Sine**, **Exp**, **Sym** or
**Rev**.

### Rhythm Editor

Each block is one sweep, in the Direction's shape, from its start to its end.

- **Add a sweep**: click an empty place. It's a grid cell long; drag right to make it longer.
- **Delete a sweep**: click it, or right-click it.
- **Resize it**: drag its left or right edge.
- **Move it**: drag its middle.
- ⌥-drag moves its end and ⇧-drag its start, wherever you press. ⌥⇧-drag moves the whole sweep.
- Hold <kbd>⌘</kbd> while dragging to go off the grid.

### Under both editors

- **Num bars**: how long the pattern is, 1 to 8 bars.
- **Beats/bar**: beats in each of its bars.
- **Bar**: which bar of the pattern the editor shows.
- **Grid**: where clicks land: **1/4th**, **1/8th**, **1/16th**, **1/32nd** or a triplet.
- **Shape preset**: start again from the pattern the knobs make at one of the rhythms, or **Clear the pattern** to
  draw from nothing.

## Presets

The preset bar has the arrows (**Previous preset** and **Next preset**), the preset's name, **Revert** and the ⋯ menu.

Click the name for the list, grouped by mode. Hover over a preset to read what it does. Once you change the sound, a
`*` follows the name. Click **Revert** (the arrow beside the name) to go back to the preset as it was.

| Mode | Presets |
| --- | --- |
| LFO | **Slow Pan**, **Pendulum Pan**, **Faast Shimmer Pan**, **Lazy Drift**, **Beyond the Speakers**, **Spinning Wheel**, **Breathing Pan**, **Pumped Pan** |
| Rhythm Step | **Tooo Dang Fast**, **Eighth Hop**, **Three Step Walk**, **Dotted Bounce**, **Sixteenth Sprinkle** |
| Rhythm Shape | **Wiper Panner**, **Quarter Sway**, **Swung Eighths**, **Saw Train**, **Fast When Loud** |
| PingPong | **SpazPong**, **Every Other Hit**, **Bar Bouncer**, **Hi-Hat Ping** |
| Random | **Random Ambler**, **Quarter Wander**, **Scatter** |
| Step | **EasyHopper**, **Kick Scatter** |

The ⋯ menu (**Y-Pan's menu**) has **Copy state** and **Paste state**: every setting, to put on another Y-Pan.

## Automate Y-Pan

Every knob can be automated.

- Right-click a knob and choose **Create automation clip**.
- Or touch a control, then click **Automate “…”** in the window's title bar. It names the last control you touched
  and makes a clip of it.

Automating **Width** from 0 up is a way to open a sound out over a build. See [Automation](automation).

The knobs work like every knob in Yen Studio: drag up or down (<kbd>⌘</kbd> for fine), scroll, ⌥-click to reset, and
right-click for **Type in value…**, automation and [modulation](modulators).

## Tips

> **Tip:** On hats and percussion, try a Rhythm Step preset with **Smoothing** low, so each hit lands in its own place.

> **Tip:** For a pan you feel more than hear, lower **Width** to 60° or so and raise **Smoothing**.
