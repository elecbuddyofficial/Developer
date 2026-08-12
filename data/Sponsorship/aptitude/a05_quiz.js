window.loadQuizzes("A05_SimpleInterest", [

  /* ═══════════ THE FORMULA ═══════════ */
  {
    "q": "The simple interest on 5000 at 8% per annum for 3 years is:",
    "a": "1200",
    "opts": ["400", "1200", "1500", "6200"],
    "exp": "SI = PRT/100 = 5000 x 8 x 3 / 100 = 1200. The option 6200 is the AMOUNT (P + SI), which the question did not ask for.",
    "cat": "FORMULA",
    "id": "A05_001"
  },
  {
    "q": "In SI = PRT/100, the 100 appears because:",
    "a": "R is quoted as a percentage rather than as a decimal fraction",
    "opts": ["R is quoted as a percentage rather than as a decimal fraction", "Interest is always measured per 100 rupees by law", "Time must be converted to days", "It is a rounding constant"],
    "exp": "A rate of 8% means 8 hundredths, so P x 8/100 is one year's interest. Writing the rate as 0.08 instead would give SI = P x r x T with no 100 at all.",
    "cat": "FORMULA",
    "id": "A05_002"
  },
  {
    "q": "A sum of 4000 earns 720 in simple interest over 3 years. The rate is:",
    "a": "6% per annum",
    "opts": ["4% per annum", "6% per annum", "8% per annum", "18% per annum"],
    "exp": "R = 100 x SI / (P x T) = 100 x 720 / (4000 x 3) = 72000/12000 = 6%. All three rearrangements come from multiplying SI = PRT/100 by 100 and dividing by whatever multiplies the unknown.",
    "cat": "FORMULA",
    "id": "A05_003"
  },
  {
    "q": "The simple interest on 7200 at 5% per annum for 9 months is:",
    "a": "270",
    "opts": ["270", "324", "360", "3240"],
    "exp": "The rate is per annum, so 9 months must be written as 9/12 = 0.75 year. SI = 7200 x 5 x 0.75 / 100 = 270. Using T = 9 gives 3240, twelve times too large, and is the standard trap.",
    "cat": "FORMULA",
    "id": "A05_004"
  },

  /* ═══════════ AMOUNT VS INTEREST ═══════════ */
  {
    "q": "A sum becomes 1240 in 3 years at 8% simple interest. The sum is:",
    "a": "1000",
    "opts": ["1000", "1150", "1240", "5166"],
    "exp": "1240 is the AMOUNT, not the interest. In 3 years at 8% the interest is 24% of the principal, so the amount is 124% of it: P = 1240 x 100/124 = 1000. Treating 1240 as the interest gives 5166, a principal larger than the amount, which is the check that catches it.",
    "cat": "AMOUNT",
    "id": "A05_005"
  },
  {
    "q": "The relationship between amount, principal and simple interest is:",
    "a": "A = P + SI",
    "opts": ["A = P + SI", "A = P x SI", "A = SI - P", "A = P x R x T"],
    "exp": "The amount is what is finally repaid: the original sum plus the interest earned on it. So whenever a question quotes an amount, subtract the principal before treating anything as interest.",
    "cat": "AMOUNT",
    "id": "A05_006"
  },
  {
    "q": "A sum amounts to 1240 in 3 years and 1400 in 5 years at the same rate. The sum is:",
    "a": "1000",
    "opts": ["840", "1000", "1080", "1160"],
    "exp": "The extra 2 years added 1400 - 1240 = 160, so the interest is 80 per year. Removing 3 years of interest from 1240 gives 1240 - 240 = 1000. Subtracting the two amounts is the standard first move when two amounts at different times are quoted.",
    "cat": "AMOUNT",
    "id": "A05_007"
  },
  {
    "q": "In the previous question, the rate of interest is:",
    "a": "8% per annum",
    "opts": ["6% per annum", "8% per annum", "10% per annum", "12% per annum"],
    "exp": "The annual interest is 80 on a principal of 1000, so R = 100 x 80 / (1000 x 1) = 8%.",
    "cat": "AMOUNT",
    "id": "A05_008"
  },

  /* ═══════════ DOUBLING AND TRIPLING ═══════════ */
  {
    "q": "In how many years will a sum double itself at 12.5% simple interest?",
    "a": "8 years",
    "opts": ["6 years", "8 years", "12.5 years", "16 years"],
    "exp": "Doubling means the interest equals the principal, so P = PRT/100 and the principal cancels, leaving RT = 100. T = 100/12.5 = 8 years. The sum is never needed, which is why these questions do not give one.",
    "cat": "MULTIPLES",
    "id": "A05_009"
  },
  {
    "q": "A sum doubles in 10 years at simple interest. It will TRIPLE in:",
    "a": "20 years",
    "opts": ["15 years", "20 years", "25 years", "30 years"],
    "exp": "Doubling needs RT = 100 and tripling needs RT = 200, so tripling takes exactly twice as long, not three times. The first doubling has already supplied one principal's worth of interest, and the second one supplies the next.",
    "cat": "MULTIPLES",
    "id": "A05_010"
  },
  {
    "q": "For a sum to become n times itself at simple interest, the condition is:",
    "a": "R x T = 100(n - 1)",
    "opts": ["R x T = 100(n - 1)", "R x T = 100n", "R x T = 100/n", "R x T = n/100"],
    "exp": "Becoming n times means the interest is (n-1) times the principal, so (n-1)P = PRT/100 and the principal cancels to give RT = 100(n-1). Doubling is n = 2 giving 100, tripling is n = 3 giving 200.",
    "cat": "MULTIPLES",
    "id": "A05_011"
  },
  {
    "q": "Why do doubling questions never state the principal?",
    "a": "Because the principal cancels out of the equation, so the answer does not depend on it",
    "opts": ["Because the principal cancels out of the equation, so the answer does not depend on it", "Because it is always assumed to be 100", "Because simple interest ignores the principal", "Because the question is incomplete"],
    "exp": "Setting SI = P gives P = PRT/100, and P divides out of both sides. Any sum at 10% simple interest doubles in exactly 10 years, whether it is 100 or 100000.",
    "cat": "MULTIPLES",
    "id": "A05_012"
  },

  /* ═══════════ SIMPLE VS COMPOUND ═══════════ */
  {
    "q": "Simple interest differs from compound interest because simple interest is:",
    "a": "Always calculated on the original principal only",
    "opts": ["Always calculated on the original principal only", "Calculated only for whole years", "Always lower than the principal", "Charged only on loans, not deposits"],
    "exp": "Simple interest never earns interest on interest already accrued, so the yearly figure is identical every year and the total grows in a straight line. Compound interest adds each year's interest to the base, which is why it pulls ahead from year two onwards.",
    "cat": "SIMPLE VS COMPOUND",
    "id": "A05_013"
  },
  {
    "q": "At the same rate, the simple interest for 2 years compared with 1 year is:",
    "a": "Exactly double",
    "opts": ["Exactly double", "Slightly more than double", "Slightly less than double", "It depends on the principal"],
    "exp": "Because each year earns the same fixed amount, simple interest is strictly proportional to time. Compound interest for 2 years is slightly MORE than double, and the gap between the two is what most exam questions on this pair are testing.",
    "cat": "SIMPLE VS COMPOUND",
    "id": "A05_014"
  }

]);
