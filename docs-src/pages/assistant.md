---
title: Assistant
description: Set up Yen Studio's assistant with your own Claude Code or Codex, pick a model, see what it can do, and undo its changes with checkpoints.
---

The assistant is a chat beside your song. Ask it for a beat, a second pattern, a mix move or a measurement, and it
works on the song in front of you: you watch each change happen, and you can undo any of it. It runs on your own
Claude Code or Codex, so it uses your account with Anthropic or OpenAI. You don't need it: the rest of Yen Studio
works without either.

Press <kbd>⌘I</kbd>, or click the **Assistant** button at the right of the menu row, to show or hide it.

::clip assistant

## Set it up

The assistant needs one of these on your Mac, installed and logged in:

- **Claude Code**, with a Claude account. Install it from [claude.com/claude-code](https://claude.com/claude-code),
  then open Terminal and run `claude` to log in.
- **Codex**, with a ChatGPT account. Install it with `npm install -g @openai/codex`, then run `codex login` in
  Terminal.

Then open the assistant. If it can't find either, or finds one that isn't logged in, it says what's missing. Fix it,
then click **Check again**. If you've only set up one of the two, choose it in the model menu under the message box.

> **Note:** Yen Studio finds Claude Code or Codex where your Terminal would, so an install through a Node version
> manager works too.

## Ask for something

1. Open the assistant with <kbd>⌘I</kbd>.
2. Type what you want in the message box. On an empty chat a few suggestions are shown: click one to send it.
3. Press <kbd>Enter</kbd> to send. <kbd>⇧Enter</kbd> starts a new line, and <kbd>Esc</kbd> leaves the box.
4. Watch it work. Each step it takes is listed in the chat as it happens, and the song changes in front of you.
5. To stop it partway, click the stop button where the send button was.

Under the box, a line shows what's sent with your message so the assistant knows where you are in the song.

Before it deletes anything, the assistant asks in the chat. Click **Delete** to let it, or **Don't** to keep it.

The panel's left edge drags to make it wider or narrower. Double-click the edge to put it back.

## One chat per song

Each song has its own chat, kept with Yen Studio's data on your computer. When you open a song, its chat is there.
Click **New chat** at the top of the panel to start again.

A chat works on its own song. If you switch to another song while it's working, it keeps going on the first one.

## Pick a model and a thinking level

Under the message box are two menus.

**The model menu** lists the models of Claude Code and Codex. The rail down its side shows **Starred** and each
provider. Type in **Search models…** to search them all. Star a model to keep it under **Starred**. In the menu,
<kbd>⌘1</kbd> … <kbd>⌘9</kbd> pick a model, and the arrow keys and <kbd>Enter</kbd> move and choose. Older models are
under **Legacy models**.

**The thinking menu** sets how hard it thinks: higher is slower and more thorough. The levels go from **Low** up;
which ones a model has depends on the model, and a model with no levels hides the menu. When you change model, your
level carries over if the new model has it.

Both menus are locked while it works. Pick another model once it's done.

If you switch between Claude Code and Codex in the middle of a chat, the other one starts a conversation of its own
and is told what it missed.

## What it can do

The assistant works with the same parts of Yen Studio you do. It can:

- **Read the song**: its channels, patterns, Playlist, mixer, tempo, swing and settings.
- **Build beats and melodies**: add channels, write steps and notes, quantize, chop and transpose, and change any
  channel's settings. See [Channel rack](channel-rack) and [Piano roll](piano-roll).
- **Work with patterns**: add, rename, clone, transpose, move and remove them.
- **Arrange**: place, move, slice and chop clips on [the Playlist](playlist), make them unique, split a pattern by
  channel, add audio clips, stretch them, set time markers, and render a part of the song to audio.
- **Use sounds**: browse and search your sample folders, preview a sound (you hear it), load it onto a channel, add a
  folder to [the Browser](browser), and star sounds and plugins.
- **Use your plugins**: list them, load them, pick their presets, and try loading one again that failed. See
  [Plugins](plugins).
- **Mix**: route channels to mixer tracks, change levels and panning, add, remove and move tracks, make a bus or a
  group, set sends, solo, and add, change, move or copy effects. It can set up [sidechain](sidechain) compression
  and ducking. See [Mixer](mixer).
- **Work every built-in effect**: read and change [Y-EQ](y-eq), [Y-C](y-c), [Y-L](y-l), [Y-R](y-r) and the rest.
- **Automate**: draw [automation](automation) and set up [modulators](modulators).
- **Detect tempo, extract stems and convert audio to notes**. See [Stems and notes](stems-and-notes).
- **Record**: list your inputs and MIDI keyboards, arm tracks and record. See [Recording audio](recording).
- **Play, stop and export**: WAV, MP3, FLAC, OGG, M4A, MIDI or stems. See [Export](export).
- **Measure the sound**: it renders or captures a passage and measures it on your computer: levels, loudness and true
  peak, the balance between low and high, and the stereo width.
- **Help mix a vocal**: measure a vocal against the beat, render a few ways of mixing it, and apply the one you
  choose.

It can't hear. When it talks about how something sounds, it's going on those measurements and on what it knows about
mixing, not on listening. Trust your ears over it.

## Undo its changes

Every change the assistant makes is an ordinary edit: <kbd>⌘Z</kbd> takes them back one at a time. Two more ways
take back a lot at once.

### Review bar

While the assistant has changed something you haven't kept yet, a bar over the message box says how many changes
there are to review.

- **Undo all** puts the song back as it was before those changes. If you've edited the song yourself since, your
  edits go too. Hold the pointer over the button to see which.
- **Keep all** accepts them, and the bar goes.

Both are greyed out while it's working. Either way, <kbd>⌘Z</kbd> can still take it back.

### Restore checkpoint

Hold the pointer over a message you sent, and click **Restore checkpoint** under it. The song goes back to how it was
when you sent that message. Your own edits since then go too: the button's tip says so when there are some.

The chat then says **Restored to before this message**, and the messages after it fade. Click **Redo** there, or press
<kbd>⌘Z</kbd>, to bring it all back.

> **Note:** Checkpoints last until you quit Yen Studio. After that, use <kbd>⌘Z</kbd>.

## What's sent where

Yen Studio itself sends nothing about your song. When you use the assistant, what you ask and the parts of your song
it reads go to Anthropic or OpenAI through your own Claude Code or Codex, under that service's terms.

- The assistant only reaches your song through Yen Studio's own tools. Claude Code is run without its shell or file
  tools, and Codex in a read-only sandbox with its other tools turned off.
- Audio measurements are made on your computer. What's sent is the numbers, not the sound.
- Your chats are kept in Yen Studio's data folder on your computer.

If you don't open the assistant, nothing is sent.
