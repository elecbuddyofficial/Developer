# AI Edits & Changelog - ETO Study App

## UI & Layout Changes (Landing Page)
- **File Edited**: `index.html`
- Re-architected the main Hero section into a modern, responsive "hourglass/diamond" layout.
- Enlarged the central "EB" logo using dynamic `clamp()` sizing for responsiveness.
- Resized the main "ETO Exam Prep" title and removed line wrapping to make it a sleek single-line header.
- Re-introduced the "No notes. No syllabus..." description text and positioned it precisely between the titles and the main action buttons.
- Completely fixed mobile responsiveness: adjusted `max-width` on text elements to prevent awkward word wrapping (widows), and fixed button flex-wrapping so they stack and center perfectly on small screens without unwanted stretching.

## Branding & Logo Updates
- **Files Edited**: `app/index.html`, `app/admin/index.html`, `app/courses.html`
- Replaced the old navbar logo with the new "Book and Cap" logo across the main application pages.
- Set up automatic Light/Dark theme switching for the new logos inside the navbar (`setTheme` JS logic).
- **Files Created**: 
  - `app/assets/logo-blue-light.svg` (Book logo - Light Theme)
  - `app/assets/logo-blue-dark.svg` (Book logo - Dark Theme)

## Sponsorship Section Updates
- **File Edited**: `app/sponsorship/index.html`
- Designed brand new **Orange variants** of the Book/Cap logo specifically for the Sponsorship portal.
- Wired up the theme switching logic in the Sponsorship index file to automatically toggle between the dark-orange and light-orange logos depending on the user's OS theme preference.
- **Files Created**:
  - `app/assets/logo-orange-light.svg`
  - `app/assets/logo-orange-dark.svg`

## Legacy Assets
- Copied the original spherical "EB" logo to `app/assets/logo-eb-dark.svg` and `app/assets/logo-eb-light.svg` for exclusive use on the marketing landing page (`index.html`).
