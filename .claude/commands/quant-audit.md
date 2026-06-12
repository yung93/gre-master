---
description: Audit quant questions for GRE pattern fidelity and difficulty
---

Run a GRE-fidelity audit of the quantitative question bank using the
gre-question-auditor agent.

Scope: $ARGUMENTS

- If the scope names question ids (e.g. `q-geo-13`), a topic (e.g. `geometry`),
  or a file, audit exactly those questions.
- If the scope is empty, audit the questions added or changed since the last
  commit (`git diff HEAD -- data/quant/`); if there are none, audit the most
  recently added questions in each topic file instead.

Launch the gre-question-auditor agent with the resolved scope, then relay its
full per-question verdicts here. If it reports CRITICAL findings (wrong answer
key, ambiguous stem), summarize them first and propose the fix before anything
else.
