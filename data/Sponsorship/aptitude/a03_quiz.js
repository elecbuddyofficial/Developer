window.loadQuizzes("A03_HeightDistance", [

  /* ═══════════ RATIOS ═══════════ */
  {
    "q": "In a right angled triangle, tan θ is defined as:",
    "a": "Perpendicular / Base",
    "opts": ["Perpendicular / Base", "Perpendicular / Hypotenuse", "Base / Hypotenuse", "Base / Perpendicular"],
    "exp": "tan θ = perpendicular / base. It is the only primary ratio that does not involve the hypotenuse, which is exactly why it does almost all the work in height problems: a height and a ground distance are the perpendicular and the base.",
    "cat": "RATIOS",
    "id": "A03_001"
  },
  {
    "q": "cosec θ is the reciprocal of:",
    "a": "sin θ",
    "opts": ["sin θ", "cos θ", "tan θ", "cot θ"],
    "exp": "cosec is 1/sin and sec is 1/cos. The pairing is deliberately crossed, and the third letter is the reminder: coSec goes with Sin.",
    "cat": "RATIOS",
    "id": "A03_002"
  },
  {
    "q": "Which ratio should you reach for first in a typical height and distance problem?",
    "a": "tan, because a height and a ground distance are the perpendicular and the base",
    "opts": ["tan, because a height and a ground distance are the perpendicular and the base", "sin, because the line of sight is always given", "cos, because the ground distance is always the hypotenuse", "cot, because heights are always vertical"],
    "exp": "Height questions give a vertical height and a horizontal distance, which are the perpendicular and base. Only tan connects those two without the hypotenuse. Reaching for sin or cos usually means the sloping line of sight has been mistaken for the ground distance.",
    "cat": "RATIOS",
    "id": "A03_003"
  },

  /* ═══════════ IDENTITIES ═══════════ */
  {
    "q": "The identity sin²θ + cos²θ = 1 is obtained by:",
    "a": "Dividing P² + B² = H² through by H²",
    "opts": ["Dividing P² + B² = H² through by H²", "Dividing P² + B² = H² through by B²", "Multiplying Pythagoras by H²", "It cannot be derived and must be memorised"],
    "exp": "Dividing Pythagoras by H² turns P²/H² into sin²θ and B²/H² into cos²θ. Dividing by B² gives 1 + tan²θ = sec²θ, and dividing by P² gives 1 + cot²θ = cosec²θ. All three identities are one equation divided three ways.",
    "cat": "IDENTITIES",
    "id": "A03_004"
  },
  {
    "q": "1 + tan²θ equals:",
    "a": "sec²θ",
    "opts": ["sec²θ", "cosec²θ", "cot²θ", "sin²θ"],
    "exp": "Divide P² + B² = H² by B²: P²/B² + 1 = H²/B², which is tan²θ + 1 = sec²θ. Note the pairing, tan goes with sec, and cot goes with cosec.",
    "cat": "IDENTITIES",
    "id": "A03_005"
  },

  /* ═══════════ STANDARD ANGLES ═══════════ */
  {
    "q": "The value of tan 45° is:",
    "a": "1",
    "opts": ["1", "1/√2", "√3", "1/√3"],
    "exp": "A right angled triangle with both short sides equal has angles of 45°, so perpendicular and base are equal and their ratio is 1. This is why a 45° elevation makes the height equal to the ground distance with no calculation needed.",
    "cat": "STANDARD ANGLES",
    "id": "A03_006"
  },
  {
    "q": "The value of tan 30° is:",
    "a": "1/√3",
    "opts": ["1/√3", "√3", "1/2", "√3/2"],
    "exp": "Cut an equilateral triangle of side 2 in half: hypotenuse 2, base 1, height √3. From the 30° corner the opposite side is 1 and the adjacent is √3, so tan 30° = 1/√3. Answering √3 gives tan 60° instead.",
    "cat": "STANDARD ANGLES",
    "id": "A03_007"
  },
  {
    "q": "Why is tan 90° not defined?",
    "a": "Because tan is sin/cos and cos 90° = 0, so it would require division by zero",
    "opts": ["Because tan is sin/cos and cos 90° = 0, so it would require division by zero", "Because sin 90° = 0", "Because a 90° triangle cannot exist", "Because its value is exactly infinity"],
    "exp": "cos 90° = 0, and dividing by zero has no value, so tan 90° does not exist rather than being infinite. Physically it says a line of sight straight up never meets the ground at any finite distance.",
    "cat": "STANDARD ANGLES",
    "id": "A03_008"
  },
  {
    "q": "sin 60° equals:",
    "a": "√3/2",
    "opts": ["√3/2", "1/2", "1/√2", "√3"],
    "exp": "From the half-equilateral triangle, the side opposite 60° is √3 and the hypotenuse is 2. Note sin 60° = cos 30° and sin 30° = cos 60°, because the two angles are complementary.",
    "cat": "STANDARD ANGLES",
    "id": "A03_009"
  },

  /* ═══════════ ELEVATION AND DEPRESSION ═══════════ */
  {
    "q": "An angle of elevation is always measured from:",
    "a": "The horizontal through the observer",
    "opts": ["The horizontal through the observer", "The vertical through the observer", "The line of sight", "The ground at the object's base"],
    "exp": "Both elevation and depression are measured from the horizontal, never from the vertical. Measuring from the vertical gives the complement of the true angle and is the most common diagram error in this topic.",
    "cat": "ELEVATION",
    "id": "A03_010"
  },
  {
    "q": "If the angle of elevation of P from O is 30°, the angle of depression of O from P is:",
    "a": "30°",
    "opts": ["30°", "60°", "90°", "It cannot be determined"],
    "exp": "The two horizontals are parallel and the line of sight is a transversal, so the angles are alternate angles and therefore equal. Transferring a depression angle to the far end as an equal elevation is what turns an awkward diagram into a standard one.",
    "cat": "ELEVATION",
    "id": "A03_011"
  },

  /* ═══════════ APPLICATION ═══════════ */
  {
    "q": "The elevation of a tower's top from a point 60 m from its foot is 45°. The tower's height is:",
    "a": "60 m",
    "opts": ["30 m", "60 m", "60√3 m", "120 m"],
    "exp": "tan 45° = 1, so height / distance = 1 and the height equals the distance: 60 m. Any question quoting 45° has this shortcut built into it.",
    "cat": "APPLICATION",
    "id": "A03_012"
  },
  {
    "q": "A 60 m tower subtends an elevation of 30° at a point on the ground. That point is:",
    "a": "60√3 m away",
    "opts": ["20√3 m away", "60/√3 m away", "60√3 m away", "30 m away"],
    "exp": "tan 30° = 60/d gives 1/√3 = 60/d, so d = 60√3, about 103.9 m. A smaller angle means standing further away, so an answer smaller than the height means the ratio was inverted.",
    "cat": "APPLICATION",
    "id": "A03_013"
  },
  {
    "q": "For a fixed tower, the point where the elevation is 30° compared with where it is 60° is:",
    "a": "3 times as far from the foot",
    "opts": ["3 times as far from the foot", "√3 times as far from the foot", "2 times as far from the foot", "Half as far from the foot"],
    "exp": "Distance is h/tan θ, so the ratio is tan 60° / tan 30° = √3 ÷ (1/√3) = 3. For a 60 m tower the two points are about 103.9 m and 34.6 m out.",
    "cat": "APPLICATION",
    "id": "A03_014"
  },
  {
    "q": "Walking towards a tower, a man finds the elevation changes from 30° to 60° over 40 m. The tower's height is:",
    "a": "20√3 m",
    "opts": ["20√3 m", "40√3 m", "20 m", "40 m"],
    "exp": "With near distance x: tan 60° gives x = h/√3, and tan 30° gives x + 40 = h√3. Subtracting, 40 = h(3-1)/√3 = 2h/√3, so h = 20√3, about 34.6 m. Two angles always means two triangles sharing the vertical side.",
    "cat": "APPLICATION",
    "id": "A03_015"
  },
  {
    "q": "From the top of a 45 m lighthouse the depression of a boat is 45°. The boat's distance from the foot is:",
    "a": "45 m",
    "opts": ["22.5 m", "45 m", "45√3 m", "90 m"],
    "exp": "The depression from the top equals the elevation of the top from the boat, so the angle at the boat is 45°, giving tan 45° = 45/d and d = 45 m. Transferring the angle to the other end is the standard first move.",
    "cat": "APPLICATION",
    "id": "A03_016"
  },
  {
    "q": "A question gives the observer's eye height as 1.5 m and asks for a tower's height. You must:",
    "a": "Add the eye height to the height found from the triangle",
    "opts": ["Add the eye height to the height found from the triangle", "Subtract the eye height from the ground distance", "Ignore it, as it never affects the answer", "Multiply the result by 1.5"],
    "exp": "The triangle is formed above eye level, so it gives the height of the tower ABOVE the eye. The observer's own height must be added back to reach the tower's full height from the ground.",
    "cat": "APPLICATION",
    "id": "A03_017"
  }

]);
