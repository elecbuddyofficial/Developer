window.loadQuizzes("A01_Trains", [

  /* ═══════════ CONVERSION ═══════════ */
  {
    "q": "A speed of 90 km/hr expressed in m/s is:",
    "a": "25 m/s",
    "opts": ["18 m/s", "25 m/s", "32.4 m/s", "50 m/s"],
    "exp": "Multiply by 5/18: 90 x 5/18 = 25 m/s. The check that stops you inverting the fraction is that the m/s figure must be the smaller number, so 32.4 (which is 90 x 18/50) is the flipped-fraction answer.",
    "cat": "CONVERSION",
    "id": "A01_001"
  },
  {
    "q": "A train travelling at 20 m/s is moving at what speed in km/hr?",
    "a": "72 km/hr",
    "opts": ["55.5 km/hr", "62 km/hr", "72 km/hr", "100 km/hr"],
    "exp": "Going from m/s to km/hr you multiply by 18/5: 20 x 18/5 = 72 km/hr. The answer must be larger than the m/s figure, which rules out 55.5 immediately.",
    "cat": "CONVERSION",
    "id": "A01_002"
  },
  {
    "q": "Why does 1 km/hr equal exactly 5/18 m/s?",
    "a": "Because 1000 metres divided by 3600 seconds simplifies to 5/18",
    "opts": ["Because 1000 metres divided by 3600 seconds simplifies to 5/18", "Because 18 is the number of minutes in a fifth of an hour", "It is an approximation adopted for exam convenience", "Because 5 km/hr is defined as 18 m/s"],
    "exp": "One kilometre is 1000 m and one hour is 3600 s, so 1 km/hr = 1000/3600 = 10/36 = 5/18 m/s. It is exact, not an approximation, and deriving it once means never having to remember which way up the fraction goes.",
    "cat": "CONVERSION",
    "id": "A01_003"
  },

  /* ═══════════ PASSING A FIXED OBJECT ═══════════ */
  {
    "q": "A train 180 m long is running at 54 km/hr. How long does it take to pass a signal post?",
    "a": "12 seconds",
    "opts": ["9 seconds", "12 seconds", "15 seconds", "20 seconds"],
    "exp": "A signal post has no meaningful length, so the train covers only its own 180 m. Speed = 54 x 5/18 = 15 m/s, giving 180/15 = 12 seconds.",
    "cat": "FIXED OBJECT",
    "id": "A01_004"
  },
  {
    "q": "A 150 m train at 25 m/s passes a platform 100 m long. The time taken is:",
    "a": "10 seconds",
    "opts": ["4 seconds", "6 seconds", "10 seconds", "14 seconds"],
    "exp": "The rear must clear the far end of the platform, so the distance is 150 + 100 = 250 m, giving 250/25 = 10 seconds. Answering 6 seconds means using only the train length, which is the pole case and the most common error in this topic.",
    "cat": "FIXED OBJECT",
    "id": "A01_005"
  },
  {
    "q": "Which of these should be treated as having ZERO length in a train problem?",
    "a": "A signal post",
    "opts": ["A signal post", "A railway platform", "A bridge", "A stationary train"],
    "exp": "A pole, a signal post, a tree and a standing person are all treated as zero length, so the distance is just the train's length. A platform, bridge, tunnel or any second train has a real length that must be added.",
    "cat": "FIXED OBJECT",
    "id": "A01_006"
  },
  {
    "q": "A train passes a pole in 6 seconds and a 120 m platform in 14 seconds. Its length is:",
    "a": "90 m",
    "opts": ["72 m", "90 m", "108 m", "120 m"],
    "exp": "From the pole, l = 6u. From the platform, l + 120 = 14u. Substituting gives 6u + 120 = 14u, so u = 15 m/s and l = 6 x 15 = 90 m. Two times quoted in one question is always a pair of simultaneous equations.",
    "cat": "FIXED OBJECT",
    "id": "A01_007"
  },
  {
    "q": "A train is 200 m long and crosses a bridge in 30 seconds at 20 m/s. The bridge length is:",
    "a": "400 m",
    "opts": ["200 m", "300 m", "400 m", "600 m"],
    "exp": "Total distance covered = 20 x 30 = 600 m. That total is the train plus the bridge, so the bridge is 600 - 200 = 400 m. Answering 600 m forgets to subtract the train's own length.",
    "cat": "FIXED OBJECT",
    "id": "A01_008"
  },

  /* ═══════════ RELATIVE SPEED ═══════════ */
  {
    "q": "Two trains move in the SAME direction at 30 m/s and 20 m/s. Their relative speed is:",
    "a": "10 m/s",
    "opts": ["10 m/s", "25 m/s", "50 m/s", "600 m/s"],
    "exp": "Travelling the same way, the gap closes only by the difference: 30 - 20 = 10 m/s. Adding them is the opposite-direction case and is the classic mix-up.",
    "cat": "RELATIVE SPEED",
    "id": "A01_009"
  },
  {
    "q": "Two trains approach each other at 54 km/hr and 72 km/hr. Their relative speed in m/s is:",
    "a": "35 m/s",
    "opts": ["5 m/s", "20 m/s", "35 m/s", "126 m/s"],
    "exp": "Convert first: 54 x 5/18 = 15 m/s and 72 x 5/18 = 20 m/s. Moving towards each other the speeds add: 15 + 20 = 35 m/s. 126 is the result of adding in km/hr and forgetting to convert at all.",
    "cat": "RELATIVE SPEED",
    "id": "A01_010"
  },
  {
    "q": "A train passing a man standing on a platform uses which speed?",
    "a": "The train's own speed, since the man's speed is zero",
    "opts": ["The train's own speed, since the man's speed is zero", "The train's speed plus walking speed", "Half the train's speed", "The train's speed minus the platform length"],
    "exp": "A stationary object is simply the case v = 0, so relative speed reduces to the train's own speed. This is why the three cases (stationary, same direction, opposite) are one idea rather than three formulas.",
    "cat": "RELATIVE SPEED",
    "id": "A01_011"
  },

  /* ═══════════ TWO TRAINS CROSSING ═══════════ */
  {
    "q": "Trains of 120 m and 80 m run in OPPOSITE directions at 20 m/s and 30 m/s. Time to cross each other:",
    "a": "4 seconds",
    "opts": ["4 seconds", "10 seconds", "20 seconds", "40 seconds"],
    "exp": "Distance is both lengths, 120 + 80 = 200 m. Opposite directions so the relative speed is 20 + 30 = 50 m/s. Time = 200/50 = 4 seconds.",
    "cat": "CROSSING",
    "id": "A01_012"
  },
  {
    "q": "The same two trains (120 m and 80 m, at 20 m/s and 30 m/s) now run in the SAME direction. Time for the faster to cross the slower:",
    "a": "20 seconds",
    "opts": ["4 seconds", "8 seconds", "20 seconds", "50 seconds"],
    "exp": "The distance is unchanged at 200 m, but the relative speed drops to 30 - 20 = 10 m/s, giving 200/10 = 20 seconds. Only the denominator changes between the two cases, never the numerator.",
    "cat": "CROSSING",
    "id": "A01_013"
  },
  {
    "q": "When two trains cross each other, the distance to be covered is:",
    "a": "The sum of both train lengths",
    "opts": ["The sum of both train lengths", "The length of the longer train only", "The difference of the two lengths", "The length of the faster train only"],
    "exp": "Both trains must clear each other completely, so the distance is always a + b regardless of direction. Understanding this is what stops candidates pairing the wrong denominator with the wrong case.",
    "cat": "CROSSING",
    "id": "A01_014"
  },
  {
    "q": "A 150 m train at 25 m/s overtakes a 100 m train at 15 m/s travelling the same way. Time taken:",
    "a": "25 seconds",
    "opts": ["6.25 seconds", "10 seconds", "25 seconds", "62.5 seconds"],
    "exp": "Distance = 150 + 100 = 250 m. Same direction, so relative speed = 25 - 15 = 10 m/s. Time = 250/10 = 25 seconds. Using 40 m/s (adding) gives 6.25 s and is the direction error.",
    "cat": "CROSSING",
    "id": "A01_015"
  },

  /* ═══════════ ROOT RATIO ═══════════ */
  {
    "q": "Two trains start at the same time from A and B towards each other. After crossing, they reach B and A in 9 and 4 seconds respectively. The ratio of their speeds is:",
    "a": "2 : 3",
    "opts": ["2 : 3", "3 : 2", "4 : 9", "9 : 4"],
    "exp": "The result is the square roots of the times, swapped: root(4) : root(9) = 2 : 3. The train needing 9 seconds after crossing is the slower one, so its speed must be the smaller part of the ratio, which 2 : 3 correctly gives.",
    "cat": "ROOT RATIO",
    "id": "A01_016"
  },
  {
    "q": "In the root ratio result, why do the times appear swapped relative to the speeds?",
    "a": "Because the faster train takes less time to finish, so a shorter time means a higher speed",
    "opts": ["Because the faster train takes less time to finish, so a shorter time means a higher speed", "Because the trains change speed after crossing", "Because distance and time are always inversely proportional in ratios", "It is a convention with no underlying reason"],
    "exp": "After crossing, each train covers the ground the other had already travelled. Working it through gives a/b = v squared over u squared, so u : v = root(b) : root(a). The swap is a consequence of the derivation, and the sanity check is that the quicker finisher must come out faster.",
    "cat": "ROOT RATIO",
    "id": "A01_017"
  },
  {
    "q": "Two trains start together towards each other and after crossing take 16 and 25 seconds to complete their journeys. Their speed ratio is:",
    "a": "5 : 4",
    "opts": ["4 : 5", "5 : 4", "16 : 25", "25 : 16"],
    "exp": "Swap and take roots: root(25) : root(16) = 5 : 4. The train that finished in 16 seconds is faster, and 5 : 4 puts it first, which is the check to apply before committing to an answer.",
    "cat": "ROOT RATIO",
    "id": "A01_018"
  }

]);
