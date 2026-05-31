import type { QuantEntry } from "@/lib/types";

export const QUANT: QuantEntry[] = [
  {
    id: "q-arith-1",
    topic: "arithmetic",
    difficulty: 1,
    question: "If 3/8 of a number is 27, what is 5/6 of the same number?",
    answer: "60",
    explanation:
      "Let the number be n. 3n/8 = 27, so n = 72. Then 5n/6 = 5(72)/6 = 60.",
    explanationZh:
      "設該數為 n。3n/8 = 27，故 n = 72。則 5n/6 = 5(72)/6 = 60。",
  },
  {
    id: "q-arith-2",
    topic: "arithmetic",
    difficulty: 2,
    question:
      "A shirt is marked up by 40% and then discounted by 25%. What is the net percentage change from the original price?",
    choices: ["+5%", "+10%", "+15%", "+12.5%", "−5%"],
    answer: "+5%",
    explanation:
      "Net factor = 1.40 × 0.75 = 1.05, a 5% increase. Percent operations compound multiplicatively, not additively.",
    explanationZh:
      "淨倍數 = 1.40 × 0.75 = 1.05，即增加 5%。百分比運算為乘法複合，並非加減。",
  },
  {
    id: "q-arith-3",
    topic: "arithmetic",
    difficulty: 2,
    question: "What is the units digit of 7^83?",
    choices: ["1", "3", "5", "7", "9"],
    answer: "3",
    explanation:
      "Units digits of 7^n cycle with period 4: 7, 9, 3, 1. 83 mod 4 = 3, so the units digit is the 3rd in the cycle: 3.",
    explanationZh:
      "7^n 的個位數以週期 4 循環：7、9、3、1。83 ÷ 4 餘 3，故個位數為循環中的第 3 個：3。",
  },
  {
    id: "q-alg-1",
    topic: "algebra",
    difficulty: 2,
    question: "If x² − 5x + 6 = 0 and x > 0, what is the sum of all possible values of x?",
    answer: "5",
    explanation:
      "Factor: (x − 2)(x − 3) = 0, so x = 2 or x = 3. Both are positive. Sum = 5. (Equivalently, by Vieta's, sum of roots = 5.)",
    explanationZh:
      "因式分解：(x − 2)(x − 3) = 0，故 x = 2 或 x = 3，兩者皆為正。和為 5。（亦可直接由韋達定理得知根之和為 5。）",
  },
  {
    id: "q-alg-2",
    topic: "algebra",
    difficulty: 2,
    question:
      "If 2a + 3b = 17 and a − b = 1, what is the value of a + b?",
    answer: "7",
    explanation:
      "From a − b = 1, a = b + 1. Substitute: 2(b + 1) + 3b = 17 → 5b + 2 = 17 → b = 3, a = 4. So a + b = 7.",
    explanationZh:
      "由 a − b = 1 得 a = b + 1。代入：2(b + 1) + 3b = 17 → 5b + 2 = 17 → b = 3，a = 4。故 a + b = 7。",
  },
  {
    id: "q-alg-3",
    topic: "algebra",
    difficulty: 3,
    question:
      "If f(x) = 2x² − x and g(x) = x + 3, what is f(g(2)) − g(f(2))?",
    answer: "36",
    explanation:
      "g(2) = 5, f(5) = 2(25) − 5 = 45. f(2) = 2(4) − 2 = 6, g(6) = 9. 45 − 9 = 36.",
    explanationZh:
      "g(2) = 5，f(5) = 2(25) − 5 = 45。f(2) = 2(4) − 2 = 6，g(6) = 9。45 − 9 = 36。",
  },
  {
    id: "q-geo-1",
    topic: "geometry",
    difficulty: 1,
    question:
      "A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?",
    answer: "15",
    explanation:
      "By the Pythagorean theorem, h² = 9² + 12² = 81 + 144 = 225, so h = 15. (A 3-4-5 triangle scaled by 3.)",
    explanationZh:
      "由畢氏定理：h² = 9² + 12² = 81 + 144 = 225，故 h = 15。（即 3-4-5 直角三角形放大三倍。）",
  },
  {
    id: "q-geo-2",
    topic: "geometry",
    difficulty: 2,
    question:
      "A circle has area 49π. What is the circumference of the circle?",
    choices: ["7π", "14π", "21π", "49π", "98π"],
    answer: "14π",
    explanation:
      "Area πr² = 49π, so r = 7. Circumference = 2πr = 14π.",
    explanationZh:
      "面積 πr² = 49π，故 r = 7。周長 = 2πr = 14π。",
  },
  {
    id: "q-geo-3",
    topic: "geometry",
    difficulty: 3,
    question:
      "In the xy-plane, line ℓ passes through (1, 2) and (4, 8). What is the equation of the line perpendicular to ℓ passing through (1, 2)?",
    answer: "y = −(1/2)x + 5/2",
    explanation:
      "Slope of ℓ = (8 − 2)/(4 − 1) = 2. Perpendicular slope is −1/2. Using point-slope at (1, 2): y − 2 = −(1/2)(x − 1) → y = −(1/2)x + 5/2.",
    explanationZh:
      "ℓ 的斜率 = (8 − 2)/(4 − 1) = 2。垂直線之斜率為 −1/2。以點 (1, 2) 套用點斜式：y − 2 = −(1/2)(x − 1) → y = −(1/2)x + 5/2。",
  },
  {
    id: "q-data-1",
    topic: "data-analysis",
    difficulty: 1,
    question:
      "The mean of five numbers is 12. If a sixth number is added and the mean becomes 14, what is the sixth number?",
    answer: "24",
    explanation:
      "Sum of first five = 60. New sum = 14 × 6 = 84. Sixth number = 84 − 60 = 24.",
    explanationZh:
      "前五個之和 = 60。新總和 = 14 × 6 = 84。第六個數 = 84 − 60 = 24。",
  },
  {
    id: "q-data-2",
    topic: "data-analysis",
    difficulty: 2,
    question:
      "A fair coin is tossed four times. What is the probability of obtaining exactly two heads?",
    choices: ["1/4", "3/8", "1/2", "5/8", "3/4"],
    answer: "3/8",
    explanationZh:
      "符合條件之結果數 = C(4, 2) = 6。總結果數 = 2^4 = 16。機率 = 6/16 = 3/8。",
    explanation:
      "Number of favorable outcomes = C(4, 2) = 6. Total outcomes = 2^4 = 16. Probability = 6/16 = 3/8.",
  },
  {
    id: "q-data-3",
    topic: "data-analysis",
    difficulty: 3,
    question:
      "A set has median 10, mean 12, and 7 elements. The smallest element is replaced by a value 14 greater. What is the new mean?",
    answer: "14",
    explanation:
      "Replacing one element with one that is 14 greater raises the sum by 14, so the mean rises by 14/7 = 2. New mean = 14.",
    explanationZh:
      "將其中一個元素替換為大 14 的數，總和增加 14，平均數因此上升 14/7 = 2。新平均數 = 14。",
  },
  {
    id: "q-word-1",
    topic: "word-problem",
    difficulty: 2,
    question:
      "Pipe A fills a tank in 6 hours; pipe B fills the same tank in 9 hours. With both pipes open, how long does the tank take to fill?",
    answer: "3.6 hours",
    explanation:
      "Combined rate = 1/6 + 1/9 = 3/18 + 2/18 = 5/18 tank per hour. Time = 18/5 = 3.6 hours.",
    explanationZh:
      "合併速率 = 1/6 + 1/9 = 3/18 + 2/18 = 5/18 槽/小時。所需時間 = 18/5 = 3.6 小時。",
  },
  {
    id: "q-word-2",
    topic: "word-problem",
    difficulty: 2,
    question:
      "A solution that is 30% acid is mixed with 200 mL of a 60% acid solution to produce a 50% acid solution. How many mL of the 30% solution are used?",
    answer: "100",
    explanation:
      "Let x = mL of 30% solution. 0.30x + 0.60(200) = 0.50(x + 200). 0.30x + 120 = 0.50x + 100. 0.20x = 20. x = 100.",
    explanationZh:
      "設 30% 酸溶液為 x 毫升。0.30x + 0.60(200) = 0.50(x + 200)。0.30x + 120 = 0.50x + 100，0.20x = 20，x = 100。",
  },
  {
    id: "q-word-3",
    topic: "word-problem",
    difficulty: 3,
    question:
      "Eight identical machines complete a job in 15 hours. How many additional machines are needed to complete the same job in 6 hours?",
    answer: "12",
    explanation:
      "Machine-hours required: 8 × 15 = 120. To finish in 6 hours: 120 / 6 = 20 machines. Additional machines: 20 − 8 = 12.",
    explanationZh:
      "所需機器小時數：8 × 15 = 120。欲於 6 小時完成：120 / 6 = 20 部機器。需額外增加：20 − 8 = 12 部。",
  },
  {
    id: "q-arith-4",
    topic: "arithmetic",
    difficulty: 3,
    question:
      "If x is an integer and 10! / x is a perfect square, what is the smallest possible value of x?",
    answer: "7",
    explanation:
      "10! = 2^8 · 3^4 · 5^2 · 7. For 10!/x to be a perfect square, every prime exponent in the quotient must be even. Only the exponent of 7 is odd (1), so x must contribute one factor of 7. Smallest x = 7.",
    explanationZh:
      "10! = 2^8 · 3^4 · 5^2 · 7。欲使 10!/x 為完全平方數，商之中每個質因數指數皆須為偶數。僅 7 的指數為奇數（1），故 x 必須提供一個 7 的因子。最小的 x = 7。",
  },
  {
    id: "q-alg-4",
    topic: "algebra",
    difficulty: 2,
    question:
      "For how many integer values of x is |x − 4| + |x + 2| ≤ 8?",
    answer: "9",
    explanation:
      "The expression equals the sum of distances on the number line from x to 4 and from x to −2. For x between −2 and 4 (inclusive), the sum equals 6 (≤ 8). Outside, each unit away from this interval adds 2. So allowed x ranges from −3 to 5, giving 9 integers.",
    explanationZh:
      "此式為數線上 x 到 4 與 x 到 −2 之距離總和。當 x 介於 −2 與 4 之間（含端點）時，總和為 6 (≤ 8)；超出此區間後，每偏離一個單位即增加 2。故允許之 x 範圍為 −3 至 5，共 9 個整數。",
  },
  {
    id: "q-geo-4",
    topic: "geometry",
    difficulty: 2,
    question:
      "The diagonals of a rhombus are 10 and 24. What is its perimeter?",
    answer: "52",
    explanation:
      "Diagonals of a rhombus bisect each other at right angles. Each side is the hypotenuse of a right triangle with legs 5 and 12, so side = 13. Perimeter = 4 × 13 = 52.",
    explanationZh:
      "菱形之對角線互相垂直平分。各邊為兩股長 5 與 12 之直角三角形的斜邊，故邊長 = 13。周長 = 4 × 13 = 52。",
  },
  {
    id: "q-data-4",
    topic: "data-analysis",
    difficulty: 2,
    question:
      "From a group of 5 men and 4 women, a committee of 3 is formed at random. What is the probability that it contains at least one woman?",
    answer: "37/42",
    explanation:
      "P(no women) = C(5,3)/C(9,3) = 10/84 = 5/42. P(at least one woman) = 1 − 5/42 = 37/42.",
    explanationZh:
      "P(無女性) = C(5,3)/C(9,3) = 10/84 = 5/42。P(至少一位女性) = 1 − 5/42 = 37/42。",
  },
  {
    id: "q-word-4",
    topic: "word-problem",
    difficulty: 3,
    question:
      "A train traveling at 60 km/h overtakes another train traveling in the same direction at 45 km/h. The faster train is 150 m long, the slower 100 m. How many seconds does the overtaking take, measured from when the front of the faster train reaches the rear of the slower train until its rear clears the front of the slower train?",
    answer: "60",
    explanation:
      "Relative speed = 15 km/h = 15000/3600 m/s = 25/6 m/s. Distance to cover = 150 + 100 = 250 m. Time = 250 / (25/6) = 250 × 6/25 = 60 s.",
    explanationZh:
      "相對速度 = 15 km/h = 15000/3600 m/s = 25/6 m/s。需通過的距離 = 150 + 100 = 250 m。時間 = 250 / (25/6) = 250 × 6/25 = 60 秒。",
  },
];
