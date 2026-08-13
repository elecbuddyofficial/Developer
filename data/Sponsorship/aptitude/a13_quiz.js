window.loadQuizzes("A13_Average", [

  /* ═══════════ DEFINITION ═══════════ */
  {
    "q": "The average of 5 numbers is 27. If one number is removed, the average of the remaining 4 is 25. The removed number is:",
    "a": "35",
    "opts": ["25", "27", "35", "52"],
    "exp": "Work in totals: 27 x 5 = 135 before, 25 x 4 = 100 after, so the removed number is 35. Converting each average into a total turns the whole question into one subtraction.",
    "cat": "DEFINITION",
    "id": "A13_001"
  },
  {
    "q": "Which rearrangement of the definition is most useful in exam questions?",
    "a": "Sum = Average x Number",
    "opts": ["Sum = Average x Number", "Number = Sum x Average", "Average = Sum x Number", "Sum = Average / Number"],
    "exp": "Almost every question is solved by converting averages back into totals, doing ordinary arithmetic there, and dividing once at the end. Averages cannot be safely added or averaged with each other; totals can.",
    "cat": "DEFINITION",
    "id": "A13_002"
  },
  {
    "q": "The average of 6 numbers is 20. If each number is increased by 5, the new average is:",
    "a": "25",
    "opts": ["20", "25", "30", "100"],
    "exp": "Adding 5 to every one of the 6 numbers adds 30 to the total, and 30/6 = 5, so the average also rises by exactly 5. Any constant added to every observation shifts the average by that same constant.",
    "cat": "DEFINITION",
    "id": "A13_003"
  },

  /* ═══════════ SEQUENCES ═══════════ */
  {
    "q": "The average of the first 100 natural numbers is:",
    "a": "50.5",
    "opts": ["50", "50.5", "51", "5050"],
    "exp": "For any evenly spaced run the average is (first + last)/2, here (1 + 100)/2 = 50.5. The option 5050 is the SUM, not the average.",
    "cat": "SEQUENCES",
    "id": "A13_004"
  },
  {
    "q": "The average of the even numbers from 2 to 40 inclusive is:",
    "a": "21",
    "opts": ["20", "21", "22", "42"],
    "exp": "They are evenly spaced, so the average is (2 + 40)/2 = 21. Note the answer need not be a member of the set: 21 is odd and no even number equals it.",
    "cat": "SEQUENCES",
    "id": "A13_005"
  },
  {
    "q": "The average of five consecutive numbers is:",
    "a": "The middle number",
    "opts": ["The middle number", "The smallest number", "The largest number", "The sum divided by 4"],
    "exp": "In an odd-length consecutive run the values above the centre and below it cancel exactly, leaving the middle term. For 7, 8, 9, 10, 11 the average is 9.",
    "cat": "SEQUENCES",
    "id": "A13_006"
  },

  /* ═══════════ REPLACEMENT ═══════════ */
  {
    "q": "The average weight of 8 men increases by 2.5 kg when a new man replaces one weighing 65 kg. The new man weighs:",
    "a": "85 kg",
    "opts": ["67.5 kg", "75 kg", "85 kg", "90 kg"],
    "exp": "The total rose by 8 x 2.5 = 20 kg, and only one value changed, so the new man is 65 + 20 = 85 kg. Answering 67.5 adds only the change in the average, forgetting that all 8 shares had to rise.",
    "cat": "REPLACEMENT",
    "id": "A13_007"
  },
  {
    "q": "When one member of a group of n is replaced, the relationship is:",
    "a": "(new value) - (old value) = n x (change in average)",
    "opts": ["(new value) - (old value) = n x (change in average)", "(new value) - (old value) = change in average", "(new value) - (old value) = (change in average) / n", "The individual values of the others are needed"],
    "exp": "Only one value changed, so the change in the TOTAL is the difference between the two values, and the total is the average times n. This is why the count is always given and the other members' values never are: they cancel.",
    "cat": "REPLACEMENT",
    "id": "A13_008"
  },
  {
    "q": "The average age of 12 students falls by 1 year when a student aged 20 is replaced. The new student's age is:",
    "a": "8 years",
    "opts": ["8 years", "12 years", "19 years", "32 years"],
    "exp": "The total fell by 12 x 1 = 12 years, so the new student is 20 - 12 = 8. The average dropped, so the newcomer must be below the person they replaced, which 8 correctly is.",
    "cat": "REPLACEMENT",
    "id": "A13_009"
  },

  /* ═══════════ ADDING A MEMBER ═══════════ */
  {
    "q": "The average age of 10 students is 15. When their teacher joins, the average becomes 16. The teacher's age is:",
    "a": "26",
    "opts": ["16", "25", "26", "31"],
    "exp": "The teacher supplies their own share of the new average plus enough to lift all 10 students: 16 + 10 x (16 - 15) = 26. Checking through totals, 11 x 16 = 176 minus 10 x 15 = 150 gives 26.",
    "cat": "ADDING",
    "id": "A13_010"
  },
  {
    "q": "When a new member joins a group of n and raises the average, the new member's value is:",
    "a": "new average + n x (new average - old average)",
    "opts": ["new average + n x (new average - old average)", "old average + (new average - old average)", "n x new average", "the average of the old and new averages"],
    "exp": "In words: worth the new average, plus n times however much they raised it. If the average falls instead, the same formula applies and the second term goes negative.",
    "cat": "ADDING",
    "id": "A13_011"
  },

  /* ═══════════ COMBINING GROUPS ═══════════ */
  {
    "q": "A class has 30 boys averaging 12 years and 20 girls averaging 17 years. The class average is:",
    "a": "14 years",
    "opts": ["13.5 years", "14 years", "14.5 years", "15 years"],
    "exp": "Weight by the counts: (30 x 12 + 20 x 17)/50 = 700/50 = 14. The option 14.5 is the ordinary average of 12 and 17, which ignores that the boys outnumber the girls. The true answer always leans towards the larger group.",
    "cat": "COMBINING",
    "id": "A13_012"
  },
  {
    "q": "Averaging two group averages directly is correct only when:",
    "a": "The two groups are the same size",
    "opts": ["The two groups are the same size", "The two averages are equal", "One group is much larger", "It is never correct"],
    "exp": "With equal counts the weights are equal and the weighted average collapses to the ordinary one. That special case is precisely why the mistake survives: it works often enough to feel right.",
    "cat": "COMBINING",
    "id": "A13_013"
  },
  {
    "q": "In a weighted average of two groups, the weights are:",
    "a": "The number of members in each group",
    "opts": ["The number of members in each group", "The averages of each group", "The difference between the averages", "Always equal"],
    "exp": "Combined average = (n1a1 + n2a2)/(n1 + n2). The counts do the weighting; the averages are the values being weighted. Swapping the two roles is the standard error here.",
    "cat": "COMBINING",
    "id": "A13_014"
  },

  /* ═══════════ AVERAGE SPEED ═══════════ */
  {
    "q": "A man drives to a town at 60 kmph and returns along the same road at 40 kmph. His average speed is:",
    "a": "48 kmph",
    "opts": ["45 kmph", "48 kmph", "50 kmph", "52 kmph"],
    "exp": "Equal distances, so 2xy/(x+y) = 2 x 60 x 40 / 100 = 48 kmph. Checking with a 120 km leg: 2 hours out, 3 hours back, 240 km in 5 hours. The option 50 is the ordinary average and is the intended trap.",
    "cat": "AVERAGE SPEED",
    "id": "A13_015"
  },
  {
    "q": "The average speed over two equal distances is always:",
    "a": "Less than the ordinary average of the two speeds",
    "opts": ["Less than the ordinary average of the two speeds", "Greater than the ordinary average", "Exactly the ordinary average", "Equal to the slower speed"],
    "exp": "The slow leg takes longer to cover the same ground, so more of the journey time is spent at the lower speed and it carries more weight. They coincide only when the two speeds are identical.",
    "cat": "AVERAGE SPEED",
    "id": "A13_016"
  },
  {
    "q": "If the two legs are equal in TIME rather than distance, the average speed is:",
    "a": "(x + y) / 2",
    "opts": ["(x + y) / 2", "2xy / (x + y)", "xy / (x + y)", "The same either way"],
    "exp": "With equal times the distances scale with the speeds, so the ordinary average is correct. Changing one word in the question changes the formula entirely, which is why reading which quantity is held equal matters more than knowing either result.",
    "cat": "AVERAGE SPEED",
    "id": "A13_017"
  }

]);
