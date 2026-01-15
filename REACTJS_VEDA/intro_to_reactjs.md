## **Introduction to React – Complete Question List**

### **1. Basics & Conceptual**

## **Question 1: What is React and why was it created?**

**1. One Line Answer**
React is an open-source JavaScript library developed by Facebook in 2013 for building dynamic, component-based user interfaces efficiently.

**2. Pointwise Answer**
- React is a JavaScript library for building user interfaces
- Created by Jordan Walke at Facebook in 2011, open-sourced in 2013
- Built to solve performance issues with Facebook's growing codebase
- Enables creation of reusable UI components
- Uses Virtual DOM for efficient updates
- Focuses on the view layer (V in MVC)
- Initially created for Facebook's News Feed
- Now maintained by Meta and open-source community

**3. Interview Main Points**
- Facebook needed better performance for dynamic data changes
- Traditional DOM manipulation was slow and inefficient at scale
- React introduced Virtual DOM for optimized rendering
- Component-based architecture promotes reusability and maintainability
- Declarative programming model makes code more predictable
- Battle-tested in production at Facebook, Instagram, Netflix, etc.

**4. Example**
```javascript
// Simple React component showing declarative UI
function WelcomeMessage({ name, unreadCount }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {unreadCount > 0 && (
        <p>You have {unreadCount} unread messages</p>
      )}
    </div>
  );
}

// Usage - just describe what you want, React handles how
<WelcomeMessage name="Sarah" unreadCount={5} />
```

---

## **Question 2: What are the key features of React?**

**1. One Line Answer**
React's key features include Virtual DOM, component-based architecture, JSX syntax, unidirectional data flow, and a rich ecosystem with hooks and lifecycle methods.

**2. Pointwise Answer**
- **Virtual DOM**: Efficient in-memory representation of real DOM
- **Component-Based**: Reusable, self-contained UI pieces
- **JSX**: XML-like syntax for writing UI in JavaScript
- **Unidirectional Data Flow**: Predictable data management
- **Declarative**: Describe what UI should look like, not how to build it
- **React Hooks**: State and lifecycle in functional components
- **Performance Optimization**: Memoization, lazy loading, code splitting
- **Rich Ecosystem**: Large community, libraries, and tools
- **Cross-Platform**: React Native for mobile development
- **Server-Side Rendering**: Next.js for SEO and performance

**3. Interview Main Points**
- Virtual DOM minimizes expensive real DOM manipulations
- Component reusability reduces development time
- JSX combines markup with logic for better maintainability
- One-way data binding makes debugging easier
- Hooks revolutionized functional components
- Strong community support and extensive documentation
- Used by major companies worldwide

**4. Example**
```javascript
// Demonstrates multiple React features
import { useState, useEffect } from 'react';

// Component-based architecture
function UserDashboard({ userId }) {
  // Hooks for state management
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Lifecycle management with hooks
  useEffect(() => {
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setIsLoading(false);
      });
  }, [userId]); // Unidirectional data flow
  
  // Declarative JSX
  if (isLoading) return <div>Loading...</div>;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}
```

---

## **Question 3: Explain the difference between React and other front-end frameworks like Angular or Vue.**

**1. One Line Answer**
React is a lightweight view library using Virtual DOM and JSX, while Angular is a full-featured framework with TypeScript and two-way binding, and Vue is a progressive framework combining features from both.

**2. Pointwise Answer**
- **React**: Library (not framework), focuses on UI, requires additional libraries for routing/state
- **Angular**: Full framework, includes everything (routing, HTTP, forms), uses TypeScript
- **Vue**: Progressive framework, easier learning curve, flexible architecture
- **React**: JSX syntax, Virtual DOM, unidirectional flow
- **Angular**: Templates with directives, real DOM with change detection, two-way binding
- **Vue**: Template syntax similar to HTML, reactive data binding
- **React**: Large ecosystem, Facebook-backed
- **Angular**: Enterprise-focused, Google-backed
- **Vue**: Independent, community-driven

**3. Interview Main Points**
- React is "just JavaScript" with minimal API surface
- Angular has steeper learning curve but provides more out-of-the-box
- Vue is easiest to learn for beginners
- React offers more flexibility but requires decision-making on tools
- Angular enforces structure and patterns (opinionated)
- Vue offers balance between flexibility and structure
- React has largest job market and community

**4. Example**
```javascript
// React - JSX and hooks
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// Angular - TypeScript and decorators
@Component({
  selector: 'app-counter',
  template: '<button (click)="increment()">{{count}}</button>'
})
export class CounterComponent {
  count = 0;
  increment() { this.count++; }
}

// Vue - Template and reactive data
<template>
  <button @click="count++">{{ count }}</button>
</template>
<script>
export default {
  data() { return { count: 0 }; }
}
</script>
```

---

## **Question 4: What is SPA (Single Page Application)? How does React help in building SPAs?**

**1. One Line Answer**
SPA is a web application that loads a single HTML page and dynamically updates content without full page reloads; React enables SPAs through component-based architecture, Virtual DOM, and client-side routing.

**2. Pointwise Answer**
- **SPA**: Loads once, updates content dynamically without page refresh
- Traditional apps reload entire page for navigation
- SPAs provide smoother, app-like user experience
- React helps with:
  - Component reusability for different views
  - Virtual DOM for efficient updates
  - React Router for client-side navigation
  - State management for data persistence across views
  - Lazy loading for optimized performance
- Better performance after initial load
- Reduces server load (no full page requests)

**3. Interview Main Points**
- SPAs feel faster and more responsive than traditional web apps
- React's component model maps well to SPA architecture
- Client-side routing (React Router) enables navigation without reloads
- State management keeps data consistent across views
- Initial load might be slower (can be optimized with SSR)
- SEO challenges solved with SSR (Next.js)
- Examples: Gmail, Facebook, Netflix

**4. Example**
```javascript
// React SPA with routing
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        {/* Navigation without page reload */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      
      <Routes>
        {/* Different components for different routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

// Components render without full page reload
function Home() { return <h1>Home Page</h1>; }
function About() { return <h1>About Page</h1>; }
```

---

## **Question 5: Explain the virtual DOM and how React uses it.**

**1. One Line Answer**
Virtual DOM is a lightweight JavaScript representation of the real DOM that React uses to efficiently calculate minimal updates needed before applying them to the actual DOM.

**2. Pointwise Answer**
- Virtual DOM is an in-memory JavaScript object tree
- Mirrors the structure of real DOM
- When state/props change, React creates new Virtual DOM tree
- React compares new tree with previous one (diffing algorithm)
- Identifies minimal changes needed (reconciliation)
- Batches updates and applies only differences to real DOM
- Avoids expensive direct DOM manipulation
- Makes React fast and efficient

**3. Interview Main Points**
- Direct DOM manipulation is slow (triggers reflow/repaint)
- Virtual DOM is just plain JavaScript (fast to manipulate)
- React's diffing algorithm is optimized (O(n) complexity)
- Batch updates prevent multiple reflows
- Key prop helps React identify changed elements in lists
- React Fiber improved reconciliation with incremental rendering
- Virtual DOM enables cross-platform rendering (React Native)

**4. Example**
```javascript
function TodoList({ todos }) {
  const [items, setItems] = useState(todos);
  
  const addTodo = (text) => {
    // This triggers Virtual DOM process:
    // 1. React creates new Virtual DOM with new todo
    // 2. Compares with previous Virtual DOM
    // 3. Finds only new <li> element is different
    // 4. Updates only that <li> in real DOM
    setItems([...items, { id: Date.now(), text }]);
  };
  
  return (
    <ul>
      {/* Keys help React identify which items changed */}
      {items.map(item => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

// Without Virtual DOM, adding one item would re-render entire list
// With Virtual DOM, only new <li> is added to real DOM
```

---

## **Question 6: What is the difference between real DOM and virtual DOM?**

**1. One Line Answer**
Real DOM is the browser's actual HTML structure that's expensive to manipulate, while Virtual DOM is React's lightweight JavaScript copy that enables efficient diffing before minimal real DOM updates.

**2. Pointwise Answer**
- **Real DOM**: Browser's actual document object model
- **Virtual DOM**: JavaScript object representation of real DOM
- Real DOM updates are slow (causes reflow/repaint)
- Virtual DOM updates are fast (just JavaScript objects)
- Real DOM updates entire tree for small changes
- Virtual DOM calculates minimal changes first
- Real DOM directly manipulated by browser APIs
- Virtual DOM managed by React's reconciliation
- Real DOM is heavyweight
- Virtual DOM is lightweight in-memory structure

**3. Interview Main Points**
- Manipulating real DOM triggers expensive browser operations
- Virtual DOM batches updates for efficiency
- Virtual DOM enables React to optimize rendering
- Real DOM necessary for actual display, Virtual DOM is optimization layer
- Virtual DOM allows React to be declarative
- Diffing algorithm makes Virtual DOM updates O(n) instead of O(n³)
- Virtual DOM enables cross-platform capabilities

**4. Example**
```javascript
// Real DOM manipulation (vanilla JS) - SLOW
function updateName(newName) {
  const element = document.getElementById('user-name');
  element.textContent = newName; // Direct DOM manipulation
  // Triggers immediate reflow/repaint
}

// Virtual DOM (React) - FAST
function UserProfile() {
  const [name, setName] = useState('John');
  
  const updateName = (newName) => {
    // React creates new Virtual DOM
    setName(newName);
    // React diffs Virtual DOM trees
    // React batches and applies minimal changes
    // Only textContent updated, not entire element
  };
  
  return <div id="user-name">{name}</div>;
}

// Performance comparison:
// Real DOM: 10 updates = 10 DOM manipulations
// Virtual DOM: 10 updates = 1 batched DOM manipulation
```

---

## **Question 7: What is JSX? Why do we use it in React?**

**1. One Line Answer**
JSX is a JavaScript syntax extension that allows writing HTML-like markup inside JavaScript, making React components more readable and intuitive to write.

**2. Pointwise Answer**
- JSX = JavaScript XML
- Syntax extension for JavaScript
- Looks like HTML but is actually JavaScript
- Gets compiled to React.createElement() calls
- Makes component structure more visual and readable
- Allows embedding JavaScript expressions with {}
- Type-safe (catches errors at compile time)
- Prevents injection attacks (auto-escapes values)
- Not mandatory but widely used in React

**3. Interview Main Points**
- JSX is syntactic sugar, not a requirement
- Babel/TypeScript compiles JSX to JavaScript
- Combines markup and logic in one place (separation of concerns)
- More intuitive than createElement calls
- Supports full JavaScript power with {} syntax
- Automatically escapes values (XSS protection)
- Better tooling support (autocomplete, syntax highlighting)

**4. Example**
```javascript
// JSX - Readable and intuitive
function Welcome({ name, age }) {
  return (
    <div className="user-card">
      <h1>Hello, {name}!</h1>
      {age >= 18 && <p>You're an adult</p>}
      <button onClick={() => alert('Hi!')}>Greet</button>
    </div>
  );
}

// Compiled to (what React actually executes):
function Welcome({ name, age }) {
  return React.createElement(
    'div',
    { className: 'user-card' },
    React.createElement('h1', null, 'Hello, ', name, '!'),
    age >= 18 && React.createElement('p', null, "You're an adult"),
    React.createElement('button', 
      { onClick: () => alert('Hi!') }, 
      'Greet'
    )
  );
}

// Without JSX - Hard to read and maintain
```

---

## **Question 8: Can browsers read JSX directly? If not, how is it converted?**

**1. One Line Answer**
No, browsers cannot read JSX directly; it must be transpiled to regular JavaScript by tools like Babel before execution.

**2. Pointwise Answer**
- Browsers only understand JavaScript, HTML, and CSS
- JSX is not valid JavaScript syntax
- Requires transpilation (conversion) to JavaScript
- **Babel** is the most common transpiler
- Converts JSX to React.createElement() calls
- Transpilation happens during build process
- Can also use TypeScript compiler (TSX)
- Create React App includes Babel configuration
- Production code is plain JavaScript

**3. Interview Main Points**
- JSX is compile-time transformation, not runtime
- Babel transforms JSX → JavaScript before deployment
- Modern build tools (Webpack, Vite) include Babel
- No JSX reaches the browser in production
- Development mode may transpile on-the-fly
- TypeScript can also transpile JSX (as TSX)
- New JSX transform (React 17+) doesn't require importing React

**4. Example**
```javascript
// Source code (JSX) - What you write:
function App() {
  return <h1 className="title">Hello World</h1>;
}

// After Babel transpilation (Old Transform):
import React from 'react';
function App() {
  return React.createElement('h1', { className: 'title' }, 'Hello World');
}

// After Babel transpilation (New Transform - React 17+):
import { jsx as _jsx } from 'react/jsx-runtime';
function App() {
  return _jsx('h1', { className: 'title', children: 'Hello World' });
}

// Browser receives only the transpiled JavaScript
// JSX never reaches the browser

// Babel configuration example (.babelrc):
{
  "presets": ["@babel/preset-react"]
}
```

---

## **Question 9: What are components in React?**

**1. One Line Answer**
Components are independent, reusable pieces of UI that accept inputs (props) and return React elements describing what should appear on screen.

**2. Pointwise Answer**
- Components are building blocks of React applications
- Self-contained, reusable UI pieces
- Can be functional or class-based
- Accept inputs called "props"
- Return React elements (JSX)
- Can manage internal state
- Can be composed together to build complex UIs
- Encapsulate markup, logic, and styling
- Follow single responsibility principle

**3. Interview Main Points**
- Components promote code reusability
- Makes large applications manageable through composition
- Each component should do one thing well
- Can be nested and composed hierarchically
- Component names must start with capital letter
- Two types: Functional (preferred) and Class components
- Functional components with hooks are modern standard
- Components enable modular, testable code

**4. Example**
```javascript
// Simple functional component
function Button({ text, onClick, variant = 'primary' }) {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

// Component composition
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = () => {
    console.log('Logging in...');
  };
  
  return (
    <form>
      {/* Reusing components */}
      <Input 
        type="email" 
        value={email} 
        onChange={setEmail} 
      />
      <Input 
        type="password" 
        value={password} 
        onChange={setPassword} 
      />
      <Button text="Login" onClick={handleSubmit} />
      <Button text="Cancel" onClick={() => {}} variant="secondary" />
    </form>
  );
}

// Component tree:
// App
//   ├── LoginForm
//   │   ├── Input (email)
//   │   ├── Input (password)
//   │   ├── Button (login)
//   │   └── Button (cancel)
```

---

## **Question 10: Explain the difference between functional and class components.**

**1. One Line Answer**
Functional components are JavaScript functions that return JSX, while class components are ES6 classes that extend React.Component and have lifecycle methods.

**2. Pointwise Answer**
- **Functional Components**: Simple JavaScript functions that accept props and return JSX
- **Class Components**: ES6 classes that extend React.Component
- Functional components use hooks (useState, useEffect) for state and side effects
- Class components use this.state and lifecycle methods (componentDidMount, etc.)
- Functional components are simpler, more concise, and easier to test
- Class components have more boilerplate code
- Modern React favors functional components with hooks

**3. Interview Main Points**
- Emphasize that functional components are the modern standard since React 16.8 (Hooks introduction)
- Class components still work but are considered legacy
- Functional components have better performance and are easier to optimize
- Hooks allow functional components to have all capabilities of class components
- No need for `this` keyword in functional components

**4. Example**
```javascript
// Functional Component
function Welcome(props) {
  const [count, setCount] = useState(0);
  
  return <h1>Hello, {props.name}! Count: {count}</h1>;
}

// Class Component
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  render() {
    return <h1>Hello, {this.props.name}! Count: {this.state.count}</h1>;
  }
}
```

---

## **Question 11: What is the role of props in React?**

**1. One Line Answer**
Props (properties) are read-only data passed from parent to child components to customize and configure them.

**2. Pointwise Answer**
- Props enable data flow from parent to child components
- They are immutable (read-only) within the receiving component
- Used to pass configuration, data, and callback functions
- Make components reusable with different data
- Can be any JavaScript value: strings, numbers, objects, arrays, functions
- Props are accessed via `props` parameter in functional components or `this.props` in class components
- Default props can be set using `defaultProps`

**3. Interview Main Points**
- Props enable component composition and reusability
- Unidirectional data flow: parent → child only
- Never modify props directly (immutability principle)
- Props can include event handlers for child-to-parent communication
- PropTypes can validate prop types for development safety

**4. Example**
```javascript
// Parent Component
function App() {
  return <Greeting name="John" age={25} onGreet={() => alert('Hi!')} />;
}

// Child Component
function Greeting({ name, age, onGreet }) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>Age: {age}</p>
      <button onClick={onGreet}>Greet</button>
    </div>
  );
}
```

---

## **Question 12: How is state different from props?**

**1. One Line Answer**
State is mutable data managed within a component, while props are immutable data passed from parent components.

**2. Pointwise Answer**
- **State**: Internal, mutable data owned and managed by the component
- **Props**: External, immutable data received from parent component
- State changes trigger re-renders
- Props are read-only and cannot be modified by the child
- State is initialized within the component
- Props are passed from outside
- State is for dynamic, changing data
- Props are for static configuration

**3. Interview Main Points**
- State = component's memory; Props = component's arguments
- State changes are asynchronous
- Only the component owning the state can change it
- Props drilling: passing props through multiple levels
- Lift state up when multiple components need shared state
- State updates cause component re-render

**4. Example**
```javascript
// State example
function Counter() {
  const [count, setCount] = useState(0); // state
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}

// Props example
function Display({ count }) { // props
  // count cannot be modified here
  return <h1>Count: {count}</h1>;
}

function App() {
  const [count, setCount] = useState(0);
  return <Display count={count} />; // passing state as props
}
```

---

## **Question 13: Can a component have both state and props? Explain with an example.**

**1. One Line Answer**
Yes, a component can have both state (internal data) and props (data from parent), using props for initial values or configuration and state for managing changes.

**2. Pointwise Answer**
- Components commonly use both state and props together
- Props can provide initial values for state
- Props configure component behavior
- State manages internal component changes
- Props come from parent; state is managed locally
- State can be derived from props during initialization
- Updating props doesn't automatically update state

**3. Interview Main Points**
- Most real-world components use both
- Common pattern: receive props, manage local state based on them
- Be careful with initializing state from props (anti-pattern if props change)
- Use `useEffect` to sync state with prop changes if needed
- Props for "what the component should be", state for "how it changes"

**4. Example**
```javascript
function UserProfile({ userId, initialName }) { // props
  const [name, setName] = useState(initialName); // state initialized from props
  const [isEditing, setIsEditing] = useState(false); // local state
  const [savedName, setSavedName] = useState(initialName); // state
  
  const handleSave = () => {
    setSavedName(name);
    setIsEditing(false);
    // could also call a callback from props here
  };
  
  return (
    <div>
      <h2>User ID: {userId}</h2> {/* using props */}
      {isEditing ? (
        <>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{savedName}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
}

// Usage
<UserProfile userId={123} initialName="John Doe" />
```

---

## **Question 14: What are the advantages of using React over vanilla JavaScript for building UI?**

**1. One Line Answer**
React provides declarative UI, component reusability, efficient DOM updates via Virtual DOM, and a rich ecosystem with better maintainability than vanilla JavaScript.

**2. Pointwise Answer**
- **Declarative**: Describe what UI should look like, not how to build it
- **Component-based**: Reusable, modular UI pieces
- **Virtual DOM**: Efficient updates and rendering
- **Unidirectional data flow**: Predictable state management
- **JSX**: Readable syntax mixing HTML and JavaScript
- **Rich ecosystem**: Libraries, tools, and community support
- **State management**: Built-in state handling and external libraries (Redux, Context)
- **Developer experience**: Hot reloading, DevTools, better debugging
- **Cross-platform**: React Native for mobile

**3. Interview Main Points**
- Virtual DOM minimizes expensive DOM manipulations
- Component reusability reduces code duplication
- Declarative approach is easier to reason about than imperative vanilla JS
- Large community and extensive documentation
- Battle-tested by Facebook and thousands of companies
- Better for complex, dynamic UIs
- Performance optimizations built-in (memoization, lazy loading)

**4. Example**
```javascript
// Vanilla JavaScript - Imperative
const button = document.createElement('button');
button.textContent = '0';
let count = 0;
button.addEventListener('click', () => {
  count++;
  button.textContent = count;
  // Manual DOM manipulation, error-prone
});
document.body.appendChild(button);

// React - Declarative
function Counter() {
  const [count, setCount] = useState(0);
  
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
  // Just describe the UI, React handles updates
}
```

---

## **Question 15: What is unidirectional data flow in React? How is it different from two-way data binding?**

**1. One Line Answer**
Unidirectional data flow means data flows one way (parent → child via props), while two-way binding automatically syncs data between model and view in both directions.

**2. Pointwise Answer**
- **Unidirectional (React)**: Data flows from parent to child through props
- Child components cannot directly modify parent data
- Changes propagate down through props
- Events propagate up through callbacks
- **Two-way binding (Angular, Vue)**: Model and view automatically sync
- Changes in UI update model; changes in model update UI
- Unidirectional is more predictable and easier to debug
- Two-way binding can lead to unexpected side effects

**3. Interview Main Points**
- React enforces unidirectional flow for predictability
- Makes debugging easier - trace data flow in one direction
- To update parent data, child calls callback function passed as prop
- "Lifting state up" pattern when siblings need to share data
- State lives in parent, flows down to children
- Two-way binding can cause cascading updates (harder to track)
- Redux/Context API maintain unidirectional flow for global state

**4. Example**
```javascript
// Unidirectional Data Flow in React
function Parent() {
  const [value, setValue] = useState('');
  
  return (
    <div>
      <h1>Parent: {value}</h1>
      {/* Data flows down via props */}
      <Child value={value} onChange={setValue} />
    </div>
  );
}

function Child({ value, onChange }) {
  return (
    <div>
      <h2>Child: {value}</h2>
      {/* Events flow up via callbacks */}
      <input 
        value={value} 
        onChange={(e) => onChange(e.target.value)} 
      />
    </div>
  );
}

// Two-way binding (Angular-like syntax for comparison)
// <input [(ngModel)]="value">
// Changes in input automatically update 'value'
// Changes in 'value' automatically update input
// React doesn't do this automatically
```

---

### **2. React Architecture & Internal Concepts**

16. How does React render a component? Explain the rendering process.
17. What is the reconciliation process in React?
18. How does React decide whether to re-render a component?
19. What are React elements and React components?
20. What is the difference between a React element and a React component?
21. Explain the concept of “component tree” in React.
22. What are keys in React and why are they important in lists?

---

### **3. React vs Other Libraries/Frameworks**

23. How is React different from Angular?
24. How is React different from Vue?
25. Can React be used for mobile app development? How?
26. What are React Native and its differences with React.js?
27. Why is React called a “library” and not a framework?

---

### **4. Practical / Conceptual Tricky Questions**

28. Can you use React without JSX? How?
29. Explain why React components should be pure functions.
30. What is the difference between a controlled and uncontrolled component? *(intro-level)*
31. What happens if you try to modify the state directly instead of using `setState`?
32. Explain the difference between React class component lifecycle and functional component hooks. *(intro-level)*
33. Can a functional component have state? If yes, how?
34. How does React handle events differently from HTML/JS?
35. Can multiple components share the same state? If yes, how?

---

### **5. Ecosystem & Tooling**

36. What is Create React App (CRA)?
37. What are the advantages of using CRA over manual setup?
38. What are alternatives to CRA for setting up a React project?
39. What are some popular code editors or IDE extensions used for React development?
40. What is the difference between React DevTools and browser DevTools?
41. How do you debug a React application?

---

### **6. Advanced / Conceptual Edge Questions**

42. What is reconciliation in React and how does virtual DOM help in it?
43. Explain React Fiber architecture.
44. Why does React use one-way data binding instead of two-way binding?
45. How does React optimize re-rendering?
46. Can you explain React’s rendering behavior when props change vs when state changes?
47. What are pure components in React? *(intro-level overlap)*
48. What are higher-order components (HOC)? *(intro-level mention)*
49. What are common pitfalls when starting with React?

--------