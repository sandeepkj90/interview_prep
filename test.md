## **Question 10: Explain the difference between functional and class components**

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