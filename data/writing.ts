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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a clear, qualified position with two developed examples, each followed by analysis of why it matters, plus controlled language and a genuine synthesis. About 400 words, fuller than a 4 but well short of the original, and still built on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Science has produced many of the advances that define modern life, from vaccines to computers to clean water.", fn: "Hook" },
            { text: "Some people argue that governments should place few, if any, restrictions on scientific research.", fn: "Restate the prompt" },
            { text: "I agree that most research should remain free, but I believe a small number of dangerous fields require firm limits.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Most research should be free",
          sentences: [
            { text: "First, the great majority of research is safe, and giving scientists freedom is what produces important discoveries.", fn: "Topic sentence", moves: ["First"] },
            { text: "Fields such as mathematics, biology, and astronomy threaten no one, and their benefits are often impossible to predict when the work begins.", fn: "Explanation" },
            { text: "For example, the antibiotic penicillin was found by accident when Alexander Fleming noticed mould killing bacteria in a forgotten dish, and it has since saved millions of lives.", fn: "Example (concrete)", vocab: [{ term: "antibiotic", gloss: "抗生素" }] },
            { text: "This shows that the most valuable breakthroughs often grow out of curiosity rather than careful planning, so freedom matters precisely because no one can know in advance where discovery will lead.", fn: "Explain why it matters" },
            { text: "If governments imposed heavy rules on all research, they would slow this progress and drive talented scientists toward countries with fewer restrictions.", fn: "Develop the cost" },
            { text: "Society would then quietly lose discoveries that no planner could ever have requested in the first place.", fn: "One more layer" },
            { text: "Taken together, freedom should be the normal rule across most of science.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Some research needs limits",
          sentences: [
            { text: "Second, however, a few kinds of research are so dangerous that limits become essential.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Work on deadly viruses, biological weapons, or technologies that could be turned against whole populations carries risks that spread far beyond the laboratory.", fn: "Explanation", vocab: [{ term: "biological weapons", gloss: "生物武器" }] },
            { text: "Consider an engineered virus that escapes from a laboratory and spreads before anyone can stop it, causing a pandemic that kills far more people than the research could ever save and leaving damage that can never be undone.", fn: "Example (stakes)", vocab: [{ term: "pandemic", gloss: "大流行疫情" }] },
            { text: "In a case like this, complete freedom is not a virtue but a form of recklessness, because the harm would be permanent and would affect everyone.", fn: "Explain why it matters", vocab: [{ term: "recklessness", gloss: "魯莽；輕率" }] },
            { text: "Governments therefore have a duty to require strict safety rules and oversight, not in order to block science but to prevent disasters that cannot be reversed.", fn: "Develop the point", vocab: [{ term: "oversight", gloss: "監督" }] },
            { text: "Sensible limits can even strengthen science by protecting the public trust on which all research ultimately depends.", fn: "One more layer" },
            { text: "Here, restriction is not the enemy of progress but a condition for it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I agree that most scientific research should remain free, since freedom drives the discoveries that improve our lives.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But when research could cause irreversible harm, the government has a responsibility to set firm limits that protect the public.", fn: "Synthesis", vocab: [{ term: "irreversible", gloss: "不可逆的" }] },
            { text: "The wisest policy is not to choose between freedom and control, but to grant freedom widely and impose restriction only where the danger is real.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): engages both sides, develops each example with analysis of why it matters, broadens beyond the classroom, and closes with real synthesis. Controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Praise is a powerful tool that can encourage students and make them eager to learn.", fn: "Hook" },
            { text: "Some people believe the best way to teach is to praise positive actions and ignore negative ones entirely.", fn: "Restate the prompt" },
            { text: "I agree that praise is essential, but I do not think teachers should ignore bad behavior, because students also need correction in order to improve.", fn: "Thesis (partial agreement)" },
          ],
        },
        {
          role: "Body 1 — Praise helps students",
          sentences: [
            { text: "First, praise builds the confidence and motivation that learning depends on.", fn: "Topic sentence", moves: ["First"], vocab: [{ term: "motivation", gloss: "動機；動力" }] },
            { text: "When students feel that their effort is noticed, they are far more willing to keep trying, even when a task is difficult.", fn: "Explanation" },
            { text: "For example, a young child who is praised for slowly improving her messy handwriting will gain confidence and practise more, while a child who hears only criticism may decide she is simply bad at writing and give up.", fn: "Example (concrete)" },
            { text: "This shows that encouragement works better than constant criticism, because it makes students believe that progress is actually possible.", fn: "Explain why it matters" },
            { text: "The same is true of adults, who usually work harder for a manager who notices their successes than for one who points only at their failures.", fn: "Broaden the point" },
            { text: "Praise, then, should sit at the heart of every classroom.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Ignoring bad actions is harmful",
          sentences: [
            { text: "Second, however, ignoring negative actions can seriously damage learning.", fn: "Topic sentence", moves: ["Second"] },
            { text: "If mistakes are never corrected, students may repeat them until they harden into permanent habits.", fn: "Explanation" },
            { text: "A teacher who ignores cheating sends a damaging signal to the whole class, since other students quickly notice that there are no consequences and may begin to cheat as well.", fn: "Example", vocab: [{ term: "consequences", gloss: "後果" }] },
            { text: "Silence of this kind is not real kindness, and it quietly teaches students that bad behavior is acceptable while letting small errors grow worse over time.", fn: "Explain why it matters" },
            { text: "Gentle correction, by contrast, helps students understand exactly what went wrong without feeling attacked, so they can genuinely improve.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Understood this way, correction is not the opposite of encouragement but an extension of it.", fn: "One more layer" },
            { text: "Correcting negative actions with care is therefore just as necessary as offering praise.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, praise should be the foundation on which good teaching is built.", fn: "Restate", moves: ["In conclusion"] },
            { text: "But ignoring negative actions would strip students of the feedback they need, allowing mistakes and bad habits to continue unchecked.", fn: "Synthesis", vocab: [{ term: "feedback", gloss: "回饋；反饋" }] },
            { text: "The best teachers combine generous praise with kind, clear correction, because students learn most when they are both encouraged and guided.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a clear, qualified position with two developed examples, explicit analysis of human capital and opportunity cost, and a genuine synthesis. Controlled language at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "University education can open many doors, but for many families it is also extremely expensive.", fn: "Hook" },
            { text: "Some people argue that the government should make college free for all students.", fn: "Restate the prompt" },
            { text: "I agree that the government should help students who cannot afford university, but making college free for everyone would be both unfair and financially unwise.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Free education can help",
          sentences: [
            { text: "First, removing the cost of higher education would especially help talented students from low-income families.", fn: "Topic sentence", moves: ["First"] },
            { text: "Many capable young people give up on university simply because they cannot cover tuition and living costs, and their potential is then wasted.", fn: "Explanation", vocab: [{ term: "tuition", gloss: "學費" }] },
            { text: "For example, a gifted student from a poor rural area who dreams of becoming a doctor might instead start working straight after secondary school.", fn: "Example (concrete)" },
            { text: "The student then loses a meaningful career, and society loses a future doctor it badly needs, which is a clear loss of human capital.", fn: "Explain why it matters", vocab: [{ term: "human capital", gloss: "人力資本" }] },
            { text: "By removing this financial barrier for those who truly need help, the government turns wasted talent into valuable skills that strengthen the economy and public services.", fn: "Develop the point", vocab: [{ term: "barrier", gloss: "障礙；阻礙" }] },
            { text: "Properly understood, targeted free or subsidized education is a long-term investment rather than a simple handout.", fn: "One more layer", vocab: [{ term: "subsidized", gloss: "補貼的；資助的" }] },
            { text: "Where money alone stands between a capable student and a degree, the case for support is strong.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Free for everyone has problems",
          sentences: [
            { text: "Second, however, offering free college to all students regardless of need would waste limited public money.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Wealthy families who can comfortably pay full tuition would also receive free education, even though they do not need any assistance.", fn: "Explanation" },
            { text: "The money spent on these richer students could instead fund hospitals, vocational training, or need-based grants for those who are genuinely struggling.", fn: "Example (concrete)", vocab: [{ term: "grants", gloss: "助學金；補助" }] },
            { text: "Because public funds are finite, every dollar given to someone who could already pay is a dollar taken from someone who could not, which is the opposite of fairness.", fn: "Explain why it matters", vocab: [{ term: "finite", gloss: "有限的" }] },
            { text: "Such a universal promise can also strain universities, as rising enrolment crowds classrooms and stretches teaching resources thin.", fn: "One more layer", vocab: [{ term: "resources", gloss: "資源" }] },
            { text: "A fairer approach is to tie support to financial need, so that help reaches the students who would otherwise be unable to study.", fn: "Develop the point" },
            { text: "In this way the government can widen opportunity without burdening taxpayers or cutting other essential services.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, free university for students from low-income families can unlock talent and promote social mobility.", fn: "Restate", moves: ["In conclusion"] },
            { text: "But extending it to everyone, including those who can easily pay, is neither fair nor financially sustainable.", fn: "Synthesis" },
            { text: "The wiser policy is to make higher education affordable for those who need help, rather than free for all who want it.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a qualified position that concedes comfort can weaken people, then argues that convenience relocates challenges rather than removing them; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every generation seems to worry that comfort is quietly making the next one weak.", fn: "Hook" },
            { text: "Some people argue that the luxuries and conveniences of modern life prevent people from becoming strong and independent individuals.", fn: "Restate the prompt" },
            { text: "There is some truth in this worry, but I largely disagree, because convenience does not remove life's challenges so much as change their form.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Where the statement holds",
          sentences: [
            { text: "First, it is fair to admit that too much comfort can sometimes weaken people.", fn: "Topic sentence", moves: ["First"] },
            { text: "When everything is provided instantly, some people never learn patience or how to struggle through a difficult task.", fn: "Explanation" },
            { text: "For example, a student who can find every answer online may never build the discipline needed to solve a hard problem alone.", fn: "Example", vocab: [{ term: "discipline", gloss: "紀律；自律" }] },
            { text: "This shows that convenience, used carelessly, can rob people of the small daily struggles that once built character.", fn: "Explain why it matters" },
            { text: "A person who has never had to wait, save, or repair anything may indeed grow impatient and dependent.", fn: "Develop the point" },
            { text: "Comfort can also make people fragile, so that minor setbacks start to feel like disasters.", fn: "One more layer" },
            { text: "To this extent, the worry points to a real danger.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it largely fails",
          sentences: [
            { text: "Second, however, convenience does not destroy challenges so much as move them to new areas.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Once machines handle physical labour and basic chores, people are freed to face harder mental and social difficulties instead.", fn: "Explanation" },
            { text: "Consider a young entrepreneur who uses modern tools to launch a business, yet still must master risk, failure, and self-discipline to succeed.", fn: "Example" },
            { text: "Such challenges build independence just as powerfully as hardship once did, only in a different form.", fn: "Explain why it matters" },
            { text: "Modern life also gives people more freedom to choose their own path, which itself demands strength and responsibility.", fn: "Develop the point" },
            { text: "Someone who plans her own career, manages her own money, and shapes her own goals is hardly a weak or passive person.", fn: "One more layer" },
            { text: "In this sense, convenience can actually create new chances to grow strong and self-reliant.", fn: "Sub-conclusion", vocab: [{ term: "self-reliant", gloss: "自立的；自給自足的" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, comfort can weaken people who let it, but it does not make weakness inevitable.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "The challenges that build character have not disappeared; they have simply taken new shapes in work, choice, and responsibility.", fn: "Synthesis" },
            { text: "Whether convenience makes us weak or strong depends far less on the luxuries themselves than on how we choose to use them.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a qualified position granting that beginners bring fresh ideas while arguing that experts make most contributions; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Fresh eyes can sometimes notice what trained experts overlook.", fn: "Hook" },
            { text: "Some people argue that in any field the beginner is more likely than the expert to make important contributions.", fn: "Restate the prompt" },
            { text: "I agree that beginners occasionally bring valuable new ideas, but I disagree that they are generally more likely than experts to advance a field.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of beginners",
          sentences: [
            { text: "First, beginners do enjoy one real advantage, which is freedom from fixed assumptions.", fn: "Topic sentence", moves: ["First"] },
            { text: "Because they have not yet learned what is considered impossible, they are sometimes willing to ask bold questions.", fn: "Explanation" },
            { text: "For example, young scientists in their twenties have occasionally proposed ideas that older specialists had dismissed as unrealistic.", fn: "Example" },
            { text: "This shows that a fresh perspective can break through habits of thought that hold a field back.", fn: "Explain why it matters" },
            { text: "Newcomers are also less afraid of failure, since they have no reputation to protect.", fn: "Develop the point" },
            { text: "A willingness to take risks can lead to surprising and original work.", fn: "One more layer" },
            { text: "In this limited sense, beginners can indeed make important contributions.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why experts contribute more",
          sentences: [
            { text: "Second, however, the great majority of important contributions still come from experts.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Deep knowledge is usually what allows a person to see exactly where a field is stuck and how to move it forward.", fn: "Explanation" },
            { text: "Consider the years of study a doctor needs before she can safely test a new treatment or interpret a confusing result.", fn: "Example" },
            { text: "Such expertise is what turns a vague idea into a discovery that others can trust and build upon.", fn: "Explain why it matters", vocab: [{ term: "expertise", gloss: "專業知識；專長" }] },
            { text: "Most beginners, by contrast, simply lack the background to know which questions are worth asking.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Their fresh ideas, however appealing, often repeat mistakes that specialists settled long ago.", fn: "One more layer" },
            { text: "On balance, then, sustained knowledge contributes far more than inexperience does.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, beginners can offer fresh perspectives that experts sometimes miss.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But important contributions usually depend on the deep understanding that only experience can provide.", fn: "Synthesis" },
            { text: "The most progress is likely to come not from beginners alone, but from experts who manage to keep a beginner's open mind.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a qualified position that the welfare of the people is the surest sign of greatness while achievements still matter; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Nations are often remembered for their famous leaders, artists, and scientists.", fn: "Hook" },
            { text: "Some people argue that the surest sign of a great nation is not these achievements but the general welfare of its ordinary people.", fn: "Restate the prompt" },
            { text: "I largely agree that the welfare of the people is the best measure of greatness, though remarkable achievements still matter as part of the picture.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Welfare as the clearest measure",
          sentences: [
            { text: "First, the well-being of ordinary people is the clearest test of how well a nation actually works.", fn: "Topic sentence", moves: ["First"] },
            { text: "A country may produce brilliant art or science while most of its citizens remain poor, sick, or unfree.", fn: "Explanation" },
            { text: "For example, a nation with grand monuments but hungry children has clearly failed at its most basic duty.", fn: "Example" },
            { text: "This shows that achievements mean little if the people who make up the nation do not live decent lives.", fn: "Explain why it matters" },
            { text: "Widespread health, education, and security affect everyone, not just a gifted few.", fn: "Develop the point", vocab: [{ term: "welfare", gloss: "福祉；福利" }] },
            { text: "Any government that cares for all its citizens has met the deepest purpose of a nation.", fn: "One more layer" },
            { text: "By this measure, general welfare is rightly seen as the surest indicator of greatness.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why achievements still matter",
          sentences: [
            { text: "Second, however, the achievements of rulers, artists, and scientists should not be dismissed entirely.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Great discoveries and works of art often improve the welfare of the people themselves.", fn: "Explanation" },
            { text: "Consider the way medical research extends ordinary lives, or how great literature shapes a society's values.", fn: "Example" },
            { text: "Such achievements are not separate from welfare but are often one of its causes.", fn: "Explain why it matters" },
            { text: "Societies that value learning and creativity usually become healthier and wealthier as a result.", fn: "Develop the point" },
            { text: "These accomplishments can also give a people pride and a shared sense of identity.", fn: "One more layer" },
            { text: "In this way, achievement and welfare support each other rather than standing apart.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the general welfare of the people is the truest measure of a great nation.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the achievements of its thinkers and artists matter too, because they often raise that welfare and enrich its meaning.", fn: "Synthesis" },
            { text: "Greatness, in the end, belongs to the nation that turns its talents toward the good of all its people.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the power of praise across parents, employers, and teachers, then shows why ignoring negative actions fails; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Praise can bring out the best in children, employees, and students alike.", fn: "Hook" },
            { text: "Some people claim that the best way to teach, whether as a parent, employer, or educator, is to praise good actions and ignore bad ones.", fn: "Restate the prompt" },
            { text: "I agree that praise is a powerful teaching tool, but I do not believe that ignoring negative actions is ever the best approach.", fn: "Thesis (partial agreement)" },
          ],
        },
        {
          role: "Body 1 — Why praise works",
          sentences: [
            { text: "First, praise encourages people to repeat the behavior we want to see.", fn: "Topic sentence", moves: ["First"] },
            { text: "When effort is noticed and rewarded, people feel valued and try harder.", fn: "Explanation" },
            { text: "For example, an employee whose good work is regularly recognized will usually stay motivated and loyal.", fn: "Example", vocab: [{ term: "recognized", gloss: "受到肯定的；被認可的" }] },
            { text: "This shows that encouragement can shape behavior more gently and lastingly than constant criticism.", fn: "Explain why it matters" },
            { text: "Parents see the same effect when a child praised for kindness becomes eager to be kind again.", fn: "Develop the point" },
            { text: "Positive attention, in short, teaches people what success looks like.", fn: "One more layer" },
            { text: "For this reason, praise deserves a central place in teaching of every kind.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why ignoring bad actions fails",
          sentences: [
            { text: "Second, however, ignoring negative actions can be careless and even harmful.", fn: "Topic sentence", moves: ["Second"] },
            { text: "If serious mistakes go unmentioned, people may never realise that anything is wrong.", fn: "Explanation" },
            { text: "Imagine a manager who says nothing while an employee repeatedly mishandles money or treats customers badly.", fn: "Example" },
            { text: "Silence in such cases is not kindness, because it allows small problems to grow into serious ones.", fn: "Explain why it matters" },
            { text: "A parent who ignores a child's dishonesty, by contrast, may quietly teach that lying carries no cost.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Some behavior is simply too important to be left uncorrected.", fn: "One more layer" },
            { text: "Gentle, honest correction is therefore just as necessary as praise.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, praise is one of the most effective tools a teacher, parent, or employer can use.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But ignoring negative actions would leave people without the guidance they need to improve.", fn: "Synthesis" },
            { text: "The best approach is to praise generously while still correcting mistakes with care.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): concedes the appeal of rewarding good teaching, then shows why pay tied mainly to student scores is unfair; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It seems only fair to reward teachers whose students do well.", fn: "Hook" },
            { text: "Some people claim that teachers' salaries should be based on how their students perform academically.", fn: "Restate the prompt" },
            { text: "I agree that good teaching should be rewarded, but I believe basing salaries mainly on student results would be unfair and harmful.", fn: "Thesis (partial agreement)" },
          ],
        },
        {
          role: "Body 1 — The appeal of the idea",
          sentences: [
            { text: "First, the idea does contain a reasonable goal, which is to encourage good teaching.", fn: "Topic sentence", moves: ["First"] },
            { text: "Linking some reward to performance might push teachers to prepare more carefully and support struggling students.", fn: "Explanation" },
            { text: "For example, a school that recognises its excellent teachers can motivate others to improve.", fn: "Example" },
            { text: "This shows that rewarding effort and skill is not wrong in itself.", fn: "Explain why it matters" },
            { text: "Students clearly deserve teachers who are encouraged to do their very best.", fn: "Develop the point" },
            { text: "Modest bonuses for outstanding work could be one fair way to value the profession.", fn: "One more layer" },
            { text: "To this extent, the claim rests on a sensible instinct.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it would be unfair",
          sentences: [
            { text: "Second, however, student results depend on far more than the teacher alone.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A child's home life, health, and background all strongly affect how well she learns.", fn: "Explanation" },
            { text: "Consider two teachers of equal skill, one in a wealthy school and one in a poor neighbourhood with few resources.", fn: "Example", vocab: [{ term: "resources", gloss: "資源" }] },
            { text: "Judging them by results alone would punish the second teacher for problems beyond her control.", fn: "Explain why it matters" },
            { text: "Such a system could also push teachers to focus only on tests, by contrast neglecting creativity and slower learners.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Some might even avoid the struggling students who need them most.", fn: "One more layer" },
            { text: "Pay tied mainly to scores would therefore harm fairness and learning at once.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, rewarding good teaching is a fair aim, and modest bonuses may help.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But basing salaries mainly on student performance would ignore everything else that shapes results.", fn: "Synthesis" },
            { text: "A wiser system judges teachers by the quality of their work, not only by the scores of their students.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a policy response that grants our duty to repair human-caused harm, then argues the cause of decline is a poor test for action; two developed examples weighing consequences, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Many species today are disappearing, and people disagree about which ones we should try to save.", fn: "Hook" },
            { text: "One proposed policy is to protect endangered species only when human activity is the cause of their decline.", fn: "Restate the prompt" },
            { text: "I understand the appeal of this policy, but I believe it is too narrow, because the value of saving a species rarely depends on the cause of its danger.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The policy's reasonable side",
          sentences: [
            { text: "First, there is a fair point behind the policy, which is that humans have a special duty to repair their own damage.", fn: "Topic sentence", moves: ["First"] },
            { text: "When our pollution or hunting drives a species toward extinction, we are clearly responsible for fixing it.", fn: "Explanation" },
            { text: "For example, governments that banned harmful chemicals helped several bird species recover from near extinction.", fn: "Example" },
            { text: "This shows that human-caused harm creates a strong and obvious obligation to act.", fn: "Explain why it matters" },
            { text: "Focusing on these cases also lets limited resources be used where our responsibility is clearest.", fn: "Develop the point", vocab: [{ term: "resources", gloss: "資源" }] },
            { text: "Repairing our own mistakes is both practical and just.", fn: "One more layer" },
            { text: "To this extent, the policy identifies a real priority.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it is too narrow",
          sentences: [
            { text: "Second, however, the cause of a species' decline is a poor reason to decide whether it is worth saving.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A species that disappears through natural change is just as lost as one we harmed directly.", fn: "Explanation" },
            { text: "Consider an animal vital to its ecosystem that begins to vanish for reasons we do not fully understand.", fn: "Example", vocab: [{ term: "ecosystem", gloss: "生態系統" }] },
            { text: "Letting it die simply because we did not cause the problem could damage an entire web of life that people depend on.", fn: "Explain why it matters" },
            { text: "Such a policy ignores the practical consequences, since healthy ecosystems protect our food, water, and climate.", fn: "Develop the point" },
            { text: "Refusing to help also treats nature as valuable only when our guilt is involved.", fn: "One more layer" },
            { text: "A wiser approach weighs the importance of the species, not only the source of its danger.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, humans certainly have a duty to save species they have endangered.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But limiting protection to those cases alone would let valuable species vanish for no good reason.", fn: "Synthesis" },
            { text: "The better policy is to act wherever a species truly matters, whatever the cause of its decline.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that job prospects matter, then argues they should not be the sole basis for choosing a field; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Choosing what to study is one of the most important decisions a young person makes.", fn: "Hook" },
            { text: "Some people claim that students should base this choice on the availability of jobs in each field.", fn: "Restate the prompt" },
            { text: "I agree that job prospects deserve serious thought, but I do not believe they should be the only basis for the decision.", fn: "Thesis (partial agreement)" },
          ],
        },
        {
          role: "Body 1 — Why job availability matters",
          sentences: [
            { text: "First, it is sensible for students to consider where the jobs are.", fn: "Topic sentence", moves: ["First"] },
            { text: "A degree that leads to steady work offers security and the freedom that a reliable income brings.", fn: "Explanation" },
            { text: "For example, a student who trains in nursing or engineering can usually expect dependable employment after graduating.", fn: "Example" },
            { text: "This shows that practical concerns are not selfish but a reasonable part of planning a life.", fn: "Explain why it matters" },
            { text: "Ignoring the job market entirely can leave a graduate with heavy debt and few options.", fn: "Develop the point" },
            { text: "Knowing that a field offers opportunities can also reduce stress and uncertainty.", fn: "One more layer" },
            { text: "To this extent, the claim gives useful advice.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it should not be the only basis",
          sentences: [
            { text: "Second, however, choosing a field by jobs alone can lead to an unhappy and unproductive life.", fn: "Topic sentence", moves: ["Second"] },
            { text: "People rarely do well at work they find dull or meaningless, however secure it may be.", fn: "Explanation" },
            { text: "Consider a talented artist who forces herself into accounting only because it pays, then performs poorly and soon quits.", fn: "Example" },
            { text: "This kind of mismatch wastes both her talent and the years she spent training.", fn: "Explain why it matters" },
            { text: "Job markets also change quickly, so today's safe choice may not be safe in ten years.", fn: "Develop the point" },
            { text: "Genuine interest, by contrast, tends to produce the energy and skill that lead to success.", fn: "One more layer", moves: ["by contrast"] },
            { text: "A good decision therefore weighs passion and ability alongside job prospects.", fn: "Sub-conclusion", vocab: [{ term: "prospects", gloss: "前景；前途" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the availability of jobs is an important factor that students should not ignore.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But basing the choice on jobs alone risks a career without interest or strength.", fn: "Synthesis" },
            { text: "The wisest students choose a field where their interests and their prospects meet.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that knowledge reveals new mysteries, then argues it makes far more of the world understandable; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every answer that science discovers seems to raise a host of new questions.", fn: "Hook" },
            { text: "Some people argue that as we gain more knowledge, the world becomes not clearer but more complex and mysterious.", fn: "Restate the prompt" },
            { text: "I agree that new knowledge often uncovers new mysteries, but I disagree that the world therefore becomes less understandable overall.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Where the statement is true",
          sentences: [
            { text: "First, it is true that learning more often reveals how much we still do not know.", fn: "Topic sentence", moves: ["First"] },
            { text: "Each discovery tends to open doors to deeper and harder questions.", fn: "Explanation" },
            { text: "For example, when physicists explained the atom, they uncovered a strange quantum world that puzzles experts to this day.", fn: "Example", vocab: [{ term: "quantum", gloss: "量子（物理）" }] },
            { text: "This shows that knowledge can expand the edge of mystery even as it grows.", fn: "Explain why it matters" },
            { text: "Fields once thought simple, such as genetics, have turned out to be astonishingly complex.", fn: "Develop the point" },
            { text: "The more we see, the more we realise how much remains hidden.", fn: "One more layer" },
            { text: "In this sense, the statement captures something real about inquiry.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why much becomes clearer",
          sentences: [
            { text: "Second, however, knowledge also makes a great deal of the world far more understandable.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Things that once seemed terrifying or magical now have clear and reassuring explanations.", fn: "Explanation" },
            { text: "Consider how diseases once blamed on curses are now understood as infections we can treat and prevent.", fn: "Example" },
            { text: "This kind of understanding has replaced fear with control across countless areas of life.", fn: "Explain why it matters" },
            { text: "Knowledge also connects scattered facts into simple laws that explain many events at once.", fn: "Develop the point" },
            { text: "A single idea like gravity can make sense of falling apples and orbiting planets together.", fn: "One more layer" },
            { text: "Overall, then, learning clarifies far more than it confuses.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, gaining knowledge does reveal new mysteries at its frontier.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But at the same time it steadily turns confusion into understanding across the rest of life.", fn: "Synthesis" },
            { text: "The world grows both clearer and more mysterious at once, and that double effect is the real nature of discovery.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that contrasting views usually drive progress, then argues the word 'any' is too absolute; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "New ideas often appear when people who think differently are forced to talk to one another.", fn: "Hook" },
            { text: "Some people argue that progress in any situation requires discussion among those who hold contrasting points of view.", fn: "Restate the prompt" },
            { text: "I agree that such discussion usually drives progress, but I think the word any makes the statement too absolute.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Where contrasting views help",
          sentences: [
            { text: "First, in most situations, debate between different viewpoints clearly improves results.", fn: "Topic sentence", vocab: [{ term: "debate", gloss: "辯論；討論" }], moves: ["First"] },
            { text: "When people challenge one another's ideas, weak arguments are exposed and better solutions emerge.", fn: "Explanation" },
            { text: "For example, scientific progress depends on researchers questioning and testing each other's claims.", fn: "Example" },
            { text: "This shows that disagreement, handled well, sharpens thinking rather than blocking it.", fn: "Explain why it matters" },
            { text: "A group in which everyone agrees too easily often misses obvious mistakes.", fn: "Develop the point" },
            { text: "Hearing opposing views also forces people to understand a problem more deeply.", fn: "One more layer" },
            { text: "In most fields, then, contrasting opinions are a powerful engine of progress.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it is not always required",
          sentences: [
            { text: "Second, however, the claim that progress always requires such discussion goes too far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some situations call for quick, united action rather than lengthy debate.", fn: "Explanation" },
            { text: "Consider an emergency, such as a fire or a flood, where arguing over viewpoints would only cost lives.", fn: "Example" },
            { text: "In moments like these, agreement and speed matter far more than a clash of opinions.", fn: "Explain why it matters" },
            { text: "Endless discussion can also trap a group in conflict, by contrast preventing any decision at all.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Sometimes a single determined person achieves more than a divided committee ever could.", fn: "One more layer" },
            { text: "Progress, then, does not depend on debate in every single case.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, discussion among people with contrasting views usually does drive progress.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But in urgent or simple situations, unity and action can matter more than debate.", fn: "Synthesis" },
            { text: "The wisest course is to welcome differing views in most cases while knowing when the time for talk has passed.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a policy response that grants the value of honest guidance, then argues that actively discouraging students would do more harm than good; two developed examples weighing consequences, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Schools naturally want their students to succeed and to avoid wasted effort.", fn: "Hook" },
            { text: "One proposed policy is that educational institutions should discourage students from studying fields in which they are unlikely to succeed.", fn: "Restate the prompt" },
            { text: "I agree that schools should give honest guidance, but I believe actively discouraging students would do more harm than good.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The reasonable aim",
          sentences: [
            { text: "First, the policy is built on a fair concern for students' futures.", fn: "Topic sentence", moves: ["First"] },
            { text: "Honest advice can save a student from years of struggle and heavy debt in a hopeless direction.", fn: "Explanation" },
            { text: "For example, a counsellor who gently warns a weak maths student about a demanding engineering course may spare her real disappointment.", fn: "Example" },
            { text: "This shows that realistic guidance can be a genuine kindness.", fn: "Explain why it matters" },
            { text: "Institutions also have limited places and resources, which should not be wasted carelessly.", fn: "Develop the point", vocab: [{ term: "resources", gloss: "資源" }] },
            { text: "Pointing students toward fields that suit them can help them flourish.", fn: "One more layer" },
            { text: "To this extent, the policy contains a sensible idea.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why discouraging is wrong",
          sentences: [
            { text: "Second, however, actively dissuading students can crush ambition and prove badly mistaken.", fn: "Topic sentence", vocab: [{ term: "ambition", gloss: "抱負；志向" }], moves: ["Second"] },
            { text: "Teachers often cannot predict who will succeed, because effort and passion can overcome early weakness.", fn: "Explanation" },
            { text: "Consider the many famous scientists and writers who were once judged hopeless by their own teachers.", fn: "Example" },
            { text: "Discouraging such students would have robbed the world of their later achievements.", fn: "Explain why it matters" },
            { text: "A policy of this kind could also push young people away from the very dreams that motivate them.", fn: "Develop the point" },
            { text: "It risks turning schools into gatekeepers that decide futures far too early.", fn: "One more layer" },
            { text: "Guidance should open doors, not close them before a student has truly tried.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, schools should offer students honest and realistic advice about their chances.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a policy of actively discouraging them would stifle ambition and often turn out to be wrong.", fn: "Synthesis" },
            { text: "The better path is to inform and support students while leaving the final choice in their hands.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that argues unclear consequences describe most valuable research, then concedes caution where harm could be severe; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Almost every important discovery in history began as research whose final consequences nobody could clearly predict.", fn: "Hook" },
            { text: "Some people recommend that governments should refuse to fund any scientific research whose consequences are unclear.", fn: "Restate the prompt" },
            { text: "I understand the wish to avoid waste and danger, but I believe this recommendation would block most of the valuable research a society depends on.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why funding uncertain research is usually right",
          sentences: [
            { text: "First, in the great majority of cases, unclear consequences are not a reason to refuse funding but the very nature of discovery.", fn: "Topic sentence", moves: ["First"] },
            { text: "When researchers explore something genuinely new, they cannot know in advance whether it will lead to a cure, a new material, or nothing at all.", fn: "Explanation" },
            { text: "For example, the early study of electricity seemed useless and unpredictable, yet it eventually came to power almost every part of modern life.", fn: "Example" },
            { text: "This shows that demanding clear consequences before funding would have stopped many of the breakthroughs we now take for granted.", fn: "Explain why it matters" },
            { text: "A government that funds only safe, predictable projects will support little more than small improvements to things we already understand.", fn: "Develop the point" },
            { text: "Real progress depends on accepting that most worthwhile research is uncertain at the very moment it begins.", fn: "One more layer" },
            { text: "For most science, then, unclear consequences are a normal cost rather than a good reason to withhold money.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Where caution makes sense",
          sentences: [
            { text: "Second, however, there are a few cases in which unclear consequences should genuinely make a government cautious.", fn: "Topic sentence", moves: ["Second"] },
            { text: "If research could plausibly lead to serious and irreversible harm, simply not knowing the outcome is itself a warning.", fn: "Explanation", vocab: [{ term: "irreversible", gloss: "不可逆的" }] },
            { text: "Consider work on powerful new weapons or on altering the human genome, where a single mistake could affect millions of people permanently.", fn: "Example", vocab: [{ term: "genome", gloss: "基因組" }] },
            { text: "In situations like these, the lack of clarity is dangerous precisely because the possible damage is so enormous.", fn: "Explain why it matters" },
            { text: "A wise government would fund such work only under strict supervision, or pause it until the risks are far better understood.", fn: "Develop the point" },
            { text: "The problem in these cases is not uncertainty alone but uncertainty joined to the threat of catastrophe.", fn: "One more layer" },
            { text: "Here, caution about unclear consequences is reasonable and even necessary.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, governments should not refuse funding simply because the consequences of research are unclear.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they are right to be careful when uncertainty is combined with the risk of severe and lasting harm.", fn: "Synthesis" },
            { text: "The sensible rule is to fund uncertain research freely while watching closely over the rare projects that could end in disaster.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that grants the value of early support while warning against rigid early selection; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Many great musicians, athletes, and scientists showed their gifts when they were still very young.", fn: "Hook" },
            { text: "Some people recommend that society should identify children with special talents early and provide training to develop those gifts.", fn: "Restate the prompt" },
            { text: "I agree that early encouragement can be valuable, but I believe that selecting and labelling children too early would do real harm.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of early support",
          sentences: [
            { text: "First, in many cases, giving talented children early training helps them reach their full potential.", fn: "Topic sentence", vocab: [{ term: "potential", gloss: "潛能" }], moves: ["First"] },
            { text: "Skills such as music, dance, and gymnastics are far easier to master when serious training begins in childhood.", fn: "Explanation" },
            { text: "For example, most world-class violinists and ballet dancers started intense practice long before they reached their teenage years.", fn: "Example" },
            { text: "This shows that early support can turn raw natural ability into genuine and lasting excellence.", fn: "Explain why it matters" },
            { text: "A child whose talent is noticed and nurtured may gain a confidence and sense of purpose that last a lifetime.", fn: "Develop the point" },
            { text: "Without such support, gifted children from poorer families in particular may never discover what they could have achieved.", fn: "One more layer" },
            { text: "Where ability is clear and the child is willing, early training is plainly a good thing.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — The dangers of early selection",
          sentences: [
            { text: "Second, however, identifying and separating talented children too early carries serious risks.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Young children change quickly, so a gift that seems obvious at six may fade, while a slow starter may bloom much later.", fn: "Explanation" },
            { text: "Consider a child wrongly judged ordinary at an early age, who is then denied the chances quietly given to the chosen few.", fn: "Example" },
            { text: "Such early labelling can crush the confidence of children who are simply developing at a slower natural pace.", fn: "Explain why it matters" },
            { text: "A system focused only on a talented minority may also neglect the many ordinary children who deserve a good education too.", fn: "Develop the point" },
            { text: "Pushing very young children into intense training can rob them of play, friendship, and an ordinary childhood.", fn: "One more layer" },
            { text: "For these reasons, any early selection must be gentle, flexible, and always open to second chances.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, helping talented children develop their gifts early can be genuinely worthwhile.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But rigidly identifying and separating them too soon risks unfairness, mistakes, and a lost childhood.", fn: "Synthesis" },
            { text: "The wiser approach is to nurture talent wherever it appears while never closing the door on children who develop later.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that social groups shape identity, then argues individual choices matter just as much; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Each of us belongs to many groups, from our family and nation to our friends, faith, and profession.", fn: "Hook" },
            { text: "Some people argue that it is primarily through our identification with social groups that we define ourselves.", fn: "Restate the prompt" },
            { text: "I agree that groups play a powerful role in shaping who we are, but I do not believe they define us more than our own choices and experiences do.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The power of groups",
          sentences: [
            { text: "First, the groups we belong to clearly shape a great deal of our sense of identity.", fn: "Topic sentence", vocab: [{ term: "identity", gloss: "身份；自我認同" }], moves: ["First"] },
            { text: "From birth, our language, values, and habits are largely learned from the family and culture around us.", fn: "Explanation" },
            { text: "For example, people often describe themselves first by their nationality, religion, or profession when asked who they are.", fn: "Example" },
            { text: "This shows that group membership gives us a ready-made sense of belonging and a shared story to live by.", fn: "Explain why it matters" },
            { text: "Belonging to a group can also give people pride, support, and a clear set of expectations to follow.", fn: "Develop the point" },
            { text: "Much of what we believe and value would look very different had we been raised among other people.", fn: "One more layer" },
            { text: "To this extent, social groups are a genuine and powerful source of identity.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why individuality matters too",
          sentences: [
            { text: "Second, however, we are defined just as deeply by our own choices, talents, and inner lives.", fn: "Topic sentence", moves: ["Second"] },
            { text: "People raised in the very same family or culture often grow into strikingly different individuals.", fn: "Explanation" },
            { text: "Consider two siblings who share a background completely yet hold opposite beliefs, careers, and dreams.", fn: "Example" },
            { text: "Such differences show that identity is shaped from within as much as it is handed down from outside.", fn: "Explain why it matters" },
            { text: "We also define ourselves by the groups we reject, the values we question, and the paths we deliberately choose.", fn: "Develop the point" },
            { text: "A person who leaves the religion or country of her birth is still very much defining who she is.", fn: "One more layer" },
            { text: "Our individual decisions, then, are at least as important as the groups we happen to join.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, social groups do play a large part in shaping our identity.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But our own choices, experiences, and inner character matter just as much, if not more.", fn: "Synthesis" },
            { text: "In truth, we are best understood not as products of our groups alone, but as individuals who shape ourselves within and against them.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that lets interest lead while refusing to ignore job prospects; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Students often feel pulled between studying what they love and studying what will pay the bills.", fn: "Hook" },
            { text: "Some people recommend that colleges encourage students to pursue subjects that interest them rather than courses that seem most likely to lead to jobs.", fn: "Restate the prompt" },
            { text: "I agree that interest should guide students more than fear of the job market, but I believe job prospects cannot be ignored completely.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why interest should lead",
          sentences: [
            { text: "First, students usually learn best and achieve most when they study something they genuinely care about.", fn: "Topic sentence", moves: ["First"] },
            { text: "Interest brings the energy and persistence that carry a student through difficult and demanding work.", fn: "Explanation" },
            { text: "For example, a student fascinated by history will read, think, and write far more deeply than one who chose a subject only for money.", fn: "Example" },
            { text: "This shows that real passion often produces better results than a reluctant pursuit of a merely safe career.", fn: "Explain why it matters" },
            { text: "People who follow their genuine interests are also more likely to find lasting satisfaction in their working lives.", fn: "Develop the point" },
            { text: "Successful careers, moreover, often grow out of a deep enthusiasm that began as a simple personal interest.", fn: "One more layer" },
            { text: "For these reasons, interest deserves to play the leading role in a student's choice.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why prospects still matter",
          sentences: [
            { text: "Second, however, encouraging interest should not mean ignoring the practical question of employment.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A graduate with deep knowledge but no way to earn a living may find that her passion turns quickly into worry.", fn: "Explanation" },
            { text: "Consider a talented student who studies a beloved subject with no job prospects, then struggles for years under heavy debt.", fn: "Example", vocab: [{ term: "prospects", gloss: "前景；前途" }] },
            { text: "Such hardship can slowly drain the very joy that made the subject worth choosing in the first place.", fn: "Explain why it matters" },
            { text: "Colleges therefore do students a service by helping them connect their interests to realistic career paths.", fn: "Develop the point" },
            { text: "Many fields, after all, allow a student to follow a passion while still building useful and employable skills.", fn: "One more layer" },
            { text: "Encouraging interest works best when it is paired with honest advice about the future.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, colleges are right to encourage students to follow subjects that truly interest them.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they should also help students keep an eye on the job prospects that will support those interests.", fn: "Synthesis" },
            { text: "The best guidance lets passion lead the way while making sure students can still earn a decent living.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): agrees with the claim and its reason about motivation, then argues teachers must still guide; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A classroom feels very different when students actually care about what they are studying.", fn: "Hook" },
            { text: "One claim holds that educators should take students' interests and suggestions into account when planning courses, on the reason that students learn more when they are interested.", fn: "Restate the prompt" },
            { text: "I largely agree with both the claim and its reason, but I believe student interest should guide teaching rather than completely control it.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Agreeing with the claim and reason",
          sentences: [
            { text: "First, the reason behind the claim is sound, because motivation truly is one of the strongest forces in learning.", fn: "Topic sentence", vocab: [{ term: "motivation", gloss: "動機；動力" }], moves: ["First"] },
            { text: "Students who find a subject interesting pay closer attention, work harder, and remember far more of what they study.", fn: "Explanation" },
            { text: "For example, a science class that lets students investigate questions they chose themselves often produces lively discussion and real understanding.", fn: "Example" },
            { text: "This shows that taking student interests into account can make lessons more effective as well as more enjoyable.", fn: "Explain why it matters" },
            { text: "Inviting suggestions also teaches students responsibility and gives them a sense of ownership over their own education.", fn: "Develop the point" },
            { text: "An attentive teacher who listens to her class can discover better ways to explain ideas and hold attention.", fn: "One more layer" },
            { text: "To this extent, the claim and its reason clearly deserve support.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why teachers must still guide",
          sentences: [
            { text: "Second, however, student interest cannot be the only thing that shapes what is taught.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Young students often do not yet know which subjects will matter most to their own futures.", fn: "Explanation" },
            { text: "Consider a class that would happily skip difficult mathematics, even though those very skills prove essential later in life.", fn: "Example" },
            { text: "Following interest alone in such cases would leave serious gaps in a student's education.", fn: "Explain why it matters" },
            { text: "Teachers have the knowledge and experience to see what students will need, even when students cannot see it themselves.", fn: "Develop the point" },
            { text: "Some important lessons become interesting only after a student has been guided patiently through the hard early stages.", fn: "One more layer" },
            { text: "Student interest, then, should shape teaching alongside the steady judgment of the teacher.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, educators are right to consider students' interests and suggestions, because motivation greatly improves learning.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But teachers must still guide their classes toward the knowledge students will need, even when it is not what they would choose.", fn: "Synthesis" },
            { text: "The best teaching blends genuine student interest with the wider vision that only an educator can provide.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that time clarifies greatness, then argues contemporaries can recognise it too; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "History is full of artists and thinkers who were ignored in their lifetimes and celebrated only after death.", fn: "Hook" },
            { text: "Some people argue that the greatness of individuals can be judged only by later generations, never by their own contemporaries.", fn: "Restate the prompt" },
            { text: "I agree that time often clarifies who was truly great, but I do not believe that contemporaries are completely unable to recognise greatness.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why later generations judge well",
          sentences: [
            { text: "First, later generations often see a person's greatness more clearly than the people who lived alongside her.", fn: "Topic sentence", moves: ["First"] },
            { text: "Time reveals the lasting effects of someone's work, which may be invisible while that person is still alive.", fn: "Explanation" },
            { text: "For example, the painter Vincent van Gogh sold almost nothing in his life, yet is now regarded as one of the greatest artists in history.", fn: "Example" },
            { text: "This shows that contemporaries can be blinded by fashion, jealousy, or a simple failure to understand new ideas.", fn: "Explain why it matters" },
            { text: "Distance also frees later judges from the rivalries and politics that distort opinion in a person's own time.", fn: "Develop the point" },
            { text: "Only the passage of years can show whether an achievement truly endures or quickly fades away.", fn: "One more layer", vocab: [{ term: "posterity", gloss: "後代；後世" }] },
            { text: "In this respect, posterity often does deliver the fairer verdict.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why contemporaries can judge too",
          sentences: [
            { text: "Second, however, it is simply not true that contemporaries can never recognise greatness.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Many of the most celebrated figures in history were honoured and admired during their own lifetimes.", fn: "Explanation" },
            { text: "Consider leaders like Nelson Mandela or scientists like Albert Einstein, whose greatness was widely acknowledged while they still lived.", fn: "Example" },
            { text: "Their example shows that people are often perfectly able to see greatness as it unfolds around them.", fn: "Explain why it matters" },
            { text: "Waiting only for later generations would also leave us unable to praise or learn from great people in the present.", fn: "Develop the point" },
            { text: "Later judges, moreover, carry their own biases and can misjudge the past as easily as contemporaries misjudge the present.", fn: "One more layer" },
            { text: "Greatness, then, can be recognised both in a person's own time and long after it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, later generations often judge greatness more clearly than those who lived at the same time.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But contemporaries are far from blind, and many great people are honoured during their own lives.", fn: "Synthesis" },
            { text: "The truest measure of greatness comes not from one age alone, but from the agreement of both the present and the future.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): strongly backs questioning but argues 'always' is too absolute, since some foundations must be accepted first; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Real education teaches people not just to memorise facts but to think for themselves.", fn: "Hook" },
            { text: "Some people argue that students should always question what they are taught instead of accepting it passively.", fn: "Restate the prompt" },
            { text: "I strongly agree that questioning is essential, but I believe the word always goes too far, since some knowledge must be accepted before it can be questioned wisely.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of questioning",
          sentences: [
            { text: "First, questioning what we are taught lies at the very heart of real learning.", fn: "Topic sentence", moves: ["First"] },
            { text: "Students who ask why and how understand ideas far more deeply than those who merely repeat them.", fn: "Explanation" },
            { text: "For example, science itself advances only because researchers refuse to accept old answers and keep testing them.", fn: "Example" },
            { text: "This shows that active questioning turns passive listeners into genuine, independent thinkers.", fn: "Explain why it matters", vocab: [{ term: "passive", gloss: "被動的" }] },
            { text: "A student who never questions is easily misled and may absorb errors or even harmful ideas without resistance.", fn: "Develop the point" },
            { text: "Questioning also keeps teachers honest and pushes human knowledge itself to improve over time.", fn: "One more layer" },
            { text: "For these reasons, a habit of thoughtful questioning is one of the greatest gifts of an education.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why some acceptance is needed",
          sentences: [
            { text: "Second, however, the demand that students question everything at all times is unrealistic and even unwise.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Before anyone can question an idea intelligently, she must first understand the basic facts on which it rests.", fn: "Explanation" },
            { text: "Consider a beginner in mathematics who must accept the rules of arithmetic before she can challenge anything more advanced.", fn: "Example" },
            { text: "Trying to question every basic fact from the start would leave a student confused and unable to build any real knowledge.", fn: "Explain why it matters" },
            { text: "Some foundations must be learned and trusted first, so that later questioning has something solid to stand on.", fn: "Develop the point" },
            { text: "Endless doubt about everything can also become its own kind of trap, leading to confusion rather than understanding.", fn: "One more layer" },
            { text: "Wise questioning, then, grows out of knowledge rather than replacing it entirely.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, students should certainly be encouraged to question what they are taught.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they cannot question everything at once, since thoughtful doubt depends on first understanding the basics.", fn: "Synthesis" },
            { text: "The ideal student learns the foundations carefully and then questions them boldly, rather than doing only one or the other.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): grants that a fast pace creates real problems, then argues it solves at least as many; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Modern life moves faster than ever, filled with instant messages, quick meals, and constant demands on our time.", fn: "Hook" },
            { text: "Some people argue that this increasingly rapid pace of life causes more problems than it solves.", fn: "Restate the prompt" },
            { text: "I agree that a fast pace brings real problems, but I do not believe it causes more harm than good, since the same speed also solves a great deal.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The problems of speed",
          sentences: [
            { text: "First, it is true that the rushing pace of modern life creates serious problems.", fn: "Topic sentence", moves: ["First"] },
            { text: "When people are always in a hurry, they suffer more stress, sleep less, and keep little time for family or rest.", fn: "Explanation" },
            { text: "For example, many workers today feel exhausted and anxious, still answering messages long after the working day should have ended.", fn: "Example" },
            { text: "This shows that a relentless pace can damage both our health and our closest relationships.", fn: "Explain why it matters", vocab: [{ term: "relentless", gloss: "無情的；持續不斷的" }] },
            { text: "Hurrying also leads to careless mistakes, as people rush decisions they should have made slowly and thoughtfully.", fn: "Develop the point" },
            { text: "A society that never pauses can gradually lose sight of what actually makes life meaningful.", fn: "One more layer" },
            { text: "In these ways, the rapid pace of life clearly does cause genuine harm.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — How speed also solves problems",
          sentences: [
            { text: "Second, however, the same fast pace solves an enormous number of problems as well.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Today's speed allows food, medicine, and information to reach people far more quickly than in the past.", fn: "Explanation" },
            { text: "Consider how a fast ambulance, a quick internet search, or rapid communication can now save lives that would once have been lost.", fn: "Example" },
            { text: "Such speed gives ordinary people opportunities and freedoms that earlier, slower generations could only imagine.", fn: "Explain why it matters" },
            { text: "A faster pace also lets us accomplish far more in a day, leaving room for both work and leisure when it is managed well.", fn: "Develop the point" },
            { text: "Many of the very tools that hurry us along, such as quick transport and instant messaging, exist to make life easier.", fn: "One more layer" },
            { text: "The problem, then, lies less in speed itself than in how wisely we choose to use it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the rapid pace of modern life undoubtedly brings stress and other real problems.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it also solves countless problems and opens opportunities that slower times never offered.", fn: "Synthesis" },
            { text: "Whether speed helps or harms us depends not on the pace alone, but on our ability to control it.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that scrutiny damages reputations, then argues genuine heroes remain possible; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "In an age of cameras and constant news, the private lives of famous people are exposed as never before.", fn: "Hook" },
            { text: "One claim holds that society can no longer regard any living person as a hero, on the reason that media scrutiny eventually diminishes anyone's reputation.", fn: "Restate the prompt" },
            { text: "I agree that intense scrutiny can damage reputations, but I disagree that genuine heroes have therefore become impossible.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The truth in the reason",
          sentences: [
            { text: "First, there is real force in the reason offered for the claim.", fn: "Topic sentence", moves: ["First"] },
            { text: "Modern media examine every detail of a famous person's life, and almost no one looks perfect under such a harsh light.", fn: "Explanation", vocab: [{ term: "scrutiny", gloss: "審視；仔細審查" }] },
            { text: "For example, several admired leaders and athletes have seen their images badly damaged once their private faults became public.", fn: "Example" },
            { text: "This shows that constant scrutiny can indeed strip away the shine that heroes once enjoyed.", fn: "Explain why it matters" },
            { text: "When we learn that a hero is flawed and ordinary, our admiration can cool surprisingly quickly.", fn: "Develop the point" },
            { text: "The endless search for scandal can make lasting, untouched reputations much harder to maintain.", fn: "One more layer" },
            { text: "To this extent, the reason given for the claim is genuinely persuasive.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why heroes are still possible",
          sentences: [
            { text: "Second, however, the claim that no living person can be a hero goes much too far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A hero need not be perfect, but only admirable for genuine courage, kindness, or sacrifice.", fn: "Explanation" },
            { text: "Consider the doctors, rescue workers, and ordinary people who risk their lives for others and are rightly admired by all who hear of them.", fn: "Example" },
            { text: "Their example shows that scrutiny cannot erase real acts of courage and goodness.", fn: "Explain why it matters" },
            { text: "Knowing that heroes have faults can even make them more believable and more inspiring, not less.", fn: "Develop the point" },
            { text: "Many people today are still widely respected precisely because their good deeds survive close examination.", fn: "One more layer" },
            { text: "Real heroism, then, can endure scrutiny rather than being destroyed by it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, media scrutiny does expose the flaws that once stayed hidden in famous lives.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But this does not make heroes impossible, since true courage and goodness remain visible and admired.", fn: "Synthesis" },
            { text: "We can still honour living heroes, as long as we expect them to be genuinely good rather than flawless.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): largely agrees that grade competition harms learning while granting moderate competition some value; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "In many schools, students worry less about understanding a subject than about scoring higher than their classmates.", fn: "Hook" },
            { text: "Some people argue that competition for high grades seriously limits the quality of learning at every level of education.", fn: "Restate the prompt" },
            { text: "I largely agree that grade competition can harm real learning, though I believe a moderate amount of competition can also do some good.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How grade competition harms learning",
          sentences: [
            { text: "First, an intense focus on grades often pushes students to chase marks rather than genuine understanding.", fn: "Topic sentence", moves: ["First"] },
            { text: "When only the score matters, students memorise answers for the test and forget them soon afterward.", fn: "Explanation" },
            { text: "For example, a student may cram facts the night before an exam, pass it, and learn almost nothing of lasting value.", fn: "Example" },
            { text: "This shows that competition can replace deep curiosity with a shallow hunt for high numbers.", fn: "Explain why it matters" },
            { text: "Fear of low grades can also discourage students from taking hard courses or exploring difficult but interesting ideas.", fn: "Develop the point" },
            { text: "It can even harm cooperation, as students who treat classmates as rivals refuse to share or help one another.", fn: "One more layer" },
            { text: "In these ways, the pressure for high grades can seriously damage the quality of learning.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why competition has some value",
          sentences: [
            { text: "Second, however, a moderate amount of competition is not entirely harmful.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A reasonable wish to do well can motivate students to work harder and take their studies seriously.", fn: "Explanation" },
            { text: "Consider a student who studies more carefully simply because she wants to match the standard set by her peers.", fn: "Example" },
            { text: "Such healthy competition can raise effort and help students discover what they are truly capable of.", fn: "Explain why it matters" },
            { text: "Grades, used wisely, also give useful feedback about where a student is doing well and where she needs to improve.", fn: "Develop the point", vocab: [{ term: "feedback", gloss: "回饋；反饋" }] },
            { text: "The real harm comes not from competition itself but from an obsession with grades above all else.", fn: "One more layer" },
            { text: "Competition, then, becomes destructive only when it is pushed to an extreme.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, an excessive focus on competing for high grades does seriously limit genuine learning.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a moderate level of competition can still encourage effort and provide helpful feedback.", fn: "Synthesis" },
            { text: "The goal should be to value real understanding first, using grades as a guide rather than the only prize.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that backs breadth while arguing for flexibility so depth is not crowded out; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Most universities ask students to take some classes far removed from their chosen major.", fn: "Hook" },
            { text: "Some people recommend that universities should require every student to take a variety of courses outside their own field of study.", fn: "Restate the prompt" },
            { text: "I largely agree that such breadth benefits students, though I believe the requirement should allow some flexibility.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of breadth",
          sentences: [
            { text: "First, studying outside one's main field makes students more rounded and capable thinkers.", fn: "Topic sentence", moves: ["First"] },
            { text: "Courses in different subjects expose students to new ideas, methods, and ways of seeing the world.", fn: "Explanation" },
            { text: "For example, an engineering student who studies history or ethics may make wiser decisions about how her work affects people.", fn: "Example" },
            { text: "This shows that broad knowledge helps students connect their speciality to the wider world.", fn: "Explain why it matters" },
            { text: "Studying widely also builds flexible skills, such as writing and reasoning, that are useful in almost any career.", fn: "Develop the point" },
            { text: "Many students, moreover, discover unexpected interests and even new career paths through courses they would never have chosen alone.", fn: "One more layer" },
            { text: "For these reasons, requiring some breadth is plainly good for students.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why flexibility is needed",
          sentences: [
            { text: "Second, however, such a requirement should be applied with care rather than rigidly forced on everyone.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students already carry heavy workloads, and too many unrelated courses can crowd out the deep study their field demands.", fn: "Explanation" },
            { text: "Consider a medical student whose time is so limited that extra required courses leave too little room for essential training.", fn: "Example", vocab: [{ term: "expertise", gloss: "專業知識；專長" }] },
            { text: "Forcing wide breadth in such cases could weaken the very expertise a university is meant to build.", fn: "Explain why it matters" },
            { text: "A wiser policy lets students choose their outside courses from a broad menu rather than dictating each one.", fn: "Develop the point" },
            { text: "Some flexibility also respects the fact that students differ in their goals and in the time they can spare.", fn: "One more layer" },
            { text: "Breadth works best, then, when it is encouraged and guided rather than rigidly imposed.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, universities are right to want their students to study beyond their own field.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the requirement should be flexible enough not to crowd out the depth that each subject needs.", fn: "Synthesis" },
            { text: "The best policy gives students broad horizons while still protecting the focus their main field demands.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that welcomes student input while insisting educators keep control of the curriculum; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Learners often have strong opinions about what they would like to study and how.", fn: "Hook" },
            { text: "Some people recommend that educators should find out what students want included in the curriculum and then simply offer it to them.", fn: "Restate the prompt" },
            { text: "I agree that listening to students is valuable, but I believe educators must shape the curriculum with their own knowledge rather than just delivering whatever students request.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of student input",
          sentences: [
            { text: "First, asking students what they want to learn can make education far more engaging.", fn: "Topic sentence", moves: ["First"] },
            { text: "When students have a say in their courses, they feel respected and become more committed to their own learning.", fn: "Explanation" },
            { text: "For example, a class allowed to choose some of its reading or projects often shows noticeably more energy and curiosity.", fn: "Example" },
            { text: "This shows that listening to students can increase both their motivation and their enjoyment.", fn: "Explain why it matters", vocab: [{ term: "motivation", gloss: "動機；動力" }] },
            { text: "They may also point out gaps or outdated material that teachers, working alone, might easily overlook.", fn: "Develop the point" },
            { text: "Including their suggestions can keep a curriculum fresh, relevant, and closely connected to the real world.", fn: "One more layer" },
            { text: "To this extent, seeking student input is clearly worthwhile.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why educators must lead",
          sentences: [
            { text: "Second, however, simply offering whatever students ask for would be a serious mistake.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students cannot always know which subjects will matter most to them years later in life.", fn: "Explanation" },
            { text: "Consider a class that would gladly drop difficult but essential topics, leaving dangerous gaps in its knowledge.", fn: "Example" },
            { text: "Building a curriculum from student requests alone could therefore leave learners poorly prepared for the future.", fn: "Explain why it matters" },
            { text: "Educators have the training and experience to see the whole path of learning in a way students cannot yet manage.", fn: "Develop the point" },
            { text: "Some valuable subjects, moreover, become interesting only after students have struggled through their harder early stages.", fn: "One more layer" },
            { text: "Student wishes, then, should inform the curriculum without ever fully controlling it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, educators should certainly listen to what students want from their education.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they must still use their own expertise to build a curriculum that serves students' long-term needs.", fn: "Synthesis", vocab: [{ term: "expertise", gloss: "專業知識；專長" }] },
            { text: "The best curriculum combines the genuine voice of students with the guiding judgment of their teachers.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): a recommendation response that backs teaching ideas before facts while arguing the two must grow together; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Schools often ask students to memorise long lists of facts before they understand what those facts mean.", fn: "Hook" },
            { text: "Some people recommend that educators should teach facts only after students have first studied the ideas, trends, and concepts that explain them.", fn: "Restate the prompt" },
            { text: "I agree that understanding concepts first makes learning richer, but I believe facts and ideas must often be taught together rather than in a strict order.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why concepts first helps",
          sentences: [
            { text: "First, learning the big ideas before the details helps facts make real sense.", fn: "Topic sentence", moves: ["First"] },
            { text: "When students grasp the concept behind a subject, isolated facts become far easier to understand and remember.", fn: "Explanation" },
            { text: "For example, a student who first understands why wars begin will remember the relevant dates and battles much more easily.", fn: "Example" },
            { text: "This shows that concepts give facts a framework, turning scattered information into genuine knowledge.", fn: "Explain why it matters", vocab: [{ term: "framework", gloss: "框架；架構" }] },
            { text: "Teaching ideas first also makes a subject more interesting, since students see the purpose behind what they study.", fn: "Develop the point" },
            { text: "Facts learned without understanding are quickly forgotten, while facts tied to ideas tend to last.", fn: "One more layer" },
            { text: "In this sense, beginning with concepts is a sound teaching principle.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why a strict order fails",
          sentences: [
            { text: "Second, however, teaching facts only after concepts would be too rigid to follow in practice.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Many concepts simply cannot be understood without knowing at least some basic facts first.", fn: "Explanation" },
            { text: "Consider a child who cannot grasp the idea of multiplication without first learning the simple facts of counting and addition.", fn: "Example" },
            { text: "Such cases show that facts and ideas usually depend on each other and grow together.", fn: "Explain why it matters" },
            { text: "A teacher who refused to mention any fact until every concept was mastered would slow learning to a crawl.", fn: "Develop the point" },
            { text: "In reality, good teaching weaves facts and concepts together so that each one supports the other.", fn: "One more layer" },
            { text: "Rigid ordering, then, is far less useful than a flexible blend of the two.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, students do understand facts more deeply when they first grasp the ideas behind them.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But teaching facts strictly after concepts ignores how closely the two are connected.", fn: "Synthesis" },
            { text: "The best teaching introduces ideas and facts side by side, letting understanding and detail grow together.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that hostile disagreement can block learning, then argues opposing views teach us most; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It feels comfortable to talk with people who already agree with us.", fn: "Hook" },
            { text: "One claim holds that we usually learn more from people whose views we share, on the reason that disagreement causes stress and blocks learning.", fn: "Restate the prompt" },
            { text: "I agree that disagreement can be uncomfortable, but I disagree with the claim, because we often learn the most from people who challenge our views.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The grain of truth in the reason",
          sentences: [
            { text: "First, there is some truth in the reason behind the claim.", fn: "Topic sentence", moves: ["First"] },
            { text: "When a discussion turns into a heated argument, fear and anger can indeed make it hard to think clearly.", fn: "Explanation" },
            { text: "For example, a student attacked for her opinion may grow defensive and stop listening altogether.", fn: "Example" },
            { text: "This shows that hostile disagreement can sometimes shut down learning rather than encourage it.", fn: "Explain why it matters" },
            { text: "People who share our views can also build our confidence and help us refine ideas we already hold.", fn: "Develop the point" },
            { text: "A supportive, friendly discussion can be a comfortable and genuinely useful place to learn.", fn: "One more layer" },
            { text: "To this extent, the reason given for the claim is not entirely wrong.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why opposing views teach more",
          sentences: [
            { text: "Second, however, we usually learn far more from people whose views contradict our own.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Those who disagree with us expose the weaknesses in our thinking that friends might politely ignore.", fn: "Explanation" },
            { text: "Consider a debate in which an opponent raises a fact we had never considered, forcing us to think again.", fn: "Example" },
            { text: "Such challenges push us to examine our beliefs, gather better evidence, and understand the issue more deeply.", fn: "Explain why it matters", vocab: [{ term: "evidence", gloss: "證據" }] },
            { text: "Companions who only echo our opinions, by contrast, rarely teach us anything genuinely new.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Disagreement may cause some discomfort, but that discomfort is often the very feeling of learning something difficult.", fn: "One more layer" },
            { text: "Handled with respect, opposing views are among the most powerful teachers we have.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, sharing views with others can be pleasant and can strengthen what we already believe.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But genuine growth usually comes from engaging with people who think differently from us.", fn: "Synthesis" },
            { text: "The most valuable learning happens not in comfortable agreement, but in respectful disagreement.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that defends independent judgment while insisting officials respect the public will; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Elected leaders in a democracy are chosen to serve the people, yet also for their judgment.", fn: "Hook" },
            { text: "Some people recommend that government officials should rely on their own judgment rather than unquestioningly carry out the will of the people they serve.", fn: "Restate the prompt" },
            { text: "I agree that officials must use their own judgment, but I believe they cannot simply ignore the will of the people in a democracy.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why officials need judgment",
          sentences: [
            { text: "First, officials often need to follow their own judgment rather than public opinion alone.", fn: "Topic sentence", moves: ["First"] },
            { text: "Ordinary citizens cannot study every issue in detail, while officials have access to experts and information.", fn: "Explanation" },
            { text: "For example, a sudden public panic might demand a harmful policy that a wiser leader knows would do real damage.", fn: "Example" },
            { text: "This shows that sound judgment can protect a society from its own short-term fears and mistakes.", fn: "Explain why it matters" },
            { text: "Leaders are also sometimes required to defend unpopular minorities whom the majority would happily ignore.", fn: "Develop the point" },
            { text: "A leader who only follows opinion polls may abandon principle whenever the public mood shifts.", fn: "One more layer" },
            { text: "In this sense, independent judgment is an essential part of responsible leadership.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the public will matters",
          sentences: [
            { text: "Second, however, officials cannot simply ignore the will of the people they were chosen to serve.", fn: "Topic sentence", moves: ["Second"] },
            { text: "In a democracy, leaders gain their authority from the citizens and are meant to represent them.", fn: "Explanation", vocab: [{ term: "authority", gloss: "權力；權威" }] },
            { text: "Consider an official who repeatedly overrules the clear wishes of the public, convinced that he always knows best.", fn: "Example" },
            { text: "Such behaviour can quickly slide into arrogance and into rule that no longer answers to anyone.", fn: "Explain why it matters" },
            { text: "Officials who lose touch with the people they serve also lose the trust that makes government work.", fn: "Develop the point" },
            { text: "The will of the people, expressed through votes and debate, is a vital check on those in power.", fn: "One more layer" },
            { text: "Good officials, then, must weigh their own judgment against the voice of the public.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, leaders should certainly use their own judgment, especially to resist panic and protect the weak.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But ignoring the will of the people would betray the very purpose of democratic government.", fn: "Synthesis" },
            { text: "The wisest officials blend independent judgment with genuine respect for those they serve.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): backs long-term goals while granting that a healthy wish for recognition can help; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Countless young people today dream of becoming famous quickly, often overnight.", fn: "Hook" },
            { text: "Some people recommend that young people should be encouraged to pursue long-term, realistic goals rather than seek immediate fame and recognition.", fn: "Restate the prompt" },
            { text: "I largely agree that long-term goals are wiser, though I believe a desire for recognition is not always harmful.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why long-term goals are wiser",
          sentences: [
            { text: "First, long-term, realistic goals usually lead to deeper and more lasting success.", fn: "Topic sentence", moves: ["First"] },
            { text: "Steady effort toward a clear goal builds real skills that cannot be gained overnight.", fn: "Explanation" },
            { text: "For example, a young person who trains patiently for years to become a doctor gains both security and genuine respect.", fn: "Example" },
            { text: "This shows that worthwhile achievements almost always require time, patience, and hard work.", fn: "Explain why it matters" },
            { text: "Chasing instant fame, by contrast, often ends in disappointment when the attention quickly fades.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Many people who become famous suddenly are forgotten just as fast, left with nothing solid behind them.", fn: "One more layer" },
            { text: "For these reasons, encouraging realistic long-term goals is wise advice for the young.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why recognition is not always bad",
          sentences: [
            { text: "Second, however, the wish for recognition is not always something to discourage.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A healthy desire for praise can motivate young people to work hard and to aim high.", fn: "Explanation" },
            { text: "Consider a young scientist whose hope of being recognised pushes her to make a real and lasting discovery.", fn: "Example" },
            { text: "Such ambition shows that recognition and long-term goals can support each other rather than conflict.", fn: "Explain why it matters", vocab: [{ term: "ambition", gloss: "抱負；志向" }] },
            { text: "The danger lies not in wanting recognition but in wanting it instantly and without effort.", fn: "Develop the point" },
            { text: "Some early encouragement and attention can even give young people the confidence to pursue bigger goals.", fn: "One more layer" },
            { text: "Recognition, then, becomes harmful only when it replaces patience and real achievement.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, young people are wise to pursue long-term, realistic goals rather than chase quick fame.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a reasonable wish for recognition can itself encourage the effort that those goals demand.", fn: "Synthesis" },
            { text: "The best advice is to aim for lasting achievement while letting a healthy hope for recognition fuel the journey.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that worthy goals can justify hard means, then argues they cannot justify cruelty or injustice; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People sometimes excuse terrible actions by claiming they served a noble cause.", fn: "Hook" },
            { text: "Some people argue that if a goal is worthy, then any means taken to attain it are justifiable.", fn: "Restate the prompt" },
            { text: "I strongly disagree, because even the worthiest goal cannot justify every action, and cruel means often destroy the good they claim to serve.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why worthy goals justify some hard means",
          sentences: [
            { text: "First, it is true that good goals sometimes require difficult or unpleasant means.", fn: "Topic sentence", moves: ["First"] },
            { text: "Achieving something valuable often demands sacrifice, hard choices, and actions that are far from comfortable.", fn: "Explanation" },
            { text: "For example, a doctor may cause a patient real pain during surgery in order to save her life.", fn: "Example" },
            { text: "This shows that a worthy goal can indeed justify means that would otherwise seem harsh.", fn: "Explain why it matters" },
            { text: "Soldiers defending their country, too, may have to do hard things for the sake of protecting others.", fn: "Develop the point" },
            { text: "In such cases, the value of the goal really does help to justify the difficult means used.", fn: "One more layer" },
            { text: "To this extent, worthy goals can excuse some otherwise unwelcome actions.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why not any means",
          sentences: [
            { text: "Second, however, the claim that any means are justified goes dangerously too far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some actions, such as cruelty, deceit, or harming the innocent, are wrong no matter what goal they serve.", fn: "Explanation", vocab: [{ term: "deceit", gloss: "欺騙；欺詐" }] },
            { text: "Consider rulers who have killed and oppressed millions while insisting they were building a better world.", fn: "Example" },
            { text: "Such crimes show that evil means often poison the very goal they were meant to achieve.", fn: "Explain why it matters" },
            { text: "A society built through cruelty rarely becomes the just and happy place its leaders promised.", fn: "Develop the point" },
            { text: "Allowing any means also removes every limit, letting people excuse almost any horror in the name of a cause.", fn: "One more layer" },
            { text: "Worthy goals, then, must be pursued through means that are themselves acceptable.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a good goal can justify some difficult and unpleasant means.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it can never justify cruelty or injustice, which corrupt the cause they claim to serve.", fn: "Synthesis" },
            { text: "The end alone is not enough, because how we act matters as much as what we are trying to achieve.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that backs imaginative literature for well-roundedness while arguing for flexibility; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "True education shapes not only what we know but how we feel and imagine.", fn: "Hook" },
            { text: "Some people recommend that all college students should be required to take courses in poetry, novels, mythology, and other imaginative literature.", fn: "Restate the prompt" },
            { text: "I largely agree that imaginative literature makes students more well-rounded, though I believe the requirement should remain flexible.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of literature",
          sentences: [
            { text: "First, reading imaginative literature develops qualities that other subjects often leave untouched.", fn: "Topic sentence", moves: ["First"] },
            { text: "Stories and poems teach empathy by letting readers enter lives and feelings very different from their own.", fn: "Explanation", vocab: [{ term: "empathy", gloss: "同理心；共情" }] },
            { text: "For example, a science student who reads a powerful novel may come to understand human suffering far more deeply.", fn: "Example" },
            { text: "This shows that literature can build emotional and moral understanding that facts alone cannot provide.", fn: "Explain why it matters" },
            { text: "Reading great writing also sharpens language, imagination, and the ability to think about hard questions.", fn: "Develop the point" },
            { text: "These are exactly the qualities that help people become thoughtful citizens and not merely trained workers.", fn: "One more layer" },
            { text: "For these reasons, some exposure to imaginative literature clearly benefits every student.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why flexibility is needed",
          sentences: [
            { text: "Second, however, forcing every student to take such courses rigidly could do more harm than good.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students already face heavy demands, and too many required courses can crowd out essential study in their own field.", fn: "Explanation" },
            { text: "Consider a medical or engineering student whose tight schedule leaves little room for several literature classes.", fn: "Example" },
            { text: "Forcing the requirement in such cases could weaken the training these students most urgently need.", fn: "Explain why it matters" },
            { text: "A wiser policy would encourage literature and offer a broad choice rather than a long fixed list.", fn: "Develop the point" },
            { text: "Some students, moreover, already explore imaginative works on their own and gain little from being compelled.", fn: "One more layer" },
            { text: "Literature is best encouraged and made appealing, then, rather than strictly imposed.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, imaginative literature offers real benefits that help make students well-rounded.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a rigid requirement risks crowding out the focused study that each field demands.", fn: "Synthesis" },
            { text: "The best policy encourages students to read widely while leaving room for the depth their own subject needs.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that reaching an audience is a strength, then argues merit does not require wide understanding; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People often dismiss a difficult painting or poem by saying that no one can understand it.", fn: "Hook" },
            { text: "Some people argue that a work of art must be understandable to most people in order to have any merit.", fn: "Restate the prompt" },
            { text: "I agree that art should try to communicate something, but I disagree that it must be widely understood to be valuable.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why reaching an audience matters",
          sentences: [
            { text: "First, there is a fair point in the idea that art should reach an audience.", fn: "Topic sentence", moves: ["First"] },
            { text: "Art that communicates nothing to anyone risks becoming private and meaningless to all but its maker.", fn: "Explanation", vocab: [{ term: "merit", gloss: "價值；優點" }] },
            { text: "For example, a song or film that moves millions of people clearly has a powerful kind of merit.", fn: "Example" },
            { text: "This shows that the ability to connect with an audience can be a real artistic strength.", fn: "Explain why it matters" },
            { text: "Works that speak to ordinary people can comfort, inspire, and bring whole communities together.", fn: "Develop the point" },
            { text: "An art that no one could ever respond to would struggle to matter at all.", fn: "One more layer" },
            { text: "To this extent, being understandable can genuinely add to a work's value.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why merit needs no majority",
          sentences: [
            { text: "Second, however, demanding that art be understandable to most people sets a mistaken standard.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Many great works were strange or difficult at first and were understood only by a few.", fn: "Explanation" },
            { text: "Consider paintings or symphonies once mocked as confusing, which are now treasured as masterpieces.", fn: "Example" },
            { text: "Such cases show that difficulty is not the same as worthlessness, and time often reveals hidden depth.", fn: "Explain why it matters" },
            { text: "Challenging art can stretch the imagination precisely because it is not instantly easy.", fn: "Develop the point" },
            { text: "Judging merit by popularity would also reward the simple and familiar while punishing the bold and new.", fn: "One more layer" },
            { text: "Real artistic value, then, does not depend on being understood by the majority.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, art that reaches many people has a genuine and valuable kind of merit.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But difficult works that few understand can be just as great, or even greater.", fn: "Synthesis" },
            { text: "The worth of art lies in its depth and power, not simply in how many people grasp it at once.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the role of accident in discovery, then argues accidents reward only prepared minds; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "History is full of discoveries that no one set out to make.", fn: "Hook" },
            { text: "Some people argue that many important discoveries are accidental, found while seeking the answer to a different question.", fn: "Restate the prompt" },
            { text: "I agree that accidents play a large role in discovery, but I believe they reward only those who have prepared themselves through careful work.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why accidents matter",
          sentences: [
            { text: "First, it is clearly true that many great discoveries happen by accident.", fn: "Topic sentence", moves: ["First"] },
            { text: "Researchers chasing one goal often stumble upon something entirely different and more important.", fn: "Explanation" },
            { text: "For example, the discovery of penicillin came from a mould that appeared by chance in a forgotten dish.", fn: "Example", vocab: [{ term: "mould", gloss: "黴菌" }] },
            { text: "This shows that unexpected events can open doors that careful planning never aimed at.", fn: "Explain why it matters" },
            { text: "Many useful inventions, from certain medicines to everyday materials, began as happy accidents.", fn: "Develop the point" },
            { text: "Chance, in this way, has shaped the history of science again and again.", fn: "One more layer" },
            { text: "To this extent, the statement captures a real and surprising truth about discovery.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why accidents need prepared minds",
          sentences: [
            { text: "Second, however, such accidents almost never help people who are not prepared to notice them.", fn: "Topic sentence", moves: ["Second"] },
            { text: "An untrained person would have thrown away the same mould without seeing anything important in it.", fn: "Explanation" },
            { text: "Consider how the scientist who found penicillin recognised its meaning only because of years of patient study.", fn: "Example" },
            { text: "This kind of preparation is what turns a lucky accident into a genuine discovery.", fn: "Explain why it matters" },
            { text: "Most accidents become valuable only when a trained mind is ready to understand and use them.", fn: "Develop the point" },
            { text: "Hard work and knowledge also create the very situations in which lucky accidents can occur.", fn: "One more layer" },
            { text: "Accident and effort, then, work together rather than standing apart.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, chance truly does play a major part in many important discoveries.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But these accidents reward only the prepared, who have the knowledge to see what they have found.", fn: "Synthesis" },
            { text: "The greatest discoveries usually come when good fortune meets a mind ready to understand it.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that history shows human continuity, then argues its main benefit is the wider lessons it teaches; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "When we read about the past, we often notice how much people then resemble people now.", fn: "Hook" },
            { text: "Some people argue that the main benefit of studying history is to dispel the illusion that we are very different from people who lived long ago.", fn: "Restate the prompt" },
            { text: "I agree that history reveals how similar people have always been, but I believe this is only one of its benefits and not the main one.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How history shows continuity",
          sentences: [
            { text: "First, history really does show how much human beings have stayed the same.", fn: "Topic sentence", moves: ["First"] },
            { text: "People in every age have loved, feared, hoped, and struggled in ways we easily recognise today.", fn: "Explanation" },
            { text: "For example, ancient letters and stories reveal jealousies and ambitions that feel strikingly modern.", fn: "Example" },
            { text: "This shows that studying the past can cure the proud illusion that we are entirely new and unique.", fn: "Explain why it matters", vocab: [{ term: "illusion", gloss: "錯覺；幻想" }] },
            { text: "Realising this can make us humbler and more understanding toward people of other times.", fn: "Develop the point" },
            { text: "It reminds us that today's problems are often old problems wearing new clothes.", fn: "One more layer" },
            { text: "To this extent, history truly does dispel the illusion of our difference.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why its main benefit is broader",
          sentences: [
            { text: "Second, however, this is far from the main benefit that history offers.", fn: "Topic sentence", moves: ["Second"] },
            { text: "The greatest value of history is that it helps us learn from the successes and mistakes of the past.", fn: "Explanation" },
            { text: "Consider how studying the causes of past wars can help leaders avoid repeating the same disasters.", fn: "Example" },
            { text: "Such lessons can shape wiser decisions and protect societies from old and dangerous errors.", fn: "Explain why it matters" },
            { text: "History also explains how the present world came to be, from its borders to its beliefs.", fn: "Develop the point" },
            { text: "It teaches how societies change over time, which is just as important as seeing how people stay the same.", fn: "One more layer" },
            { text: "These deeper benefits matter far more than simply correcting one illusion about ourselves.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, history does usefully remind us that we are not so different from people of the past.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But its main benefit lies in the lessons and understanding it offers for the present and future.", fn: "Synthesis" },
            { text: "We study history less to see ourselves in the past than to learn how to live more wisely now.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): grants that discipline is central to learning, then argues schools can and do motivate; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "In the end, no one can learn a subject for us, since we must do the work ourselves.", fn: "Hook" },
            { text: "Some people argue that learning is primarily a matter of personal discipline, and that schools or colleges alone cannot motivate students.", fn: "Restate the prompt" },
            { text: "I agree that personal discipline is vital, but I disagree that schools play only a small part in motivating students to learn.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why discipline is central",
          sentences: [
            { text: "First, personal discipline truly is at the centre of all real learning.", fn: "Topic sentence", moves: ["First"] },
            { text: "Even the best school cannot help a student who refuses to study, practise, or pay attention.", fn: "Explanation" },
            { text: "For example, two students in the same class often achieve very different results because of their own effort.", fn: "Example" },
            { text: "This shows that the will to work hard usually matters more than any single teacher or method.", fn: "Explain why it matters" },
            { text: "Students who take charge of their own learning keep going long after a course has ended.", fn: "Develop the point" },
            { text: "Lasting knowledge depends on the steady self-discipline that only the learner can supply.", fn: "One more layer", vocab: [{ term: "self-discipline", gloss: "自律" }] },
            { text: "In this sense, the statement points to something genuinely important.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why schools do motivate",
          sentences: [
            { text: "Second, however, it is wrong to claim that schools cannot motivate students at all.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A skilled and caring teacher can awaken interest in a subject a student once found boring.", fn: "Explanation" },
            { text: "Consider a bored pupil who suddenly loves science because an inspiring teacher made it exciting and clear.", fn: "Example" },
            { text: "Such cases show that good schools can spark the very motivation that personal discipline then sustains.", fn: "Explain why it matters" },
            { text: "Encouragement, good teaching, and a positive environment all help students want to work hard.", fn: "Develop the point" },
            { text: "Many students who once lacked discipline have found it after a teacher truly believed in them.", fn: "One more layer" },
            { text: "Schools and self-discipline, then, work together rather than one replacing the other.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, personal discipline is indeed essential to genuine learning.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But schools and teachers can do a great deal to spark and support that discipline.", fn: "Synthesis" },
            { text: "The best learning grows where a student's own effort meets the encouragement of a good school.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that backs research serving the many while defending basic research and the few; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "There is never enough money or time to study everything researchers might wish to explore.", fn: "Hook" },
            { text: "Some people recommend that scientists and researchers should focus on areas likely to benefit the greatest number of people.", fn: "Restate the prompt" },
            { text: "I agree that research should often serve the many, but I believe focusing only on the greatest number would harm science and neglect those in need.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why serving the many is wise",
          sentences: [
            { text: "First, directing research toward the greatest benefit is often a wise and fair use of resources.", fn: "Topic sentence", vocab: [{ term: "resources", gloss: "資源" }], moves: ["First"] },
            { text: "When money is limited, it makes sense to study problems that affect millions of lives.", fn: "Explanation" },
            { text: "For example, research into common diseases like malaria can save far more lives than work on a very rare condition.", fn: "Example" },
            { text: "This shows that aiming at widespread benefit can do an enormous amount of good.", fn: "Explain why it matters" },
            { text: "Such a focus also helps justify the public money that pays for much important research.", fn: "Develop the point" },
            { text: "Choosing projects by how many people they help can guide limited effort toward the greatest impact.", fn: "One more layer" },
            { text: "For these reasons, serving the greatest number is a worthy goal for much research.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it cannot be the only aim",
          sentences: [
            { text: "Second, however, focusing only on the greatest number would damage science in serious ways.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Much basic research seems useless at first, yet later leads to discoveries that help everyone.", fn: "Explanation" },
            { text: "Consider how curiosity-driven study of electricity, with no obvious benefit, eventually transformed the entire world.", fn: "Example" },
            { text: "Such examples show that we cannot always predict which research will prove most valuable.", fn: "Explain why it matters" },
            { text: "Counting heads would also abandon small groups, such as people with rare diseases, who deserve help too.", fn: "Develop the point" },
            { text: "Important knowledge is sometimes worth pursuing for its own sake, not only for immediate numbers.", fn: "One more layer" },
            { text: "Research, then, should serve the many without ignoring curiosity or the few.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, aiming research at the greatest number of people often does great good.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But focusing on numbers alone would stifle basic discovery and neglect those in greatest need.", fn: "Synthesis" },
            { text: "The wisest approach balances broad benefit with curiosity and care for small but important groups.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): a recommendation response that values consensus while insisting leaders keep their ideals; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Politics often forces a choice between sticking to principles and reaching a workable deal.", fn: "Hook" },
            { text: "Some people recommend that politicians should pursue common ground and reasonable consensus rather than chase elusive ideals.", fn: "Restate the prompt" },
            { text: "I agree that compromise is often necessary, but I believe politicians must not abandon their ideals altogether.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why consensus is valuable",
          sentences: [
            { text: "First, seeking common ground is often the only way to get things done in government.", fn: "Topic sentence", vocab: [{ term: "consensus", gloss: "共識" }], moves: ["First"] },
            { text: "In a divided society, no single group can have everything it wants, so compromise becomes essential.", fn: "Explanation" },
            { text: "For example, a budget or a peace deal usually passes only when opposing sides agree to give up something.", fn: "Example" },
            { text: "This shows that reasonable consensus can turn endless argument into real and lasting progress.", fn: "Explain why it matters" },
            { text: "Politicians who refuse ever to compromise often achieve nothing but deadlock and anger.", fn: "Develop the point" },
            { text: "Working toward agreement also helps hold a divided nation peacefully together.", fn: "One more layer" },
            { text: "For these reasons, the pursuit of common ground is a genuine political virtue.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why ideals are still needed",
          sentences: [
            { text: "Second, however, abandoning all ideals in the name of consensus would be a serious mistake.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Ideals give politics its direction and remind leaders what they are actually trying to achieve.", fn: "Explanation" },
            { text: "Consider reformers who refused to compromise on justice and slowly changed unfair laws that most people once accepted.", fn: "Example" },
            { text: "Such courage shows that some ideals are worth defending even when easy agreement is impossible.", fn: "Explain why it matters" },
            { text: "A leader with no ideals may chase agreement for its own sake and drift along without purpose.", fn: "Develop the point" },
            { text: "Real progress sometimes requires holding firm to a principle until others can be persuaded.", fn: "One more layer" },
            { text: "Ideals, then, should guide the search for consensus rather than be thrown away in it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, politicians are right to seek common ground, since compromise makes government work.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they should never surrender the ideals that give their work meaning and direction.", fn: "Synthesis" },
            { text: "The best leaders pursue practical consensus while staying true to the principles worth fighting for.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): backs weighing consequences before risk while granting that some moments demand fast action; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every important choice in life carries some risk, from starting a business to crossing a busy road.", fn: "Hook" },
            { text: "Some people recommend that a person should undertake risky action only after carefully considering its consequences.", fn: "Restate the prompt" },
            { text: "I largely agree that thinking before acting is wise, but I believe demanding full consideration before every risk would sometimes do more harm than good.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why considering consequences is wise",
          sentences: [
            { text: "First, in most situations, weighing the consequences before taking a risk is plainly sensible.", fn: "Topic sentence", moves: ["First"] },
            { text: "Careful thought helps people avoid the disasters that a single moment of recklessness might cause.", fn: "Explanation" },
            { text: "For example, a person who studies the dangers before investing her savings is far less likely to lose everything.", fn: "Example" },
            { text: "This shows that thinking ahead can turn a reckless gamble into a reasonable, calculated decision.", fn: "Explain why it matters" },
            { text: "People who act without considering the results often regret choices they could easily have avoided.", fn: "Develop the point" },
            { text: "Considering consequences also helps us prepare for problems instead of being caught by surprise.", fn: "One more layer", vocab: [{ term: "consequences", gloss: "後果" }] },
            { text: "For these reasons, careful thought should usually come before any risky action.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why some risks need fast action",
          sentences: [
            { text: "Second, however, insisting on full consideration before every risk would itself cause problems.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some opportunities and emergencies demand fast action, leaving no time for long and careful thought.", fn: "Explanation" },
            { text: "Consider a person who must decide in mere seconds whether to pull a stranger out of danger.", fn: "Example" },
            { text: "Such moments show that endless caution can cost us valuable chances and even lives.", fn: "Explain why it matters" },
            { text: "Many great achievements also required people to take bold risks before every outcome was known.", fn: "Develop the point" },
            { text: "If we waited to understand every consequence, we might never act, invent, or explore at all.", fn: "One more layer" },
            { text: "Some risks, then, are worth taking even without complete certainty.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, carefully considering consequences is usually a wise habit before taking a risk.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But demanding full certainty before every action would leave us frozen and afraid.", fn: "Synthesis" },
            { text: "The best approach is to think carefully when we can, while staying ready to act boldly when we must.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that circumstances create leaders, then argues personal qualities matter just as much; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We often wonder whether great leaders are born or simply shaped by their times.", fn: "Hook" },
            { text: "Some people argue that leaders are created by the demands that are placed on them.", fn: "Restate the prompt" },
            { text: "I agree that difficult circumstances often bring out leaders, but I believe a person's own qualities and choices matter just as much.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How demands create leaders",
          sentences: [
            { text: "First, it is true that hard situations often turn ordinary people into leaders.", fn: "Topic sentence", moves: ["First"] },
            { text: "When a crisis demands action, someone usually rises to meet the challenge and guide others.", fn: "Explanation" },
            { text: "For example, many wartime leaders were quiet, unremarkable figures until danger forced them to step forward.", fn: "Example" },
            { text: "This shows that pressure and need can draw out abilities people never knew they had.", fn: "Explain why it matters" },
            { text: "A serious challenge can give a person both the chance and the reason to lead.", fn: "Develop the point" },
            { text: "Without such demands, many capable leaders might have lived ordinary and forgotten lives.", fn: "One more layer" },
            { text: "To this extent, circumstances clearly play a large part in creating leaders.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why personal qualities matter",
          sentences: [
            { text: "Second, however, demands alone cannot create a leader from someone who lacks the right qualities.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Faced with the same crisis, many people panic or freeze while only a few are able to lead.", fn: "Explanation" },
            { text: "Consider two officials in the same emergency, where one collapses under pressure and the other inspires calm.", fn: "Example" },
            { text: "Such differences show that courage, character, and judgment come from within the person.", fn: "Explain why it matters", vocab: [{ term: "character", gloss: "品格；個性" }] },
            { text: "Leaders also shape their circumstances through their own choices rather than only responding to them.", fn: "Develop the point" },
            { text: "The very same demands can produce a hero in one person and a failure in another.", fn: "One more layer" },
            { text: "Personal qualities, then, are as important as the situations that call them forth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the demands of a situation can certainly help create leaders.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But those demands only reveal leadership in people who already possess the necessary strengths.", fn: "Synthesis" },
            { text: "True leaders emerge where difficult circumstances meet the character ready to rise to them.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the real cost of conservation, then argues the benefits of saving species usually outweigh it; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Around the world, countless plant and animal species are slipping quietly toward extinction.", fn: "Hook", vocab: [{ term: "extinction", gloss: "滅絕" }] },
            { text: "Some people argue that there is little justification for society to make extraordinary efforts, at great cost in money and jobs, to save endangered species.", fn: "Restate the prompt" },
            { text: "I understand the concern about cost, but I strongly disagree, because protecting species brings benefits that usually outweigh the price.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The cost concern has some weight",
          sentences: [
            { text: "First, it is fair to admit that saving species can be expensive and difficult.", fn: "Topic sentence", moves: ["First"] },
            { text: "Protecting a single rare animal can cost large sums and sometimes threaten people's jobs.", fn: "Explanation" },
            { text: "For example, halting logging or fishing to save a species can hurt the workers who depend on that industry.", fn: "Example" },
            { text: "This shows that conservation can carry real costs that ordinary people are asked to bear.", fn: "Explain why it matters" },
            { text: "Money spent on one rare species could sometimes feed, house, or treat many human beings instead.", fn: "Develop the point" },
            { text: "These costs are genuine and should never be ignored or dismissed lightly.", fn: "One more layer" },
            { text: "To this extent, the concern behind the statement deserves to be taken seriously.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why saving species is justified",
          sentences: [
            { text: "Second, however, the benefits of saving species usually outweigh these costs by far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Every species is part of a web of life that supports our food, water, and climate.", fn: "Explanation" },
            { text: "Consider how the loss of bees, which pollinate our crops, could threaten the food supply of millions.", fn: "Example", vocab: [{ term: "pollinate", gloss: "授粉" }] },
            { text: "Such examples show that protecting species often protects human survival as well.", fn: "Explain why it matters" },
            { text: "Many medicines, moreover, have come from plants and animals we might otherwise have lost forever.", fn: "Develop the point" },
            { text: "There is also a moral duty not to wipe out other living things for our short-term gain.", fn: "One more layer" },
            { text: "Saving species, then, is usually a wise investment rather than a wasteful cost.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, efforts to save endangered species can indeed be costly and demanding.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the long-term benefits to our health, environment, and conscience are far greater.", fn: "Synthesis" },
            { text: "Protecting other species is not a waste but a duty that ultimately protects ourselves.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the mind's unique strengths, then argues machines already surpass us in many tasks; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Computers can now beat the best humans at chess and answer difficult questions in an instant.", fn: "Hook" },
            { text: "Some people argue that the human mind will always be superior to machines, because machines are only tools created by human minds.", fn: "Restate the prompt" },
            { text: "I agree that the human mind has unique strengths, but I believe the word always claims far too much.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The mind's unique strengths",
          sentences: [
            { text: "First, the human mind possesses qualities that machines still cannot match.", fn: "Topic sentence", moves: ["First"] },
            { text: "People can feel emotions, make moral choices, and imagine entirely new ideas from nothing.", fn: "Explanation", vocab: [{ term: "moral", gloss: "道德的" }] },
            { text: "For example, a human can write a heartfelt poem or sense a friend's hidden sadness.", fn: "Example" },
            { text: "This shows that understanding, creativity, and feeling remain deeply human abilities.", fn: "Explain why it matters" },
            { text: "Machines, after all, do only what their human designers have programmed them to do.", fn: "Develop the point" },
            { text: "Behind every clever machine stands a human mind that created and still guides it.", fn: "One more layer" },
            { text: "In these respects, the human mind keeps a real and important advantage.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why machines surpass us in many ways",
          sentences: [
            { text: "Second, however, it is simply not true that the mind will always be superior in everything.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Machines already calculate, store, and process information far faster than any person can.", fn: "Explanation" },
            { text: "Consider how a computer can scan millions of records in seconds, a task no human could ever finish.", fn: "Example" },
            { text: "Such power shows that machines have already surpassed us in many important tasks.", fn: "Explain why it matters" },
            { text: "As machines learn and improve, the gap between them and us may keep narrowing in surprising ways.", fn: "Develop the point" },
            { text: "Claiming that humans will always win in every area ignores how quickly technology advances.", fn: "One more layer" },
            { text: "The mind's superiority, then, holds in some areas but certainly not in all.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the human mind keeps unique strengths in creativity, feeling, and moral judgment.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But machines already outperform us in speed and memory, and they continue to improve.", fn: "Synthesis" },
            { text: "Rather than always ruling over machines, the wisest path is for human minds and machines to work together.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): grants that genuine commitment can bring honest criticism, then argues it just as often breeds blind loyalty; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We might expect the strongest supporters of an idea to defend it without any doubt at all.", fn: "Hook" },
            { text: "Some people argue that those most deeply committed to an idea or policy are also the most critical of it.", fn: "Restate the prompt" },
            { text: "I agree that genuine commitment can lead to honest criticism, but I do not believe this is true of committed people in general.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How commitment can bring criticism",
          sentences: [
            { text: "First, people who care deeply about an idea often do examine it most closely.", fn: "Topic sentence", moves: ["First"] },
            { text: "Because they want the idea to succeed, they study its weaknesses in order to improve it.", fn: "Explanation" },
            { text: "For example, a devoted scientist may test her own favourite theory harder than anyone else would.", fn: "Example" },
            { text: "This shows that real commitment can include a genuine willingness to question and refine.", fn: "Explain why it matters" },
            { text: "Those who truly love a cause want it to be as strong and as honest as possible.", fn: "Develop the point" },
            { text: "Such people criticise not to destroy the idea but to make it better.", fn: "One more layer" },
            { text: "In this sense, deep commitment and careful criticism can indeed go together.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why commitment often blinds",
          sentences: [
            { text: "Second, however, deep commitment just as often makes people less critical, not more.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Strong belief can blind people to the faults of an idea they have fully embraced.", fn: "Explanation" },
            { text: "Consider devoted followers of a movement who refuse to admit even its most obvious mistakes.", fn: "Example" },
            { text: "Such loyalty shows that commitment can silence doubt rather than sharpen it.", fn: "Explain why it matters", vocab: [{ term: "loyalty", gloss: "忠誠" }] },
            { text: "People heavily invested in a policy may defend it stubbornly to avoid admitting they were wrong.", fn: "Develop the point" },
            { text: "The most committed are sometimes the last to see flaws that outsiders notice at once.", fn: "One more layer" },
            { text: "Commitment, then, can produce blind loyalty as easily as honest criticism.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, deep commitment to an idea can sometimes lead to its sharpest criticism.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But just as often, strong belief blinds people to the faults they refuse to see.", fn: "Synthesis" },
            { text: "Whether commitment brings criticism or blindness depends on the honesty of the person who holds it.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward saving species while taking the cost view seriously; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "The question of how far we should go to save endangered species has no easy answer.", fn: "Hook" },
            { text: "Some people believe society should try to save every species whatever the cost, while others believe we should not make extraordinary efforts when money and jobs are at stake.", fn: "Restate the prompt" },
            { text: "I find more truth in the first view, but I believe our efforts to save species must still be balanced against real human needs.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why I lean toward saving species",
          sentences: [
            { text: "First, the view that we should work hard to save species rests on strong reasons.", fn: "Topic sentence", moves: ["First"] },
            { text: "Each species forms part of a delicate web of life that ultimately supports human survival.", fn: "Explanation" },
            { text: "For example, losing the insects that pollinate our crops could damage the food supply of millions.", fn: "Example", vocab: [{ term: "pollinate", gloss: "授粉" }] },
            { text: "This shows that protecting species often means protecting ourselves as well.", fn: "Explain why it matters" },
            { text: "Many medicines and materials, moreover, have come from plants and animals we nearly lost.", fn: "Develop the point" },
            { text: "There is also a moral case against wiping out other living things for our own convenience.", fn: "One more layer" },
            { text: "For these reasons, I largely share the belief that species are worth real effort to save.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Taking the cost view seriously",
          sentences: [
            { text: "Second, however, the opposing view rightly reminds us that such efforts carry heavy costs.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Saving certain species can cost enormous sums and threaten the jobs of ordinary workers.", fn: "Explanation" },
            { text: "Consider a town whose livelihood disappears when an industry is shut down to protect one rare animal.", fn: "Example" },
            { text: "Such hardship shows that conservation cannot ignore the real suffering it may cause people.", fn: "Explain why it matters", vocab: [{ term: "conservation", gloss: "保育；保護" }] },
            { text: "Public money spent on every species is money not spent on hospitals, schools, or the poor.", fn: "Develop the point" },
            { text: "A wise policy must therefore weigh the value of a species against the human cost of saving it.", fn: "One more layer" },
            { text: "Both views, then, capture part of the truth and must be brought together.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I lean toward the belief that society should work hard to save endangered species.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the opposing view is right that we cannot ignore the cost in money and jobs.", fn: "Synthesis" },
            { text: "The wisest course is to protect species seriously while weighing each effort against genuine human needs.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that holds education mainly frees the mind while granting that rigid schooling can restrain it; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People have long disagreed about whether education sets the mind free or holds it back.", fn: "Hook" },
            { text: "Some believe the purpose of education is to free the mind and spirit, while others believe formal schooling tends to restrain them.", fn: "Restate the prompt" },
            { text: "I believe education mainly frees the mind, though I admit that poor or rigid schooling can sometimes restrain it.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why education frees the mind",
          sentences: [
            { text: "First, good education opens the mind to ideas, choices, and possibilities it would never find alone.", fn: "Topic sentence", moves: ["First"] },
            { text: "By teaching us to read, reason, and question, education gives us the tools of independent thought.", fn: "Explanation" },
            { text: "For example, a student who learns history and science can understand the world far beyond her own village.", fn: "Example" },
            { text: "This shows that knowledge frees people from ignorance, fear, and narrow assumptions.", fn: "Explain why it matters" },
            { text: "An educated person can weigh evidence, judge arguments, and decide what to believe for herself.", fn: "Develop the point" },
            { text: "Education also opens doors to careers and freedoms that would otherwise stay firmly shut.", fn: "One more layer" },
            { text: "In this sense, real education is one of the greatest sources of freedom we have.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — When schooling restrains it",
          sentences: [
            { text: "Second, however, the opposing view rightly warns that schooling can sometimes restrain the mind.", fn: "Topic sentence", moves: ["Second"] },
            { text: "When education only forces students to memorise and obey, it can crush curiosity and creativity.", fn: "Explanation", vocab: [{ term: "curiosity", gloss: "好奇心" }] },
            { text: "Consider a rigid classroom where students are punished for asking questions or thinking differently.", fn: "Example" },
            { text: "Such teaching shows that schooling can train obedience instead of freeing the mind.", fn: "Explain why it matters" },
            { text: "An education that demands only one right answer can narrow thinking rather than widen it.", fn: "Develop the point" },
            { text: "The danger lies not in education itself but in education done badly and without imagination.", fn: "One more layer" },
            { text: "Whether schooling frees or restrains, then, depends greatly on how it is carried out.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I believe education mostly frees the mind and spirit.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the opposing view is right that rigid, narrow teaching can restrain them instead.", fn: "Synthesis" },
            { text: "Education sets us free only when it teaches us to think for ourselves rather than merely obey.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that favours the public's right to know while granting rare security exceptions; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Governments constantly decide how much of the truth to share with the people they serve.", fn: "Hook" },
            { text: "Some believe leaders may rightly withhold information from the public, while others insist the public has a right to be fully informed.", fn: "Restate the prompt" },
            { text: "I lean strongly toward the public's right to know, though I accept that a few rare cases may justify secrecy.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why the public has a right to know",
          sentences: [
            { text: "First, in a free society, people generally have a right to know what their leaders are doing.", fn: "Topic sentence", moves: ["First"] },
            { text: "Citizens cannot make wise choices at elections if important facts are hidden from them.", fn: "Explanation" },
            { text: "For example, a government that hides a public health danger leaves people unable to protect themselves.", fn: "Example" },
            { text: "This shows that secrecy can rob citizens of the knowledge they need to act and to vote.", fn: "Explain why it matters" },
            { text: "Open information also keeps leaders honest, since they know their actions can be examined.", fn: "Develop the point" },
            { text: "When the public is kept in the dark, the abuse of power becomes far easier to hide.", fn: "One more layer" },
            { text: "For these reasons, the right to be informed is a vital part of a healthy society.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — When secrecy may be justified",
          sentences: [
            { text: "Second, however, the opposing view is right that a few situations may justify withholding information.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some military or security secrets, if revealed, could put many innocent lives in danger.", fn: "Explanation", vocab: [{ term: "security", gloss: "安全；國家安全" }] },
            { text: "Consider plans for defending a country, which would be useless if every detail were made public.", fn: "Example" },
            { text: "Such cases show that total openness is not always safe or wise.", fn: "Explain why it matters" },
            { text: "Releasing certain information too early could also cause needless panic before the facts are clear.", fn: "Develop the point" },
            { text: "These exceptions, however, must be rare and clearly justified, not a habit of hiding the truth.", fn: "One more layer" },
            { text: "Secrecy, then, should be the rare exception rather than the normal rule.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I firmly support the public's right to be fully informed.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the opposing view rightly notes that genuine matters of safety may sometimes require secrecy.", fn: "Synthesis" },
            { text: "The best balance keeps government open by default while allowing narrow, well-justified exceptions.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): agrees with the claim and largely with its reason while arguing for flexibility; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Truly educated people are often thought to know something about many fields, not just one.", fn: "Hook" },
            { text: "One claim holds that universities should require students to take courses outside their major, on the reason that knowing various disciplines is the best way to become truly educated.", fn: "Restate the prompt" },
            { text: "I agree with the claim and largely with its reason, though I believe the requirement should leave some room for choice.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Agreeing with the claim and reason",
          sentences: [
            { text: "First, the reason behind the claim is largely sound, because broad knowledge does make people more truly educated.", fn: "Topic sentence", moves: ["First"] },
            { text: "Studying many disciplines lets students see how different fields connect and inform one another.", fn: "Explanation", vocab: [{ term: "disciplines", gloss: "學科；領域" }] },
            { text: "For example, a literature student who also learns some science can think about the world more completely.", fn: "Example" },
            { text: "This shows that a varied education produces a richer and more flexible mind.", fn: "Explain why it matters" },
            { text: "Knowing several disciplines also helps people understand complex problems that cross many fields at once.", fn: "Develop the point" },
            { text: "Such breadth builds the kind of judgment that a narrow training alone can never provide.", fn: "One more layer" },
            { text: "To this extent, the claim and its reason clearly deserve support.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the requirement needs flexibility",
          sentences: [
            { text: "Second, however, the requirement should be applied flexibly rather than forced on everyone in the same way.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students already carry heavy workloads, and too many required courses can crowd out their main subject.", fn: "Explanation" },
            { text: "Consider a medical student whose demanding schedule leaves very little time for many extra classes.", fn: "Example" },
            { text: "Forcing wide breadth in such cases could weaken the deep training her career truly requires.", fn: "Explain why it matters" },
            { text: "A wiser policy lets students choose their outside courses from a broad range rather than dictating each one.", fn: "Develop the point" },
            { text: "Breadth and depth, after all, are both necessary parts of a complete education.", fn: "One more layer" },
            { text: "The reason holds best, then, when breadth is encouraged without crushing depth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, requiring some study outside the major does help students become truly educated.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the requirement should stay flexible enough to protect the depth each field demands.", fn: "Synthesis" },
            { text: "The best universities give students wide horizons while still guarding the focus of their main study.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that the past is not a perfect guide, then argues it clearly helps us decide today; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Many of today's hardest choices closely resemble problems that people faced long ago.", fn: "Hook" },
            { text: "Some people argue that knowing about the past cannot help us make important decisions today.", fn: "Restate the prompt" },
            { text: "I strongly disagree, because the past offers lessons that guide wise decisions, even if it is not a perfect guide.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why the past has real limits",
          sentences: [
            { text: "First, it is fair to admit that the past cannot answer every question we face today.", fn: "Topic sentence", moves: ["First"] },
            { text: "The world changes, and old solutions do not always fit new and unfamiliar problems.", fn: "Explanation" },
            { text: "For example, ancient ways of running a small village cannot simply be copied to govern a huge modern city.", fn: "Example" },
            { text: "This shows that we cannot blindly apply the past to the present without careful thought.", fn: "Explain why it matters" },
            { text: "Relying too heavily on old examples can even blind us to what is genuinely new.", fn: "Develop the point" },
            { text: "Each age does face some challenges that earlier generations never imagined.", fn: "One more layer" },
            { text: "To this extent, the past has real limits as a guide.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the past clearly helps",
          sentences: [
            { text: "Second, however, it is plainly false that the past cannot help us decide today.", fn: "Topic sentence", moves: ["Second"] },
            { text: "History is full of lessons about which choices succeed and which ones end in disaster.", fn: "Explanation", vocab: [{ term: "disaster", gloss: "災難" }] },
            { text: "Consider how the study of past economic crashes helps leaders avoid repeating the same mistakes.", fn: "Example" },
            { text: "Such lessons show that knowing the past can directly improve the decisions we make now.", fn: "Explain why it matters" },
            { text: "Even in personal life, remembering past mistakes helps us choose more wisely the next time.", fn: "Develop the point" },
            { text: "Ignoring history would force every generation to relearn painful lessons from the very beginning.", fn: "One more layer" },
            { text: "The past, then, is one of the most useful guides we have for the present.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the past is not a perfect guide and cannot answer every modern question.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But knowing history clearly helps us make wiser decisions and avoid repeating old mistakes.", fn: "Synthesis" },
            { text: "We decide best today when we learn from the past without being chained to it.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that media coverage exposes weakness, then argues genuine heroes remain possible; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Today the smallest faults of famous people are broadcast to the entire world within hours.", fn: "Hook" },
            { text: "Some people argue that in this age of intensive media coverage, society can no longer regard any living person as a hero.", fn: "Restate the prompt" },
            { text: "I agree that constant coverage exposes human weakness, but I disagree that real heroes have become impossible.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How media exposes weakness",
          sentences: [
            { text: "First, it is true that heavy media coverage makes it harder for anyone to seem heroic.", fn: "Topic sentence", moves: ["First"] },
            { text: "Cameras and reporters now follow famous people everywhere, revealing flaws that once stayed hidden.", fn: "Explanation" },
            { text: "For example, beloved athletes and leaders have lost public respect once their private failings appeared in the news.", fn: "Example" },
            { text: "This shows that endless coverage can quickly tarnish even a shining reputation.", fn: "Explain why it matters" },
            { text: "Knowing that a hero is ordinary and flawed can weaken the admiration people once felt.", fn: "Develop the point" },
            { text: "The media's hunger for scandal can damage almost any famous figure in time.", fn: "One more layer", vocab: [{ term: "scandal", gloss: "醜聞" }] },
            { text: "To this extent, intensive coverage really does make heroism harder to maintain.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why heroes are still possible",
          sentences: [
            { text: "Second, however, the claim that no living person can be a hero goes much too far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A hero is admired not for being perfect but for genuine courage, kindness, or sacrifice.", fn: "Explanation" },
            { text: "Consider the firefighters, doctors, and ordinary people who risk everything to help others in danger.", fn: "Example" },
            { text: "Such acts win deep and lasting respect, no matter how closely the media may look.", fn: "Explain why it matters" },
            { text: "Heavy coverage can even spread word of these heroes to millions who would otherwise never know them.", fn: "Develop the point" },
            { text: "Learning that heroes have flaws can make them more human and inspiring, not less.", fn: "One more layer" },
            { text: "Real heroism, then, can survive the brightest spotlight rather than being destroyed by it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, intensive media coverage does expose flaws that once stayed safely hidden.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But this has not made heroes impossible, since true courage and goodness still earn our respect.", fn: "Synthesis" },
            { text: "We can still honour living heroes, as long as we admire real virtue rather than demand perfection.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that like-minded people teach us something, then argues opposing views teach us more; two developed examples with analysis, controlled prose at about 400 words on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is always pleasant to spend time with people who see the world the way we do.", fn: "Hook" },
            { text: "Some people argue that we can usually learn much more from people whose views we share than from those whose views contradict our own.", fn: "Restate the prompt" },
            { text: "I agree that like-minded people can teach us some things, but I believe we usually learn more from those who disagree with us.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — What shared views can teach",
          sentences: [
            { text: "First, people who share our views can genuinely help us learn.", fn: "Topic sentence", moves: ["First"] },
            { text: "They can deepen our understanding by adding new facts and arguments to ideas we already hold.", fn: "Explanation" },
            { text: "For example, two scientists with the same theory can build on each other's work to make it stronger.", fn: "Example" },
            { text: "This shows that agreement can be a comfortable and productive setting for learning.", fn: "Explain why it matters" },
            { text: "Working with allies also gives us the confidence to develop our ideas more fully.", fn: "Develop the point" },
            { text: "Shared understanding can make difficult learning feel encouraging rather than threatening.", fn: "One more layer" },
            { text: "To this extent, like-minded people clearly have something to teach us.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why opposing views teach more",
          sentences: [
            { text: "Second, however, we usually learn the most from people whose views contradict our own.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Those who disagree force us to defend our beliefs and to notice their hidden weaknesses.", fn: "Explanation" },
            { text: "Consider how a strong opponent in a debate can reveal a flaw in our argument we never saw.", fn: "Example" },
            { text: "Such challenges push us to think harder, gather better evidence, and understand the issue more deeply.", fn: "Explain why it matters", vocab: [{ term: "evidence", gloss: "證據" }] },
            { text: "People who only agree with us, by contrast, rarely teach us anything genuinely new.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Facing different views also helps us understand the world as others truly see it.", fn: "One more layer" },
            { text: "Disagreement, handled with respect, is therefore among our most powerful teachers.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, people who share our views can certainly add to what we already know.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But we usually grow more by engaging seriously with those who think differently.", fn: "Synthesis" },
            { text: "The richest learning comes not from comfortable agreement but from thoughtful disagreement.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that youth trends reveal a culture's direction, then argues they are only one part of the whole; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "The music, fashion, and slang of young people often seem to capture the spirit of an age.", fn: "Hook" },
            { text: "Some people argue that the most effective way to understand contemporary culture is to analyse the trends of its youth.", fn: "Restate the prompt" },
            { text: "I agree that youth culture reveals a great deal, but I do not believe it is the only or the best way to understand a society.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why youth trends reveal much",
          sentences: [
            { text: "First, the trends of young people often show where a culture is heading.", fn: "Topic sentence", vocab: [{ term: "trends", gloss: "潮流；趨勢" }], moves: ["First"] },
            { text: "Because the young adopt new ideas quickly, their habits hint at the future of the whole society.", fn: "Explanation" },
            { text: "For example, the way teenagers embraced the internet early showed how deeply technology would reshape daily life.", fn: "Example" },
            { text: "This shows that watching youth trends can reveal changes long before they spread to everyone else.", fn: "Explain why it matters" },
            { text: "Young people also tend to express the hopes and frustrations of their time openly and honestly.", fn: "Develop the point" },
            { text: "Their music and art often capture feelings that older generations are slower to admit.", fn: "One more layer" },
            { text: "To this extent, studying the young really does illuminate a culture.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why they are not the whole picture",
          sentences: [
            { text: "Second, however, youth trends alone cannot reveal the whole of a culture.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A society is also shaped by its families, workers, leaders, and long-standing traditions.", fn: "Explanation" },
            { text: "Consider how a country's laws, religions, and history shape daily life far more than any passing teenage fashion.", fn: "Example" },
            { text: "Such forces show that much of a culture lies well beyond the world of the young.", fn: "Explain why it matters" },
            { text: "Many youth trends, moreover, fade quickly and never truly represent the wider society.", fn: "Develop the point" },
            { text: "Focusing only on the young would ignore the values and habits of everyone else.", fn: "One more layer" },
            { text: "A full understanding of culture, then, must look well beyond its youth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the trends of young people offer real and valuable clues about a culture.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they form only one part of a society shaped by many groups and traditions.", fn: "Synthesis" },
            { text: "We understand a culture best by studying its youth alongside everyone and everything else.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the power of immediate surroundings, then argues society shapes attitudes just as deeply; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People's moods and opinions often shift depending on where they are and who is around them.", fn: "Hook" },
            { text: "Some people argue that people's attitudes are determined more by their immediate situation than by society as a whole.", fn: "Restate the prompt" },
            { text: "I agree that our surroundings strongly shape our attitudes, but I believe the wider society influences us just as deeply.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The power of the immediate situation",
          sentences: [
            { text: "First, our immediate surroundings clearly have a powerful effect on how we think and feel.", fn: "Topic sentence", vocab: [{ term: "attitudes", gloss: "態度" }], moves: ["First"] },
            { text: "The people near us, and the pressures of the moment, can quickly change our behaviour.", fn: "Explanation" },
            { text: "For example, a calm person may become angry in a tense crowd or fearful in a dangerous place.", fn: "Example" },
            { text: "This shows that the situation right in front of us can shape our attitudes within minutes.", fn: "Explain why it matters" },
            { text: "We often behave very differently at home, at work, and among strangers.", fn: "Develop the point" },
            { text: "Immediate rewards and punishments push us to adjust our attitudes almost without thinking.", fn: "One more layer" },
            { text: "To this extent, our nearby situation is a strong force on our attitudes.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why society shapes us deeply",
          sentences: [
            { text: "Second, however, the wider society shapes our attitudes just as deeply, if less visibly.", fn: "Topic sentence", moves: ["Second"] },
            { text: "The values, language, and beliefs we absorb from our culture guide us everywhere we go.", fn: "Explanation" },
            { text: "Consider how ideas about right and wrong, learned from society, stay with us even when no one is watching.", fn: "Example" },
            { text: "Such deep beliefs show that society shapes the very person who then reacts to each situation.", fn: "Explain why it matters" },
            { text: "Our reactions to an immediate situation are themselves guided by attitudes society taught us long ago.", fn: "Develop the point" },
            { text: "Even rebellion against society is shaped by the society a person is rebelling against.", fn: "One more layer" },
            { text: "Society, then, works quietly beneath our reactions to every passing moment.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, our immediate surroundings do strongly influence our day-to-day attitudes.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the wider society shapes the deeper values through which we judge every situation.", fn: "Synthesis" },
            { text: "In the end, our attitudes are best understood as the product of both the moment and the society behind it.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that puts basic needs first while arguing against cutting all arts funding; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "When people are struggling to eat or find work, spending on art can seem like a luxury.", fn: "Hook" },
            { text: "Some people recommend that nations should suspend government funding for the arts when many of their citizens are hungry or unemployed.", fn: "Restate the prompt" },
            { text: "I agree that basic needs must come first, but I believe cutting all arts funding would be a mistake even in hard times.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why basic needs come first",
          sentences: [
            { text: "First, in a serious crisis, meeting people's basic needs must clearly come before funding art.", fn: "Topic sentence", moves: ["First"] },
            { text: "A government's first duty is to keep its citizens fed, housed, and able to find work.", fn: "Explanation" },
            { text: "For example, money spent on a grand new museum would be hard to justify while families nearby go hungry.", fn: "Example" },
            { text: "This shows that public spending should focus on survival before it focuses on culture.", fn: "Explain why it matters" },
            { text: "Citizens who are suffering may rightly resent seeing their taxes spent on art instead of aid.", fn: "Develop the point" },
            { text: "In an emergency, redirecting funds toward food and jobs is both fair and humane.", fn: "One more layer" },
            { text: "To this extent, the recommendation reflects a reasonable sense of priorities.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why not cut all arts funding",
          sentences: [
            { text: "Second, however, suspending all arts funding even in hard times would do real harm.", fn: "Topic sentence", moves: ["Second"] },
            { text: "The arts are not a mere luxury but a genuine source of meaning, comfort, and hope.", fn: "Explanation" },
            { text: "Consider how music and stories have lifted people's spirits during wars and other times of great hardship.", fn: "Example" },
            { text: "Such examples show that art can sustain a struggling society rather than waste its resources.", fn: "Explain why it matters", vocab: [{ term: "resources", gloss: "資源" }] },
            { text: "Cutting arts funding also destroys jobs, since many people earn their living through culture.", fn: "Develop the point" },
            { text: "Once cultural institutions are shut down, they can be very difficult to rebuild later.", fn: "One more layer" },
            { text: "Even in hard times, then, some support for the arts remains worthwhile.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a nation in crisis should rightly put food and jobs before funding for the arts.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But cutting all arts funding would needlessly damage the culture and spirit people depend on.", fn: "Synthesis" },
            { text: "The wiser course is to reduce arts spending if necessary while never abandoning it completely.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): backs parental involvement while arguing that compulsory volunteering is unfair; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A school clearly works better when parents take an active part in their children's education.", fn: "Hook" },
            { text: "Some people recommend that all parents should be required to volunteer time at their children's schools.", fn: "Restate the prompt" },
            { text: "I agree that parental involvement is valuable, but I believe forcing every parent to volunteer would be unfair and unworkable.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why involvement is good",
          sentences: [
            { text: "First, parental involvement genuinely benefits children and schools alike.", fn: "Topic sentence", moves: ["First"] },
            { text: "When parents help out, children often feel more supported and take their schooling more seriously.", fn: "Explanation" },
            { text: "For example, a class with parent helpers can give pupils more attention than a single teacher could alone.", fn: "Example" },
            { text: "This shows that willing parents can make a real and positive difference at school.", fn: "Explain why it matters" },
            { text: "Involved parents also understand their children's education better and can support it at home.", fn: "Develop the point" },
            { text: "Schools with strong parental support often build a warmer and stronger sense of community.", fn: "One more layer", vocab: [{ term: "community", gloss: "社群；社區" }] },
            { text: "To this extent, encouraging parents to help is plainly a good idea.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why compulsory volunteering is unfair",
          sentences: [
            { text: "Second, however, requiring every parent to volunteer would be both unfair and impractical.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Many parents work long hours or hold several jobs and simply cannot spare the time.", fn: "Explanation" },
            { text: "Consider a single mother with two jobs who would be punished for failing to give time she cannot afford.", fn: "Example" },
            { text: "Such a rule would fall hardest on the poorest families, who already struggle the most.", fn: "Explain why it matters" },
            { text: "Forced volunteers, moreover, may help unwillingly and add little of real value.", fn: "Develop the point" },
            { text: "Genuine help comes from willing parents, not from those compelled against their circumstances.", fn: "One more layer" },
            { text: "Involvement, then, should be encouraged warmly rather than demanded by force.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, parents who help at their children's schools bring real and lasting benefits.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But requiring all parents to volunteer would unfairly burden those who can least afford it.", fn: "Synthesis" },
            { text: "The wiser path is to welcome and encourage parental help without forcing it on everyone.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): backs the value of study abroad while arguing a universal requirement is unfair; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Living and studying in another country can open a young person's eyes to a whole new way of life.", fn: "Hook" },
            { text: "Some people recommend that colleges should require every student to spend at least one semester studying in a foreign country.", fn: "Restate the prompt" },
            { text: "I agree that studying abroad is valuable, but I believe making it compulsory for all students would be unfair and impractical.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why study abroad is valuable",
          sentences: [
            { text: "First, studying abroad offers experiences that classrooms at home rarely provide.", fn: "Topic sentence", moves: ["First"] },
            { text: "Living in a foreign country teaches students about other languages, customs, and ways of thinking.", fn: "Explanation" },
            { text: "For example, a student who spends months abroad often returns more independent, open-minded, and mature.", fn: "Example", vocab: [{ term: "independent", gloss: "獨立的" }] },
            { text: "This shows that time in another country can teach lessons no textbook ever could.", fn: "Explain why it matters" },
            { text: "Students abroad also build friendships and skills that help them in an increasingly connected world.", fn: "Develop the point" },
            { text: "Such experiences can shape a person's whole outlook for the rest of her life.", fn: "One more layer" },
            { text: "To this extent, studying abroad is clearly a valuable opportunity.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why a universal requirement is unfair",
          sentences: [
            { text: "Second, however, forcing every student to study abroad would create serious problems.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Studying in another country is expensive, and many students simply cannot afford the cost.", fn: "Explanation" },
            { text: "Consider a student supporting her family who could never pay for a semester overseas.", fn: "Example" },
            { text: "Such a requirement would unfairly punish poorer students for their circumstances.", fn: "Explain why it matters" },
            { text: "Some students also have health needs or family duties that make travelling abroad impossible.", fn: "Develop the point" },
            { text: "A rule forcing everyone abroad would ignore these very real and personal difficulties.", fn: "One more layer" },
            { text: "Studying abroad, then, should be encouraged and supported rather than demanded of all.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, spending a semester abroad can be a wonderful and valuable experience.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But requiring it of every student would unfairly burden those who cannot afford or manage it.", fn: "Synthesis" },
            { text: "The wiser policy is to encourage and fund study abroad while leaving it as a genuine choice.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): a recommendation response that backs rewarding good teaching while arguing pay by student results is unfair; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Everyone wants schools to reward the teachers who help their students learn the most.", fn: "Hook" },
            { text: "Some people recommend that teachers' salaries should be based on the academic performance of their students.", fn: "Restate the prompt" },
            { text: "I agree that strong teaching deserves reward, but I believe tying pay mainly to student results would be unfair and harmful.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The reasonable aim",
          sentences: [
            { text: "First, the recommendation grows from a fair wish to reward effective teaching.", fn: "Topic sentence", moves: ["First"] },
            { text: "Connecting some reward to results might encourage teachers to plan their lessons with extra care.", fn: "Explanation" },
            { text: "For example, recognising a school's most successful teachers could inspire their colleagues to improve.", fn: "Example" },
            { text: "This shows that valuing good teaching is a reasonable and worthy goal.", fn: "Explain why it matters" },
            { text: "Teachers who work hard and lift their students certainly deserve to be appreciated.", fn: "Develop the point" },
            { text: "A fair reward for excellent work could also help schools keep their very best staff.", fn: "One more layer" },
            { text: "To this extent, the recommendation rests on a sensible intention.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it would be unfair",
          sentences: [
            { text: "Second, however, basing pay mainly on student results would be deeply unfair.", fn: "Topic sentence", moves: ["Second"] },
            { text: "How well students perform depends on their home, health, and background, not only on their teacher.", fn: "Explanation", vocab: [{ term: "background", gloss: "背景；出身" }] },
            { text: "Consider a devoted teacher in a poor area whose students still score lower than those in a wealthy school.", fn: "Example" },
            { text: "Judging her by results alone would punish her for problems she did not create.", fn: "Explain why it matters" },
            { text: "Such a system might also push teachers to teach only to the test and ignore weaker pupils.", fn: "Develop the point" },
            { text: "Some teachers could even avoid the struggling students who need their help the most.", fn: "One more layer" },
            { text: "Pay tied mainly to scores, then, would harm both fairness and learning.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, rewarding excellent teaching is a fair and worthy aim.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But linking salaries mainly to student results would ignore all the other forces that shape them.", fn: "Synthesis" },
            { text: "The wiser approach judges teachers by the quality of their work, not only by their students' scores.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a claim response that concedes why heroism seems impossible today, then refutes it; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We live surrounded by news that quickly turns admired figures into targets of criticism.", fn: "Hook" },
            { text: "Some people claim that it is no longer possible for a society to regard any living man or woman as a hero.", fn: "Restate the prompt" },
            { text: "I disagree with this claim, because genuine heroes still exist, even though admiration is harder to keep today.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why the claim seems convincing",
          sentences: [
            { text: "First, it is worth admitting why this claim seems convincing to many people.", fn: "Topic sentence", moves: ["First"] },
            { text: "Modern media expose the private faults of famous people more completely than ever before.", fn: "Explanation" },
            { text: "For example, once-admired stars and leaders are often disgraced when their hidden failings appear in the news.", fn: "Example" },
            { text: "This shows that public admiration can collapse the moment a serious flaw is revealed.", fn: "Explain why it matters" },
            { text: "Constant criticism online can also tear down almost any reputation in a matter of days.", fn: "Develop the point" },
            { text: "In such a climate, lasting heroes can seem harder to find than they once were.", fn: "One more layer" },
            { text: "To this extent, the claim points to a real change in how we view famous people.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the claim goes too far",
          sentences: [
            { text: "Second, however, the claim that no living hero is possible simply goes too far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A hero is admired not for being flawless but for real courage, kindness, or self-sacrifice.", fn: "Explanation", vocab: [{ term: "sacrifice", gloss: "犧牲" }] },
            { text: "Consider the rescue workers and volunteers who risk their lives in disasters and are deeply admired by all.", fn: "Example" },
            { text: "Such acts earn lasting respect that no amount of media attention can erase.", fn: "Explain why it matters" },
            { text: "Many living people, from doctors to activists, are still widely seen as heroes today.", fn: "Develop the point" },
            { text: "Knowing that heroes are human and imperfect can make their courage even more inspiring.", fn: "One more layer" },
            { text: "Genuine heroism, then, remains entirely possible in our own time.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, intense media coverage does make admiration harder to sustain.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it has not made heroes impossible, since true courage and goodness still earn deep respect.", fn: "Synthesis" },
            { text: "We can still recognise living heroes, as long as we honour real virtue rather than expect perfection.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that measures a society by the welfare of all while granting that collective strength matters; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every society must decide whether to value its overall power or the well-being of each citizen.", fn: "Hook" },
            { text: "Some believe a society must put its overall success before the well-being of individuals, while others believe its health can only be measured by the welfare of all its people.", fn: "Restate the prompt" },
            { text: "I lean toward the second view, but I accept that a society's collective strength also matters for its people.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why welfare measures success",
          sentences: [
            { text: "First, the well-being of ordinary people is the truest measure of a society's success.", fn: "Topic sentence", vocab: [{ term: "welfare", gloss: "福祉；福利" }], moves: ["First"] },
            { text: "A nation that grows rich or powerful while its people suffer has not truly succeeded.", fn: "Explanation" },
            { text: "For example, a country with a strong army but hungry citizens has failed at its most basic task.", fn: "Example" },
            { text: "This shows that overall success means little if it does not reach the people themselves.", fn: "Explain why it matters" },
            { text: "A society exists, after all, to serve the lives of the individuals who make it up.", fn: "Develop the point" },
            { text: "When every citizen can live decently, the society as a whole is genuinely strong.", fn: "One more layer" },
            { text: "For these reasons, I believe the welfare of all is the better measure of success.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why collective strength matters too",
          sentences: [
            { text: "Second, however, the opposing view rightly notes that a society's overall success also matters.", fn: "Topic sentence", moves: ["Second"] },
            { text: "At times a nation must act for the common good, even at a cost to particular individuals.", fn: "Explanation" },
            { text: "Consider a country that raises taxes or asks for sacrifice in wartime to protect everyone's future.", fn: "Example" },
            { text: "Such efforts show that the strength of the whole can be needed to protect each person within it.", fn: "Explain why it matters" },
            { text: "When a society is too weak to defend or support itself, it cannot protect the welfare of anyone.", fn: "Develop the point" },
            { text: "Collective success and individual welfare, in truth, depend on each other.", fn: "One more layer" },
            { text: "Both views, then, capture something a wise society must keep in balance.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I believe a society is best measured by the welfare of all its people.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But its overall strength matters too, since a weak society cannot protect anyone.", fn: "Synthesis" },
            { text: "The wisest society pursues its collective success precisely in order to serve the lives of its citizens.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the value of healthy doubt, then argues mistrusting every fact is unworkable; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is true that people once believed the earth was flat and that the sun moved around it.", fn: "Hook" },
            { text: "One claim holds that any information called a fact should be mistrusted, on the reason that much supposedly factual information later turns out to be wrong.", fn: "Restate the prompt" },
            { text: "I agree that we should question facts carefully, but I disagree that we should mistrust all of them.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of healthy doubt",
          sentences: [
            { text: "First, there is real value in the caution the claim recommends.", fn: "Topic sentence", moves: ["First"] },
            { text: "History shows that many confident beliefs were later proven completely false.", fn: "Explanation" },
            { text: "For example, doctors once treated patients in ways we now know were useless or even harmful.", fn: "Example" },
            { text: "This shows that treating every fact as certain can lead us into serious error.", fn: "Explain why it matters" },
            { text: "A healthy doubt encourages people to test claims rather than accept them blindly.", fn: "Develop the point" },
            { text: "Questioning supposed facts is exactly how science corrects its own mistakes.", fn: "One more layer" },
            { text: "To this extent, the reason behind the claim contains genuine wisdom.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why total mistrust is unworkable",
          sentences: [
            { text: "Second, however, mistrusting every fact would make life and thought impossible.", fn: "Topic sentence", moves: ["Second"] },
            { text: "We rely on countless dependable facts every day, from medicine to engineering, that have proven true again and again.", fn: "Explanation", vocab: [{ term: "reliable", gloss: "可靠的" }] },
            { text: "Consider that doubting whether bridges hold weight or whether medicines work would paralyse us completely.", fn: "Example" },
            { text: "Such total mistrust shows that the claim, taken seriously, would leave us unable to act at all.", fn: "Explain why it matters" },
            { text: "The fact that some beliefs prove false does not mean that all facts are unreliable.", fn: "Develop the point" },
            { text: "Most well-tested facts are trustworthy precisely because they have survived repeated questioning.", fn: "One more layer" },
            { text: "Wisdom lies, then, in questioning facts carefully rather than mistrusting them all.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, we are right to question facts, since some of them do turn out to be wrong.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But mistrusting every fact would make knowledge and daily life impossible.", fn: "Synthesis" },
            { text: "The wisest approach is to test facts carefully while still trusting those that have been well proven.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that basic needs come first, then argues funding the arts is not cruel; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Few would argue that paintings matter more than feeding a starving family.", fn: "Hook" },
            { text: "One claim holds that nations should suspend arts funding when many citizens are hungry or unemployed, on the reason that it is cruel to fund art while basic needs go unmet.", fn: "Restate the prompt" },
            { text: "I agree that basic needs come first, but I disagree that funding the arts is therefore cruel or always wrong.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The force of the reason",
          sentences: [
            { text: "First, there is real force in the reason behind the claim.", fn: "Topic sentence", moves: ["First"] },
            { text: "When people lack food or work, spending public money on art can seem heartless.", fn: "Explanation" },
            { text: "For example, a costly new theatre would be hard to defend in a town where families cannot eat.", fn: "Example" },
            { text: "This shows that a government must put survival before culture in a genuine crisis.", fn: "Explain why it matters" },
            { text: "Suffering citizens may understandably feel betrayed if their needs are ignored for the sake of art.", fn: "Develop the point" },
            { text: "Directing scarce money toward food and jobs is, in such moments, both fair and humane.", fn: "One more layer", vocab: [{ term: "humane", gloss: "人道的；仁慈的" }] },
            { text: "To this extent, the reason given for the claim is genuinely persuasive.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the arts are not cruel",
          sentences: [
            { text: "Second, however, funding the arts is not truly cruel, even in difficult times.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Art gives people hope, meaning, and comfort that they badly need during hardship.", fn: "Explanation" },
            { text: "Consider how songs and stories have sustained whole communities through war and disaster.", fn: "Example" },
            { text: "Such examples show that art can strengthen a struggling society rather than insult it.", fn: "Explain why it matters" },
            { text: "Arts funding also supports many jobs, so cutting it can leave even more people unemployed.", fn: "Develop the point" },
            { text: "Treating art as a cruelty ignores how deeply people rely on it to endure hard times.", fn: "One more layer" },
            { text: "The arts, then, deserve some support rather than total suspension.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a nation in crisis should rightly place food and jobs above arts funding.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But calling such funding cruel goes too far, since art itself sustains people in hardship.", fn: "Synthesis" },
            { text: "The wiser course is to reduce arts spending when needed without abandoning it as something heartless.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): agrees that laws cannot change hearts, then argues they still do great good; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A law can punish bad behaviour, but it cannot easily make people kinder or wiser.", fn: "Hook" },
            { text: "One claim holds that many problems of modern society cannot be solved by laws, on the reason that laws cannot change what is in people's hearts and minds.", fn: "Restate the prompt" },
            { text: "I largely agree that laws alone cannot solve every problem, but I believe they still do far more good than the claim suggests.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why laws cannot change hearts",
          sentences: [
            { text: "First, it is true that some problems lie beyond what any law can reach.", fn: "Topic sentence", moves: ["First"] },
            { text: "Laws can forbid actions, but they cannot force people to feel respect, honesty, or kindness.", fn: "Explanation" },
            { text: "For example, a law against prejudice cannot, by itself, remove the hatred in a person's heart.", fn: "Example", vocab: [{ term: "prejudice", gloss: "偏見" }] },
            { text: "This shows that deep social problems often grow from attitudes that no rule can simply erase.", fn: "Explain why it matters" },
            { text: "People may obey a law outwardly while keeping the very feelings that caused the problem.", fn: "Develop the point" },
            { text: "Real change in hearts and minds usually comes from education, example, and culture, not from force.", fn: "One more layer" },
            { text: "To this extent, the reason behind the claim is genuinely sound.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why laws still do much",
          sentences: [
            { text: "Second, however, it is wrong to conclude that laws cannot help solve these problems at all.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Even if laws cannot change hearts directly, they can change behaviour and protect people from harm.", fn: "Explanation" },
            { text: "Consider how laws against unfair treatment have slowly changed what people accept as normal.", fn: "Example" },
            { text: "Such laws show that rules can shape attitudes over time, not just control actions.", fn: "Explain why it matters" },
            { text: "Laws also set a clear standard that teaches each new generation what a society values.", fn: "Develop the point" },
            { text: "Without laws, even good intentions would struggle to protect the weak or punish the cruel.", fn: "One more layer" },
            { text: "Laws, then, are a vital part of the solution, even if they are not the whole of it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, laws alone cannot reach the hearts and minds behind many social problems.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they still change behaviour, protect people, and slowly shape attitudes for the better.", fn: "Synthesis" },
            { text: "The wisest societies use laws alongside education and example to solve their deepest problems.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): backs taking student interests into account while insisting educators decide what students need; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Lessons come alive when they connect to what students actually care about.", fn: "Hook" },
            { text: "Some people recommend that educators should take students' interests into account when planning the content of their courses.", fn: "Restate the prompt" },
            { text: "I agree that student interests should shape teaching, but I believe educators must still decide what students truly need to learn.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why interests should shape teaching",
          sentences: [
            { text: "First, paying attention to students' interests can make learning far more effective.", fn: "Topic sentence", moves: ["First"] },
            { text: "Students who find a topic interesting concentrate harder and remember much more of it.", fn: "Explanation", vocab: [{ term: "concentrate", gloss: "專注；集中注意力" }] },
            { text: "For example, a history class built around questions students chose often sparks lively discussion.", fn: "Example" },
            { text: "This shows that connecting lessons to real interests can deepen both attention and understanding.", fn: "Explain why it matters" },
            { text: "Considering interests also shows respect for students and makes them partners in their own learning.", fn: "Develop the point" },
            { text: "A teacher who knows what excites her class can explain ideas in ways that genuinely reach them.", fn: "One more layer" },
            { text: "To this extent, taking interests into account is clearly wise.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why educators must guide",
          sentences: [
            { text: "Second, however, student interests cannot be the only thing that shapes a course.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Young learners often do not yet know which skills will matter most in their later lives.", fn: "Explanation" },
            { text: "Consider a class that would gladly skip difficult writing or mathematics that it will later badly need.", fn: "Example" },
            { text: "Following interest alone in such cases would leave dangerous gaps in students' knowledge.", fn: "Explain why it matters" },
            { text: "Educators have the experience to see the whole journey of learning that students cannot yet see.", fn: "Develop the point" },
            { text: "Some essential subjects become interesting only after the hard early stages are passed.", fn: "One more layer" },
            { text: "Interests, then, should guide a course without ever fully controlling it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, educators are right to take students' interests into account when planning lessons.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they must still ensure that students learn what they truly need for the future.", fn: "Synthesis" },
            { text: "The best teaching joins genuine student interest with the steady guidance only an educator can give.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that leisure is a worthy benefit, then argues it should not be technology's primary goal; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "New machines and tools constantly promise to save us time and effort.", fn: "Hook" },
            { text: "Some people argue that the primary goal of technological advancement should be to increase efficiency so that people have more leisure time.", fn: "Restate the prompt" },
            { text: "I agree that more leisure is a worthy benefit, but I do not believe it should be the primary goal of technology.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why leisure is a real benefit",
          sentences: [
            { text: "First, using technology to free people for leisure is genuinely valuable.", fn: "Topic sentence", moves: ["First"] },
            { text: "Machines that handle dull or exhausting work can give people more time to rest and enjoy life.", fn: "Explanation" },
            { text: "For example, washing machines and dishwashers have freed countless hours once lost to household chores.", fn: "Example" },
            { text: "This shows that efficiency can improve daily life by leaving more room for family and relaxation.", fn: "Explain why it matters", vocab: [{ term: "efficiency", gloss: "效率" }] },
            { text: "People with more leisure can pursue hobbies, friendships, and interests that make life richer.", fn: "Develop the point" },
            { text: "Rest and free time are also important for health and happiness, not mere luxuries.", fn: "One more layer" },
            { text: "To this extent, increasing leisure is a worthy aim for technology.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it should not be the primary goal",
          sentences: [
            { text: "Second, however, leisure should not be the single most important goal of technology.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Many of the greatest advances aim at saving lives, curing disease, or spreading knowledge.", fn: "Explanation" },
            { text: "Consider medical technology that heals the sick or clean-water systems that protect whole populations.", fn: "Example" },
            { text: "Such achievements matter far more than simply giving people extra free time.", fn: "Explain why it matters" },
            { text: "Technology also connects people, expands education, and helps solve dangers like hunger and pollution.", fn: "Develop the point" },
            { text: "Treating leisure as the chief goal would ignore these deeper and more urgent purposes.", fn: "One more layer" },
            { text: "Efficiency, then, is only one of the many good ends technology should serve.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, using technology to give people more leisure is a real and worthwhile benefit.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it is only one goal among many, and far from the most important.", fn: "Synthesis" },
            { text: "The truest aim of technology is to improve human life as a whole, not merely to provide free time.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): a recommendation response that values testing understanding while arguing facts remain essential; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Students can sometimes memorise many facts without truly understanding any of them.", fn: "Hook" },
            { text: "Some people recommend that educators should assess students not on their grasp of facts but on their ability to explain the ideas and concepts behind them.", fn: "Restate the prompt" },
            { text: "I agree that understanding matters most, but I believe facts and ideas must both be part of any fair assessment.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why understanding reveals more",
          sentences: [
            { text: "First, judging students by their understanding reveals far more than testing facts alone.", fn: "Topic sentence", moves: ["First"] },
            { text: "Someone who can explain why something happens shows real and lasting knowledge.", fn: "Explanation" },
            { text: "For example, a learner who explains why the seasons change understands more than one who only names them.", fn: "Example" },
            { text: "This shows that the ability to explain ideas is a deeper sign of genuine learning.", fn: "Explain why it matters" },
            { text: "Tests of pure memory often reward cramming that students forget within days.", fn: "Develop the point" },
            { text: "Assessing understanding also encourages students to think rather than merely repeat.", fn: "One more layer", vocab: [{ term: "comprehension", gloss: "理解" }] },
            { text: "To this extent, the recommendation rightly values comprehension over memorised facts.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why facts are still needed",
          sentences: [
            { text: "Second, however, ideas cannot truly be understood or explained without some facts to build on.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A student cannot explain a historical event without first knowing the basic facts of what happened.", fn: "Explanation" },
            { text: "Consider a science learner who must know certain facts before she can explain any larger theory.", fn: "Example" },
            { text: "Such cases show that facts and understanding depend on each other and cannot be separated.", fn: "Explain why it matters" },
            { text: "Ignoring facts entirely could leave students confident but mistaken about what is actually true.", fn: "Develop the point" },
            { text: "Good assessment, therefore, should test both what students know and how well they understand it.", fn: "One more layer" },
            { text: "Facts and ideas, then, belong together in any fair test.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, assessing students on their understanding is wiser than testing facts alone.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But facts cannot be ignored, since ideas can only be explained on a base of real knowledge.", fn: "Synthesis" },
            { text: "The best assessment measures both the facts students know and the understanding they can show.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that image often dominates today, then argues truth still matters and reasserts itself; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Advertising, politics, and social media all spend enormous effort on appearances.", fn: "Hook" },
            { text: "Some people argue that in contemporary society, creating an appealing image has become more important than the truth behind it.", fn: "Restate the prompt" },
            { text: "I agree that image often seems to dominate today, but I believe truth still matters deeply in the end.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why image often dominates",
          sentences: [
            { text: "First, it is true that image frequently seems to matter more than reality today.", fn: "Topic sentence", moves: ["First"] },
            { text: "People and companies often spend more on looking good than on actually being good.", fn: "Explanation" },
            { text: "For example, a product with clever advertising can outsell a better but less glamorous rival.", fn: "Example" },
            { text: "This shows that a polished image can shape opinions more powerfully than the plain truth.", fn: "Explain why it matters" },
            { text: "Politicians, too, are sometimes judged by their style rather than their actual record.", fn: "Develop the point" },
            { text: "In a world of fast media, a striking image can spread before the truth is even known.", fn: "One more layer" },
            { text: "To this extent, the statement captures a real feature of modern life.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why truth still reasserts itself",
          sentences: [
            { text: "Second, however, the truth behind an image still matters and usually reasserts itself.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A false image may impress people briefly, but reality eventually breaks through.", fn: "Explanation" },
            { text: "Consider a company that sells a poor product through clever marketing and quickly loses its customers.", fn: "Example" },
            { text: "Such failures show that image alone cannot survive once the truth becomes clear.", fn: "Explain why it matters" },
            { text: "Lies and empty appearances tend to collapse the moment they are tested against the facts.", fn: "Develop the point" },
            { text: "Lasting trust and success, in the end, depend on substance rather than mere appearance.", fn: "One more layer", vocab: [{ term: "substance", gloss: "實質；本質" }] },
            { text: "Truth, then, remains more powerful than image over the long run.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, creating an appealing image does carry great weight in today's society.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But truth still matters deeply, since false images rarely survive close examination.", fn: "Synthesis" },
            { text: "Image may win the moment, yet in the long run it is the truth that endures.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a claim response that largely accepts well-being as the measure of leadership while noting other measures; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We naturally judge leaders by what their leadership actually does for ordinary people.", fn: "Hook" },
            { text: "Some people claim that the effectiveness of a country's leaders is best measured by the well-being of its citizens.", fn: "Restate the prompt" },
            { text: "I largely agree with this claim, though I believe a few other measures of leadership also matter.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why well-being is the key measure",
          sentences: [
            { text: "First, the well-being of citizens is indeed the clearest sign of effective leadership.", fn: "Topic sentence", moves: ["First"] },
            { text: "Leaders exist to serve their people, so the condition of those people reveals how well they have led.", fn: "Explanation" },
            { text: "For example, a government that improves health, safety, and jobs has plainly done its work well.", fn: "Example" },
            { text: "This shows that the lives of ordinary people are a fair and direct test of leadership.", fn: "Explain why it matters" },
            { text: "Grand speeches mean little if the people of a nation continue to suffer.", fn: "Develop the point" },
            { text: "Judging leaders by results keeps them focused on the needs of those they serve.", fn: "One more layer" },
            { text: "For these reasons, citizens' well-being is a powerful measure of effective leadership.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why other measures matter too",
          sentences: [
            { text: "Second, however, well-being alone does not capture everything about effective leadership.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some leaders inherit disasters and improve them slowly, even while their people still struggle.", fn: "Explanation" },
            { text: "Consider a leader who guides a nation wisely through a war whose hardships no one could have avoided.", fn: "Example" },
            { text: "Such cases show that short-term well-being can be an unfair measure of a leader's true skill.", fn: "Explain why it matters" },
            { text: "Effective leadership also includes protecting freedom, justice, and the long-term future of a nation.", fn: "Develop the point" },
            { text: "A leader who raises living standards by crushing all liberty has not truly led well.", fn: "One more layer", vocab: [{ term: "liberty", gloss: "自由" }] },
            { text: "Well-being, then, is the best single measure but not the only one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the well-being of citizens is the strongest measure of a leader's effectiveness.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it must be weighed alongside justice, freedom, and the challenges a leader inherits.", fn: "Synthesis" },
            { text: "We judge leaders best by how well their people live, while remembering all that good leadership requires.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a claim response that backs a shared core curriculum while arguing against complete sameness; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Schools across a country can teach in very different ways, for better or worse.", fn: "Hook" },
            { text: "Some people claim that a nation should require all of its students to study the same national curriculum until they enter college.", fn: "Restate the prompt" },
            { text: "I agree that a shared core of learning is valuable, but I believe forcing complete sameness would also do harm.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why a common curriculum helps",
          sentences: [
            { text: "First, a shared national curriculum brings real and important benefits.", fn: "Topic sentence", vocab: [{ term: "curriculum", gloss: "課程；課程綱要" }], moves: ["First"] },
            { text: "It ensures that every child, rich or poor, learns the basic skills and knowledge they will need.", fn: "Explanation" },
            { text: "For example, a common standard means a student who moves to a new city is not left behind.", fn: "Example" },
            { text: "This shows that a shared curriculum can promote fairness and equal opportunity.", fn: "Explain why it matters" },
            { text: "A common body of knowledge also helps citizens understand one another and their shared history.", fn: "Develop the point" },
            { text: "Such unity can strengthen a nation by giving its people a foundation in common.", fn: "One more layer" },
            { text: "To this extent, the claim rests on sound and fair reasons.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why complete sameness harms",
          sentences: [
            { text: "Second, however, requiring complete sameness in every subject would also cause problems.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students differ widely in their talents, interests, and the pace at which they learn.", fn: "Explanation" },
            { text: "Consider a gifted young artist or engineer forced to follow exactly the same path as everyone else.", fn: "Example" },
            { text: "Such rigidity could waste talent and crush the curiosity that makes learning come alive.", fn: "Explain why it matters" },
            { text: "A single fixed curriculum may also ignore the different needs of different regions and communities.", fn: "Develop the point" },
            { text: "Too much sameness can leave little room for creativity, choice, or local knowledge.", fn: "One more layer" },
            { text: "A shared core, then, works best when it still allows some variety and choice.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a common national curriculum can promote fairness and a shared foundation.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But forcing complete sameness would ignore the real differences among students and communities.", fn: "Synthesis" },
            { text: "The wisest system shares a strong core of learning while leaving room for variety and choice.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a policy response that backs informing students about jobs while arguing against actively pushing them; two developed examples weighing consequences, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Choosing a field of study shapes much of a young person's future.", fn: "Hook" },
            { text: "One proposed policy is that educational institutions should actively encourage students to choose fields in which jobs are plentiful.", fn: "Restate the prompt" },
            { text: "I agree that schools should inform students about job prospects, but I believe actively pushing them toward certain fields would do harm.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why informing students helps",
          sentences: [
            { text: "First, helping students consider where jobs are plentiful is genuinely useful.", fn: "Topic sentence", moves: ["First"] },
            { text: "Young people often choose a field without knowing whether they can find work afterward.", fn: "Explanation" },
            { text: "For example, a student warned that a field has very few jobs can plan more wisely and avoid heavy debt.", fn: "Example" },
            { text: "This shows that honest information about employment can protect students from painful mistakes.", fn: "Explain why it matters" },
            { text: "Schools that share clear facts about careers help students make informed and realistic choices.", fn: "Develop the point" },
            { text: "Knowing the job market can also reduce the anxiety of facing the future blindly.", fn: "One more layer", vocab: [{ term: "prospects", gloss: "前景；前途" }] },
            { text: "To this extent, guiding students toward good prospects is a sensible policy.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why actively pushing backfires",
          sentences: [
            { text: "Second, however, actively pushing students into certain fields could backfire badly.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students forced toward popular careers may end up bored, unhappy, and unsuccessful.", fn: "Explanation" },
            { text: "Consider a gifted artist steered into business who performs poorly and abandons the field entirely.", fn: "Example" },
            { text: "Such outcomes show that ignoring talent and interest wastes both potential and money.", fn: "Explain why it matters" },
            { text: "Job markets also change quickly, so a field that is full today may be crowded tomorrow.", fn: "Develop the point" },
            { text: "Pushing everyone toward the same fields could even flood them and leave many without work.", fn: "One more layer" },
            { text: "Guidance, then, should inform students rather than pressure them into a narrow set of choices.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, schools are right to tell students honestly where jobs are plentiful.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But actively pushing them into those fields would ignore talent, interest, and a changing market.", fn: "Synthesis" },
            { text: "The wiser policy is to inform and advise students while leaving the final choice to them.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that outside forces shape behaviour, then argues personal choice still matters; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We are all born into a family, a place, and a time that we did not choose.", fn: "Hook" },
            { text: "Some people claim that people's behaviour is largely determined by forces not of their own making.", fn: "Restate the prompt" },
            { text: "I agree that outside forces shape us powerfully, but I believe our own choices still play a vital part.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How outside forces shape us",
          sentences: [
            { text: "First, much of our behaviour really is shaped by forces beyond our control.", fn: "Topic sentence", moves: ["First"] },
            { text: "Our family, culture, and upbringing teach us how to act long before we can choose for ourselves.", fn: "Explanation" },
            { text: "For example, a child raised amid violence may grow up treating aggression as normal.", fn: "Example" },
            { text: "This shows that circumstances can deeply influence how a person comes to behave.", fn: "Explain why it matters", vocab: [{ term: "circumstances", gloss: "環境；處境" }] },
            { text: "Poverty, education, and the people around us all push our behaviour in powerful directions.", fn: "Develop the point" },
            { text: "Even our genes and health can shape our moods and choices in ways we never decided.", fn: "One more layer" },
            { text: "To this extent, the claim points to a real and important truth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why choice still matters",
          sentences: [
            { text: "Second, however, our own choices still shape our behaviour in crucial ways.", fn: "Topic sentence", moves: ["Second"] },
            { text: "People raised in the very same hard conditions often make strikingly different choices.", fn: "Explanation" },
            { text: "Consider two children from the same troubled home, where one turns to crime and the other to helping others.", fn: "Example" },
            { text: "Such differences show that human beings are not simply puppets of their circumstances.", fn: "Explain why it matters" },
            { text: "We can reflect on our situation, resist bad influences, and decide to change our path.", fn: "Develop the point" },
            { text: "Holding people responsible for their actions only makes sense because they truly can choose.", fn: "One more layer" },
            { text: "Free choice, then, works alongside outside forces rather than being erased by them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, forces beyond our control do shape much of our behaviour.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But our own choices still matter, since people in the same conditions often act very differently.", fn: "Synthesis" },
            { text: "Our behaviour is best understood as the meeting of outside forces and personal choice.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that classroom technology can distract, then argues it also greatly aids learning; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Screens are now part of almost every classroom around the world.", fn: "Hook" },
            { text: "Some people argue that technologies like video, computers, and the internet too often distract students from real learning.", fn: "Restate the prompt" },
            { text: "I agree that these tools can distract, but I believe they also help learning greatly when they are used well.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How technology can distract",
          sentences: [
            { text: "First, it is true that classroom technology can easily distract students.", fn: "Topic sentence", moves: ["First"] },
            { text: "A device meant for study can quickly become a doorway to games, videos, and social media.", fn: "Explanation" },
            { text: "For example, a student with a laptop may drift into browsing instead of following the lesson.", fn: "Example" },
            { text: "This shows that technology can pull attention away from the very learning it was meant to support.", fn: "Explain why it matters" },
            { text: "Endless notifications and entertainment make deep concentration harder than ever.", fn: "Develop the point", vocab: [{ term: "concentration", gloss: "專注力" }] },
            { text: "Used carelessly, these tools can leave students busy but learning very little.", fn: "One more layer" },
            { text: "To this extent, the warning in the statement is well founded.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — How technology aids learning",
          sentences: [
            { text: "Second, however, these same technologies can powerfully support real learning.", fn: "Topic sentence", moves: ["Second"] },
            { text: "The internet gives students instant access to information that once took days to find.", fn: "Explanation" },
            { text: "Consider how a video can make a difficult idea clear in minutes, or how online lessons reach distant students.", fn: "Example" },
            { text: "Such tools show that technology can open doors to learning that were once firmly shut.", fn: "Explain why it matters" },
            { text: "Computers also let students practise, explore, and learn at their own pace.", fn: "Develop the point" },
            { text: "The problem lies not in the tools themselves but in how carelessly they are sometimes used.", fn: "One more layer" },
            { text: "Technology, then, can either harm or help, depending entirely on how it is handled.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, classroom technology can indeed distract students from real learning.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the same tools can deepen and widen learning when they are used with care.", fn: "Synthesis" },
            { text: "Whether technology helps or harms depends far less on the tools than on how wisely we use them.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that passion for ordinary things sparks ideas, then argues great ideas also come from rare problems; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Some of the greatest inventions began with someone wondering about an everyday thing.", fn: "Hook" },
            { text: "Some people argue that the best ideas arise from a passionate interest in commonplace things.", fn: "Restate the prompt" },
            { text: "I agree that passion for ordinary things often sparks great ideas, but I do not believe this is their only source.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why everyday passion sparks ideas",
          sentences: [
            { text: "First, a deep interest in ordinary things really can lead to remarkable ideas.", fn: "Topic sentence", moves: ["First"] },
            { text: "People who study everyday objects closely often notice what others overlook.", fn: "Explanation" },
            { text: "For example, the simple sight of an apple falling is said to have led Newton toward the idea of gravity.", fn: "Example" },
            { text: "This shows that great discoveries can grow from curiosity about the most common things.", fn: "Explain why it matters" },
            { text: "Everyday problems, such as how to keep food fresh, have inspired countless useful inventions.", fn: "Develop the point" },
            { text: "Passion turns ordinary curiosity into the patient effort that real discovery demands.", fn: "One more layer" },
            { text: "To this extent, the statement captures a genuine truth about creativity.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why rare problems matter too",
          sentences: [
            { text: "Second, however, many of the best ideas come from rare or difficult problems, not commonplace ones.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Great breakthroughs often arise from questions far removed from ordinary daily life.", fn: "Explanation" },
            { text: "Consider the abstract puzzles of mathematics or space that have reshaped how we understand the universe.", fn: "Example", vocab: [{ term: "abstract", gloss: "抽象的" }] },
            { text: "Such ideas show that passion can attach to the unusual and the abstract as well as the everyday.", fn: "Explain why it matters" },
            { text: "Some discoveries also come from teamwork, accident, or careful study rather than a single personal interest.", fn: "Develop the point" },
            { text: "What matters most is genuine passion, whatever its subject happens to be.", fn: "One more layer" },
            { text: "Great ideas, then, can spring from the rare just as easily as from the commonplace.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a passionate interest in everyday things truly can produce wonderful ideas.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the best ideas also arise from rare problems, abstract questions, and many other sources.", fn: "Synthesis" },
            { text: "What unites great ideas is not commonplace subject matter but the passion behind the search.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that ethics matter for leadership, then argues 'highest' is too strict since skill matters too; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We hope that the people who lead us are honest as well as capable.", fn: "Hook" },
            { text: "Some people claim that to be an effective leader, a public official must maintain the highest ethical and moral standards.", fn: "Restate the prompt" },
            { text: "I agree that good character matters greatly in a leader, but I believe the word highest sets too strict a test.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why ethics matter for leadership",
          sentences: [
            { text: "First, strong moral standards genuinely help a leader to be effective.", fn: "Topic sentence", moves: ["First"] },
            { text: "Leaders whom people trust can unite them, win cooperation, and inspire honest effort.", fn: "Explanation" },
            { text: "For example, an official known for fairness and honesty is far more likely to be believed and followed.", fn: "Example" },
            { text: "This shows that good character builds the trust on which effective leadership depends.", fn: "Explain why it matters" },
            { text: "A dishonest leader, by contrast, soon loses the loyalty and respect of the people.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Ethical conduct also sets an example that can raise the standards of a whole society.", fn: "One more layer", vocab: [{ term: "ethical", gloss: "道德的；倫理的" }] },
            { text: "To this extent, the claim rightly values morality in leadership.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why 'highest' is too strict",
          sentences: [
            { text: "Second, however, demanding the highest possible standards may be too strict to be useful.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Every human being has flaws, so a perfect leader has almost never existed.", fn: "Explanation" },
            { text: "Consider leaders with personal failings who still governed wisely and improved millions of lives.", fn: "Example" },
            { text: "Such cases show that effectiveness depends on skill and judgment as well as on character.", fn: "Explain why it matters" },
            { text: "A leader of flawless morals but poor ability could still govern badly and fail the people.", fn: "Develop the point" },
            { text: "Insisting on perfection might even rule out capable leaders for small, forgivable faults.", fn: "One more layer" },
            { text: "High standards, then, matter, but they are not the whole of effective leadership.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, strong ethics are a vital part of being an effective leader.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But demanding the very highest standards ignores that skill and judgment matter too.", fn: "Synthesis" },
            { text: "The best leaders combine sound character with the genuine ability to govern well.", fn: "Final judgment" },
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
        "Strong-adequate (4.5): grants that fresh imagination can outrun fixed habits, then argues experience is equally vital; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We often admire fresh, imaginative people while also trusting those with years of experience.", fn: "Hook" },
            { text: "One claim holds that imagination is more valuable than experience, on the reason that inexperienced people are free to imagine what is possible without old habits holding them back.", fn: "Restate the prompt" },
            { text: "I agree that imagination is precious, but I disagree that it is generally more valuable than experience.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The truth in the reason",
          sentences: [
            { text: "First, there is real truth in the reason behind the claim.", fn: "Topic sentence", moves: ["First"] },
            { text: "People without experience are sometimes free to imagine bold ideas that experts quickly dismiss.", fn: "Explanation" },
            { text: "For example, a newcomer may suggest a fresh solution simply because she does not know it is supposed to be impossible.", fn: "Example" },
            { text: "This shows that imagination can break through the fixed habits that experience sometimes creates.", fn: "Explain why it matters" },
            { text: "Old assumptions can blind experienced people to new and better ways of doing things.", fn: "Develop the point", vocab: [{ term: "assumptions", gloss: "假設；成見" }] },
            { text: "Imagination is what allows anyone to picture a future different from the past.", fn: "One more layer" },
            { text: "To this extent, the claim rightly values the power of a free imagination.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why experience is vital",
          sentences: [
            { text: "Second, however, experience is just as valuable as imagination, and often more so.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Experience teaches which ideas actually work and which ones quietly fail.", fn: "Explanation" },
            { text: "Consider a surgeon whose years of practice let her handle a crisis no imagination alone could solve.", fn: "Example" },
            { text: "Such skill shows that real knowledge, gained over time, can save lives and prevent disasters.", fn: "Explain why it matters" },
            { text: "Imagination without experience can produce exciting ideas that collapse the moment they are tested.", fn: "Develop the point" },
            { text: "The greatest results usually come when a vivid imagination is guided by hard-won experience.", fn: "One more layer" },
            { text: "Experience, then, is not the enemy of imagination but its necessary partner.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, imagination is genuinely valuable and can free us from old habits.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But experience is equally vital, since it shows which imagined ideas can truly work.", fn: "Synthesis" },
            { text: "The most valuable thinkers combine a bold imagination with the wisdom that only experience provides.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that imagination is essential, then argues knowledge is at least as important; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Einstein once suggested that imagination matters even more than knowledge.", fn: "Hook" },
            { text: "Some people argue that in most professions and fields, imagination is more important than knowledge.", fn: "Restate the prompt" },
            { text: "I agree that imagination is essential, but I believe it is rarely more important than knowledge in most fields.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why imagination is vital",
          sentences: [
            { text: "First, imagination is clearly essential to progress in nearly every field.", fn: "Topic sentence", moves: ["First"] },
            { text: "It is imagination that lets people picture new ideas, designs, and solutions.", fn: "Explanation" },
            { text: "For example, a scientist must first imagine a possibility before she can ever test it.", fn: "Example" },
            { text: "This shows that without imagination, knowledge alone would simply repeat what is already known.", fn: "Explain why it matters" },
            { text: "Artists, inventors, and engineers all depend on the power to imagine what does not yet exist.", fn: "Develop the point" },
            { text: "Imagination is what turns familiar facts into genuinely new creations.", fn: "One more layer" },
            { text: "To this extent, imagination truly is a precious and necessary gift.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why knowledge is equally important",
          sentences: [
            { text: "Second, however, imagination is rarely more important than the knowledge that supports it.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Without knowledge, imagined ideas are often impossible, useless, or even dangerous.", fn: "Explanation" },
            { text: "Consider an engineer who imagines a beautiful bridge but lacks the knowledge to keep it from collapsing.", fn: "Example" },
            { text: "Such cases show that imagination without knowledge can fail badly in the real world.", fn: "Explain why it matters" },
            { text: "In most professions, deep knowledge is exactly what makes an imagined idea actually work.", fn: "Develop the point" },
            { text: "Doctors, lawyers, and builders rely above all on knowledge that must be accurate and complete.", fn: "One more layer", vocab: [{ term: "accurate", gloss: "準確的" }] },
            { text: "Imagination and knowledge, then, are partners, with neither simply more important than the other.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, imagination is essential and gives knowledge its purpose and direction.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But in most fields, knowledge is just as important, since it turns imagined ideas into reality.", fn: "Synthesis" },
            { text: "The best work in any field comes from imagination and knowledge working closely together.", fn: "Final judgment" },
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
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the weight of expert judgment, then argues non-experts offer valuable criticism too; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "When a film or a book is reviewed, we often ask whether the critic really knows the subject.", fn: "Hook" },
            { text: "Some people argue that critical judgment of work in any field has little value unless it comes from an expert in that field.", fn: "Restate the prompt" },
            { text: "I agree that expert judgment carries special weight, but I believe non-experts can also offer valuable criticism.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why expert judgment carries weight",
          sentences: [
            { text: "First, judgment from a true expert often does carry the greatest weight.", fn: "Topic sentence", moves: ["First"] },
            { text: "An expert understands the deep rules and history of a field that outsiders may miss entirely.", fn: "Explanation" },
            { text: "For example, a trained musician can hear subtle mistakes in a performance that most listeners never notice.", fn: "Example", vocab: [{ term: "subtle", gloss: "微妙的；不易察覺的" }] },
            { text: "This shows that expert knowledge can reveal qualities and flaws hidden from ordinary view.", fn: "Explain why it matters" },
            { text: "Experts can also compare a new work fairly against the best that has come before.", fn: "Develop the point" },
            { text: "Their judgment is harder to fool with mere tricks or surface appeal.", fn: "One more layer" },
            { text: "To this extent, expert criticism is genuinely valuable.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why non-experts matter too",
          sentences: [
            { text: "Second, however, valuable judgment can also come from people who are not experts.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Ordinary audiences, after all, are the very people most art and work is created to serve.", fn: "Explanation" },
            { text: "Consider how the lasting popularity of a film with everyday viewers can reveal a worth critics missed.", fn: "Example" },
            { text: "Such reactions show that non-experts often sense honestly what truly moves or helps people.", fn: "Explain why it matters" },
            { text: "Fresh eyes can also notice problems that experts, lost in detail, have stopped seeing.", fn: "Develop the point" },
            { text: "A customer's plain opinion of a product can be as useful as any expert's report.", fn: "One more layer" },
            { text: "Useful judgment, then, is not limited to experts alone.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, expert criticism deserves special respect for its depth and knowledge.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the honest reactions of ordinary people also carry real and useful value.", fn: "Synthesis" },
            { text: "The wisest view weighs both expert judgment and the voice of those a work is meant to serve.", fn: "Final judgment" },
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
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response holding that science deepens both understanding and our sense of complexity; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every new scientific answer seems to bring both clarity and fresh mystery.", fn: "Hook" },
            { text: "Some believe science has given us a much better understanding of the world, while others believe it has revealed how infinitely complex the world really is.", fn: "Restate the prompt" },
            { text: "I believe both views are true, and that science deepens our understanding and our sense of complexity at the same time.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How science gives understanding",
          sentences: [
            { text: "First, science has clearly given us a far better understanding of the world.", fn: "Topic sentence", moves: ["First"] },
            { text: "Things once seen as mysteries, like disease and weather, now have clear explanations.", fn: "Explanation" },
            { text: "For example, we now understand that illness comes from germs rather than from curses or bad air.", fn: "Example" },
            { text: "This shows that science has replaced confusion and fear with real, reliable knowledge.", fn: "Explain why it matters" },
            { text: "Such understanding has let us cure illness, predict storms, and travel into space.", fn: "Develop the point" },
            { text: "We grasp far more about how the world works than any earlier generation did.", fn: "One more layer" },
            { text: "In this sense, the first view is plainly correct.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — How science reveals complexity",
          sentences: [
            { text: "Second, however, the more science learns, the more complex the world appears.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Each discovery tends to reveal deeper layers and harder questions beneath it.", fn: "Explanation" },
            { text: "Consider how studying the atom uncovered a strange quantum world that still puzzles the experts.", fn: "Example", vocab: [{ term: "quantum", gloss: "量子（物理）" }] },
            { text: "Such findings show that science can expand mystery even as it expands knowledge.", fn: "Explain why it matters" },
            { text: "Fields like biology and the universe turn out to be far more intricate than people once believed.", fn: "Develop the point" },
            { text: "Every answer, in other words, seems to open the door to new and harder questions.", fn: "One more layer" },
            { text: "The second view, then, is just as true as the first.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, science has genuinely given us a clearer understanding of the world.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it has also revealed how endlessly complex that world really is.", fn: "Synthesis" },
            { text: "Science deepens both our knowledge and our wonder, and that is the true mark of discovery.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-076",
    type: "issue",
    category: "Education",
    prompt:
      "In any profession — business, politics, education, government — those in power should step down after five years.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a claim response that backs limits on power while arguing a strict five-year rule is too rigid; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "History warns us how dangerous it is when one person holds power for too long.", fn: "Hook" },
            { text: "Some people claim that those in power, in any profession, should step down after five years.", fn: "Restate the prompt" },
            { text: "I agree that limiting time in power can be healthy, but I believe a strict five-year rule would also cause harm.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why limits prevent abuse",
          sentences: [
            { text: "First, limiting how long people hold power can prevent serious abuse.", fn: "Topic sentence", moves: ["First"] },
            { text: "Leaders who stay too long may grow arrogant and stop listening to anyone around them.", fn: "Explanation" },
            { text: "For example, rulers who cling to power for decades often become corrupt and difficult to remove.", fn: "Example", vocab: [{ term: "corrupt", gloss: "腐敗的" }] },
            { text: "This shows that regular change can protect an organisation from one person's worst faults.", fn: "Explain why it matters" },
            { text: "Fresh leaders also bring new ideas and energy that long rule tends to drain away.", fn: "Develop the point" },
            { text: "Knowing their time is limited can keep those in power humble and focused.", fn: "One more layer" },
            { text: "To this extent, limiting time in power is a sensible idea.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why a rigid rule is too strict",
          sentences: [
            { text: "Second, however, forcing everyone to step down after exactly five years would be too rigid.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some roles require many years of experience before a person can perform them really well.", fn: "Explanation" },
            { text: "Consider a skilled leader removed just as she has finally mastered a difficult and complex job.", fn: "Example" },
            { text: "Such a rule would throw away valuable experience at the very moment it becomes most useful.", fn: "Explain why it matters" },
            { text: "A fixed limit also ignores that some leaders keep serving honestly and effectively for far longer.", fn: "Develop the point" },
            { text: "Constant forced change can leave an organisation unstable and always starting over.", fn: "One more layer" },
            { text: "Limits on power, then, work best when they are sensible rather than rigidly fixed.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, limiting time in power can guard against arrogance and abuse.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a strict five-year rule for everyone would waste experience and create instability.", fn: "Synthesis" },
            { text: "The wiser approach sets fair limits on power without forcing out every leader at the same fixed moment.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-077",
    type: "issue",
    category: "Education",
    prompt:
      "Requiring university students to take a variety of courses outside their major fields of study is the best way to ensure that students become truly educated.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that breadth helps, then argues it is not the single best way to educate; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Universities often debate how to turn students into genuinely educated people.", fn: "Hook" },
            { text: "Some people argue that requiring students to take courses outside their major is the best way to ensure they become truly educated.", fn: "Restate the prompt" },
            { text: "I agree that such breadth helps, but I do not believe it is the single best way to educate a student.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why breadth helps",
          sentences: [
            { text: "First, studying outside one's major genuinely broadens a student's mind.", fn: "Topic sentence", moves: ["First"] },
            { text: "Learning across several fields helps students connect ideas and see the world more fully.", fn: "Explanation" },
            { text: "For example, a science student who studies ethics may think more wisely about how her work affects people.", fn: "Example" },
            { text: "This shows that variety can make a student more thoughtful and well-rounded.", fn: "Explain why it matters", vocab: [{ term: "well-rounded", gloss: "全面發展的" }] },
            { text: "Such breadth builds flexible skills, like reasoning and writing, that are useful in any career.", fn: "Develop the point" },
            { text: "Students also discover unexpected interests through subjects they would never have chosen alone.", fn: "One more layer" },
            { text: "To this extent, requiring some breadth clearly helps students grow.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it is not the best way",
          sentences: [
            { text: "Second, however, calling breadth the best way to ensure a true education claims too much.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Real education depends just as much on the depth and quality of what is taught.", fn: "Explanation" },
            { text: "Consider a student who takes many varied courses but learns each one only shallowly.", fn: "Example" },
            { text: "Such a scattered education can leave a student knowing a little about much and a lot about nothing.", fn: "Explain why it matters" },
            { text: "Great teaching, curiosity, and the habit of questioning matter at least as much as variety.", fn: "Develop the point" },
            { text: "A deep mastery of one field can also make a person truly educated in important ways.", fn: "One more layer" },
            { text: "Breadth, then, is one valuable path to education but certainly not the only or best one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, studying outside one's major does help make students well-rounded.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it is only one part of a true education, not the single best way to achieve it.", fn: "Synthesis" },
            { text: "Students become truly educated through depth, good teaching, and curiosity as much as through breadth.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-078",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: The surest indicator of a great nation is not the achievements of its rulers, artists, or scientists. Reason: The surest indicator of a great nation is actually the welfare of all its people.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): agrees that welfare is the surest indicator while arguing achievements still matter; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Nations are often remembered for their famous leaders, artists, and scientists.", fn: "Hook" },
            { text: "One claim holds that the surest indicator of a great nation is not these achievements, on the reason that it is really the welfare of all its people.", fn: "Restate the prompt" },
            { text: "I largely agree that welfare is the truest measure, but I believe great achievements still matter as part of it.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why welfare is the surest indicator",
          sentences: [
            { text: "First, the reason behind the claim is sound, because the welfare of the people is the clearest test of greatness.", fn: "Topic sentence", vocab: [{ term: "welfare", gloss: "福祉；福利" }], moves: ["First"] },
            { text: "A nation may boast brilliant achievements while most of its citizens remain poor and powerless.", fn: "Explanation" },
            { text: "For example, a country with famous monuments but starving people has failed at its most basic duty.", fn: "Example" },
            { text: "This shows that achievements mean little if the ordinary people do not live decent lives.", fn: "Explain why it matters" },
            { text: "Widespread health, safety, and opportunity touch everyone, not just a gifted few.", fn: "Develop the point" },
            { text: "Any nation that cares for all its people has fulfilled its deepest purpose.", fn: "One more layer" },
            { text: "To this extent, the reason rightly points to welfare as the surest indicator.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why achievements still matter",
          sentences: [
            { text: "Second, however, the claim goes too far in dismissing achievements entirely.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Great discoveries and works of art often improve the welfare of the people themselves.", fn: "Explanation" },
            { text: "Consider how medical research lengthens ordinary lives or how great art enriches a whole culture.", fn: "Example" },
            { text: "Such achievements are often a cause of welfare rather than something separate from it.", fn: "Explain why it matters" },
            { text: "Countries that value learning and creativity tend to grow healthier and wealthier as well.", fn: "Develop the point" },
            { text: "Achievements can also give a people pride and a shared sense of who they are.", fn: "One more layer" },
            { text: "Welfare and achievement, then, support each other rather than standing apart.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I agree that the welfare of the people is the truest measure of a great nation.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But great achievements should not be dismissed, since they often raise that very welfare.", fn: "Synthesis" },
            { text: "Greatness belongs to the nation that turns its achievements toward the good of all its people.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-079",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Any leader who is quickly and easily influenced by shifts in popular opinion will accomplish little.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): agrees that easily-swayed leaders accomplish little while arguing that listening can be a strength; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Leaders who change course with every shift in the public mood can seem to have no direction at all.", fn: "Hook" },
            { text: "Some people argue that any leader easily influenced by shifts in popular opinion will accomplish little.", fn: "Restate the prompt" },
            { text: "I largely agree that leaders need firmness, but I believe listening to public opinion is not always a weakness.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why easily-swayed leaders fail",
          sentences: [
            { text: "First, a leader who follows every change in opinion usually achieves very little.", fn: "Topic sentence", moves: ["First"] },
            { text: "Real goals take time, and a leader who keeps reversing course never finishes anything.", fn: "Explanation" },
            { text: "For example, a leader who abandons a good plan at the first complaint will leave it half done.", fn: "Example" },
            { text: "This shows that constant changing weakens both progress and public trust.", fn: "Explain why it matters" },
            { text: "People also lose respect for a leader who seems to have no firm beliefs of her own.", fn: "Develop the point" },
            { text: "Difficult but necessary decisions are often unpopular at first and require steady courage.", fn: "One more layer" },
            { text: "To this extent, the statement rightly warns against leaders who simply follow the crowd.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why listening can be a strength",
          sentences: [
            { text: "Second, however, paying attention to public opinion is not always a weakness.", fn: "Topic sentence", moves: ["Second"] },
            { text: "In a democracy, a leader is meant to listen to and represent the people.", fn: "Explanation" },
            { text: "Consider a leader who wisely changes a harmful policy after the public points out its real dangers.", fn: "Example" },
            { text: "Such flexibility shows good judgment rather than weakness or lack of direction.", fn: "Explain why it matters", vocab: [{ term: "flexibility", gloss: "靈活性；變通" }] },
            { text: "A leader who ignores all opinion can become as harmful as one who follows it blindly.", fn: "Develop the point" },
            { text: "The skill lies in knowing when to stand firm and when to listen and adjust.", fn: "One more layer" },
            { text: "Responding to opinion, then, is not always a failing but can be a strength.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a leader swayed by every shift in opinion will indeed accomplish little.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But wisely listening to the public can be a real strength rather than a weakness.", fn: "Synthesis" },
            { text: "The best leaders hold firm to their goals while still listening carefully to the people they serve.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-080",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Government officials should rely on their own judgment rather than unquestioningly carry out the will of the people whom they serve.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): backs independent judgment while insisting officials respect the public will; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Citizens elect officials to serve them, yet also trust those officials to think for themselves.", fn: "Hook" },
            { text: "Some people argue that government officials should rely on their own judgment rather than unquestioningly carry out the will of the people they serve.", fn: "Restate the prompt" },
            { text: "I agree that officials must use their judgment, but I believe they cannot simply ignore the wishes of the public.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why judgment is needed",
          sentences: [
            { text: "First, officials often must follow their own judgment instead of public opinion alone.", fn: "Topic sentence", moves: ["First"] },
            { text: "Ordinary citizens cannot study every issue closely, while officials have access to experts and facts.", fn: "Explanation" },
            { text: "For example, a brief public panic might call for a harmful policy that a careful leader knows to avoid.", fn: "Example" },
            { text: "This shows that wise judgment can protect a nation from its own passing fears.", fn: "Explain why it matters" },
            { text: "Officials must also sometimes defend unpopular groups whom the majority would gladly ignore.", fn: "Develop the point" },
            { text: "A leader who only follows the polls may drop every principle when the mood changes.", fn: "One more layer" },
            { text: "To this extent, independent judgment is a necessary part of leadership.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the public will must be respected",
          sentences: [
            { text: "Second, however, officials cannot simply override the will of the people they were chosen to serve.", fn: "Topic sentence", moves: ["Second"] },
            { text: "In a democracy, their power flows from the citizens and is meant to represent them.", fn: "Explanation", vocab: [{ term: "authority", gloss: "權力；權威" }] },
            { text: "Consider an official who ignores the clear and repeated wishes of the public, sure that he knows best.", fn: "Example" },
            { text: "Such arrogance can slide into a rule that no longer answers to anyone at all.", fn: "Explain why it matters" },
            { text: "Leaders who lose touch with the people also lose the trust that makes government work.", fn: "Develop the point" },
            { text: "The voice of the public, shown through votes, is a vital check on those in power.", fn: "One more layer" },
            { text: "Good officials, then, must balance their own judgment against the will of the people.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, officials should use their judgment, especially to resist panic and protect the weak.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But ignoring the will of the people would betray the purpose of democratic government.", fn: "Synthesis" },
            { text: "The wisest officials blend sound judgment with genuine respect for those they serve.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-081",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "It is primarily in cities that a nation's cultural traditions are generated and preserved.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that cities are major cultural centres, then argues tradition also lives in villages and regions; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Great cities are often filled with museums, theatres, and festivals.", fn: "Hook" },
            { text: "Some people argue that it is primarily in cities that a nation's cultural traditions are generated and preserved.", fn: "Restate the prompt" },
            { text: "I agree that cities play a major cultural role, but I do not believe traditions live primarily in cities alone.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why cities are major centres",
          sentences: [
            { text: "First, cities truly are powerful centres of cultural life.", fn: "Topic sentence", moves: ["First"] },
            { text: "They gather artists, writers, and performers together, allowing new ideas to grow and spread.", fn: "Explanation" },
            { text: "For example, great cities house the museums, libraries, and theatres that preserve a nation's art.", fn: "Example", vocab: [{ term: "preserve", gloss: "保存；保護" }] },
            { text: "This shows that cities can both create new culture and protect what already exists.", fn: "Explain why it matters" },
            { text: "The wealth and crowds of a city also support culture that smaller places cannot afford.", fn: "Develop the point" },
            { text: "Many famous movements in art and music were indeed born in busy cities.", fn: "One more layer" },
            { text: "To this extent, cities clearly play a leading cultural role.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why tradition lives beyond cities",
          sentences: [
            { text: "Second, however, much of a nation's tradition is generated and kept alive far from its cities.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Folk songs, crafts, festivals, and customs often grow and survive in villages and the countryside.", fn: "Explanation" },
            { text: "Consider how traditional food, dance, and dress are frequently preserved best in rural communities.", fn: "Example" },
            { text: "Such traditions show that culture is created and protected well beyond the city limits.", fn: "Explain why it matters" },
            { text: "Cities, in fact, often borrow and revive traditions that the countryside has quietly kept alive.", fn: "Develop the point" },
            { text: "Local regions also guard the languages and stories that give a nation its deep identity.", fn: "One more layer" },
            { text: "Cultural tradition, then, belongs to the whole nation, not mainly to its cities.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, cities are indeed important centres for creating and preserving culture.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But much tradition is generated and kept alive in villages and regions as well.", fn: "Synthesis" },
            { text: "A nation's culture lives across all its places, not primarily within its cities.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-082",
    type: "issue",
    category: "Education",
    prompt:
      "We can learn much more from people whose views we share than from people whose views contradict our own.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that like-minded people teach us something, then argues opposing views teach more; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Most of us enjoy the company of people who already think the way we do.", fn: "Hook" },
            { text: "Some people argue that we can learn much more from people whose views we share than from those whose views contradict our own.", fn: "Restate the prompt" },
            { text: "I agree that like-minded people can teach us something, but I believe we usually learn more from those who disagree.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — What shared views can teach",
          sentences: [
            { text: "First, people who share our views can certainly help us learn.", fn: "Topic sentence", moves: ["First"] },
            { text: "They can strengthen our understanding by adding fresh facts to ideas we already accept.", fn: "Explanation" },
            { text: "For example, colleagues who agree on a project can build steadily on one another's work.", fn: "Example" },
            { text: "This shows that agreement can offer a comfortable and productive place to learn.", fn: "Explain why it matters" },
            { text: "Working with allies also gives us the confidence to develop our ideas more boldly.", fn: "Develop the point" },
            { text: "Shared understanding can make hard learning feel encouraging rather than frightening.", fn: "One more layer" },
            { text: "To this extent, like-minded people do have something to teach us.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why opposing views teach more",
          sentences: [
            { text: "Second, however, we usually learn the most from people whose views oppose our own.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Those who disagree force us to defend our beliefs and to face their hidden weaknesses.", fn: "Explanation" },
            { text: "Consider how a sharp opponent can expose a flaw in our argument that no friend would mention.", fn: "Example", vocab: [{ term: "argument", gloss: "論點；論證" }] },
            { text: "Such challenges drive us to think harder and to understand a question far more deeply.", fn: "Explain why it matters" },
            { text: "People who merely agree with us, by contrast, rarely teach us anything truly new.", fn: "Develop the point", moves: ["by contrast"] },
            { text: "Facing opposing views also helps us see the world as other people genuinely see it.", fn: "One more layer" },
            { text: "Disagreement, handled with respect, is therefore one of our finest teachers.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, people who share our views can add to what we already understand.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But we usually grow more by wrestling with those who think very differently.", fn: "Synthesis" },
            { text: "The richest learning springs not from easy agreement but from honest, respectful disagreement.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-083",
    type: "issue",
    category: "Environment",
    prompt:
      "When old buildings stand on ground that modern planners feel could be better used for modern purposes, modern development should be given precedence over the preservation of historic buildings.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that development sometimes wins, then argues historic buildings deserve protection in most cases; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Cities must constantly decide whether to tear down the old or protect it.", fn: "Hook" },
            { text: "Some people argue that when old buildings stand on useful ground, modern development should take precedence over preserving them.", fn: "Restate the prompt" },
            { text: "I agree that development sometimes matters more, but I believe historic buildings deserve strong protection in most cases.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — When development should win",
          sentences: [
            { text: "First, there are real cases where modern development should come first.", fn: "Topic sentence", moves: ["First"] },
            { text: "A growing city may badly need new homes, hospitals, or transport on valuable land.", fn: "Explanation" },
            { text: "For example, replacing a crumbling, empty building with housing can help many families in real need.", fn: "Example" },
            { text: "This shows that clinging to every old structure can block progress people genuinely require.", fn: "Explain why it matters" },
            { text: "Not every old building is beautiful or historically important enough to save at any cost.", fn: "Develop the point" },
            { text: "When human needs are urgent, sensible development can be the wiser choice.", fn: "One more layer" },
            { text: "To this extent, modern development sometimes deserves to take precedence.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why preservation usually wins",
          sentences: [
            { text: "Second, however, historic buildings usually deserve protection rather than destruction.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Old buildings carry the memory, beauty, and identity of a place across the generations.", fn: "Explanation" },
            { text: "Consider a historic town centre that draws visitors and gives its people a deep sense of belonging.", fn: "Example" },
            { text: "Such places show that once a historic building is lost, it can never truly be replaced.", fn: "Explain why it matters" },
            { text: "Modern needs can often be met by building elsewhere or by restoring the old structure instead.", fn: "Develop the point" },
            { text: "A society that destroys its past too easily loses something money can never buy back.", fn: "One more layer", vocab: [{ term: "preservation", gloss: "保存；保護" }] },
            { text: "Preservation, then, should usually outweigh the simple convenience of new development.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, modern development should sometimes take precedence when human needs are urgent.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But in most cases historic buildings deserve protection for their lasting value.", fn: "Synthesis" },
            { text: "The wisest cities meet modern needs while carefully preserving the past that gives them meaning.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-084",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: The surest indicator of a great nation must be the achievements of its rulers, artists, or scientists. Reason: Great achievements by a nation's rulers, artists, or scientists will ensure a good life for the majority of that nation's people.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that achievements have value, then argues they do not ensure a good life for the majority; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A nation's famous artists and scientists can make its whole people proud.", fn: "Hook" },
            { text: "One claim holds that the surest indicator of a great nation is the achievements of its rulers, artists, or scientists, on the reason that such achievements ensure a good life for most of its people.", fn: "Restate the prompt" },
            { text: "I agree that achievements matter, but I disagree that they are the surest indicator or that they ensure a good life for the majority.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of achievements",
          sentences: [
            { text: "First, the achievements of a nation do carry real importance.", fn: "Topic sentence", moves: ["First"] },
            { text: "Great discoveries and works of art can improve lives and inspire a whole people.", fn: "Explanation" },
            { text: "For example, medical research and new technology have lengthened and eased countless ordinary lives.", fn: "Example" },
            { text: "This shows that achievements can sometimes raise the welfare of many people.", fn: "Explain why it matters" },
            { text: "Such accomplishments can also give a nation pride and a strong sense of identity.", fn: "Develop the point" },
            { text: "A country known for learning and creativity often earns respect around the world.", fn: "One more layer" },
            { text: "To this extent, the claim is not entirely wrong to value achievement.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the reason fails",
          sentences: [
            { text: "Second, however, great achievements do not actually ensure a good life for most people.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A nation can produce brilliant art and science while the majority of its people stay poor.", fn: "Explanation" },
            { text: "Consider a country with world-famous scientists whose ordinary citizens still lack food and decent work.", fn: "Example" },
            { text: "Such cases show that achievement at the top does not automatically reach those at the bottom.", fn: "Explain why it matters" },
            { text: "The welfare of all the people, not a few great works, is the truer test of national greatness.", fn: "Develop the point", vocab: [{ term: "welfare", gloss: "福祉；福利" }] },
            { text: "Achievements built while the people suffer reveal a divided nation, not a great one.", fn: "One more layer" },
            { text: "The reason behind the claim, then, simply does not hold.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a nation's achievements are genuinely valuable and can improve many lives.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they do not guarantee a good life for the majority, nor are they the surest sign of greatness.", fn: "Synthesis" },
            { text: "The truest measure of a great nation is the welfare of all its people, not its achievements alone.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-085",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Some people claim that you can tell whether a nation is great by looking at the achievements of its rulers, artists, or scientists. Others argue that the surest indicator of a great nation is, in fact, the general welfare of all its people.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward welfare while granting that achievements form part of greatness; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People often disagree about what truly makes a nation great.", fn: "Hook" },
            { text: "Some claim a nation's greatness shows in the achievements of its rulers, artists, and scientists, while others argue it shows in the general welfare of all its people.", fn: "Restate the prompt" },
            { text: "I lean toward the second view, but I believe a nation's achievements still form part of its greatness.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why welfare is the surest sign",
          sentences: [
            { text: "First, the welfare of all the people is the surest sign of a nation's greatness.", fn: "Topic sentence", vocab: [{ term: "welfare", gloss: "福祉；福利" }], moves: ["First"] },
            { text: "A country that keeps its citizens healthy, safe, and free has succeeded at its most basic task.", fn: "Explanation" },
            { text: "For example, a nation with grand achievements but widespread poverty has failed the very people it serves.", fn: "Example" },
            { text: "This shows that greatness must be felt in ordinary lives, not only at the top.", fn: "Explain why it matters" },
            { text: "Welfare touches everyone, while famous achievements may benefit only a fortunate few.", fn: "Develop the point" },
            { text: "A government that serves all its people has fulfilled its deepest purpose.", fn: "One more layer" },
            { text: "For these reasons, I find the second view more convincing.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why achievements matter too",
          sentences: [
            { text: "Second, however, the first view rightly reminds us that achievements also matter.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Great works of art and science can lift a whole people and improve their lives.", fn: "Explanation" },
            { text: "Consider how scientific discoveries cure disease, or how great art gives a nation pride and meaning.", fn: "Example" },
            { text: "Such achievements are often a source of welfare rather than a rival to it.", fn: "Explain why it matters" },
            { text: "A nation that nurtures talent usually grows stronger and more prosperous as a result.", fn: "Develop the point" },
            { text: "Achievement and welfare, in truth, are deeply connected.", fn: "One more layer" },
            { text: "Both views, then, capture part of what real greatness means.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I believe a nation's greatness is best measured by the welfare of all its people.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But its achievements matter too, since they often raise that welfare and enrich its culture.", fn: "Synthesis" },
            { text: "A truly great nation turns its finest achievements toward the good of every citizen.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-086",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The best way to understand the character of a society is to examine the character of the men and women that the society chooses as its heroes or its role models.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): agrees that heroes reveal a society's values while arguing other things reveal its character too; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Tell me whom a society admires, and I will tell you much about that society.", fn: "Hook" },
            { text: "Some people claim that the best way to understand the character of a society is to examine the heroes and role models it chooses.", fn: "Restate the prompt" },
            { text: "I largely agree that a society's heroes reveal its values, but I believe they are not the only way to understand it.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why heroes reveal values",
          sentences: [
            { text: "First, the people a society admires reveal what it truly values.", fn: "Topic sentence", moves: ["First"] },
            { text: "Heroes embody the qualities, such as courage or kindness, that a society wishes to celebrate.", fn: "Explanation" },
            { text: "For example, a nation that honours soldiers and a nation that honours scientists clearly value different things.", fn: "Example" },
            { text: "This shows that the choice of heroes opens a window into a society's deepest ideals.", fn: "Explain why it matters", vocab: [{ term: "ideals", gloss: "理想" }] },
            { text: "When a society admires honest leaders, it signals that it values honesty itself.", fn: "Develop the point" },
            { text: "The role models held up to children also shape the character of the next generation.", fn: "One more layer" },
            { text: "To this extent, studying a society's heroes genuinely reveals its character.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why heroes are not the only sign",
          sentences: [
            { text: "Second, however, heroes alone cannot reveal the whole character of a society.", fn: "Topic sentence", moves: ["Second"] },
            { text: "How a society treats its weakest members often says even more than whom it celebrates.", fn: "Explanation" },
            { text: "Consider a nation that praises noble heroes yet quietly mistreats its poor and powerless.", fn: "Example" },
            { text: "Such a gap shows that admired ideals and real behaviour can be very different things.", fn: "Explain why it matters" },
            { text: "A society's laws, daily habits, and treatment of strangers also reveal its true nature.", fn: "Develop the point" },
            { text: "People may admire heroes they have no real intention of imitating themselves.", fn: "One more layer" },
            { text: "Understanding a society, then, requires looking well beyond its chosen heroes.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the heroes a society chooses do reveal much about its values.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But its character is also shown in its laws, habits, and treatment of the weak.", fn: "Synthesis" },
            { text: "We understand a society best by studying both whom it admires and how it actually lives.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-087",
    type: "issue",
    category: "Education",
    prompt:
      "All college and university students would benefit from spending at least one semester studying in a foreign country.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that most students benefit from study abroad while arguing 'all' is too strong; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Time spent living in another country can change how a young person sees the world.", fn: "Hook" },
            { text: "Some people argue that all college and university students would benefit from spending at least one semester studying abroad.", fn: "Restate the prompt" },
            { text: "I agree that most students would gain a great deal, but I do not believe the word all is true for everyone.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why most students benefit",
          sentences: [
            { text: "First, the great majority of students would indeed benefit from studying abroad.", fn: "Topic sentence", moves: ["First"] },
            { text: "Living in a new culture teaches lessons about language, customs, and independence that no classroom can.", fn: "Explanation", vocab: [{ term: "independence", gloss: "獨立；自立" }] },
            { text: "For example, a student who studies overseas often returns more confident, mature, and open-minded.", fn: "Example" },
            { text: "This shows that time abroad can shape a young person in valuable and lasting ways.", fn: "Explain why it matters" },
            { text: "Students abroad also build friendships and skills that serve them in a connected world.", fn: "Develop the point" },
            { text: "Facing an unfamiliar place forces young people to solve problems and grow on their own.", fn: "One more layer" },
            { text: "For most students, then, a semester abroad is genuinely worthwhile.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why 'all' is too strong",
          sentences: [
            { text: "Second, however, the claim that all students would benefit goes too far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some students have health conditions or family duties that make studying abroad very difficult.", fn: "Explanation" },
            { text: "Consider a student caring for a sick parent, for whom a semester overseas would bring more harm than good.", fn: "Example" },
            { text: "Such cases show that the same experience is not equally good for everyone.", fn: "Explain why it matters" },
            { text: "A student in deep financial trouble might gain little from an experience that leaves her in debt.", fn: "Develop the point" },
            { text: "For a few, the stress and cost of going abroad could outweigh any benefit.", fn: "One more layer" },
            { text: "Studying abroad, then, helps most students but not absolutely all of them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the great majority of students would benefit from a semester abroad.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the word all is too strong, since some students face real barriers or needs.", fn: "Synthesis" },
            { text: "The wiser claim is that most students gain from studying abroad and should be encouraged to do so.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-088",
    type: "issue",
    category: "Environment",
    prompt:
      "Some people claim that a nation's government should preserve its wilderness areas in their natural state. Others argue that these areas should be developed for potential economic gain.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward preserving wilderness while granting that careful development is sometimes justified; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Wild forests, mountains, and rivers are among a nation's most precious treasures.", fn: "Hook" },
            { text: "Some people believe a government should preserve its wilderness areas in their natural state, while others believe these areas should be developed for economic gain.", fn: "Restate the prompt" },
            { text: "I lean toward preserving wilderness, but I accept that careful development is sometimes justified.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why preservation matters",
          sentences: [
            { text: "First, preserving wilderness in its natural state brings deep and lasting value.", fn: "Topic sentence", vocab: [{ term: "wilderness", gloss: "荒野；原野" }], moves: ["First"] },
            { text: "Wild areas protect countless plants and animals and keep the natural balance healthy.", fn: "Explanation" },
            { text: "For example, untouched forests clean our air and water and shelter species found nowhere else.", fn: "Example" },
            { text: "This shows that wilderness provides benefits that no built development could ever replace.", fn: "Explain why it matters" },
            { text: "Natural places also give people beauty, peace, and a connection to the living world.", fn: "Develop the point" },
            { text: "Once a wilderness is destroyed, it can almost never be brought back.", fn: "One more layer" },
            { text: "For these reasons, I believe wilderness deserves strong protection.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why some development is justified",
          sentences: [
            { text: "Second, however, the opposing view rightly notes that some development can be justified.", fn: "Topic sentence", moves: ["Second"] },
            { text: "People need jobs, energy, and resources, and wild land sometimes holds what a society requires.", fn: "Explanation" },
            { text: "Consider a poor region where careful, limited development could lift many families out of poverty.", fn: "Example" },
            { text: "Such cases show that human needs cannot always be ignored for the sake of untouched land.", fn: "Explain why it matters" },
            { text: "Responsible development that protects most of the wilderness can sometimes serve both people and nature.", fn: "Develop the point" },
            { text: "Refusing all development could leave struggling communities without the means to survive.", fn: "One more layer" },
            { text: "Both views, then, hold part of the truth and must be weighed together.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I believe governments should generally preserve their wilderness areas.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But careful, limited development can be justified when human needs are truly pressing.", fn: "Synthesis" },
            { text: "The wisest policy protects most wilderness while allowing responsible development where it is genuinely needed.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-089",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "The surest indicator of a great nation is not the achievements of its rulers, artists, or scientists, but the general well-being of all its people.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a claim response that largely accepts well-being as the surest indicator while granting that achievements matter; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We are quick to praise a nation for its famous artists, scientists, and leaders.", fn: "Hook" },
            { text: "Some people claim that the surest indicator of a great nation is not these achievements but the general well-being of all its people.", fn: "Restate the prompt" },
            { text: "I largely agree with this claim, though I believe achievements still play a part in true greatness.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why well-being is the surest sign",
          sentences: [
            { text: "First, the well-being of all the people is indeed the surest sign of national greatness.", fn: "Topic sentence", moves: ["First"] },
            { text: "A nation can shine with achievement while most of its citizens live in hardship.", fn: "Explanation" },
            { text: "For example, a country famous for its art but full of hungry families has failed its basic duty.", fn: "Example" },
            { text: "This shows that achievements mean little if ordinary people do not share in the benefits.", fn: "Explain why it matters" },
            { text: "Good health, education, and security reach everyone, while fame reaches only a few.", fn: "Develop the point" },
            { text: "Any nation that lifts all its people has met its truest purpose.", fn: "One more layer" },
            { text: "To this extent, the claim rightly points to well-being as the surest measure.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why achievements still matter",
          sentences: [
            { text: "Second, however, the achievements of a nation should not be dismissed entirely.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Great discoveries and works of art often raise the very well-being the claim values most.", fn: "Explanation" },
            { text: "Consider how new medicine lengthens ordinary lives or how great art enriches a whole people.", fn: "Example" },
            { text: "Such achievements are frequently a cause of well-being rather than a rival to it.", fn: "Explain why it matters" },
            { text: "Countries that prize learning and creativity usually become healthier and more prosperous too.", fn: "Develop the point", vocab: [{ term: "prosperous", gloss: "繁榮的" }] },
            { text: "Achievements can also unite a people and give them pride in who they are.", fn: "One more layer" },
            { text: "Well-being and achievement, then, are partners rather than opposites.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the well-being of all the people is the surest indicator of a great nation.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But achievements matter too, since they often raise that well-being and enrich the culture.", fn: "Synthesis" },
            { text: "Greatness belongs to the nation whose achievements serve the well-being of every citizen.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-090",
    type: "issue",
    category: "Work & Economy",
    prompt:
      "Some people argue that successful leaders in government, industry, or other fields must be highly competitive. Other people claim that in order to be successful, a leader must be willing and able to cooperate with others.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that values competitiveness while leaning toward cooperation as more important; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Great leaders are sometimes praised for their drive and sometimes for their teamwork.", fn: "Hook" },
            { text: "Some people argue that successful leaders must be highly competitive, while others claim they must be willing to cooperate with others.", fn: "Restate the prompt" },
            { text: "I believe both qualities matter, though I lean toward the view that cooperation is the more important of the two.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why competitiveness helps",
          sentences: [
            { text: "First, a degree of competitiveness genuinely helps leaders succeed.", fn: "Topic sentence", moves: ["First"] },
            { text: "A strong drive to win pushes leaders to set high goals and work tirelessly to reach them.", fn: "Explanation" },
            { text: "For example, a competitive business leader may fight hard to make her company the best in its field.", fn: "Example" },
            { text: "This shows that a competitive spirit can fuel ambition, energy, and real achievement.", fn: "Explain why it matters" },
            { text: "Leaders without any drive to succeed may settle for far too little.", fn: "Develop the point" },
            { text: "Competition can also push a whole team to perform at its very best.", fn: "One more layer" },
            { text: "To this extent, competitiveness is a useful quality in a leader.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why cooperation matters more",
          sentences: [
            { text: "Second, however, the ability to cooperate is at least as important, and often more so.", fn: "Topic sentence", moves: ["Second"] },
            { text: "No leader achieves much alone, since real success depends on the work of many people.", fn: "Explanation" },
            { text: "Consider a leader who unites a divided team and inspires everyone to pull in the same direction.", fn: "Example" },
            { text: "Such cooperation can accomplish far more than any single competitive individual ever could.", fn: "Explain why it matters", vocab: [{ term: "cooperation", gloss: "合作" }] },
            { text: "A purely competitive leader may make enemies and destroy the trust that teams depend on.", fn: "Develop the point" },
            { text: "Cooperation builds the loyalty and goodwill that hold an organisation together over time.", fn: "One more layer" },
            { text: "For these reasons, I find cooperation the more vital quality of the two.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, successful leaders do benefit from a healthy competitive drive.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the ability to cooperate matters even more, since no leader succeeds alone.", fn: "Synthesis" },
            { text: "The best leaders combine the drive to compete with the wisdom to work well with others.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-091",
    type: "issue",
    category: "Work & Economy",
    prompt:
      "Some people believe that corporations have a responsibility to promote the well- being of the societies and environments in which they operate. Others believe that the only responsibility of corporations, provided they operate within the law, is to make as much money as possible.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward corporate responsibility while granting that profit is necessary; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Companies are powerful forces that shape the lives of workers, customers, and communities.", fn: "Hook" },
            { text: "Some people believe corporations have a responsibility to promote the well-being of society and the environment, while others believe their only duty, within the law, is to make as much money as possible.", fn: "Restate the prompt" },
            { text: "I lean toward the view that corporations have wider responsibilities, though I accept that making a profit is also necessary.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why corporations bear responsibility",
          sentences: [
            { text: "First, corporations do have a real responsibility beyond simply making money.", fn: "Topic sentence", moves: ["First"] },
            { text: "Because companies affect society and the environment so deeply, they cannot ignore the harm they may cause.", fn: "Explanation" },
            { text: "For example, a factory that pollutes a river damages the health of everyone who lives nearby.", fn: "Example" },
            { text: "This shows that a corporation's choices reach far beyond its own profits.", fn: "Explain why it matters" },
            { text: "Companies also depend on society for workers, customers, and a stable place to operate.", fn: "Develop the point" },
            { text: "A company that protects its community and environment helps secure its own future too.", fn: "One more layer" },
            { text: "For these reasons, corporations rightly bear responsibilities to the world around them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why profit is also necessary",
          sentences: [
            { text: "Second, however, the opposing view is right that companies must also make money to survive.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A business that earns no profit cannot pay its workers or stay open at all.", fn: "Explanation" },
            { text: "Consider a company that spends so much on good causes that it goes bankrupt and helps no one.", fn: "Example", vocab: [{ term: "bankrupt", gloss: "破產的" }] },
            { text: "Such failure shows that profit is not greed but the very thing that keeps a company alive.", fn: "Explain why it matters" },
            { text: "Earning money also lets a company create jobs and provide goods that people genuinely need.", fn: "Develop the point" },
            { text: "Responsibility and profit, in truth, need not be enemies at all.", fn: "One more layer" },
            { text: "Both views, then, capture something a wise company must balance.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I believe corporations have a genuine responsibility to society and the environment.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they must also make a profit, without which they could do no good at all.", fn: "Synthesis" },
            { text: "The best companies earn their profits while serving the communities and the world they depend on.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-092",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: Researchers should not limit their investigations to only those areas in which they expect to discover something that has an immediate, practical application. Reason: It is impossible to predict the outcome of a line of research with any certainty.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): agrees that research should roam beyond practical aims while granting that practical research matters too; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Some of the most useful discoveries came from research that seemed useless at the time.", fn: "Hook" },
            { text: "One claim holds that researchers should not limit their work to areas with an immediate practical use, on the reason that the outcome of research cannot be predicted with any certainty.", fn: "Restate the prompt" },
            { text: "I agree with both the claim and its reason, though I believe some practical research still deserves a place.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why research should roam freely",
          sentences: [
            { text: "First, the reason behind the claim is clearly sound, since no one can predict where research will lead.", fn: "Topic sentence", moves: ["First"] },
            { text: "Scientists exploring pure curiosity often stumble upon discoveries far greater than any they planned.", fn: "Explanation" },
            { text: "For example, early study of electricity had no obvious use, yet it transformed the modern world.", fn: "Example" },
            { text: "This shows that demanding immediate usefulness would block many of our greatest breakthroughs.", fn: "Explain why it matters" },
            { text: "Research that looks useless today may quietly become essential tomorrow.", fn: "Develop the point" },
            { text: "Limiting science to the obviously practical would slowly starve discovery itself.", fn: "One more layer" },
            { text: "To this extent, the claim and its reason deserve strong support.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why practical research matters too",
          sentences: [
            { text: "Second, however, research with an immediate practical aim also deserves real support.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Pressing problems, such as disease and hunger, demand answers that cannot simply wait.", fn: "Explanation" },
            { text: "Consider the urgent search for a vaccine during an epidemic, where practical results save lives at once.", fn: "Example", vocab: [{ term: "vaccine", gloss: "疫苗" }] },
            { text: "Such work shows that aiming directly at a known problem can do enormous and immediate good.", fn: "Explain why it matters" },
            { text: "Practical research also helps justify the public money that funds science as a whole.", fn: "Develop the point" },
            { text: "A wise society supports both curious exploration and the search for immediate solutions.", fn: "One more layer" },
            { text: "Research, then, should be free to roam without abandoning practical needs entirely.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, researchers should not be limited only to areas of obvious practical use.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But practical research still matters, since some urgent problems demand immediate answers.", fn: "Synthesis" },
            { text: "The wisest approach funds free curiosity alongside the practical work that meets pressing needs.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-093",
    type: "issue",
    category: "Technology",
    prompt:
      "Some people believe that our ever-increasing use of technology significantly reduces our opportunities for human interaction. Other people believe that technology provides us with new and better ways to communicate and connect with one another.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response holding that technology can weaken or strengthen connection depending on use; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We can now speak instantly with people across the world, yet often sit silently beside those next to us.", fn: "Hook" },
            { text: "Some believe our growing use of technology reduces our chances for human interaction, while others believe it gives us better ways to connect.", fn: "Restate the prompt" },
            { text: "I believe both views hold truth, and that technology can either weaken or strengthen our connections depending on how we use it.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How technology can reduce interaction",
          sentences: [
            { text: "First, technology really can reduce genuine human interaction.", fn: "Topic sentence", moves: ["First"] },
            { text: "People absorbed in their screens often ignore the family and friends right beside them.", fn: "Explanation" },
            { text: "For example, a group at dinner may each stare at a phone instead of talking to one another.", fn: "Example" },
            { text: "This shows that technology can pull us away from the people physically near us.", fn: "Explain why it matters" },
            { text: "Online messages can also feel thin and cold compared with a real face-to-face conversation.", fn: "Develop the point" },
            { text: "Spending hours alone with a device can leave people lonelier rather than closer.", fn: "One more layer" },
            { text: "To this extent, the first view captures a real danger.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — How technology can connect us",
          sentences: [
            { text: "Second, however, technology also gives us powerful new ways to connect.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Phones and the internet let us stay close to people we could otherwise never reach.", fn: "Explanation" },
            { text: "Consider a family spread across distant countries who can now see and speak to one another every day.", fn: "Example" },
            { text: "Such connection shows that technology can bring people together across great distances.", fn: "Explain why it matters" },
            { text: "Online communities also help lonely or isolated people find others who share their interests.", fn: "Develop the point", vocab: [{ term: "isolated", gloss: "孤立的" }] },
            { text: "Used well, these tools can deepen relationships rather than replace them.", fn: "One more layer" },
            { text: "Both views, then, are true, depending on how the technology is used.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, technology can indeed pull us away from the people around us.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it can also connect us with others in valuable new ways.", fn: "Synthesis" },
            { text: "Whether technology weakens or strengthens our bonds depends far less on the tools than on how we use them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-094",
    type: "issue",
    category: "The Individual",
    prompt:
      "Claim: Knowing about the past cannot help people to make important decisions today. Reason: The world today is significantly more complex than it was even in the relatively recent past.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that the modern world is more complex, then argues the past still guides us; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Each generation likes to believe its problems are entirely new and unlike any before.", fn: "Hook" },
            { text: "One claim holds that knowing about the past cannot help us make decisions today, on the reason that the modern world is far more complex than it once was.", fn: "Restate the prompt" },
            { text: "I disagree with the claim, because the past still teaches lessons that help us even in a complex world.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The truth that the world is more complex",
          sentences: [
            { text: "First, there is some truth in the reason that today's world is more complex.", fn: "Topic sentence", moves: ["First"] },
            { text: "Modern life involves global trade, advanced technology, and problems that earlier ages never faced.", fn: "Explanation" },
            { text: "For example, no ancient ruler ever had to manage the internet or worldwide climate change.", fn: "Example" },
            { text: "This shows that the past cannot offer a ready answer to every modern problem.", fn: "Explain why it matters" },
            { text: "Old solutions, copied blindly, may not fit a far more complicated present.", fn: "Develop the point" },
            { text: "Each new age clearly brings challenges that demand fresh and original thinking.", fn: "One more layer" },
            { text: "To this extent, the reason is not entirely without merit.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the past still helps",
          sentences: [
            { text: "Second, however, the claim that the past cannot help us today is plainly false.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Human nature and many basic problems have stayed remarkably the same across the centuries.", fn: "Explanation" },
            { text: "Consider how the study of past financial crashes still helps leaders avoid the same mistakes.", fn: "Example" },
            { text: "Such lessons show that history offers real guidance even in a complex modern world.", fn: "Explain why it matters" },
            { text: "Greater complexity is a reason to study the past more carefully, not to ignore it.", fn: "Develop the point" },
            { text: "Ignoring history would force us to relearn painful lessons that earlier people already mastered.", fn: "One more layer" },
            { text: "The past, then, remains a valuable guide despite the complexity of the present.", fn: "Sub-conclusion", vocab: [{ term: "complexity", gloss: "複雜性" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the modern world is indeed more complex than the world of the past.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But this makes the lessons of history more useful, not less, in guiding our decisions.", fn: "Synthesis" },
            { text: "We decide most wisely today by learning from the past while adapting it to a complex present.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-095",
    type: "issue",
    category: "The Individual",
    prompt:
      "Claim: Knowing about the past cannot help people to make important decisions today. Reason: We are not able to make connections between current events and past events until we have some distance from both.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that distance can sharpen understanding, then argues we still learn from the past in the present; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "It is often said that we understand events only long after they have passed.", fn: "Hook" },
            { text: "One claim holds that knowing about the past cannot help us decide today, on the reason that we cannot connect current and past events until we have distance from both.", fn: "Restate the prompt" },
            { text: "I disagree with the claim, because we can and do learn from the past even while living through the present.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How distance can help",
          sentences: [
            { text: "First, there is some truth in the idea that distance helps us understand events.", fn: "Topic sentence", moves: ["First"] },
            { text: "Looking back calmly, we can often see causes and patterns that were hidden in the moment.", fn: "Explanation", vocab: [{ term: "patterns", gloss: "模式；規律" }] },
            { text: "For example, the full meaning of a war or a crisis often becomes clear only years afterward.", fn: "Example" },
            { text: "This shows that time can indeed sharpen our understanding of what has happened.", fn: "Explain why it matters" },
            { text: "In the heat of events, strong feelings can blur our judgment of what is really going on.", fn: "Develop the point" },
            { text: "Some lessons of history truly do become clearer with the passing of years.", fn: "One more layer" },
            { text: "To this extent, the reason behind the claim holds a grain of truth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the past still helps now",
          sentences: [
            { text: "Second, however, we do not need full distance to learn useful lessons from the past.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Well-understood events from long ago can guide our choices in the present right now.", fn: "Explanation" },
            { text: "Consider how leaders today study past wars and crises to avoid repeating old mistakes.", fn: "Example" },
            { text: "Such use of history shows that the past helps us act wisely even in the present moment.", fn: "Explain why it matters" },
            { text: "We can also learn from our own earlier mistakes without waiting many years to do so.", fn: "Develop the point" },
            { text: "Waiting for perfect distance would leave us helpless whenever a decision could not wait.", fn: "One more layer" },
            { text: "The past, then, can guide us today even before we have full distance from it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, distance from events can certainly deepen our understanding of them.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But we do not need that distance to draw useful lessons from the past today.", fn: "Synthesis" },
            { text: "History helps us decide wisely in the present, even while the present is still unfolding.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-096",
    type: "issue",
    category: "Education",
    prompt:
      "Educational institutions should actively encourage their students to choose fields of study that will prepare them for lucrative careers.",
    directions: D_POLICY,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a policy response that backs informing students about pay while arguing against pushing them toward money; two developed examples weighing consequences, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Many students hope their studies will one day lead to a comfortable income.", fn: "Hook" },
            { text: "One proposed policy is that educational institutions should actively encourage students to choose fields that lead to lucrative careers.", fn: "Restate the prompt" },
            { text: "I agree that schools should inform students about earnings, but I believe actively pushing them toward money would do harm.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why informing about earnings helps",
          sentences: [
            { text: "First, helping students understand which fields pay well is genuinely useful.", fn: "Topic sentence", vocab: [{ term: "lucrative", gloss: "賺錢的；有利可圖的" }], moves: ["First"] },
            { text: "Money affects nearly every part of life, from housing to health to raising a family.", fn: "Explanation" },
            { text: "For example, a student warned that a field pays very little can plan her finances more wisely.", fn: "Example" },
            { text: "This shows that honest information about pay can protect students from later regret.", fn: "Explain why it matters" },
            { text: "Schools that share clear facts about careers help students make realistic and informed choices.", fn: "Develop the point" },
            { text: "Knowing the likely rewards of a field can also reduce anxiety about the future.", fn: "One more layer" },
            { text: "To this extent, informing students about earnings is a sensible policy.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why pushing toward money harms",
          sentences: [
            { text: "Second, however, actively pushing students toward lucrative careers could do real damage.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students steered into high-paying fields they dislike may end up miserable and unsuccessful.", fn: "Explanation" },
            { text: "Consider a gifted teacher or artist pressured into finance who performs poorly and feels trapped.", fn: "Example" },
            { text: "Such outcomes show that chasing money alone can waste both talent and happiness.", fn: "Explain why it matters" },
            { text: "Society also needs nurses, teachers, and artists, not only the highest-paid professionals.", fn: "Develop the point" },
            { text: "Pushing everyone toward money could leave vital but modest careers badly understaffed.", fn: "One more layer" },
            { text: "Guidance, then, should inform students about pay without pressuring them to chase it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, schools are right to tell students honestly which careers pay well.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But actively pushing them toward money would ignore talent, interest, and the needs of society.", fn: "Synthesis" },
            { text: "The wiser policy informs students about earnings while leaving the choice of career to them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-097",
    type: "issue",
    category: "Education",
    prompt:
      "Educational institutions have a responsibility to dissuade students from pursuing fields of study in which they are unlikely to succeed.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): backs honest advice while arguing that a duty to dissuade would do more harm than good; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Schools naturally want to protect their students from wasting years on a hopeless path.", fn: "Hook" },
            { text: "Some people argue that educational institutions have a responsibility to dissuade students from pursuing fields in which they are unlikely to succeed.", fn: "Restate the prompt" },
            { text: "I agree that schools should advise students honestly, but I believe a duty to dissuade them would do more harm than good.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why honest advice is good",
          sentences: [
            { text: "First, schools do have a duty to give students honest and realistic advice.", fn: "Topic sentence", moves: ["First"] },
            { text: "Good guidance can save a student from years of struggle in a direction with little hope.", fn: "Explanation" },
            { text: "For example, a counsellor who gently shares the true difficulty of a field helps a student plan wisely.", fn: "Example" },
            { text: "This shows that realistic advice can be a genuine kindness rather than a discouragement.", fn: "Explain why it matters" },
            { text: "Honest information about a field's demands lets students make better-informed choices.", fn: "Develop the point" },
            { text: "Schools also have limited places that should not be filled carelessly.", fn: "One more layer" },
            { text: "To this extent, schools rightly owe students honest guidance.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why dissuading is wrong",
          sentences: [
            { text: "Second, however, an active duty to dissuade students would often be mistaken and harmful.", fn: "Topic sentence", vocab: [{ term: "ambition", gloss: "抱負；志向" }], moves: ["Second"] },
            { text: "Schools frequently cannot tell who will succeed, since effort and passion can overcome early weakness.", fn: "Explanation" },
            { text: "Consider the many famous achievers who were once judged hopeless by their own teachers.", fn: "Example" },
            { text: "Such cases show that discouraging students risks robbing the world of their later success.", fn: "Explain why it matters" },
            { text: "A duty to dissuade could also crush ambition and push young people away from their dreams.", fn: "Develop the point" },
            { text: "It would turn schools into gatekeepers deciding futures far too early.", fn: "One more layer" },
            { text: "Guidance should open doors for students, not close them before they have truly tried.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, schools should give students honest advice about their chances of success.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a responsibility to actively dissuade them would stifle ambition and often prove wrong.", fn: "Synthesis" },
            { text: "The better role is to inform and support students while leaving the final choice in their hands.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-098",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that competition for high grades motivates students to excel in the classroom. Others believe that such competition seriously limits the quality of real learning.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that grants competition can motivate while arguing excess harms learning; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "In many classrooms, students work hard mainly to score higher than their classmates.", fn: "Hook" },
            { text: "Some people believe that competition for high grades motivates students to excel, while others believe it seriously limits real learning.", fn: "Restate the prompt" },
            { text: "I believe both views hold truth, though I lean toward the idea that moderate competition helps while excessive competition harms.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How competition motivates",
          sentences: [
            { text: "First, a healthy level of competition genuinely motivates students to do their best.", fn: "Topic sentence", moves: ["First"] },
            { text: "The wish to do well can push students to study harder and take their work seriously.", fn: "Explanation" },
            { text: "For example, a student may prepare more carefully simply to match the strong results of her classmates.", fn: "Example" },
            { text: "This shows that competition can raise effort and help students reach their full potential.", fn: "Explain why it matters", vocab: [{ term: "motivation", gloss: "動機；動力" }] },
            { text: "Comparing our work with others can also reveal how much we are truly capable of.", fn: "Develop the point" },
            { text: "A little rivalry can make learning feel lively and exciting rather than dull.", fn: "One more layer" },
            { text: "To this extent, competition can be a real source of motivation.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — How excess harms learning",
          sentences: [
            { text: "Second, however, too much competition for grades can seriously damage real learning.", fn: "Topic sentence", moves: ["Second"] },
            { text: "When only the score matters, students chase marks instead of genuine understanding.", fn: "Explanation" },
            { text: "Consider a student who crams facts for a test, passes it, and forgets everything a week later.", fn: "Example" },
            { text: "Such a focus shows that heavy competition can replace deep curiosity with a shallow hunt for grades.", fn: "Explain why it matters" },
            { text: "Fear of falling behind can also discourage students from taking risks or helping one another.", fn: "Develop the point" },
            { text: "Excessive competition can even turn classmates into rivals rather than partners in learning.", fn: "One more layer" },
            { text: "Beyond a certain point, then, competition begins to harm the very learning it should support.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a moderate amount of competition can genuinely motivate students to excel.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But excessive competition for grades can crush the curiosity that real learning requires.", fn: "Synthesis" },
            { text: "The goal should be to use competition gently while keeping true understanding the highest prize.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-099",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: Major policy decisions should always be left to politicians and other government experts. Reason: Politicians and other government experts are more informed and thus have better judgment and perspective than do members of the general public.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that experts are better informed while arguing the public must have a say; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Modern problems are often so complex that ordinary people cannot study every detail.", fn: "Hook" },
            { text: "One claim holds that major policy decisions should always be left to politicians and experts, on the reason that they are more informed and have better judgment than the public.", fn: "Restate the prompt" },
            { text: "I agree that experts have valuable knowledge, but I disagree that major decisions should always be left to them alone.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why expert knowledge matters",
          sentences: [
            { text: "First, there is real truth in the reason that experts are better informed.", fn: "Topic sentence", moves: ["First"] },
            { text: "Politicians and specialists often spend years studying the issues that ordinary citizens cannot.", fn: "Explanation" },
            { text: "For example, an economist may understand the likely effects of a tax far better than the average voter.", fn: "Example" },
            { text: "This shows that expert knowledge can lead to wiser and more careful decisions.", fn: "Explain why it matters" },
            { text: "On highly technical matters, the advice of experts is genuinely valuable.", fn: "Develop the point" },
            { text: "Leaving every detail to an uninformed public could produce hasty and harmful choices.", fn: "One more layer" },
            { text: "To this extent, the reason behind the claim has genuine force.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the public must have a say",
          sentences: [
            { text: "Second, however, major decisions should not always be left to experts alone.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Big policies affect everyone, so the people who must live with them deserve a voice.", fn: "Explanation" },
            { text: "Consider a major decision about going to war, which changes countless lives and belongs to the whole nation.", fn: "Example" },
            { text: "Such matters show that values and priorities, not just expertise, should guide major choices.", fn: "Explain why it matters" },
            { text: "Experts can also be mistaken, biased, or focused too narrowly on their own field.", fn: "Develop the point" },
            { text: "A government that ignores the public entirely soon loses both trust and legitimacy.", fn: "One more layer", vocab: [{ term: "legitimacy", gloss: "正當性；合法性" }] },
            { text: "Major decisions, then, need the knowledge of experts and the consent of the people.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, experts truly are better informed on many complex issues.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But major decisions should not be left to them alone, since these choices belong to everyone.", fn: "Synthesis" },
            { text: "The wisest policy joins expert knowledge with the values and consent of the public.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-100",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that universities should require every student to take a variety of courses outside the student's field of study. Others believe that universities should not force students to take any courses other than those that will help prepare them for jobs in their chosen fields.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward required breadth while granting the value of job preparation; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Universities must decide whether to broaden their students or to train them for specific jobs.", fn: "Hook" },
            { text: "Some believe universities should require students to take courses outside their field, while others believe they should only require courses that prepare students for jobs.", fn: "Restate the prompt" },
            { text: "I lean toward requiring some breadth, but I accept that job preparation also deserves real weight.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why breadth matters",
          sentences: [
            { text: "First, studying outside one's field makes students wiser and more complete thinkers.", fn: "Topic sentence", moves: ["First"] },
            { text: "Courses in other subjects expose students to new ideas and ways of seeing the world.", fn: "Explanation" },
            { text: "For example, an engineering student who studies ethics may use her skills more responsibly.", fn: "Example", vocab: [{ term: "ethics", gloss: "倫理；道德" }] },
            { text: "This shows that breadth can produce thoughtful citizens, not merely trained workers.", fn: "Explain why it matters" },
            { text: "Such variety also builds flexible skills, like reasoning and writing, useful in any career.", fn: "Develop the point" },
            { text: "Many students discover unexpected interests through subjects they would never have chosen alone.", fn: "One more layer" },
            { text: "For these reasons, I believe some required breadth is valuable.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why job preparation matters",
          sentences: [
            { text: "Second, however, the opposing view rightly values courses that prepare students for work.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students need jobs after graduating, and useful training helps them build secure lives.", fn: "Explanation" },
            { text: "Consider a student deep in debt who urgently needs practical skills to find employment soon.", fn: "Example" },
            { text: "Such cases show that job preparation is not selfish but a genuine and pressing need.", fn: "Explain why it matters" },
            { text: "Too many unrelated courses can also crowd out the deep training a career demands.", fn: "Develop the point" },
            { text: "A wise university balances broad learning with the practical skills students will rely on.", fn: "One more layer" },
            { text: "Both views, then, point to needs that a good education must somehow combine.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I believe universities should require some study beyond a student's own field.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But preparing students for work also matters and should not be ignored.", fn: "Synthesis" },
            { text: "The wisest universities give students broad horizons while still building the skills their careers require.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-101",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "It is more harmful to compromise one's own beliefs than to adhere to them.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the value of holding to beliefs while arguing rigid adherence can harm; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We often admire people who stand firmly by their beliefs no matter what.", fn: "Hook" },
            { text: "Some people argue that it is more harmful to compromise one's own beliefs than to adhere to them.", fn: "Restate the prompt" },
            { text: "I agree that holding to our beliefs has real value, but I do not believe compromise is always the more harmful choice.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of holding to beliefs",
          sentences: [
            { text: "First, staying true to our beliefs is often genuinely important.", fn: "Topic sentence", moves: ["First"] },
            { text: "People who abandon their values too easily can lose their integrity and self-respect.", fn: "Explanation", vocab: [{ term: "integrity", gloss: "正直；誠信" }] },
            { text: "For example, a worker who refuses to lie even under pressure keeps both honour and a clear conscience.", fn: "Example" },
            { text: "This shows that holding firm to our beliefs can protect our character and dignity.", fn: "Explain why it matters" },
            { text: "Many great reformers changed the world precisely because they refused to give up their convictions.", fn: "Develop the point" },
            { text: "A person with no firm beliefs can drift through life without purpose or direction.", fn: "One more layer" },
            { text: "To this extent, adhering to our beliefs is plainly valuable.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why rigid adherence can harm",
          sentences: [
            { text: "Second, however, refusing ever to compromise can be just as harmful, if not more so.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some beliefs are mistaken, and clinging to them stubbornly can cause real damage.", fn: "Explanation" },
            { text: "Consider a leader so devoted to a failed idea that she refuses to change while her people suffer.", fn: "Example" },
            { text: "Such stubbornness shows that loyalty to a belief is not always wise or good.", fn: "Explain why it matters" },
            { text: "Compromise is often what allows people with different views to live together in peace.", fn: "Develop the point" },
            { text: "Adjusting our beliefs in the face of new facts can be a sign of growth, not weakness.", fn: "One more layer" },
            { text: "Compromise, then, is sometimes wiser and kinder than rigid adherence.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, holding firmly to our beliefs can protect our integrity and purpose.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But refusing ever to compromise can cause real harm when our beliefs are mistaken.", fn: "Synthesis" },
            { text: "Whether to hold firm or to compromise depends on whether the belief truly deserves our loyalty.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-102",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: Colleges and universities should specify all required courses and eliminate elective courses in order to provide clear guidance for students. Reason: College students — like people in general — prefer to follow directions rather than make their own decisions.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the value of guidance while arguing electives should stay and doubting the reason; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Students often feel both freed and confused when handed a long list of course choices.", fn: "Hook" },
            { text: "One claim holds that colleges should require all courses and eliminate electives, on the reason that people generally prefer following directions to making their own decisions.", fn: "Restate the prompt" },
            { text: "I agree that clear guidance helps students, but I disagree that electives should be eliminated, and I doubt the reason behind the claim.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — The value of clear guidance",
          sentences: [
            { text: "First, there is some value in giving students clear guidance about what to study.", fn: "Topic sentence", moves: ["First"] },
            { text: "A few required courses ensure that every student gains the most essential knowledge and skills.", fn: "Explanation" },
            { text: "For example, requiring basic writing and reasoning helps students in almost any later field.", fn: "Example" },
            { text: "This shows that some structure can protect students from leaving dangerous gaps in their learning.", fn: "Explain why it matters" },
            { text: "Too much choice can indeed overwhelm students who do not yet know what they need.", fn: "Develop the point" },
            { text: "Sensible requirements can give a degree a clear shape and purpose.", fn: "One more layer" },
            { text: "To this extent, some required courses are genuinely useful.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why electives should stay",
          sentences: [
            { text: "Second, however, eliminating electives entirely would be a serious mistake.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Electives let students explore their own interests and discover what they truly love.", fn: "Explanation", vocab: [{ term: "electives", gloss: "選修課" }] },
            { text: "Consider a student who finds her future career only because an elective sparked a new passion.", fn: "Example" },
            { text: "Such cases show that free choice can lead to growth that no fixed list could provide.", fn: "Explain why it matters" },
            { text: "The reason behind the claim is also doubtful, since people often value making their own decisions.", fn: "Develop the point" },
            { text: "Learning to choose wisely is itself an important part of becoming an educated adult.", fn: "One more layer" },
            { text: "Electives, then, should be kept alongside a sensible core of required courses.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a clear core of required courses can helpfully guide students.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But eliminating electives would rob students of choice, discovery, and growth.", fn: "Synthesis" },
            { text: "The best colleges combine sensible requirements with the freedom that electives provide.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-103",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "No field of study can advance significantly unless it incorporates knowledge and experience from outside that field.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that outside knowledge drives progress while arguing 'no field' is too absolute; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Many great breakthroughs happen when two different fields meet and share ideas.", fn: "Hook" },
            { text: "Some people argue that no field of study can advance significantly unless it incorporates knowledge from outside that field.", fn: "Restate the prompt" },
            { text: "I agree that outside knowledge often drives progress, but I believe the word no makes the claim too absolute.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How outside knowledge drives progress",
          sentences: [
            { text: "First, borrowing knowledge from other fields often leads to major advances.", fn: "Topic sentence", moves: ["First"] },
            { text: "Ideas and tools from one subject can solve problems that another could not crack alone.", fn: "Explanation" },
            { text: "For example, biology advanced enormously once it began using the methods of chemistry and physics.", fn: "Example" },
            { text: "This shows that combining fields can open doors that a single discipline cannot.", fn: "Explain why it matters" },
            { text: "Fresh ideas from outside can also break the fixed habits that hold a field back.", fn: "Develop the point" },
            { text: "Many modern fields, such as computer science, were born from blending several disciplines.", fn: "One more layer", vocab: [{ term: "disciplines", gloss: "學科；領域" }] },
            { text: "To this extent, the claim captures a real and important truth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why 'no field' is too absolute",
          sentences: [
            { text: "Second, however, the claim that no field can advance without outside knowledge goes too far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some progress comes from working deeply within a single field's own ideas and methods.", fn: "Explanation" },
            { text: "Consider a mathematician who solves a long-standing problem using only the tools of mathematics itself.", fn: "Example" },
            { text: "Such achievements show that a field can sometimes advance significantly on its own.", fn: "Explain why it matters" },
            { text: "Deep focus within one subject can produce discoveries that broad borrowing never would.", fn: "Develop the point" },
            { text: "Outside knowledge is often helpful, but it is not always strictly necessary for progress.", fn: "One more layer" },
            { text: "Advance, then, can come both from blending fields and from deep work within one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, incorporating outside knowledge often drives a field forward.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But some fields advance significantly through deep work within their own boundaries.", fn: "Synthesis" },
            { text: "Progress comes both from crossing the borders between fields and from digging deep within them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-104",
    type: "issue",
    category: "The Individual",
    prompt:
      "True success can be measured primarily in terms of the goals one sets for oneself.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that personal goals measure success while arguing they are not the only measure; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People measure success in very different ways, from wealth and fame to private dreams.", fn: "Hook" },
            { text: "Some people argue that true success can be measured primarily by the goals one sets for oneself.", fn: "Restate the prompt" },
            { text: "I agree that personal goals are an important measure of success, but I do not believe they are the only or primary one.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why personal goals matter",
          sentences: [
            { text: "First, measuring success by our own goals is genuinely meaningful.", fn: "Topic sentence", moves: ["First"] },
            { text: "Each person values different things, so a single standard cannot fairly judge everyone.", fn: "Explanation" },
            { text: "For example, someone who dreams of being a caring parent may feel deeply successful without any fame.", fn: "Example" },
            { text: "This shows that reaching our own goals can bring a real and lasting sense of success.", fn: "Explain why it matters" },
            { text: "People who chase only the goals of others often feel empty even when they seem to win.", fn: "Develop the point" },
            { text: "Setting and meeting personal goals gives our efforts purpose and direction.", fn: "One more layer" },
            { text: "To this extent, personal goals are a fair measure of success.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why they are not the only measure",
          sentences: [
            { text: "Second, however, success cannot be measured only by the goals we set ourselves.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A person might set very low goals and reach them, yet hardly count as truly successful.", fn: "Explanation" },
            { text: "Consider someone whose only goal is to avoid all effort, which she easily achieves by doing nothing.", fn: "Example" },
            { text: "Such cases show that purely personal goals can be a weak and misleading measure.", fn: "Explain why it matters" },
            { text: "Real success often involves the value we create for others, not just for ourselves.", fn: "Develop the point" },
            { text: "How we affect our family, work, and community also shapes whether a life is truly successful.", fn: "One more layer", vocab: [{ term: "community", gloss: "社群；社區" }] },
            { text: "Personal goals, then, are one measure of success but far from the only one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, reaching our own goals is a genuine and meaningful form of success.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But success also depends on the value we create and our effect on others.", fn: "Synthesis" },
            { text: "True success is best measured by both our personal goals and the good we do beyond ourselves.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-105",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "The general welfare of a nation's people is a better indication of that nation's greatness than are the achievements of its rulers, artists, or scientists.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): largely accepts welfare as the better indicator while granting that achievements contribute; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Nations can be judged by their great works or by the lives of their ordinary people.", fn: "Hook" },
            { text: "Some people claim that the general welfare of a nation's people is a better sign of greatness than the achievements of its rulers, artists, or scientists.", fn: "Restate the prompt" },
            { text: "I largely agree with this claim, though I believe achievements still contribute to a nation's greatness.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why welfare is the better indicator",
          sentences: [
            { text: "First, the general welfare of the people is indeed a better indicator of greatness.", fn: "Topic sentence", vocab: [{ term: "welfare", gloss: "福祉；福利" }], moves: ["First"] },
            { text: "A nation may produce dazzling achievements while the majority of its people remain poor.", fn: "Explanation" },
            { text: "For example, a country with brilliant scientists but hungry citizens has failed its most basic duty.", fn: "Example" },
            { text: "This shows that achievements mean little if ordinary lives do not improve.", fn: "Explain why it matters" },
            { text: "Welfare reaches every citizen, while great achievements may benefit only a small elite.", fn: "Develop the point" },
            { text: "Any nation that cares for all its people has fulfilled its deepest purpose.", fn: "One more layer" },
            { text: "To this extent, welfare is rightly the better measure of greatness.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why achievements contribute too",
          sentences: [
            { text: "Second, however, achievements should not be dismissed as a sign of greatness.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Great works of art and science often improve the welfare of the people themselves.", fn: "Explanation" },
            { text: "Consider how medical discoveries lengthen lives or how great art enriches an entire culture.", fn: "Example" },
            { text: "Such achievements are frequently a cause of welfare rather than something separate from it.", fn: "Explain why it matters" },
            { text: "Nations that value learning and creativity also tend to grow healthier and wealthier.", fn: "Develop the point" },
            { text: "Achievements can give a people pride and a strong, shared sense of identity.", fn: "One more layer" },
            { text: "Welfare and achievement, then, work together rather than against each other.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, the welfare of the people is the better indicator of a nation's greatness.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But achievements matter too, since they often raise that welfare and enrich the culture.", fn: "Synthesis" },
            { text: "A truly great nation directs its finest achievements toward the welfare of all its people.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-106",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "The best test of an argument is the argument's ability to convince someone with an opposing viewpoint.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that persuading an opponent is a strong test while arguing it is not the only one; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "An argument may sound perfect to us yet fail to move anyone who disagrees.", fn: "Hook" },
            { text: "Some people argue that the best test of an argument is its ability to convince someone with an opposing viewpoint.", fn: "Restate the prompt" },
            { text: "I agree that persuading an opponent is a strong test, but I do not believe it is the only measure of a good argument.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why persuading opponents is a strong test",
          sentences: [
            { text: "First, convincing someone who disagrees is indeed a powerful test of an argument.", fn: "Topic sentence", moves: ["First"] },
            { text: "An opponent has every reason to resist, so persuading her shows the argument is truly strong.", fn: "Explanation" },
            { text: "For example, a lawyer who changes the mind of a doubting jury has clearly made a compelling case.", fn: "Example" },
            { text: "This shows that winning over a sceptic is a genuine sign of a sound argument.", fn: "Explain why it matters" },
            { text: "Arguments that only please those who already agree may simply be flattering their beliefs.", fn: "Develop the point" },
            { text: "Facing real opposition forces an argument to prove its true strength.", fn: "One more layer" },
            { text: "To this extent, persuading an opponent is a valuable test.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it is not the only test",
          sentences: [
            { text: "Second, however, the power to convince is not the only mark of a good argument.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some true arguments fail to persuade people who are stubborn or closed-minded.", fn: "Explanation" },
            { text: "Consider a sound scientific argument that a person rejects simply because it offends her beliefs.", fn: "Example" },
            { text: "Such cases show that failing to convince does not always mean the argument is weak.", fn: "Explain why it matters" },
            { text: "A good argument also depends on solid logic and reliable evidence, whether or not it persuades.", fn: "Develop the point", vocab: [{ term: "evidence", gloss: "證據" }] },
            { text: "Skilled speakers can also persuade with clever tricks rather than genuine truth.", fn: "One more layer" },
            { text: "Persuasion, then, is one important test but not the only one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, convincing an opponent is a strong and revealing test of an argument.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But logic and evidence matter too, since true arguments do not always persuade.", fn: "Synthesis" },
            { text: "The best arguments combine the power to persuade with sound reasoning and solid proof.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-107",
    type: "issue",
    category: "Environment",
    prompt:
      "Nations should pass laws to preserve any remaining wilderness areas in their natural state.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): backs strong wilderness laws while arguing that protecting every remaining area is too rigid; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Wild places, once destroyed, can almost never be recovered.", fn: "Hook" },
            { text: "Some people claim that nations should pass laws to preserve any remaining wilderness areas in their natural state.", fn: "Restate the prompt" },
            { text: "I strongly support protecting wilderness, but I believe a law covering every remaining area would be too rigid.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why preserving wilderness is vital",
          sentences: [
            { text: "First, protecting wilderness through law brings deep and lasting benefits.", fn: "Topic sentence", vocab: [{ term: "wilderness", gloss: "荒野；原野" }], moves: ["First"] },
            { text: "Wild areas shelter rare species and keep the natural systems we all depend on in balance.", fn: "Explanation" },
            { text: "For example, protected forests clean our air and water and guard plants found nowhere else.", fn: "Example" },
            { text: "This shows that preserving wilderness protects human life as well as nature.", fn: "Explain why it matters" },
            { text: "Natural places also give people beauty, peace, and a sense of wonder.", fn: "Develop the point" },
            { text: "Strong laws are often the only thing standing between wild land and its destruction.", fn: "One more layer" },
            { text: "To this extent, laws to protect wilderness are clearly wise.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why 'any remaining' is too rigid",
          sentences: [
            { text: "Second, however, a law protecting every remaining wild area would be too rigid to be fair.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some communities sit on land that must be used to meet urgent human needs.", fn: "Explanation" },
            { text: "Consider a poor region that needs a small part of its wild land for water, food, or shelter.", fn: "Example" },
            { text: "Such cases show that an absolute law could trap people in poverty for the sake of untouched land.", fn: "Explain why it matters" },
            { text: "Wisely chosen limits can protect most wilderness while leaving room for genuine human needs.", fn: "Develop the point" },
            { text: "A rigid rule covering every area would ignore the real differences between places and situations.", fn: "One more layer" },
            { text: "Protection, then, should be strong but flexible rather than absolute.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, nations should pass strong laws to protect their wilderness areas.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a rule preserving every remaining area without exception would be too rigid and unfair.", fn: "Synthesis" },
            { text: "The wisest laws protect most wilderness while allowing for the most pressing human needs.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-108",
    type: "issue",
    category: "Education",
    prompt:
      "In any field — business, politics, education, government — those in power should be required to step down after five years.",
    directions: D_POLICY,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a policy response that backs limits on power while arguing a fixed five-year rule is too rigid; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Power held too long has ruined many leaders who once served well.", fn: "Hook" },
            { text: "One proposed policy is that those in power, in any field, should be required to step down after five years.", fn: "Restate the prompt" },
            { text: "I agree that limiting time in power can be healthy, but I believe a fixed five-year rule for everyone would also cause harm.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why limits prevent abuse",
          sentences: [
            { text: "First, requiring leaders to step down can prevent the abuse that long power invites.", fn: "Topic sentence", moves: ["First"] },
            { text: "Leaders who stay too long may grow arrogant and stop listening to those around them.", fn: "Explanation" },
            { text: "For example, officials who hold power for decades often become corrupt and hard to remove.", fn: "Example", vocab: [{ term: "corrupt", gloss: "腐敗的" }] },
            { text: "This shows that regular change can protect an organisation from one person's worst faults.", fn: "Explain why it matters" },
            { text: "New leaders bring fresh ideas and energy that long rule tends to drain away.", fn: "Develop the point" },
            { text: "Knowing their time is limited can keep those in power humble and hardworking.", fn: "One more layer" },
            { text: "To this extent, the policy reflects a sound concern.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why a fixed rule is too rigid",
          sentences: [
            { text: "Second, however, forcing everyone out after exactly five years would be too rigid.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Many important roles require years of experience before a person performs them well.", fn: "Explanation" },
            { text: "Consider a skilled leader removed just as she has finally mastered a difficult job.", fn: "Example" },
            { text: "Such a rule would throw away valuable experience at the moment it becomes most useful.", fn: "Explain why it matters" },
            { text: "A fixed limit also ignores that some leaders keep serving honestly for far longer.", fn: "Develop the point" },
            { text: "Constant forced change can leave an organisation unstable and always starting over.", fn: "One more layer" },
            { text: "Limits on power, then, work best when they are sensible rather than rigidly fixed.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, requiring leaders to step down can guard against arrogance and abuse.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a strict five-year rule for everyone would waste experience and create instability.", fn: "Synthesis" },
            { text: "The wiser policy sets fair limits on power without removing every leader at the same fixed moment.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-109",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Some people claim that the goal of politics should be the pursuit of an ideal. Others argue that the goal should be finding common ground and reaching reasonable consensus.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward consensus while insisting ideals must guide it; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Politics constantly forces a choice between chasing a perfect vision and making a workable deal.", fn: "Hook" },
            { text: "Some claim the goal of politics should be the pursuit of an ideal, while others argue it should be finding common ground and reasonable consensus.", fn: "Restate the prompt" },
            { text: "I lean toward seeking consensus, but I believe ideals must still guide the search for it.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why consensus is the wiser goal",
          sentences: [
            { text: "First, finding common ground is often the only way to make government actually work.", fn: "Topic sentence", moves: ["First"] },
            { text: "In a divided society, no single group can have everything it wants, so compromise becomes necessary.", fn: "Explanation" },
            { text: "For example, an important law usually passes only when opposing sides agree to give something up.", fn: "Example" },
            { text: "This shows that reasonable consensus can turn endless conflict into real progress.", fn: "Explain why it matters", vocab: [{ term: "consensus", gloss: "共識" }] },
            { text: "Leaders who chase only a perfect ideal often achieve nothing but anger and deadlock.", fn: "Develop the point" },
            { text: "Working toward agreement also helps hold a divided nation peacefully together.", fn: "One more layer" },
            { text: "For these reasons, I lean toward consensus as the wiser goal.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why ideals must still guide it",
          sentences: [
            { text: "Second, however, the pursuit of ideals should not be abandoned in the search for agreement.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Ideals give politics its direction and remind leaders what they are really trying to achieve.", fn: "Explanation" },
            { text: "Consider reformers who refused to compromise on justice and changed unfair laws most people once accepted.", fn: "Example" },
            { text: "Such courage shows that some ideals are worth defending even when easy agreement is impossible.", fn: "Explain why it matters" },
            { text: "A politics of pure compromise can drift without purpose, settling for far too little.", fn: "Develop the point" },
            { text: "Real progress sometimes requires holding firm to a principle until others can be won over.", fn: "One more layer" },
            { text: "Both views, then, capture something politics must somehow hold together.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I believe the goal of politics should usually be reasonable consensus.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But ideals must still guide that search, or compromise loses all direction.", fn: "Synthesis" },
            { text: "The best politics seeks common ground while staying true to the ideals worth pursuing.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-110",
    type: "issue",
    category: "Environment",
    prompt:
      "The best way to solve environmental problems caused by consumer-generated waste is for towns and cities to impose strict limits on the amount of trash they will accept from each household.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that trash limits help, then argues they are not the best solution alone; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Mountains of household waste are among the most visible problems our towns now face.", fn: "Hook" },
            { text: "Some people claim that the best way to solve waste problems is for towns to impose strict limits on the trash they accept from each household.", fn: "Restate the prompt" },
            { text: "I agree that limiting waste can help, but I do not believe strict limits alone are the best solution.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How limits help",
          sentences: [
            { text: "First, limiting household trash can genuinely reduce the waste a town produces.", fn: "Topic sentence", moves: ["First"] },
            { text: "When people must keep within a fixed limit, they think harder about what they throw away.", fn: "Explanation" },
            { text: "For example, a household charged for extra bags will quickly learn to waste less and recycle more.", fn: "Example", vocab: [{ term: "recycle", gloss: "回收；再利用" }] },
            { text: "This shows that clear limits can push people to change their wasteful habits.", fn: "Explain why it matters" },
            { text: "Less trash also means lower costs and less harm to the land and air around a town.", fn: "Develop the point" },
            { text: "Strict limits send a clear signal that waste is everyone's responsibility.", fn: "One more layer" },
            { text: "To this extent, trash limits are a useful tool.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why limits alone are not enough",
          sentences: [
            { text: "Second, however, strict limits alone are far from the best way to solve the problem.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Limits punish waste but do little to give people better alternatives.", fn: "Explanation" },
            { text: "Consider a family that wants to waste less but has no recycling service to make it possible.", fn: "Example" },
            { text: "Such cases show that limits without support can simply lead to illegal dumping instead.", fn: "Explain why it matters" },
            { text: "Recycling programmes, better packaging, and public education often reduce waste more effectively.", fn: "Develop the point" },
            { text: "Strict rules can also fall hardest on large or poor families with little control over their waste.", fn: "One more layer" },
            { text: "The best solution, then, combines limits with real alternatives and education.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, strict limits on household trash can usefully reduce waste.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But limits alone are not the best answer, since people also need better alternatives.", fn: "Synthesis" },
            { text: "The wisest approach joins sensible limits with recycling, education, and less wasteful products.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-111",
    type: "issue",
    category: "Education",
    prompt:
      "We learn our most valuable lessons in life from struggling with our limitations rather than from enjoying our successes.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): largely agrees that struggle teaches deeply while arguing successes teach too; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Hard times often teach us lessons that easy times never could.", fn: "Hook" },
            { text: "Some people argue that we learn our most valuable lessons from struggling with our limitations rather than from enjoying our successes.", fn: "Restate the prompt" },
            { text: "I largely agree that struggle teaches deeply, but I believe our successes also offer valuable lessons.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How struggle teaches",
          sentences: [
            { text: "First, struggling with our limitations often teaches our deepest lessons.", fn: "Topic sentence", vocab: [{ term: "limitations", gloss: "局限；缺陷" }], moves: ["First"] },
            { text: "Failure forces us to look honestly at our weaknesses and find ways to improve.", fn: "Explanation" },
            { text: "For example, a student who fails an exam may finally learn how to study properly.", fn: "Example" },
            { text: "This shows that hardship can teach lessons that comfort and ease never deliver.", fn: "Explain why it matters" },
            { text: "Struggle also builds patience, courage, and the strength to keep going.", fn: "Develop the point" },
            { text: "People who overcome real difficulty often understand themselves far better afterward.", fn: "One more layer" },
            { text: "To this extent, our limitations can be powerful teachers.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — How successes teach too",
          sentences: [
            { text: "Second, however, our successes also teach valuable lessons of their own.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Success shows us what we do well and encourages us to build on our strengths.", fn: "Explanation" },
            { text: "Consider an athlete who wins a race and learns exactly which training methods truly work.", fn: "Example" },
            { text: "Such victories teach lessons about what to repeat, not only what to fix.", fn: "Explain why it matters" },
            { text: "Enjoying success also builds the confidence that makes future effort possible.", fn: "Develop the point" },
            { text: "A life of nothing but struggle could leave a person discouraged rather than wise.", fn: "One more layer" },
            { text: "Success and struggle, then, both have important lessons to teach.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, struggling with our limitations often teaches our deepest and most valuable lessons.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But our successes teach us too, showing us our strengths and building our confidence.", fn: "Synthesis" },
            { text: "We learn best from both our struggles and our successes, not from either one alone.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-112",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: While boredom is often expressed with a sense of self-satisfaction, it should really be a source of embarrassment. Reason: Boredom arises from a lack of imagination and self-motivation.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that boredom can reflect a dull mind while arguing it is not always shameful; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People often complain of boredom as if the world, not they, were to blame.", fn: "Hook" },
            { text: "One claim holds that boredom should be a source of embarrassment, on the reason that it arises from a lack of imagination and self-motivation.", fn: "Restate the prompt" },
            { text: "I agree that boredom sometimes reveals a dull mind, but I do not believe it is always something to be ashamed of.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — When boredom reflects a dull mind",
          sentences: [
            { text: "First, there is real truth in the reason behind the claim.", fn: "Topic sentence", moves: ["First"] },
            { text: "A person with imagination can find something interesting in almost any situation.", fn: "Explanation" },
            { text: "For example, a curious child left alone with simple objects will happily invent endless games.", fn: "Example" },
            { text: "This shows that boredom often reflects a failure to use one's own imagination.", fn: "Explain why it matters", vocab: [{ term: "imagination", gloss: "想像力" }] },
            { text: "People who rely on others to entertain them may struggle whenever they are left alone.", fn: "Develop the point" },
            { text: "Self-motivated people, by contrast, rarely run out of things to think about or do.", fn: "One more layer", moves: ["by contrast"] },
            { text: "To this extent, boredom can indeed reveal a lack of imagination.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why boredom is not always shameful",
          sentences: [
            { text: "Second, however, boredom is not always a source of embarrassment.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some situations are genuinely dull through no fault of the person trapped in them.", fn: "Explanation" },
            { text: "Consider a worker forced to repeat the same meaningless task for hours on end.", fn: "Example" },
            { text: "Such boredom comes from the situation, not from any failure of imagination.", fn: "Explain why it matters" },
            { text: "Boredom can also be useful, since it pushes people to seek change and new challenges.", fn: "Develop the point" },
            { text: "A restless, bored feeling has driven many people to invent, explore, and create.", fn: "One more layer" },
            { text: "Boredom, then, is not always shameful but is sometimes natural or even helpful.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, boredom can sometimes reveal a lack of imagination and self-motivation.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it is not always shameful, since dull situations and useful restlessness exist as well.", fn: "Synthesis" },
            { text: "Whether boredom should embarrass us depends on whether it comes from our own dull minds or from the world around us.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-113",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that the most important qualities of an effective teacher are understanding and empathy. Others believe that it is more important for teachers to be rigorous and demanding in their expectations for students.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that values empathy and rigour and argues the best teachers combine them; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A great teacher can change a student's life, but people disagree about what makes one great.", fn: "Hook" },
            { text: "Some believe the most important qualities of a teacher are understanding and empathy, while others believe teachers should be rigorous and demanding.", fn: "Restate the prompt" },
            { text: "I believe both qualities matter, and that the best teachers combine warmth with high expectations.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why empathy matters",
          sentences: [
            { text: "First, understanding and empathy are clearly vital qualities in a teacher.", fn: "Topic sentence", vocab: [{ term: "empathy", gloss: "同理心；共情" }], moves: ["First"] },
            { text: "Students learn best from someone who notices their struggles and believes in them.", fn: "Explanation" },
            { text: "For example, a patient teacher can give a frightened student the confidence to keep trying.", fn: "Example" },
            { text: "This shows that empathy can unlock learning that fear and pressure would only block.", fn: "Explain why it matters" },
            { text: "A caring teacher also earns the trust that makes students willing to take risks.", fn: "Develop the point" },
            { text: "Without warmth, even the most knowledgeable teacher may fail to reach her students.", fn: "One more layer" },
            { text: "To this extent, empathy is an essential teaching quality.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why rigour matters",
          sentences: [
            { text: "Second, however, being rigorous and demanding is just as important.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Students rarely reach their potential unless someone expects real effort from them.", fn: "Explanation" },
            { text: "Consider a demanding teacher who pushes her class to attempt work they thought was beyond them.", fn: "Example" },
            { text: "Such high expectations can draw out abilities students never knew they had.", fn: "Explain why it matters" },
            { text: "A teacher who is only kind but never challenging may let students settle for too little.", fn: "Develop the point" },
            { text: "Real respect for students includes believing they can meet a high standard.", fn: "One more layer" },
            { text: "Both qualities, then, are needed rather than only one.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, empathy helps teachers reach and encourage their students.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But rigour matters too, since high expectations draw out a student's best.", fn: "Synthesis" },
            { text: "The finest teachers combine genuine warmth with demanding standards, joining care and challenge together.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-114",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: Though often considered an objective pursuit, learning about the historical past requires creativity. Reason: Because we can never know the past directly, we must reconstruct it by imaginatively interpreting historical accounts, documents, and artifacts.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): agrees that history requires creativity while arguing it also demands evidence and discipline; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We often think of history as a simple record of facts about what happened.", fn: "Hook" },
            { text: "One claim holds that learning about the past requires creativity, on the reason that we can never know the past directly and must imaginatively interpret accounts and artifacts.", fn: "Restate the prompt" },
            { text: "I largely agree that history requires creativity, though I believe it also demands careful discipline and evidence.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why history requires creativity",
          sentences: [
            { text: "First, the reason behind the claim is sound, since the past can never be known directly.", fn: "Topic sentence", moves: ["First"] },
            { text: "Historians work from scattered documents and objects that rarely tell a complete story.", fn: "Explanation" },
            { text: "For example, a few old letters and ruins must be imaginatively pieced together into a picture of a lost world.", fn: "Example", vocab: [{ term: "interpret", gloss: "詮釋；解讀" }] },
            { text: "This shows that understanding history requires real imagination to fill the gaps.", fn: "Explain why it matters" },
            { text: "Two historians may interpret the same evidence in strikingly different ways.", fn: "Develop the point" },
            { text: "Reconstructing the past, like creating a story, calls for genuine creative thought.", fn: "One more layer" },
            { text: "To this extent, the claim and its reason clearly hold.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why history also needs discipline",
          sentences: [
            { text: "Second, however, history requires careful discipline as much as creativity.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A historian's imagination must always be guided and limited by the actual evidence.", fn: "Explanation" },
            { text: "Consider a scholar who invents an exciting story that the surviving facts simply do not support.", fn: "Example" },
            { text: "Such invention shows that creativity without evidence produces fiction rather than history.", fn: "Explain why it matters" },
            { text: "Good history depends on careful research, honest reasoning, and respect for the facts.", fn: "Develop the point" },
            { text: "Creativity helps interpret the past, but evidence must keep that interpretation honest.", fn: "One more layer" },
            { text: "History, then, needs both imagination and discipline working together.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, learning about the past truly does require creativity to interpret incomplete evidence.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it also demands discipline, so that imagination stays bound to the facts.", fn: "Synthesis" },
            { text: "The best history joins creative interpretation with careful respect for the evidence.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-115",
    type: "issue",
    category: "The Individual",
    prompt:
      "Claim: No act is done purely for the benefit of others. Reason: All actions — even those that seem to be done for other people — are based on self-interest.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that self-interest drives much behaviour while arguing genuine selflessness exists; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People often argue that even kindness is secretly selfish at its root.", fn: "Hook" },
            { text: "One claim holds that no act is done purely for others, on the reason that all actions are ultimately based on self-interest.", fn: "Restate the prompt" },
            { text: "I agree that self-interest drives much of what we do, but I disagree that no act is ever truly selfless.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why self-interest is powerful",
          sentences: [
            { text: "First, there is real truth in the reason that self-interest shapes many of our actions.", fn: "Topic sentence", moves: ["First"] },
            { text: "Even generous acts often bring us rewards, such as praise, gratitude, or a good feeling.", fn: "Explanation" },
            { text: "For example, a person may give to charity partly to feel proud or to look good to others.", fn: "Example" },
            { text: "This shows that hidden self-interest can lie behind acts that seem purely kind.", fn: "Explain why it matters" },
            { text: "Much of human behaviour really is driven by the wish for benefit or comfort.", fn: "Develop the point" },
            { text: "We naturally tend to protect ourselves and to seek our own advantage.", fn: "One more layer" },
            { text: "To this extent, the reason behind the claim has genuine force.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why genuine selflessness exists",
          sentences: [
            { text: "Second, however, some acts truly are done purely for the benefit of others.", fn: "Topic sentence", moves: ["Second"] },
            { text: "People sometimes sacrifice greatly for strangers with no possible reward to themselves.", fn: "Explanation" },
            { text: "Consider a person who dies trying to save a drowning stranger she will never meet again.", fn: "Example", vocab: [{ term: "sacrifice", gloss: "犧牲" }] },
            { text: "Such sacrifice cannot be explained away as mere hidden self-interest.", fn: "Explain why it matters" },
            { text: "To call every kind act selfish stretches the idea of self-interest until it means nothing.", fn: "Develop the point" },
            { text: "Quiet, anonymous giving, expecting no thanks, also shows that real selflessness exists.", fn: "One more layer" },
            { text: "Genuine concern for others, then, is a real part of human nature.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, self-interest does drive a great deal of what we do.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But some acts are genuinely selfless, done purely for the good of others.", fn: "Synthesis" },
            { text: "Human nature includes both deep self-interest and a real capacity for selfless care.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-116",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "To understand the most important characteristics of a society, one must study its major cities.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that cities reveal much about a society while arguing they do not reveal the whole; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A nation's great cities are busy, visible, and full of life.", fn: "Hook" },
            { text: "Some people argue that to understand the most important characteristics of a society, one must study its major cities.", fn: "Restate the prompt" },
            { text: "I agree that cities reveal a great deal, but I do not believe they show the whole character of a society.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why cities reveal much",
          sentences: [
            { text: "First, a society's major cities do reveal many of its most important features.", fn: "Topic sentence", moves: ["First"] },
            { text: "Cities gather a nation's business, art, government, and diverse people in one place.", fn: "Explanation" },
            { text: "For example, a capital city often shows a country's wealth, power, and cultural energy at a glance.", fn: "Example" },
            { text: "This shows that studying cities can teach us much about how a society works.", fn: "Explain why it matters" },
            { text: "Cities are also where new ideas, trends, and changes usually appear first.", fn: "Develop the point" },
            { text: "Most of a nation's economic and political life is concentrated in its largest cities.", fn: "One more layer" },
            { text: "To this extent, cities genuinely reveal a society's character.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why cities are not the whole",
          sentences: [
            { text: "Second, however, cities alone cannot reveal the whole character of a society.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Much of a nation's life and tradition exists far from its busy urban centres.", fn: "Explanation", vocab: [{ term: "urban", gloss: "城市的；都市的" }] },
            { text: "Consider the villages and countryside where many people live and old customs survive.", fn: "Example" },
            { text: "Such places show values and ways of life that the cities may have left behind.", fn: "Explain why it matters" },
            { text: "A society is also shaped by its history, religion, and rural communities, not just its cities.", fn: "Develop the point" },
            { text: "Judging a whole nation by its cities alone would ignore the lives of millions.", fn: "One more layer" },
            { text: "Understanding a society, then, requires looking well beyond its major cities.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a society's major cities reveal many of its most important characteristics.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they cannot show the whole of a society shaped by its regions, history, and countryside.", fn: "Synthesis" },
            { text: "We understand a society best by studying both its cities and the wider life beyond them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-117",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Scandals are useful because they focus our attention on problems in ways that no speaker or reformer ever could.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that scandals can expose problems while arguing they are unreliable and harmful; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A single scandal can dominate the news for weeks and seize everyone's attention.", fn: "Hook" },
            { text: "Some people claim that scandals are useful because they focus our attention on problems as no speaker or reformer ever could.", fn: "Restate the prompt" },
            { text: "I agree that scandals can expose real problems, but I do not believe they are a reliably useful way to do so.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How scandals expose problems",
          sentences: [
            { text: "First, scandals really can force public attention onto serious problems.", fn: "Topic sentence", moves: ["First"] },
            { text: "A shocking event often makes people notice an issue they had long ignored.", fn: "Explanation" },
            { text: "For example, a scandal about unsafe products can suddenly push a government to pass stronger laws.", fn: "Example" },
            { text: "This shows that scandals can achieve change that quiet warnings never managed.", fn: "Explain why it matters" },
            { text: "Public outrage can give reformers the energy they need to fix a hidden wrong.", fn: "Develop the point" },
            { text: "A dramatic scandal can reveal problems that powerful people had worked hard to hide.", fn: "One more layer", vocab: [{ term: "scandal", gloss: "醜聞" }] },
            { text: "To this extent, scandals can indeed be useful.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why scandals are unreliable",
          sentences: [
            { text: "Second, however, scandals are an unreliable and often harmful way to highlight problems.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Attention drawn by a scandal usually focuses on shocking people rather than on real solutions.", fn: "Explanation" },
            { text: "Consider how a scandal can ruin an innocent person's reputation before the facts are even clear.", fn: "Example" },
            { text: "Such damage shows that scandals can harm as much as they help.", fn: "Explain why it matters" },
            { text: "The public also tends to forget a scandal as soon as the next one appears.", fn: "Develop the point" },
            { text: "Important but undramatic problems may be ignored simply because they create no scandal.", fn: "One more layer" },
            { text: "Scandals, then, are a clumsy and unreliable tool for solving real problems.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, scandals can sometimes force useful attention onto hidden problems.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they are unreliable and often harmful, focusing on shock rather than on solutions.", fn: "Synthesis" },
            { text: "Real progress depends far more on steady reform than on the passing storm of a scandal.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-118",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Claim: Governments must ensure that their major cities receive the financial support they need in order to thrive. Reason: It is primarily in cities that a nation's cultural traditions are preserved and generated.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): backs support for cities while doubting the reason that culture lives mainly in them; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Great cities can be the proud showcases of an entire nation.", fn: "Hook" },
            { text: "One claim holds that governments must ensure their major cities receive the funding they need to thrive, on the reason that culture is preserved and generated primarily in cities.", fn: "Restate the prompt" },
            { text: "I agree that cities deserve support, but I doubt the reason and believe the rest of the nation needs funding too.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why cities deserve support",
          sentences: [
            { text: "First, major cities genuinely do need and deserve strong government support.", fn: "Topic sentence", moves: ["First"] },
            { text: "Cities hold much of a nation's business, services, and people in one busy place.", fn: "Explanation" },
            { text: "For example, a well-funded city can offer good transport, hospitals, and jobs to millions.", fn: "Example" },
            { text: "This shows that supporting cities can benefit a large share of a nation's people.", fn: "Explain why it matters" },
            { text: "Thriving cities can also drive the whole country's economy forward.", fn: "Develop the point" },
            { text: "Neglected cities, by contrast, can fall into poverty, crime, and decay.", fn: "One more layer", moves: ["by contrast"] },
            { text: "To this extent, funding major cities is clearly wise.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the reason is doubtful",
          sentences: [
            { text: "Second, however, the reason that culture lives primarily in cities is doubtful.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Much of a nation's tradition is created and preserved in its villages and countryside.", fn: "Explanation" },
            { text: "Consider the folk songs, crafts, and customs that survive best far from any major city.", fn: "Example" },
            { text: "Such traditions show that culture does not belong to cities alone.", fn: "Explain why it matters" },
            { text: "Rural areas also need funding for schools, roads, and hospitals just as much as cities do.", fn: "Develop the point", vocab: [{ term: "rural", gloss: "鄉村的" }] },
            { text: "Pouring money only into cities could leave the rest of the nation neglected and poor.", fn: "One more layer" },
            { text: "Government support, then, should reach the whole nation, not mainly its cities.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, major cities do deserve the funding they need to thrive.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the reason that culture lives only in cities is mistaken, and rural areas need support too.", fn: "Synthesis" },
            { text: "The wisest governments fund their cities while never neglecting the regions beyond them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-119",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Some people believe that government funding of the arts is necessary to ensure that the arts can flourish and be available to all people. Others believe that government funding of the arts threatens the integrity of the arts.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward funding the arts while granting the risk to integrity; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Without money, many artists and theatres could not survive, yet money can also bring control.", fn: "Hook" },
            { text: "Some believe government funding of the arts is necessary so the arts can flourish for all, while others believe such funding threatens the integrity of the arts.", fn: "Restate the prompt" },
            { text: "I lean toward the view that funding is necessary, but I accept that it can endanger artistic integrity.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why funding helps the arts flourish",
          sentences: [
            { text: "First, government funding genuinely helps the arts flourish and reach everyone.", fn: "Topic sentence", moves: ["First"] },
            { text: "Many valuable works of art could never be made without public support.", fn: "Explanation" },
            { text: "For example, free museums and funded theatres let poor families enjoy art they could not otherwise afford.", fn: "Example" },
            { text: "This shows that public funding can make the arts available to all, not just the rich.", fn: "Explain why it matters" },
            { text: "Support also lets artists take creative risks instead of chasing only what sells.", fn: "Develop the point" },
            { text: "Without funding, much important culture would simply disappear.", fn: "One more layer" },
            { text: "For these reasons, I believe government support for the arts is necessary.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why funding can threaten integrity",
          sentences: [
            { text: "Second, however, the opposing view rightly warns that funding can threaten artistic integrity.", fn: "Topic sentence", vocab: [{ term: "integrity", gloss: "誠信；正直" }], moves: ["Second"] },
            { text: "A government that pays for art may try to control what artists are allowed to say.", fn: "Explanation" },
            { text: "Consider an artist who softens her honest message for fear of losing her public funding.", fn: "Example" },
            { text: "Such pressure shows that money can quietly limit the freedom art depends on.", fn: "Explain why it matters" },
            { text: "Funding may also favour safe, official art over bold or critical work.", fn: "Develop the point" },
            { text: "Art that must please the government can lose the honesty that gives it real value.", fn: "One more layer" },
            { text: "Both views, then, capture a real truth about funding the arts.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, I believe government funding is necessary for the arts to flourish and reach all people.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it can threaten artistic integrity, so it must be given with care.", fn: "Synthesis" },
            { text: "The wisest funding supports the arts generously while protecting the freedom that keeps them honest.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-120",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: In any field — business, politics, education, government — those in power should step down after five years. Reason: The surest path to success for any enterprise is revitalization through new leadership.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that new leadership can revitalise an enterprise while arguing a rigid rule loses experience; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "New energy can breathe life into an organisation that has grown tired.", fn: "Hook" },
            { text: "One claim holds that those in power should step down after five years, on the reason that new leadership is the surest path to revitalising any enterprise.", fn: "Restate the prompt" },
            { text: "I agree that fresh leadership often helps, but I believe a strict five-year rule and its reason both go too far.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How new leadership can revitalise",
          sentences: [
            { text: "First, there is real truth in the reason that new leadership can revitalise an enterprise.", fn: "Topic sentence", moves: ["First"] },
            { text: "A new leader often brings fresh ideas, new energy, and a willingness to change.", fn: "Explanation" },
            { text: "For example, a struggling company can be transformed when a bold new leader takes charge.", fn: "Example" },
            { text: "This shows that a change at the top can break old habits and renew an organisation.", fn: "Explain why it matters", vocab: [{ term: "revitalise", gloss: "振興；使復興" }] },
            { text: "Leaders who stay too long may grow stale, complacent, or resistant to any change.", fn: "Develop the point" },
            { text: "Regular renewal can keep an enterprise lively and open to new possibilities.", fn: "One more layer" },
            { text: "To this extent, the reason behind the claim holds genuine value.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why a rigid rule loses experience",
          sentences: [
            { text: "Second, however, forcing everyone out after five years would also do real harm.", fn: "Topic sentence", moves: ["Second"] },
            { text: "New leadership is not always better, and constant change can bring instability.", fn: "Explanation" },
            { text: "Consider a skilled leader removed by the rule just as her long plans were starting to succeed.", fn: "Example" },
            { text: "Such a loss shows that experience and continuity also matter for an enterprise's success.", fn: "Explain why it matters" },
            { text: "A fixed limit ignores that some leaders keep improving and renewing things for many years.", fn: "Develop the point" },
            { text: "Revitalisation can also come from new ideas within an organisation, not only from new leaders.", fn: "One more layer" },
            { text: "Fresh leadership, then, is valuable but should not be forced on a rigid timetable.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, new leadership can genuinely revitalise a tired enterprise.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a strict five-year rule would waste experience and cause needless instability.", fn: "Synthesis" },
            { text: "The wisest organisations welcome renewal without forcing out every leader at a fixed moment.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-121",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "In any field of endeavor, it is impossible to make a significant contribution without first being strongly influenced by past achievements within that field.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): largely agrees that the past shapes new work while arguing 'impossible' is too absolute; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Almost every new idea is built upon the work of those who came before.", fn: "Hook" },
            { text: "Some people argue that in any field, it is impossible to make a significant contribution without first being strongly influenced by past achievements.", fn: "Restate the prompt" },
            { text: "I largely agree that the past shapes new work, but I believe the word impossible claims too much.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How the past shapes new work",
          sentences: [
            { text: "First, past achievements really do shape almost every important contribution.", fn: "Topic sentence", moves: ["First"] },
            { text: "We learn from earlier work what has already been tried and what still needs solving.", fn: "Explanation" },
            { text: "For example, a scientist must understand existing theories before she can improve upon them.", fn: "Example" },
            { text: "This shows that knowledge of the past usually provides the foundation for new discovery.", fn: "Explain why it matters" },
            { text: "Even bold new ideas often grow as a response to the work of earlier thinkers.", fn: "Develop the point" },
            { text: "Without learning what came before, a person may simply repeat old mistakes.", fn: "One more layer" },
            { text: "To this extent, the influence of past achievements is genuinely important.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why 'impossible' is too absolute",
          sentences: [
            { text: "Second, however, the claim that contribution is impossible without such influence goes too far.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Certain people make important breakthroughs precisely because they are not bound by the past.", fn: "Explanation" },
            { text: "Consider a self-taught inventor who solves a problem in a way no expert had ever considered.", fn: "Example" },
            { text: "Such cases show that fresh, untrained thinking can sometimes lead to real contributions.", fn: "Explain why it matters" },
            { text: "Strong influence from the past can even trap people in old assumptions and habits.", fn: "Develop the point", vocab: [{ term: "assumptions", gloss: "假設；成見" }] },
            { text: "A few great advances have come from outsiders who knew little of the established field.", fn: "One more layer" },
            { text: "Past achievements usually help, then, but they are not always strictly necessary.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, past achievements shape and support most significant contributions.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But it is not truly impossible to contribute without their strong influence.", fn: "Synthesis" },
            { text: "Most progress builds on the past, yet fresh and independent minds can still break new ground.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-122",
    type: "issue",
    category: "Environment",
    prompt:
      "Nations should pass laws to preserve any remaining wilderness areas in their natural state, even if these areas could be developed for economic gain.",
    directions: D_POLICY,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a policy response that backs strong wilderness laws while arguing 'any remaining' is too rigid; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Some of the last wild places on earth sit on land that companies would gladly develop.", fn: "Hook" },
            { text: "One proposed policy is that nations should pass laws to preserve any remaining wilderness in its natural state, even where it could be developed for gain.", fn: "Restate the prompt" },
            { text: "I strongly support protecting wilderness, but I believe a law covering every remaining area would be too rigid.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why preserving wilderness is vital",
          sentences: [
            { text: "First, protecting wilderness by law brings deep and lasting benefits.", fn: "Topic sentence", vocab: [{ term: "wilderness", gloss: "荒野；原野" }], moves: ["First"] },
            { text: "Wild areas shelter rare species and keep the natural systems we all rely on in balance.", fn: "Explanation" },
            { text: "For example, protected forests clean our air and water and guard plants found nowhere else.", fn: "Example" },
            { text: "This shows that preserving wilderness protects human life as much as nature.", fn: "Explain why it matters" },
            { text: "Wild places also give people beauty, peace, and a rare sense of wonder.", fn: "Develop the point" },
            { text: "Once developed, such land can almost never return to its natural state.", fn: "One more layer" },
            { text: "To this extent, strong laws to protect wilderness are clearly wise.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why an absolute rule is too rigid",
          sentences: [
            { text: "Second, however, a law protecting every remaining area would be too rigid to be fair.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some regions hold wild land that people urgently need for food, water, or shelter.", fn: "Explanation" },
            { text: "Consider a poor community whose only path out of poverty runs through a small part of its wild land.", fn: "Example" },
            { text: "Such cases show that an absolute ban could trap people in hardship for the sake of untouched land.", fn: "Explain why it matters" },
            { text: "Carefully chosen limits can protect most wilderness while still meeting genuine human needs.", fn: "Develop the point" },
            { text: "A rule covering every area ignores the real differences between places and situations.", fn: "One more layer" },
            { text: "Protection, then, should be strong but flexible rather than absolute.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, nations should pass strong laws to protect their remaining wilderness.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a rule preserving every area without exception would be too rigid and unfair.", fn: "Synthesis" },
            { text: "The wisest laws guard most wilderness while leaving room for the most pressing human needs.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-123",
    type: "issue",
    category: "Education",
    prompt:
      "Governments should offer a free university education to any student who has been admitted to a university but who cannot afford the tuition.",
    directions: D_POLICY,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a policy response that backs free tuition for needy admitted students while arguing it must be funded with care; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every year, talented students win a place at university but cannot pay the tuition.", fn: "Hook" },
            { text: "One proposed policy is that governments should offer a free university education to any admitted student who cannot afford it.", fn: "Restate the prompt" },
            { text: "I largely support this policy, though I believe it must be funded and managed with care.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why need-based free tuition is worthwhile",
          sentences: [
            { text: "First, paying for admitted students who cannot afford tuition is plainly worthwhile.", fn: "Topic sentence", vocab: [{ term: "tuition", gloss: "學費" }], moves: ["First"] },
            { text: "A student qualified for university should not be turned away simply because she is poor.", fn: "Explanation" },
            { text: "For example, a gifted student from a poor family could become a doctor the whole society needs.", fn: "Example" },
            { text: "This shows that helping such students turns wasted talent into real benefit for everyone.", fn: "Explain why it matters" },
            { text: "Removing the barrier of cost also makes opportunity fairer between rich and poor.", fn: "Develop the point" },
            { text: "A nation that educates its talented poor invests wisely in its own future.", fn: "One more layer" },
            { text: "To this extent, the policy is both fair and sensible.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it must be funded with care",
          sentences: [
            { text: "Second, however, the policy must be funded and managed carefully to work well.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Free tuition is never truly free, since the public must pay for it through taxes.", fn: "Explanation" },
            { text: "Consider a government that promises free education but cannot afford it, leaving universities underfunded.", fn: "Example" },
            { text: "Such failure shows that good intentions need realistic funding behind them.", fn: "Explain why it matters" },
            { text: "Clear rules are also needed to ensure that help goes to those who genuinely cannot pay.", fn: "Develop the point" },
            { text: "Without careful planning, the policy could be wasteful or open to abuse.", fn: "One more layer" },
            { text: "The policy, then, works best when it is generous but also responsible.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, governments should help admitted students who cannot afford university.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the policy must be funded and managed carefully to succeed.", fn: "Synthesis" },
            { text: "The wisest approach pays for talented students in real need while planning the cost responsibly.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-124",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Claim: In any situation, the best way to persuade other people is to present them with facts and statistics rather than with emotional arguments. Reason: Facts are objective, so they are more persuasive than subjective appeals.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that facts persuade while arguing emotion matters too and the reason is overstated; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We like to believe that solid facts alone will change people's minds.", fn: "Hook" },
            { text: "One claim holds that the best way to persuade people is to present facts and statistics rather than emotional arguments, on the reason that facts are objective and therefore more persuasive.", fn: "Restate the prompt" },
            { text: "I agree that facts matter greatly, but I disagree that they are always more persuasive than emotion.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why facts persuade",
          sentences: [
            { text: "First, facts and statistics are indeed powerful tools of persuasion.", fn: "Topic sentence", vocab: [{ term: "statistics", gloss: "統計數據" }], moves: ["First"] },
            { text: "Solid evidence gives an argument a strength that mere opinion cannot match.", fn: "Explanation" },
            { text: "For example, clear data showing that a medicine works can convince doubtful patients to take it.", fn: "Example" },
            { text: "This shows that objective facts can settle questions that feelings alone never could.", fn: "Explain why it matters" },
            { text: "People rightly trust arguments backed by real proof more than empty claims.", fn: "Develop the point" },
            { text: "Facts also protect us from being fooled by clever but false appeals.", fn: "One more layer" },
            { text: "To this extent, the claim rightly values facts in persuasion.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why emotion persuades too",
          sentences: [
            { text: "Second, however, facts alone are often not the most persuasive approach.", fn: "Topic sentence", moves: ["Second"] },
            { text: "People are moved by feelings as much as by figures, and dry data can leave them cold.", fn: "Explanation" },
            { text: "Consider how a single human story can stir more action than a page of statistics.", fn: "Example" },
            { text: "Such examples show that emotion often reaches people where facts alone cannot.", fn: "Explain why it matters" },
            { text: "The most persuasive arguments usually combine clear facts with genuine emotional appeal.", fn: "Develop the point" },
            { text: "Facts can also be ignored or twisted, so they are not as purely objective as the claim assumes.", fn: "One more layer" },
            { text: "Persuasion, then, depends on both reason and feeling working together.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, facts and statistics are genuinely important in persuading people.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But emotion is often just as powerful, and the best arguments use both.", fn: "Synthesis" },
            { text: "We persuade most effectively when we join solid facts with a sincere appeal to feeling.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-125",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Some people believe that success in creative fields, such as painting, fiction writing, and filmmaking, primarily requires hard work and perseverance. Others believe that such success mainly requires innate talents that cannot be learned.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward hard work while granting that talent matters; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "We often wonder whether great artists are born gifted or simply work harder than the rest.", fn: "Hook" },
            { text: "Some believe success in creative fields mainly requires hard work and perseverance, while others believe it mainly requires inborn talent that cannot be learned.", fn: "Restate the prompt" },
            { text: "I believe both matter, though I lean toward the view that hard work plays the larger role.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why hard work matters most",
          sentences: [
            { text: "First, hard work and perseverance are essential to creative success.", fn: "Topic sentence", vocab: [{ term: "perseverance", gloss: "毅力；不懈" }], moves: ["First"] },
            { text: "Even gifted people must practise for years to turn raw ability into real skill.", fn: "Explanation" },
            { text: "For example, famous writers often rewrite their work many times before it is any good.", fn: "Example" },
            { text: "This shows that creative achievement depends heavily on patient and stubborn effort.", fn: "Explain why it matters" },
            { text: "Talented people who never work hard usually waste the gifts they were born with.", fn: "Develop the point" },
            { text: "Perseverance also helps artists survive the failure and rejection that creative work brings.", fn: "One more layer" },
            { text: "For these reasons, I believe hard work is the larger factor.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why talent matters too",
          sentences: [
            { text: "Second, however, the opposing view rightly notes that inborn talent also matters.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some people seem to have a natural gift for music, painting, or storytelling.", fn: "Explanation" },
            { text: "Consider a child who plays beautiful music almost effortlessly while others struggle for years.", fn: "Example" },
            { text: "Such gifts show that talent can give certain people a real head start.", fn: "Explain why it matters" },
            { text: "Hard work alone may not reach the heights that genuine talent makes possible.", fn: "Develop the point" },
            { text: "The greatest creative success often comes when real talent meets relentless effort.", fn: "One more layer" },
            { text: "Both qualities, then, play a part in creative achievement.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, hard work and perseverance are essential to success in creative fields.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But inborn talent matters too, giving some people a natural advantage.", fn: "Synthesis" },
            { text: "The finest creative work usually grows where genuine talent and tireless effort meet.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-126",
    type: "issue",
    category: "Education",
    prompt:
      "In business, education, and government, it is always appropriate to remain skeptical of new leaders until those leaders show that they are worthy of trust.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that caution toward new leaders is wise while arguing 'always' is too strict; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A new leader arrives with promises but no proven record of keeping them.", fn: "Hook" },
            { text: "Some people claim that it is always appropriate to remain skeptical of new leaders until they show they are worthy of trust.", fn: "Restate the prompt" },
            { text: "I agree that healthy caution is wise, but I believe the word always makes the claim too strict.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why skepticism is wise",
          sentences: [
            { text: "First, a reasonable skepticism toward new leaders is usually wise.", fn: "Topic sentence", moves: ["First"] },
            { text: "New leaders often make grand promises that they may not be able to keep.", fn: "Explanation" },
            { text: "For example, a new manager who vows great change should be judged by results, not words.", fn: "Example" },
            { text: "This shows that careful judgment protects people from being misled by empty promises.", fn: "Explain why it matters" },
            { text: "History is full of leaders who won trust too easily and then abused it.", fn: "Develop the point" },
            { text: "A little caution gives a new leader the chance to prove herself by her actions.", fn: "One more layer", vocab: [{ term: "skepticism", gloss: "懷疑態度" }] },
            { text: "To this extent, skepticism toward new leaders is sensible.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why 'always' goes too far",
          sentences: [
            { text: "Second, however, remaining skeptical in every case would be harmful.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Some level of trust is needed for any leader to do her job at all.", fn: "Explanation" },
            { text: "Consider a team that refuses to cooperate with a capable new leader out of constant suspicion.", fn: "Example" },
            { text: "Such distrust can paralyse an organisation and prevent any progress.", fn: "Explain why it matters" },
            { text: "Endless skepticism can also be unfair to leaders who have done nothing to deserve it.", fn: "Develop the point" },
            { text: "Sometimes a leader's clear record or character earns reasonable trust from the start.", fn: "One more layer" },
            { text: "Skepticism, then, should be healthy rather than absolute and unending.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a reasonable caution toward new leaders is usually wise.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But remaining skeptical in every case would block cooperation and progress.", fn: "Synthesis" },
            { text: "The wisest approach watches new leaders carefully while still giving them a fair chance to earn trust.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-127",
    type: "issue",
    category: "Education",
    prompt:
      "Claim: Group assignments that students must work together to complete should replace a substantial amount of traditional lecture-based instruction in college and university courses. Reason: It is vital for students to gain experience collaborating with peers to study a topic and to achieve a common goal.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants the value of collaboration while arguing group work should not largely replace lectures; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Many classrooms still rely mostly on a teacher speaking while students listen.", fn: "Hook" },
            { text: "One claim holds that group assignments should replace a substantial amount of lecture-based teaching, on the reason that students must gain experience collaborating with peers.", fn: "Restate the prompt" },
            { text: "I agree that collaboration is valuable, but I do not believe group work should replace a substantial part of lectures.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why collaboration is valuable",
          sentences: [
            { text: "First, the reason behind the claim is sound, since collaboration is a vital skill.", fn: "Topic sentence", vocab: [{ term: "collaboration", gloss: "協作；合作" }], moves: ["First"] },
            { text: "Working in groups teaches students to share ideas, divide tasks, and solve problems together.", fn: "Explanation" },
            { text: "For example, a group project can teach teamwork that a silent lecture never could.", fn: "Example" },
            { text: "This shows that collaboration prepares students for work, where people rarely succeed alone.", fn: "Explain why it matters" },
            { text: "Group work also lets students learn from one another, not only from the teacher.", fn: "Develop the point" },
            { text: "Explaining an idea to a classmate can deepen a student's own understanding.", fn: "One more layer" },
            { text: "To this extent, group assignments deserve a real place in education.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why lectures are still needed",
          sentences: [
            { text: "Second, however, group work should not replace a substantial amount of lecture teaching.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Lectures remain an efficient way to deliver clear knowledge from an expert to many students.", fn: "Explanation" },
            { text: "Consider a difficult subject that students cannot grasp until a skilled teacher explains it clearly first.", fn: "Example" },
            { text: "Such cases show that group work alone can leave students confused and misinformed.", fn: "Explain why it matters" },
            { text: "Group projects can also be uneven, with some students doing all the work and others little.", fn: "Develop the point" },
            { text: "Too much group work could replace solid teaching with shallow and disorganised learning.", fn: "One more layer" },
            { text: "Collaboration, then, should add to lectures rather than largely replace them.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, group assignments teach valuable collaboration that students truly need.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they should not replace a substantial part of clear, expert lecturing.", fn: "Synthesis" },
            { text: "The best courses combine group work with strong lectures, joining teamwork and clear instruction.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-128",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Some people believe that in order to be effective, political leaders must yield to public opinion and abandon principle for the sake of compromise. Others believe that the most essential quality of an effective leader is the ability to remain consistently committed to particular principles and objectives.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward principle while granting that compromise is sometimes needed; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Leaders are pulled between standing firm on principle and bending to public demands.", fn: "Hook" },
            { text: "Some believe effective leaders must yield to public opinion and abandon principle for compromise, while others believe the key quality is staying committed to principles.", fn: "Restate the prompt" },
            { text: "I lean toward the value of principle, but I believe some willingness to compromise is also necessary.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why principle matters most",
          sentences: [
            { text: "First, staying committed to principles is essential to truly effective leadership.", fn: "Topic sentence", vocab: [{ term: "principle", gloss: "原則" }], moves: ["First"] },
            { text: "A principled leader gives her people direction and something to believe in.", fn: "Explanation" },
            { text: "For example, great reformers changed the world by refusing to abandon their core beliefs.", fn: "Example" },
            { text: "This shows that steady principle can achieve what constant compromise never could.", fn: "Explain why it matters" },
            { text: "Leaders who abandon every principle for popularity soon stand for nothing at all.", fn: "Develop the point" },
            { text: "People also lose respect for a leader who changes her values with every shift in opinion.", fn: "One more layer" },
            { text: "For these reasons, commitment to principle is a vital quality.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why compromise is also needed",
          sentences: [
            { text: "Second, however, some willingness to compromise is also necessary in real leadership.", fn: "Topic sentence", moves: ["Second"] },
            { text: "In a divided society, refusing ever to bend can lead only to conflict and deadlock.", fn: "Explanation" },
            { text: "Consider a leader who must compromise on small points to pass a law that helps millions.", fn: "Example" },
            { text: "Such compromise shows wisdom, not weakness, when it serves a greater good.", fn: "Explain why it matters" },
            { text: "A leader who ignores public opinion entirely may lose the support she needs to govern.", fn: "Develop the point" },
            { text: "Listening to the people and adjusting where wise is part of leading well.", fn: "One more layer" },
            { text: "Effective leaders, then, hold to principle while compromising on lesser matters.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, commitment to principle is at the heart of effective leadership.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But a willingness to compromise on smaller matters is also necessary to get things done.", fn: "Synthesis" },
            { text: "The best leaders stay true to their principles while bending wisely where compromise serves the greater good.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-129",
    type: "issue",
    category: "Education",
    prompt:
      "Formal education tends to restrain our minds and spirits rather than set them free.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): concedes that poor schooling can restrain the mind, then argues good education frees it; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "People sometimes blame schools for making students dull and obedient.", fn: "Hook" },
            { text: "Some people argue that formal education tends to restrain our minds and spirits rather than set them free.", fn: "Restate the prompt" },
            { text: "I agree that poor schooling can restrain us, but I believe good education frees the mind far more than it limits it.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — When education can restrain",
          sentences: [
            { text: "First, it is true that formal education can sometimes restrain the mind.", fn: "Topic sentence", moves: ["First"] },
            { text: "Schools that demand only memorising and obedience can dull a student's natural curiosity.", fn: "Explanation", vocab: [{ term: "curiosity", gloss: "好奇心" }] },
            { text: "For example, a rigid classroom may punish the very questions that real thinking requires.", fn: "Example" },
            { text: "This shows that education done badly can narrow the mind instead of opening it.", fn: "Explain why it matters" },
            { text: "Forcing every student through the same fixed path can leave little room for imagination.", fn: "Develop the point" },
            { text: "Some schooling really does train people to follow rather than to think.", fn: "One more layer" },
            { text: "To this extent, the statement points to a real danger.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why good education frees the mind",
          sentences: [
            { text: "Second, however, good education frees the mind far more than it restrains it.", fn: "Topic sentence", moves: ["Second"] },
            { text: "By teaching us to read, reason, and question, education gives us the tools of free thought.", fn: "Explanation" },
            { text: "Consider a student who, through learning, can suddenly understand and judge the wider world.", fn: "Example" },
            { text: "Such growth shows that knowledge releases people from ignorance and narrow assumptions.", fn: "Explain why it matters" },
            { text: "Education also opens doors to choices and freedoms a person would never have had otherwise.", fn: "Develop the point" },
            { text: "The fault lies not in education itself but only in education done poorly.", fn: "One more layer" },
            { text: "Real education, then, sets the mind free rather than chaining it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, badly run education can indeed restrain the mind and spirit.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But good education frees us far more, giving us the power to think for ourselves.", fn: "Synthesis" },
            { text: "Education limits us only when it is done poorly, and frees us when it is done well.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-130",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "The well-being of a society is enhanced when many of its people question authority.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): largely agrees that questioning authority helps society while arguing it needs limits; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "When no one ever questions those in power, a society can drift into serious trouble.", fn: "Hook" },
            { text: "Some people argue that the well-being of a society is enhanced when many of its people question authority.", fn: "Restate the prompt" },
            { text: "I largely agree that questioning authority helps a society, though unlimited questioning can also do harm.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How questioning helps",
          sentences: [
            { text: "First, questioning authority genuinely strengthens a society.", fn: "Topic sentence", vocab: [{ term: "authority", gloss: "權威；當權者" }], moves: ["First"] },
            { text: "When people challenge those in power, they help expose corruption and prevent abuse.", fn: "Explanation" },
            { text: "For example, citizens who question unjust laws have often pushed societies toward greater fairness.", fn: "Example" },
            { text: "This shows that healthy questioning keeps leaders honest and accountable.", fn: "Explain why it matters" },
            { text: "A society that questions its rulers is far less likely to suffer under tyranny.", fn: "Develop the point" },
            { text: "Open debate also helps a society find better ideas and correct its mistakes.", fn: "One more layer" },
            { text: "To this extent, questioning authority clearly improves a society's well-being.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why questioning needs limits",
          sentences: [
            { text: "Second, however, questioning authority without limit can also harm a society.", fn: "Topic sentence", moves: ["Second"] },
            { text: "If people doubt every rule and leader, cooperation and order can break down.", fn: "Explanation" },
            { text: "Consider a society where no one trusts the police, the courts, or any shared law.", fn: "Example" },
            { text: "Such total distrust can lead to chaos rather than to greater well-being.", fn: "Explain why it matters" },
            { text: "Some authority, such as fair laws and honest courts, deserves reasonable respect.", fn: "Develop the point" },
            { text: "Questioning works best when it is thoughtful rather than reckless and endless.", fn: "One more layer" },
            { text: "Healthy questioning, then, must be balanced with reasonable trust.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a society benefits greatly when many of its people question authority.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But questioning must have limits, or trust and order may collapse entirely.", fn: "Synthesis" },
            { text: "A nation thrives when it questions power wisely while still respecting what deserves respect.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-131",
    type: "issue",
    category: "Technology",
    prompt:
      "Governments should focus on solving the immediate problems of today rather than on trying to solve the anticipated problems of the future.",
    directions: D_RECOMMENDATION,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a recommendation response that backs urgent action while arguing the future cannot be ignored; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Governments face a constant flood of urgent problems demanding attention right now.", fn: "Hook" },
            { text: "Some people recommend that governments should focus on solving today's immediate problems rather than the anticipated problems of the future.", fn: "Restate the prompt" },
            { text: "I agree that urgent problems deserve attention, but I believe ignoring the future would be a serious mistake.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why immediate problems matter",
          sentences: [
            { text: "First, governments are right to give urgent present problems real attention.", fn: "Topic sentence", moves: ["First"] },
            { text: "People who are hungry, sick, or unsafe today cannot wait for distant solutions.", fn: "Explanation" },
            { text: "For example, a government must respond at once to a flood or a sudden disease outbreak.", fn: "Example" },
            { text: "This shows that immediate needs often demand swift and direct action.", fn: "Explain why it matters" },
            { text: "Ignoring present suffering for the sake of the future would be both cruel and unwise.", fn: "Develop the point" },
            { text: "Any government that fails at today's problems may lose the trust it needs to act at all.", fn: "One more layer" },
            { text: "To this extent, focusing on immediate problems is clearly necessary.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why the future cannot be ignored",
          sentences: [
            { text: "Second, however, ignoring the problems of the future would cause great harm.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Many of the worst disasters can be prevented only by planning long in advance.", fn: "Explanation" },
            { text: "Consider how preparing early for climate change or an ageing population can avoid future suffering.", fn: "Example", vocab: [{ term: "foresight", gloss: "遠見；先見" }] },
            { text: "Such foresight shows that today's planning can save countless lives tomorrow.", fn: "Explain why it matters" },
            { text: "Problems left unaddressed often grow far larger and more costly with time.", fn: "Develop the point" },
            { text: "A government that thinks only of the present leaves its children to face avoidable crises.", fn: "One more layer" },
            { text: "Wise government, then, must address both the present and the future together.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, governments must indeed respond to the urgent problems of today.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they cannot ignore the future, since early planning prevents tomorrow's disasters.", fn: "Synthesis" },
            { text: "The wisest governments solve today's problems while preparing carefully for those still to come.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-132",
    type: "issue",
    category: "Education",
    prompt:
      "Some people believe that college students should consider only their own talents and interests when choosing a field of study. Others believe that college students should base their choice of a field of study on the availability of jobs in that field.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that weighs interest against job availability and lets both guide the choice; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Picking a field of study is one of the biggest decisions a young person faces.", fn: "Hook" },
            { text: "Some believe students should consider only their own talents and interests, while others believe they should base the choice on the availability of jobs.", fn: "Restate the prompt" },
            { text: "I believe both matter, and that the wisest choice weighs personal interest together with job prospects.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why talents and interests matter",
          sentences: [
            { text: "First, a student's own talents and interests deserve serious weight.", fn: "Topic sentence", moves: ["First"] },
            { text: "People usually do their best work in a field they genuinely care about.", fn: "Explanation" },
            { text: "For example, a student passionate about science will study harder and achieve more than a bored one.", fn: "Example" },
            { text: "This shows that interest and talent often lead to both success and satisfaction.", fn: "Explain why it matters" },
            { text: "Choosing a field with no personal interest can lead to a dull and joyless career.", fn: "Develop the point" },
            { text: "Following our talents also lets us contribute what we are truly best at.", fn: "One more layer" },
            { text: "To this extent, talents and interests should guide the choice.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why job availability matters",
          sentences: [
            { text: "Second, however, the availability of jobs cannot simply be ignored.", fn: "Topic sentence", moves: ["Second"] },
            { text: "A student must be able to earn a living once her studies are finished.", fn: "Explanation" },
            { text: "Consider a graduate with a beloved degree but no job prospects, struggling for years under debt.", fn: "Example" },
            { text: "Such hardship shows that ignoring the job market can lead to real suffering.", fn: "Explain why it matters" },
            { text: "Knowing where jobs exist helps students plan a secure and stable future.", fn: "Develop the point" },
            { text: "Job markets also change, so combining passion with practical skills is the safest path.", fn: "One more layer", vocab: [{ term: "prospects", gloss: "前景；前途" }] },
            { text: "Both views, then, point to needs that a wise choice must balance.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, students should certainly follow their talents and interests.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But they should also consider job prospects, since they must earn a living.", fn: "Synthesis" },
            { text: "The wisest students choose a field where their interests and their prospects can meet.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-133",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Laws should be flexible enough to take account of various circumstances, times, and places.",
    directions: D_STATEMENT,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that laws need flexibility while arguing too much undermines fairness; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "A law that fits one situation perfectly may be cruel or absurd in another.", fn: "Hook" },
            { text: "Some people argue that laws should be flexible enough to take account of different circumstances, times, and places.", fn: "Restate the prompt" },
            { text: "I largely agree that laws need flexibility, but I believe too much flexibility can also undermine fairness.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why flexibility makes laws just",
          sentences: [
            { text: "First, laws really do need some flexibility to be just.", fn: "Topic sentence", moves: ["First"] },
            { text: "No single rule can fairly cover every situation that life produces.", fn: "Explanation" },
            { text: "For example, a law against theft should treat a starving person differently from a greedy one.", fn: "Example" },
            { text: "This shows that flexible laws can deliver justice that rigid rules would miss.", fn: "Explain why it matters" },
            { text: "Circumstances, times, and places change, and laws must adapt to remain fair.", fn: "Develop the point" },
            { text: "A wise judge can use flexibility to fit the law to the real facts of a case.", fn: "One more layer" },
            { text: "To this extent, flexibility makes laws more just.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why too much flexibility harms",
          sentences: [
            { text: "Second, however, too much flexibility can make laws unfair and unpredictable.", fn: "Topic sentence", moves: ["Second"] },
            { text: "If laws bend too easily, people can never be sure what is truly allowed.", fn: "Explanation" },
            { text: "Consider a system where the same act is punished harshly for one person and ignored for another.", fn: "Example" },
            { text: "Such inconsistency shows that excessive flexibility can destroy equal treatment under the law.", fn: "Explain why it matters" },
            { text: "Flexible laws can also be twisted by the powerful to escape the rules that bind others.", fn: "Develop the point" },
            { text: "People need clear and steady laws they can understand and rely upon.", fn: "One more layer" },
            { text: "Flexibility, then, must be balanced by firm and consistent principles.", fn: "Sub-conclusion", vocab: [{ term: "consistent", gloss: "一致的；前後一致的" }] },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, laws should be flexible enough to fit different circumstances fairly.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But too much flexibility undermines the consistency that justice requires.", fn: "Synthesis" },
            { text: "The best laws balance sensible flexibility with clear and equal rules for all.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-134",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Claim: The best way to understand the character of a society is to examine the character of the men and women that the society chooses as its heroes or its role models. Reason: Heroes and role models reveal a society's highest ideals.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): agrees that heroes reveal a society's ideals while arguing they do not reveal its whole character; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "The people a nation chooses to celebrate say a great deal about that nation.", fn: "Hook" },
            { text: "One claim holds that the best way to understand a society's character is to examine its heroes, on the reason that heroes reveal a society's highest ideals.", fn: "Restate the prompt" },
            { text: "I largely agree that heroes reveal a society's ideals, but I believe they do not reveal its whole character.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why heroes reveal ideals",
          sentences: [
            { text: "First, the reason behind the claim is sound, since heroes do reveal a society's ideals.", fn: "Topic sentence", vocab: [{ term: "ideals", gloss: "理想" }], moves: ["First"] },
            { text: "The qualities a society admires in its heroes show what it most deeply values.", fn: "Explanation" },
            { text: "For example, a nation that honours brave soldiers values courage above quiet comfort.", fn: "Example" },
            { text: "This shows that studying heroes can reveal a society's clearest hopes and beliefs.", fn: "Explain why it matters" },
            { text: "The role models held up to children also shape the values of the next generation.", fn: "Develop the point" },
            { text: "Whom a society celebrates is, in this way, a window into its ideals.", fn: "One more layer" },
            { text: "To this extent, the claim and its reason clearly hold.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why heroes are not the whole character",
          sentences: [
            { text: "Second, however, heroes reveal a society's ideals but not its whole character.", fn: "Topic sentence", moves: ["Second"] },
            { text: "What a society admires can be very different from how it actually behaves.", fn: "Explanation" },
            { text: "Consider a nation that praises noble heroes yet quietly mistreats its poor.", fn: "Example" },
            { text: "Such a gap shows that ideals and real conduct are not always the same.", fn: "Explain why it matters" },
            { text: "A society's true character also appears in its laws, habits, and treatment of the weak.", fn: "Develop the point" },
            { text: "People often admire heroes they have no real wish to imitate themselves.", fn: "One more layer" },
            { text: "Understanding a society, then, means looking beyond its heroes to its actions.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, a society's heroes do reveal its highest ideals.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But its full character also shows in its laws, habits, and treatment of the weak.", fn: "Synthesis" },
            { text: "We understand a society best by studying both whom it admires and how it truly acts.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-135",
    type: "issue",
    category: "The Individual",
    prompt:
      "Some people believe that it is helpful to view a challenging situation as an opportunity for personal growth. Others believe that reimagining challenging situations this way occupies too much of the focus one needs to face challenges effectively.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that leans toward seeing challenges as growth while granting it can distract; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "How we think about a hard situation can change how well we handle it.", fn: "Hook" },
            { text: "Some believe it helps to view a challenging situation as an opportunity for growth, while others believe this reimagining distracts from actually facing the challenge.", fn: "Restate the prompt" },
            { text: "I lean toward seeing challenges as chances to grow, but I accept that this view can sometimes become a distraction.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why the growth view helps",
          sentences: [
            { text: "First, viewing a challenge as an opportunity for growth is often genuinely helpful.", fn: "Topic sentence", moves: ["First"] },
            { text: "Seeing difficulty as a chance to learn can turn fear into motivation.", fn: "Explanation", vocab: [{ term: "motivation", gloss: "動機；動力" }] },
            { text: "For example, a student who treats a hard exam as a chance to improve studies with more energy.", fn: "Example" },
            { text: "This shows that a positive view can give people the courage to keep going.", fn: "Explain why it matters" },
            { text: "People who see setbacks as lessons tend to recover faster and grow stronger.", fn: "Develop the point" },
            { text: "This attitude can turn even painful experiences into real personal progress.", fn: "One more layer" },
            { text: "To this extent, viewing challenges as opportunities is wise.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why it can distract",
          sentences: [
            { text: "Second, however, this way of thinking can sometimes distract us from the challenge itself.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Spending too long reframing a problem can take focus away from actually solving it.", fn: "Explanation" },
            { text: "Consider a person so busy calling a crisis a growth opportunity that she forgets to act on it.", fn: "Example" },
            { text: "Such distraction shows that a positive view is no substitute for real, practical effort.", fn: "Explain why it matters" },
            { text: "Some hard situations simply demand quick action, not careful reflection on their meaning.", fn: "Develop the point" },
            { text: "Forcing a hopeful view can even make people ignore dangers they should be taking seriously.", fn: "One more layer" },
            { text: "The growth mindset, then, helps only when it supports action rather than replacing it.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, viewing challenges as chances to grow can give us courage and motivation.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But this view can distract us if it replaces the real effort a challenge demands.", fn: "Synthesis" },
            { text: "The wisest approach treats challenges as opportunities while still acting firmly to overcome them.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-136",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Some people believe that traveling to and living in numerous places increases one's ability to relate and connect to other people. Others believe that this ability is better cultivated by living in one place and developing a deep understanding of that community.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response holding that both wide travel and deep roots build connection; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Some people connect easily with strangers, while others form deep bonds at home.", fn: "Hook" },
            { text: "Some believe that travelling to many places increases our ability to connect with others, while others believe this comes better from living deeply in one community.", fn: "Restate the prompt" },
            { text: "I believe both can build our ability to connect, in different but equally valuable ways.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How wide travel builds connection",
          sentences: [
            { text: "First, travelling to and living in many places can widen our ability to connect.", fn: "Topic sentence", moves: ["First"] },
            { text: "Meeting people from many cultures teaches us to understand very different ways of life.", fn: "Explanation" },
            { text: "For example, a traveller learns to find common ground with strangers of every background.", fn: "Example" },
            { text: "This shows that variety can make a person more open and adaptable with others.", fn: "Explain why it matters", vocab: [{ term: "adaptable", gloss: "適應力強的" }] },
            { text: "Seeing how differently people live can also deepen our patience and our sympathy.", fn: "Develop the point" },
            { text: "Those who have lived in many places often connect easily wherever they go.", fn: "One more layer" },
            { text: "To this extent, travel genuinely strengthens our bond with others.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — How deep roots build connection",
          sentences: [
            { text: "Second, however, living deeply in one place builds a different and equally rich connection.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Staying in one community lets us know people slowly, over many years.", fn: "Explanation" },
            { text: "Consider a person who, by remaining in one town, builds lifelong friendships of great depth.", fn: "Example" },
            { text: "Such bonds show that real connection can come from time and shared history, not only variety.", fn: "Explain why it matters" },
            { text: "Knowing one community deeply teaches loyalty, trust, and a strong sense of belonging.", fn: "Develop the point" },
            { text: "Constant travel can leave relationships shallow, while deep roots make them lasting.", fn: "One more layer" },
            { text: "Both ways, then, can build a true ability to connect with people.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, travelling widely can teach us to connect with many kinds of people.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But living deeply in one place builds bonds of equal value through time and trust.", fn: "Synthesis" },
            { text: "Our ability to connect can grow both by seeing many places and by knowing one place well.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-137",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "Claim: Young people's tendency to make extensive use of portable devices like smartphones and tablets has hurt their development of social skills. Reason: These devices encourage users to form artificial personalities and relationships online rather than fully and honestly engaging with the people around them.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that devices can hurt social skills while arguing they can also help connection; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Young people today often seem more comfortable with a screen than with the person beside them.", fn: "Hook" },
            { text: "One claim holds that young people's heavy use of phones and tablets has hurt their social skills, on the reason that these devices encourage artificial personalities and relationships online.", fn: "Restate the prompt" },
            { text: "I agree that devices can harm social skills, but I believe they can also help connection when used well.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — How devices can hurt social skills",
          sentences: [
            { text: "First, there is real truth in the reason behind the claim.", fn: "Topic sentence", moves: ["First"] },
            { text: "Hours spent online can leave young people less practised at real face-to-face talk.", fn: "Explanation" },
            { text: "For example, a teenager who texts constantly may struggle to hold a live conversation.", fn: "Example" },
            { text: "This shows that heavy device use can weaken important social skills.", fn: "Explain why it matters" },
            { text: "Online, people can also hide behind an artificial image of themselves rather than being honest.", fn: "Develop the point", vocab: [{ term: "artificial", gloss: "虛假的；人造的" }] },
            { text: "Relationships built only through screens can feel thin compared with real friendship.", fn: "One more layer" },
            { text: "To this extent, the reason given for the claim has genuine force.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — How devices can help connection",
          sentences: [
            { text: "Second, however, the same devices can also help young people connect.", fn: "Topic sentence", moves: ["Second"] },
            { text: "Phones let young people stay close to friends and family they could not otherwise reach.", fn: "Explanation" },
            { text: "Consider a shy teenager who first finds the confidence to make friends through an online group.", fn: "Example" },
            { text: "Such cases show that devices can build social bonds rather than only weaken them.", fn: "Explain why it matters" },
            { text: "Used wisely, technology can support real friendships instead of replacing them.", fn: "Develop the point" },
            { text: "The harm comes not from the devices themselves but from using them carelessly.", fn: "One more layer" },
            { text: "Devices, then, can either hurt or help social skills depending on how they are used.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, heavy use of phones and tablets can indeed weaken young people's social skills.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the same devices can also help them connect when used with care.", fn: "Synthesis" },
            { text: "Whether technology harms or helps social skills depends far less on the devices than on how they are used.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-138",
    type: "issue",
    category: "The Individual",
    prompt:
      "Claim: When one is making a decision, it is better to have a limited number of options. Reason: The more options a person has, the more difficult it is to make a rational decision.",
    directions: D_CLAIM_REASON,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): grants that too many options overwhelm while arguing too few can be just as harmful; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Standing before a huge menu, we sometimes wish there were only a few dishes to choose from.", fn: "Hook" },
            { text: "One claim holds that it is better to have a limited number of options when deciding, on the reason that more options make a rational decision harder.", fn: "Restate the prompt" },
            { text: "I agree that too many options can be overwhelming, but I do not believe fewer is always better.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why limited options help",
          sentences: [
            { text: "First, there is real truth in the reason that too many options make deciding harder.", fn: "Topic sentence", moves: ["First"] },
            { text: "When choices pile up, people can feel confused, anxious, and unable to decide at all.", fn: "Explanation" },
            { text: "For example, a shopper faced with fifty brands may give up rather than compare them all.", fn: "Example" },
            { text: "This shows that too much choice can paralyse us rather than help us.", fn: "Explain why it matters", vocab: [{ term: "paralyse", gloss: "使無法行動" }] },
            { text: "A smaller set of options lets us weigh each one carefully and choose with confidence.", fn: "Develop the point" },
            { text: "Limiting choices can also save time and reduce needless stress.", fn: "One more layer" },
            { text: "To this extent, fewer options can genuinely help us decide.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why too few options harm",
          sentences: [
            { text: "Second, however, having too few options can be just as harmful.", fn: "Topic sentence", moves: ["Second"] },
            { text: "If choices are too narrow, we may be forced to accept something that suits us poorly.", fn: "Explanation" },
            { text: "Consider a patient given only one treatment when a better one exists but is not offered.", fn: "Example" },
            { text: "Such cases show that too little choice can deny us what we truly need.", fn: "Explain why it matters" },
            { text: "A reasonable range of options also lets people match a decision to their own situation.", fn: "Develop the point" },
            { text: "Freedom to choose among real alternatives is itself something people value deeply.", fn: "One more layer" },
            { text: "The best decisions, then, come from a sensible number of options, neither too many nor too few.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, limiting options can help us avoid the confusion of too much choice.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But too few options can trap us with poor decisions and little freedom.", fn: "Synthesis" },
            { text: "The wisest approach offers a reasonable range of choices, balanced between overload and too little freedom.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-139",
    type: "issue",
    category: "Technology",
    prompt:
      "Because people increasingly feel compelled to share their personal details online, the right to privacy is eroding.",
    directions: D_CLAIM,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): largely agrees that privacy is under threat while arguing it can still be protected; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "Every day, people post their locations, opinions, and private moments for the world to see.", fn: "Hook" },
            { text: "Some people claim that because people increasingly feel compelled to share personal details online, the right to privacy is eroding.", fn: "Restate the prompt" },
            { text: "I largely agree that privacy is under threat, but I believe it is not lost and can still be protected.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why privacy is eroding",
          sentences: [
            { text: "First, it is true that constant online sharing is weakening privacy.", fn: "Topic sentence", vocab: [{ term: "privacy", gloss: "隱私" }], moves: ["First"] },
            { text: "People now reveal details about their lives that earlier generations kept strictly private.", fn: "Explanation" },
            { text: "For example, photos, locations, and opinions posted online can be seen and stored by countless strangers.", fn: "Example" },
            { text: "This shows that the line between private and public life is fading fast.", fn: "Explain why it matters" },
            { text: "Companies and governments can also gather huge amounts of personal data from what we share.", fn: "Develop the point" },
            { text: "Once information is online, it can be almost impossible to take back.", fn: "One more layer" },
            { text: "To this extent, the claim points to a real and growing danger.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why privacy can still be protected",
          sentences: [
            { text: "Second, however, the right to privacy is not lost and can still be defended.", fn: "Topic sentence", moves: ["Second"] },
            { text: "People can choose how much to share and can learn to protect their own information.", fn: "Explanation" },
            { text: "Consider how strong laws and better settings can limit who sees our personal data.", fn: "Example" },
            { text: "Such tools show that privacy can be protected even in a connected world.", fn: "Explain why it matters" },
            { text: "Many people are also becoming more careful and demanding greater control over their data.", fn: "Develop the point" },
            { text: "The fact that some people overshare does not mean privacy must disappear for all.", fn: "One more layer" },
            { text: "Privacy, then, is threatened but far from beyond saving.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, constant online sharing truly is eroding our privacy.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But the right to privacy is not lost, since laws and careful habits can still defend it.", fn: "Synthesis" },
            { text: "Privacy will survive only if we choose to protect it rather than give it away freely.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-140",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Some people believe that journalism should make news entertaining to keep the public engaged and informed. Others believe that this practice prioritizes entertainment and undermines the mission of journalism.",
    directions: D_TWO_VIEWS,
    sample: {
      score: 4.5,
      scoreNote:
        "Strong-adequate (4.5): a two-view response that grants some engagement value while arguing entertainment undermines journalism's mission; two developed examples with analysis, controlled prose on a memorable First and Second skeleton.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            { text: "The news today often competes with films and games for our limited attention.", fn: "Hook" },
            { text: "Some believe journalism should make news entertaining to keep the public engaged, while others believe this undermines the true mission of journalism.", fn: "Restate the prompt" },
            { text: "I lean toward the view that entertainment undermines journalism, though I accept that some engagement is necessary.", fn: "Thesis (qualified position)" },
          ],
        },
        {
          role: "Body 1 — Why some engagement has value",
          sentences: [
            { text: "First, there is real value in making the news engaging enough to reach people.", fn: "Topic sentence", moves: ["First"] },
            { text: "News that no one reads or watches cannot inform anyone at all.", fn: "Explanation" },
            { text: "For example, a lively report can draw people to an important issue they would otherwise ignore.", fn: "Example" },
            { text: "This shows that some engagement can actually help journalism do its job.", fn: "Explain why it matters" },
            { text: "Clear, interesting storytelling can make difficult topics easier to understand.", fn: "Develop the point" },
            { text: "Reaching a wide audience is part of how journalism serves the public.", fn: "One more layer" },
            { text: "To this extent, making news engaging has genuine value.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Body 2 — Why entertainment undermines the mission",
          sentences: [
            { text: "Second, however, making news entertaining can seriously undermine its real mission.", fn: "Topic sentence", moves: ["Second"] },
            { text: "When news chases excitement, it may favour shocking stories over important ones.", fn: "Explanation" },
            { text: "Consider a channel that covers a celebrity scandal at length while ignoring a serious crisis.", fn: "Example" },
            { text: "Such choices show that entertainment can crowd out the truth people need to know.", fn: "Explain why it matters" },
            { text: "Turning news into a show can also tempt journalists to exaggerate or distort the facts.", fn: "Develop the point", vocab: [{ term: "exaggerate", gloss: "誇大" }] },
            { text: "The mission of journalism is to inform honestly, not merely to amuse.", fn: "One more layer" },
            { text: "Entertainment, then, must never be allowed to replace the search for truth.", fn: "Sub-conclusion" },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            { text: "In conclusion, making the news engaging can help journalism reach and inform the public.", fn: "Restate position", moves: ["In conclusion"] },
            { text: "But entertainment undermines journalism when it replaces important truth with mere amusement.", fn: "Synthesis" },
            { text: "The best journalism keeps people engaged while always putting honest, important information first.", fn: "Final judgment" },
          ],
        },
      ],
    },
  },
];
