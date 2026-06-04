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
  },
  {
    id: "w-issue-002",
    type: "issue",
    category: "Education",
    prompt:
      "The best way to teach is to praise positive actions and ignore negative ones.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-003",
    type: "issue",
    category: "Education",
    prompt:
      "Governments should offer college and university education free of charge to all students.",
    directions: D_RECOMMENDATION,
  },
  {
    id: "w-issue-004",
    type: "issue",
    category: "The Individual",
    prompt:
      "The luxuries and conveniences of contemporary life prevent people from developing into truly strong and independent individuals.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-005",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "In any field of inquiry, the beginner is more likely than the expert to make important contributions.",
    directions: D_STATEMENT,
  },
  {
    id: "w-issue-006",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "The surest indicator of a great nation is represented not by the achievements of its rulers, artists, or scientists, but by the general welfare of its people.",
    directions: D_STATEMENT,
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
