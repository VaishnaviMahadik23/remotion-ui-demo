# Remotion Product Launch Video Recreation

A React + TypeScript + Remotion project created to recreate a provided product launch video reference.

The project focuses on accurately reproducing the reference video's visual design, layout, animations, transitions, typography, spacing, depth, and motion while maintaining a clean and reusable component-based architecture.

## Overview

This project was developed as part of a technical and design evaluation to recreate a product launch video using Remotion.

The video is implemented programmatically using React, TypeScript, and Remotion rather than embedding or hardcoding the final video.

### Key Focus Areas

- Frame-based animation
- Accurate animation timing
- Smooth transitions and easing
- Typography and visual hierarchy
- Precise spacing and positioning
- Gradient backgrounds
- Glassmorphism effects
- Shadows and blur
- Depth and perspective
- Product and UI animations
- Scene-based composition
- Reusable React components
- Type-safe TypeScript implementation
- Remotion Studio compatibility
- High-quality MP4 rendering

Detailed technical documentation is available in:

`docs/PROJECT_DOCUMENTATION.md`

## Features

- Programmatic video generation with Remotion
- React-based component architecture
- TypeScript implementation
- Frame-based animations
- Smooth scene transitions
- Product and UI showcase animations
- Glassmorphism effects
- Gradient backgrounds
- Shadows and blur effects
- Reusable UI components
- Modular scene structure
- Remotion Studio preview
- MP4 video rendering

## Technology Stack

| Technology | Purpose |
| --- | --- |
| React | Component-based UI architecture |
| TypeScript | Type-safe development |
| Remotion | Programmatic video generation |
| CSS | Styling and visual effects |
| Node.js | JavaScript runtime |
| npm | Package management |
| Git | Version control |
| GitHub | Source code hosting |

## Project Structure

    remotion-ui-demo/
    │
    ├── public/
    │
    ├── src/
    │   ├── components/
    │   │   ├── Background.tsx
    │   │   ├── ChatInput.tsx
    │   │   ├── DoneCheck.tsx
    │   │   ├── FadeTransition.tsx
    │   │   ├── GlassCard.tsx
    │   │   ├── MessagePanel.tsx
    │   │   ├── ProgressBar.tsx
    │   │   ├── SetupPreferences.tsx
    │   │   └── Title.tsx
    │   │
    │   ├── scenes/
    │   │   ├── IntroScene.tsx
    │   │   ├── StageOneScene.tsx
    │   │   └── StageTwoScene.tsx
    │   │
    │   ├── Root.tsx
    │   ├── index.ts
    │   └── template.tsx
    │
    ├── docs/
    │   └── PROJECT_DOCUMENTATION.md
    │
    ├── .gitignore
    ├── .prettierrc
    ├── eslint.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── remotion.config.js
    └── skills-lock.json

# Getting Started

## Prerequisites

Make sure the following are installed:

- Node.js
- npm
- Git

### Check Node.js

    node --version

### Check npm

    npm --version

### Check Git

    git --version

## Installation

### Clone the repository

    git clone https://github.com/VaishnaviMahadik23/remotion-ui-demo.git

### Move into the project directory

    cd remotion-ui-demo

### Install dependencies

    npm install

## Run Remotion Studio

Start the Remotion development environment:

    npm run dev

Remotion Studio will normally be available at:

    http://localhost:3000

Remotion Studio can be used to:

- Preview the composition
- Inspect individual frames
- Check animation timing
- Test transitions
- Adjust positioning
- Debug components
- Compare animation states
- Verify the final composition

## Rendering

The final video can be rendered using the Remotion CLI.

    npx remotion render src/index.ts UIDemo out/product-launch.mp4

The rendered video will be generated at:

    out/product-launch.mp4

The composition ID must match the composition registered in `src/Root.tsx`.

## Main Files

| File | Description |
| --- | --- |
| `src/Root.tsx` | Registers the Remotion composition |
| `src/template.tsx` | Main video template |
| `src/scenes/` | Individual video scenes |
| `src/components/` | Reusable UI and animation components |
| `public/` | Static assets |
| `docs/PROJECT_DOCUMENTATION.md` | Detailed technical documentation |

## Development Workflow

### Start Remotion Studio

    npm run dev

### Check Git status

    git status

### Add changes

    git add .

### Commit changes

    git commit -m "Update video implementation"

### Push changes

    git push

## Assignment Deliverables

The project contains the required deliverables for the technical and design evaluation.

### Remotion Template

`src/template.tsx`

Contains the main Remotion video implementation.

### Supporting Components

`src/components/`

Contains reusable UI and animation components.

### Scene Components

`src/scenes/`

Contains the individual video scenes.

### Supporting Assets

`public/`

Contains the required static assets used by the composition.

### Final Rendered Video

`out/product-launch.mp4`

Contains the final rendered MP4 video.

# Design and Animation

The implementation focuses on recreating the reference video with attention to:

- Visual layout
- Typography
- Spacing
- Positioning
- Gradients
- Shadows
- Blur
- Glassmorphism
- Depth
- Perspective
- Scale animations
- Position animations
- Opacity transitions
- Spring animations
- Scene transitions
- UI micro-interactions

The detailed implementation and technical decisions are documented in:

`docs/PROJECT_DOCUMENTATION.md`

# Remotion Animation

The project uses Remotion's frame-based animation system.

Common Remotion APIs used by the project include:

- `useCurrentFrame()`
- `interpolate()`
- `spring()`
- `Sequence`
- `AbsoluteFill`

The project uses a 30 FPS composition.

At 30 FPS:

- 30 frames = 1 second
- 60 frames = 2 seconds
- 90 frames = 3 seconds
- 120 frames = 4 seconds
- 150 frames = 5 seconds

Using frame-based animation provides precise control over the timing and synchronization of the video.

# Documentation

Detailed project documentation covering the architecture, scenes, reusable components, animation system, visual design, timing, rendering, and development workflow is available in:

`docs/PROJECT_DOCUMENTATION.md`

# Git Repository

The project repository is hosted on GitHub:

https://github.com/VaishnaviMahadik23/remotion-ui-demo

# Author

**Vaishnavi Mahadik**

B.Tech Information Technology

# License

This project was created for technical evaluation and educational purposes.

The provided reference video and any third-party assets used in the project remain subject to their respective copyrights and licenses.