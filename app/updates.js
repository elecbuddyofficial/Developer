/* Hand-maintained, not generated. These are real, dated changes to the
   content or the app, written for a cadet reading them, not a commit
   message. Add an entry whenever content or a feature actually ships;
   nothing here is invented or filled in to look busier than it is.

   type: 'notes' (content changed) or 'product' (a feature changed).
   track: 'coc', 'sponsorship', or null to show under both course tabs.
   date: 'YYYY-MM-DD'. Rendered by renderUpdates() in auth.html (the live
   sign-in page; try-4875.html, where this feed first shipped, is now a
   redirect stub). Only the 5 most recent per track ever show, so add an
   entry for what a cadet would actually notice, not one per commit. */
window.EB_UPDATES = [
  { type: 'product', track: 'sponsorship', date: '2026-09-07',
    text: 'Diagrams now load only when you tap them to save mobile data, open full-screen with a tap, and reopening a topic offers to take you back to where you left off.' },
  { type: 'notes', track: 'sponsorship', date: '2026-09-07',
    text: '73 new diagrams added across Fundamentals and the Entrance Test modules, from circuit theory and control systems to digital electronics.' },
  { type: 'product', track: 'sponsorship', date: '2026-09-05',
    text: 'Company Q&A now shows company background (founded, fleet, core values) and splits interview questions into stages you can page through, with answers you reveal.' },
  { type: 'notes', track: 'sponsorship', date: '2026-09-05',
    text: 'Real interview questions and answers added for Great Eastern Shipping and Maersk.' },
  { type: 'notes', track: 'sponsorship', date: '2026-09-05',
    text: 'Fundamentals expanded: sound and waves, governors, servo and stepper motors, and the magnetron.' },
  { type: 'product', track: 'sponsorship', date: '2026-09-04',
    text: 'Mock interview bookings now accept discount coupons, not just course purchases.' },
  { type: 'product', track: null, date: '2026-09-04',
    text: 'Some discount codes are now single use: once redeemed, the code retires itself.' },
  { type: 'notes', track: 'coc', date: '2026-08-29',
    text: 'Fire Fighting (T15) expanded with new exam questions from the 28 Aug sitting.' },
  { type: 'notes', track: 'coc', date: '2026-08-28',
    text: 'Eight new "On Board" sections added, naming real equipment surveyors ask about by model.' },
  { type: 'notes', track: 'coc', date: '2026-08-20',
    text: 'Basic Electrotechnology (T01) corrected against new source material.' },
];
