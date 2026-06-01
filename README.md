# Waylo

Waylo is an unfinished budget focused travel companion app prototype built around practical, location based travel information such as restrooms, parking, low cost food, hostels, offline access, and local tips.

The idea behind Waylo is simple: most travel apps are good at navigation or polished recommendations, but they do not always answer the smaller questions that matter when traveling on a budget. Waylo was designed around crowdsourced, location based information that helps users make cheaper, safer, and faster decisions while moving through a city.

Tagline: Where Google Maps stops, Waylo starts.

## Project status

Waylo is an unfinished early stage mobile app prototype. Development reached Phase 3, focused on maps and location based features, before the project was paused.

The repository currently documents the product concept, planned architecture, workflow, UI direction, and early development structure. It is not a finished or deployed application.

## Planned features

- Public restroom discovery
- Parking locations and price notes
- Budget friendly restaurants
- Hostel and low cost accommodation references
- Offline saved information
- Community reviews and upvotes
- Anonymous traveler tips
- AI assisted budget planning
- Gamified contribution system

## Target users

- College students
- Backpackers
- Budget conscious travelers
- First time international travelers
- Solo travelers
- Digital nomads
- Travelers looking for practical local information

## Planned tech stack

- React Native
- Expo
- React Navigation
- Firebase Authentication
- Firestore
- Firebase Storage
- Google Maps API
- SQLite for offline storage
- OpenAI API for budget planning features

My role

I was the lead developer for Waylo. My work focused on the mobile app architecture, technical planning, React Native development direction, Firebase integration, location based features, and turning the product idea into a working prototype.

Team
Robert Emrich: Project lead
Hamza Abu Khalaf: Lead developer
Carlos Daners: Marketing and growth
Development direction

The intended development path was:

Build the core React Native app structure.
Implement map based place discovery.
Connect Firestore for crowdsourced location records.
Add offline saved data using SQLite.
Create contribution and review workflows.
Add AI assisted budget planning after the core travel features were stable.

Development was paused during Phase 3, so later features remain planned rather than complete.

Notes

This repository is public to document the app concept, planned architecture, early development workflow, and product direction. It should be treated as a paused prototype, not a finished travel platform.

## Repository structure

```text
waylo-app/
├── docs/                 project planning and phase documentation
├── design/               UI/UX designs, wireframes, and assets
├── src/                  application source code
├── WORKFLOW.md           development phases and workflow
├── PROJECT-STRUCTURE.md  repository structure notes
└── README.md
