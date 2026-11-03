---
title: Problems and logs
description: What to do when Yen Studio has no sound, a plugin crashes or a song won't open, and how to find the logs and report a problem.
---

Yen Studio is pre-alpha, so things will go wrong. This page covers the problems it already knows how to tell you
about, where it keeps its logs, and how to report the rest.

## No sound

Work down this list. Most of the time the answer is in the first few.

1. **Check the output device.** Open [Settings](settings) with <kbd>⌘,</kbd> and look at **Output device** on the
   **Music** tab. Is it the speakers or headphones you're listening on?
2. **Play the test tone.** At the bottom of the Music tab, under **Engine and plugins**, turn on **Test tone**. If you
   hear it, the engine and your device work: the problem is in the song. If you don't, it's the device or the volume.
3. **Check your Mac's volume**, and the volume on your audio interface if you use one.
4. **Check the song's mode.** Press <kbd>L</kbd> to switch between pattern mode and song mode. Song mode plays the
   Playlist; if there's nothing on it yet, there's nothing to hear. Pattern mode plays the pattern shown in the
   Channel rack.
5. **Check for mutes.** The number keys <kbd>1</kbd> … <kbd>0</kbd> mute and unmute the first ten channels, so one
   stray key can silence a channel. Look at the channel's mute light in [the Channel rack](channel-rack), and at its
   track in [the Mixer](mixer): muted, soloed elsewhere, or with its fader all the way down.
6. **Check the routing.** A channel plays through the mixer track it's routed to. If that track goes nowhere, or a
   bus on the way is muted, you won't hear it. The Mixer's meters show where the sound stops.
7. **Check the plugin.** If a channel's plugin couldn't load, its settings window says why in red, with **Try again**. See
   [A plugin crashes](#a-plugin-crashes).
8. **Check the engine.** If a message said **The audio engine stopped**, wait a moment: it starts again by itself,
   with your song. Then press <kbd>Space</kbd> to play again.

If the sound clicks or drops out rather than stopping, raise **Buffer length** in Settings, Music tab.

## Where the sound goes

Until you choose an output device in Settings, Yen Studio plays through your Mac's own output, the one in the menu
bar's sound menu. When that changes, Yen Studio follows it: plug in headphones and the sound moves to them, as it does
for any app. A message says **Now playing through** and the device's name.

It doesn't switch in the middle of an export or a take. It waits for it to end.

Once you choose an output device yourself, Yen Studio keeps to it, whatever else you plug in. Changing the buffer
length or the input device in Settings counts as choosing too.

> **Tip:** If you plugged headphones in and the sound stayed on the speakers, check whether you chose the speakers in
> Settings at some point. Choose the headphones there instead.

## A plugin crashes

Your plugins run inside Yen Studio's audio engine. When one crashes, the engine stops with it. A message says **The
audio engine stopped: A plugin may have crashed. It's starting again, with your song.** Wait a moment, then play
again.

If the plugin crashed while the song was opening, the song opens without it, so one bad plugin can't keep you out of
your song. The channel or effect is still there, and says why the plugin isn't:

- crashed while loading, so this song opened without it; or
- crashed reading its saved settings, so this song opened without it.

To try it again:

- **A channel's plugin**: right-click the channel in the Channel rack and choose **Try again**, or click **Try again**
  at the top of the channel's settings window.
- **An effect**: click the **Try again** arrow beside its name in the Mixer.

If it crashes again, the engine restarts and the song goes on without it. Look for an update to the plugin, or
remove it from the song.

### When a scan skips a plugin

When Yen Studio looks for your plugins, one that crashes during the scan is skipped and listed as skipped, with why.
The list is in the Plugin manager (**More plugins…** at the foot of [the plugin picker](plugins)) and in Settings,
Music tab, under **Engine and plugins**. Click **Try again** there to scan the skipped plugins again, for example
after updating one.

## A song won't open

When Yen Studio isn't sure it can read a song, it leaves the file alone rather than risk your work. The song still
shows on the Home screen, greyed out, saying **Damaged: can't be opened**. Hold the pointer over it to see why. It
can't be opened, and nothing is ever saved over it.

| What it says | What to do |
| --- | --- |
| It was made by a newer Yen Studio | Update Yen Studio, then open it |
| Its document (`project.json`) isn't there, though it's been saved before | It may still be syncing (iCloud or another sync app). It opens once the file arrives |
| Its document is damaged | A copy of the damaged document is kept in the package. Replace `project.json` in the package with a good copy, from a backup |
| Something in it is a link to somewhere else | Replace the link with the real files |

To see inside a song, find it in Finder, right-click it and choose **Show Package Contents**. A song is a `.yen`
package: `project.json` is the song itself, and its sounds are in `media`.

### Not where it was

A song that was moved or deleted outside Yen Studio shows as **Not where it was**. If you moved it, open it again
from its new place with <kbd>⌘O</kbd>.

## Two copies of a song

If a song was saved somewhere else while you had it open (on another Mac, or by a sync app), the next save keeps both.
A message says the song **was also saved somewhere else**, and names the copy.

Your window's version is saved as the song. The other version is kept inside the package, beside `project.json`, as
`project.conflict-` followed by the date and time. To use it instead, close the song, open the package with **Show
Package Contents**, and swap the two files.

## Takes recovered after a crash

If Yen Studio stops while you're recording, what you'd recorded isn't lost. The next time you open the song, it's
recovered, and a message says **Recovered a take from when the app stopped** (or how many takes).

- Takes whose place is known go back on [the Playlist](playlist) where they were recorded. Their timing may be off by
  your device's latency: listen, and nudge them if they're late or early.
- Takes whose place isn't known go into the song's sounds in [the Browser](browser). Drag them where they belong.

If a message says **Couldn't keep a take from when the app stopped**, the take's file is still in the song's
`recordings` folder, inside the package. Opening the song again tries again.

## Logs

Yen Studio keeps a log of what it did and what went wrong, on your computer only. Older lines are let go of, so it only
holds the latest few megabytes.

To find it, choose **Help › Show Logs**: Finder opens with the log file selected. You can also click **Show in
Finder** next to **Log files** in Settings, General tab.

**Help › Show Data Folder** opens the folder where Yen Studio keeps everything that isn't a song: the logs, the
assistant's chats, your recent songs and the like. It's
`~/Library/Application Support/Yen Studio/data`.

> **Note:** The log can contain the names of your files and folders. Read it before you send it to anyone.

## Report a problem

1. Choose **Help › Report a Problem…**. Your browser opens a new issue on Yen Studio's GitHub, with your version and
   your macOS version already filled in.
2. Say what happened and what you expected, and how to make it happen again.
3. If it helps, attach the log (**Help › Show Logs**). Check it first: it can contain the names of your files.

You need a GitHub account to post the issue. Nothing is sent until you post it, and the log is only sent if you attach
it yourself.

If you've turned on **Send usage and crash reports** in [Settings](settings#send-usage-and-crash-reports), crashes
are reported without your names or your songs. A written report is still the best way to say what went wrong.

## Yen Studio won't start

If Yen Studio takes a long time to open, it says so, with **Show Logs** and **Quit**. It opens by itself once it's
ready, or you can quit and try again. If it says its server keeps stopping, or couldn't start, quit, open it again,
and if it still won't start, report it with the log.
