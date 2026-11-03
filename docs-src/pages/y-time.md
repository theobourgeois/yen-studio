---
title: Y-Time
description: Y-Time, the built-in effect for repeats, gates, tape stops and scratches: its slots, its mapping panel, its envelopes and its sync.
---

Y-Time plays with time and volume in step with the song. It keeps the last few beats of what goes through it, and an
envelope you draw says which moment to play now: the present, a moment ago, faster, slower or backwards. A second
envelope shapes the volume. Repeats, stutters, half speed, tape stops, scratches and gates are all just shapes. Each
envelope lasts one bar and loops. A library of ready-made shapes sits in slots, and you switch between them by
clicking, or by automating which slot plays.

Its settings are saved with the song and every change can be undone.

## Add Y-Time to a track

1. Open [the Mixer](mixer) and pick a track.
2. Click an empty effect slot. The picker opens.
3. Under **Built in**, choose **Chops and gates** ("Chops, repeats, half speed, gates").

The window opens when you click the slot's name. Its title bar names the effect and its track, for example
"Y-Time (Insert 1)". The window can be resized. Close it and the effect keeps playing. Delete the effect and the window
closes.

The slot's own mix knob in the Mixer sets how much of Y-Time you hear against the dry sound. See
[Built-in effects](effects) for what every built-in effect shares.

## The window

- **The left panel**: the Time knob, Options, HOLD, the scratching clock, the time slots, the volume slots, and the
  volume knobs.
- **The mapping panel**: the slot being shown, its envelope drawn over one bar, with a strip of tools down its left
  side.
- **The bottom bar**: the slot's name and how slots are picked and synced.

::clip fx-time

## Pick a slot

The left panel has two grids of slots: **time slots** above, **volume slots** below. Each slot holds one envelope.

- Click a slot to pick it. While the song plays, it starts at its next sync point (see [Sync](#sync)).
- The playing slot is filled with its colour. A slot waiting for its sync point is outlined in its colour.
- The slot the mapping panel shows has a white outline.
- A slot you've changed from its preset is in italics. Its hover tip says "(changed)".

One time slot and one volume slot play at once. The first slot of each, **Empty**, does nothing: time flows normally
and the volume is full.

Right-click a slot for its menu:

- **Pick slot N**
- **Copy** and **Paste**: copy a slot's envelope onto another.
- **Clear**: an empty envelope.
- **Reset to its preset**: back to the shape it came with.
- **Create automation clip** and the other automation items. The picked slot can be automated, so the song can switch
  shapes bar by bar (see [Automate Y-Time](#automate-y-time)).

### The time slots

The time slots come with shapes such as **2 Beat Rpt**, **1/2 Repeat** to **1/16 Repeat**, **1 Beat Juggle**,
**Slow Dn Rpt**, **Spd Up Rpt**, **1/4 Pitch Up**, **1/4 Pitch Dn**, **Pitch Bend**, **Jumps**, **Reverse**,
**Backspin**, **Vinyl Off**, **Vinyl On**, **Vinyl Stop**, **Bar Scratch**, **Scratch**, **Trip Scratch**,
**1/2 Speed**, **X2 Speed**, **1/2 Grains**, **Slow Triplet**, **Underwater** and **Digital**.

### The volume slots

The volume slots come with gates and fades such as **2 Beat Gate** to **1/8 Bt Gate**, **Trance Gt 1** to
**Trance Gt 4**, **Saw Gate 1**, **Off Beat**, **Dotted Gate**, **Swing Gate**, **1/4 Gate Out**, **1/4 Gate In**,
**Gate Fade**, **Tremolo Slow**, **Tremolo Fast**, **Sidechain**, **Copter**, **AM**, **Fade In**, **Fade Out**,
**Fade In Out** and **Mute**.

### Rename a slot

Click the slot's name in the bottom bar ("Time: …" or "Volume: …"), type a new one, and press <kbd>Enter</kbd>.
<kbd>Escape</kbd> keeps the old name.

## Read the mapping panel

The mapping panel shows one bar of the shown slot's envelope. Switch between the time envelope and the volume envelope
with the two buttons at the bottom of the strip on its left. While the song plays, a line moves across it.

Hover over the panel to read the beat and value under the pointer at its top right. On the time envelope it also says
the speed.

### The time envelope

The top of the panel is now. Further down is further back in time, up to eight beats back. A point's height says which
moment plays at that point of the bar.

| What you draw | What you hear |
| --- | --- |
| A flat line | Normal speed, a fixed distance behind now. At the top, the sound as it is. |
| A line sloping down, less steep than the safety line | Slower, and lower in pitch, as a tape slowing down. |
| A line sloping up | Faster and higher in pitch. It can't go past now. |
| A line steeper than the safety line | Backwards. |
| A step | A jump to another moment: a repeat or a stutter. |
| A curve | A scratch. |

The **safety line** is a slope of one beat back per beat: following it is a pause. Lines twice as steep are drawn as
guides: following one is the sound played backwards at normal speed.

> **Note:** Y-Time can only play back what it has heard. When the song starts, what it keeps is empty, so in the first
> bar it can't reach back before the start.

### The volume envelope

The top is full volume and the bottom is silence. The shape is a gate or a fade over the bar.

## Edit an envelope

Pick a slot, then draw on the mapping panel. Changes are saved in that slot.

- **Add a point**: right-click an empty place. Keep the button held to drag it into place. Hold <kbd>⇧</kbd> to put it
  on the line.
- **Move a point**: drag it. Hold <kbd>⇧</kbd> to move it only sideways, <kbd>⌘</kbd> to move it only up and down, or
  <kbd>⌥</kbd> to move it off the grid.
- **Delete a point**: ⌥-click it.
- **Bend a line**: drag a segment's tension handle up or down. Hold <kbd>⌘</kbd> for fine changes. Right-click the
  handle to make the line straight again.

Right-click a point for its menu. It says which point it is, then:

- **Delete**
- The curve from this point to the next: **Single**, **Double**, **Alt single**, **Alt double**, **Hold**,
  **Stairs**, **Smooth stairs**, **Pulse**, **Wave** or **Half sine**.
- On the time envelope, **Pitch**: **1 semitone up** or **1 semitone down**.

The first point can't be deleted, and its curve can't be changed.

### The strip's tools

Down the left of the mapping panel:

- **Mapping envelope options** (the ▾ menu), for the shown slot: **Flip vertically**, **Scale levels up**, **Scale
  levels down**, **Normalize levels**, **Decimate points**, **Smooth up abrupt changes**, **Turn all points smooth**,
  then **Copy slot**, **Paste slot**, **Clear slot** and **Reset to its preset**.
- **Snap**: where points land. **X** is no snap; the others are 1/16, 1/12, 1/8, 1/6, 1/4 and 1/3 of a beat. A new
  window snaps to 1/8.
- **Step editing** (the pencil): drag across the panel to draw a step in each grid cell. Hold <kbd>⇧</kbd> for pulses.
- **Slide remaining points**: when you move a point, the points after it go along.
- **Freeze** (the snowflake): nothing can be edited, so you can click around without changing a shape.
- **The time envelope** and **the volume envelope**: which one the panel shows.

## The knobs

| Knob | Range | What it does |
| --- | --- | --- |
| **Time** | 0 to 100% | How much of the time envelope you hear against the sound as it is. |
| **Volume** | 0 to 100% | How much of the volume envelope applies. At 0%, the volume isn't touched. |
| **ATT** | 0 to 500 ms | Smooths the volume envelope where it rises. |
| **REL** | 0 to 1000 ms | Smooths the volume envelope where it falls. |
| **TNS** | −100 to 100% | Bends that smoothing's curve. |

Time and Volume start at 100%, the others at 0. The knobs work like every knob in Yen Studio: drag up or down
(<kbd>⌘</kbd> for fine), scroll, ⌥-click to reset, and right-click for **Type in value…**, automation and
[modulation](modulators).

## HOLD and the scratching clock

**HOLD** repeats a bar while you hold it down. What it repeats is set by **HOLD** in the bottom bar:

- **Last**: the bar just played.
- **Next**: the next bar.
- **Off**: the button does nothing.

The **scratching clock** is the platter in the left panel. Show or hide it from **Options**. It turns with
the bar while the song plays. Drag down on it to reach back in time, up to eight beats, and up to come forward again.
Let go and the sound springs back to now.

> **Note:** HOLD and the scratching clock are played live. What you do with them isn't saved in the song and can't be
> automated.

## Sync

The bottom bar says how slots change:

- **Link slots**: picking a time slot picks the volume slot with the same number, and the other way round.
- **One-shot** (the **1**): a slot plays once, for a bar, then slot 1 (Empty) takes over.
- **TRIG SYNC**: when a slot you pick starts. **Off** starts it at once; the others wait for the next 1/4 beat,
  1/2 beat, 1, 2 or 4 beats. A new Y-Time waits for the next 1/4 beat.
- **POS SYNC**: where in its envelope a slot starts. **Off** starts it from its beginning; the others start it where the
  song is inside that length. A new Y-Time uses 4 beats, so its envelopes stay in line with the bars.

In a narrow window the last two read **TRIG** and **POS**.

## Options

Click **▸ Options** at the top of the left panel:

- **Click reduction**: a jump fades across, so it doesn't click. On in a new Y-Time.
- **Smoothing attack compensation**: what's played after a jump starts the attack time earlier, so its start isn't
  lost under the **ATT** smoothing.
- **Remove DC offset**: filters out anything below about 10 Hz, which a slowed or stopped sound can leave behind.
- **HQ resampling**: a finer way of reading between samples when the speed changes.
- **View scratching clock**
- **Copy state** and **Paste state**: every setting and every slot, to put on another Y-Time.

> **Note:** **Trigger slots from MIDI notes** is in the menu but greyed: Y-Time can't hear MIDI notes yet. Pick slots
> by clicking them, or automate them. The **Key-held** button in the bottom bar is greyed for the same reason.

## Automate Y-Time

These can be automated: the time slot, the volume slot, **Time**, **Volume**, **ATT**, **REL** and **TNS**.

- Right-click a knob, or a slot grid, and choose **Create automation clip**.
- Or touch a control, then click **Automate “…”** in the window's title bar. It names the last control you touched
  and makes a clip of it.

Automating the time slot is how you write a performance: a repeat on the last beat of every fourth bar, a tape stop
before the drop. See [Automation](automation).

> **Tip:** Draw your own shape in a slot you don't use, then automate the slot number to call it in where you want it.
