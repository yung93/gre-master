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
