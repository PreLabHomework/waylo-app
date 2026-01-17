# Project Structure

This document explains how the Waylo repository is organized.

## Root Directory
```
waylo-app/
├── docs/               # All technical and planning documentation
├── design/             # UI/UX designs, wireframes, and brand assets
├── src/                # Source code (created after initial setup)
├── .gitignore          # Files to exclude from Git
├── README.md           # Project overview
├── WORKFLOW.md         # Development workflow guide
└── PROJECT-STRUCTURE.md # This file
```

## /docs - Documentation

Documentation is organized by development phase:
```
docs/
├── phase-0-foundation/
├── phase-1-infrastructure/
├── phase-2-authentication/
├── phase-3-maps-locations/
├── phase-4-reviews/
├── phase-5-gamification/
├── phase-6-offline/
├── phase-7-ai/
├── phase-8-additional/
├── phase-9-testing/
└── phase-10-deployment/
```

## /design - Design Assets
```
design/
├── wireframes/         # Low-fidelity screen layouts
├── mockups/           # High-fidelity designs
├── assets/            # Icons, images, illustrations
└── brand/             # Logo, color palette, typography
```

## /src - Source Code

This will be created during Phase 1. Expected structure:
```
src/
├── components/        # Reusable UI components
├── screens/          # App screens/pages
├── services/         # API calls and business logic
├── utils/            # Helper functions
├── config/           # Configuration files
├── navigation/       # Navigation setup
└── App.js            # Main app entry point
```

## File Naming Conventions

### Documentation Files
- Use lowercase with hyphens: `project-setup.md`
- Include phase and step numbers: `0.1-project-setup.md`

### Code Files
- Components: PascalCase - `MapView.js`
- Services: camelCase - `authService.js`
- Utils: camelCase - `formatDate.js`

---

**Last Updated:** January 2025
