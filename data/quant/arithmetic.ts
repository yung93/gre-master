import type { QuantQuestion } from "@/lib/types";

export const ARITHMETIC: QuantQuestion[] = [
  {
    id: "q-arith-01",
    topic: "arithmetic",
    format: "single",
    difficulty: 1,
    question: "If 3/7 of a number is 21, what is 5/7 of the same number?",
    choices: ["25", "30", "35", "40", "45"],
    correct: ["C"],
    explanation: "Let the number be n. 3n/7 = 21, so n = 49. Then 5n/7 = 5(49)/7 = 35.",
    explanationZh: "設該數為 n。3n/7 = 21，故 n = 49。則 5n/7 = 5(49)/7 = 35。",
  },
  {
    id: "q-arith-02",
    topic: "arithmetic",
    format: "numeric",
    difficulty: 1,
    question:
      "A jacket costs $80. During a sale its price is reduced by 35%. What is the sale price, in dollars?",
    correct: ["52"],
    explanation: "A 35% reduction leaves 65% of the price: 80 × 0.65 = 52.",
    explanationZh: "折扣 35% 後剩下原價的 65%：80 × 0.65 = 52。",
  },
  {
    id: "q-arith-03",
    topic: "arithmetic",
    format: "quantitative-comparison",
    difficulty: 1,
    question: "",
    quantityA: "25% of 80",
    quantityB: "80% of 25",
    correct: ["C"],
    explanation:
      "25% of 80 = 0.25 × 80 = 20, and 80% of 25 = 0.80 × 25 = 20. In general, a% of b always equals b% of a.",
    explanationZh: "80 的 25% = 0.25 × 80 = 20，25 的 80% = 0.80 × 25 = 20。一般而言，b 的 a% 永遠等於 a 的 b%。",
  },
  {
    id: "q-arith-04",
    topic: "arithmetic",
    format: "single",
    difficulty: 2,
    question: "A price rises by 25% and then falls by 20%. What is the net percentage change?",
    choices: ["−5%", "0%", "+5%", "+10%", "+25%"],
    correct: ["B"],
    explanation:
      "Percent changes compound multiplicatively: 1.25 × 0.80 = 1.00, so there is no net change.",
    explanationZh: "百分比變化為乘法複合：1.25 × 0.80 = 1.00，故無淨變化。",
  },
  {
    id: "q-arith-05",
    topic: "arithmetic",
    format: "numeric",
    difficulty: 2,
    question:
      "The average (arithmetic mean) of four numbers is 18. Three of the numbers are 15, 19, and 22. What is the fourth number?",
    correct: ["16"],
    explanation: "The four numbers sum to 4 × 18 = 72. The fourth is 72 − (15 + 19 + 22) = 72 − 56 = 16.",
    explanationZh: "四數總和為 4 × 18 = 72。第四個數為 72 − (15 + 19 + 22) = 72 − 56 = 16。",
  },
  {
    id: "q-arith-06",
    topic: "arithmetic",
    format: "single",
    difficulty: 2,
    question:
      "$1,000 is deposited at 10% annual interest, compounded annually. How much total interest is earned after 2 years?",
    choices: ["$200", "$210", "$220", "$1,200", "$1,210"],
    correct: ["B"],
    explanation:
      "After 2 years the balance is 1000 × 1.1² = $1,210, so the interest earned is $210. (Simple interest would give only $200; the extra $10 is interest on the first year's interest.)",
    explanationZh:
      "兩年後本利和為 1000 × 1.1² = $1,210，故利息為 $210。（單利只有 $200；多出的 $10 是第一年利息所生的利息。）",
  },
  {
    id: "q-arith-07",
    topic: "arithmetic",
    format: "quantitative-comparison",
    difficulty: 2,
    question: "",
    quantityA: "0.2% of 5,000",
    quantityB: "5% of 2,000",
    correct: ["B"],
    explanation: "Quantity A: 0.002 × 5000 = 10. Quantity B: 0.05 × 2000 = 100. B is greater.",
    explanationZh: "數量 A：0.002 × 5000 = 10。數量 B：0.05 × 2000 = 100。B 較大。",
  },
  {
    id: "q-arith-08",
    topic: "arithmetic",
    format: "multi",
    difficulty: 2,
    question: "Which of the following fractions are greater than 1/3?",
    choices: ["2/7", "3/8", "4/13", "5/14", "7/20"],
    correct: ["B", "D", "E"],
    explanation:
      "Compare each to 1/3 ≈ 0.333: 2/7 ≈ 0.286 (no), 3/8 = 0.375 (yes), 4/13 ≈ 0.308 (no), 5/14 ≈ 0.357 (yes), 7/20 = 0.35 (yes).",
    explanationZh:
      "與 1/3 ≈ 0.333 比較：2/7 ≈ 0.286（否）、3/8 = 0.375（是）、4/13 ≈ 0.308（否）、5/14 ≈ 0.357（是）、7/20 = 0.35（是）。",
  },
  {
    id: "q-arith-09",
    topic: "arithmetic",
    format: "numeric",
    difficulty: 3,
    question:
      "A water tank is 3/5 full. After 30 liters are drained, it is 2/5 full. What is the capacity of the tank, in liters?",
    correct: ["150"],
    explanation: "Draining 30 liters dropped the level by 3/5 − 2/5 = 1/5 of capacity, so capacity = 30 × 5 = 150.",
    explanationZh: "排出 30 公升使水位下降 3/5 − 2/5 = 容量的 1/5，故容量 = 30 × 5 = 150。",
  },
  {
    id: "q-arith-10",
    topic: "arithmetic",
    format: "single",
    difficulty: 3,
    question: "If x = 0.9999, which of the following has the greatest value?",
    choices: ["x", "x²", "√x", "1/x", "x³"],
    correct: ["D"],
    explanation:
      "Since 0 < x < 1: powers shrink it (x³ < x² < x) and roots grow it but stay below 1 (x < √x < 1), while 1/x > 1. So 1/x is greatest.",
    explanationZh:
      "因為 0 < x < 1：乘冪使其變小（x³ < x² < x），開根使其變大但仍小於 1（x < √x < 1），而 1/x > 1，故 1/x 最大。",
  },
];
