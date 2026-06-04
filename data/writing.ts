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
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a Claim-appropriate response that takes a clear stand across all three roles, then squarely confronts the most compelling objection and answers it; concrete examples and good control of language.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Whether the setting is a classroom, an office, or a family kitchen, the people in charge face the same daily choice about how to respond when someone does well and when someone falls short.", fn: "Hook (the shared problem)" },
            { text: "One popular answer, captured in the claim, is that the best approach in every such role is to praise positive actions and simply ignore negative ones.", fn: "Context (the claim)" },
            { text: "Praise is indeed a powerful tool in all three settings, but the claim overreaches, because ignoring negative actions deprives students, employees, and children alike of the correction they need to grow.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Where the claim is right",
          sentences: [
            { text: "It is true that praise accomplishes a great deal that criticism never can.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "A nervous new employee who is thanked for a small success takes on the next task with confidence, just as a child praised for trying hard learns that effort is worth repeating.", fn: "Example across contexts" },
            { text: "Scold a child for every spilled drink and she soon stops trying to pour at all.", fn: "Reinforce the point" },
            { text: "Encouragement builds the motivation and trust on which lasting improvement depends, and a manager or parent who notices only failures soon finds people hiding their mistakes rather than fixing them.", fn: "Explanation", vocab: [{ term: "motivation", gloss: "動機；動力" }] },
            { text: "Recognition, freely given, makes people want to repeat the very behavior that earned it.", fn: "Reinforce" },
            { text: "So the claim is right that praise should be the dominant note in teaching of every kind.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Where it fails",
          sentences: [
            { text: "However, the instruction to ignore negative actions is where the claim goes badly wrong.", fn: "Pivot", moves: ["However"] },
            { text: "An employee who repeatedly misses deadlines, a student who keeps misunderstanding a concept, a child who treats others unkindly — none of these improves simply because the problem is left unmentioned.", fn: "Example" },
            { text: "Silence in the face of a fault is not neutrality; it quietly signals approval, the behavior hardens into habit, and everyone nearby draws the lesson that such conduct carries no consequences.", fn: "Explanation", vocab: [{ term: "consequences", gloss: "後果" }] },
            { text: "The small unkindness a parent overlooks today can become the cruelty a teacher is forced to confront tomorrow.", fn: "Trace the cost forward" },
            { text: "A new employee never told that his reports arrive late simply assumes they are fine and keeps filing them late.", fn: "Workplace example" },
            { text: "In every one of the three roles, refusing to correct is not kindness but neglect dressed up as patience.", fn: "Sub-conclusion", vocab: [{ term: "neglect", gloss: "忽視；疏忽" }] },
          ],
        },
        {
          role: "Body — The strongest objection",
          sentences: [
            { text: "The most compelling case for the claim is that correction, clumsily delivered, can crush confidence and breed resentment.", fn: "Identify the strongest counter", moves: ["The most compelling"] },
            { text: "There is real force in this worry, since harsh, public, or relentless criticism does demoralize people and can undo everything praise has built.", fn: "Concede its force", vocab: [{ term: "demoralize", gloss: "使氣餒；使士氣低落" }] },
            { text: "But this objection argues against bad correction, not against correction itself, and the remedy is to correct skillfully rather than to fall silent.", fn: "Rebut" },
            { text: "Pointing out a fault privately, specifically, and as a problem to be solved together preserves the relationship while still addressing the mistake.", fn: "Explain how" },
            { text: "A surgeon who is never told about a sloppy technique will go on endangering patients, however cheerful the operating room.", fn: "High-stakes example" },
            { text: "Handled this way, correction becomes a form of respect, a sign that the teacher, manager, or parent believes the person capable of better.", fn: "Reframe correction as respect", vocab: [{ term: "respect", gloss: "尊重" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the claim is half right and half harmful.", fn: "Restate", moves: ["In conclusion"] },
            { text: "In the classroom, the workplace, and the home alike, praise should lead, but ignoring negative actions would leave people to repeat errors that no one was willing to name.", fn: "Synthesis" },
            { text: "To praise everything indiscriminately is, in the end, to praise nothing at all.", fn: "Aphoristic addition" },
            { text: "The best teachers, in any role, praise generously and correct kindly, understanding that genuine care sometimes means refusing to look away.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-008",
    type: "issue",
    category: "Education",
    prompt:
      "Teachers' salaries should be based on their students' academic performance.",
    directions: D_CLAIM,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): rejects the claim with two strong, well-developed reasons and then meets the accountability objection head-on with a fairer alternative; clear organization and persuasive examples.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It seems only fair that the best teachers should earn the most, and few measures of teaching look more objective than how well a teacher's students perform.", fn: "Hook (the intuitive appeal)" },
            { text: "From this intuition comes the claim that teachers' salaries should be based on their students' academic performance, rewarding success and discouraging failure.", fn: "Context (the claim)" },
            { text: "Appealing as it sounds, I disagree, because a student's performance depends on far more than the teacher, and tying pay to test scores would distort teaching while punishing those who take on the hardest classrooms.", fn: "Thesis statement (clear position)", vocab: [{ term: "distort", gloss: "扭曲；使失真" }] },
          ],
        },
        {
          role: "Body — Performance is not the teacher alone",
          sentences: [
            { text: "First, academic results reflect a host of factors that lie entirely outside a teacher's control.", fn: "Topic sentence", vocab: [{ term: "factors", gloss: "因素" }], moves: ["First"] },
            { text: "A child's home life, health, language, prior schooling, and even hunger shape test scores at least as much as anything that happens in the classroom.", fn: "Example" },
            { text: "A devoted teacher in a poor neighborhood may lift her students enormously and still see lower scores than a mediocre teacher in a wealthy suburb whose pupils arrive already ahead.", fn: "Develop the inequity" },
            { text: "Judging the teacher by the raw result is like judging a doctor solely by how sick her patients happened to be on arrival.", fn: "Analogy" },
            { text: "Two teachers of equal skill can produce wildly different scores simply because one was handed a stronger class than the other.", fn: "Reinforce the inequity" },
            { text: "To pay the first teacher less than the second would reward circumstances rather than skill, which is precisely the unfairness the policy claims to cure.", fn: "State the implication" },
          ],
        },
        {
          role: "Body — Perverse incentives",
          sentences: [
            { text: "Worse, linking pay directly to scores would corrupt the very teaching it aims to improve.", fn: "Pivot", vocab: [{ term: "corrupt", gloss: "敗壞；使墮落" }], moves: ["Worse"] },
            { text: "Teachers under such pressure would have every reason to teach narrowly to the test, drill memorization over understanding, and quietly steer weak students away from their classes.", fn: "Example" },
            { text: "The richest parts of education — curiosity, creativity, the slow building of character — produce nothing a standardized test can capture, and so would be the first casualties.", fn: "Explanation", vocab: [{ term: "standardized", gloss: "標準化的" }] },
            { text: "Over time the policy would drive the best teachers out of the struggling schools that need them most, since no one would volunteer to be paid less for harder work.", fn: "Long-term consequence" },
            { text: "A measure becomes useless, and often harmful, the moment people begin gaming it rather than pursuing what it was meant to track.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The accountability objection",
          sentences: [
            { text: "The strongest argument for the claim is that teachers, like everyone else, should be held accountable for results.", fn: "Identify the strongest counter", vocab: [{ term: "accountable", gloss: "負有責任的；應問責的" }], moves: ["The strongest"] },
            { text: "This is a fair concern, since a school cannot simply ignore whether its students are actually learning anything.", fn: "Concede its force" },
            { text: "But accountability does not require so crude an instrument as tying salaries to raw test scores.", fn: "Rebut" },
            { text: "Fairer methods exist — measuring how much a teacher improves her students over a year, weighing classroom observation, and considering peer and parent feedback — that reward genuine effectiveness without the distortions.", fn: "Offer an alternative" },
            { text: "Good evaluation looks at the distance a teacher's students travel, not merely the point at which they happen to finish.", fn: "Develop the alternative" },
            { text: "Accountability is a reason to evaluate teachers thoughtfully, not to reduce their worth to a single number.", fn: "Reframe" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the claim mistakes a convenient measure for a fair one.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Students' performance is shaped by forces no teacher commands, and rewarding it directly would punish the dedicated and reward the lucky while narrowing education for everyone.", fn: "Synthesis" },
            { text: "Fairness in pay should follow the teaching, which a teacher controls, rather than the outcome, which she only partly shapes.", fn: "Reinforce" },
            { text: "Teachers should certainly be held to high standards, but their pay should reflect the quality of their teaching, not the accident of which students walk through the door.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-009",
    type: "issue",
    category: "Environment",
    prompt:
      "Society should make efforts to save endangered species only if the potential extinction of those species is the result of human activities.",
    directions: D_POLICY,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a policy-appropriate response that weighs the consequences of the 'only if' rule, shows why they are harmful, and answers the moral intuition behind the policy; coherent and well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Conservation is expensive, and with limited money and effort, societies must constantly decide which species are worth the cost of saving.", fn: "Hook (the real constraint)" },
            { text: "One proposed rule would draw the line by cause, saving species only when human activity is to blame for their decline and letting so-called natural extinctions run their course.", fn: "Context (the policy)" },
            { text: "Although the policy carries a certain moral logic, I believe its consequences would be harmful, because the value of saving a species rarely depends on what caused its decline.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — The cause is rarely separable",
          sentences: [
            { text: "First, implementing the policy would force conservationists into nearly impossible judgments about cause.", fn: "Topic sentence", moves: ["First"] },
            { text: "In a world reshaped by human agriculture, climate change, and travel, almost no extinction is purely natural, and disentangling human from non-human causes is often impossible.", fn: "Example", vocab: [{ term: "disentangling", gloss: "釐清；區分開" }] },
            { text: "Officials would waste scarce time and money litigating blame instead of protecting habitats, and many species would vanish while the argument dragged on.", fn: "Consequence" },
            { text: "Did the fish die because of the new dam, the warming river, or a parasite that has always lurked in these waters, and who could honestly say?", fn: "Illustrate the difficulty" },
            { text: "A policy that hinges on an unanswerable question is a recipe for paralysis.", fn: "Sub-conclusion", vocab: [{ term: "paralysis", gloss: "癱瘓；停滯" }] },
          ],
        },
        {
          role: "Body — Consequences ignore the cause",
          sentences: [
            { text: "More importantly, the consequences of losing a species do not change according to why it is disappearing.", fn: "Pivot", moves: ["More importantly"] },
            { text: "A bee that vanishes through some natural shift still leaves crops unpollinated, and a predator lost to disease still allows its prey to multiply and unbalance the ecosystem.", fn: "Example", vocab: [{ term: "ecosystem", gloss: "生態系統" }] },
            { text: "Nature is a web of dependencies, and removing a strand weakens the whole regardless of cause, so a policy indifferent to natural extinctions would let real and avoidable damage unfold.", fn: "Explanation" },
            { text: "To stand by and watch, merely because the first domino fell without our help, is to mistake passivity for innocence.", fn: "Sharpen the point" },
            { text: "The loss of a single keystone species can cascade through an entire landscape, toppling others that quietly depended on it.", fn: "Develop the ecological stakes" },
            { text: "If the practical harm is the same, the reason to act is the same.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The moral objection",
          sentences: [
            { text: "The strongest case for the policy is moral: that humans bear special responsibility for the harm they cause and none for nature's own workings.", fn: "Identify the strongest counter", vocab: [{ term: "responsibility", gloss: "責任" }], moves: ["The strongest"] },
            { text: "There is something to this, and where humans have driven a species toward extinction, the duty to act is especially clear and urgent.", fn: "Concede its force" },
            { text: "But responsibility for causing harm is a reason to do more, not a license to do nothing whenever we happen to be blameless.", fn: "Rebut" },
            { text: "If we have the power to prevent a catastrophe and decline merely because we did not start it, the resulting loss is one we have allowed all the same.", fn: "Explain the consequence" },
            { text: "A lifeguard does not refuse to save a drowning swimmer simply because he was not the one who pushed the man into the sea.", fn: "Analogy" },
            { text: "Our obligation flows from our ability to help, not only from our guilt in causing harm.", fn: "Reframe", vocab: [{ term: "obligation", gloss: "義務；責任" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, restricting conservation to human-caused extinctions would do real damage for the sake of a tidy principle.", fn: "Restate", moves: ["In conclusion"] },
            { text: "The cause of a species' decline may help set priorities, but it should not be the gatekeeper that decides whether we act at all.", fn: "Synthesis" },
            { text: "What we can save, and what it is worth, should weigh far more heavily than the question of original blame.", fn: "Reinforce" },
            { text: "Faced with a preventable loss, the wiser policy asks not whose fault it is, but whether saving the species is worth the cost and within our power.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-010",
    type: "issue",
    category: "Education",
    prompt:
      "College students should base their choice of a field of study on the availability of jobs in that field.",
    directions: D_CLAIM,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): disagrees with a clear, well-supported position and then confronts the practical debt objection rather than dodging it, landing on a balanced synthesis; relevant examples throughout.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "With tuition high and graduates anxious about work, the advice to study whatever the job market wants can sound like simple common sense.", fn: "Hook" },
            { text: "The claim takes this further, urging that students base their choice of field on the availability of jobs in it.", fn: "Context (the claim)" },
            { text: "Job prospects deserve serious thought, but I disagree that they should be the basis of the decision, because a field chosen against one's interests and talents often leads to mediocrity and misery rather than security.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Interest and aptitude drive success",
          sentences: [
            { text: "First, students tend to excel at what genuinely engages them.", fn: "Topic sentence", moves: ["First"] },
            { text: "A young woman who loves biology will outwork and outperform a classmate who chose the major only because it seemed employable, and her passion will carry her through the inevitable hard years.", fn: "Example" },
            { text: "Excellence, not mere enrollment in a popular field, is what ultimately earns good work, and excellence grows from genuine interest far more reliably than from cold calculation.", fn: "Explanation", vocab: [{ term: "excellence", gloss: "卓越；優異" }] },
            { text: "Interest is what sustains the long, unglamorous hours of practice that real competence quietly requires.", fn: "Develop" },
            { text: "Employers, after all, hire the candidate who is genuinely good, not the one who merely picked a fashionable major.", fn: "Reinforce" },
            { text: "Choosing a field one finds dull, simply because jobs exist, often produces a mediocre worker in an overcrowded market.", fn: "Sub-conclusion", vocab: [{ term: "mediocre", gloss: "平庸的" }] },
          ],
        },
        {
          role: "Body — The market is a moving target",
          sentences: [
            { text: "Moreover, betting one's entire education on today's job market is far riskier than it first appears.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Fields that look secure when a student enrolls can be transformed or automated nearly out of existence by the time she graduates four years later.", fn: "Example" },
            { text: "Skills that transfer — clear thinking, writing, and problem-solving — outlast any particular industry, and these are cultivated best when a student studies something deeply rather than strategically.", fn: "Explanation" },
            { text: "The graduate who trained for a single narrow role may find that role gone the very moment the technology behind it shifts.", fn: "Risk example" },
            { text: "Chasing the market can leave a graduate both unhappy and, ironically, unemployed.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The practical objection",
          sentences: [
            { text: "The most compelling argument for the claim is practical: degrees are expensive, and a graduate buried in debt cannot afford to be idealistic.", fn: "Identify the strongest counter", moves: ["The most compelling"] },
            { text: "This is a real and serious concern, and it would be irresponsible to tell students to ignore whether a field can support a livelihood.", fn: "Concede its force", vocab: [{ term: "livelihood", gloss: "生計" }] },
            { text: "But acknowledging job prospects as one important factor is very different from making them the basis of the entire choice.", fn: "Rebut", vocab: [{ term: "factor", gloss: "因素" }] },
            { text: "The wiser path is to weigh interest, aptitude, and opportunity together, choosing a field one can both love and live on.", fn: "Synthesis", vocab: [{ term: "aptitude", gloss: "性向；天賦" }] },
            { text: "Money matters, and pretending otherwise would be a disservice to students already anxious about their futures.", fn: "Concede further" },
            { text: "Practicality should inform the decision, not dictate it.", fn: "Reframe" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, job availability is a factor to respect, not a rule to obey.", fn: "Restate", moves: ["In conclusion"] },
            { text: "A field chosen purely for its job listings risks producing graduates who are good at nothing in particular and happy in nothing at all.", fn: "Synthesis" },
            { text: "The happiest and most successful workers tend to be those who found the overlap between what they love and what the world will pay for.", fn: "Reinforce" },
            { text: "Students should aim where their talents and interests meet real opportunity, rather than surrender the choice to a market that may well have moved on before they arrive.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-011",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "As we acquire more knowledge, things do not become more comprehensible, but more complex and mysterious.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a nuanced reading that grants the statement's truth at the frontier of inquiry while showing that knowledge makes most of the world more comprehensible; vivid examples and a clear synthesis.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "There is a humbling pattern in the history of science: every great discovery seems to open a door onto a room full of new questions.", fn: "Hook" },
            { text: "The statement seizes on this pattern to make a striking claim — that as we acquire more knowledge, the world becomes not more comprehensible but more complex and mysterious.", fn: "Context (the statement)" },
            { text: "The statement captures a genuine truth about the frontier of knowledge, but it overstates the case, because the same advances that reveal new mysteries also make vast stretches of the world far more comprehensible than before.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Knowledge expands the unknown",
          sentences: [
            { text: "It is true that learning often multiplies our questions faster than our answers.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Physicists who once imagined the atom was the smallest thing now study quarks and fields, and find the universe stranger at every scale they probe.", fn: "Example" },
            { text: "Each answer redraws the boundary of the unknown, and a curious mind that learns more inevitably becomes aware of how much more there is still to learn.", fn: "Explanation" },
            { text: "The more a scholar masters, the more sharply she sees the very edges of her own ignorance.", fn: "Develop the point" },
            { text: "Socrates captured this long ago when he observed that the wisest man is the one who knows how little he truly knows.", fn: "Classical support" },
            { text: "In this sense knowledge does breed a kind of productive mystery, and the expert is often more conscious of complexity than the novice.", fn: "Sub-conclusion", vocab: [{ term: "complexity", gloss: "複雜性" }, { term: "novice", gloss: "新手" }] },
          ],
        },
        {
          role: "Body — But most things grow clearer",
          sentences: [
            { text: "However, to conclude that the world has become less comprehensible is to confuse the expanding frontier with the settled interior.", fn: "Pivot", vocab: [{ term: "frontier", gloss: "前沿；邊界" }], moves: ["However"] },
            { text: "Disease was once a terrifying mystery blamed on curses and bad air; now we understand germs, genes, and immune systems well enough to cure illnesses that once killed millions.", fn: "Example" },
            { text: "Lightning was a god's anger and is now electricity; the wandering of the planets was an omen and is now orbital mechanics taught to schoolchildren.", fn: "Parallel example" },
            { text: "We forecast storms, transplant organs, and send machines to other planets, feats that would have looked like sorcery to people drowning in older mysteries.", fn: "Concrete modern mastery" },
            { text: "A farmer today glances at a weather forecast that would have struck his great-grandfather as outright prophecy.", fn: "Everyday example" },
            { text: "For every new mystery knowledge uncovers, it converts a hundred former mysteries into ordinary, teachable understanding.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Mystery relocated, not multiplied",
          sentences: [
            { text: "The deeper point is that knowledge moves the mystery rather than multiplying it overall.", fn: "Topic sentence" },
            { text: "What grows complex is the leading edge of inquiry, where specialists work; what grows clear is everything behind that edge, which steadily becomes common sense.", fn: "Explanation", vocab: [{ term: "inquiry", gloss: "探究；研究" }] },
            { text: "A modern person navigates a world enormously more comprehensible than that of their ancestors, even if the experts at the frontier face questions those ancestors never dreamed of.", fn: "Reframe", vocab: [{ term: "comprehensible", gloss: "可理解的" }] },
            { text: "Knowledge is less a shrinking island of light than a growing one whose lengthening shoreline simply touches more darkness.", fn: "Extend the image" },
            { text: "The sphere of the understood expands even as the surface where it meets the unknown grows longer.", fn: "Geometric image" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement is half true.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Acquiring knowledge does reveal new layers of complexity and mystery at the frontier, but it simultaneously makes enormous portions of the world clearer, safer, and easier to understand.", fn: "Synthesis" },
            { text: "Confusion is the experience of the researcher at the edge, not of humanity as a whole.", fn: "Sharpen" },
            { text: "We do not grow more confused as we learn; we grow better informed, even as the horizon of the unknown quietly retreats before us.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-012",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "In any situation, progress requires discussion among people who have contrasting points of view.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): agrees with strong reasoning about the value of disagreement, then qualifies the sweeping word 'any' with a fair counterexample; well organized and convincing.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is a comforting idea that the best results come from harmony, from teams that agree and pull smoothly in the same direction.", fn: "Hook" },
            { text: "The statement insists on the opposite, claiming that in any situation progress requires discussion among people who hold contrasting points of view.", fn: "Context (the statement)" },
            { text: "I largely agree, because disagreement exposes errors that agreement conceals, though the word 'any' pushes a sound principle a step too far.", fn: "Thesis statement (agree with qualification)" },
          ],
        },
        {
          role: "Body — Contrasting views cure blind spots",
          sentences: [
            { text: "First, contrasting viewpoints are the most reliable cure for the blind spots that afflict any single perspective.", fn: "Topic sentence", vocab: [{ term: "perspective", gloss: "觀點；視角" }], moves: ["First"] },
            { text: "A team that all thinks alike will share the same assumptions and overlook the same flaws, marching confidently toward a cliff none of them can see.", fn: "Example", vocab: [{ term: "assumptions", gloss: "假設；成見" }] },
            { text: "An outsider who disagrees forces the group to defend its reasoning, and in defending it they discover the weak joints they had simply taken for granted.", fn: "Explanation" },
            { text: "This is why courts stage adversarial debate, why science demands peer criticism, and why wise leaders deliberately seek advisers willing to tell them no.", fn: "Support", vocab: [{ term: "adversarial", gloss: "對抗式的；對立的" }] },
            { text: "The lone decision-maker, however brilliant, has only one vantage point and cannot step outside his own mind to inspect it.", fn: "Reinforce the blind-spot point" },
            { text: "Progress, in these arenas, is the direct product of friction between opposing views.", fn: "Sub-conclusion", vocab: [{ term: "friction", gloss: "摩擦；衝突" }] },
          ],
        },
        {
          role: "Body — Opposition tests ideas",
          sentences: [
            { text: "Moreover, an idea that has survived genuine opposition is far stronger than one that has never been challenged at all.", fn: "Pivot", moves: ["Moreover"] },
            { text: "A proposal waved through by a room of yes-men carries its hidden weaknesses out into the world, where they surface later as expensive failures.", fn: "Example" },
            { text: "Debate is a kind of stress test, and the disagreement that feels uncomfortable in the meeting is exactly what prevents disaster in practice.", fn: "Explanation" },
            { text: "History's worst blunders were often decisions that no one in the room felt safe enough to question out loud.", fn: "Historical reinforcement" },
            { text: "A culture that treats every objection as disloyalty is quietly arranging its own future failures.", fn: "Warn against suppressing dissent" },
            { text: "Disagreement caught early in a conversation is cheap; the same flaw discovered after the plan is built can be ruinously expensive.", fn: "Cost-timing point" },
            { text: "What looks like conflict is often just quality control.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Where 'any' overreaches",
          sentences: [
            { text: "However, the claim's insistence on any situation whatsoever asks more than the principle can bear.", fn: "Pivot", moves: ["However"] },
            { text: "Once a decision has been carefully debated and made, endless re-argument becomes an obstacle, and a surgeon mid-operation or a pilot in a storm needs decisive action, not a seminar.", fn: "Example" },
            { text: "There is a time for contrasting views and a time for united execution, and confusing the two can paralyze a group as surely as groupthink can mislead it.", fn: "Explanation", vocab: [{ term: "groupthink", gloss: "群體迷思" }] },
            { text: "Even there, the disagreement belonged earlier, while the plan was being weighed, not in the middle of carrying it out.", fn: "Clarify the timing" },
            { text: "Discussion drives progress when ideas are being formed, but it can obstruct progress when the moment calls for doing.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement is right in spirit if not in its sweeping any.", fn: "Restate", moves: ["In conclusion"] },
            { text: "In the crucial work of forming plans, testing ideas, and exposing errors, progress genuinely does depend on the clash of contrasting views.", fn: "Synthesis" },
            { text: "Argue freely before the decision; then act as one once it is made.", fn: "Aphoristic close" },
            { text: "The aim is never argument for its own sake but better decisions, and contrasting views remain the surest road to them.", fn: "Reinforce" },
            { text: "The wise course is to invite vigorous disagreement while deciding, and then to unite firmly behind the decision once it is made.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-013",
    type: "issue",
    category: "Education",
    prompt:
      "Educational institutions should dissuade students from pursuing fields of study in which they are unlikely to succeed.",
    directions: D_POLICY,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a policy-appropriate response that weighs the consequences of institutional dissuasion, shows why they are harmful, and answers the legitimate concern with a better alternative; well organized and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A university naturally wants its students to succeed, and it can feel kind to steer the likely failures away before they waste their years and their money.", fn: "Hook (the appeal of the policy)" },
            { text: "From this impulse comes the proposed policy: that educational institutions should actively dissuade students from pursuing fields of study in which they are unlikely to succeed.", fn: "Context (the policy)" },
            { text: "However well meant, I believe this policy would do far more harm than good, because predictions of failure are notoriously unreliable and the act of dissuasion would crush the very ambition that schools exist to nurture.", fn: "Thesis statement (clear position)", vocab: [{ term: "ambition", gloss: "抱負；雄心" }], moves: ["However"] },
          ],
        },
        {
          role: "Body — Predictions of failure are unreliable",
          sentences: [
            { text: "First, implementing the policy would require institutions to predict who will fail, and such predictions are far less accurate than they look.", fn: "Topic sentence", moves: ["First"] },
            { text: "Talent often reveals itself slowly, and a field that seems the wrong fit at eighteen can become a life's calling by twenty-two.", fn: "Develop the unreliability" },
            { text: "Late bloomers, students who stumbled early and flourished later, and those who simply needed a different teacher fill the history of every discipline.", fn: "Example" },
            { text: "Einstein was an unremarkable student, and countless accomplished professionals once looked hopeless in the very field they came to master.", fn: "Concrete example" },
            { text: "Many disciplines reward persistence as much as raw aptitude, and persistence is exactly what an early prediction cannot measure.", fn: "Develop" },
            { text: "A policy that acted on early signs of weakness would inevitably turn away many who would have succeeded, a cost no institution should impose so casually.", fn: "State the consequence" },
          ],
        },
        {
          role: "Body — Dissuasion entrenches bias",
          sentences: [
            { text: "Worse, judgments about who is unlikely to succeed are easily distorted by prejudice.", fn: "Pivot", vocab: [{ term: "prejudice", gloss: "偏見" }], moves: ["Worse"] },
            { text: "Throughout history women were told they could not do science and the poor were told they did not belong at university, predictions that reflected bias rather than ability.", fn: "Example" },
            { text: "A policy of dissuasion would hand institutions a respectable-sounding excuse to push disadvantaged students out of demanding fields, hardening the very inequalities education should dissolve.", fn: "Explanation", vocab: [{ term: "inequalities", gloss: "不平等" }] },
            { text: "The phrase unlikely to succeed attaches most easily to exactly the students who have always been told they do not belong.", fn: "Sharpen the point" },
            { text: "A confident prediction of failure can also become self-fulfilling, draining the very motivation a student needs to prove it wrong.", fn: "Self-fulfilling point" },
            { text: "The consequence would be a narrower, less diverse, and less just set of professions.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Inform, do not dissuade",
          sentences: [
            { text: "The policy does respond to a genuine problem, and that much should be granted.", fn: "Concede the legitimate concern" },
            { text: "Students who pour years and savings into a field for which they are truly unsuited suffer real and avoidable harm.", fn: "Develop the concern" },
            { text: "But the answer is to inform, not to dissuade: institutions should offer honest feedback, clear data about outcomes, and frank guidance, then let students choose.", fn: "Rebut with the alternative", vocab: [{ term: "guidance", gloss: "引導；指導" }] },
            { text: "Such counsel respects students as adults capable of weighing risk, whereas dissuasion treats a fallible prediction as a verdict and quietly closes a door that was theirs to open.", fn: "Explain the difference", vocab: [{ term: "verdict", gloss: "定論；判決" }] },
            { text: "Treated as capable adults, students tend to rise to the responsibility; treated as likely failures, many simply give up.", fn: "Reinforce" },
            { text: "The distance between advising and dissuading is the distance between empowering a choice and overriding it.", fn: "Reframe" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the consequences of a policy of dissuasion would clearly outweigh its benefits.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because predictions fail, because bias creeps in, and because ambition matters, institutions should equip students to make wise choices rather than make those choices for them.", fn: "Synthesis" },
            { text: "Education should widen the range of what a young person might become, not quietly shrink it.", fn: "Reinforce" },
            { text: "A school's task is to open doors and tell the truth about what lies beyond them, not to bar the doors it doubts a student can walk through.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-014",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Governments should not fund any scientific research whose consequences are unclear.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that distinguishes the ordinary uncertainty of discovery from genuinely foreseeable danger, showing where withholding funds helps and where it would be ruinous; fluent and well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Caution sounds like wisdom, and refusing to fund research whose consequences are unclear can look like simple prudence with public money.", fn: "Hook (the appeal of caution)", vocab: [{ term: "prudence", gloss: "審慎；謹慎" }] },
            { text: "The recommendation would have governments withhold funding from any research whose outcomes cannot be foreseen.", fn: "Context (the recommendation)" },
            { text: "Yet I strongly disagree, because the unclear consequence is the normal condition of discovery, and a government that funded only research with predictable results would extinguish the very science that has transformed human life.", fn: "Thesis statement (clear position)", moves: ["Yet"] },
          ],
        },
        {
          role: "Body — Uncertainty is the nature of research",
          sentences: [
            { text: "First, to demand clear consequences before funding is to misunderstand what research actually is.", fn: "Topic sentence", moves: ["First"] },
            { text: "By definition, genuinely new inquiry ventures into the unknown, and if its results could be foreseen it would scarcely be worth doing.", fn: "Explanation" },
            { text: "No one funding early work on electricity, on radio waves, or on the structure of DNA could have described the consequences, which turned out to be the modern world.", fn: "Example" },
            { text: "Apply the recommendation honestly and almost all basic science would lose its support, since its payoffs are precisely what cannot be predicted in advance.", fn: "State the consequence" },
            { text: "Almost every transformative technology began as research whose eventual uses no one involved could have named.", fn: "Reinforce" },
            { text: "Uncertainty, in short, is not a flaw in such research but its defining feature.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The hidden cost would be immense",
          sentences: [
            { text: "Moreover, the long-term cost of such a policy would be enormous and largely invisible.", fn: "Pivot", moves: ["Moreover"] },
            { text: "The breakthroughs that cure diseases and power economies almost always begin as curiosity-driven work with no obvious application.", fn: "Explanation" },
            { text: "The mathematics behind modern encryption was once pure abstraction, and the biology behind gene editing began as an obscure study of how bacteria defend themselves.", fn: "Example", vocab: [{ term: "encryption", gloss: "加密" }] },
            { text: "A nation that funded only the foreseeable would hand these gifts to bolder rivals and slowly fall behind.", fn: "Consequence" },
            { text: "The country that waits for certainty before investing will always be importing the discoveries that braver nations dared to make.", fn: "Reinforce" },
            { text: "Worse still, the benefits forgone can never be counted, because no one mourns the cures and inventions that were never allowed to begin.", fn: "Invisible-cost point" },
            { text: "What looks like thrift would, over decades, prove to be the most expensive policy of all.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The legitimate kernel of caution",
          sentences: [
            { text: "There is, admittedly, a reasonable worry buried inside the recommendation.", fn: "Concede the legitimate concern" },
            { text: "Some research carries clearly foreseeable dangers — engineering deadlier pathogens, for instance — and there it is right to demand caution or to refuse funding outright.", fn: "Develop the concern", vocab: [{ term: "pathogens", gloss: "病原體" }] },
            { text: "But that is a case of consequences that are ominously clear, not unclear, which is the very opposite of what the recommendation describes.", fn: "Rebut" },
            { text: "The sensible policy restricts research whose harms are foreseeable and grave, while funding generously the vast remainder whose benefits are merely unknown.", fn: "Explain the better rule" },
            { text: "The real test is not whether the outcome is clear, but whether the foreseeable risk is one we should accept.", fn: "Clarify the rule" },
            { text: "Uncertainty is a reason to investigate, not a reason to refuse.", fn: "Reframe" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the recommendation mistakes the ordinary uncertainty of discovery for a danger to be avoided.", fn: "Restate", vocab: [{ term: "uncertainty", gloss: "不確定性" }], moves: ["In conclusion"] },
            { text: "Governments should indeed scrutinize research whose harms are clear and serious, but should fund freely the open-ended inquiry whose consequences no one can yet foresee.", fn: "Synthesis", vocab: [{ term: "scrutinize", gloss: "仔細審查" }] },
            { text: "A wise government distinguishes the merely unknown from the genuinely dangerous, funding the first while restraining the second.", fn: "Reinforce" },
            { text: "To fund only the predictable is to guarantee a future no more advanced than the present.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-015",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Society should identify those children who have special talents and provide training for them at an early age to develop their talents.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that names the circumstances in which early training helps and those in which early selection harms, and qualifies the policy accordingly; concrete examples and a clear stance.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is natural to want to nurture exceptional talent, and starting early can seem the obvious way to turn promise into achievement.", fn: "Hook" },
            { text: "The recommendation urges society to identify children with special talents and to train them intensively from an early age.", fn: "Context (the recommendation)" },
            { text: "Early cultivation of talent can be valuable in the right circumstances, but as a general policy the recommendation carries serious risks, and whether it helps or harms depends entirely on how it is carried out.", fn: "Thesis statement (qualified position)", vocab: [{ term: "cultivation", gloss: "培養；栽培" }] },
          ],
        },
        {
          role: "Body — Where early training helps",
          sentences: [
            { text: "In certain fields, early and intensive training is genuinely close to necessary.", fn: "Topic sentence" },
            { text: "Violinists, gymnasts, and chess players who begin in childhood develop abilities that are difficult or impossible to acquire later, when the body and brain are less pliable.", fn: "Example", vocab: [{ term: "pliable", gloss: "可塑的；易塑造的" }] },
            { text: "Where a skill depends on years of practice during a developmental window, identifying talent early lets a child make the most of a fleeting opportunity.", fn: "Explanation", vocab: [{ term: "developmental", gloss: "發展的；發育的" }] },
            { text: "Miss the window for a concert pianist or an Olympic gymnast, and no amount of later effort will fully close the gap.", fn: "Reinforce" },
            { text: "A violin or a pair of figure skates placed in young hands at the right moment can quietly shape an entire life.", fn: "Reinforce" },
            { text: "In these circumstances the recommendation is sound and even generous, since to delay would be to waste the very years that matter most.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Where it misjudges children",
          sentences: [
            { text: "However, applied broadly the policy runs into a stubborn problem: childhood talent is a poor predictor of adult achievement.", fn: "Pivot", moves: ["However"] },
            { text: "Many gifted children plateau, while many ordinary ones bloom late, so any system that sorts the young into talented and ordinary will misjudge enormous numbers of them.", fn: "Example", vocab: [{ term: "plateau", gloss: "停滯不前；進入平台期" }] },
            { text: "Worse, the children labeled untalented may be quietly written off and denied the encouragement that might have revealed their gifts.", fn: "Strengthen the objection", moves: ["Worse"] },
            { text: "Labels handed out early have a way of hardening into expectations that trail a child for years.", fn: "Labeling point" },
            { text: "Children develop at wildly different rates, so a snapshot taken at six tells us far less than it appears to.", fn: "Develop" },
            { text: "A policy that picks winners at the age of six is bound to be wrong about a great many of them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The costs of pressure and inequality",
          sentences: [
            { text: "There is also a real cost to the children themselves and to fairness.", fn: "Topic sentence" },
            { text: "Intensive early training can rob a child of an ordinary childhood and impose a pressure that produces burnout rather than brilliance.", fn: "Example", vocab: [{ term: "burnout", gloss: "倦怠；身心俱疲" }] },
            { text: "And because wealthy families can spot and fund talent far more easily, a formal program risks widening rather than narrowing the gap between rich and poor.", fn: "Develop the inequity" },
            { text: "A childhood spent wholly in training for one pursuit can leave a person narrow, fragile, and unready for a life that rarely goes to plan.", fn: "Reinforce" },
            { text: "Talent that depends on early investment will too often turn out to mean the talent that money happened to notice.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the recommendation is wise in some circumstances and dangerous in others.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Society should certainly nurture exceptional ability, especially where a developmental window makes early training essential, but it should do so through broad and flexible opportunity rather than rigid early selection.", fn: "Synthesis" },
            { text: "Genuine talent, given broad opportunity, has a way of announcing itself in time.", fn: "Reinforce" },
            { text: "The aim should be to give every child the chance to discover a talent, not to decide at six which children are permitted to have one.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-016",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "It is primarily through our identification with social groups that we define ourselves.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a nuanced reading that grants the shaping power of groups while arguing that individual experience and the capacity to resist a group are equally central to the self; well organized and thoughtful.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Ask people who they are and they will often answer with groups: their nationality, their religion, their profession, their family, their team.", fn: "Hook" },
            { text: "The statement builds on this familiar fact to claim that it is primarily through our identification with social groups that we define ourselves.", fn: "Context (the statement)" },
            { text: "Social groups undeniably shape who we are, but the statement overstates their role, because individual experience, personal choice, and even the act of resisting our groups are just as central to the self.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Groups do shape us",
          sentences: [
            { text: "It is true that social groups supply much of the raw material of identity.", fn: "Concession (topic sentence)", vocab: [{ term: "identity", gloss: "身份；自我認同" }], moves: ["It is true that"] },
            { text: "The language we think in, the values we absorb, the religion or nation we are born into all arrive before we can choose them and shape us profoundly.", fn: "Example" },
            { text: "We understand ourselves partly through belonging and contrast, as members of this family, that profession, this generation, and those labels genuinely organize a life.", fn: "Explanation" },
            { text: "Even our deepest convictions usually arrive wrapped in the assumptions of some community that first taught them to us.", fn: "Reinforce" },
            { text: "To this extent the statement is plainly right: no one defines themselves in a vacuum.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Individuality defines us too",
          sentences: [
            { text: "However, to call group identity primary is to underrate everything that makes one member of a group differ from another.", fn: "Pivot", moves: ["However"] },
            { text: "Two siblings raised in the same family, faith, and town can grow into utterly different people, shaped by private experiences, temperaments, and choices no group dictated.", fn: "Example", vocab: [{ term: "temperaments", gloss: "性情；氣質" }] },
            { text: "Much of who we are is forged in solitary moments — a book that changes our mind, a loss that reshapes our values, a decision made against everyone's advice.", fn: "Develop the point", vocab: [{ term: "solitary", gloss: "獨自的；孤獨的" }] },
            { text: "A person is not merely a sample of their categories but a particular history that no category can fully contain.", fn: "Develop" },
            { text: "No two lives are identical, even within the tightest-knit group, and that difference is precisely where the individual self lives.", fn: "Reinforce" },
            { text: "These are not group identities but personal histories, and they often matter most of all.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Defining ourselves against groups",
          sentences: [
            { text: "Moreover, we frequently define ourselves not through our groups but in deliberate opposition to them.", fn: "Pivot", moves: ["Moreover"] },
            { text: "The reformer who breaks with her religion, the immigrant who refuses old expectations, the child who rejects a family trade — each forges an identity precisely by resisting a group.", fn: "Example" },
            { text: "If belonging defined us completely, such rebellion would be impossible, yet the capacity to stand apart is one of the deepest marks of a self.", fn: "Explanation", vocab: [{ term: "rebellion", gloss: "反叛；反抗" }] },
            { text: "The freedom to question, leave, or remake a group is itself a defining mark of being a self rather than a cell in a hive.", fn: "Reinforce" },
            { text: "We are shaped by our groups, but we are plainly not their mere products.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, social groups are a major source of identity but not the single primary one the statement claims.", fn: "Restate", moves: ["In conclusion"] },
            { text: "We define ourselves through a constant negotiation between the groups that shape us and the individual experiences, choices, and refusals that make us distinct.", fn: "Synthesis", vocab: [{ term: "distinct", gloss: "與眾不同的；獨特的" }] },
            { text: "We are, in the end, both members and individuals, and any honest account of identity must hold the two together.", fn: "Reinforce" },
            { text: "The self is neither purely a group's creation nor wholly its own author, but the meeting place of the two.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-017",
    type: "issue",
    category: "Education",
    prompt:
      "College students should be encouraged to pursue subjects that interest them rather than the courses that seem most likely to lead to jobs.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that argues interest itself is practical, then concedes the circumstances in which students need frank career guidance, landing on a balanced position; well developed.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Students arrive at university pulled in two directions: toward the subjects that fascinate them and toward the ones that promise a steady paycheck.", fn: "Hook" },
            { text: "The recommendation urges universities to favor the first, encouraging genuine interest rather than courses chosen mainly for their job prospects.", fn: "Context (the recommendation)" },
            { text: "I largely agree that universities should encourage interest, because interest is what produces excellence and durable skills, though in some circumstances they also owe students a frank word about the job market.", fn: "Thesis statement (qualified position)", vocab: [{ term: "excellence", gloss: "卓越；優異" }] },
          ],
        },
        {
          role: "Body — Interest is itself practical",
          sentences: [
            { text: "First, encouraging students toward what genuinely interests them tends to produce better students and, in the end, better workers.", fn: "Topic sentence", moves: ["First"] },
            { text: "A young man who studies history because he loves it will read more, think harder, and write better than one grinding joylessly through a practical major he never wanted.", fn: "Example" },
            { text: "Employers ultimately reward the sharp, the curious, and the capable, and those qualities grow far more readily from passion than from grim calculation.", fn: "Explanation" },
            { text: "Passion is what sustains the long, unglamorous hours of study that genuine competence quietly demands.", fn: "Reinforce" },
            { text: "In this sense the recommendation is not naive but shrewd: interest, properly understood, is itself a form of practicality.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Skills outlast jobs",
          sentences: [
            { text: "Moreover, the specific jobs a degree seems to target are a shifting and unreliable foundation.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Industries that look safe when a freshman enrolls can be automated or upended by the time she graduates, while the abilities a deep education builds — reasoning, communication, the habit of learning itself — never go out of date.", fn: "Example" },
            { text: "Universities serve students best by cultivating these lasting capacities, which interest-driven study develops far more reliably than anxious course-shopping for employability.", fn: "Explanation", vocab: [{ term: "employability", gloss: "就業能力" }] },
            { text: "The most valuable graduates are not those who memorized a trade but those who learned how to keep learning.", fn: "Reinforce" },
            { text: "To chase the job market is to aim at a target that keeps moving; to pursue genuine interest is to build something that lasts.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The qualifying circumstance",
          sentences: [
            { text: "There are, however, circumstances in which encouraging interest alone would be irresponsible.", fn: "Pivot", moves: ["however"] },
            { text: "A student shouldering crushing debt, or one with a family to support, cannot treat the job market as a triviality, and a university that ignored this would fail them.", fn: "Concede the concern" },
            { text: "But encouraging interest and informing students about careers are not opposites; the wise institution does both at once.", fn: "Rebut" },
            { text: "It should fire students' curiosity while also giving them honest data about outcomes, so that they pursue what they love with their eyes open.", fn: "Explain how", vocab: [{ term: "curiosity", gloss: "好奇心" }] },
            { text: "Telling students the truth about careers does not discourage interest; it takes their futures seriously.", fn: "Reframe" },
            { text: "Ignoring money would be a luxury available only to students who already have plenty of it.", fn: "Concede further" },
            { text: "Encouragement and honesty are partners, not rivals.", fn: "Reframe" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, universities are right to encourage interest over mere employability.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Interest drives the excellence and adaptable skill that actually lead to good work, and a degree pursued with real passion is rarely wasted.", fn: "Synthesis", vocab: [{ term: "adaptable", gloss: "適應力強的；可調適的" }] },
            { text: "A university that inspires and informs in equal measure serves its students far better than one that manages only one.", fn: "Reinforce" },
            { text: "The ideal is to send students toward what they love while making sure they understand the world that awaits them, so that interest and prudence walk together rather than apart.", fn: "Final judgment", vocab: [{ term: "prudence", gloss: "審慎；謹慎" }] },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-018",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: When planning courses, educators should take into account the interests and suggestions of their students. Reason: Students are more motivated to learn when they are interested in what they are studying.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): correctly addresses both the claim and the reason and tests whether the reason supports the claim; clear and well organized, though the analysis could probe the limits a little more deeply.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Few teachers would deny that a bored class learns little, and the call to consult students about what they study has obvious appeal.", fn: "Hook" },
            { text: "The claim holds that educators should take students' interests and suggestions into account when planning courses, and it rests on the reason that students are more motivated to learn when they are interested in the material.", fn: "Context (claim and reason)" },
            { text: "The reason is largely true and the claim is partly right, but the reason does not justify the claim as fully as it first appears, because motivation is not the only aim of education and students do not always know what they most need to learn.", fn: "Thesis statement (evaluate both)" },
          ],
        },
        {
          role: "Body — The reason is sound",
          sentences: [
            { text: "First, the reason on which the claim rests is well supported.", fn: "Topic sentence (assess the reason)", moves: ["First"] },
            { text: "Interest is one of the strongest engines of learning; a student curious about a subject reads beyond the assignment, remembers more, and persists through difficulty.", fn: "Example" },
            { text: "A teacher who connects a lesson to what students actually care about will almost always reach them more effectively than one who lectures at them indifferently.", fn: "Explanation" },
            { text: "We learn fastest when we genuinely want to know the answer, which is why one gripping question can teach more than a week of dull drills.", fn: "Reinforce the reason" },
            { text: "So the reason is not really in doubt: interest genuinely fuels motivation, and motivation genuinely aids learning.", fn: "Sub-conclusion", vocab: [{ term: "motivation", gloss: "動機；動力" }] },
          ],
        },
        {
          role: "Body — So the claim has real merit",
          sentences: [
            { text: "Because the reason holds, the claim has genuine merit as well.", fn: "Topic sentence (the reason supports a modest claim)" },
            { text: "An educator who takes students' interests into account — choosing examples they find relevant, leaving room for topics they raise — will teach a more engaged and successful class.", fn: "Explanation", vocab: [{ term: "engaged", gloss: "投入的；專注的" }] },
            { text: "A literature teacher who lets students help choose some of the novels, or a science teacher who builds a unit around a question the class asked, harnesses motivation that a fixed syllabus would simply waste.", fn: "Example", vocab: [{ term: "syllabus", gloss: "教學大綱；課程綱要" }] },
            { text: "Inviting students into the planning also teaches them to take some responsibility for their own learning.", fn: "Develop" },
            { text: "To this extent, the claim follows sensibly from its reason.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But the reason proves less than the full claim",
          sentences: [
            { text: "However, the reason proves less than the strongest version of the claim may be taken to assert.", fn: "Pivot (test the link)", moves: ["However"] },
            { text: "Motivation is essential, but it is not the only goal of education, which must also teach things students do not yet find interesting and could not think to suggest.", fn: "Limit the claim" },
            { text: "A child may have no interest in fractions, grammar, or history, yet a curriculum guided mainly by student preference would quietly abandon exactly the difficult, unglamorous knowledge that schooling exists to transmit.", fn: "Example", vocab: [{ term: "curriculum", gloss: "課程" }, { term: "transmit", gloss: "傳授；傳遞" }] },
            { text: "Students, by definition, do not yet know the subject, so they cannot always judge what is worth learning, and an educator who simply deferred to their suggestions would sometimes be following the less informed.", fn: "Explanation" },
            { text: "Left entirely to choose, few children would ever ask to practice the very skills they will most need as adults.", fn: "Reinforce the limit" },
            { text: "Interest should inform the planning of courses, but it cannot be allowed to govern it, and the reason — true as it is — supports the modest claim, not the sweeping one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the reason is valid and the claim is right in a modest form.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Educators should certainly take students' interests into account, because motivation genuinely aids learning, but they should weigh those interests alongside their own expert judgment about what students truly need.", fn: "Synthesis" },
            { text: "The teacher's expertise lies precisely in knowing what students cannot yet know to want.", fn: "Aphoristic" },
            { text: "Consulting students is wise; surrendering the curriculum to them is not, and that gap is exactly the gap between the reason and the strongest reading of the claim.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-019",
    type: "issue",
    category: "The Individual",
    prompt:
      "The greatness of individuals can be decided only by those who live after them, not by their contemporaries.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a balanced reading that grants posterity's perspective while showing that contemporaries often see greatness clearly and that later ages bring distortions of their own; well organized and thoughtful.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "History is full of geniuses who died unknown and frauds who were celebrated in their own day, which lends the statement an immediate plausibility.", fn: "Hook" },
            { text: "It claims that the greatness of individuals can be judged only by those who come after them, never by their contemporaries.", fn: "Context (the statement)" },
            { text: "Posterity certainly enjoys advantages of perspective that the present lacks, but the word only overstates the case, because contemporaries often recognize greatness clearly, and later generations bring distortions of their own.", fn: "Thesis statement (qualified position)", vocab: [{ term: "perspective", gloss: "觀點；眼界" }] },
          ],
        },
        {
          role: "Body — Time confers clarity",
          sentences: [
            { text: "It is true that time confers a clarity the present cannot have.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Contemporaries are swept up in fashions, rivalries, and prejudices that make a fair judgment difficult.", fn: "Reason", vocab: [{ term: "prejudices", gloss: "偏見" }] },
            { text: "Van Gogh sold almost nothing in his lifetime, and Mendel's discoveries in genetics were ignored for decades before later scientists grasped their importance.", fn: "Example" },
            { text: "Only after the noise of an era fades can the lasting value of a person's work be weighed against everything that came before and after.", fn: "Explanation" },
            { text: "Many a politician adored in office looks small a century later, while quiet figures overlooked at the time loom large.", fn: "Develop" },
            { text: "A reputation needs time to be tested against changing tastes, rival claims, and the eventual verdict of results.", fn: "Develop" },
            { text: "In this sense the statement captures something real: distance can reveal what proximity hides.", fn: "Sub-conclusion", vocab: [{ term: "proximity", gloss: "鄰近；近距離" }] },
          ],
        },
        {
          role: "Body — Contemporaries see greatness too",
          sentences: [
            { text: "However, to say that only posterity can judge is to ignore how often greatness is recognized in its own time.", fn: "Pivot", moves: ["However"] },
            { text: "Shakespeare was celebrated by his contemporaries, Newton was honored across Europe in his lifetime, and Lincoln was mourned by millions who already sensed his stature.", fn: "Example" },
            { text: "The people who actually witness a discovery, a performance, or an act of leadership often grasp its power more vividly than those who later read about it.", fn: "Explanation" },
            { text: "A scientist's peers are frequently the best placed of all to judge the importance of her work, since they alone fully understand the problem she solved.", fn: "Develop" },
            { text: "Audiences who wept at a symphony's premiere were not mistaken about its power simply because they happened to live too early to be objective.", fn: "Reinforce" },
            { text: "Contemporary judgment is not always wrong; it is merely incomplete, as every judgment is.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Posterity has its own biases",
          sentences: [
            { text: "Moreover, later generations are not the impartial jury the statement imagines.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Each age rewrites the past to suit its own values, elevating figures it finds useful and burying those who have fallen out of fashion.", fn: "Example" },
            { text: "A reputation can rise and fall many times across the centuries, so posterity delivers not a single final verdict but an endless series of revisions.", fn: "Explanation", vocab: [{ term: "verdict", gloss: "定論；裁決" }] },
            { text: "If contemporaries are biased by being too close, descendants are biased by being too far, judging across a gulf of changed assumptions they barely notice.", fn: "Develop" },
            { text: "The final judgment of history is really just the opinion of whichever age happens to be speaking at the moment.", fn: "Sharpen" },
            { text: "There is no privileged vantage point from which greatness is seen plainly and forever.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement is right that time adds perspective but wrong to make posterity the sole judge.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Greatness is assessed in a long conversation between an age and all the ages that follow, each correcting the others without any reaching the final word.", fn: "Synthesis" },
            { text: "Greatness, in the end, is less a fixed fact to be discovered than a reputation continually argued over.", fn: "Reinforce" },
            { text: "We should trust neither the applause of the present nor the verdict of the future entirely, but listen, with appropriate humility, to both.", fn: "Final judgment", vocab: [{ term: "humility", gloss: "謙遜" }] },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-020",
    type: "issue",
    category: "Education",
    prompt:
      "Students should always question what they are taught instead of accepting it passively.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that questioning is essential, then qualifies the absolute always by showing that foundations must first be absorbed and that questioning must be selective; clear and well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A good education is meant to produce independent thinkers rather than parrots, so the call for students to question what they are taught has obvious appeal.", fn: "Hook" },
            { text: "The statement urges students to always question their lessons rather than accept anything passively.", fn: "Context (the statement)" },
            { text: "Questioning is indeed essential to real learning, but the word always pushes a sound principle too far, because some knowledge must first be absorbed before it can be intelligently questioned at all.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Questioning is essential",
          sentences: [
            { text: "It is true that passive acceptance is the enemy of genuine understanding.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "A student who merely memorizes and repeats has learned to obey rather than to think, and forgets the material the moment the exam ends.", fn: "Reason" },
            { text: "The great advances of science and reform came from people who refused to accept received wisdom, from Galileo questioning the heavens to reformers questioning unjust laws.", fn: "Example" },
            { text: "Questioning forces a student to understand why something is true, to find its limits, and to own the knowledge rather than merely rent it.", fn: "Explanation" },
            { text: "A classroom that rewards obedience over curiosity produces graduates who can recite but cannot reason.", fn: "Develop", vocab: [{ term: "curiosity", gloss: "好奇心" }] },
            { text: "Progress in almost every field began with someone unwilling to take the textbook's word for it.", fn: "Reinforce" },
            { text: "In this respect the statement is plainly right: questioning is the engine of understanding.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But foundations come first",
          sentences: [
            { text: "However, to question everything always is neither possible nor wise.", fn: "Pivot", moves: ["However"] },
            { text: "A beginner cannot meaningfully question calculus before learning arithmetic, or debate history before learning what happened, because the raw materials of thought must be acquired before they can be challenged.", fn: "Example" },
            { text: "There is a stage in every subject when a student must trust the teacher enough to absorb the basics, just as an apprentice copies before he creates.", fn: "Explanation" },
            { text: "To demand that a child question the multiplication table or the spelling of words is not independence but paralysis.", fn: "Develop", vocab: [{ term: "paralysis", gloss: "癱瘓；停滯" }] },
            { text: "No one reinvents mathematics from scratch before daring to use it.", fn: "Sharpen" },
            { text: "Even the boldest critic must stand on a great deal of knowledge he has simply accepted on trust.", fn: "Reinforce" },
            { text: "Acceptance, at the right moment, is not passivity but the foundation on which later questioning is built.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Question well, not reflexively",
          sentences: [
            { text: "Moreover, the value lies not in questioning constantly but in questioning well.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Reflexive doubt that challenges everything indiscriminately is as lazy as blind acceptance, merely contrarian rather than thoughtful.", fn: "Point", vocab: [{ term: "contrarian", gloss: "為反對而反對的；唱反調的" }] },
            { text: "The educated mind knows when to absorb and when to interrogate, trusting established knowledge while staying alert to its weaknesses.", fn: "Explanation" },
            { text: "Real critical thinking is selective: it spends its skepticism where it is warranted rather than scattering it everywhere at once.", fn: "Develop", vocab: [{ term: "skepticism", gloss: "懷疑；質疑" }] },
            { text: "To question wisely, a student must first know enough to tell a real weakness from an imagined one.", fn: "Develop" },
            { text: "Wisdom is knowing which lessons to question and which to learn first.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, students should question what they are taught, but not always and not everything at once.", fn: "Restate", moves: ["In conclusion"] },
            { text: "They should absorb the foundations a subject requires and then question actively as their understanding grows, treating acceptance and inquiry as stages rather than enemies.", fn: "Synthesis", vocab: [{ term: "inquiry", gloss: "探究；質問" }] },
            { text: "Curiosity without foundations is mere noise; foundations without curiosity are dead weight.", fn: "Aphoristic" },
            { text: "The goal is not a student who doubts everything, but one who knows when to learn and when to challenge.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-021",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The increasingly rapid pace of life today causes more problems than it solves.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): clearly organized, with relevant examples on both sides and a sensible thesis that the harms come from how we use speed; the analysis is sound though it stays fairly general.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Modern life moves fast: messages arrive in seconds, news refreshes by the minute, and the patient rhythms of earlier centuries can feel impossibly distant.", fn: "Hook" },
            { text: "Many conclude, as the statement does, that this accelerating pace causes more problems than it solves.", fn: "Context (the statement)" },
            { text: "The complaint points to real harms, but I disagree with its verdict, because the speed of modern life is largely a by-product of genuine progress, and most of its problems come from how we use that speed rather than from speed itself.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — The pace reflects real gains",
          sentences: [
            { text: "First, the rapid pace is inseparable from advances that have plainly improved life.", fn: "Topic sentence", moves: ["First"] },
            { text: "A doctor can now receive test results in minutes, a family scattered across continents can speak every day, and a question that once required a library can be answered instantly.", fn: "Example" },
            { text: "The same speed that feels overwhelming also saves lives, reunites people, and spreads knowledge at a scale earlier ages could not imagine.", fn: "Explanation" },
            { text: "What we experience as hurry is often just the felt side of efficiency, of doing in an hour what once took a week.", fn: "Develop", vocab: [{ term: "efficiency", gloss: "效率" }] },
            { text: "Speed has dissolved distances that once kept families, ideas, and opportunities apart for whole lifetimes.", fn: "Reinforce" },
            { text: "To call this a net loss is to forget how slow, and how limited, life used to be.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The problems are real",
          sentences: [
            { text: "However, it would be foolish to deny that the acceleration brings genuine harm.", fn: "Pivot", moves: ["However"] },
            { text: "Constant haste breeds stress and exhaustion, encourages shallow attention over deep thought, and leaves little room for the patience that good work and real relationships require.", fn: "Example", vocab: [{ term: "exhaustion", gloss: "疲憊；精疲力竭" }] },
            { text: "When everything demands an instant response, people react rather than reflect, and important matters get the same hurried treatment as trivial ones.", fn: "Explanation", vocab: [{ term: "trivial", gloss: "瑣碎的；微不足道的" }] },
            { text: "A culture that never pauses risks losing the slow pleasures — reading, conversation, rest — that give life much of its meaning.", fn: "Develop" },
            { text: "A mind perpetually interrupted rarely produces the patient, sustained thought that real achievement requires.", fn: "Develop" },
            { text: "These costs are real, and dismissing them would be as foolish as denying the benefits.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Mastery, not speed, is the issue",
          sentences: [
            { text: "Moreover, the deepest point is that these harms flow from how we manage speed, not from speed as such.", fn: "Pivot", moves: ["Moreover"] },
            { text: "A phone that can interrupt us every minute does not have to, since the same tool can be silenced, scheduled, and set aside.", fn: "Example" },
            { text: "The rapid pace becomes a problem mainly when we let it dictate our attention instead of directing it ourselves.", fn: "Explanation" },
            { text: "Individuals and societies that build in deliberate pauses — protected time, slower rituals, limits on the always-on — enjoy the speed without drowning in it.", fn: "Develop", vocab: [{ term: "deliberate", gloss: "刻意的；從容的" }] },
            { text: "The same notification that distracts one person is the alert that lets another respond to an emergency in time.", fn: "Two-sided point" },
            { text: "Speed is a tool, and like any tool it harms only the hand that wields it carelessly.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the rapid pace of modern life solves more than it causes, provided we learn to govern it.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Its problems are real but largely self-inflicted, the price of using a powerful capacity without discipline rather than an inevitable curse of the capacity itself.", fn: "Synthesis", vocab: [{ term: "discipline", gloss: "自律；紀律" }] },
            { text: "Blaming the clock conveniently spares us the harder task of examining our own habits.", fn: "Sharpen" },
            { text: "The answer is not to slow the world down but to master our own pace within it.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-022",
    type: "issue",
    category: "Technology",
    prompt:
      "Claim: It is no longer possible for a society to regard any living man or woman as a hero. Reason: The reputation of anyone who is subjected to media scrutiny will eventually be diminished.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): correctly separates the reason from the claim, granting that scrutiny tarnishes reputations while arguing that heroism never required perfection, so the claim does not follow; coherent and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We seem to delight in tearing down the people we once admired, and every week brings a fresh revelation about some public figure's feet of clay.", fn: "Hook" },
            { text: "The claim concludes from this that no living man or woman can any longer be regarded as a hero, and it rests on the reason that media scrutiny will eventually diminish anyone's reputation.", fn: "Context (claim and reason)" },
            { text: "The reason contains a real truth, but it does not support the claim, because heroism has never required a flawless life, and the exposure of imperfection does not abolish the possibility of admiration.", fn: "Thesis statement (evaluate both)" },
          ],
        },
        {
          role: "Body — The reason is partly true",
          sentences: [
            { text: "First, the reason describes something genuinely characteristic of our age.", fn: "Topic sentence (assess the reason)", moves: ["First"] },
            { text: "Relentless media coverage now follows public figures into their private lives, and few reputations survive that exposure entirely intact.", fn: "Example" },
            { text: "Where earlier heroes were known only through carefully controlled images, today's are photographed, recorded, and investigated until their flaws become public property.", fn: "Explanation" },
            { text: "Even genuinely admirable people turn out, on close inspection, to be vain, inconsistent, or unkind in some corner of their lives.", fn: "Develop" },
            { text: "A single embarrassing clip can now travel further in a day than a lifetime of quiet good deeds.", fn: "Reinforce" },
            { text: "So the reason is not wrong: scrutiny does tend to tarnish reputations that distance once kept shining.", fn: "Sub-conclusion", vocab: [{ term: "scrutiny", gloss: "審視；細察" }] },
          ],
        },
        {
          role: "Body — But heroism never meant perfection",
          sentences: [
            { text: "However, the reason supports the claim only if heroism requires a spotless life, and it never has.", fn: "Pivot (break the link)", moves: ["However"] },
            { text: "A hero is someone who does something brave, generous, or great, not someone who is perfect in every respect.", fn: "Point" },
            { text: "The soldier who saves his comrades, the doctor who serves the dying, the dissident who defies a tyrant — each is heroic for a deed, whatever their private failings.", fn: "Example", vocab: [{ term: "dissident", gloss: "異議人士" }] },
            { text: "To demand moral perfection before we will admire anyone is to misunderstand what admiration is for, since we honor the act and not the saint.", fn: "Explanation" },
            { text: "Indeed, knowing that heroes are flawed people who rose to a great occasion makes their courage more inspiring, not less, because it shows that ordinary humans are capable of it.", fn: "Develop" },
            { text: "We do not stop calling a firefighter brave because we learn that he is also short-tempered at home.", fn: "Concrete rebuttal" },
            { text: "The exposure of weakness does not destroy heroism; it merely strips away the illusion that heroes are gods.", fn: "Sub-conclusion", vocab: [{ term: "illusion", gloss: "錯覺；幻象" }] },
          ],
        },
        {
          role: "Body — Living heroes still exist",
          sentences: [
            { text: "Moreover, the claim is plainly contradicted by everyday experience.", fn: "Pivot", moves: ["Moreover"] },
            { text: "People around the world still revere living figures — humanitarians, scientists, ordinary rescuers — whose specific deeds earn genuine admiration despite full knowledge of their humanity.", fn: "Example", vocab: [{ term: "revere", gloss: "崇敬；敬仰" }] },
            { text: "What has changed is not the possibility of heroism but the naivety of hero-worship, for we now admire with our eyes open.", fn: "Explanation", vocab: [{ term: "naivety", gloss: "天真；幼稚" }] },
            { text: "That is arguably healthier, since a society that can honor real, fallible people is less likely to be betrayed by the idols it once pretended were perfect.", fn: "Develop" },
            { text: "Admiration survives disillusionment whenever it was attached to a deed rather than to a fantasy of perfection.", fn: "Develop" },
            { text: "Scrutiny has changed how we admire, not whether we can.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the reason is partly true but the claim simply does not follow from it.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Media scrutiny does diminish inflated reputations, but heroism was never about flawlessness, so its exposure of human weakness leaves the real thing intact.", fn: "Synthesis" },
            { text: "Maturity in admiration is not the loss of heroes but the gain of honesty about them.", fn: "Reinforce" },
            { text: "We can still regard the living as heroes; we have merely learned to admire them as people rather than worship them as myths.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-023",
    type: "issue",
    category: "Education",
    prompt:
      "Competition for high grades seriously limits the quality of learning at all levels of education.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): largely agrees with strong, well-developed reasons about how grade competition distorts learning, then fairly concedes the value of mild rivalry before reaffirming the position; persuasive and well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "From a child's first gold star to a university honors list, education runs on grades, and students compete fiercely to earn the highest ones.", fn: "Hook" },
            { text: "The statement charges that this competition for high grades seriously limits the quality of learning at every level of education.", fn: "Context (the statement)" },
            { text: "I largely agree, because the pursuit of grades tends to crowd out the curiosity, risk-taking, and depth that real learning requires, even though a measured amount of competition can spur effort.", fn: "Thesis statement (largely agree)" },
          ],
        },
        {
          role: "Body — Grades replace learning as the goal",
          sentences: [
            { text: "First, fierce grade competition quietly changes what students are actually trying to do.", fn: "Topic sentence", moves: ["First"] },
            { text: "Their goal stops being to understand and becomes to score, and the two are not the same thing.", fn: "Point" },
            { text: "A student chasing an A learns what the test rewards, memorizes what will be marked, and forgets it the moment the grade is recorded.", fn: "Example" },
            { text: "Curiosity, the natural desire to know, withers when every question becomes a calculation about marks.", fn: "Explanation", vocab: [{ term: "curiosity", gloss: "好奇心" }] },
            { text: "An education meant to open minds instead trains students to ask only one question: will this be on the exam?", fn: "Develop" },
            { text: "Ask a class what grade they received and they can tell you instantly; ask what they actually learned and they often cannot.", fn: "Reinforce" },
            { text: "When the grade becomes the point, learning becomes a means to it, and often a casualty of it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Competition discourages risk and depth",
          sentences: [
            { text: "Moreover, competing for grades pushes students away from exactly the behavior that deep learning demands.", fn: "Pivot", moves: ["Moreover"] },
            { text: "A student worried about her ranking avoids hard courses where she might stumble, sticks to safe topics, and never risks the bold mistakes from which people learn most.", fn: "Example" },
            { text: "Real understanding requires struggling with difficult material and being willing to be wrong, yet a grading contest punishes precisely that.", fn: "Explanation" },
            { text: "It also corrodes cooperation, turning classmates who might have learned together into rivals guarding their advantage.", fn: "Develop", vocab: [{ term: "cooperation", gloss: "合作" }, { term: "corrodes", gloss: "侵蝕；逐漸損害" }] },
            { text: "Fear of a lower mark teaches caution, and caution is the quiet enemy of discovery.", fn: "Sharpen" },
            { text: "A system that rewards looking smart over becoming smart limits learning at its very root.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The qualification",
          sentences: [
            { text: "However, it would be an exaggeration to call all competition harmful.", fn: "Pivot", moves: ["However"] },
            { text: "A degree of healthy rivalry can motivate effort, and the prospect of falling behind pushes some students to work who would otherwise drift.", fn: "Concede", vocab: [{ term: "rivalry", gloss: "競爭；對抗" }] },
            { text: "But the statement speaks of competition that seriously limits learning, and that describes the obsessive, high-stakes grading that dominates most schools, not the mild kind.", fn: "Rebut" },
            { text: "The problem is not a little friendly comparison but a system in which a single number can decide a future, making the grade matter more than the knowledge it supposedly measures.", fn: "Explain" },
            { text: "A little ambition is healthy, but an arms race over ranking is not.", fn: "Reinforce" },
            { text: "Competition energizes in small doses and corrupts in large ones, and education has chosen the large dose.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement is largely right: the intense competition for grades does seriously limit the quality of learning.", fn: "Restate", moves: ["In conclusion"] },
            { text: "By making the score the goal, discouraging risk, and poisoning cooperation, the grade chase undermines the very understanding it claims to measure.", fn: "Synthesis" },
            { text: "Grades should serve learning, not the other way around.", fn: "Aphoristic" },
            { text: "Schools need not abolish all assessment, but they should loosen its grip, so that students compete once again to learn rather than merely to be ranked.", fn: "Final judgment", vocab: [{ term: "assessment", gloss: "評量；評估" }] },
          ],
        },
      ],
    },
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
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that separates the circumstances in which student input helps from those in which it would gut the curriculum, and reframes the educator's duty; clear and well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It sounds democratic and humane to ask students what they want to learn and then teach them exactly that.", fn: "Hook" },
            { text: "The recommendation would have educators discover students' preferences and shape the curriculum to match them.", fn: "Context (the recommendation)" },
            { text: "Consulting students is genuinely valuable, but the recommendation goes too far, because a curriculum built mainly on what students want would shortchange them on the very things an education exists to provide.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Where consulting students helps",
          sentences: [
            { text: "First, in some respects listening to students would clearly improve education.", fn: "Topic sentence", moves: ["First"] },
            { text: "When teachers learn what examples excite a class, which topics it finds dull, and what questions it is burning to ask, they can teach the same material far more effectively.", fn: "Example" },
            { text: "Student input is especially valuable for electives, projects, and the choice of illustrations, where many paths lead equally well to the goal.", fn: "Explanation" },
            { text: "A class that helped shape part of its own course tends to be more engaged and to take more responsibility for the result.", fn: "Develop", vocab: [{ term: "engaged", gloss: "投入的；專注的" }] },
            { text: "Knowing a class is fascinated by space, a physics teacher can smuggle hard equations in aboard a rocket.", fn: "Concrete example" },
            { text: "Within these limits, adopting the recommendation would be a real improvement.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Students cannot judge what they need",
          sentences: [
            { text: "However, the trouble begins the moment preference is allowed to determine the substance of the curriculum.", fn: "Pivot", vocab: [{ term: "curriculum", gloss: "課程" }], moves: ["However"] },
            { text: "Students, by definition, do not yet know a subject, so they cannot reliably judge what is worth learning within it.", fn: "Point" },
            { text: "Few children would request grammar, fractions, or history, yet these unglamorous foundations are exactly what they will need and cannot acquire on their own.", fn: "Example" },
            { text: "An expert curriculum exists precisely to include the difficult, the unfamiliar, and the not-yet-appreciated, the things students would never think to ask for.", fn: "Explanation" },
            { text: "To offer only what students already want is to lock them inside their current horizons rather than expand them.", fn: "Develop", vocab: [{ term: "horizons", gloss: "視野；眼界" }] },
            { text: "The whole point of schooling is to take students somewhere they could not have found on their own.", fn: "Reinforce" },
            { text: "A patient who prescribed his own medicine, or a traveler who mapped a country he had never seen, would fare no better.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The educator's duty",
          sentences: [
            { text: "Moreover, the recommendation quietly misunderstands the educator's role.", fn: "Pivot", moves: ["Moreover"] },
            { text: "A teacher's authority rests on knowing what students do not yet know, including what they do not yet know to want.", fn: "Point" },
            { text: "To hand the design of the curriculum to the very people who came to be educated is to abdicate exactly the expertise they are paying for.", fn: "Explanation", vocab: [{ term: "abdicate", gloss: "放棄（責任、職位）" }] },
            { text: "The consequence would be an education that flatters students' existing tastes while failing to enlarge them, popular in the moment and impoverishing over time.", fn: "Develop", vocab: [{ term: "impoverishing", gloss: "使貧乏；使匱乏" }] },
            { text: "A guide who only ever went where the tourists already wanted to go would not be worth hiring.", fn: "Analogy" },
            { text: "Genuine respect for students lies not in giving them whatever they ask for, but in giving them what will truly serve them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, educators should consult students without surrendering the curriculum to them.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Student preferences should shape how a subject is taught and inform its optional parts, but the core should be set by those who know what an education requires.", fn: "Synthesis" },
            { text: "Listen closely for what excites students, then lead them somewhere they did not yet know they wanted to go.", fn: "Reinforce" },
            { text: "The wise teacher listens carefully to what students want and then teaches them, in part, what they did not yet know to ask for.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-026",
    type: "issue",
    category: "Education",
    prompt:
      "Educators should teach facts only after their students have studied the ideas, trends, and concepts that help explain those facts.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): a recommendation-appropriate response that endorses leading with understanding while showing that facts and concepts cannot be cleanly separated; clear and well organized, though the analysis stays fairly general.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Anyone who has crammed a list of dates only to forget them by morning knows that facts without understanding rarely stick.", fn: "Hook" },
            { text: "From this truth the recommendation draws a rule: that educators should teach facts only after students have studied the ideas, trends, and concepts that explain them.", fn: "Context (the recommendation)" },
            { text: "The recommendation rightly insists that understanding should guide instruction, but its strict ordering is mistaken, because facts and concepts are so intertwined that neither can be fully taught before the other.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Leading with ideas helps",
          sentences: [
            { text: "First, there is genuine wisdom in leading with ideas rather than isolated facts.", fn: "Topic sentence", moves: ["First"] },
            { text: "A fact lodged in a framework of meaning is understood and remembered, while a fact memorized in a vacuum is soon lost.", fn: "Reason", vocab: [{ term: "framework", gloss: "架構；框架" }] },
            { text: "A student who first grasps why empires rise and fall will absorb the dates of particular conquests far more readily than one who merely memorizes them.", fn: "Example" },
            { text: "Concepts act like shelves on which facts can be stored, and without them new information has nowhere to rest.", fn: "Explanation" },
            { text: "This is why the best teachers open a topic with a big question rather than a list of terms, giving students a reason to care about the details to come.", fn: "Develop" },
            { text: "Begin with a fact and many students see only something to be memorized; begin with a question and the same fact becomes an answer they actually wanted.", fn: "Sharpen" },
            { text: "Understanding first, in short, makes the facts that follow meaningful.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Facts and concepts are inseparable",
          sentences: [
            { text: "However, the recommendation's strict sequence — concepts first, facts only afterward — misunderstands how learning actually works.", fn: "Pivot", moves: ["However"] },
            { text: "Concepts are themselves built out of facts, and a student cannot grasp a trend without knowing at least some of the particulars that compose it.", fn: "Point" },
            { text: "One cannot understand the concept of evolution without facts about finches and fossils, or the idea of inflation without facts about prices and wages.", fn: "Example" },
            { text: "Ideas and facts are learned together, each illuminating the other, in a back-and-forth rather than a straight line.", fn: "Explanation", vocab: [{ term: "illuminating", gloss: "闡明；照亮" }] },
            { text: "To withhold all facts until the concepts are mastered would leave students trying to understand explanations of nothing in particular.", fn: "Develop" },
            { text: "Even the youngest reader learns letters and sounds at the same time, not one fully before the other.", fn: "Reinforce" },
            { text: "In practice, every good lesson weaves the two together from the very start.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Emphasis, not sequence",
          sentences: [
            { text: "Moreover, the recommendation is best understood as a matter of emphasis rather than rigid sequence.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Where teaching has degenerated into the rote memorization of disconnected facts, shifting toward concepts would be a clear improvement.", fn: "Concede the legitimate point", vocab: [{ term: "rote", gloss: "死記硬背的" }] },
            { text: "But the goal is integration, not a rule that facts must always wait their turn.", fn: "Rebut", vocab: [{ term: "integration", gloss: "整合；融會貫通" }] },
            { text: "A skilled teacher introduces just enough fact to make a concept graspable, then uses the concept to organize further facts, circling between them.", fn: "Explain how" },
            { text: "Whether to lead with the idea or the example depends on the subject, the students, and the moment, which no universal rule can dictate.", fn: "Develop" },
            { text: "Flexibility, not a fixed order, is what good teaching truly requires.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the recommendation is right that understanding should lead but wrong to bar facts until concepts are mastered.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because facts and ideas are learned together, educators should weave them, emphasizing meaning over memorization without pretending the two can be cleanly separated.", fn: "Synthesis", vocab: [{ term: "memorization", gloss: "死記；記憶" }] },
            { text: "Teach the idea and the fact in conversation, and each will make the other stick.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-027",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: We can usually learn much more from people whose views we share than from those whose views contradict our own. Reason: Disagreement can cause stress and inhibit learning.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): correctly grants the reason a partial truth and then breaks the link, arguing that we learn most from disagreement and that the reason confuses comfort with learning; coherent and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is more pleasant to talk with people who nod along than with those who argue back, and the temptation to stay among the like-minded is strong.", fn: "Hook" },
            { text: "The claim elevates this comfort into a principle — that we usually learn more from people who share our views — and rests it on the reason that disagreement causes stress and inhibits learning.", fn: "Context (claim and reason)" },
            { text: "The reason holds a grain of truth, but it does not support the claim; in fact the opposite is closer to the truth, because we learn most from precisely the disagreement the reason warns against.", fn: "Thesis statement (evaluate both)" },
          ],
        },
        {
          role: "Body — The reason is partly true",
          sentences: [
            { text: "First, the reason is not entirely wrong.", fn: "Topic sentence (assess the reason)", moves: ["First"] },
            { text: "Hostile, contemptuous disagreement can indeed shut a mind down, making a person defensive rather than curious.", fn: "Example", vocab: [{ term: "defensive", gloss: "防衛的；自我防備的" }] },
            { text: "When an exchange feels like an attack, people stop listening and start protecting themselves, and in that state little is learned.", fn: "Explanation" },
            { text: "There is also a comfort in shared assumptions, which lets a conversation move quickly without re-arguing every premise.", fn: "Develop" },
            { text: "So the reason identifies something real: not all disagreement is productive, and stress can certainly impede learning.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But disagreement teaches most",
          sentences: [
            { text: "However, from the fact that hostile disagreement can hinder learning, it does not follow that we learn more from those who agree with us.", fn: "Pivot (break the link)", moves: ["However"] },
            { text: "People who share our views mostly confirm what we already think, and confirmation, however pleasant, teaches us nothing new.", fn: "Point", vocab: [{ term: "confirmation", gloss: "確認；認同" }] },
            { text: "It is the person who disagrees who exposes the flaw in our argument, the fact we overlooked, the possibility we never considered.", fn: "Example" },
            { text: "A debate with a thoughtful opponent forces us to examine our reasons, abandon the weak ones, and strengthen the rest, which is the very definition of learning.", fn: "Explanation" },
            { text: "An echo chamber of agreement, by contrast, leaves our beliefs untested and our knowledge frozen where it began.", fn: "Develop", vocab: [{ term: "echo", gloss: "回聲；附和" }] },
            { text: "Nothing sharpens a belief like the obligation to defend it against someone who genuinely doubts it.", fn: "Reinforce" },
            { text: "We are challenged, corrected, and stretched by those who differ, not by those who simply echo us.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Comfort is not learning",
          sentences: [
            { text: "Moreover, the reason quietly mistakes comfort for learning, which are not the same thing at all.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Learning is frequently uncomfortable precisely because it requires giving up a cherished error, and the mild stress of disagreement is often the feeling of a mind being changed.", fn: "Point" },
            { text: "To avoid that discomfort by seeking only agreement is to trade growth for ease.", fn: "Explanation", vocab: [{ term: "discomfort", gloss: "不適；不安" }] },
            { text: "The stress the reason treats as an obstacle is, within limits, a sign that real intellectual work is taking place.", fn: "Develop" },
            { text: "Growth lives just past the edge of comfort, which is exactly where honest disagreement takes us.", fn: "Sharpen" },
            { text: "What inhibits learning is not disagreement but contempt, and the remedy is to disagree respectfully, not to avoid disagreement altogether.", fn: "Sub-conclusion", vocab: [{ term: "respectfully", gloss: "尊重地；有禮地" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the reason is half true but the claim does not follow from it.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Disagreement can cause stress, but stress is not the same as the absence of learning, and it is from those who challenge our views, not those who share them, that we usually learn the most.", fn: "Synthesis" },
            { text: "Seek out the people who disagree with you well; they, far more than your allies, are the ones who will teach you something.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-028",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Government officials should rely on their own judgment rather than unquestioningly carry out the will of the people they serve.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that names the circumstances in which independent judgment is a duty and those in which it threatens democracy, and resolves the tension through the word 'unquestioningly'; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Democracies rest on a tension: officials are chosen to serve the people, yet the people elect them precisely to exercise the judgment the public lacks the time or expertise to exercise itself.", fn: "Hook (the tension)" },
            { text: "The recommendation comes down on one side, urging officials to rely on their own judgment rather than unquestioningly carry out the will of the people they serve.", fn: "Context (the recommendation)" },
            { text: "The recommendation is right in important circumstances, but stated so broadly it is dangerous, because an official who routinely substitutes his judgment for the public's will undermines the democracy he was elected to serve.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — When judgment must prevail",
          sentences: [
            { text: "First, there are clear circumstances in which an official must follow his own judgment over popular opinion.", fn: "Topic sentence", moves: ["First"] },
            { text: "The public often demands contradictory things, or short-term benefits that carry long-term ruin, and a leader who simply obeyed would steer the country onto the rocks.", fn: "Example" },
            { text: "Officials also have access to expertise, intelligence, and detail that the public lacks, which is precisely why we delegate decisions to them rather than vote on everything directly.", fn: "Explanation", vocab: [{ term: "delegate", gloss: "委派；授權" }] },
            { text: "Some duties — protecting an unpopular minority, upholding the law against a furious majority — require resisting the public will rather than obeying it.", fn: "Develop" },
            { text: "Leaders who once defied popular prejudice to extend rights are now remembered as heroes, not as traitors to democracy.", fn: "Example" },
            { text: "Where the public is misinformed, divided, or bent on injustice, independent judgment is not arrogance but duty.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — When the public will must rule",
          sentences: [
            { text: "However, to make independent judgment the general rule would corrode democracy itself.", fn: "Pivot", moves: ["However"] },
            { text: "The legitimacy of an official rests entirely on the consent of the governed, and once he sets his judgment routinely above their will, he becomes a ruler rather than a representative.", fn: "Point", vocab: [{ term: "legitimacy", gloss: "正當性；合法性" }] },
            { text: "History is full of leaders who knew better than their people and used that conviction to justify ignoring them, often disastrously.", fn: "Example" },
            { text: "The people's will, even when imperfect, is the ultimate check on power, and an official free to override it whenever he disagrees is accountable to no one.", fn: "Explanation", vocab: [{ term: "accountable", gloss: "須負責的；應問責的" }] },
            { text: "Confidence in one's own judgment is exactly what tyrants share with statesmen; the difference lies in submitting to the public's verdict.", fn: "Develop" },
            { text: "An official who ignores the people he serves has forgotten whom he serves.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The key word is 'unquestioningly'",
          sentences: [
            { text: "Moreover, the recommendation is most defensible because of a single word: unquestioningly.", fn: "Pivot", moves: ["Moreover"] },
            { text: "There is a vast space between blindly executing every public whim and arrogantly disregarding the public altogether.", fn: "Point" },
            { text: "The wise official neither obeys without thought nor rules without consent; he leads the public by persuasion, explains hard choices, and accepts that the final authority is theirs.", fn: "Explanation", vocab: [{ term: "persuasion", gloss: "說服；勸說" }, { term: "consent", gloss: "同意；認可" }] },
            { text: "He uses his judgment to shape and inform the public will, and then defers to it, rather than replacing it.", fn: "Develop" },
            { text: "To question the public's will is healthy; to override it as a matter of course is not.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, officials should certainly exercise judgment rather than obey unquestioningly, but they must not mistake that for a license to ignore the people.", fn: "Restate", moves: ["In conclusion"] },
            { text: "In circumstances of expertise, urgency, or injustice, independent judgment is essential, yet it must operate within, not above, the democratic consent that gives an official any authority at all.", fn: "Synthesis" },
            { text: "The best leaders guide the public will with their judgment and submit to it with their conscience, doing neither alone.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-029",
    type: "issue",
    category: "Technology",
    prompt:
      "Young people should be encouraged to pursue long-term, realistic goals rather than seek immediate fame and recognition.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that shows where long-term goals beat the pursuit of fame and then carefully qualifies the word 'realistic' so it does not stifle ambition; concrete and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "In an age when a single video can make an unknown teenager famous overnight, the pull of instant recognition has never been stronger.", fn: "Hook" },
            { text: "Against it, the recommendation urges young people to pursue long-term, realistic goals rather than chase immediate fame.", fn: "Context (the recommendation)" },
            { text: "The recommendation is largely wise, because lasting fulfillment grows from sustained effort rather than from sudden celebrity, though the word realistic should not be used to discourage genuine ambition.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Long-term goals build something real",
          sentences: [
            { text: "First, long-term goals build the skills, character, and satisfaction that fleeting fame cannot.", fn: "Topic sentence", moves: ["First"] },
            { text: "Mastery of anything worthwhile — medicine, music, a craft, a science — takes years of patient work, and the person who pursues it gains abilities that remain when the applause fades.", fn: "Reason", vocab: [{ term: "mastery", gloss: "精通；嫻熟" }] },
            { text: "A young woman who spends a decade becoming an excellent surgeon has built something no viral moment could give her and nothing a scandal could take away.", fn: "Example" },
            { text: "Fulfillment tends to come from growth and contribution, not from being noticed, and a life organized around recognition is built on the shifting opinions of strangers.", fn: "Explanation", vocab: [{ term: "fulfillment", gloss: "成就感；滿足" }] },
            { text: "Long-term goals also teach resilience, since they are reached only by surviving the setbacks that a quick path never encounters.", fn: "Develop", vocab: [{ term: "resilience", gloss: "韌性；復原力" }] },
            { text: "Skills compound quietly over years, while fame, even when it lands, can evaporate within a week.", fn: "Reinforce" },
            { text: "What is earned slowly tends to last; what arrives overnight tends to vanish overnight.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Fame is hollow and unreliable",
          sentences: [
            { text: "Moreover, immediate fame is both unreliable as a goal and hollow as a reward.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Fame arrives, when it arrives at all, by luck as much as merit, so to aim at it is to stake one's life on a lottery.", fn: "Point" },
            { text: "For every young person made briefly famous online, countless others chase the same recognition and gain nothing but wasted years.", fn: "Example" },
            { text: "Those who do achieve sudden fame often find it empty, fleeting, and corrosive, since attention is not the same as respect and rarely satisfies for long.", fn: "Explanation", vocab: [{ term: "corrosive", gloss: "腐蝕性的；傷害身心的" }] },
            { text: "The modern machinery of instant celebrity is especially treacherous, rewarding spectacle over substance and discarding people as fast as it raises them.", fn: "Develop", vocab: [{ term: "spectacle", gloss: "奇觀；表演噱頭" }] },
            { text: "Aiming at applause means letting strangers decide whether your life has succeeded.", fn: "Sharpen" },
            { text: "To build a life around so fickle a prize is to build on sand.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But do not let 'realistic' kill ambition",
          sentences: [
            { text: "However, the recommendation must be read with care, because the word realistic can do real harm.", fn: "Pivot", moves: ["However"] },
            { text: "Told to be realistic, a gifted young person might abandon a bold dream — to start a company, make art, change a field — that looked impossible but was well worth attempting.", fn: "Concede the danger" },
            { text: "The point is not to aim low but to aim at something real and lasting rather than at mere visibility.", fn: "Rebut" },
            { text: "A long-term goal can be wildly ambitious, even unlikely, as long as it is pursued for its substance and not for the spotlight.", fn: "Explain" },
            { text: "There is a world of difference between a hard dream and a hollow one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, young people are well advised to pursue long-term goals over immediate fame.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Sustained effort toward something real builds skill, resilience, and genuine fulfillment, while the chase for instant recognition usually delivers neither and rarely lasts.", fn: "Synthesis" },
            { text: "Aim high and aim far, and let any fame that comes arrive as the reward for the work rather than as its purpose.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-030",
    type: "issue",
    category: "The Individual",
    prompt:
      "If a goal is worthy, then any means taken to attain it are justifiable.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): rejects the absolute claim with two strong reasons — means cause real harm and corrupt the ends they serve — then concedes the limited truth before reaffirming the position; tightly reasoned.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is a seductive idea that a noble enough end can excuse whatever it takes to reach it, and history is littered with crimes committed in the name of good causes.", fn: "Hook" },
            { text: "The statement embraces this logic fully, holding that if a goal is worthy, then any means taken to attain it are justifiable.", fn: "Context (the statement)" },
            { text: "I strongly disagree, because the means we use have consequences and a moral weight of their own, and a worthy goal pursued through monstrous means is neither worthy nor truly achieved.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Means cause real harm",
          sentences: [
            { text: "First, no end exists in isolation, and the means used to reach it produce consequences of their own.", fn: "Topic sentence", moves: ["First"] },
            { text: "To pursue a good goal through violence, deceit, or cruelty is to create real suffering now in exchange for a benefit that is only hoped for later.", fn: "Point" },
            { text: "Revolutions launched to free people have, through terror and bloodshed, produced tyrannies worse than the ones they replaced.", fn: "Example" },
            { text: "The harm done by the means is certain and immediate, while the worthy end is often distant and unsure, so any means trades guaranteed evil for speculative good.", fn: "Explanation", vocab: [{ term: "speculative", gloss: "臆測的；不確定的" }] },
            { text: "A doctor does not cure a patient by killing him, and a society does not achieve justice by committing injustice along the way.", fn: "Develop" },
            { text: "History's bloodiest chapters were written by people convinced that their cause excused the carnage.", fn: "Reinforce" },
            { text: "Because means cause real harm, they cannot be excused merely by pointing at a distant goal.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Means corrupt the end",
          sentences: [
            { text: "Moreover, immoral means tend to corrupt the very goal they were meant to serve.", fn: "Pivot", vocab: [{ term: "corrupt", gloss: "敗壞；使墮落" }], moves: ["Moreover"] },
            { text: "A cause defended through lies becomes a cause built on lies, and the habits formed in pursuing it do not vanish once the goal is reached.", fn: "Point" },
            { text: "A movement for freedom that wins through terror tends to keep ruling through terror, because the people and methods that triumph are the ones the struggle has shaped.", fn: "Example" },
            { text: "Means are not neutral tools laid down at the finish line; they become part of whatever is built.", fn: "Explanation" },
            { text: "The end never quite arrives pure, because it carries within it everything done to attain it.", fn: "Develop" },
            { text: "To say the goal justifies any means is to forget that the means become the goal.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The kernel of truth and its limit",
          sentences: [
            { text: "Admittedly, there is a limited truth buried in the statement.", fn: "Concede", moves: ["Admittedly"] },
            { text: "Worthy goals do sometimes justify difficult or costly means — a just war, a painful sacrifice, a hard compromise — that would be wrong in the absence of any purpose.", fn: "Develop the concession", vocab: [{ term: "sacrifice", gloss: "犧牲" }] },
            { text: "But this is a far cry from any means, which would license torture, murder, and betrayal whenever the cause seemed grand enough.", fn: "Rebut" },
            { text: "The honest principle is that a worthy end can justify some means and never others, and that the more monstrous the means, the worthier the end must be even to be debated.", fn: "State the better principle" },
            { text: "The worthier the goal, the more tempting it becomes to forgive ourselves anything done in its name.", fn: "Sharpen" },
            { text: "Any is precisely the word that turns a reasonable idea into a dangerous one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a worthy goal can justify some means but never any means whatever.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because means cause real harm and shape the ends they serve, the word any makes the statement an invitation to atrocity dressed up as idealism.", fn: "Synthesis", vocab: [{ term: "atrocity", gloss: "暴行" }, { term: "idealism", gloss: "理想主義" }] },
            { text: "The worthiness of a goal is a reason to choose our means with more care, not less.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-031",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "In order to become well-rounded individuals, all college students should be required to take courses in which they read poetry, novels, mythology, and other types of imaginative literature.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that argues literature builds empathy, language, and breadth no technical training provides, then answers the worry about bad teaching; well organized and convincing.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A student can graduate from many universities having read spreadsheets and lab reports but not a single poem or novel, and the recommendation finds that troubling.", fn: "Hook" },
            { text: "It proposes that all college students, whatever their field, be required to take courses in poetry, novels, mythology, and other imaginative literature.", fn: "Context (the recommendation)" },
            { text: "I largely agree, because imaginative literature develops capacities — empathy, imagination, and a feel for language — that no technical training provides, though the requirement must be designed thoughtfully to do real good.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Literature builds empathy",
          sentences: [
            { text: "First, literature teaches something no other subject teaches as well: what it is like to be someone else.", fn: "Topic sentence", moves: ["First"] },
            { text: "To read a novel is to live, for a while, inside another person's mind, feeling their fears and following their reasons from the inside.", fn: "Reason" },
            { text: "This rehearsal of other lives builds empathy and moral imagination, the ability to understand people quite unlike ourselves.", fn: "Explanation", vocab: [{ term: "empathy", gloss: "同理心" }] },
            { text: "An engineer who has inhabited the characters of great fiction is likelier to remember, when designing for millions, that numbers stand for human beings.", fn: "Example" },
            { text: "In a world that rewards specialization, this widening of sympathy is exactly the corrective a narrow education needs.", fn: "Develop" },
            { text: "Numbers and code describe the world; stories let us feel what living in it is actually like.", fn: "Reinforce" },
            { text: "A graduate who can build a bridge but cannot imagine another's suffering is only half educated.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Literature sharpens language and thought",
          sentences: [
            { text: "Moreover, imaginative literature trains the mind and the language in ways that pay off in any field.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Reading complex prose and poetry stretches a student's vocabulary, attention, and capacity to handle ambiguity and nuance.", fn: "Point", vocab: [{ term: "ambiguity", gloss: "模稜兩可；多義" }, { term: "nuance", gloss: "細微差別" }] },
            { text: "The lawyer who has wrestled with a difficult poem reads contracts more closely, and the scientist who has followed a subtle plot frames an argument more clearly.", fn: "Example" },
            { text: "Great literature also carries the accumulated wisdom of human experience, the myths and stories through which cultures have always thought about love, death, power, and justice.", fn: "Explanation" },
            { text: "To be ignorant of this inheritance is to be cut off from the deepest conversation the human race has been having with itself.", fn: "Develop", vocab: [{ term: "inheritance", gloss: "遺產；傳承" }] },
            { text: "These are not soft extras but core tools of a thinking life.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The requirement must be taught well",
          sentences: [
            { text: "However, the value of the requirement depends entirely on how it is carried out.", fn: "Pivot", moves: ["However"] },
            { text: "A mandatory literature course taught badly — reduced to dull summaries and tests on plot — could breed resentment rather than a love of reading.", fn: "Concede the danger", vocab: [{ term: "resentment", gloss: "怨恨；反感" }] },
            { text: "But this is an argument for teaching it well, not for abandoning the requirement, just as a poorly taught math class is no reason to stop teaching math.", fn: "Rebut" },
            { text: "Designed thoughtfully, with real books and genuine discussion, such courses can reach even students who arrive convinced that they hate reading.", fn: "Explain" },
            { text: "Almost any subject can be ruined by poor teaching, and that is a reason to teach it better, not to drop it.", fn: "Reinforce" },
            { text: "The requirement is sound; its success lies entirely in the execution.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, requiring college students to study imaginative literature is a wise policy.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Literature cultivates the empathy, language, and breadth that make a person well-rounded rather than merely trained, and these are gains no specialist education should be allowed to skip.", fn: "Synthesis" },
            { text: "A university that sends its students into the world without a single great story has taught them how to make a living but not how to understand a life.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-032",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "In order for any work of art — for example, a film, a novel, a poem, or a song — to have merit, it must be understandable to most people.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): rejects the criterion with strong reasons — much great art is difficult, and merit differs from popularity — then concedes that art must communicate something; well organized and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Some of the most celebrated works in human history baffled their first audiences and many audiences since.", fn: "Hook" },
            { text: "Yet the statement insists that for any work of art to have merit, it must be understandable to most people.", fn: "Context (the statement)" },
            { text: "I disagree, because the value of art is not measured by how many people grasp it at first encounter, and a standard of mass understandability would condemn much of humanity's greatest work as worthless.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Much great art is difficult",
          sentences: [
            { text: "First, a great deal of art widely regarded as profound is not readily understandable to most people.", fn: "Topic sentence", vocab: [{ term: "profound", gloss: "深刻的；意義深遠的" }], moves: ["First"] },
            { text: "Joyce's Ulysses, Picasso's late paintings, and much of classical poetry demand an effort, background, and patience that most readers and viewers simply do not bring to them.", fn: "Example" },
            { text: "If understandability to the majority were the test of merit, these works would fail it, and we would have to call them worthless, which is plainly absurd.", fn: "Explanation" },
            { text: "Difficulty is often the price of depth, since art that explores complex experience cannot always be flattened into something instantly clear.", fn: "Develop" },
            { text: "A symphony's structure, a poem's allusions, a film's symbolism may reveal themselves only on the second or the tenth encounter, not the first.", fn: "Example", vocab: [{ term: "allusions", gloss: "典故；引喻" }] },
            { text: "The fault, in such cases, may lie with the hurried audience rather than with the demanding work.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Merit is not popularity",
          sentences: [
            { text: "Moreover, the statement confuses being understood with being good, which are quite separate things.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Much that is instantly understandable is shallow, and much that is difficult is deep, so accessibility tells us about an audience, not about quality.", fn: "Point", vocab: [{ term: "accessibility", gloss: "易懂性；可親近性" }] },
            { text: "A catchy jingle is understood by everyone and forgotten by morning, while a difficult novel that few finish can change the lives of those who do.", fn: "Example" },
            { text: "The worth of art lies in what it reveals, how it moves us, and how long it lasts, none of which is settled by a head count of who got it.", fn: "Explanation" },
            { text: "History is full of works ignored or scorned in their day that later generations recognized as masterpieces, which proves that majority understanding is no reliable guide to merit.", fn: "Develop" },
            { text: "To equate merit with mass comprehension is to let the size of an audience decide the value of a work.", fn: "Sub-conclusion", vocab: [{ term: "comprehension", gloss: "理解；領會" }] },
          ],
        },
        {
          role: "Body — But art must communicate something",
          sentences: [
            { text: "There is, however, a reasonable instinct buried in the statement.", fn: "Concede", moves: ["however"] },
            { text: "Art does communicate, and a work understood by no one at all, that locks its meaning away entirely, may indeed fail as art.", fn: "Develop the concession" },
            { text: "But understandable to most people sets the bar far too low, demanding instant mass appeal rather than the possibility of understanding by a willing audience.", fn: "Rebut" },
            { text: "The right standard is not that everyone must understand a work easily, but that it must offer something real to those who meet it with attention.", fn: "State the better standard" },
            { text: "Between the gibberish that communicates nothing and the jingle that communicates only the obvious lies the vast territory of serious art.", fn: "Sub-conclusion", vocab: [{ term: "gibberish", gloss: "胡言亂語；難以理解的東西" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, art need not be understandable to most people in order to have merit.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Difficulty is often the companion of depth, and the value of a work is decided by what it offers those who engage with it, not by how large a crowd grasps it instantly.", fn: "Synthesis" },
            { text: "The measure of art is not how many understand it, but how much there is to understand.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-033",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Many important discoveries or creations are accidental: it is usually while seeking the answer to one question that we come across the answer to another.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants the large role of chance in discovery while showing that accident becomes discovery only through a prepared, persistent mind; concrete examples and a clear synthesis.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "The story of science is full of happy accidents: penicillin from a contaminated dish, X-rays from a stray glow, the microwave from a melted chocolate bar.", fn: "Hook" },
            { text: "The statement generalizes from such tales, claiming that many important discoveries are accidental, stumbled upon while seeking the answer to some other question.", fn: "Context (the statement)" },
            { text: "The statement is partly true, because chance genuinely plays a large role in discovery, but it tells only half the story, since accidents become discoveries only in the hands of a prepared and persistent mind.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Accident really does drive discovery",
          sentences: [
            { text: "It is true that accident has shaped an astonishing number of important findings.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Fleming was not hunting for antibiotics when a stray mould killed his bacteria, and Roentgen was not looking for X-rays when an unexpected glow lit his laboratory.", fn: "Example" },
            { text: "Research is a journey into the unknown, and the unknown, by definition, holds surprises that no plan can anticipate.", fn: "Explanation", vocab: [{ term: "anticipate", gloss: "預料；預期" }] },
            { text: "Often the question a scientist sets out to answer turns out to be less important than the strange result he happens to notice along the way.", fn: "Develop" },
            { text: "Whole fields have opened because someone was studying one thing and tripped over another.", fn: "Example" },
            { text: "The history of medicine, chemistry, and physics is studded with breakthroughs that arrived sideways, while their discoverers were looking elsewhere.", fn: "Reinforce" },
            { text: "So the statement captures something real: discovery is far less orderly than the textbooks suggest.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But accident is not enough",
          sentences: [
            { text: "However, to call these discoveries simply accidental is to overlook the crucial half of the story.", fn: "Pivot", moves: ["However"] },
            { text: "The same mould had landed on countless dishes before Fleming, and the same glow had surely been seen by others, yet they noticed nothing of importance.", fn: "Point" },
            { text: "An accident becomes a discovery only when a trained, alert mind recognizes that something unexpected and significant has occurred.", fn: "Explanation" },
            { text: "As Pasteur observed, chance favors the prepared mind, and the preparation is doing every bit as much work as the chance.", fn: "Support", vocab: [{ term: "preparation", gloss: "準備；有所準備" }] },
            { text: "It took years of expertise for Fleming to grasp what his ruined experiment meant, and more years of others' labor to turn the observation into a medicine.", fn: "Develop" },
            { text: "A thousand people spill their coffee; only the one already thinking hard about a problem sees in the spill the answer to it.", fn: "Example" },
            { text: "Recognizing an anomaly as important, rather than dismissing it as a flaw, is itself a hard-won skill.", fn: "Develop" },
            { text: "The lucky observation is simply wasted on a mind that does not know what it is looking at.", fn: "Sharpen" },
            { text: "The accident supplies the opportunity, but knowledge, attention, and persistence supply the discovery.", fn: "Sub-conclusion", vocab: [{ term: "persistence", gloss: "堅持不懈；毅力" }] },
          ],
        },
        {
          role: "Body — Chance and preparation together",
          sentences: [
            { text: "Moreover, the fuller truth is that discovery is born of chance and preparation working together.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Neither alone suffices: planning without surprise rarely yields anything new, but surprise without a prepared observer yields nothing at all.", fn: "Explanation", vocab: [{ term: "observer", gloss: "觀察者" }] },
            { text: "This is why important accidents cluster among those who work hardest and know most, not among the idle or the ignorant.", fn: "Develop" },
            { text: "Serendipity is not the opposite of effort but its frequent reward.", fn: "Sub-conclusion", vocab: [{ term: "serendipity", gloss: "機緣巧合；意外的好運" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement is right that accident matters greatly but wrong to leave the matter there.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Important discoveries are indeed often stumbled upon, but the stumbling becomes a discovery only because a knowledgeable, watchful mind is present to recognize it.", fn: "Synthesis" },
            { text: "Chance may open the door, but it takes a prepared mind to walk through it.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-034",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The main benefit of the study of history is to dispel the illusion that people living now are significantly different from people who lived in earlier times.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that history reveals human continuity while arguing convincingly that it teaches change as much as sameness, and that no single benefit can be called the main one; well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We tend to imagine ourselves as fundamentally new, more rational and humane than the benighted people of the past.", fn: "Hook" },
            { text: "The statement holds that history's main benefit is to dispel exactly this illusion, by showing that people today are not significantly different from those who lived before.", fn: "Context (the statement)" },
            { text: "History does powerfully reveal human continuity, but to call this its main benefit is too narrow, because history teaches us at least as much about how things change, and why, as about how people stay the same.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — History reveals continuity",
          sentences: [
            { text: "It is true that one of history's great lessons is the constancy of human nature.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Read the letters of ancient Romans or the diaries of medieval merchants and you meet people moved by the same ambition, love, fear, and vanity that move us now.", fn: "Example", vocab: [{ term: "vanity", gloss: "虛榮" }] },
            { text: "This recognition is genuinely valuable, since it punctures the arrogance of the present and warns us that we are no wiser, and no safer from folly, than our ancestors were.", fn: "Explanation", vocab: [{ term: "arrogance", gloss: "傲慢；自大" }] },
            { text: "A generation that believes itself immune to the mistakes of the past — to tyranny, to mob fury, to self-deception — is precisely the generation most likely to repeat them.", fn: "Develop" },
            { text: "The conviction that it could never happen here has preceded many a catastrophe that earlier history had already rehearsed.", fn: "Example" },
            { text: "So the statement names a real and important benefit: history humbles us by showing us ourselves in the people of the past.", fn: "Sub-conclusion", vocab: [{ term: "humbles", gloss: "使謙卑" }] },
          ],
        },
        {
          role: "Body — But history teaches change too",
          sentences: [
            { text: "However, to make this the main benefit is to ignore everything history teaches about difference and change.", fn: "Pivot", moves: ["However"] },
            { text: "While human nature endures, the circumstances, beliefs, and possibilities of human life have changed enormously, and understanding that change is among history's chief gifts.", fn: "Point" },
            { text: "History explains how we arrived at democracy, science, and rights that earlier ages lacked, and how institutions we now take for granted were painfully built.", fn: "Example", vocab: [{ term: "institutions", gloss: "制度；體制" }] },
            { text: "To study history is to learn that the present is not fixed or natural but the product of particular causes, which means it could have been otherwise and can still be changed.", fn: "Explanation" },
            { text: "This sense of how things came to be, and how they might be reformed, is arguably more useful than the bare reminder that people have always been people.", fn: "Develop" },
            { text: "Knowing why an empire fell, or how a reform succeeded, equips us to act in ways that mere recognition of unchanging human nature does not.", fn: "Example" },
            { text: "History teaches continuity and change together, and the second lesson is at least as important as the first.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — No single main benefit",
          sentences: [
            { text: "Moreover, history yields far too many benefits for any one to be crowned the main one.", fn: "Pivot", moves: ["Moreover"] },
            { text: "It supplies warning and inspiration, trains judgment, preserves memory, and explains the present, and which benefit matters most depends on who is studying and why.", fn: "Explanation" },
            { text: "For a citizen it may be vigilance against repeating old evils; for a reformer, the knowledge that change is possible; for anyone, a richer sense of being human in time.", fn: "Develop", vocab: [{ term: "vigilance", gloss: "警惕；警覺" }] },
            { text: "To single out one benefit as primary is to shrink a vast subject to a single use.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, dispelling the illusion of our own uniqueness is one real benefit of history, but not its main one.", fn: "Restate", moves: ["In conclusion"] },
            { text: "History reveals both how like our ancestors we remain and how greatly our world has changed, and it is the union of these lessons, not either alone, that makes the past worth studying.", fn: "Synthesis" },
            { text: "We study history not only to recognize ourselves in the dead, but to understand how their world became ours, and how ours might yet be remade.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-035",
    type: "issue",
    category: "Education",
    prompt:
      "Learning is primarily a matter of personal discipline; students cannot be motivated by school or college alone.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): grants the centrality of personal discipline while showing that schools genuinely shape motivation, landing on a partnership view; clear and well organized, though the analysis stays fairly general.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every teacher has watched two students sit in the same classroom and walk away with utterly different amounts of learning.", fn: "Hook" },
            { text: "The statement reads this familiar fact as proof that learning is primarily a matter of personal discipline, and that schools and colleges cannot, by themselves, motivate students.", fn: "Context (the statement)" },
            { text: "Personal discipline is indeed essential to learning, but the statement overstates its case, because good schools and teachers do far more to create motivation than the flat word cannot allows.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Discipline is central",
          sentences: [
            { text: "It is true that no institution can learn on a student's behalf.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "In the end, knowledge enters a mind only through that mind's own effort, and the hours of attention and practice that learning demands must be supplied by the learner.", fn: "Point" },
            { text: "Two students with the same teachers, books, and timetable will learn very differently depending on the discipline each brings, and the most lavish school cannot rescue a student who refuses to work.", fn: "Example" },
            { text: "Motivation that depends entirely on outside pressure tends to collapse the moment that pressure is removed, which is why self-driven students keep learning long after their schooling ends.", fn: "Explanation" },
            { text: "Ultimately the responsibility for learning rests with the person doing it, and no reform of schools can transfer that responsibility elsewhere.", fn: "Develop" },
            { text: "To this extent the statement is right: discipline is the engine, and the learner alone can switch it on.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But schools shape motivation",
          sentences: [
            { text: "However, the claim that schools cannot motivate students is plainly false.", fn: "Pivot", moves: ["However"] },
            { text: "Discipline itself is not simply innate; it is cultivated, and a good school is one of the places it is most often cultivated.", fn: "Point", vocab: [{ term: "innate", gloss: "與生俱來的；天生的" }, { term: "cultivated", gloss: "培養的" }] },
            { text: "An inspiring teacher can awaken a passion a student never knew he had, turning a reluctant pupil into a lifelong reader or scientist.", fn: "Example", vocab: [{ term: "reluctant", gloss: "不情願的" }] },
            { text: "Schools shape motivation through the curiosity they spark, the encouragement they offer, the expectations they set, and the example of peers who care.", fn: "Explanation", vocab: [{ term: "curiosity", gloss: "好奇心" }] },
            { text: "A child surrounded by enthusiastic teachers and ambitious classmates is far likelier to develop discipline than the same child left in a dull or chaotic environment.", fn: "Develop", vocab: [{ term: "enthusiastic", gloss: "熱情的；充滿幹勁的" }] },
            { text: "Countless people can name the single teacher who changed the course of their life, which would be impossible if schools could not motivate at all.", fn: "Example" },
            { text: "Discipline and environment are not rivals; the right environment is one of the chief ways discipline is built.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Learning is a partnership",
          sentences: [
            { text: "Moreover, learning is best understood as a partnership between the student and the school.", fn: "Pivot", moves: ["Moreover"] },
            { text: "The learner must supply the effort, but the institution supplies the conditions — inspiration, structure, expectation — that make effort more likely and more rewarding.", fn: "Explanation" },
            { text: "Blaming students alone lets bad schools off the hook, while blaming schools alone lets lazy students off theirs, when both share the work and the responsibility.", fn: "Develop" },
            { text: "The best learning happens where a disciplined student meets a school that knows how to feed that discipline.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, learning does depend heavily on personal discipline, but not on discipline alone.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Schools and colleges may not be able to learn for their students, but they can do a great deal to awaken and sustain the motivation on which all learning depends.", fn: "Synthesis" },
            { text: "Discipline lights the fire, but a good school is what hands the student the match.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-036",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Scientists and other researchers should focus their research on areas that are likely to benefit the greatest number of people.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that shows why mass benefit cannot be predicted and why a head-count standard neglects the few, then concedes a legitimate role for weighing benefit; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "With limited money and talent, it seems only sensible to point science at the problems that would help the most people.", fn: "Hook" },
            { text: "The recommendation makes this a rule, urging scientists to focus their research on areas likely to benefit the greatest number.", fn: "Context (the recommendation)" },
            { text: "The recommendation is appealing and partly right, but as a governing principle it would do real harm, because the most beneficial discoveries are often unpredictable and the neediest people are not always the most numerous.", fn: "Thesis statement (qualified position)", vocab: [{ term: "unpredictable", gloss: "不可預測的" }] },
          ],
        },
        {
          role: "Body — Benefit cannot be predicted",
          sentences: [
            { text: "First, the recommendation assumes we can know in advance which research will benefit the most people, and usually we cannot.", fn: "Topic sentence", moves: ["First"] },
            { text: "The most world-changing discoveries — electricity, the structure of DNA, the mathematics behind computers — began as curiosity-driven work with no foreseeable application.", fn: "Example", vocab: [{ term: "foreseeable", gloss: "可預見的" }] },
            { text: "Had scientists been required to justify their benefit to the masses beforehand, much of this research would never have been funded, and the benefits would never have arrived.", fn: "Explanation" },
            { text: "Directing all research toward foreseeable mass benefit would therefore starve precisely the basic science from which the largest benefits unpredictably flow.", fn: "Develop" },
            { text: "The laser was once a solution in search of a problem; today it is everywhere, in surgery, in communication, and in industry.", fn: "Example" },
            { text: "A policy that funded only the obviously useful would, ironically, sacrifice the discoveries that prove most useful of all.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — 'Greatest number' neglects the few",
          sentences: [
            { text: "Moreover, a focus on the greatest number would abandon people whose needs are real but rare.", fn: "Pivot", moves: ["Moreover"] },
            { text: "A strict head-count standard would steer research toward common conditions and away from rare diseases that afflict only thousands, leaving those sufferers with no hope at all.", fn: "Point" },
            { text: "Yet a person with a rare illness is no less deserving of a cure than one with a common cold, and a just society does not measure the worth of research solely by how many it helps.", fn: "Explanation" },
            { text: "The same logic would neglect the distant future, since people not yet born cannot be counted among today's greatest number, even though research now may save them later.", fn: "Develop" },
            { text: "Climate and pandemic research benefit chiefly the people of the future, who do not appear in any present tally of beneficiaries.", fn: "Example", vocab: [{ term: "beneficiaries", gloss: "受益者" }] },
            { text: "Counting heads is a poor way to decide whose suffering matters.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The legitimate kernel",
          sentences: [
            { text: "However, the recommendation does point at something legitimate.", fn: "Concede", moves: ["However"] },
            { text: "Where two equally promising projects compete for the same scarce funds, the likely scale of benefit is a perfectly reasonable thing to weigh.", fn: "Develop the concession" },
            { text: "But weighing benefit among options is very different from making mass benefit the sole focus of all research, which is what the recommendation proposes.", fn: "Rebut" },
            { text: "A wise science policy funds a broad portfolio — applied work aimed at present needs and basic work whose payoffs cannot yet be seen — rather than betting everything on the foreseeable.", fn: "State the better policy", vocab: [{ term: "portfolio", gloss: "組合；投資配置" }] },
            { text: "To serve the most people in the long run, science must be free to pursue more than what serves the most people now.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, scientists should consider the benefit of their work without being confined to whatever helps the largest number.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because the greatest discoveries are unforeseeable and the neediest are not always the most numerous, a rule of mass benefit would impoverish science and neglect the vulnerable.", fn: "Synthesis", vocab: [{ term: "vulnerable", gloss: "弱勢的；易受傷害的" }] },
            { text: "The surest way to benefit the greatest number is to let science explore widely, including the questions whose usefulness no one can yet predict.", fn: "Final judgment" },
          ],
        },
      ],
    },
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
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that endorses weighing consequences in most circumstances while showing that the word 'only' would paralyze action that must be seized quickly; balanced and well developed.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It sounds like the very definition of prudence: never take a risk until you have carefully weighed what might go wrong.", fn: "Hook", vocab: [{ term: "prudence", gloss: "審慎；謹慎" }] },
            { text: "The recommendation makes this a rule, advising that people undertake risky action only after carefully considering its consequences.", fn: "Context (the recommendation)" },
            { text: "As general advice the recommendation is sound, because most regrettable risks are taken thoughtlessly, but its only after is too absolute, since some valuable risks must be seized before deliberation can finish.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Deliberation usually prevents disaster",
          sentences: [
            { text: "First, in most circumstances careful thought before a risky act is plainly wise.", fn: "Topic sentence", moves: ["First"] },
            { text: "Many of the worst decisions people make — reckless investments, dangerous stunts, hasty commitments — come not from bad luck but from acting before thinking.", fn: "Reason", vocab: [{ term: "reckless", gloss: "魯莽的；不顧後果的" }] },
            { text: "The driver who speeds to save five minutes, the investor who pours his savings into a scheme he does not understand, the speaker who lashes out in anger, all neglect consequences they could easily have foreseen.", fn: "Example" },
            { text: "Considering what might go wrong lets us weigh the possible gain against the possible loss, prepare for setbacks, and often discover a safer path to the same goal.", fn: "Explanation" },
            { text: "Risk taken with open eyes is responsible; risk taken blindly is merely gambling with outcomes one has refused to examine.", fn: "Develop" },
            { text: "In the ordinary run of life the recommendation is exactly right, and most people would suffer fewer disasters by following it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But 'only' invites paralysis",
          sentences: [
            { text: "However, the word only makes the advice too rigid for a world that does not always wait.", fn: "Pivot", moves: ["However"] },
            { text: "Some opportunities and emergencies demand action faster than careful consideration allows, and to insist on finishing one's deliberation first would be to lose them.", fn: "Point" },
            { text: "A firefighter who paused to weigh every consequence before entering a burning building, or an entrepreneur who waited for certainty before launching, would arrive far too late to matter.", fn: "Example" },
            { text: "Many of life's richest rewards, in love, in enterprise, and in adventure, go to those willing to act amid uncertainty, since the chance to weigh every consequence is a luxury reality rarely grants.", fn: "Explanation", vocab: [{ term: "uncertainty", gloss: "不確定性" }] },
            { text: "Endless deliberation can itself become a trap, a way of avoiding the risk of living by hiding behind the appearance of caution.", fn: "Develop" },
            { text: "The person who never acts until every doubt is resolved will, in practice, never act at all.", fn: "Example" },
            { text: "Carried to extremes, the recommendation would simply replace one error, recklessness, with another, paralysis.", fn: "Sub-conclusion", vocab: [{ term: "paralysis", gloss: "癱瘓；動彈不得" }] },
          ],
        },
        {
          role: "Body — A matter of proportion",
          sentences: [
            { text: "Moreover, the recommendation is best read as a matter of proportion rather than an absolute.", fn: "Pivot", moves: ["Moreover"] },
            { text: "The greater and the less reversible the stakes, the more consideration a risk deserves; the smaller or more fleeting the opportunity, the less it can afford.", fn: "Explanation" },
            { text: "A wise person matches the depth of deliberation to the weight of the decision, thinking hard before betting a fortune but trusting trained instinct in the heat of a moment.", fn: "Develop" },
            { text: "Consider consequences carefully, yes, but not so long that the very moment for action slips away.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, people should usually weigh the consequences before taking a risk, but not in every case and not without limit.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Thoughtless risk invites disaster, yet some of life's greatest gains require acting before all the consequences can be counted, so wisdom lies in matching deliberation to the stakes.", fn: "Synthesis" },
            { text: "The goal is not to fear risk or to court it blindly, but to take it with as much foresight as the moment allows.", fn: "Final judgment", vocab: [{ term: "foresight", gloss: "先見之明；遠見" }] },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-039",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Leaders are created by the demands that are placed on them.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that demanding circumstances produce leaders while arguing that demands can only develop a capacity already present and willingly offered; concrete examples and a clear synthesis.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We often wonder whether great leaders are born or made, and the statement offers a confident answer: that they are made, created by the demands placed upon them.", fn: "Hook" },
            { text: "On this view, ordinary people become leaders because circumstances call forth abilities they would otherwise never have shown.", fn: "Context (the statement)" },
            { text: "Demanding circumstances do play a powerful role in producing leaders, but the statement claims too much, because the demands of a situation reveal and develop leadership only in those who already possess the capacity to meet them.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Demands do summon leadership",
          sentences: [
            { text: "It is true that circumstances summon leadership that might otherwise have lain dormant.", fn: "Concession (topic sentence)", vocab: [{ term: "dormant", gloss: "潛伏的；蟄伏的" }], moves: ["It is true that"] },
            { text: "Lincoln might have remained a competent country lawyer had the Civil War not demanded a statesman, and Churchill's defiance found its purpose only when his nation faced destruction.", fn: "Example" },
            { text: "A crisis raises the stakes and the expectations, forcing people to grow into responsibilities they never sought and revealing reserves of courage and judgment they did not know they had.", fn: "Explanation", vocab: [{ term: "reserves", gloss: "儲備；潛藏的能力" }] },
            { text: "Ordinary times rarely produce extraordinary leaders, precisely because they make no extraordinary demands.", fn: "Develop" },
            { text: "Many a quiet figure has become decisive in an emergency, then faded again once the emergency had passed.", fn: "Example" },
            { text: "Peace and plenty rarely produce a Lincoln, because they ask so little of anyone.", fn: "Reinforce" },
            { text: "So the statement captures something real: without demands, much potential leadership is never called into being.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But demands cannot create capacity from nothing",
          sentences: [
            { text: "However, demands cannot create what is not there to be developed.", fn: "Pivot", moves: ["However"] },
            { text: "The same crisis that elevates one person paralyzes or destroys another, which would be impossible if circumstances simply manufactured leaders.", fn: "Point", vocab: [{ term: "paralyzes", gloss: "使癱瘓；使動彈不得" }] },
            { text: "Two officers face the same battle: one rises to command while the other panics, and the difference lies not in the demand but in the people who met it.", fn: "Example" },
            { text: "Demands test and develop leadership, but the qualities they draw on — courage, judgment, the ability to inspire — must already exist in some form to be drawn upon.", fn: "Explanation" },
            { text: "A situation can call for a leader without producing one, as many a leaderless crisis painfully shows.", fn: "Develop" },
            { text: "History is full of moments that cried out for greatness and received only the ordinary people who happened to be in charge.", fn: "Example" },
            { text: "The throne does not make the king; it merely shows the world whether he can wear it.", fn: "Aphoristic" },
            { text: "The demand sets the stage, but the person must be able to fill it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Leaders are made by demand, ability, and choice",
          sentences: [
            { text: "Moreover, the statement leaves out the leader's own choices, which neither circumstance nor character fully explains.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Faced with the same demands and equipped with the same gifts, one person steps forward and another holds back, and that decision is the leader's own.", fn: "Explanation" },
            { text: "Leadership is forged where demanding circumstances, latent ability, and a deliberate willingness to answer the call all meet.", fn: "Develop", vocab: [{ term: "latent", gloss: "潛在的；未顯露的" }, { term: "deliberate", gloss: "刻意的；經深思的" }] },
            { text: "To say leaders are merely created by demands is to forget the courage it takes to respond to them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the demands placed on people do much to create leaders, but not by themselves.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Circumstances summon and shape leadership, yet they can only develop a capacity that already exists and is willingly offered, so leaders are made by demand, ability, and choice together.", fn: "Synthesis" },
            { text: "The occasion may make the leader possible, but it is the person who decides to become one.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-040",
    type: "issue",
    category: "Environment",
    prompt:
      "There is little justification for society to make extraordinary efforts — especially at a great cost in money and jobs — to save endangered animal or plant species.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): rejects the 'little justification' verdict with strong practical and moral reasons while taking the concern with cost seriously; well organized and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Saving an endangered species can cost millions and sometimes the livelihoods of people who depend on the land or water it needs.", fn: "Hook" },
            { text: "Weighing those costs, the statement concludes that there is little justification for society to make extraordinary efforts to save endangered animal or plant species.", fn: "Context (the statement)" },
            { text: "The statement is right to take the costs seriously, but it is wrong to find little justification for such efforts, because the value of preserving species is large, lasting, and easy to underestimate.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — The practical justification",
          sentences: [
            { text: "First, species are not isolated curiosities but threads in ecosystems on which human life itself depends.", fn: "Topic sentence", vocab: [{ term: "ecosystems", gloss: "生態系統" }], moves: ["First"] },
            { text: "The loss of a single species can unravel a food web, collapse a fishery, or remove a pollinator that crops rely on, imposing costs far greater than the price of protection.", fn: "Explanation", vocab: [{ term: "pollinator", gloss: "授粉者；傳粉生物" }] },
            { text: "Bees, whose decline threatens the agriculture that feeds billions, show how the disappearance of a humble species can carry enormous economic weight.", fn: "Example" },
            { text: "Many medicines, materials, and discoveries have come from organisms we nearly lost, and a species driven extinct takes its unknown uses with it forever.", fn: "Develop" },
            { text: "We cannot know which obscure plant holds the cure for a future disease, and extinction forecloses that possibility permanently.", fn: "Example" },
            { text: "Far from little justification, the practical case for preservation is often a matter of plain self-interest.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The moral justification",
          sentences: [
            { text: "Moreover, the justification is not only practical but moral.", fn: "Pivot", moves: ["Moreover"] },
            { text: "As the species most responsible for extinctions and most able to prevent them, humanity bears a real responsibility for the living world.", fn: "Point", vocab: [{ term: "responsibility", gloss: "責任" }] },
            { text: "To let a species vanish through our carelessness, when we could have saved it, is a loss future generations will not forgive and cannot reverse.", fn: "Explanation" },
            { text: "A civilization is judged partly by what it chooses to protect, and a world stripped of its wild variety would be poorer in ways no balance sheet can capture.", fn: "Develop" },
            { text: "We do not preserve great art only when it is profitable, and the living heritage of millions of years of evolution deserves at least the same regard.", fn: "Example", vocab: [{ term: "heritage", gloss: "遺產；傳承" }] },
            { text: "The worth of a species is not exhausted by its usefulness to us.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Cost is a reason to choose, not to quit",
          sentences: [
            { text: "However, the statement's concern with cost is not empty, and it would be dishonest to dismiss it.", fn: "Concede", moves: ["However"] },
            { text: "Resources are limited, and money or jobs spent saving one species cannot be spent on others or on pressing human needs, so genuine trade-offs are unavoidable.", fn: "Develop the concession" },
            { text: "But the answer is a careful triage among efforts rather than their abandonment, a matter of setting priorities, not of concluding that there is little justification at all.", fn: "Rebut", vocab: [{ term: "triage", gloss: "優先處理；分級取捨" }] },
            { text: "Sensible conservation weighs costs against benefits case by case, protecting what can be protected at reasonable cost rather than either saving everything or giving up.", fn: "Explain" },
            { text: "Acknowledging cost is a reason to be strategic, not a reason to be indifferent.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, there is ample justification for serious efforts to save endangered species, even if not for unlimited ones.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because species sustain the ecosystems we depend on and carry a value beyond price, the case for preservation is strong, and the costs are a reason to spend wisely rather than to walk away.", fn: "Synthesis" },
            { text: "A society that lets its fellow creatures vanish to save a little money will find it has made a poor bargain indeed.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-041",
    type: "issue",
    category: "Technology",
    prompt:
      "The human mind will always be superior to machines because machines are only tools of human minds.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): attacks the statement's certainty by showing tools routinely surpass their makers and that 'machines are only tools' is an assumption that may fail, while conceding present human superiority; tightly reasoned.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is comforting to believe that no machine can ever truly surpass us, since we are the ones who build them.", fn: "Hook" },
            { text: "The statement turns this comfort into a certainty, asserting that the human mind will always be superior to machines because machines are merely tools of human minds.", fn: "Context (the statement)" },
            { text: "The statement's conclusion is far from certain, because its supporting reason — that machines are only our tools — is an assumption that may not hold, and tools have a long history of surpassing their makers at the very tasks they were built for.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Tools already surpass us",
          sentences: [
            { text: "First, the claim that a tool cannot exceed its maker is simply false.", fn: "Topic sentence", moves: ["First"] },
            { text: "A calculator computes faster than any human, a telescope sees farther than any eye, and a crane lifts what no person could ever budge.", fn: "Example" },
            { text: "We build tools precisely to do what our own minds and bodies cannot, so to surpass us in some respect is the whole point of a tool.", fn: "Explanation", vocab: [{ term: "surpass", gloss: "超越；勝過" }] },
            { text: "Machines now defeat the best humans at chess, diagnose some diseases more accurately than doctors, and process information at scales no brain can approach.", fn: "Develop" },
            { text: "The very tools the statement dismisses already outperform the human mind across a widening range of tasks.", fn: "Example" },
            { text: "That something is a tool, then, does nothing to guarantee that its makers remain superior.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — 'Only tools' may not hold",
          sentences: [
            { text: "Moreover, the word always makes a prediction about the future that the present cannot support.", fn: "Pivot", moves: ["Moreover"] },
            { text: "The reasoning assumes machines will forever remain mere tools, passive instruments of human will, yet that assumption is exactly what is in question.", fn: "Point" },
            { text: "As machines grow more capable of learning, adapting, and acting as autonomous agents, the line between a tool and an independent mind grows blurry.", fn: "Explanation", vocab: [{ term: "autonomous", gloss: "自主的；自動運作的" }] },
            { text: "No one can confidently say that minds far more powerful than ours will never be built, and to declare it impossible forever is to mistake present limits for permanent ones.", fn: "Develop", vocab: [{ term: "permanent", gloss: "永久的" }] },
            { text: "People once insisted machines could never play music, drive a car, or hold a conversation, and each never has quietly fallen.", fn: "Example" },
            { text: "An argument that rests on machines are only tools collapses the moment machines become something more.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Present superiority is not a permanent law",
          sentences: [
            { text: "However, the statement is not entirely wrong about the present.", fn: "Concede", moves: ["However"] },
            { text: "Today's machines, for all their power, lack the consciousness, judgment, creativity, and moral understanding the human mind possesses, and in these respects we remain clearly superior.", fn: "Develop the concession", vocab: [{ term: "consciousness", gloss: "意識" }, { term: "creativity", gloss: "創造力" }] },
            { text: "But this superiority is a fact about the present, not a guarantee about the future, and so far is very different from always.", fn: "Rebut" },
            { text: "It is reasonable to say the human mind is superior to machines today; it is mere faith to insist it always will be.", fn: "Explain" },
            { text: "Confidence about what can never happen is rarely a safe bet where technology is concerned.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the human mind may well remain superior in important ways, but the statement's certainty is unearned.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because tools routinely surpass their makers and the assumption that machines will stay only tools may not hold, no one can honestly promise that human superiority will last forever.", fn: "Synthesis" },
            { text: "We should be proud of the human mind without mistaking our present advantage for a permanent law of nature.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-042",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "People who are the most deeply committed to an idea or policy are also the most critical of it.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): grants the insight that genuine commitment invites criticism while showing that commitment as often breeds blind loyalty, and resolves it by distinguishing two kinds of commitment; clear, if a touch general.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We usually expect the true believer to defend his cause against all criticism, not to lead the attack on it.", fn: "Hook" },
            { text: "The statement reverses this expectation, claiming that those most deeply committed to an idea or policy are also its most critical examiners.", fn: "Context (the statement)" },
            { text: "There is a real insight here about the best kind of commitment, but as a general claim it is mistaken, because deep commitment is at least as likely to breed blind loyalty as honest criticism.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Real commitment invites criticism",
          sentences: [
            { text: "It is true that the most thoughtful adherents of a cause are often its sharpest critics.", fn: "Concession (topic sentence)", vocab: [{ term: "adherents", gloss: "擁護者；信徒" }], moves: ["It is true that"] },
            { text: "Someone who genuinely cares about an idea wants it to succeed, and so attends closely to its flaws, since only by correcting weaknesses can the idea be made to work.", fn: "Explanation" },
            { text: "The most valuable members of any movement are frequently those who question its strategy, point out its contradictions, and push it to do better.", fn: "Example" },
            { text: "A scientist devoted to a theory tests it hardest of all, and a patriot who truly loves his country is often the first to criticize its failures.", fn: "Develop", vocab: [{ term: "patriot", gloss: "愛國者" }] },
            { text: "Indifference, not devotion, is what produces silence, since we rarely bother to criticize what we do not care about.", fn: "Example" },
            { text: "In this sense the statement is right: serious commitment and serious criticism can go hand in hand.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But commitment often breeds blindness",
          sentences: [
            { text: "However, deep commitment just as often produces the very opposite of criticism.", fn: "Pivot", moves: ["However"] },
            { text: "The more people invest in a belief, the more painful it becomes to admit that it might be flawed, and so they defend it ever more fiercely.", fn: "Point" },
            { text: "Strong conviction tends to filter the evidence, magnifying whatever supports the belief and quietly dismissing whatever threatens it.", fn: "Explanation", vocab: [{ term: "conviction", gloss: "堅定的信念" }] },
            { text: "The most committed members of a political party or a religion are frequently the least critical of it, treating doubt as betrayal and questions as attacks.", fn: "Develop" },
            { text: "Fanatics, by definition, are utterly committed and utterly uncritical, which alone shows that commitment does not guarantee criticism.", fn: "Example", vocab: [{ term: "fanatics", gloss: "狂熱分子" }] },
            { text: "History's worst movements were sustained by true believers who never questioned the cause at all.", fn: "Example" },
            { text: "Commitment, in short, can sharpen criticism or smother it, depending on the person.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Which kind of commitment",
          sentences: [
            { text: "Moreover, the truth of the statement depends entirely on what kind of commitment we mean.", fn: "Pivot", moves: ["Moreover"] },
            { text: "A commitment to the success of an idea breeds criticism, because criticism serves the goal; a commitment to one's identity as a believer breeds defensiveness, because criticism threatens the self.", fn: "Explanation", vocab: [{ term: "defensiveness", gloss: "防衛心態；自我防備" }] },
            { text: "The statement describes the former, healthier kind but mistakes it for commitment as such, ignoring the equally common kind that cannot bear a word against it.", fn: "Develop" },
            { text: "The best believers criticize their cause; the most fervent often cannot.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement is true of the finest commitment but false as a general rule.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Genuine devotion to an idea's success does invite honest criticism, but devotion to a belief as a badge of identity tends instead to silence it, so commitment and criticism are linked only when the commitment is of the right kind.", fn: "Synthesis" },
            { text: "Whether a deep believer is his cause's best critic or its blindest defender depends on whether he loves the idea or merely loves believing it.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-043",
    type: "issue",
    category: "Environment",
    prompt:
      "Some people believe that society should try to save every plant and animal species, despite the expense to humans in effort, time, and financial well-being. Others believe that society need not make extraordinary efforts, especially at a great cost in money and jobs, to save endangered species.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a two-views response that gives each position its due, then stakes out a clear middle that leans toward conservation while accepting the reality of cost; well organized and even-handed.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Few questions force the value of nature and the value of human welfare into sharper conflict than how hard we should fight to save endangered species.", fn: "Hook" },
            { text: "Some hold that society should try to save every plant and animal species whatever the cost in effort, time, and money; others hold that we need not make extraordinary efforts, especially when the price is paid in jobs and dollars.", fn: "Context (state both views)" },
            { text: "Both views capture something important, but my own position lies closer to the first while accepting the second's concern with cost: we should make serious efforts to save species, guided by priorities rather than by an absolute rule in either direction.", fn: "Thesis statement (which view aligns)" },
          ],
        },
        {
          role: "Body — The case for saving every species",
          sentences: [
            { text: "The first view rests on a powerful insight: that the loss of a species is permanent and its value genuinely hard to measure.", fn: "Topic sentence (view one)" },
            { text: "Each species is the unique product of millions of years of evolution, and once gone it can never be recovered, so an extinction we permit is a door closed forever.", fn: "Explanation", vocab: [{ term: "evolution", gloss: "演化；進化" }] },
            { text: "Species we once dismissed as worthless have yielded medicines, foods, and insights no one anticipated, which means we can rarely know what a vanishing species is truly worth.", fn: "Example" },
            { text: "There is also a moral force to this view, since the species most responsible for extinctions arguably has a duty to prevent them.", fn: "Develop" },
            { text: "Those who would save every species are right that extinction is uniquely final and its costs easy to underestimate.", fn: "Sub-conclusion" },
            { text: "The strongest part of this view is its refusal to treat the irreplaceable as disposable.", fn: "Reinforce", vocab: [{ term: "irreplaceable", gloss: "無可取代的" }] },
          ],
        },
        {
          role: "Body — The case against extraordinary efforts",
          sentences: [
            { text: "However, the second view also speaks an uncomfortable truth: that resources are finite and human needs are real.", fn: "Pivot (view two)", vocab: [{ term: "finite", gloss: "有限的" }], moves: ["However"] },
            { text: "Money and labor poured into saving one obscure species cannot be spent on schools, on medicine, or on the workers whose jobs a conservation rule may destroy.", fn: "Point" },
            { text: "To promise to save every species regardless of cost is to ignore the genuine human suffering that such a promise can impose.", fn: "Explanation" },
            { text: "A logging town shut down to protect a single bird pays a price in livelihoods that the first view too easily waves away.", fn: "Example", vocab: [{ term: "livelihoods", gloss: "生計" }] },
            { text: "Realistically, we cannot save every species in any case; some are too far gone, and the attempt would exhaust resources better spent where they can still do good.", fn: "Develop" },
            { text: "Those who resist extraordinary efforts are right that good intentions do not cancel real costs.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — My position: priorities, not absolutes",
          sentences: [
            { text: "On balance, my own view takes the first position's seriousness about extinction and disciplines it with the second's honesty about cost.", fn: "Pivot (my position)", moves: ["On balance"] },
            { text: "Society should make real and sometimes considerable efforts to save species, but it should set priorities rather than pledge to save every one at any price.", fn: "Point" },
            { text: "Where a species is ecologically vital, or can be saved at reasonable cost, the case for action is overwhelming; where the cost is ruinous and the prospects hopeless, the same resources may do more good elsewhere.", fn: "Explanation" },
            { text: "This is not a betrayal of nature but the only responsible way to protect it, since pretending cost does not exist would discredit conservation, while pretending species do not matter would impoverish the world.", fn: "Develop", vocab: [{ term: "conservation", gloss: "保育；資源保護" }] },
            { text: "The wise course rejects both every species at any cost and no extraordinary efforts at all.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, my position aligns more closely with those who would fight to save species, but it accepts the other side's insistence that cost is real.", fn: "Restate (which view)", moves: ["In conclusion"] },
            { text: "Extinction is final and the value of species easy to underestimate, yet resources are limited and human welfare matters, so the answer is serious, prioritized effort rather than an absolute rule.", fn: "Synthesis" },
            { text: "We should save what we can, weigh honestly what we cannot, and refuse both reckless extinction and reckless expense.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-044",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that the purpose of education is to free the mind and the spirit. Others believe that formal education tends to restrain our minds and spirits rather than set them free.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a two-views response that argues education at its best frees the mind and that the restraint the second view describes is a failure of practice, not the nature of education; even-handed and clearly organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Ask whether education liberates the mind or cages it, and you will get passionate answers on both sides.", fn: "Hook" },
            { text: "Some insist that the purpose of education is to free the mind and the spirit; others reply that formal education, as it is actually practiced, tends to restrain them instead.", fn: "Context (state both views)" },
            { text: "Both views describe something real, but my position is that education at its best frees the mind, and that the restraint the second view describes is a failure of formal schooling rather than the nature of education itself.", fn: "Thesis statement (which view aligns)" },
          ],
        },
        {
          role: "Body — The case that education frees",
          sentences: [
            { text: "The first view rests on what education ideally does: it hands us the tools to think for ourselves.", fn: "Topic sentence (view one)" },
            { text: "Learning to read, to reason, to weigh evidence, and to imagine other lives expands the boundaries of a mind that ignorance would otherwise keep small.", fn: "Explanation" },
            { text: "A student who discovers history, science, and literature gains a thousand vantage points beyond the narrow world she was born into.", fn: "Example" },
            { text: "Real education does not tell people what to think but equips them to question, which is the very definition of a freed mind.", fn: "Develop" },
            { text: "On this view, education is the great liberator, the path out of the cave of inherited prejudice.", fn: "Sub-conclusion", vocab: [{ term: "liberator", gloss: "解放者" }, { term: "prejudice", gloss: "偏見；成見" }] },
            { text: "Knowledge, used well, is what makes independent thought possible at all.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The case that schooling restrains",
          sentences: [
            { text: "However, the second view points to something every student has felt: that schooling can also cramp the mind it claims to free.", fn: "Pivot (view two)", moves: ["However"] },
            { text: "Formal education often rewards obedience over curiosity, the right answer over the good question, and conformity over originality.", fn: "Point", vocab: [{ term: "conformity", gloss: "從眾；墨守成規" }, { term: "originality", gloss: "原創性" }] },
            { text: "A regime of standardized tests, rigid curricula, and constant ranking can train students to follow instructions and fear mistakes rather than to think boldly.", fn: "Explanation", vocab: [{ term: "standardized", gloss: "標準化的" }] },
            { text: "Many a creative child has had her imagination dulled by years of being told to color inside the lines and memorize what she was given.", fn: "Example" },
            { text: "When education becomes mere training — filling minds with approved facts and punishing dissent — it does indeed restrain the spirit it ought to release.", fn: "Develop" },
            { text: "Those who say formal education can imprison the mind are describing a real and common failure.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — My position: success versus failure",
          sentences: [
            { text: "On balance, these are not two equal accounts of education but descriptions of education succeeding and education failing.", fn: "Pivot (my position)", moves: ["On balance"] },
            { text: "The first view captures what education is for; the second captures what it becomes when done badly, and the fault lies in the practice, not the purpose.", fn: "Point" },
            { text: "A rigid school that crushes curiosity has not fulfilled the aim of education and then restrained the mind; it has betrayed that aim, which is precisely to set the mind free.", fn: "Explanation" },
            { text: "The remedy for restraining schools is not less education but better education, one that teaches students to think rather than merely to comply.", fn: "Develop" },
            { text: "Properly understood, the second view is a warning about how education can fail, and the first is a statement of what it should achieve.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, my position aligns with those who say education frees the mind, while taking seriously the warning that formal schooling can do the opposite.", fn: "Restate (which view)", moves: ["In conclusion"] },
            { text: "Education rightly conceived liberates, and where it instead restrains, the failure lies in rigid, fearful practice rather than in learning itself.", fn: "Synthesis" },
            { text: "The goal is not to abandon formal education but to make sure it keeps its promise to set the mind free.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-045",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Some people believe it is often necessary, even desirable, for political leaders to withhold information from the public. Others believe that the public has a right to be fully informed.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a two-views response that grants the necessity of some secrecy while siding firmly with the public's right to know, treating openness as the default and secrecy as a narrow exception; even-handed and well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every government keeps secrets, and every government insists its secrets are necessary, which makes the question of what leaders may hide from the public a permanent democratic dilemma.", fn: "Hook" },
            { text: "Some hold that political leaders must sometimes, even desirably, withhold information from the public; others hold that the public has a right to be fully informed.", fn: "Context (state both views)" },
            { text: "Each view protects something real, but my position leans firmly toward the public's right to know: leaders may withhold information only in narrow and temporary circumstances, and the burden of proof must always rest on secrecy, not on openness.", fn: "Thesis statement (which view aligns)" },
          ],
        },
        {
          role: "Body — The case for withholding",
          sentences: [
            { text: "The first view rests on the genuine necessity of some secrecy in public life.", fn: "Topic sentence (view one)" },
            { text: "A government cannot broadcast troop movements during a war, the details of an ongoing investigation, or the private medical records of citizens without doing real harm.", fn: "Example" },
            { text: "Some information, released at the wrong moment, endangers lives, ruins delicate negotiations, or hands an advantage to enemies and criminals.", fn: "Explanation" },
            { text: "Leaders also handle complex matters the public cannot judge in real time, and a constant demand for full disclosure can paralyze decisions that require confidentiality to be made at all.", fn: "Develop", vocab: [{ term: "confidentiality", gloss: "機密；保密" }] },
            { text: "Those who defend some withholding are right that absolute, instant transparency would be reckless.", fn: "Sub-conclusion", vocab: [{ term: "transparency", gloss: "透明；公開" }] },
            { text: "Not every truth can safely be told the very moment it is known.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The case for full information",
          sentences: [
            { text: "However, the second view guards something even more fundamental: the very basis of self-government.", fn: "Pivot (view two)", moves: ["However"] },
            { text: "In a democracy the people are sovereign, and they cannot judge their leaders, vote wisely, or consent to policies they are not allowed to know about.", fn: "Point", vocab: [{ term: "sovereign", gloss: "擁有最高權力的；主權的" }] },
            { text: "An uninformed public is a powerless one, and leaders who control what citizens know end up controlling the citizens themselves.", fn: "Explanation" },
            { text: "History shows that necessary secrecy is the favorite disguise of corruption and abuse, from hidden wars to covered-up scandals justified, always, as protecting the public.", fn: "Example" },
            { text: "Once leaders are trusted to decide what the public needs to know, the exception swallows the rule, and secrecy expands to shield not the nation but those in power.", fn: "Develop" },
            { text: "Those who insist on the right to be informed are right that secrecy is the natural enemy of accountability.", fn: "Sub-conclusion", vocab: [{ term: "accountability", gloss: "問責；負責" }] },
            { text: "A government that hides too much soon has too much to hide.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — My position: openness as the default",
          sentences: [
            { text: "On balance, my own view sides with the public's right to know, while admitting the narrow exceptions the first view defends.", fn: "Pivot (my position)", moves: ["On balance"] },
            { text: "The right principle is that openness is the default and secrecy the exception, justified only by a clear and serious harm, limited in scope, and temporary in duration.", fn: "Point" },
            { text: "A leader may delay announcing a military operation, but not hide a war's true cost; may protect a name during an investigation, but not bury its findings forever.", fn: "Explanation" },
            { text: "The danger of too much disclosure is real but manageable; the danger of leaders deciding in secret what their citizens may know is corrosive to democracy itself.", fn: "Develop", vocab: [{ term: "corrosive", gloss: "腐蝕性的；逐漸破壞的" }] },
            { text: "When in doubt, a free society errs toward telling the people the truth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, my position aligns far more closely with those who defend the public's right to be informed than with those who would license leaders to withhold.", fn: "Restate (which view)", moves: ["In conclusion"] },
            { text: "Some secrecy is genuinely necessary, but it must be the rare, justified exception, because a public kept in the dark cannot govern itself, and self-government is the whole point.", fn: "Synthesis" },
            { text: "Leaders should be allowed to keep only the secrets they can openly justify keeping.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-046",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: Universities should require every student to take a variety of courses outside the student's major field of study. Reason: Acquiring knowledge of various academic disciplines is the best way to become truly educated.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): correctly affirms the claim while showing the reason overreaches in calling breadth the best way to be educated; clear and well organized, though it could press the depth argument a little harder.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "The idea that a chemistry student should also read some history, or a poet take a course in statistics, has a long and respectable pedigree.", fn: "Hook" },
            { text: "The claim that universities should require such breadth rests on the reason that acquiring knowledge of various disciplines is the best way to become truly educated.", fn: "Context (claim and reason)" },
            { text: "The claim is sound and the reason contains real truth, but the reason overstates its case, because exposure to many disciplines is one good path to a true education, not the single best one.", fn: "Thesis statement (evaluate both)" },
          ],
        },
        {
          role: "Body — The reason is partly right",
          sentences: [
            { text: "First, the reason correctly identifies a genuine benefit of breadth.", fn: "Topic sentence (assess the reason)", moves: ["First"] },
            { text: "A person who knows only one field sees the world through a single lens, while one who has studied several can connect ideas, spot what specialists miss, and think across boundaries.", fn: "Explanation", vocab: [{ term: "lens", gloss: "視角；觀點" }] },
            { text: "An engineer who has also studied ethics builds differently, and a doctor who has read literature understands patients as people rather than merely as cases.", fn: "Example" },
            { text: "Real problems rarely respect the divisions between subjects, so a mind stocked with several disciplines is better equipped for the messy, mixed questions of adult life.", fn: "Develop" },
            { text: "To this extent the reason is valid, and the claim follows from it: breadth genuinely contributes to becoming educated.", fn: "Sub-conclusion" },
            { text: "Knowing more than one subject is a real ingredient of a broad mind.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But 'best way' overstates it",
          sentences: [
            { text: "However, the reason claims too much when it calls breadth the best way to become truly educated.", fn: "Pivot (test the link)", moves: ["However"] },
            { text: "Acquiring knowledge of various disciplines is not the same as being truly educated, which involves judgment, depth, and the capacity to think, not merely a scattering of facts from many fields.", fn: "Point" },
            { text: "A student could sample a dozen subjects and remain shallow in all of them, mistaking acquaintance with genuine understanding.", fn: "Explanation", vocab: [{ term: "acquaintance", gloss: "略知；泛泛之交" }] },
            { text: "There are other, arguably deeper roads to a true education: mastering a single field profoundly can teach rigor, humility, and how knowledge is actually built.", fn: "Develop", vocab: [{ term: "rigor", gloss: "嚴謹" }, { term: "humility", gloss: "謙遜" }] },
            { text: "A scholar who has gone truly deep in one discipline often understands more about thinking itself than a dilettante who has dabbled in ten.", fn: "Example", vocab: [{ term: "dilettante", gloss: "涉獵者；半吊子" }] },
            { text: "Breadth is one route to a true education, but to crown it the best ignores the rival claims of depth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — So the claim survives, the reason softens",
          sentences: [
            { text: "Moreover, because the reason overreaches, it supports the claim less firmly than it appears to.", fn: "Pivot", moves: ["Moreover"] },
            { text: "If breadth is merely one good path among several, then requiring it is reasonable but not obligatory in the way the reason implies.", fn: "Point" },
            { text: "The strongest case for the requirement is not that breadth is the best route to education, but that it is a reliable one which students left to themselves often skip.", fn: "Explanation" },
            { text: "Defended that way the claim stands; defended by the reason's stronger assertion, it promises more than breadth can actually deliver.", fn: "Develop" },
            { text: "The requirement is wise; the reason simply oversells it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the claim is right but the reason is only partly so.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Universities should require some study outside the major because breadth genuinely helps, yet the reason errs in calling it the best way to become educated, when depth offers a powerful path of its own.", fn: "Synthesis" },
            { text: "Breadth and depth together make a true education, and no single one of them deserves to be called the best.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-047",
    type: "issue",
    category: "The Individual",
    prompt:
      "Knowing about the past cannot help people to make important decisions today.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): rejects the statement with strong reasons about patterns and avoidable error, then concedes that history offers no mechanical formula before reaffirming its value; persuasive and well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Those who forget the past, the saying goes, are condemned to repeat it, and the statement boldly denies the wisdom of that warning.", fn: "Hook" },
            { text: "It asserts that knowing about the past cannot help people make important decisions today.", fn: "Context (the statement)" },
            { text: "The statement is mistaken, because while the past never repeats exactly, knowledge of it is one of the most powerful guides we have for the decisions of the present.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — History reveals patterns and consequences",
          sentences: [
            { text: "First, history reveals patterns and consequences that no amount of present cleverness could supply on its own.", fn: "Topic sentence", vocab: [{ term: "patterns", gloss: "模式；規律" }], moves: ["First"] },
            { text: "By studying how past decisions turned out, we learn which actions tend to lead to which results, turning the experience of millions into guidance for our own choices.", fn: "Explanation" },
            { text: "Economists study past depressions to avoid repeating the policies that deepened them, and doctors study the history of disease to recognize an epidemic before it spreads.", fn: "Example" },
            { text: "A leader deciding whether to appease an aggressor, or a nation weighing a costly war, has centuries of comparable cases to consult, each a warning or an encouragement.", fn: "Develop" },
            { text: "To make important decisions without this record is to throw away the hard-won lessons of everyone who faced similar choices before.", fn: "Sub-conclusion" },
            { text: "Experience is the most expensive teacher there is, and history lets us learn from experience we never had to pay for ourselves.", fn: "Reinforce" },
            { text: "The past is the only laboratory in which the results of human decisions can actually be observed.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Ignoring the past repeats its mistakes",
          sentences: [
            { text: "Moreover, those who ignore the past do not escape it; they simply blunder into the errors it had already exposed.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Every generation is tempted to believe its situation is unprecedented, and that belief is precisely what leads it to repeat old catastrophes.", fn: "Point", vocab: [{ term: "unprecedented", gloss: "前所未有的" }] },
            { text: "Financial bubbles, failed invasions, and political extremism recur in part because each new set of decision-makers assumes the old rules do not apply to them.", fn: "Example" },
            { text: "Knowing the history of such episodes is exactly what allows a wise person to recognize the warning signs and choose differently.", fn: "Explanation" },
            { text: "Even in private life, understanding how past choices shaped a family, a company, or a community helps people decide what to do next.", fn: "Develop" },
            { text: "Far from being useless, historical knowledge is often the difference between a considered decision and a blind one.", fn: "Sub-conclusion", vocab: [{ term: "considered", gloss: "深思熟慮的" }] },
          ],
        },
        {
          role: "Body — History guides without dictating",
          sentences: [
            { text: "There is, however, a limited truth the statement may be reaching for.", fn: "Concede", moves: ["however"] },
            { text: "The past never repeats itself exactly, and circumstances change, so history offers no formula that can be applied mechanically to a new decision.", fn: "Develop the concession" },
            { text: "But to say history cannot be copied blindly is very different from saying it cannot help at all.", fn: "Rebut" },
            { text: "Used with judgment — as a source of patterns, warnings, and analogies rather than rigid rules — knowledge of the past sharpens present decisions rather than dictating them.", fn: "Explain", vocab: [{ term: "analogies", gloss: "類比；類推" }] },
            { text: "History is a guide, not a script, and a guide is exactly what hard decisions require.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, knowing about the past does not just help with today's decisions; it is one of our most valuable aids in making them.", fn: "Restate", moves: ["In conclusion"] },
            { text: "The past supplies the patterns, precedents, and warnings that present circumstances alone cannot, and although it never repeats exactly, the decision-maker who ignores it acts half blind.", fn: "Synthesis", vocab: [{ term: "precedents", gloss: "先例；前例" }] },
            { text: "We cannot see the future, but the past is the closest thing we have to a map.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-048",
    type: "issue",
    category: "Technology",
    prompt:
      "In this age of intensive media coverage, it is no longer possible for a society to regard any living man or woman as a hero.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that media coverage has ended the flawless idol while arguing that heroism rests on deeds rather than perfection, and that the media age has its own visible heroes; coherent and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "In a world of cameras, leaks, and relentless reporting, no public figure can keep their flaws hidden for long, and the statement concludes that heroism itself has become impossible.", fn: "Hook" },
            { text: "It claims that in this age of intensive media coverage, a society can no longer regard any living man or woman as a hero.", fn: "Context (the statement)" },
            { text: "Media exposure has certainly changed how we admire, but the statement is wrong, because heroism depends on what a person does, not on whether the cameras ever catch them being ordinary.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Media has ended the flawless idol",
          sentences: [
            { text: "It is true that intensive coverage makes the old kind of flawless hero impossible.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Where past heroes were known through statues and carefully managed stories, today's are filmed, recorded, and subjected to constant scrutiny until every weakness is on display.", fn: "Example", vocab: [{ term: "scrutiny", gloss: "審視；細察" }] },
            { text: "A general's temper, a champion's private failures, a leader's hypocrisies now reach millions, and the polished image cannot survive the exposure.", fn: "Explanation", vocab: [{ term: "hypocrisies", gloss: "偽善；言行不一" }] },
            { text: "The pedestal, in the age of the smartphone, has become very hard to stay on.", fn: "Develop" },
            { text: "So the statement is right that the spotless idol of earlier eras can no longer exist.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But heroism was never about being spotless",
          sentences: [
            { text: "However, this confuses the loss of the flawless image with the loss of heroism itself.", fn: "Pivot", moves: ["However"] },
            { text: "A hero is a person who does something brave, selfless, or great, not a person without faults, and no amount of coverage of those faults can undo a courageous act.", fn: "Point" },
            { text: "We do not stop honoring a firefighter who saved a family, or a doctor who served through a plague, because the media later reveals that they were difficult at home.", fn: "Example" },
            { text: "Heroism attaches to the deed, and deeds are not erased by the discovery that the person who performed them was, like everyone, imperfect.", fn: "Explanation" },
            { text: "If anything, knowing that heroes are flawed human beings who rose to a great moment makes their courage more admirable, because it shows such courage is within ordinary reach.", fn: "Develop" },
            { text: "The cameras reveal that heroes are people; they do not reveal that there are no heroes.", fn: "Sub-conclusion" },
            { text: "Courage shown in a crisis is not cancelled by rudeness shown at the dinner table.", fn: "Sharpen" },
            { text: "What media coverage destroys is the myth of perfection, not the reality of greatness.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The media age has its own heroes",
          sentences: [
            { text: "Moreover, the same media that exposes flaws also reveals heroism that earlier ages would never have seen.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Cameras now broadcast the ordinary rescuer, the whistleblower, the aid worker, and the protester, turning unknown people into widely admired figures.", fn: "Point" },
            { text: "We admire them with full knowledge of their humanity, which is a more honest admiration than the worship of distant, airbrushed idols ever was.", fn: "Explanation", vocab: [{ term: "admiration", gloss: "欽佩；敬仰" }] },
            { text: "Across the world, living people are still revered for real courage and real sacrifice, which would be impossible if the statement were true.", fn: "Develop", vocab: [{ term: "revered", gloss: "崇敬；敬仰" }] },
            { text: "If anything, a hero we know to be human is one we can actually hope to emulate.", fn: "Develop" },
            { text: "Intensive coverage has not abolished heroes; it has only made us admire them with our eyes open.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the age of media coverage has changed heroism, not ended it.", fn: "Restate", moves: ["In conclusion"] },
            { text: "It has killed the illusion of the flawless idol, but heroism, which rests on great deeds rather than perfect lives, survives the exposure unharmed.", fn: "Synthesis", vocab: [{ term: "illusion", gloss: "錯覺；幻象" }] },
            { text: "We can still call the living heroes; we have simply learned to honor real people instead of polished myths.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-049",
    type: "issue",
    category: "Education",
    prompt:
      "We can usually learn much more from people whose views we share than from people whose views contradict our own.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): argues that agreement mostly confirms while disagreement challenges and corrects, then concedes that we learn from knowledgeable allies only where they differ from us; clear and well reasoned.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is easier and more pleasant to talk with people who agree with us, and the statement turns that comfort into a claim about learning.", fn: "Hook" },
            { text: "It holds that we usually learn much more from people whose views we share than from those whose views contradict our own.", fn: "Context (the statement)" },
            { text: "I disagree, because while like-minded company is comfortable and sometimes useful, it is disagreement, not agreement, that most reliably teaches us something new.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Agreement confirms, rarely teaches",
          sentences: [
            { text: "First, people who share our views tend to confirm what we already believe rather than expand it.", fn: "Topic sentence", moves: ["First"] },
            { text: "When everyone in a conversation starts from the same assumptions, those assumptions go unexamined, and we leave the exchange thinking exactly what we thought before.", fn: "Explanation", vocab: [{ term: "assumptions", gloss: "假設；前提" }] },
            { text: "A roomful of people who agree may sharpen their shared conclusions, but they rarely discover the error they all happen to share.", fn: "Example" },
            { text: "Comfort and confirmation feel like learning, but mostly they reinforce, and reinforcement is not the same as growth.", fn: "Develop", vocab: [{ term: "confirmation", gloss: "確認；認同" }, { term: "reinforcement", gloss: "強化；加強" }] },
            { text: "From those who echo us, we usually receive applause rather than an education.", fn: "Sub-conclusion" },
            { text: "An echo, however loud, adds nothing to the voice it returns.", fn: "Aphoristic" },
            { text: "Agreement polishes our opinions; it seldom corrects them.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Disagreement teaches the most",
          sentences: [
            { text: "However, it is the person who disagrees who actually teaches us the most.", fn: "Pivot", moves: ["However"] },
            { text: "An opponent points out the fact we ignored, the weakness in our reasoning, and the possibility we never considered, none of which an ally was likely to raise.", fn: "Point" },
            { text: "Defending a belief against genuine challenge forces us to examine its foundations, discard what cannot be defended, and understand more deeply whatever survives.", fn: "Explanation" },
            { text: "Scientists advance by attacking one another's theories, courts pursue truth through opposing arguments, and the best thinkers deliberately seek out their sharpest critics.", fn: "Example", vocab: [{ term: "critics", gloss: "批評者；評論者" }] },
            { text: "Every important change of mind begins with encountering a view we did not already hold, which by definition comes from someone who disagrees.", fn: "Develop" },
            { text: "Comfort asks nothing of us, while a real challenge demands that we actually think.", fn: "Sharpen" },
            { text: "A belief that has never been attacked has never really been tested.", fn: "Develop" },
            { text: "It is friction, not flattery, that sharpens a mind.", fn: "Sharpen" },
            { text: "We are stretched by difference and lulled by sameness.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The kernel of truth",
          sentences: [
            { text: "There is, however, a sliver of truth in the statement.", fn: "Concede", moves: ["however"] },
            { text: "We do sometimes learn efficiently from those who share our broad outlook but know more than we do — a mentor, an expert, a more experienced colleague.", fn: "Develop the concession", vocab: [{ term: "mentor", gloss: "導師；良師" }] },
            { text: "But notice that we learn from them precisely where they differ from us, where they know what we do not, not where they merely agree.", fn: "Rebut" },
            { text: "What teaches is always the gap between their view and ours, and that gap is widest with those who genuinely disagree.", fn: "Explain" },
            { text: "Even a great teacher helps us most by knowing precisely what we do not yet know.", fn: "Reinforce" },
            { text: "Even learning from an ally is, in truth, learning from a kind of difference.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the statement has it backward: we usually learn more from those who contradict us than from those who share our views.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Agreement comforts and confirms, but disagreement challenges, corrects, and enlarges, which is what learning actually requires.", fn: "Synthesis" },
            { text: "If you want to be reassured, seek those who agree; if you want to learn, seek those who do not.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-050",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The most effective way to understand contemporary culture is to analyze the trends of its youth.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that youth trends forecast a culture's direction while arguing that a culture is also its institutions, history, and enduring habits, so youth is one window and not the most effective; well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Each generation's young people seem to embody where a culture is heading, which makes the statement's focus on youth immediately appealing.", fn: "Hook" },
            { text: "It holds that the most effective way to understand contemporary culture is to analyze the trends of its youth.", fn: "Context (the statement)" },
            { text: "The trends of the young do offer a revealing window onto a culture, but the statement overstates the case, because youth show only one part of a culture and miss much of what shapes it.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Youth reveal a great deal",
          sentences: [
            { text: "It is true that the young are a culture's most sensitive barometer.", fn: "Concession (topic sentence)", vocab: [{ term: "barometer", gloss: "風向標；晴雨表" }], moves: ["It is true that"] },
            { text: "Less bound by established habits, young people adopt new technologies, language, music, and values first, so the trends visible among them often forecast where the wider culture is going.", fn: "Explanation" },
            { text: "Movements in music, fashion, and politics frequently begin with the young and only later spread to everyone else, which is why advertisers and analysts watch them so closely.", fn: "Example" },
            { text: "To study a culture's youth is therefore to glimpse its likely future and to see which old assumptions are quietly being abandoned.", fn: "Develop" },
            { text: "So the statement is right that youth trends are a powerful and revealing source of insight.", fn: "Sub-conclusion" },
            { text: "If you want to know where a society is going, the young are a good place to look.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But youth are only part of the picture",
          sentences: [
            { text: "However, to call this the most effective way to understand a culture ignores how much of that culture lies elsewhere.", fn: "Pivot", moves: ["However"] },
            { text: "A culture is not only its newest trends but its institutions, its history, its laws, its religions, and the settled habits of the many who are no longer young.", fn: "Point", vocab: [{ term: "institutions", gloss: "制度；體制" }] },
            { text: "The young show what is changing, but understanding a culture also means understanding what endures, and the forces of continuity rarely live among the young.", fn: "Explanation", vocab: [{ term: "continuity", gloss: "延續性；連續性" }] },
            { text: "To grasp a society one must study its governments and corporations, its families and traditions, its economy and its memory, none of which youth trends reveal on their own.", fn: "Example" },
            { text: "Much of what is most powerful in a culture is controlled by the middle-aged and the old, whose decisions shape the very world the young merely react to.", fn: "Develop" },
            { text: "Looking only at youth is like judging a river by its surface ripples while ignoring the deep current beneath.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Youth trends can mislead",
          sentences: [
            { text: "Moreover, the trends of the young can positively mislead an observer who relies on them alone.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Much youth culture is transient fashion that fades, a passing enthusiasm mistaken, in the moment, for a lasting transformation.", fn: "Point", vocab: [{ term: "transient", gloss: "短暫的；轉瞬即逝的" }] },
            { text: "Every era's elders have wrongly predicted the future from the fads of its young, which shows how unreliable a sole guide those fads can be.", fn: "Explanation" },
            { text: "Youth trends are best read alongside everything else, as one source among many rather than as a master key.", fn: "Develop" },
            { text: "The surface tells part of the story; it is not the whole of it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, analyzing the trends of its youth is one effective way to understand a culture, but not the single most effective one.", fn: "Restate", moves: ["In conclusion"] },
            { text: "The young reveal what is emerging, yet a culture is also its institutions, history, and enduring habits, so a full understanding must look well beyond them.", fn: "Synthesis", vocab: [{ term: "enduring", gloss: "持久的；歷久不衰的" }] },
            { text: "To understand a culture, watch its youth by all means, but do not forget to study everyone and everything else they are reacting to.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-051",
    type: "issue",
    category: "Technology",
    prompt:
      "People's attitudes are determined more by their immediate situation or surroundings than by society as a whole.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants the power of immediate surroundings while showing that society reaches us mainly through them, so the statement's opposition between the two is false; well organized and thoughtful.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Why do we believe what we believe? The statement offers a tidy answer: that our attitudes are shaped more by the people and circumstances right around us than by the larger society we live in.", fn: "Hook" },
            { text: "On this view, the family, the workplace, and the neighborhood matter more to how we think than nation, culture, or the spirit of the age.", fn: "Context (the statement)" },
            { text: "Our immediate surroundings do exert a powerful and underrated influence, but the statement draws too sharp a line, because society as a whole largely works through those very surroundings.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Immediate surroundings shape us",
          sentences: [
            { text: "It is true that the people and conditions closest to us shape our attitudes with surprising force.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "We absorb the opinions of our friends, adjust to the norms of our workplace, and adapt to the conditions we face daily, often without even noticing.", fn: "Explanation", vocab: [{ term: "norms", gloss: "規範；常規" }] },
            { text: "A person can hold one set of attitudes among colleagues and another at a family dinner, shifting with the immediate company rather than with any abstract social creed.", fn: "Example" },
            { text: "Studies of behavior repeatedly show that situation overpowers disposition: decent people behave badly in cruel environments, and ordinary people rise in supportive ones.", fn: "Develop", vocab: [{ term: "disposition", gloss: "性情；本性" }] },
            { text: "So the statement is right that the near and the concrete shape us more than we like to admit.", fn: "Sub-conclusion" },
            { text: "We are, to a striking degree, the products of our immediate company.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But society acts through the immediate",
          sentences: [
            { text: "However, the statement sets immediate surroundings against society as if the two were rivals, when in fact society reaches us mainly through them.", fn: "Pivot", moves: ["However"] },
            { text: "The norms of our workplace, the opinions of our friends, and the conditions of our neighborhood are not separate from society; they are the local channels through which a whole society transmits its values.", fn: "Point", vocab: [{ term: "transmit", gloss: "傳遞；傳達" }] },
            { text: "The attitudes we soak up from those around us were themselves shaped by the culture, laws, media, and history of the larger society.", fn: "Explanation" },
            { text: "A child's immediate family teaches him a language, a religion, and a set of prejudices that the family did not invent but inherited from society at large.", fn: "Example", vocab: [{ term: "prejudices", gloss: "偏見；成見" }] },
            { text: "To say we are shaped more by our surroundings than by society is therefore a little like saying a river is shaped more by its banks than by the rain that fills it.", fn: "Develop" },
            { text: "The immediate and the social are not two competing forces but the near and far ends of a single one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Where the statement holds and fails",
          sentences: [
            { text: "Moreover, which influence dominates depends on the attitude in question.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Day-to-day moods and behaviors do bend most to immediate circumstance, but our deepest values, about justice, family, faith, and nation, are usually inherited from the wider society long before any particular situation acts on them.", fn: "Point", vocab: [{ term: "inherited", gloss: "承襲的；繼承來的" }] },
            { text: "The statement describes the surface of our attitudes well and their foundations poorly.", fn: "Explanation" },
            { text: "Both forces are real, and a full account of why we think as we do needs the near situation and the far society together.", fn: "Develop" },
            { text: "We are shaped from close up and from far away at once.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, immediate surroundings powerfully shape our attitudes, but not in opposition to society, which usually acts through them.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Situation often governs our daily attitudes, while society shapes the deeper values and the very surroundings that influence us, so the two cannot be cleanly weighed against each other.", fn: "Synthesis" },
            { text: "We are formed not by our surroundings instead of society, but by society as it reaches us through our surroundings.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-052",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Nations should suspend government funding for the arts when significant numbers of their citizens are hungry or unemployed.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that shows cutting arts barely touches hunger while sacrificing real value, and that the named conditions would suspend funding almost permanently; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "When people are going hungry, spending public money on paintings and symphonies can look like an indulgence the nation cannot afford.", fn: "Hook" },
            { text: "The recommendation acts on this intuition, urging that governments suspend funding for the arts whenever significant numbers of citizens are hungry or unemployed.", fn: "Context (the recommendation)" },
            { text: "The impulse is humane, but the recommendation is mistaken, because arts funding is too small to relieve hunger, too valuable to abandon, and the conditions it names would justify suspending it almost permanently.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Cutting the arts will not feed anyone",
          sentences: [
            { text: "First, suspending arts funding would do almost nothing to feed the hungry or employ the jobless.", fn: "Topic sentence", moves: ["First"] },
            { text: "Government arts budgets are a negligible fraction of public spending, and redirecting them would barely register against the vast cost of hunger and unemployment.", fn: "Explanation", vocab: [{ term: "negligible", gloss: "微不足道的" }] },
            { text: "A nation could cancel every grant to every museum and orchestra and still not dent a serious unemployment crisis.", fn: "Example" },
            { text: "The recommendation offers the appearance of compassion — a visible sacrifice of something frivolous — while accomplishing little for the people it claims to help.", fn: "Develop", vocab: [{ term: "frivolous", gloss: "輕浮的；無關緊要的" }] },
            { text: "A gesture that feels responsible but changes nothing is not good policy.", fn: "Sub-conclusion" },
            { text: "The hungry are simply not fed by the cancellation of a concert.", fn: "Sharpen" },
            { text: "Symbolism is no substitute for substance.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The arts are not a disposable luxury",
          sentences: [
            { text: "Moreover, the arts are not a luxury to be discarded the moment times turn difficult.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Art sustains the spirit, preserves a culture's identity, and gives meaning to lives that material relief alone cannot reach.", fn: "Point", vocab: [{ term: "identity", gloss: "認同；身分" }] },
            { text: "Precisely when people are suffering, a society needs the consolation, expression, and hope that art provides, as the hardest eras in history have understood.", fn: "Explanation", vocab: [{ term: "consolation", gloss: "慰藉；安慰" }] },
            { text: "Governments have funded murals and theaters during depressions not in spite of hard times but because of them, both to employ artists and to lift a despairing public.", fn: "Example" },
            { text: "The arts also support jobs and tourism, so cutting their funding can deepen the very unemployment the recommendation hopes to ease.", fn: "Develop" },
            { text: "The cheapest thing a desperate nation can do is also the most short-sighted: quietly erase its own culture.", fn: "Develop" },
            { text: "A people robbed of its culture has lost something it cannot eat its way back to.", fn: "Develop" },
            { text: "To treat art as the first thing to sacrifice is to misunderstand what a society is even for.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Priorities at the margin, not abolition",
          sentences: [
            { text: "However, the recommendation is not entirely without merit.", fn: "Concede", moves: ["However"] },
            { text: "Resources are limited, and in a genuine emergency a government must put feeding its people ahead of funding a new gallery.", fn: "Develop the concession" },
            { text: "But that is an argument for sensible priorities at the margin, not for suspending arts funding wholesale whenever hardship exists.", fn: "Rebut" },
            { text: "Hunger and unemployment, in some measure, are nearly always present, so a rule to suspend the arts whenever they appear would suspend them forever.", fn: "Explain" },
            { text: "A crisis calls for careful triage, not for cultural amputation.", fn: "Aphoristic" },
            { text: "Adjusting budgets in a crisis is prudent; abolishing a nation's cultural life is not.", fn: "Sub-conclusion", vocab: [{ term: "prudent", gloss: "審慎的；明智的" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, nations should not suspend arts funding simply because some citizens are hungry or unemployed.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because such cuts barely touch the problem while sacrificing something genuinely valuable, and because hardship is nearly constant, the recommendation would do real harm for little gain.", fn: "Synthesis" },
            { text: "A wise nation feeds its people and keeps its art, recognizing that it needs both to be worth living in.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-053",
    type: "issue",
    category: "Education",
    prompt:
      "All parents should be required to volunteer time to their children's schools.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that shows a mandate would punish the families least able to comply and drain volunteering of its value, then offers a better path of encouragement; persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Schools work better when parents are involved, and few would deny that a child benefits when their family takes an interest in their education.", fn: "Hook" },
            { text: "From this truth the recommendation draws a rule: that all parents should be required to volunteer time at their children's schools.", fn: "Context (the recommendation)" },
            { text: "Parental involvement is valuable and should be encouraged, but requiring it would be unfair, impractical, and self-defeating, because the parents least able to comply are often the ones whose children need the most help.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — A mandate punishes the struggling",
          sentences: [
            { text: "First, a requirement to volunteer would fall hardest on the parents least able to meet it.", fn: "Topic sentence", moves: ["First"] },
            { text: "A single mother working two jobs, a father on a night shift, or a family caring for a sick relative cannot easily give hours to a school, however much they may wish to.", fn: "Explanation" },
            { text: "To require their time is to set up many devoted parents to fail, exposing them to blame for a duty their circumstances make impossible.", fn: "Develop" },
            { text: "And it is exactly these overstretched families whose children most need support, so a mandate would punish the vulnerable and widen the gap between rich and poor schools.", fn: "Reinforce", vocab: [{ term: "vulnerable", gloss: "弱勢的；易受傷害的" }] },
            { text: "A rule the wealthy can satisfy easily and the struggling cannot is not fairness but a hidden penalty on poverty.", fn: "Sub-conclusion" },
            { text: "The families with the least time to give are usually the ones whose children most need a school that helps.", fn: "Reinforce" },
            { text: "Good intentions do not make an impossible demand reasonable.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Compulsion poisons volunteering",
          sentences: [
            { text: "Moreover, the word required contradicts the very thing that makes volunteering valuable.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Volunteering means giving freely, and an obligation enforced by penalty is no longer volunteering but conscription.", fn: "Point", vocab: [{ term: "conscription", gloss: "強制徵召；徵募" }] },
            { text: "Forced volunteers tend to show up resentful and contribute grudgingly, which helps a school far less than a few willing hands.", fn: "Explanation", vocab: [{ term: "resentful", gloss: "怨恨的；忿忿不平的" }] },
            { text: "The genuine involvement that benefits children grows from interest and goodwill, neither of which can be commanded into being.", fn: "Develop" },
            { text: "A parent dragged to a classroom under threat is unlikely to inspire anyone, including their own child.", fn: "Example" },
            { text: "A school full of grudging conscripts is no better off than a school with none.", fn: "Develop" },
            { text: "Help offered under threat is rarely much help at all.", fn: "Sharpen" },
            { text: "Compulsion may produce attendance, but it cannot produce the engagement that actually matters.", fn: "Sub-conclusion", vocab: [{ term: "engagement", gloss: "投入；參與" }] },
          ],
        },
        {
          role: "Body — Encourage, do not require",
          sentences: [
            { text: "However, the recommendation rightly senses that parental involvement matters enormously.", fn: "Concede", moves: ["However"] },
            { text: "Schools genuinely benefit when parents help, and a culture of involvement is well worth actively building.", fn: "Develop the concession" },
            { text: "But the way to build it is to invite, enable, and welcome parents — flexible hours, meaningful roles, real appreciation — not to threaten them.", fn: "Rebut" },
            { text: "Make involvement easy and rewarding and most parents will give what they can; make it a legal duty and you breed only resentment and excuses.", fn: "Explain" },
            { text: "People give most generously when they are asked, not when they are ordered.", fn: "Develop" },
            { text: "Encouragement builds participation; compulsion builds resistance.", fn: "Sub-conclusion", vocab: [{ term: "compulsion", gloss: "強迫；強制" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, parents should be strongly encouraged to help their children's schools, but not required to.", fn: "Restate", moves: ["In conclusion"] },
            { text: "A mandate would burden the families least able to bear it and drain volunteering of the goodwill that gives it value, achieving less than a warm invitation would.", fn: "Synthesis" },
            { text: "The goal is willing partners in a child's education, and willingness is precisely what a requirement destroys.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-054",
    type: "issue",
    category: "Education",
    prompt:
      "Colleges and universities should require their students to spend at least one semester studying in a foreign country.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a recommendation-appropriate response that affirms the value of study abroad while showing a blanket requirement would fall unevenly, and proposes enabling over compelling; concrete and well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A semester abroad can be transformative: a student returns more independent, more open-minded, and at home in a new language and culture.", fn: "Hook" },
            { text: "Persuaded by such benefits, the recommendation would have colleges require every student to spend at least one semester studying in a foreign country.", fn: "Context (the recommendation)" },
            { text: "Study abroad is genuinely valuable and should be vigorously encouraged, but making it a requirement for all would be unfair and impractical, because its costs and demands fall very unevenly on different students.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — The experience really does benefit",
          sentences: [
            { text: "First, the recommendation is right about the value of the experience.", fn: "Topic sentence", moves: ["First"] },
            { text: "Living in another country forces a student to navigate unfamiliar customs, often in another language, building an independence and adaptability that no classroom can teach.", fn: "Explanation", vocab: [{ term: "adaptability", gloss: "適應力" }] },
            { text: "Students return from a semester abroad more confident, more curious about the world, and far better able to see their own society from the outside.", fn: "Example" },
            { text: "In an interconnected world, the ability to understand other cultures is not a luxury but a practical and increasingly necessary skill.", fn: "Develop" },
            { text: "So the benefits the recommendation cites are real, and colleges should do everything reasonable to make the experience available.", fn: "Sub-conclusion" },
            { text: "To stand in an unfamiliar street where no one shares your language is an education a lecture hall cannot imitate.", fn: "Reinforce" },
            { text: "Few experiences expand a young person's horizons so quickly.", fn: "Reinforce", vocab: [{ term: "horizons", gloss: "視野；眼界" }] },
          ],
        },
        {
          role: "Body — A blanket requirement falls unevenly",
          sentences: [
            { text: "However, to require it of every student ignores how differently the demand would land.", fn: "Pivot", moves: ["However"] },
            { text: "Studying abroad is expensive, and a mandate would impose a heavy cost on students already struggling to afford tuition, deepening inequality rather than spreading opportunity.", fn: "Point", vocab: [{ term: "inequality", gloss: "不平等" }] },
            { text: "Some students have caring responsibilities, health conditions, visa difficulties, or jobs that make a semester overseas genuinely impossible.", fn: "Explanation" },
            { text: "A student supporting a family, or one with a disability that makes travel hard, cannot simply drop everything for a semester abroad, however enriching it might be.", fn: "Example" },
            { text: "Forcing the requirement on everyone would either bar such students from graduating or push colleges to grant so many exemptions that the requirement becomes a fiction.", fn: "Develop", vocab: [{ term: "exemptions", gloss: "豁免；例外" }] },
            { text: "A graduation requirement that only the comfortable can meet is no requirement at all.", fn: "Sharpen" },
            { text: "A rule that many students cannot follow is not a sound policy but a barrier dressed as an opportunity.", fn: "Sub-conclusion", vocab: [{ term: "barrier", gloss: "障礙；阻礙" }] },
          ],
        },
        {
          role: "Body — Enable rather than compel",
          sentences: [
            { text: "Moreover, the goals of the recommendation are better served by making study abroad possible than by making it mandatory.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Colleges should fund scholarships, build exchange partnerships, offer shorter and cheaper options, and actively encourage students to go.", fn: "Point" },
            { text: "Remove the obstacles and far more students will choose the experience freely than any mandate could meaningfully reach.", fn: "Explanation" },
            { text: "For those who truly cannot travel, similar growth can be offered closer to home, through programs that bring other cultures to them.", fn: "Develop" },
            { text: "Opportunity offered freely will reach more students than opportunity imposed on everyone.", fn: "Develop" },
            { text: "The aim is to open the door wide, not to push everyone through it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, colleges should make study abroad available and attractive to all, but not require it of all.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because the experience is valuable but its costs fall unevenly, the wise policy removes barriers and encourages participation rather than imposing a mandate many cannot meet.", fn: "Synthesis" },
            { text: "Set the opportunity within everyone's reach, and let the students who can seize it do so willingly.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-055",
    type: "issue",
    category: "Education",
    prompt:
      "Teachers' salaries should be based on the academic performance of their students.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): a recommendation-appropriate response that shows in most circumstances the policy is unfair and distorting, then concedes the case for accountability and offers fairer measures; clear, if treading familiar ground.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It seems only fair to pay the best teachers the most, and a student's performance looks like an objective measure of who the best teachers are.", fn: "Hook" },
            { text: "The recommendation would therefore tie teachers' salaries to the academic performance of their students.", fn: "Context (the recommendation)" },
            { text: "Although the recommendation is appealing, in most circumstances adopting it would do more harm than good, because student performance is shaped by far more than the teacher, and rewarding it directly corrupts teaching itself.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Results are not the teacher's alone",
          sentences: [
            { text: "First, in the circumstances most teachers actually work in, student results reflect forces well beyond their control.", fn: "Topic sentence", moves: ["First"] },
            { text: "Home life, health, language, poverty, and prior schooling shape test scores at least as much as anything that happens in class.", fn: "Explanation" },
            { text: "A gifted teacher in a poor school may lift her students enormously and still see lower scores than a weaker teacher whose pupils arrive already privileged and prepared.", fn: "Example", vocab: [{ term: "privileged", gloss: "享有特權的；優渥的" }] },
            { text: "To pay the first teacher less would reward circumstance over skill, the precise unfairness the policy claims to cure.", fn: "Develop" },
            { text: "Where results depend largely on a student's background, scoring teachers by those results is neither fair nor accurate.", fn: "Sub-conclusion" },
            { text: "Two teachers of equal skill, handed unequal classes, will post unequal scores through no fault of their own.", fn: "Reinforce" },
            { text: "It would judge the gardener by the weather as much as by the gardening.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — It would distort teaching",
          sentences: [
            { text: "Moreover, in almost any school the policy would corrupt the teaching it means to improve.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Teachers paid by test scores have every incentive to teach narrowly to the test, drill memorization, and quietly avoid the weakest students.", fn: "Point", vocab: [{ term: "incentive", gloss: "誘因；動機" }] },
            { text: "The richest parts of education — curiosity, creativity, and character — produce nothing a standardized test records, and so would be the first to be dropped.", fn: "Explanation", vocab: [{ term: "standardized", gloss: "標準化的" }] },
            { text: "Over time the policy would also drive the best teachers away from the struggling schools that need them most, since no one will accept lower pay for harder work.", fn: "Develop" },
            { text: "A measure becomes worthless the moment people start gaming it, and tying livelihoods to scores guarantees they will.", fn: "Example", vocab: [{ term: "livelihoods", gloss: "生計" }] },
            { text: "Pay people for test numbers, and test numbers, not learning, are what you will get.", fn: "Sharpen" },
            { text: "The circumstances in which this policy improves teaching are rare; the ones in which it deforms teaching are everywhere.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Accountability, done better",
          sentences: [
            { text: "However, the recommendation does respond to a legitimate concern.", fn: "Concede", moves: ["However"] },
            { text: "Teachers, like anyone, should be accountable for whether their students actually learn, and a school cannot ignore results entirely.", fn: "Develop the concession", vocab: [{ term: "accountable", gloss: "負有責任的；應問責的" }] },
            { text: "But there are far better measures than raw scores — how much a teacher improves her students over a year, classroom observation, and peer and parent feedback — that reward real effectiveness without the distortions.", fn: "Rebut" },
            { text: "These reward what teachers genuinely control rather than the luck of which students they happened to be given.", fn: "Explain" },
            { text: "Real accountability asks how far students travelled, not merely where they happened to end up.", fn: "Develop" },
            { text: "Accountability is a reason to judge teaching carefully, not to price it by a single number.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, in nearly all realistic circumstances, basing teachers' salaries on student performance would do harm.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because results depend on forces no teacher commands and the policy corrupts the teaching it rewards, a wiser system holds teachers accountable by fairer measures.", fn: "Synthesis" },
            { text: "Pay teachers for the quality of their teaching, not for the accident of which students walk through the door.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-056",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "It is no longer possible for a society to regard any living man or woman as a hero.",
    directions: D_CLAIM,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): rejects the claim with observation and a clear account of what heroism is, then squarely confronts the strongest counter — media exposure and cynicism — and answers it; coherent and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We live in a skeptical age, quick to expose the flaws of anyone we are tempted to admire.", fn: "Hook" },
            { text: "The claim concludes that this skepticism has gone so far that a society can no longer regard any living man or woman as a hero.", fn: "Context (the claim)" },
            { text: "I disagree, because heroism rests on great deeds rather than on flawless lives, and people around the world plainly continue to revere the living for exactly such deeds.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Heroes still exist, visibly",
          sentences: [
            { text: "First, the claim is contradicted by simple observation.", fn: "Topic sentence", moves: ["First"] },
            { text: "Ordinary people still risk their lives for strangers, doctors still serve through plagues, and dissidents still defy tyrants, and the public still honors them for it.", fn: "Example", vocab: [{ term: "dissidents", gloss: "異議人士" }] },
            { text: "Across every country, living figures are admired, thanked, and held up as examples, which would be impossible if heroism had truly become unthinkable.", fn: "Explanation" },
            { text: "We have not lost our capacity for admiration; we have only become more careful about where we place it.", fn: "Develop", vocab: [{ term: "admiration", gloss: "欽佩；敬仰" }] },
            { text: "The living hero is not extinct; he is simply held to an honest standard.", fn: "Sub-conclusion" },
            { text: "Walk through any city after a disaster and you will find people calling their rescuers heroes, and meaning it.", fn: "Reinforce" },
            { text: "A society that still produces courage will always find people to admire.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Heroism never required perfection",
          sentences: [
            { text: "Moreover, the claim assumes that a hero must be without flaws, and that has never been true.", fn: "Pivot", moves: ["Moreover"] },
            { text: "A hero is someone who does something brave or selfless, not someone who is good in every private respect.", fn: "Point" },
            { text: "Discovering that a courageous person is also vain, or difficult, or inconsistent does not undo the courage; it merely shows that heroes are human.", fn: "Explanation" },
            { text: "Indeed, a flawed person who rises to a great moment is more inspiring than a saint, because his example is one ordinary people can actually follow.", fn: "Develop" },
            { text: "We do not stop honoring those who ran toward danger because we later learn they were imperfect at home.", fn: "Example" },
            { text: "A statue may need to be spotless; a hero never did.", fn: "Aphoristic" },
            { text: "What our age has abandoned is not heroism but the fantasy that heroes are perfect.", fn: "Sub-conclusion", vocab: [{ term: "fantasy", gloss: "幻想；不切實際的想法" }] },
          ],
        },
        {
          role: "Body — The strongest objection",
          sentences: [
            { text: "The most compelling case for the claim is that relentless media exposure and public cynicism make it impossible for any reputation to survive intact.", fn: "Identify the strongest counter", vocab: [{ term: "cynicism", gloss: "憤世嫉俗；犬儒態度" }], moves: ["The most compelling"] },
            { text: "There is real force here, since modern coverage does drag every figure's failings into the light and a knowing cynicism is quick to sneer at anyone praised.", fn: "Concede its force" },
            { text: "But this confuses the death of the flawless image with the death of heroism, and exposing a hero's faults is not the same as the erasure of his deeds.", fn: "Rebut", vocab: [{ term: "erasure", gloss: "抹除；消除" }] },
            { text: "Cynics may scoff, yet the firefighter, the rescuer, and the reformer go on being admired by most people precisely because what they did was real.", fn: "Explain" },
            { text: "The cynic's sneer has never once pulled a child from a burning house.", fn: "Sharpen" },
            { text: "Exposure has changed how we admire our heroes; it has not taken them away.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, it remains entirely possible to regard the living as heroes.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because heroism depends on deeds rather than on spotless lives, the modern exposure of human flaws has retired the false idol, not the real hero.", fn: "Synthesis" },
            { text: "We can still honor the living; we have only learned to honor people as they are rather than as we once pretended they were.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-057",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Some people believe that in order to thrive, a society must put its own overall success before the well-being of its individual citizens. Others believe that the well- being of a society can only be measured by the general welfare of all its people.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a two-views response that grants the first view's point about necessary sacrifice while arguing that a society's success is ultimately measured by its people's welfare, and shows the opposition is largely false; even-handed.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "What does it mean for a society to thrive — a powerful nation and a booming economy, or healthy, secure, and contented citizens?", fn: "Hook" },
            { text: "Some hold that a society must put its overall success ahead of the well-being of its individual members; others hold that a society's well-being can only be measured by the general welfare of all its people.", fn: "Context (state both views)" },
            { text: "Each view contains a truth, but my position lies firmly with the second: a society's success is ultimately measured by the welfare of its people, even though achieving that welfare sometimes requires individuals to sacrifice.", fn: "Thesis statement (which view aligns)" },
          ],
        },
        {
          role: "Body — The case for collective success",
          sentences: [
            { text: "The first view rests on a real and uncomfortable fact: that collective goods sometimes demand individual sacrifice.", fn: "Topic sentence (view one)" },
            { text: "A nation at war asks soldiers to risk their lives, a society fighting a plague asks citizens to give up freedoms, and an economy reforming for the future may ask some to bear short-term loss.", fn: "Explanation" },
            { text: "If every individual could veto any policy that cost them personally, a society could never build a road, raise an army, or tax anyone, and would soon collapse.", fn: "Example" },
            { text: "Some overall successes — security, infrastructure, the rule of law — benefit everyone but require that particular people give something up to achieve them.", fn: "Develop", vocab: [{ term: "infrastructure", gloss: "基礎建設" }] },
            { text: "Those who stress overall success are right that a society cannot always indulge every individual and still function.", fn: "Sub-conclusion" },
            { text: "Sometimes the part must yield to the whole.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The case that welfare is the measure",
          sentences: [
            { text: "However, the second view captures something deeper: that a society's success has no meaning apart from the lives of the people who compose it.", fn: "Pivot (view two)", moves: ["However"] },
            { text: "A nation is not a thing over and above its citizens; its wealth, power, and glory are worthless if its people are miserable, oppressed, or poor.", fn: "Point", vocab: [{ term: "oppressed", gloss: "受壓迫的" }] },
            { text: "History is full of successful states — rich, powerful, feared — whose ordinary people lived wretched lives, and we rightly judge such societies failures, not triumphs.", fn: "Explanation" },
            { text: "An empire that builds monuments while its citizens starve has not thrived; it has merely concealed its failure behind a grand facade.", fn: "Example", vocab: [{ term: "facade", gloss: "表面；門面" }] },
            { text: "To put overall success above the welfare of people is to mistake the scoreboard for the game, the statistic for the human reality it is supposed to describe.", fn: "Develop" },
            { text: "Those who measure a society by the welfare of all its people are right that this is the only success that finally counts.", fn: "Sub-conclusion" },
            { text: "A country exists for its people, not its people for the country.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — My position: the opposition is false",
          sentences: [
            { text: "On balance, my own view is that the opposition between the two is largely false.", fn: "Pivot (my position)", moves: ["On balance"] },
            { text: "Genuine overall success and the welfare of citizens are not rivals but, in the long run, the same thing: a society succeeds precisely by securing good lives for its people.", fn: "Point" },
            { text: "The sacrifices the first view defends are justified only when they serve the welfare of the people in the end, since soldiers fight to protect citizens and taxes fund services that benefit them.", fn: "Explanation" },
            { text: "What is never justified is sacrificing the people's welfare for an abstract success that never returns to them, which is exactly what tyrants claim when they grind citizens down for the glory of the state.", fn: "Develop", vocab: [{ term: "abstract", gloss: "抽象的；空泛的" }] },
            { text: "Individual sacrifice is acceptable in the service of the common welfare, never as a substitute for it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, my position aligns with those who measure a society by the welfare of its people, while granting that pursuing that welfare sometimes requires individual sacrifice.", fn: "Restate (which view)", moves: ["In conclusion"] },
            { text: "A society's overall success is not an end above its citizens but a means to their flourishing, so the two views, properly understood, point in the same direction.", fn: "Synthesis", vocab: [{ term: "flourishing", gloss: "繁榮；蓬勃發展" }] },
            { text: "A society thrives not when it triumphs over its people, but when it triumphs for them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-058",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: Any piece of information referred to as a fact should be mistrusted, since it may well be proven false in the future. Reason: Much of the information that people assume is factual actually turns out to be inaccurate.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that some facts are revised while showing that this licenses careful skepticism, not wholesale mistrust, and that the claim is self-defeating; tightly reasoned and well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Science has overturned many things once called facts — the flat earth, the four humors, the immovable continents — and the claim seizes on this to recommend mistrusting facts altogether.", fn: "Hook" },
            { text: "It holds that any piece of information called a fact should be mistrusted, on the reason that much of what people assume is factual turns out to be inaccurate.", fn: "Context (claim and reason)" },
            { text: "The reason states a genuine truth, but it cannot support so sweeping a claim, because that some facts are later revised is no reason to mistrust all of them, and wholesale mistrust would make knowledge itself impossible.", fn: "Thesis statement (evaluate both)" },
          ],
        },
        {
          role: "Body — The reason is partly true",
          sentences: [
            { text: "First, the reason rightly reminds us that much supposed knowledge is mistaken.", fn: "Topic sentence (assess the reason)", moves: ["First"] },
            { text: "Medicine, nutrition, and physics are full of yesterday's certainties that today's research has corrected, and confident facts are revised in every field.", fn: "Example" },
            { text: "People also accept as fact a great deal of rumor, outdated belief, and careless reporting that does not survive scrutiny.", fn: "Explanation", vocab: [{ term: "scrutiny", gloss: "審視；細察" }] },
            { text: "A healthy skepticism toward claims labeled factual is therefore not paranoia but plain good sense.", fn: "Develop", vocab: [{ term: "skepticism", gloss: "懷疑；質疑" }] },
            { text: "So the reason is sound as far as it goes: not everything called a fact deserves our trust.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But it does not justify mistrusting all facts",
          sentences: [
            { text: "However, from the truth that some facts are wrong, it does not follow that all facts should be mistrusted.", fn: "Pivot (break the link)", moves: ["However"] },
            { text: "Facts differ enormously in how well they are established, and to treat the boiling point of water like a contested theory is to ignore those differences entirely.", fn: "Point" },
            { text: "That a few facts were overturned does not erase the millions that have held firm for centuries and underpin everything we do.", fn: "Explanation" },
            { text: "We trust that the earth orbits the sun, that water is two parts hydrogen, and that vaccines prevent disease, not because such facts are infallible, but because the evidence for them is overwhelming.", fn: "Example", vocab: [{ term: "infallible", gloss: "絕對可靠的；不會出錯的" }] },
            { text: "The claim treats a small fraction of revised facts as if it discredited the vast body of reliable ones, which is like distrusting all bridges because a few have fallen.", fn: "Develop" },
            { text: "Some facts deserve doubt; most deserve provisional trust; none of this licenses mistrusting facts as such.", fn: "Sub-conclusion", vocab: [{ term: "provisional", gloss: "暫定的；臨時的" }] },
            { text: "Revision is how knowledge improves, not proof that knowledge is worthless.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The claim is self-defeating",
          sentences: [
            { text: "Moreover, the claim quietly destroys itself.", fn: "Pivot", moves: ["Moreover"] },
            { text: "If every fact should be mistrusted because it might be false, then the fact that facts are unreliable should be mistrusted too, and the claim collapses under its own rule.", fn: "Point" },
            { text: "A blanket mistrust of facts would also paralyze life, since we cannot cross a street, take medicine, or make any decision without relying on facts we treat as true.", fn: "Explanation" },
            { text: "The sane response to fallible knowledge is not to mistrust everything but to weigh the evidence, holding well-established facts with confidence and uncertain ones with appropriate doubt.", fn: "Develop", vocab: [{ term: "evidence", gloss: "證據" }] },
            { text: "Doubt is a tool for sorting good knowledge from bad, not a reason to discard all of it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the reason is valid but the claim does not follow from it.", fn: "Restate", moves: ["In conclusion"] },
            { text: "That some facts are later proven false is a reason for careful, evidence-based skepticism, not for the wholesale mistrust the claim demands, which would be both self-defeating and unlivable.", fn: "Synthesis" },
            { text: "We should mistrust facts that are poorly supported and trust those that are well supported, which is simply to say we should think, not abandon facts altogether.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-059",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: Nations should suspend government funding for the arts when significant numbers of their citizens are hungry or unemployed. Reason: It is inappropriate — and, perhaps, even cruel — to use public resources to fund the arts when people's basic needs are not being met.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): respects the moral feeling behind the reason while showing it rests on a false competition between art and basic needs, so the claim does not follow; coherent and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It can feel obscene to fund an opera while families go hungry, and the claim turns that feeling into a policy.", fn: "Hook" },
            { text: "It holds that nations should suspend arts funding when many citizens are hungry or unemployed, on the reason that it is inappropriate, even cruel, to spend public money on art while people's basic needs go unmet.", fn: "Context (claim and reason)" },
            { text: "The reason expresses a real moral intuition, but it does not justify the claim, because it rests on a false competition between art and basic needs, and acting on it would help no one while harming much.", fn: "Thesis statement (evaluate both)" },
          ],
        },
        {
          role: "Body — The reason has emotional force",
          sentences: [
            { text: "First, the reason draws on a feeling worth taking seriously.", fn: "Topic sentence (assess the reason)", moves: ["First"] },
            { text: "There is something jarring about a government lavishing money on galleries while citizens cannot afford food, and it is right to insist that basic needs come first.", fn: "Explanation" },
            { text: "No one would defend a state that built a marble concert hall and left its people to starve outside its doors.", fn: "Example" },
            { text: "The reason correctly senses that a society's priorities should reflect its values, and that human survival outranks cultural luxury.", fn: "Develop", vocab: [{ term: "priorities", gloss: "優先事項；輕重緩急" }] },
            { text: "So the moral instinct behind the reason is genuine, and any honest answer must respect it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But it assumes a false competition",
          sentences: [
            { text: "However, the reason rests on an assumption that does not hold: that arts funding and basic needs are competing for the same money.", fn: "Pivot (break the link)", moves: ["However"] },
            { text: "Government arts budgets are tiny, a rounding error beside the cost of feeding and employing a population, so suspending them would free almost nothing for basic needs.", fn: "Point" },
            { text: "The choice the reason imagines — art or bread — is largely an illusion, since cutting the art would not buy the bread.", fn: "Explanation", vocab: [{ term: "illusion", gloss: "錯覺；假象" }] },
            { text: "A hungry family is not fed by closing a museum; the saved money is too small to matter, and may not reach them at all.", fn: "Example" },
            { text: "If the worry is genuinely that resources are misallocated, the vast budgets for defense or subsidies dwarf the arts, yet the reason singles out culture, the cheapest and most visible target.", fn: "Develop", vocab: [{ term: "misallocated", gloss: "分配不當的；錯置的" }] },
            { text: "The reason's force comes from a vivid contrast that real budgets do not support.", fn: "Sub-conclusion" },
            { text: "It feels like a choice between art and bread, but the arithmetic says otherwise.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The arts serve people too",
          sentences: [
            { text: "Moreover, the reason ignores that the arts themselves serve people, including those who are suffering.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Art employs workers, draws tourism, and sustains the morale and identity of a people in hard times, so funding it is not opposed to human welfare but part of it.", fn: "Point", vocab: [{ term: "morale", gloss: "士氣；精神面貌" }, { term: "identity", gloss: "認同；身分" }] },
            { text: "The hardest eras have funded art precisely to give the desperate hope and to put artists to work, treating culture as relief rather than as its enemy.", fn: "Explanation" },
            { text: "Because hunger and unemployment are nearly always present somewhere, the claim's rule would suspend the arts permanently, impoverishing society for no real gain.", fn: "Develop" },
            { text: "Honoring basic needs does not require abolishing everything that makes life worth living once those needs are met.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the reason voices a real moral concern but does not justify the claim.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because cutting the arts would not feed the hungry and would sacrifice something genuinely valuable, the cruelty the reason fears lies not in funding art but in pretending that doing so starves anyone.", fn: "Synthesis" },
            { text: "A caring society can feed its people and keep its art, and it need not burn the one to warm the other.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-060",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: Many problems of modern society cannot be solved by laws and the legal system. Reason: Laws cannot change what is in people's hearts or minds.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that law cannot command belief while showing it solves countless problems by governing behavior and can even reshape attitudes over time, so the claim overstates its case; well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We pass laws against almost everything we dislike, yet prejudice, greed, and cruelty persist, which gives the claim a surface plausibility.", fn: "Hook" },
            { text: "It holds that many problems of modern society cannot be solved by laws and the legal system, on the reason that laws cannot change what lies in people's hearts and minds.", fn: "Context (claim and reason)" },
            { text: "The reason captures a real limit of law, but it does not justify the sweeping claim, because laws solve a great many problems regardless of people's hearts, and can even change those hearts over time.", fn: "Thesis statement (evaluate both)" },
          ],
        },
        {
          role: "Body — The reason has truth",
          sentences: [
            { text: "First, the reason rightly identifies something law cannot directly do.", fn: "Topic sentence (assess the reason)", moves: ["First"] },
            { text: "A statute can forbid an act, but it cannot order a person to feel differently, and outlawing hatred does not by itself make anyone tolerant.", fn: "Explanation", vocab: [{ term: "tolerant", gloss: "寬容的；包容的" }] },
            { text: "Laws against discrimination do not instantly erase prejudice, and a person forced to obey may go on resenting the rule in private.", fn: "Example", vocab: [{ term: "prejudice", gloss: "偏見；歧視" }] },
            { text: "Problems that live in attitudes — bigotry, selfishness, contempt — cannot be legislated out of existence by decree.", fn: "Develop", vocab: [{ term: "legislated", gloss: "以立法規定；立法禁止" }] },
            { text: "So the reason is correct that law has no direct power over the inner life.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But law solves problems by governing behavior",
          sentences: [
            { text: "However, from the fact that law cannot command belief, it does not follow that it cannot solve society's problems.", fn: "Pivot (break the link)", moves: ["However"] },
            { text: "A great many problems require not a change of heart but a change of behavior, and behavior is exactly what law can compel.", fn: "Point" },
            { text: "It does not matter whether a factory owner cares about clean air, only whether the law makes him stop polluting; the river grows clean either way.", fn: "Explanation" },
            { text: "Traffic laws, food-safety rules, and property rights solve enormous problems while caring nothing for what is in anyone's heart.", fn: "Example" },
            { text: "Much of modern life works smoothly precisely because law reliably governs conduct that good intentions alone could never coordinate.", fn: "Develop" },
            { text: "The reason confuses changing minds with solving problems, when law solves countless problems by governing actions instead.", fn: "Sub-conclusion" },
            { text: "The point of a speed limit is not to make drivers virtuous but to keep them alive.", fn: "Sharpen" },
            { text: "We do not need everyone to be virtuous, only to drive on the correct side of the road.", fn: "Reinforce", vocab: [{ term: "virtuous", gloss: "有德行的；品行端正的" }] },
          ],
        },
        {
          role: "Body — And law can change hearts over time",
          sentences: [
            { text: "Moreover, the reason underestimates how law shapes the very hearts and minds it cannot directly command.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Behavior, once enforced, tends to reshape attitudes over time, as people come to accept and then to believe in what they were first merely required to do.", fn: "Point" },
            { text: "Laws ending segregation or extending rights were resented by many at first, yet within a generation they had helped transform public attitudes, not just public conduct.", fn: "Example", vocab: [{ term: "segregation", gloss: "種族隔離；隔離" }] },
            { text: "Law teaches as well as commands, signaling what a society holds to be right and slowly bending opinion toward it.", fn: "Explanation" },
            { text: "Yesterday's grudging compliance has a way of becoming tomorrow's common sense.", fn: "Aphoristic" },
            { text: "Hearts follow habits more often than the reason allows.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the reason names a real limit but the claim overstates it.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Law cannot directly command belief, but it solves vast numbers of problems by governing behavior, and over time it can even change the hearts the reason says it cannot touch.", fn: "Synthesis" },
            { text: "Laws are not the whole answer to society's problems, but they are far more of the answer than the claim admits.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-061",
    type: "issue",
    category: "Education",
    prompt:
      "Educators should take students' interests into account when planning the content of the courses they teach.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): a recommendation-appropriate response that endorses taking interests into account, shows how to use them, and marks the limit that interest should inform but not govern; clear, if working a familiar theme.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A class bored by its lessons learns little, and a class gripped by them learns almost in spite of itself.", fn: "Hook" },
            { text: "The recommendation builds on this, urging educators to take students' interests into account when planning the content of their courses.", fn: "Context (the recommendation)" },
            { text: "This is sound advice in nearly every circumstance, because attending to what engages students makes teaching more effective, provided their interests inform the curriculum rather than dictate it.", fn: "Thesis statement (qualified endorsement)" },
          ],
        },
        {
          role: "Body — Interest drives learning",
          sentences: [
            { text: "First, in almost any classroom, a teacher who knows what interests her students can teach the same material far better.", fn: "Topic sentence", moves: ["First"] },
            { text: "Interest is among the strongest engines of attention and memory, so a lesson connected to what students care about reaches them where an indifferent one does not.", fn: "Explanation" },
            { text: "A history teacher who frames the past around questions her students are already asking, or a science teacher who builds a unit on a topic the class loves, harnesses a motivation that a dull syllabus simply wastes.", fn: "Example", vocab: [{ term: "motivation", gloss: "動機；動力" }, { term: "syllabus", gloss: "教學大綱；課程綱要" }] },
            { text: "Taking interests into account also signals respect, and students who feel their curiosity matters take more responsibility for their own learning.", fn: "Develop" },
            { text: "In these everyday circumstances, the recommendation is plainly advantageous.", fn: "Sub-conclusion" },
            { text: "Curiosity, once it is lit, does much of the teacher's work for her.", fn: "Reinforce" },
            { text: "A teacher ignorant of what her students care about is teaching half blind.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — How to honor interest",
          sentences: [
            { text: "Moreover, there are many ways to honor students' interests without surrendering the curriculum to them.", fn: "Pivot", vocab: [{ term: "curriculum", gloss: "課程" }], moves: ["Moreover"] },
            { text: "Interests are best used to shape how a subject is taught — the examples chosen, the questions raised, the projects offered — rather than which essential topics are covered.", fn: "Point" },
            { text: "The same required mathematics can be taught through sports statistics or through music, and the choice can follow what a particular class finds compelling.", fn: "Explanation" },
            { text: "Even within a fixed syllabus, a teacher can leave room for students to pursue a related topic of their own, channeling enthusiasm into the material.", fn: "Example" },
            { text: "Used this way, student interest becomes a tool for teaching the necessary, not an excuse for avoiding it.", fn: "Develop" },
            { text: "Taken into account wisely, interest serves the curriculum instead of replacing it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Interest informs, does not govern",
          sentences: [
            { text: "However, the recommendation is sound precisely because it says take into account, not be governed by.", fn: "Pivot", moves: ["However"] },
            { text: "Students, by definition, do not yet know a subject, so they cannot always judge what within it is most worth learning.", fn: "Concede the limit" },
            { text: "An educator who let interests dictate content would quietly drop the difficult, unglamorous foundations students need but would never request.", fn: "Develop" },
            { text: "The teacher's expertise lies in knowing what students do not yet know to want, and in weaving their interests into that larger plan rather than abandoning it.", fn: "Explain" },
            { text: "Children rarely ask to study the very things that will matter most to them later.", fn: "Develop" },
            { text: "Interest should guide the route, but the destination is the teacher's to set.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, educators should certainly take students' interests into account when planning their courses.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Doing so makes learning more engaging and respectful, and as long as interest informs rather than dictates the content, it strengthens an education without diluting it.", fn: "Synthesis", vocab: [{ term: "diluting", gloss: "稀釋；削弱" }, { term: "engaging", gloss: "引人入勝的；能吸引人的" }] },
            { text: "The best teaching listens closely to what students want and uses it to teach them what they truly need.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-062",
    type: "issue",
    category: "Technology",
    prompt:
      "The primary goal of technological advancement should be to increase people's efficiency so that they have more leisure time.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): rejects leisure as the primary goal by pointing to technology's higher purposes, questioning whether leisure is the chief good, and noting that efficiency has not in fact delivered leisure; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We were promised that machines would do our work and leave us free to rest, yet many feel busier than ever.", fn: "Hook" },
            { text: "The statement proposes a clear purpose for technology: that its primary goal should be to increase efficiency so that people have more leisure time.", fn: "Context (the statement)" },
            { text: "More leisure is a worthy benefit of technology, but the statement is mistaken to make it the primary goal, because technology serves far higher purposes than free time, and efficiency has not reliably produced leisure anyway.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Technology's purposes are bigger than leisure",
          sentences: [
            { text: "First, to reduce the purpose of technology to leisure is to ignore its very greatest achievements.", fn: "Topic sentence", moves: ["First"] },
            { text: "The most valuable advances have not freed up afternoons but saved lives, cured diseases, fed billions, and extended human knowledge into space and the atom.", fn: "Explanation" },
            { text: "Vaccines, clean water, and medical scanners exist to relieve suffering and prolong life, goals beside which more leisure looks trivial.", fn: "Example", vocab: [{ term: "trivial", gloss: "瑣碎的；微不足道的" }] },
            { text: "If we had aimed technology primarily at leisure, we might have better hammocks but worse hospitals.", fn: "Develop" },
            { text: "The primary goal of technology should be to improve human life broadly, of which leisure is only one small part.", fn: "Sub-conclusion" },
            { text: "A cure for cancer matters more than a shorter work week.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Leisure is not the highest good",
          sentences: [
            { text: "Moreover, the statement assumes that leisure is the chief thing a good life needs, which is questionable.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Free time is valuable, but meaningful work, health, knowledge, connection, and purpose matter at least as much, and technology can serve all of these.", fn: "Point" },
            { text: "Many people find their deepest satisfaction not in idleness but in work made more creative or productive by their tools.", fn: "Explanation", vocab: [{ term: "idleness", gloss: "無所事事；閒散" }, { term: "satisfaction", gloss: "滿足感；成就感" }] },
            { text: "A surgeon with better instruments, a scientist with faster computers, and an artist with new media gain not leisure but the power to do more of what gives life meaning.", fn: "Example" },
            { text: "To organize technology around maximizing free time is to mistake rest for the goal, when rest is valuable mainly as a support for a fuller life.", fn: "Develop" },
            { text: "Leisure is a means to well-being, not its summit, and a poor north star for technology.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Efficiency has not delivered leisure",
          sentences: [
            { text: "However, there is a deeper irony: aiming at efficiency has not actually given us more leisure.", fn: "Pivot", moves: ["However"] },
            { text: "Despite centuries of labor-saving invention, many people work as hard as ever, because the time efficiency frees is promptly filled with more work and more consumption.", fn: "Point", vocab: [{ term: "consumption", gloss: "消費；消耗" }] },
            { text: "Efficiency tends to raise expectations and output rather than to shorten the working day, so the leisure the statement hopes for keeps receding.", fn: "Explanation", vocab: [{ term: "receding", gloss: "逐漸退去；漸行漸遠" }] },
            { text: "If more free time is genuinely the goal, it will come from how we choose to use our tools and arrange our societies, not from efficiency alone.", fn: "Develop" },
            { text: "Technology can make leisure possible, but only human choices can make it real.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, increasing leisure is a fine benefit of technology but a poor candidate for its primary goal.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Technology's deepest purpose is to improve human life in all its dimensions — health, knowledge, meaning, and yes, leisure — and to crown free time above the rest both undervalues those greater goods and misreads what efficiency actually produces.", fn: "Synthesis" },
            { text: "We should ask technology not merely to give us more time, but to help us live better in the time we have.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-063",
    type: "issue",
    category: "Education",
    prompt:
      "Educators should base their assessment of students' learning not on students' grasp of facts but on the ability to explain the ideas, trends, and concepts that those facts illustrate.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): a recommendation-appropriate response that endorses assessing understanding over rote recall while showing facts cannot be excluded; clear and well organized, though the analysis stays fairly general.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A student can memorize a hundred dates and understand nothing about history, while another who knows fewer facts grasps why events unfolded as they did.", fn: "Hook" },
            { text: "The recommendation builds on this, urging educators to assess students not on their grasp of facts but on their ability to explain the ideas, trends, and concepts those facts illustrate.", fn: "Context (the recommendation)" },
            { text: "The recommendation rightly prizes understanding over rote recall, but its sharp not facts but concepts is too absolute, because explaining a concept well is impossible without the facts that ground it.", fn: "Thesis statement (qualified position)", vocab: [{ term: "rote", gloss: "死記硬背的" }] },
          ],
        },
        {
          role: "Body — Understanding is the better target",
          sentences: [
            { text: "First, in most subjects the ability to explain concepts is a far better measure of real learning than the recall of facts.", fn: "Topic sentence", moves: ["First"] },
            { text: "Facts are easily memorized and easily forgotten, while the grasp of why and how — the trends and ideas behind them — is what lets a student think, predict, and apply knowledge.", fn: "Explanation" },
            { text: "A medical student who can explain why a disease spreads will handle an unfamiliar case better than one who has merely memorized a list of symptoms.", fn: "Example" },
            { text: "Assessing for explanation rewards the deeper learning that education is supposed to produce and discourages the shallow cramming that mere fact-tests invite.", fn: "Develop", vocab: [{ term: "cramming", gloss: "臨時抱佛腳；死記硬背" }] },
            { text: "In these circumstances the recommendation is sound: testing understanding teaches students to understand.", fn: "Sub-conclusion" },
            { text: "What we choose to measure is what students will work to achieve.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But explanation requires facts",
          sentences: [
            { text: "However, the recommendation's contrast between facts and concepts is misleading, because the two cannot be cleanly separated.", fn: "Pivot", moves: ["However"] },
            { text: "A concept is built out of facts, and a student who knows no facts has nothing from which to construct an explanation.", fn: "Point" },
            { text: "One cannot explain the causes of a war without knowing what happened, or the idea of evolution without facts about species and fossils.", fn: "Example" },
            { text: "An explanation offered with no command of the facts is usually empty verbiage, fluent-sounding but hollow.", fn: "Develop", vocab: [{ term: "verbiage", gloss: "空話；冗詞" }] },
            { text: "To assess explanation while ignoring facts entirely would reward confident vagueness and let students hide a lack of knowledge behind impressive-sounding words.", fn: "Reinforce" },
            { text: "Facts are not the enemy of understanding; they are its raw material, and assessment cannot abandon them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Emphasis, not exclusion",
          sentences: [
            { text: "Moreover, the recommendation is best read as a shift of emphasis, not a banishment of facts.", fn: "Pivot", moves: ["Moreover"] },
            { text: "The wise approach assesses whether students can use facts to explain ideas, valuing the explanation while still requiring the knowledge it depends on.", fn: "Point" },
            { text: "A good exam question asks a student not merely to recall a fact but to deploy it — to explain, connect, and apply — which tests both at once.", fn: "Explanation" },
            { text: "Where teaching has collapsed into testing trivia, moving toward explanation is a clear improvement, but the goal is integration, not the pretense that understanding floats free of facts.", fn: "Develop", vocab: [{ term: "integration", gloss: "整合；融會貫通" }] },
            { text: "Assess the use of knowledge, not knowledge alone and not explanation without it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, educators should indeed assess understanding over mere memorization, but not to the exclusion of the facts that understanding requires.", fn: "Restate", vocab: [{ term: "memorization", gloss: "死記；背誦" }], moves: ["In conclusion"] },
            { text: "Because concepts are built from facts, the wise assessment asks students to explain ideas using the facts that illustrate them, rewarding depth without pretending knowledge is dispensable.", fn: "Synthesis" },
            { text: "Test whether students can think with what they know, which is neither facts alone nor explanation without them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-064",
    type: "issue",
    category: "Technology",
    prompt:
      "Unfortunately, in contemporary society, creating an appealing image has become more important than the reality or truth behind that image.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that image now dominates much of modern life while arguing that reality reasserts itself in the long run, and reads the statement as a warning rather than a verdict; well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "From polished social-media profiles to carefully managed political brands, we live surrounded by images crafted to impress, often with little regard for the truth beneath.", fn: "Hook" },
            { text: "The statement laments this, claiming that in contemporary society creating an appealing image has become more important than the reality or truth behind it.", fn: "Context (the statement)" },
            { text: "The statement captures a real and worrying feature of modern life, but it overstates the case, because while image has gained alarming power, reality still reasserts itself in the end.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — The trend is real",
          sentences: [
            { text: "It is true that image has come to dominate vast areas of contemporary life.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Advertising sells feelings rather than products, politicians are packaged like brands, and on social media people curate flawless versions of lives that bear little resemblance to reality.", fn: "Explanation", vocab: [{ term: "curate", gloss: "精心策劃；篩選呈現" }] },
            { text: "A company can prosper for years on clever marketing while selling a mediocre product, and a person can build a following on an image that is largely performance.", fn: "Example", vocab: [{ term: "mediocre", gloss: "平庸的" }] },
            { text: "Modern technology has supercharged this, giving everyone the tools to manufacture an appealing surface and rewarding those who do so with attention and money.", fn: "Develop" },
            { text: "So the statement is right that crafting an image now often matters more, in the moment, than the truth behind it.", fn: "Sub-conclusion" },
            { text: "Appearance has become a currency in its own right.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But reality reasserts itself",
          sentences: [
            { text: "However, to say image has become more important than reality is to mistake the short term for the whole story.", fn: "Pivot", moves: ["However"] },
            { text: "An appealing image built on a false reality is fragile, and sooner or later the gap between the two is exposed.", fn: "Point", vocab: [{ term: "fragile", gloss: "脆弱的；易破裂的" }] },
            { text: "A company that markets brilliantly but makes shoddy products eventually loses its customers, and a politician whose image hides incompetence is found out when results are demanded.", fn: "Example", vocab: [{ term: "incompetence", gloss: "無能；不稱職" }] },
            { text: "Image can win the first round, but reality wins the rematch, because consequences flow from what is true, not from what merely looks good.", fn: "Explanation" },
            { text: "The bridge built by a charming but incompetent engineer still falls down, and the patient treated by a doctor with a wonderful image but no skill still suffers.", fn: "Develop" },
            { text: "Image may be more important for getting noticed, but reality remains more important for lasting.", fn: "Sub-conclusion" },
            { text: "A beautiful surface over a rotten core is a delay, not a victory.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — A warning, not a verdict",
          sentences: [
            { text: "Moreover, the statement is most useful read as a warning rather than as a verdict.", fn: "Pivot", moves: ["Moreover"] },
            { text: "It is genuinely dangerous that image so often triumphs in the short term, since it lets the dishonest prosper and rewards style over substance.", fn: "Point", vocab: [{ term: "substance", gloss: "實質；內涵" }] },
            { text: "But the remedy is not to despair that reality no longer matters; it is to look past images and judge by substance, which we remain perfectly able to do.", fn: "Explanation" },
            { text: "A culture that values truth can still reward it, and individuals who insist on substance over surface keep reality in its rightful place.", fn: "Develop" },
            { text: "Image has grown powerful, but only as powerful as we allow it to be.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, image has indeed gained troubling importance, but it has not truly overtaken reality.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Appearances increasingly win attention and short-term reward, yet substance still determines what endures, so the statement names a real danger rather than a settled fact.", fn: "Synthesis" },
            { text: "We should resist the tyranny of image not by pretending it has won, but by remembering that, in the end, the truth tends to surface.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-065",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "The effectiveness of a country's leaders is best measured by examining the well- being of that country's citizens.",
    directions: D_CLAIM,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): agrees with strong reasoning that citizen well-being is the truest and least fakeable measure of leadership, then meets the objection about inherited circumstances by refining it to improvement over time; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "By what yardstick should we judge a country's leaders — the strength of its armies, the size of its economy, the grandeur of its monuments?", fn: "Hook" },
            { text: "The claim offers a humane answer: that the effectiveness of a country's leaders is best measured by the well-being of its citizens.", fn: "Context (the claim)" },
            { text: "I largely agree, because the purpose of leadership is to serve the people, though the measure must be applied fairly, accounting for the circumstances leaders inherit and cannot control.", fn: "Thesis statement (agree with qualification)" },
          ],
        },
        {
          role: "Body — Well-being is the right measure",
          sentences: [
            { text: "First, citizen well-being is the truest test because it captures what leadership is actually for.", fn: "Topic sentence", moves: ["First"] },
            { text: "A leader's job is not to amass power or glory for its own sake but to make the lives of ordinary people safer, freer, healthier, and more prosperous.", fn: "Explanation", vocab: [{ term: "prosperous", gloss: "繁榮的；富足的" }] },
            { text: "A government may boast a booming economy or a powerful military, but if its citizens are poor, fearful, or oppressed, it has failed at the one thing leadership exists to do.", fn: "Example", vocab: [{ term: "oppressed", gloss: "受壓迫的" }] },
            { text: "Other measures — economic statistics, national prestige — matter only insofar as they translate into the well-being of real people, which makes well-being the more fundamental standard.", fn: "Develop", vocab: [{ term: "prestige", gloss: "聲望；威望" }] },
            { text: "So the claim rightly locates the test of leadership in how the led actually fare.", fn: "Sub-conclusion" },
            { text: "A flourishing people is the clearest sign of leadership that works.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Well-being is the most honest measure",
          sentences: [
            { text: "Moreover, well-being is a harder and more honest measure than the ones leaders tend to prefer.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Leaders love to be judged by grand projects and impressive numbers, which are easy to display and easy to fake, while broad well-being cannot be faked or concentrated in a showcase.", fn: "Point" },
            { text: "Averages can hide misery, so even economic growth means little if its gains reach only a few; the well-being of the many is the figure that resists manipulation.", fn: "Explanation", vocab: [{ term: "manipulation", gloss: "操縱；操弄" }] },
            { text: "A country can post record growth while most of its people grow poorer, and a leader judged by the growth alone would look far better than he deserves.", fn: "Example" },
            { text: "To measure by well-being is to ask the question that powerful people most want to avoid: how are ordinary lives actually going?", fn: "Develop" },
            { text: "Precisely because it is hard to fake, citizen well-being is the soundest measure available.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The objection about circumstances",
          sentences: [
            { text: "The most compelling objection is that leaders inherit conditions they did not create and cannot fully control.", fn: "Identify the strongest counter", vocab: [{ term: "inherit", gloss: "承接；繼承" }], moves: ["The most compelling"] },
            { text: "A leader handed a famine, a war, or a collapsing economy may govern brilliantly and still preside over suffering, while a lucky one inherits prosperity he did nothing to build.", fn: "Concede its force" },
            { text: "This is a real caution, but it refines the measure rather than refuting it: we should judge leaders by how much they improve well-being from the conditions they were given, not by its absolute level.", fn: "Rebut" },
            { text: "Measured as change rather than as a snapshot, citizen well-being remains the best test, crediting leaders for the difference they actually make.", fn: "Explain" },
            { text: "The fair question is not how well off are the people alone, but how much better or worse off this leadership made them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the well-being of its citizens is indeed the best measure of a country's leaders, provided it is judged fairly.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because leadership exists to serve the people and well-being resists the manipulation other measures invite, it is the soundest standard, so long as we credit leaders for the improvement they make from the circumstances they inherit.", fn: "Synthesis" },
            { text: "Judge leaders by the lives of the led, but judge them by the difference they made, not by the hand they were dealt.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-066",
    type: "issue",
    category: "Education",
    prompt:
      "A nation should require all of its students to study the same national curriculum until they enter college.",
    directions: D_CLAIM,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): rejects rigid uniformity by showing it ignores real differences, resists change, and concentrates power, then concedes the equality argument and answers it with a common core within a flexible system; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Should every child in a nation learn the same things, or should schools be free to teach differently?", fn: "Hook" },
            { text: "The claim takes a firm stand: that a nation should require all its students to study the same national curriculum until they enter college.", fn: "Context (the claim)" },
            { text: "A shared core of knowledge is genuinely valuable, but requiring every student to study an identical curriculum is too rigid, because it ignores the differences among students, regions, and the changing needs a single national plan cannot foresee.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Rigid uniformity ignores difference",
          sentences: [
            { text: "First, a single mandatory curriculum forces very different students and communities into one mold.", fn: "Topic sentence", moves: ["First"] },
            { text: "Students differ enormously in ability, interest, and pace, and a curriculum identical for all will bore some, lose others, and fit almost no one perfectly.", fn: "Explanation" },
            { text: "The lesson that challenges a gifted student leaves a struggling one behind, while the pace that suits the struggling one wastes the gifted one's time.", fn: "Example" },
            { text: "Regions differ too: a farming community, a fishing town, and a tech city have distinct needs that a uniform national plan, written far away, cannot serve.", fn: "Develop" },
            { text: "Imposed on everyone without exception, sameness becomes a straitjacket rather than a standard.", fn: "Sub-conclusion", vocab: [{ term: "straitjacket", gloss: "束縛；緊身衣" }] },
            { text: "A child who already reads fluently and one still struggling cannot be well served by the very same page on the very same day.", fn: "Reinforce" },
            { text: "One size, in education as in clothing, fits no one well.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Rigidity resists change and concentrates power",
          sentences: [
            { text: "Moreover, a single fixed curriculum is dangerously slow to change and easy to abuse.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Knowledge and the world move quickly, and a national curriculum, hard to revise, tends to lag years behind what students actually need.", fn: "Point" },
            { text: "Centralizing what every child learns also hands enormous power to whoever controls it, which a government can use to push a single narrow view.", fn: "Explanation", vocab: [{ term: "centralizing", gloss: "集中化；中央集權" }] },
            { text: "History is full of states that used a mandatory national curriculum to glorify themselves and silence dissent, teaching propaganda as fact.", fn: "Example", vocab: [{ term: "propaganda", gloss: "宣傳；政治宣傳" }] },
            { text: "Diversity of schools and approaches is a safeguard, allowing better methods to emerge and bad ideas to be confined rather than imposed on a whole generation at once.", fn: "Develop" },
            { text: "Uniformity removes the experimentation and competition from which education improves.", fn: "Sub-conclusion", vocab: [{ term: "uniformity", gloss: "一致性；劃一" }] },
          ],
        },
        {
          role: "Body — The equality argument, answered",
          sentences: [
            { text: "The most compelling argument for the claim is that a common curriculum builds equality and national cohesion.", fn: "Identify the strongest counter", vocab: [{ term: "cohesion", gloss: "凝聚力；團結" }], moves: ["The most compelling"] },
            { text: "There is real force here: a shared body of knowledge ensures that a poor child and a rich one learn the same essentials, and gives a diverse nation a common language and culture.", fn: "Concede its force" },
            { text: "But these goods require a common core, not a totally identical curriculum, and the two are very different things.", fn: "Rebut" },
            { text: "A nation can require that all students master certain essentials — literacy, mathematics, the basics of science and citizenship — while leaving room for local content, individual choice, and varied methods.", fn: "Explain" },
            { text: "Unity comes from sharing the essentials, not from forcing every classroom to march in lockstep.", fn: "Sharpen" },
            { text: "Shared foundations and flexible building are not enemies; the wise system has both.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a nation should require a common core of essential learning, but not an identical curriculum for all.", fn: "Restate", moves: ["In conclusion"] },
            { text: "A shared foundation secures equality and unity, but rigid uniformity ignores real differences, resists change, and concentrates dangerous power, so the answer is a common core within a flexible system.", fn: "Synthesis" },
            { text: "Teach every child the essentials in common, but do not pretend that every child, place, and age is the same.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-067",
    type: "issue",
    category: "Education",
    prompt:
      "Educational institutions should actively encourage their students to choose fields of study in which jobs are plentiful.",
    directions: D_POLICY,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a policy-appropriate response that traces the consequences of actively steering students into plentiful fields — mismatched workers, gluts, and starved essential fields — then offers informing over pushing; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Anxious about graduates' job prospects, many want colleges to steer students toward the fields where work is plentiful.", fn: "Hook" },
            { text: "The policy would have educational institutions actively encourage students to choose such fields rather than leave the choice to interest or chance.", fn: "Context (the policy)" },
            { text: "The policy is well-meaning, but its consequences would be largely harmful, because pushing students toward jobs over aptitude produces mediocre workers, gluts the very fields it favors, and starves others a society needs.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Mismatched, mediocre workers",
          sentences: [
            { text: "First, actively steering students into employable fields regardless of their talents would fill those fields with the wrong people.", fn: "Topic sentence", moves: ["First"] },
            { text: "A student pushed into engineering or computing for the jobs, but without the interest or aptitude for it, tends to struggle, underperform, and quit.", fn: "Explanation", vocab: [{ term: "aptitude", gloss: "性向；天賦" }] },
            { text: "The reluctant accountant who entered the field only because it was safe often becomes a poor and miserable accountant, helping no one.", fn: "Example" },
            { text: "Excellence grows from genuine engagement, so a policy that overrode interest in favor of job statistics would lower the quality of work in the very fields it promotes.", fn: "Develop" },
            { text: "The consequence is not more good workers but more unhappy, mediocre ones.", fn: "Sub-conclusion", vocab: [{ term: "mediocre", gloss: "平庸的" }] },
            { text: "Talent ignored is talent wasted, both for the student and for the society that needed it elsewhere.", fn: "Develop" },
            { text: "You cannot push a person into a passion.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — It gluts some fields and starves others",
          sentences: [
            { text: "Moreover, encouraging everyone toward today's plentiful jobs would quietly destroy the very plenty it chases.", fn: "Pivot", moves: ["Moreover"] },
            { text: "If institutions push a generation into whatever fields are currently hiring, they flood those fields, and yesterday's shortage becomes tomorrow's glut of unemployable graduates.", fn: "Point", vocab: [{ term: "glut", gloss: "供過於求；過剩" }] },
            { text: "Job markets shift faster than degrees can be earned, so a field that looks plentiful when students enroll may be oversupplied by the time they graduate.", fn: "Explanation" },
            { text: "Countries that funneled students into a single hot field have repeatedly produced far more graduates than the field could absorb, leaving many jobless in the safe choice.", fn: "Example" },
            { text: "Meanwhile the policy would drain students from essential fields — teaching, the arts, basic research, the humanities — that may offer fewer jobs but that a society cannot do without.", fn: "Develop", vocab: [{ term: "essential", gloss: "不可或缺的；必要的" }] },
            { text: "By the time the crowd of graduates arrives, the door they were all sent toward has often already closed.", fn: "Sharpen" },
            { text: "A nation that steers everyone toward plentiful jobs ends up with shortages where it can least afford them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Inform, do not push",
          sentences: [
            { text: "However, the policy responds to a real concern that deserves an answer.", fn: "Concede", moves: ["However"] },
            { text: "Students do make uninformed choices, and leaving them ignorant of job realities would be its own kind of failure.", fn: "Develop the concession" },
            { text: "But the answer is to inform, not to push: institutions should give students honest data about careers and prospects, then let them choose with open eyes.", fn: "Rebut", vocab: [{ term: "prospects", gloss: "前景；機會" }] },
            { text: "Informing respects students as adults weighing real trade-offs; actively encouraging them toward particular fields overrides their judgment and their talents.", fn: "Explain" },
            { text: "Good advice equips a choice; a hard push merely replaces it.", fn: "Aphoristic" },
            { text: "Provide the map, and let students choose the road.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, institutions should inform students about job prospects but not actively herd them into plentiful fields.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because the policy would produce mismatched workers, glut its favored fields, and starve essential ones, its consequences would clearly outweigh its good intentions.", fn: "Synthesis" },
            { text: "Help students choose wisely by telling them the truth, not by choosing for them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-068",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "People's behavior is largely determined by forces not of their own making.",
    directions: D_CLAIM,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants the powerful influence of unchosen forces while arguing that constraint is not determination and that denying agency is corrosive; addresses the determinist case directly and answers it; tightly reasoned.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "None of us chose our genes, our parents, our native country, or the era we were born into, and these unchosen forces shape us profoundly.", fn: "Hook" },
            { text: "The claim presses this point hard, holding that people's behavior is largely determined by forces not of their own making.", fn: "Context (the claim)" },
            { text: "There is deep truth in the claim, because we are shaped far more by circumstance than we like to admit, but largely determined goes too far, because within those constraints human beings still exercise real and meaningful choice.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Unchosen forces shape us deeply",
          sentences: [
            { text: "It is true that unchosen forces shape our behavior more than our pride allows us to see.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Our genes influence our temperament, our upbringing instills our values, and our culture, class, and circumstances set the range of options we ever face.", fn: "Explanation", vocab: [{ term: "temperament", gloss: "性情；氣質" }] },
            { text: "A child born into poverty and violence and one born into wealth and security will, on average, behave very differently, and neither chose the conditions that shaped them.", fn: "Example" },
            { text: "Even our apparent choices are nudged by influences we never notice, from advertising to the opinions of those around us, as psychology repeatedly shows.", fn: "Develop" },
            { text: "So the claim is right that much of what we do flows from forces we did not make.", fn: "Sub-conclusion" },
            { text: "We are, to a striking degree, the products of conditions we never selected.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But constraint is not determination",
          sentences: [
            { text: "However, that forces shape our behavior does not mean they wholly determine it.", fn: "Pivot", moves: ["However"] },
            { text: "People in nearly identical circumstances behave differently, which would be impossible if circumstance simply dictated conduct.", fn: "Point" },
            { text: "Two siblings raised in the same home, or two soldiers in the same war, can respond in opposite ways, one with cruelty and the other with courage.", fn: "Example" },
            { text: "Our unchosen forces set the stage and narrow the options, but within that range we still deliberate, resist, and choose, which is exactly what largely determined denies.", fn: "Explanation", vocab: [{ term: "deliberate", gloss: "審慎考慮；斟酌" }] },
            { text: "The recovering addict who chooses to quit, the person raised in bigotry who rejects it, and the coward who finds courage all show that circumstance is an influence, not a verdict.", fn: "Develop", vocab: [{ term: "verdict", gloss: "定論；判決" }] },
            { text: "We are shaped by forces beyond our control, but we are not their puppets.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — Why agency matters",
          sentences: [
            { text: "Moreover, to call behavior largely determined is not only inaccurate but corrosive.", fn: "Pivot", moves: ["Moreover"] },
            { text: "If we are merely the products of forces we did not make, then no one is truly responsible for anything, and praise, blame, and effort lose their meaning.", fn: "Point" },
            { text: "Yet we hold people responsible, and rightly, precisely because we recognize that they could have chosen otherwise within their circumstances.", fn: "Explanation" },
            { text: "The belief in our own agency, that we can choose even against the pressures upon us, is also what makes change possible, for individuals and societies alike.", fn: "Develop", vocab: [{ term: "agency", gloss: "能動性；自主行動力" }] },
            { text: "A person convinced he is wholly determined has already surrendered the freedom he in fact possesses.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, our behavior is powerfully shaped, but not largely determined, by forces beyond our control.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Circumstance sets the stage and limits our options, yet within those limits we genuinely choose, so the claim is right about the power of forces but wrong to dissolve our responsibility into them.", fn: "Synthesis", vocab: [{ term: "responsibility", gloss: "責任" }] },
            { text: "We are neither free of our circumstances nor enslaved by them, but free within them, and that freedom is the part that matters most.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-069",
    type: "issue",
    category: "Education",
    prompt:
      "Although innovations such as video, computers, and the Internet seem to offer schools improved methods for instructing students, these technologies all too often distract from real learning.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that classroom technology often distracts while arguing that its effect depends on use, and reads the statement as a caution about use rather than a verdict on the tools; well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A laptop open in a classroom can be a window onto the world's knowledge or a doorway to endless distraction, and often it is both at once.", fn: "Hook" },
            { text: "The statement leans toward the gloomier view, warning that video, computers, and the Internet, for all their promise, all too often distract students from real learning.", fn: "Context (the statement)" },
            { text: "The statement names a genuine danger, but it overstates the case, because these technologies are tools whose effect depends entirely on how they are used, and used well they enrich learning as much as misused they undermine it.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — The distraction is real",
          sentences: [
            { text: "It is true that classroom technology frequently distracts more than it teaches.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "A device that can open an encyclopedia can just as easily open a game, a chat, or a video, and the same screen that delivers a lesson competes with everything else online for a student's attention.", fn: "Explanation" },
            { text: "Studies repeatedly find students researching a topic while drifting into social media, and a classroom of glowing laptops is often a classroom of divided minds.", fn: "Example" },
            { text: "Technology can also create the illusion of learning — flashy videos and slick presentations that entertain without teaching — substituting stimulation for understanding.", fn: "Develop", vocab: [{ term: "illusion", gloss: "錯覺；假象" }, { term: "stimulation", gloss: "刺激；娛樂刺激" }] },
            { text: "So the statement is right that these tools, carelessly used, can crowd out the very learning they were meant to support.", fn: "Sub-conclusion" },
            { text: "A tool that can do anything can also do nothing useful.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But used well, technology helps",
          sentences: [
            { text: "However, to conclude that these technologies distract from real learning is to blame the tool for the hand that wields it.", fn: "Pivot", moves: ["However"] },
            { text: "The same Internet that distracts also gives a curious student instant access to lectures, libraries, and experts once available only to a privileged few.", fn: "Point" },
            { text: "Video can show a chemical reaction or a distant country no textbook could convey, and computers let students model, simulate, and practice in ways a chalkboard never allowed.", fn: "Explanation", vocab: [{ term: "simulate", gloss: "模擬；仿真" }] },
            { text: "A child in a remote village can now learn from the world's best teachers, and a struggling student can review a difficult lesson as many times as she needs.", fn: "Example" },
            { text: "Used deliberately, to do what older methods cannot, these tools do not distract from learning but deepen and democratize it.", fn: "Develop", vocab: [{ term: "democratize", gloss: "使普及；使大眾化" }] },
            { text: "The technology that distracts the careless empowers the purposeful.", fn: "Sub-conclusion" },
            { text: "The fault, when it appears, lies less in the tool than in how we use it.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The real issue is how we use it",
          sentences: [
            { text: "Moreover, the statement is most useful as a caution about use, not a verdict about technology.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Whether a computer helps or harms depends on the design of the lesson, the discipline of the student, and the skill of the teacher who directs it.", fn: "Point", vocab: [{ term: "discipline", gloss: "自律；紀律" }] },
            { text: "A good teacher uses technology to focus attention, not to scatter it, and sets it aside when a quieter method works better.", fn: "Explanation" },
            { text: "The answer to the danger the statement names is not to banish these tools but to use them wisely, teaching students to direct their attention rather than surrender it.", fn: "Develop" },
            { text: "The screen is neither teacher nor distraction in itself; it becomes whatever the classroom makes of it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, technology can distract from real learning, but it does not have to, and often does the very opposite.", fn: "Restate", moves: ["In conclusion"] },
            { text: "These tools are powerful in either direction, enriching learning when used with purpose and undermining it when used without, so the problem lies in our use of them rather than in the tools themselves.", fn: "Synthesis" },
            { text: "The task is not to fear the new tools but to master them, so that they serve learning instead of stealing it.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-070",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The best ideas arise from a passionate interest in commonplace things.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that passionate attention to the ordinary has produced extraordinary ideas, then argues that great ideas have many sources and that it is the passion, not the commonplace, that the statement should credit; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Newton watched an apple fall, Darwin studied barnacles and finches, and countless breakthroughs began with someone paying unusual attention to something utterly ordinary.", fn: "Hook" },
            { text: "The statement generalizes from such cases, claiming that the best ideas arise from a passionate interest in commonplace things.", fn: "Context (the statement)" },
            { text: "There is real insight here, because intense attention to the ordinary has produced extraordinary ideas, but the statement claims too much, since great ideas spring from many sources, not the commonplace alone.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Passionate attention to the ordinary is powerful",
          sentences: [
            { text: "It is true that some of the most profound ideas have grown from a fascination with everyday things.", fn: "Concession (topic sentence)", vocab: [{ term: "profound", gloss: "深刻的；意義深遠的" }], moves: ["It is true that"] },
            { text: "The commonplace is so familiar that most people stop noticing it, and the person who looks again, with passion and patience, often sees what everyone else has overlooked.", fn: "Explanation" },
            { text: "Gravity is the most ordinary experience imaginable, yet by taking the falling apple seriously Newton uncovered a law that governs the cosmos.", fn: "Example" },
            { text: "Pasteur's interest in souring milk led to germ theory, and the study of a humble mould gave us antibiotics, because passionate attention turns the ordinary into a doorway.", fn: "Develop" },
            { text: "So the statement captures a genuine and underrated truth: the everyday, looked at closely enough, is full of undiscovered ideas.", fn: "Sub-conclusion" },
            { text: "Familiarity hides more than distance ever does.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But great ideas come from elsewhere too",
          sentences: [
            { text: "However, to make the commonplace the source of the best ideas ignores how many great ideas come from the opposite direction.", fn: "Pivot", moves: ["However"] },
            { text: "Some of humanity's deepest insights arose not from ordinary things but from grand, abstract questions remote from daily life.", fn: "Point", vocab: [{ term: "abstract", gloss: "抽象的" }] },
            { text: "Einstein's relativity came from imagining riding a beam of light, and much of mathematics explores worlds with no commonplace counterpart at all.", fn: "Example" },
            { text: "Other great ideas come from accident, from collaboration, from the clash of disciplines, or from confronting a crisis, none of which is captured by passionate interest in commonplace things.", fn: "Explanation" },
            { text: "A doctor's idea may come from a rare disease, an engineer's from an exotic material, an artist's from a dream, sources that are anything but ordinary.", fn: "Develop" },
            { text: "The best ideas have too many origins for any single one, even the commonplace, to claim them all.", fn: "Sub-conclusion" },
            { text: "Inspiration keeps no fixed address.", fn: "Reinforce", vocab: [{ term: "inspiration", gloss: "靈感" }] },
          ],
        },
        {
          role: "Body — The common thread is passion, not the commonplace",
          sentences: [
            { text: "Moreover, what the examples really share is not the commonplace but the passion.", fn: "Pivot", moves: ["Moreover"] },
            { text: "The deeper truth is that great ideas come from intense, devoted attention, whether that attention falls on the ordinary or the extraordinary.", fn: "Point" },
            { text: "Newton's apple and Einstein's light beam differ in their subject but not in the obsessive curiosity that turned each into a discovery.", fn: "Explanation", vocab: [{ term: "obsessive", gloss: "著迷的；念念不忘的" }, { term: "curiosity", gloss: "好奇心" }] },
            { text: "The statement is right to prize passion but wrong to tie it to the commonplace, when the same passion fastened on the rare or the abstract is just as fruitful.", fn: "Develop" },
            { text: "It is the depth of interest, not the ordinariness of its object, that breeds the best ideas.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, passionate interest in commonplace things is one rich source of great ideas, but not the only one.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Intense attention to the ordinary has produced extraordinary discoveries, yet great ideas also arise from the abstract, the accidental, and the rare, so it is the passion, not the commonplace, that the statement should have credited.", fn: "Synthesis" },
            { text: "The best ideas come not from ordinary things but from extraordinary attention, wherever it happens to fall.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-071",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "To be an effective leader, a public official must maintain the highest ethical and moral standards.",
    directions: D_CLAIM,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): argues that effectiveness rests mainly on competence and sometimes on compromise, then meets the strongest counter — that ethics secures trust — by distinguishing basic integrity from the highest standards; well argued.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We want our leaders to be both good and effective, and we like to believe the two always go together.", fn: "Hook" },
            { text: "The claim insists they do, holding that to be an effective leader, a public official must maintain the highest ethical and moral standards.", fn: "Context (the claim)" },
            { text: "Ethical standards genuinely matter to leadership, but the claim overstates the case, because effectiveness depends above all on competence, and history is full of effective leaders whose morals were far from the highest.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Effectiveness depends mainly on competence",
          sentences: [
            { text: "First, what makes a leader effective is, before anything else, the ability to get important things done.", fn: "Topic sentence", moves: ["First"] },
            { text: "A public official succeeds by making wise decisions, managing crises, building coalitions, and delivering results, and none of these is the same as moral purity.", fn: "Explanation" },
            { text: "History records leaders of dubious private character who governed brilliantly, and saints whose high ideals left them helpless in the rough world of politics.", fn: "Example" },
            { text: "Effectiveness is a matter of skill and judgment, and a flawless conscience guarantees neither, just as a flawed one need not prevent either.", fn: "Develop" },
            { text: "So the claim errs in treating the highest morality as the key to effectiveness, when competence is the surer source.", fn: "Sub-conclusion", vocab: [{ term: "competence", gloss: "能力；勝任" }] },
            { text: "Goodness and capability are different virtues, and leadership needs both, but it runs on the second.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Governing often requires compromise",
          sentences: [
            { text: "Moreover, the rough business of governing often requires the very compromises the highest standards forbid.", fn: "Pivot", moves: ["Moreover"] },
            { text: "An effective leader must bargain with opponents, conceal some intentions, and sometimes choose the lesser of two evils, none of which fits a standard of moral perfection.", fn: "Point" },
            { text: "A leader too pure to make a deal, dirty his hands, or accept a flawed compromise may keep his conscience spotless while accomplishing nothing.", fn: "Explanation" },
            { text: "Many admired statesmen achieved great goods — peace, reform, survival — only by means a strict moralist would condemn.", fn: "Example" },
            { text: "This is not to praise corruption but to recognize that effectiveness in a messy world is not the same as ethical immaculacy.", fn: "Develop", vocab: [{ term: "immaculacy", gloss: "純潔無瑕；毫無缺點" }] },
            { text: "The highest standards, rigidly held, can be a handicap rather than a help in the exercise of power.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — The strongest case: ethics secures trust",
          sentences: [
            { text: "The most compelling argument for the claim is that ethics underpins the trust on which leadership depends.", fn: "Identify the strongest counter", moves: ["The most compelling"] },
            { text: "A leader caught in serious wrongdoing loses credibility, invites scandal, and squanders the public confidence without which little can be achieved.", fn: "Concede its force", vocab: [{ term: "credibility", gloss: "信譽；公信力" }] },
            { text: "This is true and important, but it shows that a leader needs a basic, reliable integrity, not that he must maintain the highest possible moral standards in every respect.", fn: "Rebut", vocab: [{ term: "integrity", gloss: "正直；誠信" }] },
            { text: "There is a vast space between a corrupt official and a moral saint, and the most effective leaders usually live in it: honest enough to be trusted, pragmatic enough to be effective.", fn: "Explain", vocab: [{ term: "pragmatic", gloss: "務實的；實事求是的" }] },
            { text: "Effectiveness requires enough ethics to keep trust, not the highest ethics imaginable.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, ethical standards matter to leadership, but the claim that the highest ones are necessary for effectiveness goes too far.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Effectiveness rests mainly on competence and often on pragmatic compromise, while ethics matters chiefly by securing trust, so a leader needs solid integrity rather than moral perfection.", fn: "Synthesis" },
            { text: "We should want leaders who are both good and capable, but we should not pretend that only the morally highest can ever lead well.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-072",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Claim: Imagination is a more valuable asset than experience. Reason: People who lack experience are free to imagine what is possible without the constraints of established habits and attitudes.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): correctly grants the reason a partial truth and shows it does not justify the claim, since imagination needs experience to be worth anything; clear and well organized, if it could press the point a little harder.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We celebrate the visionary who imagines what has never been, and we sometimes pity the veteran weighed down by the way things have always been done.", fn: "Hook" },
            { text: "The claim that imagination is more valuable than experience rests on the reason that those who lack experience are free to imagine the possible, unconstrained by established habits and attitudes.", fn: "Context (claim and reason)" },
            { text: "The reason contains a kernel of truth, but it does not justify the claim, because imagination and experience are not rivals but partners, and experience usually strengthens imagination rather than caging it.", fn: "Thesis statement (evaluate both)" },
          ],
        },
        {
          role: "Body — The reason is partly true",
          sentences: [
            { text: "First, the reason rightly notes that inexperience can sometimes free the mind.", fn: "Topic sentence (assess the reason)", moves: ["First"] },
            { text: "A newcomer is not yet bound by the assumptions that long practice quietly instills, and may imagine a solution that veterans have stopped believing is possible.", fn: "Explanation", vocab: [{ term: "assumptions", gloss: "假設；成見" }] },
            { text: "Outsiders have indeed transformed fields precisely because they did not know which ideas were supposed to be off limits.", fn: "Example" },
            { text: "Experience can harden into habit, and habit can blind even the talented to alternatives they no longer think to consider.", fn: "Develop" },
            { text: "So the reason is not baseless: a lack of experience can, on occasion, be a kind of freedom.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But it does not justify the claim",
          sentences: [
            { text: "However, that inexperience sometimes frees imagination does not make imagination more valuable than experience.", fn: "Pivot (break the link)", moves: ["However"] },
            { text: "Imagination without experience is mostly idle fantasy, since experience is what tells us which imagined possibilities are worth pursuing and how to make them real.", fn: "Point", vocab: [{ term: "fantasy", gloss: "幻想；空想" }] },
            { text: "A child can imagine a city on Mars, but only experienced engineers and scientists could begin to build one; the vision is empty without the knowledge to realize it.", fn: "Explanation" },
            { text: "The great innovators we admire were rarely ignorant dreamers; they were people who imagined boldly because they understood their field deeply enough to see where it could go.", fn: "Example", vocab: [{ term: "innovators", gloss: "創新者" }] },
            { text: "Experience also feeds imagination, supplying the raw material — the problems, patterns, and possibilities — from which new ideas are actually built.", fn: "Develop" },
            { text: "Far from being imagination's rival, experience is usually its fuel and its guide.", fn: "Sub-conclusion" },
            { text: "A vision no one yet knows how to build is, by itself, just a wish.", fn: "Aphoristic" },
            { text: "An imagination with nothing to work on imagines nothing worthwhile.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — The reason romanticizes inexperience",
          sentences: [
            { text: "Moreover, the reason mistakes the rare case for the rule.", fn: "Pivot", moves: ["Moreover"] },
            { text: "For every outsider whose fresh imagination succeeded, countless inexperienced dreamers imagined the impossible and achieved nothing, because they lacked the experience to tell vision from delusion.", fn: "Point", vocab: [{ term: "delusion", gloss: "妄想；錯覺" }] },
            { text: "The constraints of established habits the reason scorns are often hard-won lessons about what does not work, not mere prejudice to be ignored.", fn: "Explanation", vocab: [{ term: "prejudice", gloss: "偏見；成見" }] },
            { text: "The most valuable mind is not the inexperienced one free to imagine anything, but the experienced one that can imagine and judge at once.", fn: "Develop" },
            { text: "The veteran's caution is often experience quietly whispering what the dreamer cannot yet hear.", fn: "Sharpen" },
            { text: "Freedom from experience is freedom from knowledge, which is no advantage at all.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the reason is partly true but the claim does not follow from it.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Inexperience can occasionally free the imagination, but imagination needs experience to become anything more than daydreaming, so the two are partners and neither is simply more valuable than the other.", fn: "Synthesis" },
            { text: "The most powerful asset is not imagination over experience, but imagination informed by it.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-073",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "In most professions and academic fields, imagination is more important than knowledge.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that imagination drives the advances we admire while arguing that in most fields knowledge is the indispensable foundation imagination must build on, and that the two are partners; well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Einstein once said that imagination is more important than knowledge, and the statement extends his famous remark to most professions and fields.", fn: "Hook" },
            { text: "It holds that in most professions and academic disciplines, imagination matters more than knowledge.", fn: "Context (the statement)" },
            { text: "Imagination is indeed vital, and easy to undervalue, but the statement overstates its case, because in most fields knowledge is the indispensable foundation on which imagination must build.", fn: "Thesis statement (qualified position)" },
          ],
        },
        {
          role: "Body — Imagination is genuinely vital",
          sentences: [
            { text: "It is true that imagination drives the advances we most admire.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Knowledge tells us what is; imagination asks what might be, and every leap forward — a new theory, a new design, a new cure — begins with someone imagining a possibility that did not yet exist.", fn: "Explanation" },
            { text: "Two scientists may possess identical knowledge, yet only the one who imagines a new experiment makes the discovery.", fn: "Example" },
            { text: "In creative and frontier work especially, mere knowledge is not enough; it is imagination that turns facts into innovation.", fn: "Develop", vocab: [{ term: "innovation", gloss: "創新" }] },
            { text: "So the statement is right that imagination is precious and too often neglected in favor of memorized fact.", fn: "Sub-conclusion" },
            { text: "Facts are inert until an imagination puts them to work.", fn: "Aphoristic" },
            { text: "Knowledge fills the mind; imagination moves it forward.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — But knowledge is the foundation",
          sentences: [
            { text: "However, in most professions and fields, imagination cannot function without a deep base of knowledge.", fn: "Pivot", moves: ["However"] },
            { text: "Imagination is not conjured from nothing; it works on what we know, recombining and extending it, so the richer one's knowledge, the more one has to imagine with.", fn: "Point", vocab: [{ term: "recombining", gloss: "重新組合；重組" }] },
            { text: "A doctor's imaginative diagnosis, an engineer's bold design, and a historian's fresh interpretation all rest on years of accumulated knowledge that make the imaginative leap possible and reliable.", fn: "Explanation", vocab: [{ term: "accumulated", gloss: "累積的" }] },
            { text: "An imaginative idea about medicine from someone who knows no biology is worthless, even dangerous, while the great medical imaginations belonged to people who first mastered the field.", fn: "Example" },
            { text: "In the daily reality of most professions, moreover, sound knowledge matters far more often than flashes of imagination; we want our surgeons, accountants, and pilots to know their craft thoroughly first.", fn: "Develop", vocab: [{ term: "thoroughly", gloss: "徹底地" }] },
            { text: "The bolder the idea, the more knowledge it takes to tell whether it could ever stand up.", fn: "Develop" },
            { text: "Knowledge is what most work actually requires, and what imagination, when it comes, depends upon.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — They are partners, not rivals",
          sentences: [
            { text: "Moreover, the statement sets up a false contest between two things that plainly need each other.", fn: "Pivot", moves: ["Moreover"] },
            { text: "Knowledge without imagination is sterile, merely repeating what is known; imagination without knowledge is empty, dreaming without the means to build.", fn: "Point", vocab: [{ term: "sterile", gloss: "貧乏的；無成果的" }] },
            { text: "The greatest figures in any field combine the two, knowing their subject deeply and imagining boldly beyond it, and neither half alone would have sufficed.", fn: "Explanation" },
            { text: "To ask which is more important is a little like asking whether the foundation or the architecture matters more to a building.", fn: "Develop" },
            { text: "Imagination distinguishes the great, but knowledge is what makes them competent in the first place.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, imagination is invaluable, but it is not, in most fields, more important than knowledge.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Imagination supplies the vision and knowledge the means, and since imagination can only work on what is known, the two are partners rather than rivals to be ranked.", fn: "Synthesis" },
            { text: "The best professionals are not those who choose imagination over knowledge, but those who marry the two.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-074",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Critical judgment of work in any given field has little value unless it comes from someone who is an expert in that field.",
    directions: D_STATEMENT,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): grants that expertise is indispensable for technical judgment while arguing that much valuable judgment is non-expert and that the right judge depends on the question; coherent and persuasive.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "When a critic pans a film or a layperson questions a scientific theory, we often ask: what gives them the right, if they are not experts?", fn: "Hook" },
            { text: "The statement answers firmly, holding that critical judgment of work in any field has little value unless it comes from an expert in that field.", fn: "Context (the statement)" },
            { text: "Expertise certainly improves certain kinds of judgment, but the statement goes too far, because much valuable criticism comes from non-experts, and some fields exist precisely to be judged by ordinary people.", fn: "Thesis statement (clear position)" },
          ],
        },
        {
          role: "Body — Expertise improves technical judgment",
          sentences: [
            { text: "It is true that for many judgments, expertise is indispensable.", fn: "Concession (topic sentence)", moves: ["It is true that"] },
            { text: "Only someone trained in a field fully understands its problems, methods, and standards, and can tell a genuine advance from a plausible-looking error.", fn: "Explanation" },
            { text: "A non-physicist cannot meaningfully judge whether a new theory is sound, and a patient cannot assess a surgeon's technique the way another surgeon can.", fn: "Example" },
            { text: "For technical correctness — is this proof valid, this diagnosis right, this engineering safe — the informed judgment of experts is worth far more than the opinion of the crowd.", fn: "Develop" },
            { text: "So the statement is right that, on questions of technical merit, expert judgment carries a weight amateur judgment cannot.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body — But much valuable judgment is not expert",
          sentences: [
            { text: "However, to say that non-expert judgment has little value ignores how much of it is both valid and necessary.", fn: "Pivot", moves: ["However"] },
            { text: "A great deal of work is made for ordinary people, and on whether it succeeds for them, ordinary people are the real experts.", fn: "Point" },
            { text: "A film, a novel, a product, or a building is judged in part by how it affects its audience or users, and their response — does it move me, does it work for me — is not an amateur error but the very point.", fn: "Example", vocab: [{ term: "audience", gloss: "觀眾；受眾" }] },
            { text: "The fresh eye of an outsider can also catch what insiders, deep in their assumptions, have stopped seeing, which is why fields often benefit from external criticism.", fn: "Explanation", vocab: [{ term: "assumptions", gloss: "假設；成見" }] },
            { text: "Even on technical matters, history shows experts collectively mistaken, their consensus corrected by an outsider or by results no credential could override.", fn: "Develop", vocab: [{ term: "consensus", gloss: "共識" }, { term: "credential", gloss: "資歷；憑證" }] },
            { text: "Valuable judgment, in short, is not the monopoly of experts.", fn: "Sub-conclusion", vocab: [{ term: "monopoly", gloss: "壟斷；獨占" }] },
            { text: "The diner, not only the chef, can tell whether the meal is any good.", fn: "Reinforce" },
          ],
        },
        {
          role: "Body — Match the judge to the question",
          sentences: [
            { text: "Moreover, the truth is that different judgments call for different judges.", fn: "Pivot", moves: ["Moreover"] },
            { text: "On questions of technical correctness, defer to experts; on questions of value, usefulness, or human effect, the audience's judgment may matter more.", fn: "Point" },
            { text: "The statement errs by treating all critical judgment as the kind only experts can offer, when much of what is worth judging is precisely how work serves the non-experts it is meant for.", fn: "Explanation" },
            { text: "A wise field listens to experts on its methods and to everyone on its purposes, rather than dismissing all outside voices as worthless.", fn: "Develop" },
            { text: "Expertise should inform judgment, not monopolize it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, expert judgment is invaluable on technical questions but far from the only judgment that has value.", fn: "Restate", moves: ["In conclusion"] },
            { text: "Because much work exists to serve non-experts and outsiders sometimes see what insiders miss, critical judgment from beyond the field is often essential, not worthless.", fn: "Synthesis" },
            { text: "The right question is not whether a critic is an expert, but whether their judgment fits the kind of question being asked.", fn: "Final judgment" },
          ],
        },
      ],
    },
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
