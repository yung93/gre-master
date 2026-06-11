import type { QuantQuestion } from "@/lib/types";

export const RATIO_PROPORTION: QuantQuestion[] = [
  {
    id: "q-ratio-01",
    topic: "ratio-proportion",
    format: "single",
    difficulty: 1,
    question:
      "The ratio of boys to girls in a class is 3 : 5. If there are 24 boys, how many students are there in total?",
    choices: ["40", "48", "56", "64", "72"],
    correct: ["D"],
    explanation: "Each ratio unit is 24 / 3 = 8 students. Girls = 5 × 8 = 40, total = 24 + 40 = 64.",
    explanationZh: "每一比例單位為 24 / 3 = 8 人。女生 = 5 × 8 = 40，總數 = 24 + 40 = 64。",
  },
  {
    id: "q-ratio-02",
    topic: "ratio-proportion",
    format: "numeric",
    difficulty: 1,
    question:
      "On a map, 1 centimeter represents 25 kilometers. How many kilometers does 7 centimeters represent?",
    correct: ["175"],
    explanation: "7 × 25 = 175 kilometers.",
    explanationZh: "7 × 25 = 175 公里。",
  },
  {
    id: "q-ratio-03",
    topic: "ratio-proportion",
    format: "quantitative-comparison",
    difficulty: 2,
    question: "a : b = 3 : 4 and b : c = 2 : 5, where a, b, c are positive.",
    quantityA: "a / c",
    quantityB: "1/3",
    correct: ["B"],
    explanation:
      "Scale the ratios to share b: a : b = 3 : 4 and b : c = 4 : 10, so a : b : c = 3 : 4 : 10. Then a/c = 3/10 = 0.3 < 1/3 ≈ 0.333.",
    explanationZh:
      "讓 b 一致：a : b = 3 : 4，b : c = 4 : 10，故 a : b : c = 3 : 4 : 10。則 a/c = 3/10 = 0.3 < 1/3 ≈ 0.333。",
  },
  {
    id: "q-ratio-04",
    topic: "ratio-proportion",
    format: "single",
    difficulty: 2,
    question:
      "A recipe uses 2 cups of flour to make 3 dozen cookies. How many cups of flour are needed for 5 dozen cookies?",
    choices: ["3", "10/3", "7/2", "4", "9/2"],
    correct: ["B"],
    explanation: "Flour scales with cookies: 2 × (5/3) = 10/3 cups.",
    explanationZh: "麵粉與餅乾數量成正比：2 × (5/3) = 10/3 杯。",
  },
  {
    id: "q-ratio-05",
    topic: "ratio-proportion",
    format: "numeric",
    difficulty: 1,
    question: "If x / 6 = 14 / 21, what is the value of x?",
    correct: ["4"],
    explanation: "14/21 simplifies to 2/3, so x = 6 × 2/3 = 4.",
    explanationZh: "14/21 約分為 2/3，故 x = 6 × 2/3 = 4。",
  },
  {
    id: "q-ratio-06",
    topic: "ratio-proportion",
    format: "single",
    difficulty: 2,
    question:
      "A 30-liter solution is 20% acid. If 10 liters of water are added, what percent of the new solution is acid?",
    choices: ["10%", "12%", "15%", "16%", "18%"],
    correct: ["C"],
    explanation:
      "The acid stays at 30 × 0.20 = 6 liters while the volume grows to 40 liters: 6/40 = 15%.",
    explanationZh: "酸量不變：30 × 0.20 = 6 公升；總體積變為 40 公升：6/40 = 15%。",
  },
  {
    id: "q-ratio-07",
    topic: "ratio-proportion",
    format: "quantitative-comparison",
    difficulty: 2,
    question: "6 identical machines, all working at the same rate, finish a job in 12 days.",
    quantityA: "The number of days 8 such machines need for the same job",
    quantityB: "9",
    correct: ["C"],
    explanation:
      "The job takes 6 × 12 = 72 machine-days, so 8 machines need 72 / 8 = 9 days. (Machines and days are inversely proportional.)",
    explanationZh: "整件工作需 6 × 12 = 72 機器日，8 台機器需 72 / 8 = 9 天。（機器數與天數成反比。）",
  },
  {
    id: "q-ratio-08",
    topic: "ratio-proportion",
    format: "multi",
    difficulty: 2,
    question:
      "A jar contains only red and blue marbles in the ratio 5 : 3. Which of the following could be the total number of marbles?",
    choices: ["24", "32", "36", "40", "52"],
    correct: ["A", "B", "D"],
    explanation:
      "The total must be a multiple of 5 + 3 = 8. Among the options, 24, 32, and 40 are multiples of 8; 36 and 52 are not.",
    explanationZh: "總數必須是 5 + 3 = 8 的倍數。選項中 24、32、40 是 8 的倍數；36 與 52 不是。",
  },
  {
    id: "q-ratio-09",
    topic: "ratio-proportion",
    format: "single",
    difficulty: 3,
    question: "If a : b = 2 : 3, a : c = 4 : 5, and a + b + c = 45, what is the value of b?",
    choices: ["12", "15", "18", "20", "24"],
    correct: ["C"],
    explanation:
      "Scale a to 4: a : b = 4 : 6 and a : c = 4 : 5, so a : b : c = 4 : 6 : 5. The 15 units total 45, so each unit is 3 and b = 6 × 3 = 18.",
    explanationZh:
      "把 a 調成 4：a : b = 4 : 6，a : c = 4 : 5，故 a : b : c = 4 : 6 : 5。15 份共 45，每份 3，b = 6 × 3 = 18。",
  },
  {
    id: "q-ratio-10",
    topic: "ratio-proportion",
    format: "numeric",
    difficulty: 3,
    question:
      "y is directly proportional to x². If y = 12 when x = 2, what is y when x = 4?",
    correct: ["48"],
    explanation: "y = kx² with 12 = k × 4, so k = 3. At x = 4: y = 3 × 16 = 48.",
    explanationZh: "y = kx²，12 = k × 4，故 k = 3。當 x = 4：y = 3 × 16 = 48。",
  },
];
