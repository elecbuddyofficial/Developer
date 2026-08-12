window.loadQuizzes("A02_TimeDistance", [

  /* ═══════════ BASIC RELATION ═══════════ */
  {
    "q": "A car covers 240 km in 4 hours. Its speed is:",
    "a": "60 km/hr",
    "opts": ["48 km/hr", "60 km/hr", "72 km/hr", "96 km/hr"],
    "exp": "Speed = distance / time = 240 / 4 = 60 km/hr. The units check confirms the rearrangement: km divided by hours gives km/hr, which is a speed.",
    "cat": "BASIC RELATION",
    "id": "A02_001"
  },
  {
    "q": "How long does a train take to cover 420 km at 60 km/hr?",
    "a": "7 hours",
    "opts": ["6 hours", "7 hours", "7.5 hours", "8 hours"],
    "exp": "Time = distance / speed = 420 / 60 = 7 hours. Checking by units, km divided by km/hr leaves hours, which is what was asked for.",
    "cat": "BASIC RELATION",
    "id": "A02_002"
  },
  {
    "q": "Why is it better to remember only Speed = Distance / Time?",
    "a": "The other two forms are one algebraic rearrangement away, so they cannot be recalled the wrong way up",
    "opts": ["The other two forms are one algebraic rearrangement away, so they cannot be recalled the wrong way up", "The other two forms are only approximations", "Time and distance are not related to speed directly", "Because distance is always the unknown in exams"],
    "exp": "Time = D/S and D = S x T are the same equation rearranged. Deriving them on the spot removes the risk of inverting one under pressure, and a units check catches it immediately if you do.",
    "cat": "BASIC RELATION",
    "id": "A02_003"
  },

  /* ═══════════ UNITS ═══════════ */
  {
    "q": "A speed of 54 km/hr in m/s is:",
    "a": "15 m/s",
    "opts": ["10 m/s", "15 m/s", "18 m/s", "194.4 m/s"],
    "exp": "Multiply by 5/18: 54 x 5/18 = 15 m/s. Speeds that are multiples of 18 km/hr always give a whole number of m/s, which is why examiners choose them.",
    "cat": "UNITS",
    "id": "A02_004"
  },
  {
    "q": "A cyclist travels at 10 m/s. In km/hr this is:",
    "a": "36 km/hr",
    "opts": ["27.8 km/hr", "36 km/hr", "50 km/hr", "60 km/hr"],
    "exp": "Multiply by 18/5: 10 x 18/5 = 36 km/hr. The answer must be larger than the m/s figure, which rules out 27.8 straight away as the flipped-fraction result.",
    "cat": "UNITS",
    "id": "A02_005"
  },

  /* ═══════════ INVERSE RATIO ═══════════ */
  {
    "q": "The speeds of A and B are in the ratio 3 : 4. Over the same distance, the ratio of the times they take is:",
    "a": "4 : 3",
    "opts": ["3 : 4", "4 : 3", "9 : 16", "16 : 9"],
    "exp": "Over a fixed distance, time goes as 1 / speed, so the ratio flips to 1/3 : 1/4 = 4 : 3. B is faster and must therefore take less time, which 4 : 3 correctly gives.",
    "cat": "INVERSE RATIO",
    "id": "A02_006"
  },
  {
    "q": "A man walking at 4 km/hr takes 30 minutes to reach his office. At 5 km/hr he will take:",
    "a": "24 minutes",
    "opts": ["20 minutes", "24 minutes", "25 minutes", "37.5 minutes"],
    "exp": "Speeds 4 : 5 give times 5 : 4, so the new time is 30 x 4/5 = 24 minutes. Finding the distance (2 km) first also works but is extra effort for the same answer.",
    "cat": "INVERSE RATIO",
    "id": "A02_007"
  },
  {
    "q": "If a train doubles its speed over the same route, the journey time:",
    "a": "Halves",
    "opts": ["Halves", "Doubles", "Stays the same", "Reduces by a quarter"],
    "exp": "Over a fixed distance, speed and time multiply to a constant, so they are inversely proportional. Doubling one halves the other.",
    "cat": "INVERSE RATIO",
    "id": "A02_008"
  },

  /* ═══════════ AVERAGE SPEED ═══════════ */
  {
    "q": "A man travels 90 km at 60 km/hr and returns the same 90 km at 40 km/hr. His average speed is:",
    "a": "48 km/hr",
    "opts": ["45 km/hr", "48 km/hr", "50 km/hr", "52 km/hr"],
    "exp": "Equal distances, so use 2xy/(x+y) = 2 x 60 x 40 / 100 = 48 km/hr. Checking from the definition: 1.5 h out plus 2.25 h back is 3.75 h for 180 km, and 180/3.75 = 48. The option 50 is the ordinary average and is the intended trap.",
    "cat": "AVERAGE SPEED",
    "id": "A02_009"
  },
  {
    "q": "A man drives for 1 hour at 60 km/hr and 1 hour at 40 km/hr. His average speed is:",
    "a": "50 km/hr",
    "opts": ["45 km/hr", "48 km/hr", "50 km/hr", "55 km/hr"],
    "exp": "Here the TIMES are equal, not the distances, so the ordinary average applies: (60 + 40)/2 = 50 km/hr. Confirm directly: 60 + 40 = 100 km in 2 hours. Answering 48 applies the equal-distance formula to an equal-time question.",
    "cat": "AVERAGE SPEED",
    "id": "A02_010"
  },
  {
    "q": "The formula 2xy/(x+y) for average speed applies only when:",
    "a": "The two distances are equal",
    "opts": ["The two distances are equal", "The two times are equal", "The two speeds are equal", "It applies to any two-leg journey"],
    "exp": "It is derived by putting equal distances d on both legs, at which point d cancels. For equal times the answer is the ordinary average (x+y)/2 instead. Reading which quantity is held equal matters more than knowing either formula.",
    "cat": "AVERAGE SPEED",
    "id": "A02_011"
  },
  {
    "q": "For two different speeds over equal distances, the average speed is always:",
    "a": "Less than the ordinary average of the two speeds",
    "opts": ["Less than the ordinary average of the two speeds", "Greater than the ordinary average of the two speeds", "Exactly the ordinary average", "Equal to the higher of the two speeds"],
    "exp": "The slow leg takes longer to cover the same ground, so more of the journey time is spent at the lower speed and it carries more weight. The harmonic mean is therefore always below the arithmetic mean, and they coincide only when the two speeds are identical.",
    "cat": "AVERAGE SPEED",
    "id": "A02_012"
  },
  {
    "q": "Which definition of average speed is valid in every case, with no conditions attached?",
    "a": "Total distance divided by total time",
    "opts": ["Total distance divided by total time", "The average of all the speeds used", "2xy/(x+y) for any journey", "The middle speed of the journey"],
    "exp": "Total distance over total time is the definition, and every shortcut in this topic is that definition pre-solved for a special case. When a journey does not fit a special case, computing the totals costs one extra line and cannot be wrong.",
    "cat": "AVERAGE SPEED",
    "id": "A02_013"
  },
  {
    "q": "A journey has three legs: 120 km at 60 km/hr, 80 km at 40 km/hr, and 100 km at 50 km/hr. The average speed is:",
    "a": "50 km/hr",
    "opts": ["48 km/hr", "50 km/hr", "52 km/hr", "53.3 km/hr"],
    "exp": "No shortcut applies to three unequal legs, so use the definition. Each leg takes 2 hours, giving 6 hours total for 300 km, so the average is 50 km/hr. The ordinary average of the three speeds also gives 50 here, but only because the times happened to be equal.",
    "cat": "AVERAGE SPEED",
    "id": "A02_014"
  },

  /* ═══════════ LATE AND EARLY ═══════════ */
  {
    "q": "A boy walking at 4 km/hr reaches school 5 minutes late. At 5 km/hr he arrives 10 minutes early. The distance to school is:",
    "a": "5 km",
    "opts": ["2.5 km", "4 km", "5 km", "6 km"],
    "exp": "The two arrivals differ by 15 minutes, which is 1/4 hour, so d/4 - d/5 = 1/4. The left side is d/20, giving d = 5 km. Using 5 or 10 minutes alone instead of the 15 between them is the standard error here.",
    "cat": "LATE AND EARLY",
    "id": "A02_015"
  },
  {
    "q": "In a late-and-early problem, the time difference to use in the equation is:",
    "a": "The sum of the late and early amounts",
    "opts": ["The sum of the late and early amounts", "The larger of the two amounts", "The difference between the two amounts", "Half the sum of the two amounts"],
    "exp": "Arriving 5 minutes late and 10 minutes early are 15 minutes apart in arrival time, and since the departure is the same, that 15 minutes is the difference in travel time. Combining them is what makes the equation solvable.",
    "cat": "LATE AND EARLY",
    "id": "A02_016"
  }

]);
