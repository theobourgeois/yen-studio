---
title: Sidechain
description: Key any effect slot from another mixer track, choose where the key is taken, duck a bass under a kick in two clicks, and use your plugins' sidechain inputs.
---

A sidechain lets an effect listen to one track while it works on another. The classic case is a compressor on a bass
that ducks every time the kick hits. In Yen Studio the key belongs to the effect slot: pick the track it listens to
from the slot's menu. You don't need a 0% send to set it up, as you would in FL Studio, though those still work.

## Duck a track under another

The quickest way to make a bass duck under a kick:

1. Open the [Mixer](mixer) (<kbd>F9</kbd>).
2. Right-click the kick's track and open **Sidechain to ▸**.
3. Pick the bass's track, then **Duck with a new Y-C**.

A [Y-C](y-c) goes into the bass track's first free slot, set to the **Sidechain – Duck to Kick** preset and keyed from
the kick, and its window opens. It's one undo step. The item is greyed when the bass track has no free slot, or when
the key would make a loop.

Turn the Y-C's threshold and ratio to taste: the [Y-C page](y-c) says what each control does.

## Key an effect from a track

To key an effect that's already in a slot:

1. In the Mixer, select the track with the effect.
2. Click the slot's arrow in the inspector, or right-click the slot.
3. Open **Sidechain input ▸** and pick the track under **Key from**.

Under **Taken**, choose where the key comes from on that track (see [Where the key is taken](#where-the-key-is-taken)).
**No key** takes it away.

A slot with a key shows a key badge and the source track's number. The submenu reads **Sidechain input (N)**, with the
source's number.

### From the source track

You can also start from the track that makes the key. Right-click it and open **Sidechain to ▸**. Under *This track's
sound is the key of…*, each other track has a submenu:

- **Its effects that hear a key**: the effects on that track that can listen to one. A tick marks those already keyed
  from this track; pick one to key it, or pick a ticked one to take its key away.
- **Duck with a new Y-C**: see [Duck a track under another](#duck-a-track-under-another).

## Where the key is taken

| Taken | What the effect hears |
| --- | --- |
| **Before its effects** | The source track's sound as it comes in, before its own effects. |
| **After its effects** | After the source's effects, before its fader. This is the default. |
| **After its fader** | After the source's fader and mute, as FL Studio's sends are. |

With the default, the source's fader and mute don't change how much the effect ducks: you can turn a kick down
without the bass ducking less. Pick **After its fader** if you want them to.

## Effects that listen to a key

- **[Y-C](y-c)**: its side chain section. Set the trigger to **External** and choose the track under **Key from**;
  choosing a key there turns External on. With External and no key, Y-C says *No key yet: it hears silence*. The
  section also has the key's **Level**, **Audition** (hold it to hear what the detector hears) and **Stereo Link**.
- **[Y-EQ](y-eq)**: a dynamic band with a threshold of its own has an **SC** button. Turn it on and the band reacts to
  the slot's key instead of its own range.
- **[Y-R](y-r)**: open **▸ Advanced**, and under **Ducking** set **Key** to another track instead of **This track**.
  The reverb then ducks under that track. Y-R's key is taken after the source's fader unless you change it.
- **Your plugins** that have a sidechain input. The engine asks each plugin whether it has one.

Y-Delay, Y-Multiband, Y-Time, Y-Tune, Y-Pan and Y-Pitch don't listen to a key, so their slot menus don't offer one.

A plugin without a sidechain input shows **Sidechain input (none)**, greyed. If such a plugin has a key anyway, the key
is kept but its badge is greyed, to say the plugin can't hear it.

![Y-C's window](shot:effect-compressor "Y-C, whose side chain section takes the key")

## What you'll see in the Mixer

Keys are drawn as cables in the Mixer, dotted and in the accent colour, from the source track to the keyed one (select
either track to see them). See [Cables](mixer#cables).

The **Sidechain input ▸** list greys out any track whose sound already reaches the effect's track: keying from it
would make a loop.

## How keys behave

- **Order.** A key makes the source track play before the keyed one, the way a send does, and it never makes a loop.
- **Solo.** A source track silenced by another track's solo still feeds its keys, so the ducking doesn't stop when
  you solo the bass.
- **Mute.** Muting the source silences its key only when the key is taken **After its fader**.
- **Delay compensation.** Keys are [compensated](mixer#delay-compensation) like every other path: a key from a track
  with a delaying plugin still lines up.

## FL Studio's sidechain sends

**Sidechain to this track** in a send switch's menu, and **Sidechain selected to this track** under **Track routing
▸**, still make FL Studio's 0% sends, and they still make the source track play first. You don't need them to key an
effect: choose the key in the slot's menu instead.

## Pumping without a compressor

To make any control dip on each kick (a filter's cutoff, a reverb's mix, a track's fader), use a
[modulator](modulators) instead of a key: right-click the control, then **Modulate ▸ Follow track ▸** and the kick.
