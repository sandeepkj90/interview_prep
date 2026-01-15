# React teaching syllabus — step-by-step (Basic → Intermediate → Advanced)

## How to use this syllabus (quick)

* Each **Module** = 1–2 weeks (adjustable).
* Each **Lesson** = 60–120 minutes (lecture + live coding + exercises).
* Always end lessons with a short practical assignment and a 20–30 min hands-on lab or quiz.
* Build a running **course project** (see capstone) and add features every module.

---

# Module 0 — Course setup & teaching essentials

**Goal:** prepare students’ machines and mindsets for learning React.

Lessons:

1. Environment & tools

   * Install Node.js, npm/yarn, VS Code, React DevTools, Git.
   * Create projects with **Vite** and **Create React App**.
   * Basic Git workflow: clone, commit, push, branches.
   * ESLint + Prettier basics.
2. Course expectations & assessment plan

   * Explain grading (homework, mini-projects, capstone, quizzes), office hours, resources.

**Deliverable:** Starter repo with Vite + ESLint config + README.

---

# Module 1 — JavaScript & Web fundamentals refresher (Required)

**Goal:** ensure students have strong JS/DOM fundamentals used by React.

Lessons (short, focused):

1. Modern JavaScript essentials

   * let/const, arrow functions, template strings, destructuring, spread/rest, modules (import/export).
2. ES6+ features used in React

   * Promises, async/await, fetch, classes (brief), optional chaining, nullish coalescing.
3. DOM & browser basics

   * DOM querying, events, event propagation, basic forms, localStorage basics.

**Exercise:** small JS tasks + build a simple vanilla JS todo (for comparison later).

---

# Module 2 — React Fundamentals (Basics)

**Goal:** students can build components, manage state, and render UI.

Lessons:

1. What is React & JSX

   * SPA idea, component-based UI, JSX rules, expressions in JSX.
2. Components & Props

   * Functional components, props, default props, propTypes (intro).
3. State with `useState`

   * Local state, updating state, state immutability patterns.
4. Rendering lists & keys

   * map(), keys importance, common key pitfalls.
5. Events & conditional rendering

   * onClick, forms basic handling, conditional rendering patterns (`&&`, ternary).
6. Controlled vs uncontrolled inputs

   * Controlled inputs with state, basic form submission.

**Hands-on lab:** Build a small Todo app: add, toggle, remove todos (store in component state).

**Assessment:** Quiz + commit of working todo app.

---

# Module 3 — Component Composition & Styling (Basics → Intermediate)

**Goal:** learn component design patterns and styling approaches.

Lessons:

1. Component composition & props drilling

   * Parent → child → grandchild data flow, destructuring props.
2. Lifting state up & controlled composition

   * Where to keep state; example: shared filter or selection.
3. Styling strategies

   * Plain CSS, CSS Modules, SASS, Styled Components intro, className patterns.
4. Component organization & naming conventions

   * Atomic design basics, folder structures for small apps.

**Exercise:** Refactor the Todo app into smaller components (Header, TodoList, TodoItem, AddTodo).

---

# Module 4 — React Hooks (Core) — (Intermediate)

**Goal:** mastery of core hooks and when to use them.

Lessons:

1. `useEffect` deep dive

   * Side effects, dependency array, cleanup, fetch pattern.
2. `useRef` & DOM interaction

   * Persisted values, focus management, avoiding re-renders.
3. `useMemo` & `useCallback`

   * Memoization basics, performance reasons, pitfalls.
4. `useContext`

   * Context provider/consumer, avoiding prop drilling.
5. Custom hooks

   * When to create them; build a `useFetch` or `useLocalStorage`.

**Labs:**

* Convert API fetching in app to use `useEffect` + loading/error handling.
* Build `useDebounce` or `useFetch` custom hook.

**Assessment:** Practical test: implement search with debounce and memoized results.

---

# Module 5 — Routing, Forms & Accessibility (Intermediate)

**Goal:** navigation, advanced forms, and accessibility basics.

Lessons:

1. React Router (v6+)

   * BrowserRouter, Routes, Route, Link, NavLink, useParams, nested routes, protected routes pattern.
2. Forms & validation

   * Controlled forms advanced, `react-hook-form` (preferred), validation with `Yup`.
3. Accessibility (a11y)

   * Semantic HTML, ARIA basics, keyboard navigation, focus management.

**Lab:** Build a multi-page app (Users list → User detail → Create user form). Use react-hook-form.

---

# Module 6 — State Management Patterns (Intermediate → Advanced)

**Goal:** understand global state options and choose the right tool.

Lessons:

1. Context API for global state

   * When to use, pitfalls (re-renders), splitting contexts.
2. Redux Toolkit (RTK) fundamentals

   * Slices, createAsyncThunk, store setup, best practices.
3. Lightweight alternatives

   * Zustand / Recoil / Jotai overview and use-cases (one demo, not deep).
4. Caching & async patterns

   * Server state vs client state; introduction to React Query (TanStack Query) for data fetching & cache.

**Lab:** Implement a shopping-cart style global state using Context and then redo with RTK or Zustand.

**Assessment:** Small project where students pick either Context or RTK and justify choice.

---

# Module 7 — Performance & Optimization (Advanced)

**Goal:** students learn to profile and optimize React apps.

Lessons:

1. Re-render patterns & debugging

   * When components re-render, React DevTools profiler, tracing renders.
2. Memoization & optimization techniques

   * React.memo, useMemo, useCallback correct usage and misuse.
3. Code splitting & lazy loading

   * `React.lazy`, `Suspense`, dynamic import.
4. Image & asset optimization; avoiding waterfall requests.

**Lab:** Profile the course project, find hotspots, apply memoization and code splitting.

---

# Module 8 — Testing React Apps (Intermediate → Advanced)

**Goal:** teach testing fundamentals and test-driven habits.

Lessons:

1. Unit testing components

   * React Testing Library (RTL): render, screen, fireEvent, findBy*.
2. Testing hooks

   * Using `@testing-library/react-hooks` or custom setup (or Vitest).
3. Integration & E2E basics

   * Jest/Vitest for unit; intro to Playwright or Cypress for E2E.
4. Mocking API calls & fixtures

**Lab:** Write tests for Todo and for a custom hook; set up simple CI test script.

---

# Module 9 — TypeScript with React (Intermediate → Advanced)

**Goal:** safe typing for components, hooks, and state.

Lessons:

1. Why TypeScript? Setup with Vite.
2. Typing props, default props, functional components.
3. Typing hooks & custom hooks, generics for reusable hooks.
4. Typing Redux/RTK or Zustand store shapes.
5. Migrating JS → TS patterns.

**Lab:** Convert a small component or hook to TypeScript and fix type errors.

---

# Module 10 — Server-side Rendering & Frameworks (Intro to Advanced)

**Goal:** introduce SSR/SSG concepts and Next.js basics.

Lessons:

1. CSR vs SSR vs SSG vs ISR (concepts)
2. Next.js basics: pages/app router, getServerSideProps/getStaticProps (or app-router equivalents), API routes.
3. Deploying a Next.js app (Vercel basics).

**Lab:** Build a small Next.js page with server-side data fetch (or static generation) and deploy to Vercel demo.

---

# Module 11 — Build, Deploy & Monitoring (Advanced / Pro)

**Goal:** ship production-ready apps and maintain quality.

Lessons:

1. Build & bundling basics

   * Vite vs Webpack, tree shaking, bundle analysis.
2. CI/CD basics

   * GitHub Actions for build & test, deploy steps to Netlify/Vercel.
3. Performance metrics & monitoring

   * Lighthouse basics, basic Sentry integration, user metrics (FCP/LCP/CLS).
4. Security basics

   * XSS, sanitization, secure token storage, CSP basics.

**Lab:** Configure a GitHub Action to run tests and deploy demo app after successful build.

---

# Module 12 — Capstone Project (Integration of all skills)

**Goal:** students complete a project demonstrating skills from basics → advanced.

Project ideas (choose one):

* Social feed app (posts, comments, likes, auth simulation, infinite scroll).
* E-commerce mini-store (product list, cart, checkout flow, payments mock).
* Admin dashboard (data grid, filters, charts, role-based pages).

Requirements:

* Use React + Router + state management (Context/RTK/Zustand)
* Implement forms with validation, API mocking, tests (unit tests + 1 E2E), and deploy live.
* Integrate accessibility checks and performance profiling report.

**Deliverable:** Deployed app, GitHub repo, README, short presentation/demo.

---

# Additional advanced topics (optional / extra credit)

* Concurrent features & Suspense for data fetching (React 18+).
* Build a mini React (virtual DOM + diffing) exercise.
* Micro-frontend patterns.
* WebSockets + real-time updates.
* PWAs & offline caching with service workers.
* Advanced bundler configuration (Webpack/Vite optimizations).

---

# Assessments & grading suggestions

* Weekly quizzes (short MCQ + 1 coding snippet) — 20%
* Home assignments & labs (git commits + PR) — 30%
* Midterm mini-project (module 6) — 20%
* Final capstone + presentation — 30%

Rubrics: correctness, code quality, tests, accessibility, documentation, deployment.

---

# Teaching tips & best practices

* Start every class with a 10-minute live code demo; then have students code along.
* Encourage incremental commits — require meaningful commit messages.
* Give starter PR templates and issue templates for projects.
* Use pair programming for labs (rotate partners).
* Keep a shared list of resources (MDN, React docs, official libs).
* Provide sample solutions after assignments but only after deadline.
