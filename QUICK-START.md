# Quick Start Guide

Get up and running with the Waylo repository in 5 minutes.

## Prerequisites

Make sure you have these installed:
- [x] Git
- [x] Node.js v16+
- [x] Code editor (VS Code recommended)
- [x] GitHub account

## Setup Steps

### 1. Clone the Repository
```bash
git clone https://github.com/PreLabHomework/waylo-app.git
cd waylo-app
```

### 2. Verify Folder Structure

You should see:
```
waylo-app/
├── docs/
├── design/
├── src/
├── .gitignore
├── README.md
├── WORKFLOW.md
├── PROJECT-STRUCTURE.md
└── QUICK-START.md
```

### 3. Start with Phase 0

Your first step is:

**Step 0.1 - Project Setup Document**

Refer to `docs/phase-0-foundation/0.1-project-setup.md` (to be created)

## Daily Workflow

### Starting Your Work Session
```bash
# Pull latest changes
git checkout main
git pull origin main
```

### Ending Your Work Session
```bash
# Check what you've changed
git status

# Add your changes
git add .

# Commit with descriptive message
git commit -m "Complete Step X.X - Description"

# Push to GitHub
git push origin main
```

## Common Commands
```bash
# See commit history
git log --oneline

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard all local changes
git reset --hard HEAD
```

## What's Next?

1. ✅ Repository is set up
2. ✅ Folder structure created
3. ⏭️ Start Step 0.1 - Project Setup Document

---

**Last Updated:** January 2025
