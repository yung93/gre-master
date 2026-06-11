import type { QuantQuestion } from "@/lib/types";

export const NUMBER_PROPERTIES: QuantQuestion[] = [
  {
    id: "q-num-01",
    topic: "number-properties",
    format: "single",
    difficulty: 1,
    question: "What is the greatest common divisor of 48 and 60?",
    choices: ["4", "6", "12", "24", "48"],
    correct: ["C"],
    explanation: "48 = 2⁴·3 and 60 = 2²·3·5. The shared factors give 2²·3 = 12.",
    explanationZh: "48 = 2⁴·3，60 = 2²·3·5。共同質因數為 2²·3 = 12。",
  },
  {
    id: "q-num-02",
    topic: "number-properties",
    format: "numeric",
    difficulty: 2,
    question: "What is the units digit of 3⁴⁷?",
    correct: ["7"],
    explanation:
      "Units digits of powers of 3 cycle with period 4: 3, 9, 7, 1. Since 47 mod 4 = 3, the units digit is the 3rd in the cycle: 7.",
    explanationZh: "3 的次方個位數以週期 4 循環：3、9、7、1。47 除以 4 餘 3，故為循環中第 3 個：7。",
  },
  {
    id: "q-num-03",
    topic: "number-properties",
    format: "quantitative-comparison",
    difficulty: 2,
    question: "x is a positive odd integer.",
    quantityA: "The remainder when x² is divided by 4",
    quantityB: "1",
    correct: ["C"],
    explanation:
      "Write x = 2k + 1. Then x² = 4k² + 4k + 1 = 4(k² + k) + 1, so the remainder is always 1.",
    explanationZh: "設 x = 2k + 1，則 x² = 4k² + 4k + 1 = 4(k² + k) + 1，餘數永遠是 1。",
  },
  {
    id: "q-num-04",
    topic: "number-properties",
    format: "single",
    difficulty: 1,
    question: "How many prime numbers are there between 20 and 40?",
    choices: ["2", "3", "4", "5", "6"],
    correct: ["C"],
    explanation: "The primes in that range are 23, 29, 31, and 37 — four in total.",
    explanationZh: "該範圍內的質數為 23、29、31、37，共四個。",
  },
  {
    id: "q-num-05",
    topic: "number-properties",
    format: "numeric",
    difficulty: 3,
    question: "What is the remainder when 7¹⁰⁰ is divided by 5?",
    correct: ["1"],
    explanation:
      "7 ≡ 2 (mod 5), so 7¹⁰⁰ ≡ 2¹⁰⁰. Powers of 2 mod 5 cycle 2, 4, 3, 1 with period 4. Since 100 mod 4 = 0, it lands on the last term: 1.",
    explanationZh:
      "7 ≡ 2 (mod 5)，故 7¹⁰⁰ ≡ 2¹⁰⁰。2 的次方 mod 5 以週期 4 循環：2、4、3、1。100 除以 4 餘 0，對應循環最後一項：1。",
  },
  {
    id: "q-num-06",
    topic: "number-properties",
    format: "multi",
    difficulty: 3,
    question:
      "n is a positive integer divisible by 6. Which of the following must be a divisor of n²?",
    choices: ["4", "9", "12", "24", "36"],
    correct: ["A", "B", "C", "E"],
    explanation:
      "n = 6k, so n² = 36k², which is always divisible by 4, 9, 12, and 36. But 24 fails: when n = 6, n² = 36 is not divisible by 24.",
    explanationZh:
      "n = 6k，則 n² = 36k²，必可被 4、9、12、36 整除。但 24 不一定：n = 6 時 n² = 36 不能被 24 整除。",
  },
  {
    id: "q-num-07",
    topic: "number-properties",
    format: "quantitative-comparison",
    difficulty: 3,
    question: "x and y are positive integers and xy = 36.",
    quantityA: "x + y",
    quantityB: "13",
    correct: ["D"],
    explanation:
      "The factor pairs of 36 give sums 37 (1+36), 20 (2+18), 15 (3+12), 13 (4+9), and 12 (6+6). The sum can be less than, equal to, or greater than 13.",
    explanationZh:
      "36 的因數對之和有 37 (1+36)、20 (2+18)、15 (3+12)、13 (4+9)、12 (6+6)。和可能小於、等於或大於 13，無法確定。",
  },
  {
    id: "q-num-08",
    topic: "number-properties",
    format: "single",
    difficulty: 2,
    question: "How many positive divisors does 72 have?",
    choices: ["8", "9", "10", "12", "16"],
    correct: ["D"],
    explanation:
      "72 = 2³·3². The divisor count is (3 + 1)(2 + 1) = 12.",
    explanationZh: "72 = 2³·3²。因數個數為 (3 + 1)(2 + 1) = 12。",
  },
  {
    id: "q-num-09",
    topic: "number-properties",
    format: "single",
    difficulty: 3,
    question: "If n = 2⁴ · 3² · 5, how many of the positive divisors of n are even?",
    choices: ["6", "12", "18", "24", "30"],
    correct: ["D"],
    explanation:
      "n has (4+1)(2+1)(1+1) = 30 divisors in total. The odd ones use no factor of 2: (2+1)(1+1) = 6. So 30 − 6 = 24 are even.",
    explanationZh:
      "n 共有 (4+1)(2+1)(1+1) = 30 個因數。奇因數不含 2：(2+1)(1+1) = 6 個。故偶因數有 30 − 6 = 24 個。",
  },
  {
    id: "q-num-10",
    topic: "number-properties",
    format: "numeric",
    difficulty: 1,
    question: "What is the smallest positive integer that is divisible by both 12 and 18?",
    correct: ["36"],
    explanation: "LCM(12, 18): 12 = 2²·3 and 18 = 2·3², so the LCM is 2²·3² = 36.",
    explanationZh: "求最小公倍數：12 = 2²·3，18 = 2·3²，LCM = 2²·3² = 36。",
  },
];
