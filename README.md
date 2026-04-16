# English - Listening Comprehension Tool

A web-based tool for practicing listening comprehension through segmented video testing. Test your understanding without subtitles, then check your comprehension during replay.

## How It Works

The tool uses a **test-then-check** workflow:

1. **Test Phase**: Watch a video segment with subtitles hidden
2. **Check Phase**: Replay the same segment with subtitles visible to verify understanding
3. **Repeat**: Move to the next segment

## Getting Started

### 1. Load a Video
- Click "Choose a video file" and select a video from your computer
- Adjust the subtitle blocker height using ↑/↓ buttons to cover subtitle area

### 2. Segment and Test

| Action | Button | Key | Blocker | Subtitles |
|--------|--------|-----|---------|-----------|
| **Continue** | Continue (→) | `D` | Visible | Hidden |
| **Back/Replay** | Back (←) | `A` | Hidden | Visible |
| **Play/Pause** | - | `S` | - | - |

### 3. Test-Then-Check Workflow

**Step-by-step process:**

1. Press `D` (Continue) to mark START point - blocker activates, subtitles hidden
2. Watch and listen to understand the content
3. When you reach a good stopping point, press `A` (Back) to mark END point
4. Video jumps back to START and **replays with subtitles visible**
5. Check your comprehension against the subtitles
6. Press `D` to set new START and continue to next segment
7. Repeat for each segment you want to practice

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
- Local video file with embedded or burnt-in subtitles

## Practice Tips

1. **Keep segments short** - 5-15 seconds is ideal for comprehension practice
2. **Listen actively** - Focus on understanding before checking
3. **Repeat difficult segments** - Use the replay to catch details you missed
4. **Adjust blocker height** - Cover only the subtitle area, not video content