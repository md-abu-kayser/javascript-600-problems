# JavaScript - 600+ Problems Solved

![License: MIT](https://img.shields.io/badge/license-MIT-brightgreen)
![Examples](https://img.shields.io/badge/examples-600%2B-blue)

A curated collection of concise, well-documented JavaScript solutions and learning exercises spanning foundational to advanced topics. Organized into two focused workspaces:

- `js-basic` - core language fundamentals and small practice problems (arrays, functions, loops, objects, basics of scope and closure).
- `js-advanced` - deep dives into language internals, performance-aware patterns, advanced async control, generators, and real-world idioms.

This repository is built to teach, demonstrate engineering judgment, and serve as a showcase for interview preparation or client review.

## Highlights

- 600+ small, self-contained examples and practice problems (files are single-concept and runnable).
- Clear, commentary-rich code intended for learning and quick inspection.
- Examples focused on readability, testability, and the trade-offs engineers care about (performance, memory, error handling).

## Why this repo is useful to you

- **Learners:** step through files in `js-basic` to master fundamentals with runnable examples.
- **Intermediate/Senior engineers:** explore `js-advanced` for patterns, performance notes, and interview-ready explanations.
- **Hiring managers/clients:** fast way to evaluate code clarity, judgement, and breadth of JavaScript expertise.

## Quick Start

**Prerequisites:**

- Node.js (LTS recommended - v16+)

Run any example from the repository root. Example using PowerShell:

```powershell
cd c:\projects\javascript-600-problems-solved\js-basic
node array.js

cd ..\js-advanced
node some-advanced-file.js
```

Replace `array.js` or `some-advanced-file.js` with any file from the respective directories. Most files print a short demonstration to the console.

## Project structure---> top-level

- `js-basic/` - beginner and intermediate problems; single-concept files ideal for learning and interviews.
- `js-advanced/` - advanced examples and deep-dive topics with performance notes and defensive patterns.
- `README.md` - this file (overview + navigation for clients/contributors).

Explore either folder to see the full list of example files. Filenames are descriptive and use kebab-case for readability.

## Showcase examples (recommended to run)

- `js-basic/array.js` - array basics and common operations
- `js-basic/function-return.js` - function behavior, return patterns
- `js-advanced/async-await.js` - advanced async patterns and concurrency control
- `js-advanced/event-loop.js` - microtask vs macrotask ordering demonstration

Running the above will give a quick feel for the code style and teaching approach.

## How this repo is organized (developer contract)

- One concept per file. Files are intentionally small to be readable and runnable.
- Example files either log demonstrative output or export pure functions suitable for unit testing.
- Performance or memory-sensitive examples include short notes about complexity and trade-offs.

Edge cases covered in examples (where relevant): empty inputs, large inputs, error handling, and cancellation/cleanup for async examples.

## Contribution Guide

We welcome contributions. To keep the repo high-quality and client-ready, please follow these rules:

1. Keep files focused: one concept per file and use kebab-case filenames (`async-concurrency.js`).
2. Add a short header comment describing the goal, expected output, and complexity characteristics.
3. Provide a small runnable example (console output) and export pure functions where appropriate for unit testing.
4. Avoid introducing external dependencies for core examples. If a new dependency is necessary, explain the reason in your PR.
5. When demonstrating performance comparisons, include measured results and environment details.

Open a PR with a clear title and description. Small, incremental PRs are preferred.

### Tests, CI, and validation (recommended)

This repository keeps examples lightweight by default. I recommend the following steps to add quality gates and client-facing confidence:

1. Add a `package.json` at the repository root (if missing) and include a test runner such as Jest or Vitest.
2. Export pure functions from example files so unit tests can import them. Place tests in a `__tests__/` folder.
3. Add a GitHub Actions workflow that runs tests on PRs and pushes a status badge to this `README.md`.

**If you’d like, I can scaffold:**

- A minimal `package.json` with a test script
- One or two example tests for `js-basic` and `js-advanced`
- A CI workflow (GitHub Actions) and status badges

Tell me which scaffold(s) you want and I’ll add them.

### Code Style and Quality

- Prefer modern JavaScript: `const`/`let`, arrow functions when clearer, and descriptive variable names.
- Keep side effects isolated for easier testing.
- Add short comments for any non-obvious decisions or trade-offs.

### License

- This project is licensed under the terms of the **[MIT License](./LICENSE)**.
- You may replace or update the license as needed for client or proprietary projects.

---

### Contact and Maintainer

**Maintainer:** [md-abu-kayser](https://github.com/md-abu-kayser)
**Name:** Md Abu Kayser - Full-Stack Engineer

- **GitHub:** [github.com/abu.kayser-official](https://github.com/md-abu-kayser)
- **Email:** [abu.kayser.official@gmail.com](mailto:abu.kayser.official@gmail.com)
- **Problem:** _javascript-600-problems-solved_

If you’d like this README tailored for a specific purpose - such as **hiring managers**, **open-source contributors**, or **client deliverables** - feel free to request a custom tone or format.

---

It’s designed to be **clean, well-structured**, and **pleasant to explore** - perfect for interviews or professional problems solved.

---

**If a client or maintainer wants to discuss improvements, pair on content, or request additional problem sets, please open an issue or reach out via the repo's contact information.**

---

**Enjoy learning and exploring JavaScript - basic to advanced problems lead to big understanding.**
**Thank you for reviewing this project!**

---

**Thank you for exploring - basic and advanced, focused exercises are a powerful way to master JavaScript and demonstrate engineering judgment.**
