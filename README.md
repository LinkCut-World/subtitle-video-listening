# Subtitle Video Listening

A web-based tool for practicing listening comprehension with subtitled videos. Test your understanding without subtitles, then check your comprehension during replay.

## How It Works

All you need is a video with subtitles. The tool uses an adjustable blocker to hide the subtitle area.

Listen without subtitles, then replay that segment with subtitles visible when you need to check. Everything is controlled with just a few keys.

![screenshot](assets/screenshot.png)

*Screenshot for illustration. Credit: [Voice of America](https://www.voanews.com/).*

## Getting Started

### 1. Load a Video
- Click "Choose a video file" and select a video from your computer

### 2. Controls

| Action | Button | Key | Function |
|--------|--------|-----|----------|
| **Continue** | Continue (→) | `D` | Mark START, show blocker, hide subtitles |
| **Back/Replay** | Back (←) | `A` | Mark END, jump to START, hide blocker, show subtitles |
| **Play/Pause** | - | `S` | Toggle play/pause |
| **Blocker Up** | ↑ | - | Increase blocker height |
| **Blocker Down** | ↓ | - | Decrease blocker height |

### 3. Recommended Workflow

1. Press `D` (Continue) to mark START point - blocker activates, subtitles hidden
2. Watch and listen to a segment (e.g., one sentence)
3. If you understood the content, press `D` anytime to update START point
4. If you missed something or want to check, press `A` to mark END point and replay from START with subtitles visible. Video pauses at END by default
5. Press `D` anytime to resume testing with blocker, or `A` to replay again
6. Press `S` anytime to play/pause, ↑/↓ to adjust blocker height

## Running the Application

Open `English.html` in any modern web browser. No installation required.

```bash
# Windows
start English.html

# macOS
open English.html

# Linux
xdg-open English.html
```

## Requirements

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Local video file with subtitles

