# Elec-Buddy

**A study platform for MMD ETO oral and written examination preparation.**

Live at **[elec-buddy.com](https://elec-buddy.com)**. Every account starts with
a 3 day free trial of everything, and Topic 1 of the Oral section plus Written
Topic 1 stay free to read permanently.

> This repository is public but **not open source**. See [LICENSE](LICENSE).

---

## Who built this

I am a marine electrical engineer - currently sailing as an Electro-Technical Officer on deep-sea vessels. The MMD ETO CoC exam is one of the hardest certification hurdles for ETO candidates in India, and the preparation resources available online are scattered, outdated, or priced well beyond what a cadet or junior officer can reasonably spend.

So I built this myself.

It is not free. Building and maintaining it costs real money, and pretending otherwise would only mean it quietly stopped being maintained. What it is instead is priced against what it replaces, with a free trial long enough to judge it and two topics left open permanently so nobody has to pay to find out what the notes are like.

I also have a genuine passion for vibe coding - the practice of building functional, useful software through tight collaboration with AI tools. This entire app, from the data pipelines to the frontend, was built that way. It is not a side effect of having too much time at sea. It is the point.

---

## What the app is

A single-page web app covering everything needed for the MMD ETO oral and written exams:

- **Oral Section** - 23 topic areas with structured study notes, topic-by-topic quiz practice (5,643 questions), and a Surveyor Q&A bank
- **Written Section** - Notes and worked examples for ISM, SOLAS, MARPOL, MLC, and other regulatory topics
- **Quiz Bank** - Standalone practice drill across all topics
- **Global search** - Keyword search across all notes instantly
- **Numericals** - Worked written-exam problems with full derivations and handwritten solution sheets

No ads, ever. Works on any device including mobile, and offline once loaded.

Access is per section and per duration: Written only, Oral only, or both, for 3, 6, or 12 months. Time stacks rather than being replaced, so buying more of a section you already hold adds to it.

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
- Supabase for auth, database, row level security, and edge functions
- Razorpay for payments
- Study content encrypted at rest with AES-256-GCM; keys are issued per section by an edge function, and only to an entitled subscriber
- Served from GitHub Pages on a custom domain
- Data pipelines in Python, agents powered by Claude API
- Service worker for offline use after first load

That last point is why this repository can be public without giving the paid
content away: what is stored here is ciphertext, and the keys never are.

---

## Contributing content

Corrections and additions from people who have actually sat the exam are the
most valuable input this project gets. If you spot something wrong, or you have
questions from a recent MMD oral, there is a Feedback option inside the app
under your profile menu, and good reports earn a discount code.

Otherwise: **support@elec-buddy.com**, or [@elec.buddy](https://instagram.com/elec.buddy) on Instagram.

---

## Licence

Proprietary. All rights reserved. See [LICENSE](LICENSE).

Earlier revisions of this repository carried an MIT licence. That was a
mistake: MIT permits anyone to copy, redistribute and sell the work, which
directly contradicts the Terms and Conditions governing the service. It has
been withdrawn for current and future revisions.
