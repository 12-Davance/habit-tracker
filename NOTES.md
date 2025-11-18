# Habit Tracker — Notes

This document outlines the design choices, tradeoffs, and potential improvements for the Habit Tracker application. It also includes instructions on how to run the app locally.

## Design Choices

### Layout & Architecture
The app is structured as a single-page dashboard to keep the experience focused and simple. Navigation is intentionally minimal, and the UI is broken into small, reusable components.

### Components
- **Dashboard** — Manages the main state and ties everything together.
- **HabitHeader** — Displays the page title.
- **StatCard** — A reusable component for displaying stats.
- **Habits** — Renders the habit list, handling toggles, filtering, and user interaction.

### Styling
Styling is done entirely with **Tailwind CSS** for quick iteration and consistent UI without writing custom CSS files.

### State Management
All state lives in `Dashboard` using React’s `useState`. This is enough for the scope of this assignment.

## Tradeoffs & Simplifications

- **Static Data** — Habits are stored in `/src/data` instead of a backend to keep things lightweight.
- **Local State Only** — State is handled locally, which works for now but wouldn’t scale to more complex features.
- **No Persistence** — Data resets on refresh since no database or storage layer is included.
- **No Authentication** — Only a single user context is assumed.

## Future Improvements

With more time or a larger scope, the app could grow in these areas:

- **Backend Integration** to persist habits, store progress, and sync across devices.
- **Authentication** for supporting multiple users.
- **Better State Management** (e.g., Zustand or Redux Toolkit) to handle more complex flows.
- **Additional Features**
    - Habit history and streaks
    - Charts and insights
    - Notifications and reminders
- **Accessibility Enhancements** to ensure usability for all users.

## How to Run the App

1. Install dependencies:
   ```bash
   npm install

2. Run the Development Server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Deployment

The app is deployed and accessible online for quick access:

**Live URL:**  
https://habit-tracker-production-1999.up.railway.app/

You can open the link above to explore the Habit Tracker without installing anything locally.