---
title: Plugins
description: Load your VST3 and Audio Units plugins as instruments and effects, find them, set them up and keep their settings with the song.
---

Yen Studio loads your VST3 and Audio Units plugins. An instrument plugin goes on a channel in the [Channel rack](channel-rack). An effect plugin goes in a slot of a [Mixer](mixer) track. Each one opens in a window of its own, and every knob on it can be [automated](automation).

## Scan for your plugins

Yen Studio doesn't look for plugins until you ask. Do it once after you install it, and again whenever you install a new plugin.

1. Click **+** at the bottom of the Channel rack, or press <kbd>F8</kbd>.
2. Click **Scan for plugins** at the bottom of the picker.
3. Wait while the status line says which plugin it's scanning.

You can also scan from the Plugin manager (its **Scan for plugins** button), or from Settings › Music › **Engine and plugins** (its **Scan** button). There it says how many plugins were found.

Yen Studio looks in the usual places on a Mac for VST3 and Audio Units. A scan also drops plugins that are no longer on your disk.

### Plugins that are skipped

Each plugin is scanned on its own, one at a time. If one crashes, takes longer than 60 seconds to load, or has nothing in it Yen Studio can load, it's skipped and the scan carries on. Yen Studio doesn't crash with it.

Skipped plugins are listed under the scan, each with the reason, for example "Some Synth crashed during the scan and was skipped." Click **Try again** to scan them again, after updating the plugin for example.

If a song was opened before a plugin it uses was found, it picks the plugin up when the scan ends.

## Star the plugins you use

The pickers list the built-in instruments and effects, and only the plugins you've starred. That keeps them short. You star plugins in the Plugin manager.

1. Open a picker (click **+** in the Channel rack, or click an empty slot in the Mixer).
2. Click **More plugins…** at the bottom. It says how many more are on your computer.
3. In the Plugin manager, click a plugin's row to star it. Click it again to unstar it.

The Plugin manager lists every plugin found, with its maker, its kind and its format (VST3 or AU). Type in the search field to find a plugin by its name, maker or kind. The buttons at the top show **All**, **Instruments**, **Effects** or **Starred**. The bottom line says how many you've starred.

Stars belong to your computer, not to a song: they're the same in every song. Press <kbd>Escape</kbd> to close the Plugin manager.

## Choose a plugin in the picker

The picker opens from the Channel rack's **+** (<kbd>F8</kbd>), from a channel's **Replace…**, and from a Mixer slot.

- The search field has the focus as it opens: type to narrow the list.
- **Built in** comes first. In the Channel rack that's the [Sampler](sampler). In a Mixer slot, it's Yen Studio's [own effects](effects).
- Your starred plugins follow, grouped by the kind the plugin says it is: EQ, Reverb, Synth and so on. Plugins that don't say are under Other, at the end.
- Use <kbd>↑</kbd> and <kbd>↓</kbd> to move through a column and <kbd>←</kbd> and <kbd>→</kbd> to move across columns. Once you've typed in the search field, hold <kbd>⌥</kbd> with <kbd>←</kbd> and <kbd>→</kbd>. Press <kbd>Enter</kbd> to choose.
- Hover over a plugin and click its pin to pin it to the top. Pinned plugins get a column of their own, first. Click the pin again to unpin it. Pins belong to your computer, like stars.

## Plugin channels

Choose an instrument plugin from the Channel rack's **+** and it becomes a new channel. Plugins load in the background: the channel button shows a spinner until it's ready, and the plugin's window opens once it has loaded.

::clip serum

- Click the channel button to open or close the plugin's window.
- <kbd>⌘</kbd>-click the channel button to hear the channel.
- Right-click the channel button for the channel's menu. It has **Open** followed by the plugin's name, **Channel settings…**, **Replace…** (another instrument in its place, keeping its notes), **Clone** and **Delete**, among others.

A plugin channel plays its notes from the [Piano roll](piano-roll) and the step sequencer like any other channel.

### Channel settings

Each plugin channel has a settings window around the plugin, as FL Studio's wrapper does. Open it from the channel's menu (**Channel settings…**) or from the button in the plugin window's title bar.

At the top, the channel's own controls:

- **ON** mutes or unmutes the channel. <kbd>⌥</kbd>-click or <kbd>⌘</kbd>-click it to solo the channel.
- **PAN** and **VOL** are the channel's pan and volume, before its Mixer track.
- **PITCH** moves the notes it plays up or down, by whole semitones, up to two octaves either way. It changes the notes the plugin is sent, so it isn't pitch bend. You can automate it.
- **SWING** is how much of the song's swing this channel takes.
- **TRACK** is the Mixer track the channel plays into. Click the word **TRACK** to route it to a free Mixer track.

Under them, the **Plugin** tab:

- The plugin's name, and a status line: **Loading…** while it loads, its format once it has, how late it plays when it adds delay ("1024 samples late, compensated", for example), or the error if it failed.
- **Show plugin** or **Hide plugin** opens or closes its window. When the plugin failed, the button is **Try again**.

### Presets

The presets show once the plugin has loaded.

- If the plugin has several programs of its own, choose one in the program list, or step through them with the arrows beside it.
- **Your presets** is a list of presets you've saved for this plugin. Click one to load it. Hover over one and click the bin to delete it. The one you last loaded is highlighted.
- To save one, type a name in the field and click **Save preset**. If you leave the field empty, the preset takes the name shown in it.

Your presets for a plugin are the same in every song. They're kept by Yen Studio for each plugin, not in the [Browser](browser).

## Plugin windows

A plugin's window floats over Yen Studio. It opens centred over the app, moves with the app's window, and hides when you minimise the app.

Its title is the plugin's name, followed by the channel's name in brackets when it's different. Beside the close button, from right to left:

- **Channel settings**: for an instrument, opens the channel's settings window (volume, pan, pitch, track, presets). For an effect, it opens the Mixer with the effect's track selected.
- **Automate**: shows once you've moved a knob in the plugin, named after it. Click it to make an [automation clip](automation) of that parameter, over the whole song or over the Playlist's time selection.
- **The preset name**, with **Previous preset** and **Next preset** arrows. They step through the plugin's own programs if it has several, and through your saved presets if not.

While a plugin window is in front, your keys go to the plugin first. The ones it doesn't use, such as <kbd>Space</kbd> to play and <kbd>⌘Z</kbd> to undo, go to Yen Studio.

## Effects in Mixer slots

Every Mixer track has a column of effect slots, in the panel to the right of the Mixer. See [the Mixer](mixer) for the rest of it.

![The Mixer, with effects in a track's slots](shot:mixer)

1. Select a track in the Mixer.
2. Click an empty slot. The effect picker opens.
3. Choose one of Yen Studio's effects or one of your plugins.

A built-in effect's window opens at once. A plugin's opens once it has loaded.

- Click an effect's name to open or close its window. A spinner shows while a plugin loads, and a warning sign if it failed.
- The light beside it turns the effect on or off (bypass). The small knob is its mix: how much of the effected sound you hear. You can automate the mix.
- Click a slot's arrow, or right-click it, for its menu: **Open its window**, **Replace…**, **Bypass** or **Enable**, **Sidechain input**, **Move up**, **Move down** and **Delete**. On an empty slot it's **Choose a plugin…**.
- Turn the mouse wheel over a slot to move its effect up or down.
- Drag an effect onto another slot to move it there. Drag it onto another track's strip in the Mixer to move it to that track. Hold <kbd>⌘</kbd> or <kbd>⌥</kbd> while you drag to copy it.

If a plugin has a sidechain input, Yen Studio turns it on. Choose what feeds it under **Sidechain input**. See [Sidechain](sidechain).

## How plugin settings are saved

A plugin's settings are saved with the song, in its file, alongside the song itself. Yen Studio saves them a few seconds after they change, when you remove the plugin, and when you quit.

Moving a knob inside a plugin's window isn't an undo step, as in FL Studio. <kbd>⌘Z</kbd> undoes what you did in Yen Studio, not in the plugin. If you delete a plugin channel or effect and then undo, it comes back with its settings as they were.

## When a plugin fails

A plugin that crashes doesn't take Yen Studio down with it.

- **It crashes while the song opens.** The song opens without it, and a message says so: "Some Synth crashed while loading, so this song opened without it." If it crashed while reading its saved settings, only that channel or effect is left out.
- **It fails while playing.** An instrument goes silent, and an effect is skipped, so the track plays dry. It shows as failed. What it was doing after it failed isn't saved.

A failed instrument's channel button turns red, with a warning sign. A failed effect's slot shows a warning sign.

To load it again:

- In the Channel rack, right-click the channel button and choose **Try again**, or click **Try again** in its channel settings.
- In the Mixer, click the **Try again** button on the effect's slot.

If an [export](export) can't load a plugin, the export says which channels and effects weren't heard.

## Delay compensation

Some plugins delay the sound they process, a look-ahead limiter for example. Yen Studio keeps every track in time by holding the others back by the same amount. It's automatic, and it follows a plugin that changes its delay while you play.

- A plugin channel's settings say how late it plays, in samples.
- In the Mixer, the panel to the right shows the selected track's **Plugin delay** at the bottom, or "none".
- If a track still sounds early or late, type an **Offset** in milliseconds. It's added to what the plugins say: positive when the track's sound is later than that, so the other tracks wait; negative when it's earlier. **Reset** sets it back to zero.

[Modulators](modulators) aren't delay-compensated.

## Tempo and automation

Plugins are told the song's tempo and where it's playing, so their synced LFOs and delays follow the song. Every parameter a plugin has can be automated: move it in the plugin's window, then click **Automate** in its title bar.
