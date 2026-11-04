---
title: Settings
description: Every tab and option in Yen Studio's Settings: themes, fonts, where songs are saved, reports, logs, the audio device, MIDI, quality, saving and plugins.
---

Settings is where you choose how Yen Studio looks, where your songs are saved, and where its sound goes. It opens as a
window over the app, and you can keep working with it open.

Press <kbd>⌘,</kbd> to open it, or choose **Settings…** from the **Edit** menu or the **Yen Studio** menu in the Mac's
menu bar. If it's already open behind other windows, <kbd>⌘,</kbd> brings it to the front. Press <kbd>⌘,</kbd> again
while you're in it, or <kbd>Esc</kbd>, to close it. With a song open it starts on the **Music** tab; from the Home screen it starts on
**General**. Click a tab to switch, or use the arrow keys, <kbd>Home</kbd> and <kbd>End</kbd> on the tabs.

## General

How the whole app looks, and where new songs go.

### Save new projects in

Each song is a file of its own, a `.yen` package. You can move, copy or back it up in Finder like any other file.

**Save new projects in** shows the folder new songs are saved to. It starts as `Documents/Yen Studio` in your home
folder. Click **Change…** to pick another folder. Once you've changed it, **Reset** puts it back.

Songs you already have stay where they are: this only changes where new ones go.

### Theme

Click a card to change the app's colours. Every theme changes the whole app at once.

| Theme | What it looks like |
| --- | --- |
| System | Light or Dark, as your computer is set |
| Light | Blue-grey, blue accent |
| Dark | Blue-grey, blue accent (the default) |
| Slate | Slate grey, orange and lime |
| Paper | Flat light grey, orange |
| Console | Charcoal, blue, green counter |
| Graphite | Dark grey, blue |
| Silver | Light grey, blue |
| Teenage | Aluminium, black screens, four knob colours |
| Synthwave | Night blue, neon pink and cyan |
| Luna | Cream, glossy blue |

### App icon

Choose how the app's icon looks in the Dock and in Finder. Click one of the icons shown.

### Show tabs

Under **Window**, **Show tabs** turns the strip of open songs along the top of the window on or off. Without it, the
menus start the window. <kbd>⌘P</kbd> still finds and switches between your songs.

### Fonts

Under **Text**:

- **Interface font**: menus, panels, labels and the assistant's chat. DM Sans by default; Inter, Geist, IBM Plex Sans,
  Figtree, Manrope, Tahoma, or your system's font.
- **Numbers and code**: times, values, the position and tempo displays. Geist Mono by default; JetBrains Mono, IBM
  Plex Mono, Fira Code, or your system's monospaced font.

A sample line under them shows both.

### Send usage and crash reports

Under **Reports**, **Send usage and crash reports** is off until you say yes. The first time Yen Studio opens, a card
in the corner asks **Help make Yen Studio better?** Click **Send reports** or **No thanks**. Either way, you can
change it here at any time.

When it's on, reports say:

- your version of Yen Studio and your system;
- when the app opens, plays and exports;
- which plugins you load;
- what went wrong when something breaks, including a crash read from macOS's crash reports the next time the app
  opens.

They never include your songs, sounds or file names, and nothing tied to your name. Nothing is sent before you say
yes, and nothing is sent once it's off.

### Logs

**Logs** keeps a record of what the app did and what went wrong, on your computer only. Click **Show in Finder** next
to **Log files** to find them. Only the latest few megabytes are kept. See [Problems and logs](troubleshooting) for
when to use them.

## Music

Where your sound goes, how sound is read, and your plugins.

### Audio device

The engine plays every song through these devices, whichever song is open.

- **Output device**: where you hear the song. If the device has its own control panel, a **Device panel** button
  opens it.
- **Input device**: what you record from. Choose **No input** if you don't record audio. To record you need an audio
  interface, or the computer's microphone. Use headphones with a microphone, so the song isn't recorded too. Once an
  input is chosen, the line under it says how many inputs it has and how late it is.

Choosing an input asks macOS for access to the microphone first. If you said no, allow Yen Studio in **System
Settings › Privacy & Security › Microphone**, then choose the input again.

> **Note:** Until you choose an output device here, the sound follows your Mac's own output, so it moves to
> headphones when you plug them in. Once you choose one, Yen Studio keeps to it. See
> [Where the sound goes](troubleshooting#where-the-sound-goes).

### Buffer length

**Buffer length** is the size of the engine's audio buffer, in samples. The line under it says how many milliseconds
of buffer that is, and how long until a sound is heard on this device.

A smaller buffer answers faster, which matters when you play a MIDI keyboard or record. A larger one works the
computer less hard. If you hear clicks or dropouts, raise it.

### Sample rate

**Sample rate** is the rate the engine runs at. 44.1 or 48 kHz suits most work. Higher rates work the computer harder.

### Recording offset

**Recording offset** shows when your device reports it. Takes already land where the driver's latency says they
should. If your takes still sit late, set this to move them earlier by that many milliseconds. A negative number
moves them later. See [Recording audio](recording).

### MIDI inputs

Each MIDI keyboard or pad plugged in is listed, with a **Use** switch. Keyboards play the channel selected in
[the Channel rack](channel-rack), and recording keeps what you play. A keyboard you plug in is used at once: you don't
need to come back here.

Under each keyboard a line says what it's doing:

- **Playing the selected channel.**
- **Couldn't be opened: another app may have it.** Quit the other app, or turn the keyboard off there.
- **Turned off.**

With no keyboard, <kbd>⌘T</kbd> plays the selected channel from your computer's keyboard instead. See
[MIDI keyboards](midi).

### Quality

How samplers and audio clips are read when they're pitched, or recorded at another rate than the song. Better methods
sound cleaner (no faint whistles on bright sounds) and cost more. Your plugins aren't affected.

- **Resampling while playing**: **Linear**, **Hermite (4-point)** or **Sinc (32-point)**.
- **Resampling in exports**: the same choices, used when you [export](export).
- **Stretch mode**: how an audio clip stretches when you drag its edge with the Playlist's Stretch on
  (<kbd>⇧M</kbd>). **Stretch** keeps its pitch. **Resample** makes it higher when it's faster, as a record would.

### Reset plugins on stop

Under **Playback**. On, stopping silences delays, reverbs and every other tail at once. Off, they ring out after a
stop, and pressing Stop again silences them.

### Save automatically

Under **Saving**. On (the default), every change is saved as you make it. Off, a song is saved only when you press
<kbd>⌘S</kbd> or choose **File › Save**, and closing it asks whether to save your changes. See
[Saving](getting-started#saving).

### Open favourite folders in place

Under **Browser**. On, a folder you've starred opens under **Favourites** in [the Browser](browser). Off, it's a
shortcut: clicking it shows the folder where it is among your folders.

### Plugins

The state of the audio engine, and your plugins.

The status card shows the device, its sample rate and buffer, how late its output is, how hard the engine is working,
any dropouts, and the output's level on a meter. Turn on **Test tone** to check you can hear the engine at all.

The **Plugins** card says how many plugins were found (VST3 and Audio Units). Yen Studio looks for new ones each time
it starts; click **Scan** to look at every plugin again. While it scans, the card says how far it has got. A plugin
that crashed during a scan is listed under it as skipped, with the reason and **Try again**. See [Plugins](plugins).

### Starting point

Under **New songs**. New songs start with the starter kit in the rack. To start each one from a song of yours, choose
**Use as starting point** in its menu on the Home screen. Once one is set, this says which song new ones copy, and
**Stop using it** goes back to the starter kit.
