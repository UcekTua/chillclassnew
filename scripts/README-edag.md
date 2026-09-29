# EDAG-3 learning site

Entry points: `/edag/index.html`, or Semester 3 → E-Dagang in the Chill Class portal.

## Content

- Five core modules cover the supplied slide decks and book excerpts.
- Modules 6–7 explain mobile and social/enterprise concepts from Quiz 1 whose dedicated book chapters were not supplied.
- Module 8 covers supporting concepts from Quiz 2.
- 81 reading sections, 10 practice questions per module (80 total), and 30 distinct simulation questions.
- The simulation follows the observed Quiz 1 structure: 15 five-option MCQs and 15 true/false statements; 10 questions each from modules 5, 6, and 7.
- Every question includes reasoning, option-level explanations, and a link back to the relevant reading section. Source-key disagreements are documented separately in the source audit.

Markdown sources are in `resource-materi/EDAG-3/catatan-belajar/`. These notes are the durable study record, not an assertion of persistent model memory. The original PDFs remain unchanged. Missing closing cases and online appendices are identified in the notes and source page rather than reconstructed.

## Editing and generation

```sh
npm run build:edag
npm run test:edag
npm run build
```

`build-edag.mjs` renders the Markdown and generates the static HTML/data assets under `public/edag/`. Edit `app.js` and `edag.css` directly for behavior and styling. Edit the Markdown for lessons; do not edit generated `lessons.js` or `audit.js`.

`edag-questions.mjs` authors practice questions; `edag-exam.mjs` authors simulation questions. `edag-question-review.mjs` applies the second editorial pass to those questions before generation. In authoring helpers and editorial option pairs, the first option is the key; the generator transforms the answer index when rotating options. The browser independently shuffles questions and options for each new attempt and saves that order.

Section links use stable chapter/section IDs. Adding or reordering Markdown level-two headings requires reviewing question references. Changing answer semantics or option order after release also requires a quiz-state schema/key migration so a saved answer is not silently reinterpreted.

## Behavior and limitations

Reading completion, theme, answers, flags, last score and best score are local to the browser. A 45-minute deadline is optional and continues across reloads/closed tabs; this duration is an authored practice setting, not a claim about the source exam. Closed-tab expiry is evaluated on return. Blank and wrong answers score zero. Practice feedback locks the checked answer; simulation feedback opens after submission. Restarting an attempt retains reading completion and best score.

This is self-study content. The client-side answer bank is inspectable and is not intended to secure a graded institutional exam. No account, server-side progress sync, or submission to an LMS is involved.

The site is self-contained except optional Google Fonts, with local/system font fallbacks. No original attempt-owner metadata or source PDF files are copied into the public site.

## Verification

`test-edag.mjs` validates the question schema, counts, answer indices, explanations and section references. It starts an ephemeral static server and drives Chromium/Edge through reading/search, laboratories, themes, saved progress, quiz grading, feedback, flags, reset, partial submission, timer expiry, corrupted storage, blocked persistence, and 390px mobile layouts. Screenshots and a result summary go to `tmp/edag-qa/`.

The test uses installed Edge or Chrome on Windows. Set `EDAG_BROWSER` to another Chromium executable if needed; otherwise install the Playwright Chromium browser. It does not require the Next server. Portal integration and production compilation are checked separately with `npm run build` and a running Next server. Run `node scripts/test-edag-portal.mjs` against port 3010, or set `EDAG_BASE_URL` to another local Next server.

The final production build and both browser suites passed. Desktop/light and 390px mobile screenshots were inspected. The editorial audit found 9 of 71 multiple-choice keys were uniquely longest; the simulation contains 8 true and 7 false keys. Length and position are not used as clues to the answer.
