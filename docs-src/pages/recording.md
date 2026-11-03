---
title: Recording audio
description: Record a microphone or an instrument into mixer tracks: inputs, arming, monitoring, count-in, loop recording, punch markers and latency.
---

You record audio the way FL Studio does it: through mixer tracks. Give a [mixer](mixer) track an input, and it's armed.
Turn on Record and press Play, and each armed track records what comes into it. Every take lands on the
[Playlist](playlist) where you recorded it.

## Choose an input device

1. Open Settings (<kbd>⌘,</kbd>) and go to **Music**.
2. Under **Audio**, in **Input device**, choose your audio interface or the computer's microphone.

The first time, macOS asks whether Yen Studio may use the microphone. Allow it, or every take will be silent. If you
said no, Settings tells you so: allow it in **System Settings → Privacy & Security → Microphone**, then choose the input
again.

Once a device is chosen, Settings shows how many inputs it has and how late the device says its sound is.

> **Tip:** recording with the computer's microphone? Wear headphones, or the song playing from the speakers is
> recorded too.

## Give a track an input

1. Open the Mixer (<kbd>F9</kbd>) and select the track to record on.
2. In the inspector on the right, open **Input** and choose one of the device's inputs. They're listed as **Stereo**
   pairs and **Mono** channels.

Choosing an input arms the track; choosing **(no input)** disarms it. A track with an input shows a microphone on its
number (unless you've given it a colour).

**Input device settings…** at the bottom of the list goes to Settings. If you open a song recorded on another device,
an input this device doesn't have is kept and shown by its number.

## Arm and disarm tracks

An armed track records when you record. Arm or disarm a track with:

- the **arm light** on its strip in the Mixer, under the fader;
- the arm light beside **Input** in the inspector;
- the arm light on its audio track's header in the Playlist (see [Where takes land](#where-takes-land)).

Only a track with an input can be armed. Try to arm one without and Yen Studio asks you to choose its input first.

Which tracks are armed isn't saved with the song, and isn't undone.

## Monitoring

Click the sliders button beside **Input** for the track's input options. **Monitor** says when you hear the input:

| Monitor | You hear the input |
| --- | --- |
| **Off** | Never. |
| **When armed** | While the track is armed. This is the default. |
| **On** | Always, armed or not. |

You hear the input through the track's effects, so you can sing through a reverb. What's recorded is always the dry
input, before the effects: the take then plays back through the same effects, and you can still change them.

An armed track's meter shows its input even when it isn't monitored.

## Record

1. Arm the tracks.
2. Click **Record** on the toolbar (the round button with a red dot), or press <kbd>R</kbd>. The whole button turns
   red.
3. Press Play (<kbd>Space</kbd>). After the count-in, the armed tracks record.
4. Press <kbd>Space</kbd> again to stop.

The Record button pulses while it records. Each take is drawn on the Playlist as it records, its shape taken from the
input's level, and becomes an audio clip with its real waveform once its file is in.

- Turning Record on while the song is already playing starts recording at once, with no count-in.
- Turning Record off while recording stops it.
- Recording is the song's: if you're in pattern mode, Record switches to song mode first.
- With nothing armed, Record records the notes you play on the selected channel. See [MIDI keyboards](midi).

All the takes of one recording are one undo step. Undoing takes them off the Playlist; their files stay in the song's
sounds.

### Count-in

The **3·2·1** switch on the toolbar, beside the metronome, turns the count-in on and off. It's on to start: the metronome clicks for a bar
before recording starts, and the song waits. Right-click the switch (or Record) to choose **1 bar**, **2 bars** or
**4 bars**.

### Record's options

Right-click Record for its options. They're kept on this computer, the same for every song.

- **Count-in** and its length.
- **Loop record**: see below.
- **Blend (hear earlier takes)**: only with Loop record.
- **Disarm on stop**: Record turns itself off when play stops.
- *Recorded notes*: how notes you play are quantized to the Piano roll's snap (see [MIDI keyboards](midi)).

## Loop record and Blend

Without **Loop record**, recording plays on past the end of the loop, so you can record a whole take in one go.

With **Loop record** on, recording goes round the loop (the time selection on the Playlist, or the whole song) until
you stop, and every pass is a take of its own. Each pass lands on the Playlist track below the one before.

**Blend** decides what happens to earlier passes:

- **Off** (the default): each new pass mutes the ones before. You keep every take, and hear only the last. Unmute
  another on the Playlist to use it instead.
- **On**: you hear the earlier passes while you record the next, and they stay unmuted, so you can stack layers.

## Punch in and out

To keep only part of a recording, mark where it starts and stops on the Playlist:

1. Put play where recording should start and press <kbd>⌥T</kbd> to add a time marker.
2. Right-click the marker and choose **Start recording**.
3. Add another marker where it should stop, and choose **Stop recording**.

Now play from before the markers with Record on. You get a run-up to play along with, but only what's between the
markers is kept: audio takes are cut to them, and only notes that start between them are kept.

The first **Start recording** marker at or after where play starts is used, with the first **Stop recording** marker
after it. With no Stop marker, the recording runs on to wherever you stop. With no Start marker, everything is kept.

To turn a marker back into a plain one, choose **Marker** in its menu.

## Where takes land

Each take becomes an audio clip with a channel of its own in the [Channel rack](channel-rack), routed back into the
mixer track that recorded it. Because the take was recorded dry, you hear it through the same effects you heard while
recording. Takes are named after their track and when they were recorded, and saved in the song.

On the Playlist, a take goes where you recorded it in time, and on:

- the mixer track's **audio track**, if it has one;
- otherwise the first Playlist track where it fits, then the next free one below. Another track's audio track is
  never used.

### Audio tracks

An audio track is a Playlist track tied to a mixer track: its takes land there, and its header shows the arm light and
(when the track is tall enough) the mixer track's name and input. Click the name to open the Mixer on that track.

- In the Mixer, right-click a track and choose **Assign to new audio track**. A new Playlist track is made for it,
  named after it.
- On the Playlist, right-click a track's header and choose **Audio track ▸**, then a mixer track. **None (an ordinary
  track)** unties it.

A mixer track has one audio track at most.

## Latency

Every audio device is a little late: sound takes time to go in and come back out. Yen Studio moves each take earlier
by the latency the device reports, so takes land in time with the beat. Most of the time you don't need to do
anything.

If takes still sit late (or early), there are two places to correct it:

- **Settings › Music › Recording offset**, for every track. It shows the latency the device reports, there and back.
  A positive offset moves takes earlier; a negative one moves them later.
- **Input offset (ms)** in a track's input options, for that track alone. Use it for an input that's late in a way the
  device doesn't report.

To measure it: arm a track with a microphone, turn on the metronome, and record the clicks. Zoom in on the take and
see how far its clicks sit from the beat lines. Enter that in milliseconds.

A smaller **Buffer length** in Settings makes the device answer faster while you monitor, at the cost of more work
for the computer.

## If something stops while recording

Takes are written to the song's package as they record. If the app quits, crashes or loses its audio engine in the
middle of a recording, the takes are kept. The next time you open the song, Yen Studio puts them back on the Playlist
where they were recorded and tells you so. If it can't tell where a take belongs, it leaves it in the song's sounds
for you to place.

Quitting while recording stops the recording and waits a moment for the last takes, so they're saved with the song.

> **Note:** every take is recorded as 32-bit float audio, whatever your device.
