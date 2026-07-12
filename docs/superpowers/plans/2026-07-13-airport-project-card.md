# Airport Lost & Found Featured Project Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the redundant Breast Cancer ANN portfolio card with a verified Airport Lost & Found full-stack AI project.

**Architecture:** Keep the existing static `PROJECTS` data model and six-card grid. Add one regression test against server-rendered markup, then replace only the final project object; no new component, route, dependency, or README change is required.

**Tech Stack:** React 18, Vite 8, Node test runner, Netlify

## Global Constraints

- Describe the project as an Azure-native full-stack MVP.
- Do not claim a live deployment, production usage, accuracy, latency, savings, or business impact.
- Keep exactly six featured projects.
- Link to `https://github.com/MohamedMagdy2208/airport-lost-found-system`.
- Do not modify the Airport repository README.

---

### Task 1: Replace the featured project card

**Files:**
- Modify: `tests/portfolio.test.mjs:68`
- Modify: `src/App.jsx:85-92`

**Interfaces:**
- Consumes: existing `renderApp(t)` test helper and `PROJECTS` object shape
- Produces: server-rendered Airport project card linked to the public repository

- [ ] **Step 1: Write the failing regression test**

Append this test to `tests/portfolio.test.mjs`:

```js
test("Featured Projects contains Airport Lost & Found instead of Breast Cancer ANN", async (t) => {
  const html = await renderApp(t);

  assert.match(html, /Airport Lost &amp; Found — AI Operations Platform/);
  assert.match(html, /https:\/\/github\.com\/MohamedMagdy2208\/airport-lost-found-system/);
  assert.doesNotMatch(html, /Breast Cancer Prediction/);
});
```

- [ ] **Step 2: Run the targeted test and verify RED**

Run:

```powershell
node --test --test-name-pattern="Featured Projects contains Airport" tests/portfolio.test.mjs
```

Expected: FAIL because the rendered markup does not contain `Airport Lost &amp; Found — AI Operations Platform`.

- [ ] **Step 3: Replace the final project object**

Replace the Breast Cancer object in `src/App.jsx` with:

```js
  {
    title: "Airport Lost & Found — AI Operations Platform",
    tag: "Generative AI · Graph RAG",
    desc: "An Azure-native full-stack MVP for bilingual passenger and staff intake, AI image/OCR enrichment, hybrid item matching, claim verification, and custody tracking with human approval gates.",
    impact: "Connects retrieval, operational workflows, security controls, and human review into an end-to-end airport recovery platform.",
    stack: ["FastAPI", "React", "Graph RAG", "Azure AI Search", "PostgreSQL"],
    accent: "violet", lang: "Python",
    url: "https://github.com/MohamedMagdy2208/airport-lost-found-system",
  },
```

- [ ] **Step 4: Run the targeted test and verify GREEN**

Run:

```powershell
node --test --test-name-pattern="Featured Projects contains Airport" tests/portfolio.test.mjs
```

Expected: PASS with one matching test and no failures.

- [ ] **Step 5: Run the complete automated checks**

Run:

```powershell
npm test
npm run build
npm audit --omit=dev
git diff --check
```

Expected: 7/7 tests pass, the Vite production build succeeds, npm reports zero vulnerabilities, and `git diff --check` produces no errors.

- [ ] **Step 6: Commit the implementation**

```powershell
git add src/App.jsx tests/portfolio.test.mjs
git commit -m "Feature airport lost and found project"
```

Expected: one implementation commit on `agent/add-airport-project-card`.

### Task 2: Verify and publish

**Files:**
- No source-file changes
- Verify: `src/App.jsx`, `tests/portfolio.test.mjs`

**Interfaces:**
- Consumes: committed project card from Task 1
- Produces: merged GitHub pull request and verified Netlify production deployment

- [ ] **Step 1: Run local browser verification**

Start the production preview:

```powershell
npm run build
npx vite preview --host 127.0.0.1
```

Use browser verification at 1440×900 and 390×844. Confirm the Airport card appears, the Breast Cancer card is absent, the repository link is correct, the page has content, and no Vite overlay or console error appears.

- [ ] **Step 2: Push the branch**

```powershell
git push -u origin agent/add-airport-project-card
```

Expected: the remote branch is created or updated successfully.

- [ ] **Step 3: Open and validate the pull request**

Create a pull request titled `Feature Airport Lost & Found project`, targeting `main`. The body must summarize the replacement, accuracy constraints, automated checks, and browser verification. Confirm the Netlify deploy-preview check succeeds.

- [ ] **Step 4: Merge and verify production**

Mark the pull request ready, merge it into `main`, fetch `origin/main`, and confirm `https://mohamedmagdy.site` renders the Airport card with the public repository link and no browser errors.
