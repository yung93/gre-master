import type { WritingPrompt } from "@/lib/types";

const ISSUE_DIRECTIONS =
  "Write a response in which you discuss the extent to which you agree or disagree with the claim. In developing and supporting your position, be sure to address the most compelling reasons or examples that could be used to challenge your position.";

const ARGUMENT_DIRECTIONS =
  "Write a response in which you examine the stated and unstated assumptions of the argument. Be sure to explain how the argument depends on the assumptions and what the implications are if the assumptions prove unwarranted.";

export const WRITING_PROMPTS: WritingPrompt[] = [
  {
    id: "w-issue-edu-1",
    type: "issue",
    category: "Education",
    prompt:
      "Universities should require every undergraduate to complete a substantial course of study in a field outside their major.",
    directions: ISSUE_DIRECTIONS,
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
    id: "w-issue-edu-2",
    type: "issue",
    category: "Education",
    prompt:
      "Students learn more from teachers who challenge their assumptions than from teachers who reinforce what they already believe.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-tech-1",
    type: "issue",
    category: "Technology",
    prompt:
      "As societies adopt increasingly sophisticated technologies, they lose more capacities than they gain.",
    directions: ISSUE_DIRECTIONS,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): takes a clear stand, concedes the other side fairly, and supports each point with familiar examples and a historical analogy; fluent and well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            {
              text: "It is easy to believe that technology is quietly making us weaker.",
              fn: "Hook (the worry)",
            },
            {
              text: "Many people can no longer read a paper map, recall a phone number, or do simple arithmetic without a calculator, and each lost skill seems to prove that our machines are taking something from us.",
              fn: "Context (evidence for the worry)",
            },
            {
              text: "Yet I disagree with the claim that societies lose more than they gain, because technology does not so much destroy our abilities as shift them, freeing our attention for harder and more valuable work.",
              fn: "Thesis statement (clear position)",
              moves: ["Yet"],
            },
          ],
        },
        {
          role: "Body — Concede the loss",
          sentences: [
            {
              text: "It is true that certain skills fade once a machine can perform them for us.",
              fn: "Concession (topic sentence)",
              moves: ["It is true that"],
            },
            {
              text: "Sailors once navigated by the stars, clerks added long columns of numbers by hand, and students memorized poems and speeches word for word.",
              fn: "Example",
              vocab: [{ term: "navigated", gloss: "導航；辨識方向" }],
            },
            {
              text: "Today most of us would struggle to do any of these things, and it is fair to feel some loss when an old human ability quietly disappears.",
              fn: "Acknowledge the loss honestly",
            },
            {
              text: "Each of these abilities once felt essential, and giving it up can seem like a small defeat.",
              fn: "Develop the feeling",
            },
            {
              text: "But these losses are usually small, and almost no one truly suffers because a phone now remembers their appointments or an app finds the fastest route.",
              fn: "Limit the concession",
              moves: ["But"],
            },
          ],
        },
        {
          role: "Body — The gain (main reason)",
          sentences: [
            {
              text: "More importantly, the time and mental effort that machines save us are not simply lost; they are set free for other uses.",
              fn: "Topic sentence (main reason)",
              moves: ["More importantly"],
            },
            {
              text: "A student who no longer spends an hour on long division can spend that hour learning to interpret data, design an experiment, or analyze an argument.",
              fn: "Example",
              vocab: [{ term: "analyze", gloss: "分析" }],
            },
            {
              text: "The basic skill is handed to a machine so that a higher skill can take its place.",
              fn: "Explanation",
            },
            {
              text: "History offers a reassuring example, since the invention of writing removed the need to memorize the long stories that earlier societies had carried only in memory.",
              fn: "Supporting analogy",
            },
            {
              text: "No reasonable person believes that books made human beings less intelligent; instead, writing allowed knowledge to grow far beyond what any single memory could hold.",
              fn: "Drive the analogy home",
              vocab: [{ term: "intelligent", gloss: "聰明的；有智慧的" }],
            },
            {
              text: "In the same way, calculators did not make engineers worse at their jobs; they let engineers spend their time on design rather than on hand calculation.",
              fn: "Second example",
            },
          ],
        },
        {
          role: "Body — Counterargument",
          sentences: [
            {
              text: "Of course, this does not mean that every change is harmless.",
              fn: "Pivot to the opposing view",
              moves: ["Of course"],
            },
            {
              text: "A society that depends on technology without understanding it can become dangerously helpless when that technology fails, whether the power goes out, the network breaks, or the software makes a mistake no one notices.",
              fn: "State the objection",
              vocab: [{ term: "helpless", gloss: "無助的；無能為力的" }],
            },
            {
              text: "A pilot, for example, should still know how to fly when the autopilot fails, and a student should still understand the math a calculator performs.",
              fn: "Illustrate the safeguard",
            },
            {
              text: "The right response, however, is not to reject new tools but to keep teaching the fundamentals behind them, so that people stay in control of their machines rather than the other way around.",
              fn: "Answer the objection",
              moves: ["however"],
            },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            {
              text: "In conclusion, advanced technology changes our abilities far more than it reduces them, because for every skill that fades a new and often more powerful one becomes possible.",
              fn: "Restate the position",
              moves: ["In conclusion"],
            },
            {
              text: "The pattern has repeated for centuries, from writing to printing to computers, and in each case society grew more capable rather than less.",
              fn: "Generalize the pattern",
            },
            {
              text: "As long as we stay aware of what we give up and protect the skills that truly matter, we gain far more than we lose.",
              fn: "Final judgment",
              vocab: [{ term: "aware", gloss: "意識到的；警覺的" }],
            },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-tech-2",
    type: "issue",
    category: "Technology",
    prompt:
      "Governments should regulate emerging technologies before, rather than after, those technologies become widely adopted.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-gov-1",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "Public officials should be guided primarily by what is feasible rather than by what is ideal.",
    directions: ISSUE_DIRECTIONS,
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
    id: "w-issue-gov-2",
    type: "issue",
    category: "Government & Policy",
    prompt:
      "The most enduring contributions of a society are made not by its political leaders but by its artists and scientists.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-soc-1",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "A society's level of advancement should be judged primarily by how it treats its least powerful members.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-soc-2",
    type: "issue",
    category: "Society & Culture",
    prompt:
      "Tradition is a more reliable guide to action than reason.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-sci-1",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Major scientific advances usually come from individuals working against the consensus of their peers, not from consensus itself.",
    directions: ISSUE_DIRECTIONS,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): a clear position that fairly concedes the famous exceptions and then explains, with concrete examples, why cooperation drives most progress; logically sound throughout.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            {
              text: "People love stories about the lone genius who stands alone against the crowd and turns out to be right.",
              fn: "Hook (the appealing image)",
            },
            {
              text: "These stories are dramatic and inspiring, and they make it easy to believe that real scientific progress comes mainly from rebels who reject what everyone else accepts.",
              fn: "Context (why the claim feels true)",
            },
            {
              text: "The truth, though, is usually far less dramatic.",
              fn: "Foreshadow the thesis",
            },
            {
              text: "I disagree with this view, because the great majority of scientific advances are not the work of lonely rebels but the slow, shared achievement of many researchers working together.",
              fn: "Thesis statement (clear position)",
            },
          ],
        },
        {
          role: "Body — Concede the exception",
          sentences: [
            {
              text: "It is true that a few famous discoveries did come from individuals who challenged the accepted ideas of their day.",
              fn: "Concession (topic sentence)",
              vocab: [{ term: "challenged", gloss: "挑戰；質疑" }],
              moves: ["It is true that"],
            },
            {
              text: "Alfred Wegener argued that the continents slowly drift across the earth, and his idea was mocked for decades before new evidence finally proved him right.",
              fn: "Example",
              vocab: [{ term: "evidence", gloss: "證據" }],
            },
            {
              text: "Barry Marshall even swallowed bacteria himself to convince doctors that microbes, not stress, cause most stomach ulcers.",
              fn: "Second example",
            },
            {
              text: "Cases like these show that the consensus of experts can sometimes harden into stubbornness, and that a single determined person can occasionally overturn it.",
              fn: "Explanation",
              vocab: [{ term: "consensus", gloss: "共識；普遍看法" }],
            },
            {
              text: "But it is worth noticing that we remember these stories precisely because they are rare exceptions.",
              fn: "Limit the concession",
              moves: ["But"],
            },
          ],
        },
        {
          role: "Body — Main reason (cooperation drives progress)",
          sentences: [
            {
              text: "By contrast, most scientific progress depends on cooperation, shared methods, and evidence that other people can check.",
              fn: "Topic sentence (main reason)",
              vocab: [{ term: "cooperation", gloss: "合作" }],
              moves: ["By contrast"],
            },
            {
              text: "The discovery of the structure of DNA, the mapping of the human genome, and the detection of new particles in physics each required large teams, years of careful testing, and results that other laboratories could repeat.",
              fn: "Example",
            },
            {
              text: "No single rebel could have produced these advances alone, because they rest on tools, data, and earlier discoveries gathered by an entire community of scientists.",
              fn: "Explanation",
              vocab: [{ term: "community", gloss: "群體；社群" }],
            },
            {
              text: "Progress in science usually looks less like a single hero and more like a relay race, with each researcher passing carefully checked results to the next.",
              fn: "Analogy",
            },
            {
              text: "Even the famous outsider depends on the very system he challenges, since Wegener used measurements made by other geologists and Marshall used laboratory methods that the medical field had already developed.",
              fn: "Turn the exception around",
            },
            {
              text: "Strip away that shared foundation, and the lone genius would have nothing to work with at all.",
              fn: "Drive the point home",
            },
          ],
        },
        {
          role: "Body — Why the myth survives",
          sentences: [
            {
              text: "It is worth asking why the myth of the lone genius remains so popular.",
              fn: "Topic sentence",
            },
            {
              text: "A single dramatic name is simply easier to remember than a team of hundreds.",
              fn: "Explanation",
            },
            {
              text: "Textbooks and news stories shorten long, messy histories into the tale of one clever person, and the patient work of the wider community quietly disappears from view.",
              fn: "Develop the point",
            },
            {
              text: "The everyday cooperation that produces most knowledge makes a far less exciting story, so we rarely bother to tell it.",
              fn: "Close the paragraph",
            },
            {
              text: "Because the dramatic version is the one we hear most often, we come to believe it is also the most common.",
              fn: "Explain the false impression",
            },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            {
              text: "In conclusion, bold individuals who challenge the consensus do play an important part in science, but they are not its main engine.",
              fn: "Restate the position",
              moves: ["In conclusion"],
            },
            {
              text: "This does not make individual brilliance worthless; it simply puts that brilliance in its proper place.",
              fn: "Concede the individual's value",
            },
            {
              text: "The bold individual is the spark, but the community is the engine that turns a spark into lasting knowledge.",
              fn: "Crystallize the relationship",
            },
            {
              text: "For every celebrated rebel, thousands of cooperating researchers quietly extend what we know and correct one another's mistakes, so science advances most of all through a careful community rather than through lone genius.",
              fn: "Final judgment",
            },
          ],
        },
      ],
    },
  },
  {
    id: "w-issue-sci-2",
    type: "issue",
    category: "Science & Inquiry",
    prompt:
      "Research funding should be directed primarily toward problems with foreseeable practical applications.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-arts-1",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "The works of art a culture chooses to preserve say more about that culture than the works it produces.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-arts-2",
    type: "issue",
    category: "Arts & Humanities",
    prompt:
      "It is the responsibility of artists to challenge their audiences rather than to satisfy them.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-work-1",
    type: "issue",
    category: "Work & Economy",
    prompt:
      "Long-term success in any field depends less on talent than on the willingness to undertake unglamorous, repetitive work.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-work-2",
    type: "issue",
    category: "Work & Economy",
    prompt:
      "Organizations that prize loyalty over candor inevitably stagnate.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-issue-self-1",
    type: "issue",
    category: "The Individual",
    prompt:
      "People learn more from their failures than from their successes.",
    directions: ISSUE_DIRECTIONS,
  },
  {
    id: "w-arg-policy-1",
    type: "argument",
    category: "Policy Memos",
    prompt:
      "The following appeared in a memo from the city manager of Lakeside, a coastal town. \"Last year, the neighboring town of Cape Bay extended its waterfront boardwalk by two kilometers and saw a 30 percent increase in summer tourism revenue. Local restaurants in Cape Bay also reported their highest annual sales in a decade. To revitalize Lakeside's flagging downtown economy, the council should fund a comparable extension of our own boardwalk, paid for by reallocating maintenance funds currently directed to municipal parks.\"",
    directions: ARGUMENT_DIRECTIONS,
    sample: {
      score: 5,
      scoreNote:
        "Strong (5): identifies three distinct assumptions, explains why each is needed and what follows if it fails, and ends by naming the evidence that would settle the case; focused and well organized.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            {
              text: "The city manager of Lakeside recommends extending the town's boardwalk, arguing that a similar extension in the nearby town of Cape Bay produced a thirty percent rise in tourism and record restaurant sales.",
              fn: "Restate the argument",
            },
            {
              text: "On the surface this looks like sensible reasoning: simply copy what worked next door.",
              fn: "Acknowledge the appeal",
            },
            {
              text: "The comparison is appealing, but it hides several leaps in reasoning.",
              fn: "Signal the analysis",
            },
            {
              text: "A closer look shows that the recommendation rests on three assumptions the memo never proves, and if any one of them is wrong, the plan may fail.",
              fn: "Thesis statement (roadmap)",
              vocab: [{ term: "assumptions", gloss: "假設；前提" }],
            },
          ],
        },
        {
          role: "Body — Assumption 1 (the boardwalk was the cause)",
          sentences: [
            {
              text: "First, the memo assumes that the boardwalk extension itself caused Cape Bay's increase in tourism.",
              fn: "Identify assumption 1",
              moves: ["First"],
            },
            {
              text: "But many other factors could explain that increase just as easily.",
              fn: "Challenge with alternatives",
              vocab: [{ term: "factors", gloss: "因素" }],
              moves: ["But"],
            },
            {
              text: "Perhaps Cape Bay enjoyed unusually good weather that summer, ran a successful advertising campaign, lowered its hotel prices, or benefited from the closure of a competing resort nearby.",
              fn: "List specific alternatives",
            },
            {
              text: "The memo offers no evidence that any of these possibilities were ruled out.",
              fn: "Point to the missing support",
              vocab: [{ term: "evidence", gloss: "證據" }],
            },
            {
              text: "A single neighboring example, however striking, is not enough to establish what truly drove the change.",
              fn: "Reinforce the gap",
            },
            {
              text: "If one of these other factors was the real cause, then building a longer boardwalk in Lakeside would not reproduce Cape Bay's success, and the money would be wasted.",
              fn: "State the implication",
            },
          ],
        },
        {
          role: "Body — Assumption 2 (the two towns are alike)",
          sentences: [
            {
              text: "Second, the argument assumes that Lakeside is similar enough to Cape Bay for the same strategy to work.",
              fn: "Identify assumption 2",
              moves: ["Second"],
            },
            {
              text: "However, the two towns may differ in important ways, such as the number of visitors they attract, the industries they depend on, or the reasons their economies are struggling.",
              fn: "Challenge the comparison",
              moves: ["However"],
            },
            {
              text: "Cape Bay's downtown may have been weak because it lacked attractions near the water, while Lakeside's decline may come from a completely different source, such as high rents or poor parking.",
              fn: "Give a concrete difference",
            },
            {
              text: "Borrowing another town's solution only works if the two towns truly share the same problem in the first place.",
              fn: "Generalize the flaw",
            },
            {
              text: "Without a close look at both economies, the memo simply hopes that Lakeside will behave like its neighbor, without showing that it will.",
              fn: "Underline the leap",
            },
            {
              text: "If the cause of Lakeside's weakness is not a short boardwalk, then lengthening the boardwalk will not cure it.",
              fn: "State the implication",
            },
          ],
        },
        {
          role: "Body — Assumption 3 (cutting park funds is harmless)",
          sentences: [
            {
              text: "Finally, the memo assumes that taking money away from park maintenance will create no problems of its own.",
              fn: "Identify assumption 3",
              moves: ["Finally"],
            },
            {
              text: "Yet neglected parks can quickly become unattractive, driving away the very visitors the town hopes to gain.",
              fn: "Challenge with consequences",
              vocab: [{ term: "neglected", gloss: "被忽視的；疏於照料的" }],
              moves: ["Yet"],
            },
            {
              text: "Run-down parks may also lower nearby property values and lead to larger repair bills later, so the savings could end up costing the town more than they save.",
              fn: "Extend the consequence",
            },
            {
              text: "The memo never weighs this hidden cost against the gain it hopes to win on the waterfront.",
              fn: "Note the omission",
            },
            {
              text: "A plan that fixes the waterfront while letting the parks decay may leave Lakeside no better off than before.",
              fn: "State the net effect",
            },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            {
              text: "To make this recommendation convincing, the manager would need real evidence on each point: that the boardwalk, and not some other factor, caused Cape Bay's growth, that Lakeside truly resembles Cape Bay, and that cutting park funding will not create new costs.",
              fn: "Propose evidence (what would help)",
              vocab: [{ term: "convincing", gloss: "有說服力的" }],
            },
            {
              text: "Gathering this information would also protect the town from spending scarce money on a project that may not work.",
              fn: "Note the stakes",
            },
            {
              text: "Until that evidence is supplied, the proposal is an appealing guess rather than a sound plan.",
              fn: "Final judgment",
            },
          ],
        },
      ],
    },
  },
  {
    id: "w-arg-business-1",
    type: "argument",
    category: "Business Memos",
    prompt:
      "The following appeared in a memo from the marketing director of Verdant Foods. \"Sales of our new organic snack bar rose 18 percent in the three months after we redesigned its packaging. During the same period, the line's social media mentions doubled. Customer surveys indicated that 72 percent of new buyers found the new packaging 'appealing.' We should therefore apply the same design principles to the rest of our product line in order to drive comparable growth across the company.\"",
    directions: ARGUMENT_DIRECTIONS,
  },
  {
    id: "w-arg-science-1",
    type: "argument",
    category: "Research Findings",
    prompt:
      "The following appeared in a research summary. \"A study of 400 university students found that those who reported regularly using a particular note-taking application achieved, on average, higher grades than those who did not. The application's developers therefore conclude that wider adoption of the application would raise academic performance across the student population.\"",
    directions: ARGUMENT_DIRECTIONS,
    sample: {
      score: 4.5,
      scoreNote:
        "Between Adequate and Strong (4.5): competent, well-organized analysis of three real assumptions with relevant reasoning; clear throughout, though a top response would press each point a little harder.",
      sections: [
        {
          role: "Introduction",
          sentences: [
            {
              text: "A study of four hundred university students found that those who said they regularly used a particular note-taking app earned higher grades than those who did not.",
              fn: "Restate the evidence",
            },
            {
              text: "From this single result, the app's developers conclude that getting more students to use the app would raise grades across the whole student population.",
              fn: "Restate the conclusion",
            },
            {
              text: "The reasoning sounds plausible, but it moves from a small finding to a sweeping recommendation far too fast.",
              fn: "Preview the problem",
            },
            {
              text: "A good grade and a study habit can appear together for many reasons that have nothing to do with cause.",
              fn: "Hint at the core flaw",
            },
            {
              text: "The conclusion is too quick, because it depends on several assumptions that the study does not actually prove.",
              fn: "Thesis statement (the conclusion is unproven)",
              vocab: [{ term: "assumptions", gloss: "假設；前提" }],
            },
          ],
        },
        {
          role: "Body — Assumption 1 (cause vs. choice)",
          sentences: [
            {
              text: "First, the study shows only that app users tended to have higher grades, not that the app caused those grades.",
              fn: "Identify assumption 1",
              moves: ["First"],
            },
            {
              text: "It is very likely that already hardworking and organized students were the ones who chose to use a note-taking app in the first place.",
              fn: "Offer an alternative explanation",
            },
            {
              text: "In that case the app would be a sign of good study habits rather than the source of them, and those students might have earned high grades with or without it.",
              fn: "Explain the alternative",
            },
            {
              text: "A correlation between using the app and earning good grades does not prove that one causes the other, so handing the app to every student might change very little.",
              fn: "State the implication",
              vocab: [{ term: "correlation", gloss: "相關性；關聯" }],
            },
            {
              text: "Cause and effect simply cannot be read from this kind of simple comparison.",
              fn: "State the principle",
            },
          ],
        },
        {
          role: "Body — Assumption 2 (the data is reliable)",
          sentences: [
            {
              text: "Second, the study relies entirely on what students reported about themselves.",
              fn: "Identify assumption 2",
              moves: ["Second"],
            },
            {
              text: "Students were asked how often they used the app, and self-reports of this kind are often inaccurate.",
              fn: "Challenge the data",
            },
            {
              text: "Those who like to think of themselves as diligent may overstate both how much they used the app and how well they performed, making the link between the two look stronger than it really is.",
              fn: "Explain the bias",
              vocab: [{ term: "diligent", gloss: "勤勉的；用功的" }],
            },
            {
              text: "A measurement that depends on memory and pride is shaky ground for such a confident claim.",
              fn: "Underline the weakness",
            },
            {
              text: "People are not always honest, even with themselves, about how hard they actually work.",
              fn: "Reinforce the doubt",
            },
          ],
        },
        {
          role: "Body — Assumption 3 (the sample represents everyone)",
          sentences: [
            {
              text: "Finally, the study examined only four hundred university students, yet the conclusion is applied to the entire student population.",
              fn: "Identify assumption 3",
              moves: ["Finally"],
            },
            {
              text: "University students are not necessarily representative of all learners.",
              fn: "Challenge the generalization",
              vocab: [{ term: "representative", gloss: "有代表性的" }],
            },
            {
              text: "Younger children, students in very different subjects, and learners without reliable access to phones or laptops might gain nothing from the same app.",
              fn: "Give concrete counterexamples",
            },
            {
              text: "What clearly helps a focused graduate student may do nothing for a distracted teenager in a very different classroom.",
              fn: "Concrete contrast",
            },
            {
              text: "A result drawn from one type of student in one type of school simply cannot speak for everyone.",
              fn: "Restate the scope problem",
            },
          ],
        },
        {
          role: "Conclusion",
          sentences: [
            {
              text: "To support its claim, the company would need much stronger evidence, such as a fair experiment that assigns the app to one randomly chosen group, withholds it from a similar group, and measures everyone's grades and usage directly.",
              fn: "Propose evidence (what would help)",
              vocab: [{ term: "experiment", gloss: "實驗" }],
            },
            {
              text: "Good evidence would also follow a wide range of students over time, rather than capturing a single snapshot of one narrow group.",
              fn: "Add a further test",
            },
            {
              text: "Only then could the developers fairly claim that the app, rather than the students' own effort, produced the better grades.",
              fn: "Tie evidence to the claim",
            },
            {
              text: "Until such evidence exists, the higher grades are a reason to study the app more closely, not proof that it raises performance.",
              fn: "Final judgment",
              moves: ["Until such evidence"],
            },
          ],
        },
      ],
    },
  },
  {
    id: "w-arg-health-1",
    type: "argument",
    category: "Public Health",
    prompt:
      "The following appeared in a regional newspaper editorial. \"Since the city of Harrowmere opened a 24-hour walk-in clinic three years ago, emergency room visits at the city's main hospital have fallen by 12 percent. Other cities in our region experiencing emergency room overcrowding should open similar walk-in clinics to relieve pressure on their hospitals.\"",
    directions: ARGUMENT_DIRECTIONS,
  },
  {
    id: "w-arg-env-1",
    type: "argument",
    category: "Environmental Policy",
    prompt:
      "The following appeared in a letter to a state environmental agency. \"Eastfield County introduced a plastic bag fee five years ago and has since seen plastic litter at its beaches decline by 40 percent. Westfield County, which has comparable beaches but no such fee, has experienced no decline. To reduce coastal litter statewide, the agency should mandate a uniform plastic bag fee in every county.\"",
    directions: ARGUMENT_DIRECTIONS,
  },
  {
    id: "w-arg-edu-1",
    type: "argument",
    category: "Education",
    prompt:
      "The following appeared in a report from the principal of Cresthill High School. \"After we eliminated standardized homework assignments in the freshman class last year, average freshman test scores rose by 4 percent and reported student stress fell by half. We should therefore extend the policy to every grade level, where similar benefits can be expected.\"",
    directions: ARGUMENT_DIRECTIONS,
  },
  {
    id: "w-arg-tech-1",
    type: "argument",
    category: "Technology",
    prompt:
      "The following appeared in a memo from the chief information officer of a midsize firm. \"Since our engineering team began holding daily 15-minute stand-up meetings six months ago, the number of bugs reported in our flagship product has dropped by 25 percent. The same practice should be adopted by every department in the company, including sales, finance, and human resources, in order to produce comparable improvements in quality.\"",
    directions: ARGUMENT_DIRECTIONS,
  },
  {
    id: "w-arg-policy-2",
    type: "argument",
    category: "Policy Memos",
    prompt:
      "The following appeared in a memo from a town council member. \"A recent survey found that 65 percent of residents who responded support extending the operating hours of our public library. Therefore, extending those hours would benefit the majority of the town's residents and should be funded immediately, even if doing so requires reducing the operating hours of the community recreation center.\"",
    directions: ARGUMENT_DIRECTIONS,
  },
];
