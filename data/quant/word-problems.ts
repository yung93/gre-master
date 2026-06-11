import type { QuantQuestion } from "@/lib/types";

export const WORD_PROBLEMS: QuantQuestion[] = [
  {
    id: "q-word-01",
    topic: "word-problems",
    format: "single",
    difficulty: 1,
    question: "A number increased by 20% gives 96. What is the number?",
    choices: ["76", "78", "80", "82", "84"],
    correct: ["C"],
    explanation: "The number × 1.20 = 96, so the number = 96 / 1.2 = 80.",
    explanationZh: "該數 × 1.20 = 96，故該數 = 96 / 1.2 = 80。",
  },
  {
    id: "q-word-02",
    topic: "word-problems",
    format: "numeric",
    difficulty: 2,
    question:
      "Tom is twice as old as Sarah. In 6 years, the sum of their ages will be 48. How old is Tom now?",
    correct: ["24"],
    explanation:
      "In 6 years the sum is 48, so today it is 48 − 12 = 36. With Sarah = s and Tom = 2s: 3s = 36, s = 12, Tom = 24.",
    explanationZh: "6 年後年齡和為 48，故現在為 48 − 12 = 36。設 Sarah 為 s、Tom 為 2s：3s = 36，s = 12，Tom = 24。",
  },
  {
    id: "q-word-03",
    topic: "word-problems",
    format: "single",
    difficulty: 2,
    question:
      "A train travels 240 km in 3 hours, then 320 km in 4 hours. What is its average speed for the whole trip, in km/h?",
    choices: ["70", "75", "80", "85", "90"],
    correct: ["C"],
    explanation: "Average speed = total distance / total time = (240 + 320) / (3 + 4) = 560 / 7 = 80 km/h.",
    explanationZh: "平均速率 = 總距離 / 總時間 = (240 + 320) / (3 + 4) = 560 / 7 = 80 km/h。",
  },
  {
    id: "q-word-04",
    topic: "word-problems",
    format: "quantitative-comparison",
    difficulty: 3,
    question: "A car drives 60 miles at 30 mph, then another 60 miles at 50 mph.",
    quantityA: "The car's average speed for the whole trip",
    quantityB: "40 mph",
    correct: ["B"],
    explanation:
      "Time = 60/30 + 60/50 = 2 + 1.2 = 3.2 hours for 120 miles, so the average is 37.5 mph. Equal distances at different speeds average below the midpoint (harmonic mean < arithmetic mean).",
    explanationZh:
      "時間 = 60/30 + 60/50 = 2 + 1.2 = 3.2 小時，共 120 英里，平均 37.5 mph。等距離不同速度的平均低於中點（調和平均 < 算術平均）。",
  },
  {
    id: "q-word-05",
    topic: "word-problems",
    format: "numeric",
    difficulty: 2,
    question:
      "Working alone, pump A fills a pool in 6 hours and pump B in 12 hours. Working together, how many hours do they need?",
    correct: ["4"],
    explanation: "Combined rate = 1/6 + 1/12 = 1/4 pool per hour, so 4 hours.",
    explanationZh: "合計速率 = 1/6 + 1/12 = 每小時 1/4 池，故需 4 小時。",
  },
  {
    id: "q-word-06",
    topic: "word-problems",
    format: "single",
    difficulty: 2,
    question:
      "A pipe fills a tank in 3 hours while an open drain empties it in 6 hours. With both open, how many hours does filling the empty tank take?",
    choices: ["2", "3", "4", "6", "9"],
    correct: ["D"],
    explanation: "Net rate = 1/3 − 1/6 = 1/6 tank per hour, so 6 hours.",
    explanationZh: "淨速率 = 1/3 − 1/6 = 每小時 1/6 槽，故需 6 小時。",
  },
  {
    id: "q-word-07",
    topic: "word-problems",
    format: "single",
    difficulty: 3,
    question:
      "A boat travels 8 km upstream in 2 hours and returns the same 8 km downstream in 1 hour. What is the speed of the current, in km/h?",
    choices: ["1", "1.5", "2", "2.5", "3"],
    correct: ["C"],
    explanation:
      "Upstream speed = 4 km/h and downstream speed = 8 km/h. Boat speed = (4 + 8)/2 = 6 and current = (8 − 4)/2 = 2 km/h.",
    explanationZh: "逆流速度 = 4 km/h，順流 = 8 km/h。船速 = (4 + 8)/2 = 6，水流 = (8 − 4)/2 = 2 km/h。",
  },
  {
    id: "q-word-08",
    topic: "word-problems",
    format: "multi",
    difficulty: 3,
    question:
      "Adult tickets cost $12 and child tickets cost $8. A group spent exactly $96. Which of the following could be the number of child tickets bought?",
    choices: ["3", "4", "6", "9", "10"],
    correct: ["A", "C", "D"],
    explanation:
      "12a + 8c = 96 simplifies to 3a + 2c = 24, so c = (24 − 3a)/2 with a even: a = 0, 2, 4, 6, 8 gives c = 12, 9, 6, 3, 0. Possible counts include 3, 6, and 9 — not 4 or 10.",
    explanationZh:
      "12a + 8c = 96 化簡為 3a + 2c = 24，c = (24 − 3a)/2 需 a 為偶數：a = 0, 2, 4, 6, 8 對應 c = 12, 9, 6, 3, 0。可能值含 3、6、9，不含 4 或 10。",
  },
  {
    id: "q-word-09",
    topic: "word-problems",
    format: "numeric",
    difficulty: 3,
    question:
      "$5,000 is split between two accounts paying 4% and 6% simple annual interest. The total interest after one year is $260. How many dollars are in the 4% account?",
    correct: ["2000"],
    explanation:
      "0.04x + 0.06(5000 − x) = 260 gives 300 − 0.02x = 260, so x = 2000.",
    explanationZh: "0.04x + 0.06(5000 − x) = 260，得 300 − 0.02x = 260，故 x = 2000。",
  },
  {
    id: "q-word-10",
    topic: "word-problems",
    format: "single",
    difficulty: 1,
    question: "The sum of 5 consecutive integers is 95. What is the largest of them?",
    choices: ["17", "19", "21", "23", "25"],
    correct: ["C"],
    explanation: "The middle integer is 95 / 5 = 19, so the five are 17–21 and the largest is 21.",
    explanationZh: "中間的整數為 95 / 5 = 19，五個數為 17–21，最大為 21。",
  },
];
