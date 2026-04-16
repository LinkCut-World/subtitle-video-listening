# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A static web application for listening comprehension practice. Users segment videos and test their understanding without subtitles, then replay to check comprehension with subtitles visible.

## Running the Application

This is a pure static HTML/CSS/JS application with no build process. Open `English.html` in a web browser.

## Architecture

### Core Components

- **English.html**: Main HTML structure with video player and control buttons
- **English.js**: Application logic for video playback and A-B repeat
- **English.css**: Styling for control buttons

### Test-Then-Check Workflow

The application implements a segmented comprehension testing system:

| Action | Key | Start Point (st) | End Point (ed) | Blocker |
|--------|-----|------------------|----------------|---------|
| Continue | `D` | Set to current time | Reset | Visible (subtitles hidden) |
| Back | `A` | Jump to st | Set to current time | Hidden (subtitles visible) |

**State Variables:**
- `st`: Segment start time
- `ed`: Segment end time
- `flag`: Loop state (0 = first pass, 1 = replay finished)
- `block_h`: Blocker height percentage (0-50%)

**Flow:**
1. Press `D`: Set `st`, hide subtitles → watch and listen
2. Press `A`: Set `ed`, jump to `st`, show subtitles → replay and check
3. Video pauses at `ed`, press `D` again for next segment

### Keyboard Shortcuts

- `A`: Back - end segment, replay with subtitles
- `D`: Continue - start new segment
- `S`: Toggle play/pause

### Visual Blocker

A black overlay (`#inner`) covers the subtitle area during the test phase. Height adjustable from 0-50% using up/down buttons. Visibility toggles based on workflow phase:
- **Visible** during test phase (subtitles hidden)
- **Hidden** during check phase (subtitles visible)