---
title: Y-Multiband
description: Y-Multiband, the built-in upward and downward compressor on three bands: its knobs, its band display, its gestures and its presets.
---

Y-Multiband compresses three bands of a sound at once, both ways: quiet detail is brought up and loud parts are
pushed down. At full depth it is a loud, dense, over-the-top sound. Turned down, it is glue and air. Its settings are
saved with the song, every change can be undone, and its knobs and band thresholds can be automated.

## Add Y-Multiband to a track

1. Open [the Mixer](mixer) and pick a track.
2. Click an empty effect slot. The picker opens.
3. Under **Built in**, choose **Compressor** ("Multiband upward and downward compressor").

The window opens when you click the slot's name. Its title bar says the effect and its track, for example
"Y-Multiband (Insert 1)". Close the window and the effect keeps playing. Delete the effect from its slot and its
window closes.

Every effect slot in the Mixer has a small mix knob and a bypass button beside its name. The mix knob sets how much
of Y-Multiband you hear against the dry sound. See [Built-in effects](effects) for what every built-in effect shares.

## The window

From top to bottom:

- **The preset bar**: the preset arrows, the preset menu, the name, and the ⋮ menu.
- **Depth**, **Time**, **In Gain** and **Out Gain**.
- **The band display**: a row for each band, high at the top, low at the bottom, each with its own gain knob.
  **Upward** is written under its left side and **Downward** under its right.
- **Upwd%** and **Dnwd%**.

::clip fx-multiband

## The knobs

| Knob | Range | What it does |
| --- | --- | --- |
| **Depth** | 0 to 100% | How much of the whole effect you get: the lift, the squash and the makeup gain together. 100% is the full, over-the-top sound. Around 50% is the usual place to start. |
| **Time** | 0 to 1000% | How fast the bands recover (their release). 100% is the normal speed. Lower is faster and more aggressive; higher is slower and smoother. |
| **In Gain** | −24 to +19.1 dB | The level going in. More level drives the bands harder. |
| **Out Gain** | −24 to +19.1 dB | The level coming out. |
| **Upwd%** | 0 to 200% | How strongly the quiet parts are brought up, on every band. 0% turns upward compression off. |
| **Dnwd%** | 0 to 200% | How strongly the loud parts are pushed down, on every band. 0% turns downward compression off. |
| **H gain**, **M gain**, **L gain** | −24 to +6 dB | Each band's level after it's compressed, on the knob at its row's side. |

A new Y-Multiband has everything at 100% and every gain at 0 dB.

The knobs work like every knob in Yen Studio:

- Drag up or down to turn one. Hold <kbd>⌘</kbd> while dragging for fine changes.
- Scroll over it to turn it.
- ⌥-click it, or click it with the middle button, to put it back to its default.
- Hover over it to see its value.
- Right-click it for **Reset**, **Copy value**, **Paste value**, **Type in value…**, **Create automation clip** and the
  [modulation](modulators) items.

## The band display

Each row is one band: **H** (the highs), **M** (the mids) and **L** (the lows). The low band is only the sub, so the
bass's body and the kick's click are in the mid band.

Read a row from left to right, quiet to loud:

- **The brown part on the left** is the upward range. Sound quieter than this is brought up.
- **The green part on the right** is the downward range. Sound louder than this is pushed down.
- **The gap between them**, in the row's colour, is where the band is left alone.
- **The white marker** is the band's level coming in.
- **The yellow bar** is the band's level coming out.

A grid line marks every 12 dB. A compressor that's switched off is greyed.

### Move a band's threshold

Drag a row left or right. The gap moves with it, and so do both of its edges: this is the band's threshold. Drag it
left and more of the band is pushed down. Drag it right and more of it is brought up.

- ⌥-click or double-click a row to put its threshold back.
- Hover over a row to see its threshold as a percentage (100% is where a new one starts).

### Switch a band's upward or downward compression

<kbd>⌘</kbd>-click the brown part of a row to switch that band's upward compression off or on. <kbd>⌘</kbd>-click the
green part to switch its downward compression. You can, for example, stop the low band being squashed while the
others are.

Right-click a row for the same things as a menu:

- **Reset threshold**
- **Upward compression** (ticked when it's on)
- **Downward compression** (ticked when it's on)
- **Create automation clip** for the band's threshold, and the [modulation](modulators) items.

## Presets

Click the preset name for the list. Hover over a preset to read what it's for. The arrows on either side of the name
step to the previous and next preset.

The presets include:

| Preset | What it's for |
| --- | --- |
| **Default** | Everything at 100%, over the top |
| **Gentle** | A third of it: glue and air without the squash |
| **Half** | Depth at 50%, the usual place to start |
| **Upward only** | Tails, reverbs and detail brought up, nothing pushed down |
| **Downward only** | A three-band leveller: the loud parts held, nothing lifted |
| **Bright** | The top band up |
| **Sub tamer** | The low band left out, the rest squashed |
| **Vocal glue** | Slow and light, the mids held |
| **Drum smash** | Fast and hard, the transients flattened |
| **Pad bloom** | Long release, quiet detail lifted |

A preset stays named until you change the sound. Then the name says **Custom**.

### The ⋮ menu

- **Reset to default**: back to the Default preset.
- **Copy state**: copies every setting.
- **Paste state**: puts copied settings on this Y-Multiband. Use it to give another track's Y-Multiband the same
  sound.

## Automate Y-Multiband

Every knob and every band's threshold can be automated.

- Right-click a knob or a band row and choose **Create automation clip**. A clip of it appears in
  [the Playlist](playlist).
- Or touch a control (turn it or drag it), then click **Automate “…”** in the window's title bar. It names the last
  control you touched and makes a clip of it.

An automated control is marked, and its hover tip says "(automated)". See [Automation](automation).

## Tips

> **Tip:** Start with **Half**, then bring **Depth** down until you stop noticing the effect, and back up a little.

> **Tip:** On a whole mix or a bus, try **Gentle**, or set **Dnwd%** low and **Upwd%** near 100%, so detail comes up
> without the peaks being flattened.

> **Note:** Y-Multiband makes quiet sounds louder, so it brings up noise and room sound as well. If a track gets
> noisy, lower **Upwd%** or move the band's threshold left.
