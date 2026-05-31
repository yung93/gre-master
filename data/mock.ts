import type { MockTest } from "@/lib/types";

export const MOCK_TESTS: MockTest[] = [
  {
    id: "mock-1",
    title: "Mock Test 01 — Full Length",
    sections: [
      {
        id: "m1-aw",
        label: "Analytical Writing — Issue Task",
        kind: "writing",
        durationSeconds: 30 * 60,
        questions: [
          {
            id: "m1-aw-1",
            type: "essay",
            prompt:
              "Genuine progress in any field requires a willingness to discard ideas that have long been accepted as foundational.\n\nWrite a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning. In developing and supporting your position, you should consider ways in which the statement might or might not hold true, and explain how those considerations shape your view.",
          },
        ],
      },
      {
        id: "m1-v1",
        label: "Verbal Reasoning — Section 1",
        kind: "verbal",
        durationSeconds: 18 * 60,
        questions: [
          {
            id: "m1-v1-1",
            type: "text-completion",
            prompt:
              "Although the panel's findings were widely characterized as definitive, careful readers noted that the conclusions were in fact (i) ______, resting on data the authors themselves acknowledged to be (ii) ______.",
            choices: [
              "(i) tentative · (ii) provisional",
              "(i) tentative · (ii) exhaustive",
              "(i) categorical · (ii) provisional",
              "(i) categorical · (ii) decisive",
              "(i) speculative · (ii) decisive",
            ],
            correct: ["(i) tentative · (ii) provisional"],
            explanation:
              "The pivot 'although ... in fact' signals a contrast with 'definitive,' so the first blank must mean not-definitive (tentative). The second blank parallels the first: the data are also less-than-final (provisional).",
          },
          {
            id: "m1-v1-2",
            type: "single",
            prompt:
              "The novelist's later style is best described as ______: every paragraph appears effortless, yet conceals an architecture so tight that a single sentence cannot be moved without disturbing the whole.",
            choices: ["deceptively casual", "transparently labored", "ostentatiously ornate", "halting", "perfunctory"],
            correct: ["deceptively casual"],
            explanation:
              "The sentence sets up a paradox: it seems effortless but is in fact tightly engineered. 'Deceptively casual' captures the gap between apparent ease and underlying rigor.",
          },
          {
            id: "m1-v1-3",
            type: "multi",
            prompt:
              "Select all that apply. In context, the author treats the prevailing theory as ______.",
            passage:
              "It is not, in the end, the theory's predictions that trouble me — many have held up admirably — but its appetite for retrofit. Anomalies that should have unsettled it are absorbed; observations that should have demanded a new framework are accommodated by ever more ingenious auxiliary assumptions. The theory has begun to behave less like an explanation and more like a habit of mind.",
            choices: [
              "empirically vindicated",
              "explanatorily overextended",
              "methodologically suspect",
              "demonstrably false",
            ],
            correct: ["empirically vindicated", "explanatorily overextended", "methodologically suspect"],
            explanation:
              "The author concedes predictions 'have held up admirably' (vindicated), but criticizes its retrofit habit (overextended) and treats this as a methodological flaw (suspect). The passage does not claim the theory is demonstrably false.",
          },
          {
            id: "m1-v1-4",
            type: "text-completion",
            prompt:
              "The committee's report was praised for its ______, treating contested findings with neither the credulity of advocates nor the dismissiveness of habitual skeptics.",
            choices: ["even-handedness", "polemicism", "diffidence", "obscurantism", "partisanship"],
            correct: ["even-handedness"],
            explanation:
              "The blank must denote a balanced stance — neither credulous nor dismissive. 'Even-handedness' matches.",
          },
          {
            id: "m1-v1-5",
            type: "single",
            prompt:
              "In the passage, the author's attitude toward the proposed reform can best be described as",
            passage:
              "I do not doubt the sincerity of the reform's architects, and the abuses they hope to remedy are real. But the instrument they propose — sweeping, blunt, and difficult to reverse once enacted — is poorly matched to the granular problem it addresses. One does not perform precision surgery with an axe, however urgent the operation.",
            choices: [
              "sympathetic to the goal but skeptical of the means",
              "uniformly hostile",
              "enthusiastically supportive",
              "indifferent",
              "preoccupied with procedural objections",
            ],
            correct: ["sympathetic to the goal but skeptical of the means"],
            explanation:
              "The author accepts the sincerity and the underlying problem, but argues the proposed instrument is mismatched. That is sympathy for the goal and skepticism of the means.",
          },
          {
            id: "m1-v1-6",
            type: "text-completion",
            prompt:
              "Far from being ______, the manuscript bristles with marginalia, second thoughts, and abandoned drafts — evidence of an author for whom even apparent fluency was hard-won.",
            choices: ["spontaneous", "meticulous", "intricate", "self-conscious", "argumentative"],
            correct: ["spontaneous"],
            explanation:
              "'Far from being ______' contrasts with the bristling marginalia and revisions. The opposite of those traits is 'spontaneous.'",
          },
          {
            id: "m1-v1-7",
            type: "single",
            prompt:
              "Which choice most nearly preserves the meaning of the sentence: 'Her remarks at the briefing, though ostensibly conciliatory, were widely read as a tacit reproach.'",
            choices: [
              "Her remarks, though seemingly intended to soothe, were broadly interpreted as an implicit rebuke.",
              "Her remarks were openly hostile and intended to provoke.",
              "Her remarks were sincere overtures of reconciliation.",
              "Her remarks were misunderstood and bore no critical intent.",
              "Her remarks were ignored by most observers.",
            ],
            correct: ["Her remarks, though seemingly intended to soothe, were broadly interpreted as an implicit rebuke."],
            explanation:
              "'Ostensibly' = seemingly; 'tacit reproach' = implicit rebuke. Choice (A) is the closest paraphrase.",
          },
          {
            id: "m1-v1-8",
            type: "text-completion",
            prompt:
              "The historian's argument is (i) ______ in its sweep but (ii) ______ in its handling of particular cases, marshaling continents of evidence yet pausing to examine each fragment.",
            choices: [
              "(i) panoramic · (ii) fastidious",
              "(i) panoramic · (ii) cursory",
              "(i) parochial · (ii) fastidious",
              "(i) parochial · (ii) cursory",
              "(i) narrow · (ii) global",
            ],
            correct: ["(i) panoramic · (ii) fastidious"],
            explanation:
              "'Sweep' / 'continents of evidence' suggests panoramic; 'pausing to examine each fragment' suggests fastidious.",
          },
          {
            id: "m1-v1-9",
            type: "single",
            prompt:
              "It can most reasonably be inferred from the passage that the author considers the recent reception of the work to be",
            passage:
              "When the novel first appeared, its champions were a coterie of poets and a handful of older critics nearing retirement; its detractors, by contrast, included nearly every reviewer of consequence. Three decades on, the verdict has neatly inverted: the once-dismissive establishment now cites the book as a touchstone, while the cohort that first defended it has either died or grown weary of being asked to comment on a vindication that, in their view, never required so long an apprenticeship.",
            choices: [
              "a belated and slightly anticlimactic vindication of its early champions",
              "an unambiguous repudiation of the work's original supporters",
              "evidence that critical consensus is a reliable guide to enduring worth",
              "an indication that the work has been overpraised",
              "proof that the work was never seriously disputed",
            ],
            correct: ["a belated and slightly anticlimactic vindication of its early champions"],
            explanation:
              "The passage frames the establishment's reversal as a belated agreement, and notes the original champions feel weary that vindication required 'so long an apprenticeship' — that is, anticlimactic.",
          },
          {
            id: "m1-v1-10",
            type: "text-completion",
            prompt:
              "The argument is hardly ______: its principal premise has been defended at length, refined by successive generations, and tested against alternatives in nearly every decade since its first formulation.",
            choices: ["novel", "untested", "elaborate", "esoteric", "polemical"],
            correct: ["untested"],
            explanation:
              "The list — defended, refined, tested against alternatives — is incompatible with 'untested.'",
          },
          {
            id: "m1-v1-11",
            type: "multi",
            prompt:
              "Select all that apply. The passage suggests that the public's enthusiasm for the new infrastructure has been driven by which of the following?",
            passage:
              "Public support for the new transit line is not, despite the agency's preferred narrative, a vindication of long-range planning. It is, rather, the predictable consequence of a fortuitous coincidence: a stretch of unusually mild summers that boosted ridership, a long-delayed downtown renewal that finally produced destinations worth reaching, and an aggressive media campaign timed to the line's opening week. Remove any one of these and the early figures would have looked considerably less impressive.",
            choices: [
              "favorable weather conditions",
              "the agency's superior planning",
              "a coincidental revitalization of downtown",
              "deliberate publicity efforts",
            ],
            correct: [
              "favorable weather conditions",
              "a coincidental revitalization of downtown",
              "deliberate publicity efforts",
            ],
            explanation:
              "The passage names mild summers, downtown renewal, and a media campaign — and explicitly disputes the planning narrative.",
          },
          {
            id: "m1-v1-12",
            type: "single",
            prompt:
              "The author's tone in the passage above is best characterized as",
            passage:
              "Public support for the new transit line is not, despite the agency's preferred narrative, a vindication of long-range planning. It is, rather, the predictable consequence of a fortuitous coincidence: a stretch of unusually mild summers that boosted ridership, a long-delayed downtown renewal that finally produced destinations worth reaching, and an aggressive media campaign timed to the line's opening week. Remove any one of these and the early figures would have looked considerably less impressive.",
            choices: [
              "skeptical and pointed",
              "celebratory",
              "indifferent",
              "wistful",
              "deferential",
            ],
            correct: ["skeptical and pointed"],
            explanation:
              "The author actively contests the agency's preferred narrative and itemizes alternative explanations — skeptical, with edge.",
          },
        ],
      },
      {
        id: "m1-q1",
        label: "Quantitative Reasoning — Section 1",
        kind: "quant",
        durationSeconds: 21 * 60,
        questions: [
          {
            id: "m1-q1-1",
            type: "single",
            prompt: "If 4x − 7 = 17, what is the value of 2x + 5?",
            choices: ["11", "13", "17", "19", "23"],
            correct: ["17"],
            explanation: "4x = 24, so x = 6. 2x + 5 = 12 + 5 = 17.",
          },
          {
            id: "m1-q1-2",
            type: "single",
            prompt: "If a is 25% greater than b, then b is what percent less than a?",
            choices: ["15%", "20%", "25%", "33⅓%", "40%"],
            correct: ["20%"],
            explanation: "a = 1.25b → b = a/1.25 = 0.8a. So b is 20% less than a.",
          },
          {
            id: "m1-q1-3",
            type: "numeric",
            prompt: "The mean of seven numbers is 18. If one of the numbers, 30, is removed, what is the mean of the remaining six?",
            correct: ["16"],
            explanation: "Total = 7 × 18 = 126. Removing 30 leaves 96; 96/6 = 16.",
          },
          {
            id: "m1-q1-4",
            type: "single",
            prompt: "A bag contains 4 red, 5 blue, and 6 green marbles. If two are drawn without replacement, what is the probability both are blue?",
            choices: ["1/21", "5/42", "2/21", "5/21", "1/3"],
            correct: ["2/21"],
            explanation: "P(blue then blue) = 5/15 × 4/14 = 20/210 = 2/21.",
          },
          {
            id: "m1-q1-5",
            type: "single",
            prompt: "If x and y are positive integers with x + y = 12 and xy maximum, what is xy?",
            choices: ["27", "32", "35", "36", "40"],
            correct: ["36"],
            explanation: "For fixed sum, product is maximized when values are equal: x = y = 6 → xy = 36.",
          },
          {
            id: "m1-q1-6",
            type: "single",
            prompt: "What is the greatest prime factor of 252?",
            choices: ["3", "5", "7", "11", "13"],
            correct: ["7"],
            explanation: "252 = 4 · 63 = 4 · 9 · 7 = 2² · 3² · 7. Greatest prime factor is 7.",
          },
          {
            id: "m1-q1-7",
            type: "numeric",
            prompt: "A rectangle has perimeter 30 and area 56. What is the length of its longer side?",
            correct: ["8"],
            explanation: "Let sides be l and w with l + w = 15 and lw = 56. Solving: l and w are roots of t² − 15t + 56 = 0 → t = 7 or 8. Longer is 8.",
          },
          {
            id: "m1-q1-8",
            type: "single",
            prompt: "If 3^(2x) = 81, what is x?",
            choices: ["1", "2", "3", "4", "5"],
            correct: ["2"],
            explanation: "81 = 3^4. So 2x = 4, x = 2.",
          },
          {
            id: "m1-q1-9",
            type: "single",
            prompt: "Quantity A: the median of 4, 7, 9, 11, 13, 15. Quantity B: the mean of the same set.",
            choices: [
              "Quantity A is greater",
              "Quantity B is greater",
              "The two quantities are equal",
              "Cannot be determined",
            ],
            correct: ["Quantity A is greater"],
            explanation: "Median = (9 + 11)/2 = 10. Sum = 4+7+9+11+13+15 = 59, so mean = 59/6 ≈ 9.83. Quantity A > Quantity B.",
          },
          {
            id: "m1-q1-10",
            type: "single",
            prompt: "If the ratio of boys to girls in a class is 3:5 and the class has 40 students, how many are boys?",
            choices: ["12", "15", "16", "18", "24"],
            correct: ["15"],
            explanation: "Boys : total = 3 : 8. Boys = (3/8) · 40 = 15.",
          },
          {
            id: "m1-q1-11",
            type: "single",
            prompt: "If a circle is inscribed in a square of side 10, what is the area of the region inside the square but outside the circle?",
            choices: ["100 − 25π", "100 − 50π", "100 − 100π", "25 − 25π", "50 − 25π"],
            correct: ["100 − 25π"],
            explanation: "Square area = 100. Inscribed circle radius = 5, area = 25π. Difference = 100 − 25π.",
          },
          {
            id: "m1-q1-12",
            type: "single",
            prompt:
              "A car travels 120 km at 60 km/h and then 180 km at 90 km/h. What is its average speed for the whole trip?",
            choices: ["72 km/h", "75 km/h", "78 km/h", "80 km/h", "85 km/h"],
            correct: ["75 km/h"],
            explanation: "Total distance 300 km; total time 2 + 2 = 4 h; average speed 75 km/h.",
          },
        ],
      },
      {
        id: "m1-v2",
        label: "Verbal Reasoning — Section 2",
        kind: "verbal",
        durationSeconds: 26 * 60,
        questions: [
          {
            id: "m1-v2-1",
            type: "text-completion",
            prompt:
              "The director's reputation for ______ was hard-earned: editors who had worked with him on three or four projects could still not predict, within an order of magnitude, how long the final cut would run.",
            choices: ["unpredictability", "consistency", "frugality", "punctuality", "punctiliousness"],
            correct: ["unpredictability"],
            explanation:
              "If experienced editors cannot predict the result, the director is unpredictable.",
          },
          {
            id: "m1-v2-2",
            type: "single",
            prompt:
              "The passage's central argument is best summarized as",
            passage:
              "Most accounts of the city's decline treat its loss of population as cause, and its economic stagnation as effect. The records of the period suggest something closer to the reverse: families left only after a decade in which wages had visibly failed to keep pace with prices in neighboring towns. The shrinking workforce did not produce the economic difficulty; it ratified a difficulty already underway.",
            choices: [
              "population loss followed, rather than caused, the city's economic stagnation",
              "the city's stagnation has been overstated by historians",
              "wage growth in neighboring towns was driven by demographic factors",
              "families leave cities only when wages have fallen in absolute terms",
              "economic data from the period are unreliable",
            ],
            correct: ["population loss followed, rather than caused, the city's economic stagnation"],
            explanation:
              "The author argues that population loss 'ratified' rather than 'produced' the economic trouble — i.e., it followed rather than caused it.",
          },
          {
            id: "m1-v2-3",
            type: "text-completion",
            prompt:
              "The senator's record reveals a politician less ______ than her detractors allow: she has reversed her position on at least three major issues when confronted with what she described as overwhelming evidence.",
            choices: ["dogmatic", "pragmatic", "deliberative", "compromising", "candid"],
            correct: ["dogmatic"],
            explanation:
              "If she reverses positions when faced with evidence, she is not dogmatic.",
          },
          {
            id: "m1-v2-4",
            type: "text-completion",
            prompt:
              "Anyone hoping for (i) ______ in the new biography will be disappointed: its author, evidently determined to (ii) ______ his subject, suppresses every detail that might complicate the official portrait.",
            choices: [
              "(i) revelation · (ii) sanitize",
              "(i) revelation · (ii) deride",
              "(i) hagiography · (ii) sanitize",
              "(i) candor · (ii) expose",
              "(i) brevity · (ii) lionize",
            ],
            correct: ["(i) revelation · (ii) sanitize"],
            explanation:
              "Reader wants disclosure (revelation); author suppresses complicating detail (sanitize).",
          },
          {
            id: "m1-v2-5",
            type: "single",
            prompt:
              "In context, the author's reference to 'the comforts of orthodoxy' most directly serves to",
            passage:
              "It is the rare scholar who is willing to give up the comforts of orthodoxy. Heretical findings demand defense at every conference, harassment by anonymous reviewers, and an institutional patience that few departments have ever cultivated. That so many findings of the past decade have nonetheless been overturned should be read less as a triumph of the heretic than as a measure of how indefensible the consensus had become.",
            choices: [
              "explain why dissent is structurally discouraged within academia",
              "praise the courage of mainstream researchers",
              "concede that consensus views are usually correct",
              "argue that institutional reform is impossible",
              "defend the use of anonymous peer review",
            ],
            correct: ["explain why dissent is structurally discouraged within academia"],
            explanation:
              "The phrase introduces a catalogue of costs that dissenters bear — i.e., it explains why dissent is structurally discouraged.",
          },
          {
            id: "m1-v2-6",
            type: "multi",
            prompt:
              "Select all that apply. The passage suggests which of the following about the recent reversals of consensus?",
            passage:
              "It is the rare scholar who is willing to give up the comforts of orthodoxy. Heretical findings demand defense at every conference, harassment by anonymous reviewers, and an institutional patience that few departments have ever cultivated. That so many findings of the past decade have nonetheless been overturned should be read less as a triumph of the heretic than as a measure of how indefensible the consensus had become.",
            choices: [
              "They occurred despite, rather than because of, institutional incentives.",
              "They indicate that the prior consensus had become difficult to defend.",
              "They were produced primarily by celebrated outsiders.",
              "They reflect chiefly the personal courage of dissenters.",
            ],
            correct: [
              "They occurred despite, rather than because of, institutional incentives.",
              "They indicate that the prior consensus had become difficult to defend.",
            ],
            explanation:
              "The author frames reversals as happening despite institutional pressures and as indicative of an indefensible prior consensus; he explicitly rejects framing them as a triumph of personal heroism.",
          },
          {
            id: "m1-v2-7",
            type: "text-completion",
            prompt:
              "The judge was known for opinions that were (i) ______ in their reasoning yet (ii) ______ in their phrasing — every legal step exhaustively defended, yet rendered in prose so spare a layperson could follow it.",
            choices: [
              "(i) labyrinthine · (ii) limpid",
              "(i) labyrinthine · (ii) ornate",
              "(i) cursory · (ii) limpid",
              "(i) cursory · (ii) ornate",
              "(i) tendentious · (ii) opaque",
            ],
            correct: ["(i) labyrinthine · (ii) limpid"],
            explanation:
              "'Exhaustively defended' = labyrinthine; 'a layperson could follow it' = limpid (clear).",
          },
          {
            id: "m1-v2-8",
            type: "single",
            prompt:
              "Which choice most nearly preserves the meaning of the sentence: 'For all its surface placidity, the negotiation was in fact contentious to the point of acrimony.'",
            choices: [
              "Despite appearing calm, the negotiation was bitterly disputed.",
              "The negotiation was, as it seemed, peaceful throughout.",
              "Surface tensions in the negotiation concealed underlying agreement.",
              "The negotiators were universally polite.",
              "The negotiation ended in friendly resolution.",
            ],
            correct: ["Despite appearing calm, the negotiation was bitterly disputed."],
            explanation:
              "'For all its surface placidity' = despite appearing calm; 'contentious to the point of acrimony' = bitterly disputed.",
          },
          {
            id: "m1-v2-9",
            type: "text-completion",
            prompt:
              "The reviewer praised the film for refusing the easy ______ that has marred lesser entries in the genre — the unearned redemption, the tidy reconciliation, the villain conveniently dispatched in the final frame.",
            choices: ["resolution", "ambiguity", "violence", "introspection", "spectacle"],
            correct: ["resolution"],
            explanation:
              "The list — unearned redemption, tidy reconciliation, villain dispatched — names varieties of easy resolution.",
          },
          {
            id: "m1-v2-10",
            type: "single",
            prompt:
              "The author's principal claim in the passage is that",
            passage:
              "We tend to credit institutions with the qualities of their founders and to blame them on their current officeholders. The pattern of attribution flatters both: founders are spared accountability for the slow accumulation of failures, and incumbents are denied credit for whatever durable accomplishments survived a difficult tenure. Whichever side of the ledger one starts from, the picture distorts.",
            choices: [
              "praise and blame for institutions are systematically misallocated across time",
              "founders deserve more credit than they typically receive",
              "current officeholders bear the primary responsibility for institutional decline",
              "the concept of an institution is a useful but ultimately misleading abstraction",
              "historians have done a poor job describing institutional change",
            ],
            correct: ["praise and blame for institutions are systematically misallocated across time"],
            explanation:
              "The author argues that we credit founders and blame incumbents — i.e., we misallocate praise and blame across time.",
          },
          {
            id: "m1-v2-11",
            type: "text-completion",
            prompt:
              "She has earned a reputation for ______ analysis: arguments that, however unwelcome their conclusions, no opponent has been able to dismiss without first acknowledging their internal rigor.",
            choices: ["rigorous", "tendentious", "intuitive", "perfunctory", "speculative"],
            correct: ["rigorous"],
            explanation:
              "The relative clause defines the kind of analysis: even hostile readers concede its rigor — so 'rigorous.'",
          },
          {
            id: "m1-v2-12",
            type: "single",
            prompt:
              "Which choice best completes the parallelism: 'Where the earlier draft was diffuse and digressive, the published version is ______.'",
            choices: ["focused and disciplined", "lyrical and meandering", "exhaustive and ornate", "tentative and apologetic", "anecdotal"],
            correct: ["focused and disciplined"],
            explanation:
              "The pair of opposites mirrors 'diffuse and digressive' — the best match is 'focused and disciplined.'",
          },
          {
            id: "m1-v2-13",
            type: "text-completion",
            prompt:
              "What had at first appeared an impulsive decision turned out, on reflection, to be the product of long ______: years of preparation that the press had simply failed to notice.",
            choices: ["deliberation", "negligence", "vacillation", "improvisation", "extemporization"],
            correct: ["deliberation"],
            explanation:
              "'Years of preparation' = deliberation; the sentence overturns the appearance of impulse.",
          },
          {
            id: "m1-v2-14",
            type: "multi",
            prompt:
              "Select all that apply. The author of the passage would most likely agree with which of the following?",
            passage:
              "The biographer's task is not to settle every dispute about her subject but to clarify what is genuinely at stake in those disputes. A biography that pretends to render its subject finally legible has not, in my experience, told the truth; it has merely persuaded itself that the truth is more tractable than it ever is.",
            choices: [
              "Biographies that resolve all interpretive controversies should be regarded with suspicion.",
              "The truth about a life is rarely as tractable as some biographies suggest.",
              "Biographers should refrain from making any interpretive claims.",
              "Disputes about a biographical subject usually involve genuine stakes.",
            ],
            correct: [
              "Biographies that resolve all interpretive controversies should be regarded with suspicion.",
              "The truth about a life is rarely as tractable as some biographies suggest.",
              "Disputes about a biographical subject usually involve genuine stakes.",
            ],
            explanation:
              "All three are explicit or directly entailed. The author calls fully resolved biographies untruthful (suspicion), says truth is not tractable, and frames disputes as having genuine stakes; he does not say biographers should make no interpretive claims.",
          },
          {
            id: "m1-v2-15",
            type: "text-completion",
            prompt:
              "Visitors expecting ______ were unsettled by the museum's choice to leave damaged works visibly unrestored, the conservators' interventions deliberately confined to what was strictly necessary for preservation.",
            choices: ["seamlessness", "austerity", "ambiguity", "contemporaneity", "scarcity"],
            correct: ["seamlessness"],
            explanation:
              "Visitors are disappointed because the damage shows; they expected works that looked seamless.",
          },
        ],
      },
      {
        id: "m1-q2",
        label: "Quantitative Reasoning — Section 2",
        kind: "quant",
        durationSeconds: 26 * 60,
        questions: [
          {
            id: "m1-q2-1",
            type: "single",
            prompt: "If 5(x − 2) = 3x + 4, what is x?",
            choices: ["3", "5", "7", "9", "11"],
            correct: ["7"],
            explanation: "5x − 10 = 3x + 4 → 2x = 14 → x = 7.",
          },
          {
            id: "m1-q2-2",
            type: "single",
            prompt: "A jar contains chips numbered 1 through 20. If one is drawn at random, what is the probability that its number is a multiple of 3 or 5?",
            choices: ["7/20", "9/20", "1/2", "11/20", "3/5"],
            correct: ["9/20"],
            explanation:
              "Multiples of 3: 3,6,9,12,15,18 (6). Multiples of 5: 5,10,15,20 (4). 15 is counted twice. Total = 6 + 4 − 1 = 9. P = 9/20.",
          },
          {
            id: "m1-q2-3",
            type: "numeric",
            prompt: "If x + 1/x = 4, what is x² + 1/x²?",
            correct: ["14"],
            explanation: "Square both sides: (x + 1/x)² = x² + 2 + 1/x² = 16. So x² + 1/x² = 14.",
          },
          {
            id: "m1-q2-4",
            type: "single",
            prompt: "The line y = 2x + 3 is reflected across the x-axis. What is the equation of the reflected line?",
            choices: ["y = 2x − 3", "y = −2x + 3", "y = −2x − 3", "y = (1/2)x + 3", "y = 2x + 3"],
            correct: ["y = −2x − 3"],
            explanation: "Reflection across x-axis negates y: −y = 2x + 3 → y = −2x − 3.",
          },
          {
            id: "m1-q2-5",
            type: "single",
            prompt:
              "If a fair six-sided die is rolled three times, what is the probability of obtaining at least one 6?",
            choices: ["1/6", "1/3", "91/216", "1/2", "125/216"],
            correct: ["91/216"],
            explanation:
              "P(no 6 in three rolls) = (5/6)³ = 125/216. P(at least one 6) = 1 − 125/216 = 91/216.",
          },
          {
            id: "m1-q2-6",
            type: "single",
            prompt: "What is the sum of the first 30 positive integers?",
            choices: ["435", "455", "465", "475", "495"],
            correct: ["465"],
            explanation: "Sum = n(n+1)/2 = 30 · 31 / 2 = 465.",
          },
          {
            id: "m1-q2-7",
            type: "numeric",
            prompt:
              "How many integers from 1 to 200 (inclusive) are divisible by neither 4 nor 6?",
            correct: ["133"],
            explanation:
              "Divisible by 4: ⌊200/4⌋ = 50. Divisible by 6: ⌊200/6⌋ = 33. Divisible by 12 (lcm): ⌊200/12⌋ = 16. By 4 or 6: 50 + 33 − 16 = 67. Neither: 200 − 67 = 133.",
          },
          {
            id: "m1-q2-8",
            type: "single",
            prompt: "If 2^a · 4^b = 64 and a + b = 4, what is a?",
            choices: ["0", "1", "2", "3", "4"],
            correct: ["2"],
            explanation:
              "2^a · 4^b = 2^(a + 2b) = 64 = 2^6. So a + 2b = 6. With a + b = 4, subtract: b = 2, a = 2.",
          },
          {
            id: "m1-q2-9",
            type: "single",
            prompt:
              "The interior angles of a polygon sum to 1260°. How many sides does the polygon have?",
            choices: ["7", "8", "9", "10", "11"],
            correct: ["9"],
            explanation: "Sum = (n − 2) · 180. 1260/180 + 2 = 7 + 2 = 9.",
          },
          {
            id: "m1-q2-10",
            type: "single",
            prompt:
              "A solution of 8 liters of 25% alcohol is mixed with 12 liters of 50% alcohol. What is the concentration of the resulting mixture?",
            choices: ["35%", "37.5%", "40%", "42.5%", "45%"],
            correct: ["40%"],
            explanation:
              "Alcohol: 8(0.25) + 12(0.50) = 2 + 6 = 8 L. Total volume = 20 L. Concentration = 8/20 = 40%.",
          },
          {
            id: "m1-q2-11",
            type: "single",
            prompt:
              "If the side of a square is increased by 50%, by what percentage does its area increase?",
            choices: ["50%", "100%", "125%", "150%", "225%"],
            correct: ["125%"],
            explanation:
              "New side = 1.5s. New area = 2.25s². Increase = 1.25s², which is 125%.",
          },
          {
            id: "m1-q2-12",
            type: "single",
            prompt:
              "If 0 < x < 1, which of the following is greatest? I. x  II. x²  III. √x",
            choices: ["I", "II", "III", "I and III", "II and III"],
            correct: ["III"],
            explanation:
              "For 0 < x < 1: x² < x < √x. So III is greatest.",
          },
          {
            id: "m1-q2-13",
            type: "numeric",
            prompt:
              "A 5-by-12 rectangle has the same area as a square. What is the perimeter of the square?",
            correct: ["4√60"],
            explanation:
              "Area = 60 = s². s = √60. Perimeter = 4√60 ≈ 30.98. (Acceptable equivalents: 4·√60 or 8√15.)",
          },
          {
            id: "m1-q2-14",
            type: "single",
            prompt:
              "A car depreciates by 20% in the first year and by 15% in each subsequent year. What is its value after three years, as a fraction of its original price?",
            choices: ["0.510", "0.544", "0.578", "0.612", "0.680"],
            correct: ["0.578"],
            explanation:
              "Value factor: 0.80 · 0.85 · 0.85 = 0.578.",
          },
          {
            id: "m1-q2-15",
            type: "single",
            prompt:
              "Quantity A: the number of distinct prime factors of 360. Quantity B: 3.",
            choices: [
              "Quantity A is greater",
              "Quantity B is greater",
              "The two quantities are equal",
              "Cannot be determined",
            ],
            correct: ["The two quantities are equal"],
            explanation: "360 = 2³ · 3² · 5. Three distinct primes. Equal.",
          },
        ],
      },
    ],
  },
];
