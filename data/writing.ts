import type { WritingPrompt } from "@/lib/types";

const D_STATEMENT =
  "Write a response in which you discuss the extent to which you agree or disagree with the statement and explain your reasoning for the position you take. In developing and supporting your position, you should consider ways in which the statement might or might not hold true and explain how these considerations shape your position.";

const D_RECOMMENDATION =
  "Write a response in which you discuss the extent to which you agree or disagree with the recommendation and explain your reasoning for the position you take. In developing and supporting your position, describe specific circumstances in which adopting the recommendation would or would not be advantageous and explain how these examples shape your position.";

const D_TWO_VIEWS =
  "Write a response in which you discuss which view more closely aligns with your own position and explain your reasoning for the position you take. In developing and supporting your position, you should address both of the views presented.";

const D_CLAIM =
  "Write a response in which you discuss the extent to which you agree or disagree with the claim. In developing and supporting your position, be sure to address the most compelling reasons and/or examples that could be used to challenge your position.";

const D_CLAIM_REASON =
  "Write a response in which you discuss the extent to which you agree or disagree with the claim and the reason on which that claim is based.";

const D_POLICY =
  "Write a response in which you discuss your views on the policy and explain your reasoning for the position you take. In developing and supporting your position, you should consider the possible consequences of implementing the policy and explain how these consequences shape your position.";


export const WRITING_PROMPTS: WritingPrompt[] = [
  {
    id: "w-issue-001",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Governments should place few, if any, restrictions on scientific research and development.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a clear, qualified position well suited to a recommendation prompt, drawing a sharp line between the circumstances where freedom serves science and the few where restriction is essential; thoughtful examples and fluent prose.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Almost every advance that defines modern life — the vaccines that lengthened our lifespans, the transistors that power our devices, the chemistry behind abundant food — grew out of research conducted by people free to follow their curiosity wherever it led.", fn: "Hook (the fruits of free inquiry)" },
            { text: "From that history it is easy to draw a sweeping lesson: that governments should place few, if any, restrictions on scientific research and development, trusting that freedom alone will deliver progress.", fn: "Context (the recommendation)" },
            { text: "While I agree that the default should be freedom, I cannot accept the recommendation as an absolute, because the wisdom of restriction depends entirely on circumstances, and in a few of them restraint is not an obstacle to progress but a precondition for it.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — When freedom serves science",
          sentences: [
            { text: "In the overwhelming majority of fields, light regulation is plainly the wiser course.", fn: "Topic sentence", vocab: [{ term: "regulation", gloss: "監管；法規" }] },
            { text: "Basic inquiry into mathematics, astronomy, or cell biology threatens no one, and its eventual benefits are usually impossible to foresee at the moment the work begins.", fn: "Explanation" },
            { text: "When Alexander Fleming left a dish of bacteria unattended and noticed a mould killing the colonies around it, no committee had authorized a search for antibiotics, yet that accident of free inquiry has since saved tens of millions of lives.", fn: "Concrete example" },
            { text: "Heavy-handed rules, by contrast, would slow such discoveries, drive talented researchers toward more permissive countries, and quietly deprive society of breakthroughs no planner could ever have requested in advance.", fn: "Develop the cost of over-regulation", moves: ["by contrast"] },
            { text: "Where the risks are negligible and the rewards unpredictable, the recommendation is exactly right, and the burden of proof should fall on anyone who wishes to interfere.", fn: "Sub-conclusion", vocab: [{ term: "unpredictable", gloss: "不可預測的" }] },
          ],
        },
        {
          role: "Body — When restriction is essential",
          sentences: [
            { text: "However, a handful of circumstances turn that logic on its head.", fn: "Pivot to the exception", moves: ["However"] },
            { text: "Research on lethal pathogens, on nuclear and biological weapons, or on technologies that could be turned against whole populations carries dangers that spill far beyond the laboratory walls.", fn: "Example", vocab: [{ term: "pathogens", gloss: "病原體" }] },
            { text: "A single engineered virus that escaped containment could kill more people than any experiment could realistically hope to save, and once such knowledge exists it can never be recalled.", fn: "Explain the stakes" },
            { text: "In these cases the absence of restriction is not freedom at all but recklessness, and a responsible government has not merely the right but the duty to impose firm limits.", fn: "Name the principle", vocab: [{ term: "recklessness", gloss: "魯莽；輕率" }] },
            { text: "The very hands-off policy that nurtures pure mathematics would be indefensible if applied, without modification, to the design of pathogens or the building of weapons.", fn: "Drive the contrast home" },
          ],
        },
        {
          role: "Body — The ethical circumstance",
          sentences: [
            { text: "A second category of exception is ethical rather than physical.", fn: "Topic sentence" },
            { text: "Experiments that treat human beings as mere material — testing drugs on people without their consent, or gathering data through deception and harm — violate principles that no promised benefit can justify overriding.", fn: "Example", vocab: [{ term: "consent", gloss: "同意；知情同意" }] },
            { text: "The twentieth century offers a grim catalogue of what unrestrained research becomes when ambition is severed from conscience, from coerced medical trials to studies that knowingly left patients untreated.", fn: "Support with history" },
            { text: "Restrictions of this kind do not impede science so much as protect the very people in whose name science is supposedly conducted, and they preserve the public trust without which research cannot long survive.", fn: "Reframe limits as protection" },
            { text: "A discovery purchased through cruelty corrupts the very enterprise it claims to advance.", fn: "Aphoristic close" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the recommendation captures a genuine and important truth, but states it far too absolutely.", fn: "Restate the position", moves: ["In conclusion"] },
            { text: "Governments should grant research broad freedom wherever the dangers are small and the payoffs uncertain, while reserving strict limits for the rare cases in which safety or basic ethics is at stake.", fn: "Synthesis" },
            { text: "The mark of a mature science policy is not the number of restrictions it imposes or removes, but its skill in telling the two kinds of circumstance apart.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-002",
    type: "issue",
    category: "Education",
    prompt:
      "The best way to teach is to praise positive actions and ignore negative ones.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): engages both halves of the statement, grants the power of praise, and then shows persuasively why ignoring negative actions fails students; concrete classroom examples and a balanced, well-controlled argument.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Anyone who has watched a hesitant child light up at a few words of encouragement understands the extraordinary power of praise.", fn: "Hook (the power of praise)" },
            { text: "Some educators distil that observation into a rule for all teaching: that the surest method is to praise positive actions and to ignore negative ones entirely, on the theory that attention rewards whatever it touches.", fn: "Context (the statement)" },
            { text: "Praise should indeed sit at the heart of good teaching, but the instruction to ignore negative actions altogether goes too far, since students who are never corrected are denied the very feedback that improvement requires.", fn: "Thesis statement (partial agreement)", vocab: [{ term: "feedback", gloss: "回饋；反饋" }] },
          ],
        },
        {
          role: "Body — Where the statement holds true",
          sentences: [
            { text: "It is true that the first half of the claim rests on solid ground.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "A child repeatedly scolded for clumsy handwriting often concludes, not unreasonably, that writing is simply something she cannot do, and gives up before she has fairly begun.", fn: "Example" },
            { text: "Praising what she manages well, by contrast, supplies the confidence and motivation on which any further effort depends, and decades of research suggest that encouragement outperforms the fear of punishment over the long run.", fn: "Explanation", vocab: [{ term: "motivation", gloss: "動機；動力" }], moves: ["by contrast"] },
            { text: "Even adults respond this way, working harder for a manager who notices their successes than for one who points only at their failures.", fn: "Broaden beyond children" },
            { text: "To this extent, a teacher who leads with praise rather than criticism is usually closer to the truth than one who does the reverse.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Where it fails",
          sentences: [
            { text: "However, to ignore negative actions completely is to mistake kindness for neglect.", fn: "Pivot", moves: ["However"] },
            { text: "A student who keeps solving the same equation the same wrong way will go on doing so indefinitely unless someone interrupts the pattern and shows a better path.", fn: "Example" },
            { text: "Silence in the face of error is not generosity; it abandons the learner to rehearse a mistake until it sets, like cement, into a permanent habit.", fn: "Explanation" },
            { text: "Worse still, to overlook genuinely harmful behavior — cheating, dishonesty, cruelty toward classmates — teaches the entire room that such conduct carries no consequences, a lesson far more damaging than any spelling error.", fn: "Strengthen the objection", vocab: [{ term: "consequences", gloss: "後果" }], moves: ["Worse still"] },
            { text: "Students are remarkably quick to read what a teacher chooses to ignore, and they adjust their own behavior to match that silent signal.", fn: "Develop the point" },
            { text: "A teacher who never corrects has not spared her students; she has quietly failed them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The real lesson",
          sentences: [
            { text: "The resolution lies in recognizing that the real question is not whether to address negative actions but how.", fn: "Topic sentence" },
            { text: "Correction offered gently, as an invitation to solve a problem rather than a verdict on the student's worth, repairs the error without wounding the person.", fn: "Example" },
            { text: "Understood this way, criticism becomes an extension of encouragement rather than its enemy, and the two work as partners instead of rivals.", fn: "Reframe" },
            { text: "Tone, timing, and trust are what separate the correction that motivates from the criticism that merely stings, and a skilled teacher attends to all three.", fn: "Elaboration" },
            { text: "The aim is never to humiliate but to inform, so that the student leaves the exchange knowing exactly how to do better next time.", fn: "Clarify the goal" },
            { text: "What students need is not the absence of correction but its presence in a constructive, humane form.", fn: "Sub-conclusion", vocab: [{ term: "constructive", gloss: "建設性的" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement is half right and half dangerous.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Praise should be the foundation on which a classroom is built, but ignoring negative actions would strip students of the guidance that turns effort into genuine progress.", fn: "Synthesis", vocab: [{ term: "guidance", gloss: "引導；指導" }] },
            { text: "The finest teachers do not choose between encouragement and correction; they offer both, praising generously and correcting with care.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-003",
    type: "issue",
    category: "Education",
    prompt:
      "Governments should offer college and university education free of charge to all students.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that separates the circumstances in which free education is plainly beneficial from those in which a blanket promise is wasteful; relevant examples and a clear, qualified stance.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Few proposals wear their generosity as openly as the promise of a university education offered free of charge to every student who wants one.", fn: "Hook" },
            { text: "Its champions argue that such a policy would throw open the doors of opportunity, dissolve the advantage of inherited wealth, and build a society both more skilled and more just.", fn: "Context (the case for the recommendation)" },
            { text: "I share the impulse behind the recommendation and believe governments should heavily subsidize higher education, yet offering it free to all students, in every circumstance, would be neither fair nor financially sound.", fn: "Thesis statement (qualified position)", vocab: [{ term: "subsidize", gloss: "補貼；資助" }] },
          ],
        },
        {
          role: "Body — Where free education helps",
          sentences: [
            { text: "First, in a great many circumstances, removing the cost of education is unambiguously beneficial.", fn: "Topic sentence", moves: ["First"] },
            { text: "A gifted student born into a poor family, who could flourish at university but cannot begin to afford the tuition, is a loss not only to herself but to a society that will never receive the contributions she might have made.", fn: "Example", vocab: [{ term: "tuition", gloss: "學費" }] },
            { text: "Lifting that financial barrier converts wasted potential into doctors, engineers, and teachers, which is among the most productive investments a state can make.", fn: "Explanation", vocab: [{ term: "barrier", gloss: "障礙；阻礙" }] },
            { text: "The nations of northern Europe that fund higher education generously have reaped exactly this reward in the form of highly skilled and adaptable workforces.", fn: "Support" },
            { text: "Talent, after all, is distributed fairly evenly between rich and poor families, even though the opportunity to develop it is not.", fn: "State the fairness rationale" },
            { text: "Where money alone stands between a capable student and a degree, the case for free education is overwhelming.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Where 'free for all' fails",
          sentences: [
            { text: "However, the moment the policy is extended to all students regardless of need or ability, its logic begins to fray.", fn: "Pivot", moves: ["However"] },
            { text: "Wealthy families who could comfortably pay full fees would receive an expensive subsidy they do not require, financed by taxes that might otherwise have rescued poorer students or repaired crumbling schools.", fn: "Example" },
            { text: "Making education entirely free can also draw in students with little genuine interest in study, swelling enrolment, straining resources, and eroding the standards that give a degree its meaning.", fn: "Explanation", vocab: [{ term: "resources", gloss: "資源" }] },
            { text: "Public money is finite, and every dollar handed to a student who could easily have paid is a dollar withheld from one who genuinely could not.", fn: "Opportunity cost" },
            { text: "A policy that ignores circumstances ends up treating the desperate and the comfortable as though their situations were identical, which is the very opposite of fairness.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Who pays",
          sentences: [
            { text: "Finally, there remains the unavoidable question of who actually pays.", fn: "Topic sentence", moves: ["Finally"] },
            { text: "Free tuition is never truly free; it is financed from a public purse that must also fund hospitals, infrastructure, and the primary schools on which all later learning depends.", fn: "Example", vocab: [{ term: "infrastructure", gloss: "基礎建設" }] },
            { text: "Whether the trade-off is worth making depends entirely on a country's wealth and on the priorities its citizens are willing to defend.", fn: "Explanation" },
            { text: "Citizens who applaud free college in the abstract may feel very differently once the cost arrives as higher taxes or longer hospital queues.", fn: "Political reality" },
            { text: "In a poorer nation, a grand promise of free university for everyone could quietly translate into overcrowded classrooms and underpaid teachers for the youngest children.", fn: "Drive the point home" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the recommendation is admirable in spirit but too absolute in form.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Governments should make higher education genuinely affordable and remove cost as an obstacle for everyone who needs help, but a blanket promise of free tuition for all, regardless of circumstance, is a blunt instrument poorly suited to a complex problem.", fn: "Synthesis" },
            { text: "Affordability for all who need it, rather than free education for all who want it, is the wiser and more sustainable goal.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-004",
    type: "issue",
    category: "The Individual",
    prompt:
      "The luxuries and conveniences of contemporary life prevent people from developing into truly strong and independent individuals.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): reframes the statement with real subtlety, conceding that comfort can breed dependence while arguing that convenience relocates rather than removes the challenges that build character; fluent and well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is one of the oldest complaints in human history that comfort breeds weakness, and every generation seems convinced that its conveniences are quietly softening the next.", fn: "Hook" },
            { text: "In its modern form the worry holds that dishwashers, smartphones, and same-day delivery have stripped away the daily hardships that once forged strong, self-reliant individuals, leaving us pampered and dependent.", fn: "Context (the statement's logic)", vocab: [{ term: "self-reliant", gloss: "自立的；自給自足的" }] },
            { text: "There is a grain of truth in this anxiety, but I largely disagree, because convenience does not abolish the challenges that build character so much as relocate them, and the work of becoming strong has simply moved to new ground.", fn: "Thesis statement (reframe)" },
          ],
        },
        {
          role: "Body — Where the statement holds true",
          sentences: [
            { text: "It would be foolish to pretend that no conveniences encourage dependence.", fn: "Concession (topic sentence)", moves: ["It would be foolish"] },
            { text: "Someone who has never cooked a meal, found a route without a screen, or repaired anything with their own hands has indeed surrendered skills their grandparents would have considered basic.", fn: "Example" },
            { text: "When a device dissolves every minor difficulty the instant it appears, the patience and resourcefulness that grow only out of struggle have little occasion to develop.", fn: "Explanation", vocab: [{ term: "resourcefulness", gloss: "機智；隨機應變的能力" }] },
            { text: "A generation accustomed to instant answers may find ordinary patience, and the slow effort real mastery demands, surprisingly difficult to summon.", fn: "Develop the dependence point" },
            { text: "To that limited extent, the statement identifies something real.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Strength relocated, not removed",
          sentences: [
            { text: "However, strength and independence have never sprung from hardship alone, and to assume they do is to romanticize mere difficulty.", fn: "Pivot", moves: ["However"] },
            { text: "The same conveniences that the statement condemns also liberate people from the exhausting drudgery — hauling water, scrubbing laundry by hand, walking miles for supplies — that once consumed entire lives.", fn: "Example", vocab: [{ term: "drudgery", gloss: "苦差事；單調的勞動" }] },
            { text: "The hours and energy thus reclaimed can be poured into education, creativity, and ambition, so that the farmer's daughter who once spent her dawn fetching water may now spend it studying medicine or building a business.", fn: "Explanation" },
            { text: "Those pursuits demand discipline and resilience every bit as real as chopping wood ever did; the challenge has not vanished, it has merely changed its address.", fn: "Elaboration", vocab: [{ term: "resilience", gloss: "韌性；復原力" }] },
            { text: "A young person freed from chores is not automatically idle; many pour that reclaimed time into sport, study, or the painstaking practice a craft requires.", fn: "Reinforce reallocation" },
            { text: "What looks from a distance like softness is often simply strength aimed at an unfamiliar target.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — New tests of character",
          sentences: [
            { text: "Modern life, moreover, has invented entirely new tests of character that earlier generations never had to pass.", fn: "Topic sentence", moves: ["moreover"] },
            { text: "To resist the bottomless distractions of a phone, to think for oneself amid a deafening flood of online opinion, and to stay disciplined when no overseer is watching all require a formidable inner strength.", fn: "Example" },
            { text: "In a world of constant temptation, self-control may in fact be harder to summon than it ever was in a world of simple scarcity.", fn: "Turn the claim around" },
            { text: "Choosing to finish a demanding book while an ocean of entertainment waits in your pocket is a discipline our ancestors were simply never asked to exercise.", fn: "Modern discipline example" },
            { text: "These struggles are not the disappearance of difficulty but its reappearance in a subtler and arguably more demanding form.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement mistakes a change in the location of our challenges for their outright removal.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Luxuries can certainly encourage laziness in those who surrender to them, but they also free us to cultivate strengths our ancestors had no time even to attempt.", fn: "Synthesis" },
            { text: "Whether convenience weakens us or liberates us depends not on the comforts themselves but on what we choose to do with the freedom they hand us.", fn: "Final judgment", vocab: [{ term: "liberates", gloss: "解放；使自由" }] },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-005",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "In any field of inquiry, the beginner is more likely than the expert to make important contributions.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants the newcomer's occasional advantage, then argues clearly that deep expertise produces most contributions and that the statement mistakes the memorable exception for the rule; logically sound and well developed.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "There is a romance to the idea of the gifted amateur — the outsider who, precisely because no one has told him what is impossible, stumbles upon what the specialists have missed.", fn: "Hook" },
            { text: "The statement elevates that romance into a general law, claiming that in any field the beginner is more likely than the expert to make important contributions.", fn: "Context (the statement)" },
            { text: "I disagree, for although the newcomer's fresh perspective can occasionally prove decisive, the overwhelming majority of important contributions come from experts whose deep knowledge is precisely what makes meaningful innovation possible.", fn: "Thesis statement (clear position)", vocab: [{ term: "perspective", gloss: "觀點；視角" }, { term: "innovation", gloss: "創新" }] },
          ],
        },
        {
          role: "Body — The beginner's real but limited value",
          sentences: [
            { text: "It is true that inexperience carries certain advantages.", fn: "Concession (topic sentence)", vocab: [{ term: "inexperience", gloss: "缺乏經驗" }], moves: ["It is true that"] },
            { text: "A beginner is not yet imprisoned by the habits of thought that long training quietly instills, and may therefore ask the naive question that everyone else has stopped thinking to ask.", fn: "Example" },
            { text: "Now and then this outsider's view pays off handsomely, especially when a method from one discipline is carried, by someone ignorant of the usual boundaries, into another where no one had thought to try it.", fn: "Explanation" },
            { text: "Disciplines do occasionally calcify, repeating inherited assumptions until a stranger, unaware that a question is supposedly forbidden, simply asks it anyway.", fn: "Develop the value of fresh eyes" },
            { text: "So the statement is not absurd; fresh eyes are genuinely valuable, and a field that silences them grows stale.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Why experts make most contributions",
          sentences: [
            { text: "However, valuable as fresh eyes are, important contributions almost always rest on the deep understanding that only experience can provide.", fn: "Pivot", moves: ["However"] },
            { text: "To improve meaningfully on what is known, one must first grasp it thoroughly — its established results, its discredited dead ends, and the precise questions that remain stubbornly open.", fn: "Explanation", vocab: [{ term: "thoroughly", gloss: "徹底地" }] },
            { text: "A novice in physics may overflow with bold ideas, yet without years of disciplined study he cannot tell the genuinely new from the long-since-refuted, and most of his inspirations will prove to be old errors in fresh clothing.", fn: "Example" },
            { text: "The landmark achievements of any field — a cure, a theorem, a transformative technology — are built upon a hard-won mastery that beginners, by definition, have not yet acquired.", fn: "Elaboration", vocab: [{ term: "mastery", gloss: "精通；嫻熟" }] },
            { text: "Expertise is not a warehouse of facts but a trained instinct for which questions are worth pursuing and which roads lead nowhere, and that instinct takes years to build.", fn: "Deepen what expertise is" },
            { text: "The fresh eye sees the field differently; the trained eye sees far more of it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Exception mistaken for rule",
          sentences: [
            { text: "Moreover, the statement commits a familiar error, mistaking the memorable exception for the ordinary rule.", fn: "Topic sentence", moves: ["Moreover"] },
            { text: "We remember the rare amateur who overturned a discipline precisely because such upheavals are so unusual that they pass into legend.", fn: "Explanation" },
            { text: "Behind every such story stand thousands of expert specialists who, without fanfare, extended human knowledge through patient and informed work.", fn: "Counter the myth" },
            { text: "Knowing in advance what has already failed spares the seasoned researcher from squandering a decade rediscovering somebody else's dead end.", fn: "Practical value of experience" },
            { text: "To count only the dramatic exceptions is to draw a wildly distorted map of where progress actually originates.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the beginner's role is real but distinctly limited.", fn: "Restate", moves: ["In conclusion"] },
            { text: "A fresh perspective can occasionally ignite something important, but it is the steady, demanding labor of experts that produces the vast majority of genuine contributions.", fn: "Synthesis" },
            { text: "A field flourishes not by ignoring experience in favor of novelty, but when expert knowledge keeps itself open to the occasional unschooled question.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-006",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "The surest indicator of a great nation is represented not by the achievements of its rulers, artists, or scientists, but by the general welfare of its people.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): agrees with a clear rationale, shows why broad welfare is a more demanding and reliable indicator than elite achievement, then qualifies the claim by linking the two; well organized and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "When we reach for examples of national greatness, our minds turn almost reflexively to monuments and masterpieces — the cathedral, the symphony, the prize-winning scientist, the conquering general.", fn: "Hook" },
            { text: "The statement asks us to resist that reflex, insisting that the surest indicator of a great nation lies not in the achievements of its rulers, artists, or scientists, but in the general welfare of its ordinary people.", fn: "Context (the statement)" },
            { text: "I largely agree, because how a nation treats the mass of its citizens reveals its character far more honestly than the brilliance of a celebrated few.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Why welfare is the better indicator",
          sentences: [
            { text: "A handful of dazzling achievements can conceal a multitude of failures.", fn: "Topic sentence" },
            { text: "A country may raise glittering palaces and endow magnificent galleries while the majority of its people languish in poverty, without schooling, clean water, or recourse to justice.", fn: "Example", vocab: [{ term: "poverty", gloss: "貧窮" }] },
            { text: "Such achievements measure the wealth and ambition of a narrow elite, not the health of the nation taken as a whole.", fn: "Explanation", vocab: [{ term: "elite", gloss: "菁英；上層階級" }] },
            { text: "By contrast, a society in which ordinary men and women are educated, healthy, and treated with fairness has accomplished the hardest and most consequential task any nation can set itself.", fn: "Counterpoint", moves: ["By contrast"] },
            { text: "Grand monuments are easy to photograph and easier still to boast about, which is exactly why they so often mislead the visitor.", fn: "Why achievements deceive" },
            { text: "Greatness shared among millions is more real, and more admirable, than greatness merely displayed by a fortunate few.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Welfare is the harder test",
          sentences: [
            { text: "The welfare of ordinary people is, moreover, a far more demanding test than the production of celebrated individuals.", fn: "Topic sentence", moves: ["moreover"] },
            { text: "Funding a single brilliant laboratory requires only money and talent, but ensuring that tens of millions of citizens live decent lives requires fair laws, honest institutions, and effort sustained across generations.", fn: "Example", vocab: [{ term: "institutions", gloss: "制度；機構" }, { term: "sustained", gloss: "持續的" }] },
            { text: "A nation that manages the second has solved problems incomparably more complex than the raising of any monument.", fn: "Explanation" },
            { text: "It is far simpler to bankroll one celebrated laboratory than to guarantee that every child has a teacher and every patient a bed.", fn: "Concrete contrast of difficulty" },
            { text: "That is precisely why broad well-being is the surer indicator: it cannot be faked, bought cheaply, or concentrated in a single showcase for visitors to admire.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Achievement and welfare connected",
          sentences: [
            { text: "However, the statement should not be read as a wholesale dismissal of achievement.", fn: "Qualify", moves: ["However"] },
            { text: "The discoveries of scientists and the decisions of able leaders frequently improve ordinary lives, as vaccines, just laws, and new technologies raise the welfare of everyone they touch.", fn: "Example" },
            { text: "Achievement and welfare are not adversaries; the finest achievements are exactly those that lift the general population rather than a privileged sliver of it.", fn: "Reframe" },
            { text: "A discovery reaches its full worth only when it touches the ordinary patient, and a wise law proves itself only in the ordinary life it quietly improves.", fn: "Tie achievement to welfare" },
            { text: "The point is not that achievements fail to matter, but that they matter most when measured by how widely their benefits are shared.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the general welfare of its people is indeed the surest indicator of a nation's greatness.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Monuments and prizes can dazzle, but they can also distract us from the unglamorous question of how ordinary people actually live from one day to the next.", fn: "Synthesis" },
            { text: "A truly great nation is measured less by the brilliance gathered at its summit than by the dignity it secures at its base.", fn: "Final judgment", vocab: [{ term: "dignity", gloss: "尊嚴" }] },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-007",
    type: "issue",
    category: "Education",
    prompt:
      "The best way to teach — whether as an educator, employer, or parent — is to praise positive actions and ignore negative ones.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-008",
    type: "issue",
    category: "Education",
    prompt:
      "Teachers' salaries should be based on their students' academic performance.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-009",
    type: "issue",
    category: "Environment",
    prompt:
      "Society should make efforts to save endangered species only if the potential extinction of those species is the result of human activities.",
    directions: D_POLICY,
  },
  {
    id: "w-issue-010",
    type: "issue",
    category: "Education",
    prompt:
      "College students should base their choice of a field of study on the availability of jobs in that field.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-011",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "As we acquire more knowledge, things do not become more comprehensible, but more complex and mysterious.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-012",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "In any situation, progress requires discussion among people who have contrasting points of view.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-013",
    type: "issue",
    category: "Education",
    prompt:
      "Educational institutions should dissuade students from pursuing fields of study in which they are unlikely to succeed.",
    directions: D_POLICY,
  },
  {
    id: "w-issue-014",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Governments should not fund any scientific research whose consequences are unclear.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-015",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Society should identify those children who have special talents and provide training for them at an early age to develop their talents.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-016",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "It is primarily through our identification with social groups that we define ourselves.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-017",
    type: "issue",
    category: "Education",
    prompt:
      "College students should be encouraged to pursue subjects that interest them rather than the courses that seem most likely to lead to jobs.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-018",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: When planning courses, educators should take into account the interests and suggestions of their students. Reason: Students are more motivated to learn when they are interested in what they are studying.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-019",
    type: "issue",
    category: "The Individual",
    prompt:
      "The greatness of individuals can be decided only by those who live after them, not by their contemporaries.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-020",
    type: "issue",
    category: "Education",
    prompt:
      "Students should always question what they are taught instead of accepting it passively.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-021",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The increasingly rapid pace of life today causes more problems than it solves.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-022",
    type: "issue",
    category: "Technology",
    prompt:
      "Claim: It is no longer possible for a society to regard any living man or woman as a hero. Reason: The reputation of anyone who is subjected to media scrutiny will eventually be diminished.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-023",
    type: "issue",
    category: "Education",
    prompt:
      "Competition for high grades seriously limits the quality of learning at all levels of education.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-024",
    type: "issue",
    category: "Education",
    prompt:
      "Universities should require every student to take a variety of courses outside the student's field of study.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a clear position developed through two well-supported reasons and a genuine counterargument, with relevant everyday examples and good control of language.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            {
              text: "Most students enter university hoping to become an expert in a single subject, whether that is engineering, biology, or literature.",
              fn: "Hook (set up the topic)",
            },
            {
              text: "Because a degree often leads directly to a career, it is tempting to think that every course a student takes should serve that one specialty.",
              fn: "Context (the opposing intuition)",
            },
            {
              text: "Yet I agree that universities should require every undergraduate to study a substantial amount outside their major, because broad learning produces graduates who are more flexible and better prepared for problems that do not respect the boundaries between subjects.",
              fn: "Thesis statement (clear position)",
              vocab: [{ term: "flexible", gloss: "靈活的；有彈性的" }],
              moves: ["Yet"],
            },
          ],
        },
        {
          role: "Body — Reason 1 (real problems cross subjects)",
          sentences: [
            {
              text: "First, the most important problems in the real world rarely fit neatly inside a single field.",
              fn: "Topic sentence",
              moves: ["First"],
            },
            {
              text: "An engineer who designs a new bridge must do more than calculate stresses and materials; she must also weigh public budgets, consider the safety of nearby neighborhoods, and predict how the community will react to years of construction.",
              fn: "Example",
            },
            {
              text: "An engineer who has taken courses in economics, history, or psychology will understand these human questions far better than one who studied only mathematics and physics.",
              fn: "Explanation (link example to claim)",
            },
            {
              text: "A scientist who never studied ethics, in the same way, might build something powerful without ever pausing to ask whether it should be built at all.",
              fn: "Second example",
            },
            {
              text: "In other words, technical skill alone is not enough, and the ability to see a problem from several directions is what separates a competent professional from an excellent one.",
              fn: "Elaboration",
              vocab: [{ term: "competent", gloss: "有能力的；稱職的" }],
              moves: ["In other words"],
            },
          ],
        },
        {
          role: "Body — Reason 2 (a changing world)",
          sentences: [
            {
              text: "Second, studying outside the major prepares students for a world that keeps changing.",
              fn: "Topic sentence",
              moves: ["Second"],
            },
            {
              text: "Few people now hold a single job for life; many switch careers two or three times, and entire industries can appear or disappear within a single generation.",
              fn: "Example",
            },
            {
              text: "When that happens, the skills a person picked up in an unrelated field can suddenly become valuable in ways no one expected.",
              fn: "Explanation",
            },
            {
              text: "A computer scientist who once took writing courses, for instance, can explain complicated ideas clearly to customers and managers, a skill that purely technical training often fails to provide.",
              fn: "Second example",
              moves: ["for instance"],
            },
            {
              text: "Broad study also teaches students how to learn unfamiliar material quickly, which may be the single most useful ability in a long career.",
              fn: "Elaboration",
            },
            {
              text: "A graduate trained only for one narrow role, by contrast, can be left stranded the moment that role disappears.",
              fn: "Contrast",
            },
          ],
        },
        {
          role: "Body — Counterargument",
          sentences: [
            {
              text: "However, the requirement only works if it is designed thoughtfully.",
              fn: "Pivot to the opposing view",
              moves: ["However"],
            },
            {
              text: "If students are forced to take random, unrelated courses simply to collect credits, they may rush through the material, forget it within weeks, and come to resent the rule as a waste of time and money.",
              fn: "State the objection",
              vocab: [{ term: "resent", gloss: "怨恨；反感" }],
            },
            {
              text: "Worse, a poorly designed requirement can crowd out advanced courses in the major itself, weakening the very expertise that students came to gain.",
              fn: "Strengthen the objection",
              vocab: [{ term: "expertise", gloss: "專業知識；專長" }],
              moves: ["Worse"],
            },
            {
              text: "The solution, though, is not to abandon the requirement but to structure it well, for example by letting students choose a connected set of outside courses, such as a minor, rather than a scattered list of introductions.",
              fn: "Answer the objection",
            },
            {
              text: "Designed in this way, the outside courses reinforce a student's main field instead of competing with it.",
              fn: "Reinforce the answer",
            },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            {
              text: "In conclusion, requiring undergraduates to study outside their major is a sound policy, because it produces flexible graduates who can approach real problems from several angles and adapt as the world changes.",
              fn: "Restate the position",
              moves: ["In conclusion"],
            },
            {
              text: "A university's task, after all, is not only to train specialists but to form thoughtful people who can think beyond the edges of their own field.",
              fn: "Broaden the point",
            },
            {
              text: "As long as the courses are chosen thoughtfully rather than at random, the benefits of breadth clearly outweigh its costs.",
              fn: "Final judgment",
              vocab: [{ term: "outweigh", gloss: "勝過；比…更重要" }],
            },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-025",
    type: "issue",
    category: "Education",
    prompt:
      "Educators should find out what students want included in the curriculum and then offer it to them.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-026",
    type: "issue",
    category: "Education",
    prompt:
      "Educators should teach facts only after their students have studied the ideas, trends, and concepts that help explain those facts.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-027",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: We can usually learn much more from people whose views we share than from those whose views contradict our own. Reason: Disagreement can cause stress and inhibit learning.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-028",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Government officials should rely on their own judgment rather than unquestioningly carry out the will of the people they serve.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-029",
    type: "issue",
    category: "Technology",
    prompt:
      "Young people should be encouraged to pursue long-term, realistic goals rather than seek immediate fame and recognition.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-030",
    type: "issue",
    category: "The Individual",
    prompt:
      "If a goal is worthy, then any means taken to attain it are justifiable.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-031",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "In order to become well-rounded individuals, all college students should be required to take courses in which they read poetry, novels, mythology, and other types of imaginative literature.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-032",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "In order for any work of art — for example, a film, a novel, a poem, or a song — to have merit, it must be understandable to most people.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-033",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Many important discoveries or creations are accidental: it is usually while seeking the answer to one question that we come across the answer to another.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-034",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The main benefit of the study of history is to dispel the illusion that people living now are significantly different from people who lived in earlier times.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-035",
    type: "issue",
    category: "Education",
    prompt:
      "Learning is primarily a matter of personal discipline; students cannot be motivated by school or college alone.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-036",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Scientists and other researchers should focus their research on areas that are likely to benefit the greatest number of people.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-037",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Politicians should pursue common ground and reasonable consensus rather than elusive ideals.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): clearly organized, with relevant historical examples and a fair counterargument, though the analysis stays fairly general and could probe the ideas more deeply.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            {
              text: "Every public official eventually faces the same hard choice: whether to do what is realistic today or to aim for what would be best in principle.",
              fn: "Hook (frame the choice)",
            },
            {
              text: "Those who favor feasibility argue that leaders must work with the world as it is, not as they wish it to be, and that chasing perfect solutions only wastes time and public money.",
              fn: "Context (the opposing view)",
            },
            {
              text: "The choice sounds simple, but it quietly shapes almost everything a government does.",
              fn: "Raise the stakes",
            },
            {
              text: "There is real wisdom in this caution, but I believe officials should be guided first by their ideals, because ideals are what slowly expand the limits of what is feasible.",
              fn: "Thesis statement (clear position)",
              vocab: [{ term: "feasible", gloss: "可行的" }],
            },
          ],
        },
        {
          role: "Body — Reason 1 (ideals expand the possible)",
          sentences: [
            {
              text: "First, many goals that once seemed impossible later became ordinary, precisely because someone refused to accept the limits of their time.",
              fn: "Topic sentence",
              moves: ["First"],
            },
            {
              text: "The end of legalized slavery, the right of women to vote, and the idea that governments should protect public health were all dismissed as unrealistic when they were first proposed.",
              fn: "Example",
              vocab: [{ term: "unrealistic", gloss: "不切實際的" }],
            },
            {
              text: "In each case, the people who pushed these reforms forward were guided by an ideal rather than by what seemed achievable at the moment.",
              fn: "Explanation",
            },
            {
              text: "If every leader had done only what was easy and popular, none of these changes would have happened, and we would still call them impossible today.",
              fn: "Counter the feasibility view",
            },
            {
              text: "What looks feasible, in other words, is not fixed; it is shaped by the goals that determined leaders are willing to fight for over many years.",
              fn: "Elaboration",
              moves: ["in other words"],
            },
            {
              text: "The boundary of the possible, then, is something leaders help to redraw, not a wall they are simply stuck behind.",
              fn: "Restate the mechanism",
            },
          ],
        },
        {
          role: "Body — Counterargument",
          sentences: [
            {
              text: "Of course, ideals on their own are not enough, and here the warning behind the claim deserves respect.",
              fn: "Concession (topic sentence)",
              moves: ["Of course"],
            },
            {
              text: "A leader who refuses every imperfect law while waiting for a perfect one may, in the end, help no one at all.",
              fn: "State the objection",
            },
            {
              text: "A politician who blocks a useful health program because it does not yet cover everyone has chosen a clean conscience over real human benefit.",
              fn: "Example",
              vocab: [{ term: "benefit", gloss: "益處；使受益" }],
            },
            {
              text: "Genuine progress almost always arrives in small, imperfect steps rather than in a single perfect leap.",
              fn: "Explain why feasibility matters",
              vocab: [{ term: "progress", gloss: "進展；進步" }],
            },
            {
              text: "A leader who ignores feasibility entirely can do real damage, no matter how noble the goal that inspired the attempt.",
              fn: "Extend the objection",
            },
            {
              text: "Good intentions do not feed anyone if the plan behind them never actually works.",
              fn: "Sharpen the objection",
            },
          ],
        },
        {
          role: "Body — Resolution",
          sentences: [
            {
              text: "The wisest approach, therefore, is to treat ideals and feasibility as partners rather than rivals.",
              fn: "Pivot to the synthesis",
              moves: ["therefore"],
            },
            {
              text: "An official should hold a clear ideal as the destination and then use practical, feasible actions as the steps that gradually move society toward it.",
              fn: "Explain the synthesis",
              vocab: [{ term: "practical", gloss: "實際的；務實的" }],
            },
            {
              text: "A government that wants clean air, for example, may not be able to ban all pollution at once, but it can raise its standards year after year until the ideal is finally reached.",
              fn: "Example",
              moves: ["for example"],
            },
            {
              text: "Each step is realistic on its own, yet together the steps carry society toward a goal that once looked impossible.",
              fn: "Explain the combined effect",
            },
            {
              text: "This is how real reform usually happens: a distant ideal pursued through a long sequence of achievable moves.",
              fn: "Name the principle",
            },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            {
              text: "In conclusion, feasibility and ideals are not really opposites, because each one needs the other.",
              fn: "Restate the position",
              moves: ["In conclusion"],
            },
            {
              text: "Ideals without feasibility remain dreams, while feasibility without ideals leads nowhere in particular, so the best officials aim at what is ideal while moving forward one feasible step at a time.",
              fn: "Final judgment",
            },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-038",
    type: "issue",
    category: "The Individual",
    prompt:
      "People should undertake risky action only after they have carefully considered its consequences.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-039",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Leaders are created by the demands that are placed on them.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-040",
    type: "issue",
    category: "Environment",
    prompt:
      "There is little justification for society to make extraordinary efforts — especially at a great cost in money and jobs — to save endangered animal or plant species.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-041",
    type: "issue",
    category: "Technology",
    prompt:
      "The human mind will always be superior to machines because machines are only tools of human minds.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-042",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "People who are the most deeply committed to an idea or policy are also the most critical of it.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-043",
    type: "issue",
    category: "Environment",
    prompt:
      "Some people believe that society should try to save every plant and animal species, despite the expense to humans in effort, time, and financial well-being. Others believe that society need not make extraordinary efforts, especially at a great cost in money and jobs, to save endangered species.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-044",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that the purpose of education is to free the mind and the spirit. Others believe that formal education tends to restrain our minds and spirits rather than set them free.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-045",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Some people believe it is often necessary, even desirable, for political leaders to withhold information from the public. Others believe that the public has a right to be fully informed.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-046",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: Universities should require every student to take a variety of courses outside the student's major field of study. Reason: Acquiring knowledge of various academic disciplines is the best way to become truly educated.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-047",
    type: "issue",
    category: "The Individual",
    prompt:
      "Knowing about the past cannot help people to make important decisions today.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-048",
    type: "issue",
    category: "Technology",
    prompt:
      "In this age of intensive media coverage, it is no longer possible for a society to regard any living man or woman as a hero.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-049",
    type: "issue",
    category: "Education",
    prompt:
      "We can usually learn much more from people whose views we share than from people whose views contradict our own.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-050",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The most effective way to understand contemporary culture is to analyze the trends of its youth.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-051",
    type: "issue",
    category: "Technology",
    prompt:
      "People's attitudes are determined more by their immediate situation or surroundings than by society as a whole.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-052",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Nations should suspend government funding for the arts when significant numbers of their citizens are hungry or unemployed.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-053",
    type: "issue",
    category: "Education",
    prompt:
      "All parents should be required to volunteer time to their children's schools.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-054",
    type: "issue",
    category: "Education",
    prompt:
      "Colleges and universities should require their students to spend at least one semester studying in a foreign country.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-055",
    type: "issue",
    category: "Education",
    prompt:
      "Teachers' salaries should be based on the academic performance of their students.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-056",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "It is no longer possible for a society to regard any living man or woman as a hero.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-057",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Some people believe that in order to thrive, a society must put its own overall success before the well-being of its individual citizens. Others believe that the well- being of a society can only be measured by the general welfare of all its people.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-058",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: Any piece of information referred to as a fact should be mistrusted, since it may well be proven false in the future. Reason: Much of the information that people assume is factual actually turns out to be inaccurate.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-059",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: Nations should suspend government funding for the arts when significant numbers of their citizens are hungry or unemployed. Reason: It is inappropriate — and, perhaps, even cruel — to use public resources to fund the arts when people's basic needs are not being met.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-060",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: Many problems of modern society cannot be solved by laws and the legal system. Reason: Laws cannot change what is in people's hearts or minds.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-061",
    type: "issue",
    category: "Education",
    prompt:
      "Educators should take students' interests into account when planning the content of the courses they teach.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-062",
    type: "issue",
    category: "Technology",
    prompt:
      "The primary goal of technological advancement should be to increase people's efficiency so that they have more leisure time.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-063",
    type: "issue",
    category: "Education",
    prompt:
      "Educators should base their assessment of students' learning not on students' grasp of facts but on the ability to explain the ideas, trends, and concepts that those facts illustrate.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-064",
    type: "issue",
    category: "Technology",
    prompt:
      "Unfortunately, in contemporary society, creating an appealing image has become more important than the reality or truth behind that image.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-065",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "The effectiveness of a country's leaders is best measured by examining the well- being of that country's citizens.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-066",
    type: "issue",
    category: "Education",
    prompt:
      "A nation should require all of its students to study the same national curriculum until they enter college.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-067",
    type: "issue",
    category: "Education",
    prompt:
      "Educational institutions should actively encourage their students to choose fields of study in which jobs are plentiful.",
    directions: D_POLICY,
  },
  {
    id: "w-issue-068",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "People's behavior is largely determined by forces not of their own making.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-069",
    type: "issue",
    category: "Education",
    prompt:
      "Although innovations such as video, computers, and the Internet seem to offer schools improved methods for instructing students, these technologies all too often distract from real learning.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-070",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The best ideas arise from a passionate interest in commonplace things.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-071",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "To be an effective leader, a public official must maintain the highest ethical and moral standards.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-072",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Claim: Imagination is a more valuable asset than experience. Reason: People who lack experience are free to imagine what is possible without the constraints of established habits and attitudes.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-073",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "In most professions and academic fields, imagination is more important than knowledge.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-074",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Critical judgment of work in any given field has little value unless it comes from someone who is an expert in that field.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-075",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Some people believe that scientific discoveries have given us a much better understanding of the world around us. Others believe that science has revealed to us that the world is infinitely more complex than we ever realized.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-076",
    type: "issue",
    category: "Education",
    prompt:
      "In any profession — business, politics, education, government — those in power should step down after five years.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-077",
    type: "issue",
    category: "Education",
    prompt:
      "Requiring university students to take a variety of courses outside their major fields of study is the best way to ensure that students become truly educated.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-078",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: The surest indicator of a great nation is not the achievements of its rulers, artists, or scientists. Reason: The surest indicator of a great nation is actually the welfare of all its people.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-079",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Any leader who is quickly and easily influenced by shifts in popular opinion will accomplish little.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-080",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Government officials should rely on their own judgment rather than unquestioningly carry out the will of the people whom they serve.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-081",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "It is primarily in cities that a nation's cultural traditions are generated and preserved.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-082",
    type: "issue",
    category: "Education",
    prompt:
      "We can learn much more from people whose views we share than from people whose views contradict our own.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-083",
    type: "issue",
    category: "Environment",
    prompt:
      "When old buildings stand on ground that modern planners feel could be better used for modern purposes, modern development should be given precedence over the preservation of historic buildings.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-084",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: The surest indicator of a great nation must be the achievements of its rulers, artists, or scientists. Reason: Great achievements by a nation's rulers, artists, or scientists will ensure a good life for the majority of that nation's people.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-085",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Some people claim that you can tell whether a nation is great by looking at the achievements of its rulers, artists, or scientists. Others argue that the surest indicator of a great nation is, in fact, the general welfare of all its people.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-086",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The best way to understand the character of a society is to examine the character of the men and women that the society chooses as its heroes or its role models.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-087",
    type: "issue",
    category: "Education",
    prompt:
      "All college and university students would benefit from spending at least one semester studying in a foreign country.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-088",
    type: "issue",
    category: "Environment",
    prompt:
      "Some people claim that a nation's government should preserve its wilderness areas in their natural state. Others argue that these areas should be developed for potential economic gain.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-089",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "The surest indicator of a great nation is not the achievements of its rulers, artists, or scientists, but the general well-being of all its people.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-090",
    type: "issue",
    category: "Work & Economy",
    prompt:
      "Some people argue that successful leaders in government, industry, or other fields must be highly competitive. Other people claim that in order to be successful, a leader must be willing and able to cooperate with others.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-091",
    type: "issue",
    category: "Work & Economy",
    prompt:
      "Some people believe that corporations have a responsibility to promote the well- being of the societies and environments in which they operate. Others believe that the only responsibility of corporations, provided they operate within the law, is to make as much money as possible.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-092",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: Researchers should not limit their investigations to only those areas in which they expect to discover something that has an immediate, practical application. Reason: It is impossible to predict the outcome of a line of research with any certainty.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-093",
    type: "issue",
    category: "Technology",
    prompt:
      "Some people believe that our ever-increasing use of technology significantly reduces our opportunities for human interaction. Other people believe that technology provides us with new and better ways to communicate and connect with one another.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-094",
    type: "issue",
    category: "The Individual",
    prompt:
      "Claim: Knowing about the past cannot help people to make important decisions today. Reason: The world today is significantly more complex than it was even in the relatively recent past.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-095",
    type: "issue",
    category: "The Individual",
    prompt:
      "Claim: Knowing about the past cannot help people to make important decisions today. Reason: We are not able to make connections between current events and past events until we have some distance from both.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-096",
    type: "issue",
    category: "Education",
    prompt:
      "Educational institutions should actively encourage their students to choose fields of study that will prepare them for lucrative careers.",
    directions: D_POLICY,
  },
  {
    id: "w-issue-097",
    type: "issue",
    category: "Education",
    prompt:
      "Educational institutions have a responsibility to dissuade students from pursuing fields of study in which they are unlikely to succeed.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-098",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that competition for high grades motivates students to excel in the classroom. Others believe that such competition seriously limits the quality of real learning.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-099",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: Major policy decisions should always be left to politicians and other government experts. Reason: Politicians and other government experts are more informed and thus have better judgment and perspective than do members of the general public.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-100",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that universities should require every student to take a variety of courses outside the student's field of study. Others believe that universities should not force students to take any courses other than those that will help prepare them for jobs in their chosen fields.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-101",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "It is more harmful to compromise one's own beliefs than to adhere to them.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-102",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: Colleges and universities should specify all required courses and eliminate elective courses in order to provide clear guidance for students. Reason: College students — like people in general — prefer to follow directions rather than make their own decisions.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-103",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "No field of study can advance significantly unless it incorporates knowledge and experience from outside that field.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-104",
    type: "issue",
    category: "The Individual",
    prompt:
      "True success can be measured primarily in terms of the goals one sets for oneself.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-105",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "The general welfare of a nation's people is a better indication of that nation's greatness than are the achievements of its rulers, artists, or scientists.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-106",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The best test of an argument is the argument's ability to convince someone with an opposing viewpoint.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-107",
    type: "issue",
    category: "Environment",
    prompt:
      "Nations should pass laws to preserve any remaining wilderness areas in their natural state.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-108",
    type: "issue",
    category: "Education",
    prompt:
      "In any field — business, politics, education, government — those in power should be required to step down after five years.",
    directions: D_POLICY,
  },
  {
    id: "w-issue-109",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Some people claim that the goal of politics should be the pursuit of an ideal. Others argue that the goal should be finding common ground and reaching reasonable consensus.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-110",
    type: "issue",
    category: "Environment",
    prompt:
      "The best way to solve environmental problems caused by consumer-generated waste is for towns and cities to impose strict limits on the amount of trash they will accept from each household.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-111",
    type: "issue",
    category: "Education",
    prompt:
      "We learn our most valuable lessons in life from struggling with our limitations rather than from enjoying our successes.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-112",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: While boredom is often expressed with a sense of self-satisfaction, it should really be a source of embarrassment. Reason: Boredom arises from a lack of imagination and self-motivation.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-113",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that the most important qualities of an effective teacher are understanding and empathy. Others believe that it is more important for teachers to be rigorous and demanding in their expectations for students.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-114",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: Though often considered an objective pursuit, learning about the historical past requires creativity. Reason: Because we can never know the past directly, we must reconstruct it by imaginatively interpreting historical accounts, documents, and artifacts.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-115",
    type: "issue",
    category: "The Individual",
    prompt:
      "Claim: No act is done purely for the benefit of others. Reason: All actions — even those that seem to be done for other people — are based on self-interest.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-116",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "To understand the most important characteristics of a society, one must study its major cities.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-117",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Scandals are useful because they focus our attention on problems in ways that no speaker or reformer ever could.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-118",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Claim: Governments must ensure that their major cities receive the financial support they need in order to thrive. Reason: It is primarily in cities that a nation's cultural traditions are preserved and generated.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-119",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Some people believe that government funding of the arts is necessary to ensure that the arts can flourish and be available to all people. Others believe that government funding of the arts threatens the integrity of the arts.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-120",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: In any field — business, politics, education, government — those in power should step down after five years. Reason: The surest path to success for any enterprise is revitalization through new leadership.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-121",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "In any field of endeavor, it is impossible to make a significant contribution without first being strongly influenced by past achievements within that field.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-122",
    type: "issue",
    category: "Environment",
    prompt:
      "Nations should pass laws to preserve any remaining wilderness areas in their natural state, even if these areas could be developed for economic gain.",
    directions: D_POLICY,
  },
  {
    id: "w-issue-123",
    type: "issue",
    category: "Education",
    prompt:
      "Governments should offer a free university education to any student who has been admitted to a university but who cannot afford the tuition.",
    directions: D_POLICY,
  },
  {
    id: "w-issue-124",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: In any situation, the best way to persuade other people is to present them with facts and statistics rather than with emotional arguments. Reason: Facts are objective, so they are more persuasive than subjective appeals.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-125",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Some people believe that success in creative fields, such as painting, fiction writing, and filmmaking, primarily requires hard work and perseverance. Others believe that such success mainly requires innate talents that cannot be learned.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-126",
    type: "issue",
    category: "Education",
    prompt:
      "In business, education, and government, it is always appropriate to remain skeptical of new leaders until those leaders show that they are worthy of trust.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-127",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: Group assignments that students must work together to complete should replace a substantial amount of traditional lecture-based instruction in college and university courses. Reason: It is vital for students to gain experience collaborating with peers to study a topic and to achieve a common goal.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-128",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Some people believe that in order to be effective, political leaders must yield to public opinion and abandon principle for the sake of compromise. Others believe that the most essential quality of an effective leader is the ability to remain consistently committed to particular principles and objectives.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-129",
    type: "issue",
    category: "Education",
    prompt:
      "Formal education tends to restrain our minds and spirits rather than set them free.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-130",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "The well-being of a society is enhanced when many of its people question authority.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-131",
    type: "issue",
    category: "Technology",
    prompt:
      "Governments should focus on solving the immediate problems of today rather than on trying to solve the anticipated problems of the future.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-132",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that college students should consider only their own talents and interests when choosing a field of study. Others believe that college students should base their choice of a field of study on the availability of jobs in that field.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-133",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Laws should be flexible enough to take account of various circumstances, times, and places.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-134",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Claim: The best way to understand the character of a society is to examine the character of the men and women that the society chooses as its heroes or its role models. Reason: Heroes and role models reveal a society's highest ideals.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-135",
    type: "issue",
    category: "The Individual",
    prompt:
      "Some people believe that it is helpful to view a challenging situation as an opportunity for personal growth. Others believe that reimagining challenging situations this way occupies too much of the focus one needs to face challenges effectively.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-136",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Some people believe that traveling to and living in numerous places increases one's ability to relate and connect to other people. Others believe that this ability is better cultivated by living in one place and developing a deep understanding of that community.",
    directions: D_TWO_VIEWS,
  },
  {
    id: "w-issue-137",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: Young people's tendency to make extensive use of portable devices like smartphones and tablets has hurt their development of social skills. Reason: These devices encourage users to form artificial personalities and relationships online rather than fully and honestly engaging with the people around them.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-138",
    type: "issue",
    category: "The Individual",
    prompt:
      "Claim: When one is making a decision, it is better to have a limited number of options. Reason: The more options a person has, the more difficult it is to make a rational decision.",
    directions: D_CLAIM_REASON,
  },
  {
    id: "w-issue-139",
    type: "issue",
    category: "Technology",
    prompt:
      "Because people increasingly feel compelled to share their personal details online, the right to privacy is eroding.",
    directions: D_CLAIM,
  },
  {
    id: "w-issue-140",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Some people believe that journalism should make news entertaining to keep the public engaged and informed. Others believe that this practice prioritizes entertainment and undermines the mission of journalism.",
    directions: D_TWO_VIEWS,
  },
];
