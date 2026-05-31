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
      title: "A measured defense of mandatory breadth",
      body: [
        { text: "The claim that every undergraduate should be required to study outside their major is", tone: "default" },
        { text: " more defensible than it first appears", tone: "phrase", note: "Useful hedged endorsement opener" },
        { text: ", though only when the requirement is structured to do more than fill credit hours. ", tone: "default" },
        { text: "I will argue that", tone: "structure", note: "Direct thesis signal — graders value clarity" },
        { text: " breadth requirements serve a defensible educational purpose, but that purpose is reliably defeated by careless implementation.\n\n", tone: "default" },
        { text: "Consider, first, the strongest version of the case for breadth.", tone: "structure", note: "Steelman the position you'll qualify" },
        { text: " A physics major who has never seriously read history will encounter, in adult life, decisions whose stakes are historical rather than physical: how an institution accumulates trust, why reforms succeed in one country and fail in another, what the social cost of efficiency really is. ", tone: "default" },
        { text: "Specialization without context is precisely what produces", tone: "phrase", note: "Crisp causal framing" },
        { text: " the technically competent administrator who cannot anticipate political backlash, or the brilliant economist who treats every social problem as a price problem. Breadth, on this view, is not ornament; it is the corrective to a tendency that intense disciplinary training otherwise reinforces.\n\n", tone: "default" },
        { text: "And yet", tone: "structure", note: "Pivot to qualification" },
        { text: " the requirement, as usually administered, achieves none of this. Distribution requirements satisfied by a single introductory survey, taken under time pressure and forgotten within a semester, produce only a credential, not a shift in cognitive habit. ", tone: "default" },
        { text: "Worse still", tone: "phrase", note: "Intensifier for the strongest sub-point" },
        { text: ", such requirements often dilute the very disciplinary depth they are meant to complement, by displacing the additional courses in a student's primary field that might have produced genuine mastery.\n\n", tone: "default" },
        { text: "The right conclusion is therefore conditional. ", tone: "default" },
        { text: "Breadth requirements are justified to the extent that", tone: "phrase", note: "Conditional thesis — graders reward calibrated claims" },
        { text: " they are designed as sequences rather than samples — a year, say, in a single foreign discipline rather than three unconnected courses. ", tone: "default" },
        { text: "Stated more carefully", tone: "structure", note: "Refinement signal in conclusion" },
        { text: ", the original claim is correct in its instinct and wrong in its standard implementation; reform of the requirement is more urgent than its abolition.", tone: "default" },
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
      title: "Feasibility as the wrong frame",
      body: [
        { text: "It is tempting to insist that public officials privilege feasibility over ideals, since the alternative seems to sanction utopian gestures at the expense of real welfare. ", tone: "default" },
        { text: "On closer inspection, however", tone: "structure", note: "Reliable pivot phrase before qualifying" },
        { text: ", the dichotomy on which the claim depends is itself misleading: feasibility is not a fixed terrain across which leaders merely navigate, but a horizon their own commitments help to set.\n\n", tone: "default" },
        { text: "Consider the trajectory of any reform that, in its early years, appeared plainly unfeasible — the abolition of legalized slavery, the recognition of women as voters, the integration of public health into the basic responsibilities of the state. ", tone: "default" },
        { text: "Each of these was, at the moment its first serious advocates emerged, dismissed as impractical by precisely the kind of official the claim purports to praise. ", tone: "default" },
        { text: "What changed feasibility", tone: "phrase", note: "Strong causal phrase" },
        { text: " was not new techniques of policymaking but a sustained insistence that the existing arrangement was intolerable. The ideal, in other words, did not wait on the feasible; it remade it.\n\n", tone: "default" },
        { text: "This is not to deny", tone: "structure", note: "Concession before the counter" },
        { text: " the dangers the claim is reaching for. An official who pursues an unattainable ideal at the cost of present welfare — refusing the imperfect bill because a better one is conceivable, scrapping the workable program in pursuit of the elegant one — does genuine harm. ", tone: "default" },
        { text: "But the corrective is not the privileging of feasibility; it is the discipline of staging — committing to the ideal while sequencing the work in feasible increments.\n\n", tone: "default" },
        { text: "The claim, then, mistakes a tactical question for a foundational one. ", tone: "default" },
        { text: "Officials should be guided by ideals", tone: "phrase", note: "Reassert the corrected thesis" },
        { text: " precisely so that what is feasible expands over time; the prudence the claim invokes is best understood not as the choice of feasibility over the ideal, but as the discipline of pursuing the ideal one feasible step at a time.", tone: "default" },
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
      title: "What the memo takes for granted",
      body: [
        { text: "The city manager's recommendation depends on a chain of assumptions, each of which must hold for the conclusion to follow. ", tone: "default" },
        { text: "When each link is examined in turn", tone: "structure", note: "Roadmap signal" },
        { text: ", the proposal turns out to rest on inferences the memo neither states nor defends.\n\n", tone: "default" },
        { text: "The argument presumes, first, that", tone: "phrase", note: "Standard argument-task opener" },
        { text: " Cape Bay's tourism increase is attributable to the boardwalk extension rather than to confounding factors. ", tone: "default" },
        { text: "Yet the memo offers no evidence that other plausible causes — favorable weather, a regional marketing campaign, the closure of a competing destination — were ruled out. ", tone: "default" },
        { text: "If any such factor explains the rise", tone: "phrase", note: "Counterfactual framing" },
        { text: ", duplicating only the boardwalk in Lakeside is unlikely to reproduce the result.\n\n", tone: "default" },
        { text: "A second assumption is that what worked in Cape Bay will transfer to Lakeside. ", tone: "default" },
        { text: "The memo treats the two towns as interchangeable", tone: "phrase" },
        { text: ", but says nothing about the differences that would actually govern the outcome: the size of each town's existing tourism base, the carrying capacity of its restaurants and hotels, the demographic profile of its visitors. ", tone: "default" },
        { text: "Without evidence that Lakeside's downtown bottleneck is, in fact, insufficient waterfront access", tone: "structure", note: "Locate the unstated diagnosis" },
        { text: ", building more of it may simply add capacity that is not used.\n\n", tone: "default" },
        { text: "Third, the proposed funding mechanism assumes that diverting park maintenance funds carries no offsetting cost. ", tone: "default" },
        { text: "This neglects the possibility that", tone: "phrase", note: "Hedged challenge useful in any argument task" },
        { text: " deteriorating parks themselves deter visitors, reduce property values, and impose later expenses far exceeding the savings; the memo treats the reallocation as if its only consequence were the new boardwalk.\n\n", tone: "default" },
        { text: "To strengthen the recommendation", tone: "structure", note: "Closing template — propose evidence rather than disagree" },
        { text: ", the manager would need comparative data isolating the boardwalk's contribution in Cape Bay, evidence that Lakeside's downtown weakness is specifically waterfront-related, and an assessment of the long-run cost of park neglect. Absent that evidence, the inference from one town's experience to a confident prescription for another is not yet earned.", tone: "default" },
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
