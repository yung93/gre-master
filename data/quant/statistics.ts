import type { QuantQuestion } from "@/lib/types";

export const STATISTICS: QuantQuestion[] = [
  {
    id: "q-stat-01",
    topic: "statistics",
    format: "single",
    difficulty: 1,
    question: "What is the average (arithmetic mean) of 7, 11, 15, 19, and 23?",
    choices: ["13", "14", "15", "16", "17"],
    correct: ["C"],
    explanation:
      "The sum is 75 and 75 / 5 = 15. (Shortcut: the numbers are evenly spaced, so the mean is the middle one.)",
    explanationZh: "總和為 75，75 / 5 = 15。（捷徑：等差數列的平均就是中間項。）",
  },
  {
    id: "q-stat-02",
    topic: "statistics",
    format: "numeric",
    difficulty: 1,
    question: "What is the median of the list 3, 7, 8, 12, 14, 20?",
    correct: ["10"],
    explanation: "With six values, the median is the average of the 3rd and 4th: (8 + 12)/2 = 10.",
    explanationZh: "六個數的中位數為第 3、4 個數的平均：(8 + 12)/2 = 10。",
  },
  {
    id: "q-stat-03",
    topic: "statistics",
    format: "quantitative-comparison",
    difficulty: 2,
    question: "List L: 2, 4, 4, 5, 7, 8",
    quantityA: "The mean of L",
    quantityB: "The median of L",
    correct: ["A"],
    explanation: "Mean = 30/6 = 5. Median = (4 + 5)/2 = 4.5. The mean is greater.",
    explanationZh: "平均 = 30/6 = 5。中位數 = (4 + 5)/2 = 4.5。平均較大。",
  },
  {
    id: "q-stat-04",
    topic: "statistics",
    format: "single",
    difficulty: 2,
    question:
      "After four tests, a student's average is 82. What score on the fifth test raises the average to 85?",
    choices: ["88", "92", "95", "97", "100"],
    correct: ["D"],
    explanation: "Needed total = 5 × 85 = 425; current total = 4 × 82 = 328. The fifth score must be 425 − 328 = 97.",
    explanationZh: "目標總分 = 5 × 85 = 425；目前總分 = 4 × 82 = 328。第五次需 425 − 328 = 97。",
  },
  {
    id: "q-stat-05",
    topic: "statistics",
    format: "quantitative-comparison",
    difficulty: 3,
    question: "a < b < c < d are positive numbers.",
    quantityA: "The median of a, b, c, d",
    quantityB: "The mean of a, b, c, d",
    correct: ["D"],
    explanation:
      "The median is (b + c)/2. For 1, 2, 3, 4 the mean equals the median (2.5); for 1, 2, 3, 100 the mean (26.5) exceeds the median (2.5); for 1, 98, 99, 100 the median (98.5) exceeds the mean (74.5). Cannot be determined.",
    explanationZh:
      "中位數為 (b + c)/2。如 1, 2, 3, 4 兩者相等（2.5）；1, 2, 3, 100 平均（26.5）大於中位數（2.5）；1, 98, 99, 100 中位數（98.5）大於平均（74.5）。無法確定。",
  },
  {
    id: "q-stat-06",
    topic: "statistics",
    format: "numeric",
    difficulty: 2,
    question:
      "Class A has 20 students with average score 70; class B has 30 students with average score 80. What is the combined average?",
    correct: ["76"],
    explanation: "(20 × 70 + 30 × 80) / 50 = (1400 + 2400) / 50 = 76. The average sits closer to the larger class.",
    explanationZh: "(20 × 70 + 30 × 80) / 50 = (1400 + 2400) / 50 = 76。加權平均偏向人數較多的班。",
  },
  {
    id: "q-stat-07",
    topic: "statistics",
    format: "single",
    difficulty: 3,
    question: "Which of the following data sets has the greatest standard deviation?",
    choices: ["10, 10, 10, 10", "8, 10, 10, 12", "6, 8, 12, 14", "9, 10, 10, 11", "10, 11, 12, 13"],
    correct: ["C"],
    explanation:
      "Standard deviation measures spread around the mean. Set C's values sit 4, 2, 2, 4 away from its mean of 10 — farther than any other option's deviations.",
    explanationZh:
      "標準差衡量資料偏離平均的程度。C 組與平均 10 的距離為 4、2、2、4，比其他選項都分散。",
  },
  {
    id: "q-stat-08",
    topic: "statistics",
    format: "multi",
    difficulty: 2,
    question: "Consider the set {4, 8, 11, 15, 22}. Which of the following statements are true?",
    choices: ["The mean is 12", "The median is 11", "The range is 18", "The set has a mode"],
    correct: ["A", "B", "C"],
    explanation:
      "Sum = 60, so the mean is 12. The middle value is 11. Range = 22 − 4 = 18. No value repeats, so there is no mode.",
    explanationZh: "總和 60，平均 12。中間值為 11。全距 = 22 − 4 = 18。沒有重複值，故無眾數。",
  },
  {
    id: "q-stat-09",
    topic: "statistics",
    format: "numeric",
    difficulty: 3,
    question:
      "The mean of 5 numbers is 20. When one number is removed, the mean of the remaining 4 numbers is 18. What number was removed?",
    correct: ["28"],
    explanation: "Total before = 100; total after = 72. The removed number is 100 − 72 = 28.",
    explanationZh: "原總和 = 100；移除後總和 = 72。被移除的數為 100 − 72 = 28。",
  },
  {
    id: "q-stat-10",
    topic: "statistics",
    format: "single",
    difficulty: 2,
    question:
      "A list of 6 numbers has range 25. If the smallest number is 12, what is the largest?",
    choices: ["13", "25", "35", "37", "49"],
    correct: ["D"],
    explanation: "Range = largest − smallest, so the largest is 12 + 25 = 37.",
    explanationZh: "全距 = 最大值 − 最小值，故最大值 = 12 + 25 = 37。",
  },
  {
    id: "q-stat-11",
    topic: "statistics",
    format: "single",
    difficulty: 2,
    question:
      "The line graph shows a city's daily high temperature, in degrees Celsius, over six days. What is the median of the six temperatures?",
    figure: {
      src: "/figures/quant/q-stat-11.svg",
      alt: "Line graph of daily high temperatures in degrees Celsius: Monday 12, Tuesday 19, Wednesday 15, Thursday 21, Friday 18, Saturday 24.",
      width: 380,
      height: 230,
    },
    choices: ["15", "18", "18.5", "19", "21"],
    correct: ["C"],
    explanation:
      "Sort the values first: 12, 15, 18, 19, 21, 24. With six values the median is the mean of the middle two: (18 + 19) / 2 = 18.5.",
    explanationZh: "先排序：12, 15, 18, 19, 21, 24。六個數的中位數是中間兩數的平均：(18 + 19) / 2 = 18.5。",
  },
];
