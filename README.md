# ETO Exam Prep

**A free study platform for MMD ETO oral and written examination preparation.**

---

## Who built this

I am a marine electrical engineer - currently sailing as an Electro-Technical Officer on deep-sea vessels. The MMD ETO CoC exam is one of the hardest certification hurdles for ETO candidates in India, and the preparation resources available online are scattered, outdated, or buried behind paid subscriptions that most cadets and junior officers simply cannot afford.

So I built this myself.

I also have a genuine passion for vibe coding - the practice of building functional, useful software through tight collaboration with AI tools. This entire app, from the data pipelines to the frontend, was built that way. It is not a side effect of having too much time at sea. It is the point.

---

## What the app is

A single-page web app covering everything needed for the MMD ETO oral and written exams:

- **Oral Section** - 23 topic areas with structured study notes, topic-by-topic quiz practice (5,643 questions), and a Surveyor Q&A bank
- **Written Section** - Notes and worked examples for ISM, SOLAS, MARPOL, MLC, and other regulatory topics
- **Quiz Bank** - Standalone practice drill across all topics
- **Global search** - Keyword search across all notes instantly

No login. No subscription. No ads. Works on any device including mobile.

---

## How the notes were built

The study notes did not come from scraping a single source and reformatting it. Every topic was researched properly.

I went through MMD oral exam syllabi, standard textbook references, IMO publications, and cross-referenced against what surveyors actually ask in exams. I wrote the notes myself - structured around how an ETO would be expected to explain a concept during a viva, not how a textbook would present it. Tables, step-by-step fault-finding procedures, circuit descriptions written to be recalled under pressure.

After the initial drafts, each topic went through multiple review passes - checking for technical accuracy, completeness against the syllabus, and practical relevance against real exam feedback from the community.

---

## How the Surveyor Q&A was built

The Surveyor Q&A bank is the most technically involved part of the project.

The raw source is an oral exam database contributed by real ETO candidates - questions noted down after their MMD oral exams, tagged by surveyor name, date, and port. This data existed in unstructured, inconsistent formats across forum posts, spreadsheets, and shared documents collected from MMD forums and study groups over months.

I built a multi-stage pipeline using Claude to process it:

**Stage 1 - Extraction**
A Claude-powered agent reads the raw source documents and extracts individual questions, strips noise (duplicate phrasing, incomplete entries, non-technical content), and normalises them into a structured format with surveyor attribution and topic classification.

**Stage 2 - Classification**
Each extracted question is classified against the 23 canonical oral exam topic areas. The classifier handles ambiguous phrasing and maps non-standard language to the correct topic code.

**Stage 3 - Answer generation**
For each cleaned and classified question, a Claude agent generates a model answer - written the way a competent ETO should answer in a viva: technically accurate, appropriately detailed, and not padded. Answers under a quality threshold are flagged and regenerated.

**Stage 4 - Export**
A Python script (`build_sq_notes.py`) assembles the validated questions and answers into a structured JS data file served directly by the app. No backend, no database - just a clean build artifact.

The result: 281 answered questions across 7 named surveyors, filterable by surveyor and topic.

---

## Tech

- Vanilla HTML, CSS, JavaScript - no framework, no build step
- Served via GitHub Pages
- Data pipelines in Python, agents powered by Claude API
- Works offline after first load

---

## Support

This is a free resource. It will stay free.

If this helps you pass your exam, consider [supporting the project](https://pages.razorpay.com/elecbuddy). Every rupee goes toward keeping it running and expanding the content.
