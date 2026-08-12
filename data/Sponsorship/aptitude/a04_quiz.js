window.loadQuizzes("A04_TimeWork", [

  /* ═══════════ WORK RATE ═══════════ */
  {
    "q": "If A can complete a job in 12 days, A's one day's work is:",
    "a": "1/12",
    "opts": ["1/12", "12", "1/6", "6"],
    "exp": "Treating the whole job as 1 unit, finishing in n days means completing 1/n of it per day. This single substitution is what makes the rest of the topic work, because rates can be added and days cannot.",
    "cat": "WORK RATE",
    "id": "A04_001"
  },
  {
    "q": "Why can days taken NOT simply be added when two people work together?",
    "a": "Because days are not a rate; only work done per day can be added",
    "opts": ["Because days are not a rate; only work done per day can be added", "Because the job size is unknown", "Because the workers interfere with each other", "They can be added, provided both work full days"],
    "exp": "Adding 10 and 15 days gives 25, which would mean two people working together are slower than either alone. Converting to rates (1/10 and 1/15) and adding those gives 6 days, which is correctly faster than both.",
    "cat": "WORK RATE",
    "id": "A04_002"
  },
  {
    "q": "A job takes A 10 days and B 15 days. Setting the job to 30 units instead of 1 is useful because:",
    "a": "Both daily rates become whole numbers, avoiding fraction arithmetic",
    "opts": ["Both daily rates become whole numbers, avoiding fraction arithmetic", "It changes the answer to a simpler number", "The job must always be measured in units", "It makes the workers faster"],
    "exp": "30 is the LCM of 10 and 15, so A does 3 units a day and B does 2. The answer is identical because the job size cancels out; only the arithmetic gets easier.",
    "cat": "WORK RATE",
    "id": "A04_003"
  },

  /* ═══════════ EFFICIENCY RATIO ═══════════ */
  {
    "q": "A is thrice as good a workman as B. The ratio of the TIMES they take to finish the same job is:",
    "a": "1 : 3",
    "opts": ["1 : 3", "3 : 1", "1 : 9", "9 : 1"],
    "exp": "Being thrice as good is a statement about rate, so their work ratio is 3 : 1 and the time ratio flips to 1 : 3. A is faster and must therefore take less time, which 1 : 3 correctly shows.",
    "cat": "EFFICIENCY",
    "id": "A04_004"
  },
  {
    "q": "A is twice as efficient as B, and together they finish in 8 days. B alone would take:",
    "a": "24 days",
    "opts": ["16 days", "18 days", "24 days", "32 days"],
    "exp": "Let B's rate be r; A's is 2r and the pair does 3r per day. Three times B's rate finishes in 8 days, so B alone needs 24 days and A alone needs 12. Checking: 1/12 + 1/24 = 3/24 = 1/8.",
    "cat": "EFFICIENCY",
    "id": "A04_005"
  },

  /* ═══════════ WORKING TOGETHER ═══════════ */
  {
    "q": "A takes 12 days and B takes 18 days. Working together they finish in:",
    "a": "7.2 days",
    "opts": ["6 days", "7.2 days", "15 days", "30 days"],
    "exp": "Rates are 1/12 and 1/18, summing to 5/36 per day, so the time is 36/5 = 7.2 days. The answer must be under 12, since together they beat the faster worker alone; 30 days is the result of adding the days.",
    "cat": "TOGETHER",
    "id": "A04_006"
  },
  {
    "q": "A and B together finish in 6 days and A alone takes 10 days. B alone takes:",
    "a": "15 days",
    "opts": ["4 days", "12 days", "15 days", "16 days"],
    "exp": "Subtract the RATES, not the days: 1/6 - 1/10 = 2/30 = 1/15, so B needs 15 days. Answering 4 days comes from subtracting 10 - 6 and is always offered as an option.",
    "cat": "TOGETHER",
    "id": "A04_007"
  },
  {
    "q": "A, B and C take 10, 15 and 30 days respectively. Together they finish in:",
    "a": "5 days",
    "opts": ["5 days", "6 days", "9 days", "18.3 days"],
    "exp": "Add all three rates: 1/10 + 1/15 + 1/30 = 6/30 = 1/5, giving 5 days. No larger formula is needed; adding rates scales to any number of workers.",
    "cat": "TOGETHER",
    "id": "A04_008"
  },
  {
    "q": "Two workers finish a job together. Their combined time must always be:",
    "a": "Less than the time of the faster worker alone",
    "opts": ["Less than the time of the faster worker alone", "Between the two individual times", "The average of the two individual times", "Greater than the slower worker's time"],
    "exp": "Adding a second worker adds work done per day, so the job must finish sooner than the quicker of the two managed alone. An answer that falls between the two times, or above them, signals that days were combined instead of rates.",
    "cat": "TOGETHER",
    "id": "A04_009"
  },
  {
    "q": "The formula ab/(a+b) for two workers together is obtained by:",
    "a": "Adding the rates 1/a and 1/b, then inverting the sum",
    "opts": ["Adding the rates 1/a and 1/b, then inverting the sum", "Averaging a and b", "Multiplying the two times", "Taking the difference of the two times"],
    "exp": "1/a + 1/b = (a+b)/ab, and the time is one job divided by that rate, which inverts it to ab/(a+b). Deriving it means you can extend to three workers without needing a different formula.",
    "cat": "TOGETHER",
    "id": "A04_010"
  },

  /* ═══════════ PIPES AND CISTERNS ═══════════ */
  {
    "q": "A pipe fills a tank in 10 hours; a leak can empty the full tank in 15 hours. With both operating, the tank fills in:",
    "a": "30 hours",
    "opts": ["6 hours", "25 hours", "30 hours", "It never fills"],
    "exp": "The leak is negative work, so the net rate is 1/10 - 1/15 = 1/30, giving 30 hours. Adding instead of subtracting gives 6 hours, which would absurdly mean a leak helps fill the tank.",
    "cat": "PIPES",
    "id": "A04_011"
  },
  {
    "q": "If an outlet pipe empties faster than the inlet fills, the net rate is negative, which means:",
    "a": "The tank never fills and instead drains",
    "opts": ["The tank never fills and instead drains", "The tank fills in negative time", "The formula does not apply", "The tank fills at half the rate"],
    "exp": "A negative net rate is a meaningful result, not an error: water leaves faster than it arrives. The algebra is identical to the filling case, and the sign carries the physical meaning.",
    "cat": "PIPES",
    "id": "A04_012"
  },

  /* ═══════════ WAGES ═══════════ */
  {
    "q": "A finishes a job in 6 days and B in 12 days. Working together for a total payment of 900, A's share is:",
    "a": "600",
    "opts": ["300", "450", "600", "675"],
    "exp": "Wages follow work done, so use the ratio of rates: 1/6 : 1/12 = 2 : 1. A receives 900 x 2/3 = 600. Splitting in the ratio of days (6 : 12) would pay the slower worker double and is the intended trap.",
    "cat": "WAGES",
    "id": "A04_013"
  },
  {
    "q": "Wages in a time-and-work problem are divided in the ratio of:",
    "a": "The workers' rates, that is the work each actually does",
    "opts": ["The workers' rates, that is the work each actually does", "The number of days each would take alone", "Equal shares regardless of speed", "The square of the number of days"],
    "exp": "Pay follows output. Since rate is 1/days, the ratio of days must be inverted before splitting the money. Forgetting to invert is the single most common error in this part of the topic.",
    "cat": "WAGES",
    "id": "A04_014"
  },

  /* ═══════════ MIXED ═══════════ */
  {
    "q": "A can do a job in 20 days. He works alone for 4 days, then B joins and they finish it together in 8 more days. B alone would take:",
    "a": "20 days",
    "opts": ["10 days", "16 days", "20 days", "24 days"],
    "exp": "In 4 days A completes 4/20 = 1/5, leaving 4/5. Over the next 8 days A contributes 8/20 = 2/5, so B must supply 4/5 - 2/5 = 2/5 in those 8 days. B's rate is therefore (2/5)/8 = 1/20, so B alone also takes 20 days. Check: 4(1/20) + 8(1/20 + 1/20) = 1/5 + 4/5 = 1, the whole job.",
    "cat": "MIXED",
    "id": "A04_015"
  }

]);
