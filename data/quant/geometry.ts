import type { QuantQuestion } from "@/lib/types";

export const GEOMETRY: QuantQuestion[] = [
  {
    id: "q-geo-01",
    topic: "geometry",
    format: "single",
    difficulty: 1,
    question:
      "A rectangle has perimeter 36 and its length is twice its width. What is its area?",
    choices: ["36", "54", "72", "81", "108"],
    correct: ["C"],
    explanation: "2(w + 2w) = 36 gives w = 6, so the sides are 6 and 12 and the area is 72.",
    explanationZh: "2(w + 2w) = 36，得 w = 6，邊長為 6 與 12，面積為 72。",
  },
  {
    id: "q-geo-02",
    topic: "geometry",
    format: "numeric",
    difficulty: 1,
    question:
      "The angles of a triangle are in the ratio 2 : 3 : 4. What is the measure of the largest angle, in degrees?",
    correct: ["80"],
    explanation: "The ratio units sum to 9, and 180 / 9 = 20 per unit. The largest angle is 4 × 20 = 80°.",
    explanationZh: "比例單位共 9 份，180 / 9 = 每份 20。最大角為 4 × 20 = 80°。",
  },
  {
    id: "q-geo-03",
    topic: "geometry",
    format: "quantitative-comparison",
    difficulty: 2,
    question: "A circle has radius 3.",
    quantityA: "The numerical value of its circumference",
    quantityB: "The numerical value of its area",
    correct: ["B"],
    explanation:
      "Circumference = 2πr = 6π ≈ 18.8; area = πr² = 9π ≈ 28.3. Since r > 2, the area's value exceeds the circumference's.",
    explanationZh: "圓周 = 2πr = 6π ≈ 18.8；面積 = πr² = 9π ≈ 28.3。當 r > 2 時面積數值大於圓周數值。",
  },
  {
    id: "q-geo-04",
    topic: "geometry",
    format: "single",
    difficulty: 1,
    question: "A right triangle has legs of length 9 and 12. What is the length of its hypotenuse?",
    choices: ["13", "14", "15", "16", "21"],
    correct: ["C"],
    explanation: "√(9² + 12²) = √(81 + 144) = √225 = 15. (A 3-4-5 triangle scaled by 3.)",
    explanationZh: "√(9² + 12²) = √(81 + 144) = √225 = 15。（3-4-5 直角三角形放大 3 倍。）",
  },
  {
    id: "q-geo-05",
    topic: "geometry",
    format: "multi",
    difficulty: 2,
    question:
      "Two sides of a triangle have lengths 5 and 9. Which of the following could be the length of the third side?",
    choices: ["3", "4", "7", "12", "14"],
    correct: ["C", "D"],
    explanation:
      "The triangle inequality requires the third side to be strictly between 9 − 5 = 4 and 9 + 5 = 14. Only 7 and 12 qualify (4 and 14 themselves are excluded).",
    explanationZh:
      "三角不等式要求第三邊嚴格介於 9 − 5 = 4 與 9 + 5 = 14 之間。只有 7 和 12 符合（4 與 14 本身不行）。",
  },
  {
    id: "q-geo-06",
    topic: "geometry",
    format: "numeric",
    difficulty: 2,
    question: "A cube has surface area 150. What is its volume?",
    correct: ["125"],
    explanation: "6s² = 150 gives s² = 25, so s = 5 and the volume is 5³ = 125.",
    explanationZh: "6s² = 150，得 s² = 25，故 s = 5，體積為 5³ = 125。",
  },
  {
    id: "q-geo-07",
    topic: "geometry",
    format: "quantitative-comparison",
    difficulty: 3,
    question: "",
    quantityA: "The area of an equilateral triangle with side 4",
    quantityB: "The area of a square with diagonal 4",
    correct: ["B"],
    explanation:
      "Equilateral triangle: (√3/4)·4² = 4√3 ≈ 6.93. Square with diagonal d has area d²/2 = 16/2 = 8. B is greater.",
    explanationZh:
      "等邊三角形面積：(√3/4)·4² = 4√3 ≈ 6.93。對角線為 d 的正方形面積為 d²/2 = 16/2 = 8。B 較大。",
  },
  {
    id: "q-geo-08",
    topic: "geometry",
    format: "single",
    difficulty: 3,
    question:
      "A circle is inscribed in a square with side 8. What is the area of the region inside the square but outside the circle?",
    choices: ["64 − 16π", "64 − 8π", "16 − 4π", "64 − 4π", "16π − 64"],
    correct: ["A"],
    explanation:
      "The inscribed circle has radius 4, so its area is 16π. The square's area is 64, leaving 64 − 16π.",
    explanationZh: "內切圓半徑為 4，面積 16π。正方形面積 64，剩餘區域為 64 − 16π。",
  },
  {
    id: "q-geo-09",
    topic: "geometry",
    format: "single",
    difficulty: 2,
    question: "What is the measure of each interior angle of a regular hexagon?",
    choices: ["108°", "120°", "135°", "140°", "144°"],
    correct: ["B"],
    explanation: "Interior angle sum = (6 − 2) × 180 = 720°, so each angle is 720 / 6 = 120°.",
    explanationZh: "內角和 = (6 − 2) × 180 = 720°，每個內角為 720 / 6 = 120°。",
  },
  {
    id: "q-geo-10",
    topic: "geometry",
    format: "numeric",
    difficulty: 3,
    question:
      "A right circular cylinder has radius 3 and height 4. Its volume equals kπ. What is the value of k?",
    correct: ["36"],
    explanation: "V = πr²h = π × 9 × 4 = 36π, so k = 36.",
    explanationZh: "V = πr²h = π × 9 × 4 = 36π，故 k = 36。",
  },
  {
    id: "q-geo-11",
    topic: "geometry",
    format: "single",
    difficulty: 2,
    question: "In the figure, what is the value of x?",
    figure: {
      src: "/figures/quant/q-geo-11.svg",
      alt: "A triangle with interior angles of 55° and 70°. Its base is extended beyond the third vertex, forming an exterior angle of x°.",
      width: 360,
      height: 200,
    },
    choices: ["55", "70", "110", "125", "145"],
    correct: ["D"],
    explanation:
      "An exterior angle of a triangle equals the sum of the two remote interior angles, so x = 55 + 70 = 125. (Equivalently, the third interior angle is 180 − 55 − 70 = 55, and x = 180 − 55 = 125.)",
    explanationZh: "三角形的外角等於兩個不相鄰內角之和，所以 x = 55 + 70 = 125。（亦可：第三個內角為 180 − 55 − 70 = 55，故 x = 180 − 55 = 125。）",
  },
  {
    id: "q-geo-12",
    topic: "geometry",
    format: "single",
    difficulty: 2,
    question: "In the figure, lines ℓ and m are parallel. What is the value of x?",
    figure: {
      src: "/figures/quant/q-geo-12.svg",
      alt: "Parallel lines ℓ and m cut by a transversal. At line ℓ the angle above the line, to the right of the transversal, is 130°. At line m the angle below the line, to the right of the transversal, is x°.",
      width: 360,
      height: 210,
    },
    choices: ["40", "50", "65", "130", "140"],
    correct: ["B"],
    explanation:
      "Corresponding angles are equal, so the angle above m on the right of the transversal is also 130°. x is its supplement along the transversal: x = 180 − 130 = 50.",
    explanationZh: "同位角相等，故 m 線上方、截線右側的角也是 130°。x 與它互補：x = 180 − 130 = 50。",
  },
  {
    id: "q-geo-13",
    topic: "geometry",
    format: "numeric",
    difficulty: 2,
    question:
      "In the figure, points A, B, and C lie on the circle with center O. What is the value of x?",
    figure: {
      src: "/figures/quant/q-geo-13.svg",
      alt: "A circle with center O. Points A, B, and C lie on the circle. Radii OA and OB form a central angle of 80°; chords CA and CB form an inscribed angle of x° at C on the major arc.",
      width: 260,
      height: 210,
    },
    correct: ["40"],
    explanation:
      "An inscribed angle is half the central angle that subtends the same arc. Angle ACB subtends arc AB, the same arc as the 80° central angle, so x = 80 / 2 = 40.",
    explanationZh: "圓周角是同弧所對圓心角的一半。∠ACB 與 80° 的圓心角對著同一弧 AB，故 x = 80 / 2 = 40。",
  },
];
