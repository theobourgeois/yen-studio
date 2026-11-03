---
title: Getting started
description: Install Yen Studio on a Mac, open the demo song, start your own and make a first beat. Where your songs are kept and how saving works.
---

Yen Studio is a music app for the Mac. It works the way FL Studio does: a channel rack, a piano roll, a playlist and a mixer, each in a window of its own. This page gets it onto your Mac and gets a first beat playing.

## Install Yen Studio

You need a Mac with Apple Silicon, running macOS 14 or later. There's no Windows version yet, and there's no account to make.

1. [Download Yen Studio](https://github.com/theobourgeois/yen-studio/releases/latest/download/Yen-Studio-arm64.dmg).
2. Open the download and drag Yen Studio to Applications.
3. Open Yen Studio from Applications.

The first time, it asks whether to send usage and crash reports. They never include your songs, your sounds or your file names. Click **Send reports** or **No thanks**. You can change your answer in [Settings](settings) at any time.

When a newer release is out, Home tells you. Nothing installs itself: download the new one and drag it to Applications as before.

> **Note:** Yen Studio is pre-alpha. Expect bugs and missing features, and keep copies of songs you care about.

## Find your way around Home

Home is where Yen Studio opens. It lists your songs and starts new ones.

- **New song** starts a song. On Home, <kbd>⌘1</kbd> does the same.
- **Open…** (<kbd>⌘O</kbd>) opens a song's file from anywhere: a copy, a backup, or one someone sent you.
- **Recent** lists the songs you've opened. Switch between the list, cards and sheet views at its top.
- **Search songs** (<kbd>⌘F</kbd>) filters the list as you type.

Click a song's name to open it. Click **⋯** on a song, or right-click it, for more: Open, Rename, Duplicate, Show in Finder, Use as starting point, Remove from Recents and Move to Trash….

To come back to Home from a song, press <kbd>⇧⌘H</kbd> or click the Home button at the start of the tab strip. Press <kbd>⇧⌘H</kbd> again to go back to the song.

## Open the demo song

The first time you open Yen Studio, Home is empty. Click **Open the demo song** to hear a finished beat and look at how it's put together.

The demo song opens in song mode, so <kbd>Space</kbd> plays the whole arrangement. Its sounds are the same ones a new song starts with. Change anything you like: it's your copy.

![The demo song: the Playlist, with the Channel rack open over it](shot:hero "The demo song.")

The button shows only while Home has no songs in its list.

## Start a song

Click **New song** on Home, or choose **File › New Song**.

A new song starts with a drum kit in the [Channel rack](channel-rack): Kick, Clap, Hat and Snare, in the order FL Studio puts them. Adding the kit isn't an undo step, so <kbd>⌘Z</kbd> won't take it away.

New songs start at 140 BPM. To change that, right-click the tempo display and choose **Make … BPM the default**.

### Start from a song of your own

If you always start with the same sounds and routing, make that your starting point:

1. On Home, click **⋯** on the song you want to start from.
2. Choose **Use as starting point**.

From then on, **New song** makes a copy of it. To start with nothing at all, ⌥-click **New song**.

## Where your songs are kept

Every song is a `.yen` file. Finder shows it as one file, but it's a folder inside, holding the song, its samples, your plugins' states and your recordings. Copy the `.yen` and you've copied everything.

New songs go in **Documents › Yen Studio**. To keep them somewhere else, click **Change** at the bottom of Home's left column, or go to **Settings › General**. Songs you already have stay where they are.

- **Show in Finder** (the File menu, or a song's menu on Home) shows a song's file.
- Double-click a `.yen` file in Finder to open it in Yen Studio.
- Drop a `.yen` file on Home to open it.

If a song's file has been moved, renamed or deleted, its card on Home says so. Click **Locate…** to find it, or **Remove** to take it off the list.

> **Note:** **Remove from Recents** only takes a song off Home's list. **Move to Trash…** moves its file to the Trash.

## Rename a song

Click the song's name, at the left of the toolbar. Type the new name and press <kbd>Return</kbd>. <kbd>Esc</kbd> keeps the old one.

You can also choose **File › Rename…**, or double-click a song's name on Home.

The song's file takes the new name once you close the song. Until then, it keeps its old name in Finder.

## Undo and redo

- <kbd>⌘Z</kbd> undoes your last change.
- <kbd>⇧⌘Z</kbd> redoes it. <kbd>⌘Y</kbd> does too.

The undo and redo buttons are at the right end of the toolbar, and both are in the Edit menu.

A drag is one step, however far it goes. Changes you make inside a plugin's own window aren't undo steps, as in FL Studio.

## Saving

Your song saves itself as you work, after every change. A drag saves once, when you let go. You don't need to press anything.

Press <kbd>⌘S</kbd>, or choose **File › Save**, to save straight away. You'll see **Saved**.

**File › Save a Copy…** writes a copy of the song somewhere else.

If a save fails, a message says so. Keep the window open until it goes away. If the song's file is gone from where it was, Yen Studio tells you that changes aren't being saved.

## Make a first beat

Start a new song, then:

1. **Program the drums.** In the Channel rack, click a step to turn it on. Right-click turns it off. Drag across the steps to paint several. Put the kick on the first step of each beat and the clap on beats two and four.
2. **Play it.** Press <kbd>Space</kbd>. The pattern loops until you press <kbd>Space</kbd> again. To change the tempo, drag the tempo display up or down, or click it and type.
3. **Add a sound.** Click **+** under the channels and pick an instrument: the Sampler, or [one of your plugins](plugins).
4. **Play some notes.** With the new channel selected, press <kbd>⌥3</kbd> to open the [Piano roll](piano-roll). Click in the grid to draw notes. Right-click deletes one.
5. **Arrange it.** Press <kbd>⌥1</kbd> to open the [Playlist](playlist), and drag your pattern from the Picker onto a track. Click **SONG** in the toolbar, then press <kbd>Space</kbd> to play the arrangement.

::clip rack

When it sounds right, press <kbd>⌘R</kbd> to [export it](export) as a WAV file.

## Where to go next

- [Windows and the toolbar](workspace): how the windows move and what each part of the toolbar does.
- [Coming from FL Studio](coming-from-fl-studio): what's the same, what's different, and FL's keys on a Mac.
- [The Channel rack](channel-rack), [the Sampler](sampler) and [the Mixer](mixer): the parts you'll use most.
