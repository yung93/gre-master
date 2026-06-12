import type { QuantQuestion } from "@/lib/types";

export const DATA_INTERPRETATION: QuantQuestion[] = [
  {
    id: "q-data-01",
    topic: "data-interpretation",
    format: "single",
    difficulty: 1,
    question:
      "A store's monthly sales, in thousands of dollars: Jan 40, Feb 55, Mar 45, Apr 60, May 50. What was the percent increase in sales from January to April?",
    choices: ["20%", "33%", "40%", "50%", "60%"],
    correct: ["D"],
    explanation: "(60 − 40) / 40 = 0.50 = 50%. Percent change is always measured against the starting value.",
    explanationZh: "(60 − 40) / 40 = 0.50 = 50%。百分比變化一律以起始值為基準。",
  },
  {
    id: "q-data-02",
    topic: "data-interpretation",
    format: "numeric",
    difficulty: 1,
    question:
      "Using the same data — Jan 40, Feb 55, Mar 45, Apr 60, May 50 (thousands of dollars) — what were the average monthly sales, in thousands of dollars?",
    correct: ["50"],
    explanation: "(40 + 55 + 45 + 60 + 50) / 5 = 250 / 5 = 50.",
    explanationZh: "(40 + 55 + 45 + 60 + 50) / 5 = 250 / 5 = 50。",
  },
  {
    id: "q-data-03",
    topic: "data-interpretation",
    format: "single",
    difficulty: 2,
    question:
      "A company's $200,000 budget is split: rent 35%, salaries 40%, supplies 10%, other 15%. How much more is spent on salaries than on rent?",
    choices: ["$5,000", "$8,000", "$10,000", "$12,000", "$15,000"],
    correct: ["C"],
    explanation: "The gap is 40% − 35% = 5% of the budget: 0.05 × 200,000 = $10,000.",
    explanationZh: "差距為預算的 40% − 35% = 5%：0.05 × 200,000 = $10,000。",
  },
  {
    id: "q-data-04",
    topic: "data-interpretation",
    format: "quantitative-comparison",
    difficulty: 2,
    question: "A company's revenue was $80 million in 2022 and $100 million in 2023.",
    quantityA: "The percent increase from 2022 to 2023",
    quantityB: "The percent decrease from 2023 to 2022",
    correct: ["A"],
    explanation:
      "Increase: 20/80 = 25%. Decrease: 20/100 = 20%. The same gap is a larger percentage of the smaller base.",
    explanationZh: "增幅：20/80 = 25%。降幅：20/100 = 20%。同樣的差額對較小的基數而言百分比較大。",
  },
  {
    id: "q-data-05",
    topic: "data-interpretation",
    format: "multi",
    difficulty: 2,
    question:
      "In a survey of 200 people, 90 drink tea, 110 drink coffee, and 40 drink both. Which of the following statements are true?",
    choices: [
      "Exactly 50 people drink only tea",
      "Exactly 70 people drink only coffee",
      "Exactly 40 people drink neither",
      "More than half of the people drink both",
    ],
    correct: ["A", "B", "C"],
    explanation:
      "Only tea = 90 − 40 = 50; only coffee = 110 − 40 = 70; neither = 200 − (50 + 70 + 40) = 40. Both = 40 is well under half of 200.",
    explanationZh:
      "只喝茶 = 90 − 40 = 50；只喝咖啡 = 110 − 40 = 70；都不喝 = 200 − (50 + 70 + 40) = 40。兩者皆喝的 40 人遠不到半數。",
  },
  {
    id: "q-data-06",
    topic: "data-interpretation",
    format: "numeric",
    difficulty: 2,
    question:
      "On a test, 5 students scored 60, 10 students scored 70, and 5 students scored 90. What was the mean score of the 20 students?",
    correct: ["72.5", "145/2"],
    explanation: "(5 × 60 + 10 × 70 + 5 × 90) / 20 = (300 + 700 + 450) / 20 = 1450 / 20 = 72.5.",
    explanationZh: "(5 × 60 + 10 × 70 + 5 × 90) / 20 = (300 + 700 + 450) / 20 = 1450 / 20 = 72.5。",
  },
  {
    id: "q-data-07",
    topic: "data-interpretation",
    format: "single",
    difficulty: 2,
    question:
      "Machine X produced 240 units in 8 hours; machine Y produced 180 units in 6 hours. What is the ratio of X's hourly rate to Y's hourly rate?",
    choices: ["1 : 1", "4 : 3", "3 : 4", "5 : 4", "4 : 5"],
    correct: ["A"],
    explanation: "X: 240/8 = 30 units per hour. Y: 180/6 = 30 units per hour. The rates are equal: 1 : 1.",
    explanationZh: "X：240/8 = 每小時 30 件。Y：180/6 = 每小時 30 件。速率相同，比為 1 : 1。",
  },
  {
    id: "q-data-08",
    topic: "data-interpretation",
    format: "quantitative-comparison",
    difficulty: 3,
    question:
      "In a data set, the value 10 appears 4 times, 20 appears 3 times, and 30 appears 3 times.",
    quantityA: "The mean of the data set",
    quantityB: "The median of the data set",
    correct: ["B"],
    explanation:
      "Mean = (4×10 + 3×20 + 3×30) / 10 = 190/10 = 19. Sorted, the 5th and 6th values are both 20, so the median is 20. B is greater.",
    explanationZh:
      "平均 = (4×10 + 3×20 + 3×30) / 10 = 190/10 = 19。排序後第 5、6 個值皆為 20，中位數為 20。B 較大。",
  },
  {
    id: "q-data-09",
    topic: "data-interpretation",
    format: "single",
    difficulty: 2,
    question:
      "A pie chart of 720 items shows category A at 25% and category B at 30%; categories C and D split the rest equally. How many items are in category C?",
    choices: ["144", "150", "162", "180", "216"],
    correct: ["C"],
    explanation: "C and D share 100% − 55% = 45%, so each is 22.5%: 0.225 × 720 = 162.",
    explanationZh: "C 與 D 平分 100% − 55% = 45%，各佔 22.5%：0.225 × 720 = 162。",
  },
  {
    id: "q-data-10",
    topic: "data-interpretation",
    format: "numeric",
    difficulty: 3,
    question:
      "A town's population is 5,000 and grows by 10% each year. What will the population be after 2 years?",
    correct: ["6050"],
    explanation: "5000 × 1.1² = 5000 × 1.21 = 6,050. Growth compounds — it is not simply 20%.",
    explanationZh: "5000 × 1.1² = 5000 × 1.21 = 6,050。成長是複合的，不是單純加 20%。",
  },
  {
    id: "q-data-11",
    topic: "data-interpretation",
    format: "single",
    difficulty: 2,
    question:
      "The bar graph shows a bookstore's monthly sales, in thousands of dollars, from January through May. By what percent did sales increase from March to April?",
    figure: {
      src: "/figures/quant/q-data-11.svg",
      alt: "Bar graph of monthly sales in thousands of dollars: January 20, February 35, March 25, April 40, May 30.",
      width: 380,
      height: 240,
    },
    choices: ["15%", "37.5%", "50%", "60%", "62.5%"],
    correct: ["D"],
    explanation:
      "Percent increase is measured against the starting value. Sales rose from 25 to 40 thousand dollars, an increase of 15, so the increase is 15/25 = 0.6 = 60%.",
    explanationZh: "百分比增幅以起始值為基準。銷售額從 25 千美元升至 40 千美元，增加 15，故增幅為 15/25 = 0.6，即 60%。",
  },
  {
    id: "q-data-12",
    topic: "data-interpretation",
    format: "numeric",
    difficulty: 1,
    question:
      "The circle graph shows how a family allocates its $2,400 monthly budget. How many dollars go to food each month?",
    figure: {
      src: "/figures/quant/q-data-12.svg",
      alt: "Circle graph of a $2,400 monthly budget: Rent 35%, Food 25%, Transport 15%, Savings 10%, Other 15%.",
      width: 360,
      height: 220,
    },
    correct: ["600"],
    explanation: "Food is 25% of the budget: 0.25 × 2,400 = 600 dollars.",
    explanationZh: "食物佔預算的 25%：0.25 × 2,400 = 600 美元。",
  },
];
