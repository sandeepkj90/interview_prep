<html>
  <head>
    <style>
      body {
        font-size: 20px;
      }
    </style>
  </head>
</html>

## Understanding `useState` in React.js (Basic to Advanced)

React’s `useState` hook is fundamental for managing component state in functional components. It allows you to store, update, and manage local component states effectively.

---

## 1. **Basic Usage of `useState`**

`useState` is a React Hook that allows functional components to have state variables.

### **Syntax:**

```jsx
const [state, setState] = useState(initialValue);
```

- `state` → Current state value.
- `setState` → Function to update the state.
- `initialValue` → Initial state value.

### **Example: Counter App**

```jsx
import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
		</div>
	);
};

export default Counter;
```

#### **Explanation**

- We initialize `count` to `0` using `useState(0)`.
- `setCount` updates `count` when the buttons are clicked.

---

## 2. **Updating State Correctly**

### **Updating State Based on Previous State**

If the new state depends on the previous state, use the function form:

```jsx
setCount((prevCount) => prevCount + 1);
```

### **Example: Using Previous State Safely**

```jsx
<button onClick={() => setCount((prevCount) => prevCount + 1)}>
	Increment
</button>
```

This ensures that `setCount` always uses the latest state, avoiding potential race conditions.

---

## 3. **Using Objects in `useState`**

### **Example: Managing Object State**

```jsx
import React, { useState } from "react";

const UserProfile = () => {
	const [user, setUser] = useState({ name: "John", age: 25 });

	return (
		<div>
			<h2>Name: {user.name}</h2>
			<h2>Age: {user.age}</h2>
			<button onClick={() => setUser({ ...user, age: user.age + 1 })}>
				Increase Age
			</button>
		</div>
	);
};

export default UserProfile;
```

#### **Explanation**

- The `user` object contains `name` and `age`.
- `setUser({ ...user, age: user.age + 1 })` updates the `age` while preserving other properties.

**⚠️ Common Mistake:**  
Directly updating state like `setUser({ age: user.age + 1 })` **removes** the `name` property.

---

## 4. **Using Arrays in `useState`**

### **Example: Managing a List of Items**

```jsx
import React, { useState } from "react";

const TodoList = () => {
	const [tasks, setTasks] = useState(["Task 1", "Task 2"]);

	const addTask = () => {
		setTasks([...tasks, `Task ${tasks.length + 1}`]);
	};

	return (
		<div>
			<ul>
				{tasks.map((task, index) => (
					<li key={index}>{task}</li>
				))}
			</ul>
			<button onClick={addTask}>Add Task</button>
		</div>
	);
};

export default TodoList;
```

#### **Explanation**

- The `tasks` array holds task items.
- `setTasks([...tasks, newTask])` adds a new task while keeping existing ones.

---

## 5. **Handling State with Forms**

### **Example: Controlled Input**

```jsx
import React, { useState } from "react";

const FormExample = () => {
	const [name, setName] = useState("");

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<p>Your Name: {name}</p>
		</div>
	);
};

export default FormExample;
```

#### **Explanation**

- The input field updates `name` state as the user types.

---

## 6. **Multiple State Variables**

You can use multiple `useState` hooks in the same component.

### **Example: Managing Multiple States**

```jsx
const UserInfo = () => {
	const [name, setName] = useState("John");
	const [age, setAge] = useState(25);

	return (
		<div>
			<h2>
				{name}, {age} years old
			</h2>
			<button onClick={() => setAge(age + 1)}>Increase Age</button>
		</div>
	);
};
```

Each `useState` manages a different state variable.

---

## 7. **Lazy Initialization in `useState`**

If the initial state is expensive to compute, use a function:

```jsx
const [count, setCount] = useState(() => {
	console.log("Initializing state...");
	return 0;
});
```

The function runs only once on initial render.

---

## 8. **Using `useState` with Async Operations**

State updates in React are asynchronous.

### **Incorrect Example**

```jsx
const handleClick = () => {
	setCount(count + 1);
	console.log(count); // Might log the old state
};
```

### **Correct Example**

```jsx
const handleClick = () => {
	setCount((prevCount) => prevCount + 1);
	console.log(count); // Still logs old state due to async update
};
```

Use `useEffect` if you need to react to state updates.

---

## 9. **Clearing or Resetting State**

To reset state to its initial value:

```jsx
const reset = () => {
	setCount(0);
};
```

This is useful in forms:

```jsx
const resetForm = () => {
	setUser({ name: "", age: 0 });
};
```

---

## 10. **Performance Optimization: Avoiding Unnecessary Renders**

React re-renders a component whenever `useState` updates. If the new state is the same as the old state, React skips rendering.

### **Example**

```jsx
setCount(count); // No re-render if count hasn't changed
```

**Optimized Example**

```jsx
setCount((prevCount) => (prevCount === 10 ? prevCount : prevCount + 1));
```

---

## Summary

| Concept             | Example                                     |
| ------------------- | ------------------------------------------- |
| Basic State         | `const [count, setCount] = useState(0);`    |
| Object State        | `setUser({ ...user, age: user.age + 1 });`  |
| Array State         | `setTasks([...tasks, "New Task"]);`         |
| Controlled Inputs   | `onChange={(e) => setName(e.target.value)}` |
| Multiple States     | `const [name, setName] = useState("");`     |
| Lazy Initialization | `useState(() => computeInitialValue());`    |
| Functional Updates  | `setCount(prev => prev + 1);`               |
| Resetting State     | `setCount(0);`                              |

---

## Conclusion

- `useState` is essential for managing local component state in React.
- Always use functional updates when state depends on the previous state.
- Preserve object and array states using the spread operator (`...`).
- Use `useState` effectively with forms, lists, and asynchronous logic.

Would you like an advanced real-world example, such as managing a complex form with validation? 🚀

### How Does a `useState` Variable Retain Data Between Renders in React?

When a React component re-renders, its function body runs again from top to bottom. However, `useState` variables **persist** across re-renders instead of resetting to their initial values. This happens because React **remembers** state variables between renders using the **React Virtual DOM and React Fiber architecture**.

---

## **1. Understanding Function Component Re-Renders**

A React functional component is essentially a function that:

1. Runs when the component mounts (initial render).
2. Runs again when state or props change (re-render).
3. Returns JSX (UI elements).

### Example (Without `useState`):

```jsx
const Counter = () => {
	let count = 0;

	const increment = () => {
		count += 1;
		console.log("Updated Count:", count);
	};

	return <button onClick={increment}>Click Me</button>;
};

export default Counter;
```

#### **Issue**

- Each time `increment` is called, `count` is updated **but resets to `0`** on re-render.
- The variable does **not persist** across renders.

---

## **2. How `useState` Retains Data**

React internally **stores state variables separately from the component function**.

### Example (With `useState`):

```jsx
import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prev) => prev + 1);
		console.log("Updated Count:", count);
	};

	return <button onClick={increment}>Click Me</button>;
};

export default Counter;
```

#### **Why `count` Persists Across Renders?**

1. When `useState(0)` is called for the first time, React **stores `count` separately** in a special memory structure linked to the component.
2. On a re-render:
   - React does **not** reinitialize `useState(0)`.
   - It **retrieves the stored value** from memory.
   - `count` retains its updated value instead of resetting.

---

## **3. How React Internally Manages `useState`**

React maintains state across renders using an **internal state array** associated with each component.

### **Simplified Internal Working**

- React maintains an **array of state values** for each component.
- When `useState()` is called:
  - It assigns a **slot** in the array.
  - Returns the stored state from the correct slot.
  - Updates this slot when `setState` is called.

#### **Example Breakdown**

```jsx
const Counter = () => {
	const [count, setCount] = useState(0);
	const [message, setMessage] = useState("Hello");

	return <button onClick={() => setCount(count + 1)}>Click</button>;
};
```

Internally, React maintains:

```
Component State Storage:
[
  [0, setCount],       // count state at index 0
  ["Hello", setMessage] // message state at index 1
]
```

Each time the component re-renders, React ensures it retrieves the **correct** state from this array instead of reinitializing it.

---

## **4. What Happens on Re-Render?**

When `setState` is called:

1. React schedules a **re-render** of the component.
2. The component **re-executes** as a function.
3. `useState` retrieves the **previous** state value from React’s internal memory.
4. The UI updates with the new state.

### **Example: Step-by-Step Execution**

```jsx
const Counter = () => {
	const [count, setCount] = useState(0);

	console.log("Component Rendered: Count =", count);

	return <button onClick={() => setCount(count + 1)}>Increment</button>;
};
```

#### **Console Output for Each Click**

```
Component Rendered: Count = 0  // Initial Render
Component Rendered: Count = 1  // After 1st Click
Component Rendered: Count = 2  // After 2nd Click
```

Even though the function **re-executes**, `count` is remembered between renders.

---

## **5. Key Takeaways**

### ✅ **Why Does `useState` Persist Across Renders?**

- React **remembers state separately** from the function execution.
- `useState` stores state **outside** the function’s execution scope.
- React maintains a **linked list of state hooks** internally (React Fiber).
- On re-render, React **retrieves the correct state value** rather than reinitializing it.

### ❌ **Why Does a Normal Variable Reset?**

- Variables declared inside the function **lose their values** when the function re-executes.
- They exist only during the function’s execution, and React does **not** store them.

---

## **6. Common Myths**

❌ **"useState updates immediately."**  
✅ No, `useState` updates **asynchronously** and schedules a re-render.

❌ **"Calling `useState` again inside the component resets the state."**  
✅ No, React **remembers state** across renders and does not reinitialize.

❌ **"State is stored inside the component function."**  
✅ No, state is stored **outside the function** in React’s internal structures.

---

## **7. Advanced Concept: State Persistence Across Component Unmount**

When a component **unmounts**, its state is removed. However, if the component **remounts**, it starts fresh.

### **Example**

```jsx
const App = () => {
	const [show, setShow] = useState(true);

	return (
		<div>
			<button onClick={() => setShow(!show)}>Toggle Counter</button>
			{show && <Counter />}
		</div>
	);
};

const Counter = () => {
	const [count, setCount] = useState(0);

	return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
```

#### **What Happens?**

- Clicking **Toggle Counter** removes `Counter` → state is lost.
- Clicking **Toggle Counter** again remounts `Counter` → state resets to `0`.

---

## **Final Summary**

| Concept             | Explanation                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| Function re-renders | Every time state changes, the function **re-executes**.                  |
| Why state persists  | `useState` stores values **outside** the function scope.                 |
| React internals     | Uses an **array of state slots** and retrieves correct values.           |
| When state resets   | Only if the component **unmounts** and remounts.                         |
| Normal variables    | Lost on re-render because they exist **only within function execution**. |

---

## **Want to Go Deeper?**

Would you like an example demonstrating how **React Fiber** manages state internally, or how `useRef` differs from `useState` in retaining values across renders? 🚀

### **Deep Dive: How React Fiber Manages `useState` & How `useRef` Differs**

Now that we understand how `useState` persists across renders, let’s explore:

1. **How React Fiber internally manages state**
2. **Why `useRef` retains values without causing re-renders**
3. **Differences between `useState` and `useRef`**

---

## **1. React Fiber & How It Manages `useState`**

React uses **Fiber Reconciliation**, an advanced algorithm that keeps track of component updates efficiently. Each component has a **Fiber Node**, which stores information about the component, including its **state**.

### **How Fiber Works with `useState`**

- When a component is first rendered, React **creates a Fiber Node** and assigns it an internal **state queue** (linked list).
- When `setState` is called, the **new state is added to this queue**.
- During reconciliation, React **picks the latest state from the queue** and updates the component.

### **Visualizing Fiber's State Storage**

#### **Example Component**

```jsx
const Counter = () => {
	const [count, setCount] = useState(0);
	return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
};
```

#### **How React Fiber Manages This Internally**

```
Fiber Node for Counter Component
---------------------------------
|   state: 0  (initial)        |
|   stateQueue: [] (empty)     |
---------------------------------

1st Click: setCount(count + 1)
---------------------------------
|   state: 1  (updated)        |
|   stateQueue: [1]            |
---------------------------------

2nd Click: setCount(count + 1)
---------------------------------
|   state: 2  (updated)        |
|   stateQueue: [2]            |
---------------------------------
```

**Key Takeaways:**

- `setState` updates are stored in a queue and applied in order.
- React keeps track of the state **outside the function execution** in the Fiber Tree.
- This prevents state from resetting when the function re-executes.

---

## **2. How `useRef` Retains Values Without Re-Renders**

Unlike `useState`, which causes re-renders when updated, `useRef` **persists values between renders without causing re-renders**.

### **Syntax**

```jsx
const ref = useRef(initialValue);
```

- `ref.current` holds the value, which persists across renders.
- Updating `ref.current` **does not trigger a re-render**.

### **Example: Comparing `useState` vs. `useRef`**

```jsx
import React, { useState, useRef } from "react";

const Example = () => {
	const [count, setCount] = useState(0);
	const renderCount = useRef(0);

	renderCount.current += 1;

	return (
		<div>
			<h2>Count: {count}</h2>
			<h3>Component Re-renders: {renderCount.current}</h3>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default Example;
```

### **How This Works**

1. **`useState` causes re-renders**

   - Clicking **Increment** updates `count`, triggering a re-render.

2. **`useRef` persists but doesn’t trigger re-renders**
   - `renderCount.current` increments **but does not cause a re-render**.
   - This is why `renderCount` always reflects the actual number of renders.

---

## **3. Key Differences Between `useState` and `useRef`**

| Feature                           | `useState`                      | `useRef`                                     |
| --------------------------------- | ------------------------------- | -------------------------------------------- |
| **Triggers Re-renders**           | ✅ Yes (on update)              | ❌ No (persists value silently)              |
| **Stores Values Between Renders** | ✅ Yes                          | ✅ Yes                                       |
| **Causes Component Re-render?**   | ✅ Yes                          | ❌ No                                        |
| **When to Use?**                  | When UI should update on change | When value should persist without re-renders |

### **When to Use `useRef` Instead of `useState`?**

1. **Tracking Previous State Without Re-renders**

   ```jsx
   const prevCount = useRef(count);
   useEffect(() => {
   	prevCount.current = count;
   }, [count]);
   ```

   - This saves the **previous count value** while avoiding unnecessary re-renders.

2. **Handling DOM Elements Without State**
   ```jsx
   const inputRef = useRef();
   <input ref={inputRef} />;
   ```
   - `useRef` is perfect for **accessing DOM elements** without causing re-renders.

---

## **Conclusion**

- React **stores state outside component functions** via **Fiber’s state queue**.
- `useState` persists across renders **by storing values in Fiber Nodes**.
- `useRef` retains values **without triggering re-renders** (ideal for tracking non-UI data).

---

## **Would You Like to See a Real-World Example Using `useRef` and `useState` Together? 🚀**

### **Real-World Example: Using `useState` and `useRef` Together** 🚀

In this example, we’ll create a **Stopwatch App** that demonstrates:  
✅ Using `useState` to **update the UI** dynamically.  
✅ Using `useRef` to **persist values without causing re-renders** (e.g., tracking elapsed time).

---

## **📌 Goal: Build a Stopwatch with Start, Pause, and Reset**

### **Features**

- `useState` → Updates displayed time.
- `useRef` → Stores the interval ID and elapsed time **without re-rendering**.

---

### **📝 Stopwatch Code**

```jsx
import React, { useState, useRef } from "react";

const Stopwatch = () => {
	const [time, setTime] = useState(0); // Displayed time (causes re-renders)
	const intervalRef = useRef(null); // Stores interval ID (persists without re-renders)
	const startTimeRef = useRef(0); // Stores starting timestamp

	const startTimer = () => {
		if (!intervalRef.current) {
			startTimeRef.current = Date.now() - time; // Adjust start time for resume
			intervalRef.current = setInterval(() => {
				setTime(Date.now() - startTimeRef.current); // Update displayed time
			}, 100);
		}
	};

	const pauseTimer = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null; // Reset interval reference
	};

	const resetTimer = () => {
		clearInterval(intervalRef.current);
		intervalRef.current = null;
		setTime(0); // Reset displayed time
		startTimeRef.current = 0; // Reset stored timestamp
	};

	return (
		<div style={{ textAlign: "center", fontSize: "24px" }}>
			<h1>Stopwatch</h1>
			<h2>{(time / 1000).toFixed(1)}s</h2>
			<button onClick={startTimer}>Start</button>
			<button onClick={pauseTimer}>Pause</button>
			<button onClick={resetTimer}>Reset</button>
		</div>
	);
};

export default Stopwatch;
```

---

### **🔍 How It Works**

| Feature                            | `useState`                            | `useRef`                                |
| ---------------------------------- | ------------------------------------- | --------------------------------------- |
| **Updates the UI**                 | ✅ `setTime()` triggers a re-render   | ❌ `intervalRef` persists silently      |
| **Stores the interval ID**         | ❌ Would cause unnecessary re-renders | ✅ `useRef` prevents extra re-renders   |
| **Keeps elapsed time when paused** | ✅ Time updates dynamically           | ✅ `startTimeRef` stores last timestamp |

---

### **✨ Key Benefits of Using `useState` & `useRef` Together**

✅ **Smooth UI Updates:** `useState` ensures the displayed time updates when needed.  
✅ **No Unnecessary Re-renders:** `useRef` prevents infinite re-renders by storing the interval.  
✅ **Accurate Timekeeping:** By tracking `startTimeRef`, we correctly resume timing after pausing.

---

## **🔥 Next Steps: Would You Like to Add Lap Timing or Save Times? 🚀**

### **What Does "React Re-renders a Component" Mean?**

When we say **"React re-renders a component"**, it means:

1. The component **function executes again**.
2. React **recalculates JSX** and updates the **Virtual DOM**.
3. React **compares the new Virtual DOM with the previous one (diffing algorithm)**.
4. React updates **only the changed parts** in the real DOM (efficient reconciliation).

---

### **🔍 Example: Re-rendering in Action**

```jsx
import React, { useState } from "react";

const Counter = () => {
	console.log("Component Re-rendered!"); // Logs every time the component renders

	const [count, setCount] = useState(0);

	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
};

export default Counter;
```

### **🛠 What Happens When You Click "Increment"?**

1. `setCount(count + 1)` updates **state**.
2. React **detects state change** → **triggers re-render**.
3. **The entire function re-executes**, logging `"Component Re-rendered!"`.
4. React **updates Virtual DOM** with the new `count` value.
5. React **compares old vs. new Virtual DOM** (diffing).
6. React **updates only `<h2>Count: X</h2>`** in the Real DOM (efficient).

---

### **🔄 How Does React Optimize Re-renders?**

✅ **Virtual DOM:** Prevents unnecessary real DOM updates.  
✅ **Diffing Algorithm:** Only updates changed parts of the UI.  
✅ **Reconciliation:** Ensures fast UI updates without redrawing everything.

---

### **🚀 Next Steps**

Would you like to explore **why unnecessary re-renders happen** and **how to prevent them using `React.memo`, `useMemo`, and `useCallback`?** 😊

### **How Does `useMemo` Help with Re-renders?**

`useMemo` **optimizes performance by memoizing expensive calculations**, so they **don’t recompute on every re-render** unless dependencies change.

---

### **🔍 Problem: Unnecessary Expensive Calculations**

Consider a **slow function** that runs every time the component re-renders:

```jsx
import React, { useState } from "react";

const slowFunction = (num) => {
	console.log("Running slow function...");
	for (let i = 0; i < 1e9; i++) {} // Simulating a heavy computation
	return num * 2;
};

const App = () => {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState("light");

	const result = slowFunction(count); // 🛑 Runs every re-render, even when only theme changes!

	return (
		<div>
			<h2>Count: {count}</h2>
			<h3>Result: {result}</h3>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>
		</div>
	);
};

export default App;
```

### **🚨 Problem Here**

- Clicking **"Toggle Theme"** should NOT recompute `slowFunction`, but it does!
- `slowFunction(count)` **runs on every re-render** (even when only `theme` changes).

---

### **✅ Solution: Use `useMemo` to Memoize the Expensive Computation**

```jsx
import React, { useState, useMemo } from "react";

const slowFunction = (num) => {
	console.log("Running slow function...");
	for (let i = 0; i < 1e9; i++) {} // Simulating a heavy computation
	return num * 2;
};

const App = () => {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState("light");

	// ✅ Memoize result, only recompute if `count` changes
	const result = useMemo(() => slowFunction(count), [count]);

	return (
		<div>
			<h2>Count: {count}</h2>
			<h3>Result: {result}</h3>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>
		</div>
	);
};

export default App;
```

### **🛠 How `useMemo` Fixes It**

- `useMemo(() => slowFunction(count), [count])`
  - Runs **only when `count` changes**.
  - Does **not re-run** when `theme` changes.
- Now, **"Toggle Theme"** does NOT trigger slow computations.

---

### **📌 When to Use `useMemo`**

✅ **Expensive computations** (e.g., filtering, sorting, calculations).  
✅ **Prevent unnecessary recalculations** when only unrelated state changes.

🚫 **Do NOT use it for simple values** (it adds overhead).

---

## **🚀 Next Steps**

Would you like to explore **how `useCallback` prevents unnecessary function re-creations in child components?** 😊

### **How Does `useCallback` Prevent Unnecessary Re-renders?**

`useCallback` **memoizes functions**, preventing them from being re-created on every render. This is useful when passing functions as props to child components.

---

### **🔍 Problem: Function Re-Creation Causes Unnecessary Child Re-renders**

```jsx
import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const Parent = () => {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState("light");

	const handleClick = () => {
		console.log("Button clicked!");
	};

	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>
			<ChildComponent onClick={handleClick} />
		</div>
	);
};

export default Parent;
```

```jsx
import React from "react";

const ChildComponent = ({ onClick }) => {
	console.log("ChildComponent re-rendered!");

	return <button onClick={onClick}>Click Me</button>;
};

export default React.memo(ChildComponent);
```

### **🚨 Problem Here**

- `handleClick` is re-created every render.
- **Even if only `theme` changes,** `ChildComponent` **still re-renders**.
- **Why?** Because **function props change on every render** unless memoized.

---

### **✅ Solution: Use `useCallback` to Prevent Function Re-Creation**

```jsx
import React, { useState, useCallback } from "react";
import ChildComponent from "./ChildComponent";

const Parent = () => {
	const [count, setCount] = useState(0);
	const [theme, setTheme] = useState("light");

	// ✅ Memoize function, so it's the same across renders (unless dependencies change)
	const handleClick = useCallback(() => {
		console.log("Button clicked!");
	}, []); // No dependencies → stays the same across renders

	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
				Toggle Theme
			</button>
			<ChildComponent onClick={handleClick} />
		</div>
	);
};

export default Parent;
```

---

### **🔄 How `useCallback` Fixes It**

✅ `useCallback(() => {...}, [])` **returns the same function reference** between renders.  
✅ `ChildComponent` **doesn’t re-render unless necessary** (React.memo optimizes it).

---

### **📌 When to Use `useCallback`**

✅ **Passing functions to child components** (prevents unnecessary re-renders).  
✅ **Optimizing event handlers in performance-critical apps**.

🚫 **Do NOT use it everywhere**—only where function re-creation is costly.

---

## **🚀 Next Steps**

Would you like to see **a real-world example of `useMemo` + `useCallback` optimizing a search filter or API call?** 😊

### **Real-World Example: Optimizing a Search Filter with `useMemo` & `useCallback`**

In this example, we build a **searchable user list** where:

1. **`useMemo`** prevents **unnecessary filtering** when the list doesn't change.
2. **`useCallback`** prevents **unnecessary re-creation** of the event handler.

---

### **🚨 Problem: Unoptimized Filtering Causes Lag**

Without optimizations, every keystroke **re-filters the entire list**, even if the list hasn't changed.

```jsx
import React, { useState } from "react";

const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

const App = () => {
	const [search, setSearch] = useState("");

	const filteredUsers = users.filter((user) =>
		user.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div>
			<input
				type="text"
				placeholder="Search users..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<ul>
				{filteredUsers.map((user, index) => (
					<li key={index}>{user}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
```

### **🚨 Issues in the Code Above**

1. **Every keystroke re-runs `filter()`**, even when the list hasn't changed.
2. **Filtering should happen only if `users` or `search` changes.**

---

## **✅ Optimized with `useMemo` & `useCallback`**

```jsx
import React, { useState, useMemo, useCallback } from "react";

const users = ["Alice", "Bob", "Charlie", "David", "Eve"];

const App = () => {
	const [search, setSearch] = useState("");

	// ✅ Memoize filtered users → Runs only if `search` changes
	const filteredUsers = useMemo(() => {
		console.log("Filtering users...");
		return users.filter((user) =>
			user.toLowerCase().includes(search.toLowerCase()),
		);
	}, [search]); // Only re-run if `search` changes

	// ✅ Memoize event handler → Prevents re-creation on every render
	const handleSearch = useCallback((e) => {
		setSearch(e.target.value);
	}, []);

	return (
		<div>
			<input
				type="text"
				placeholder="Search users..."
				value={search}
				onChange={handleSearch} // Using memoized handler
			/>
			<ul>
				{filteredUsers.map((user, index) => (
					<li key={index}>{user}</li>
				))}
			</ul>
		</div>
	);
};

export default App;
```

---

## **🔍 How This Optimization Helps**

### **`useMemo` prevents unnecessary filtering**

✅ `users.filter(...)` **only runs if `search` changes**.  
✅ **Prevents expensive calculations on every render**.

### **`useCallback` prevents unnecessary re-creation**

✅ `handleSearch` function **does not re-create** on every render.  
✅ **Better performance when passing to child components**.

---

## **🚀 Next Steps**

Would you like to see **how to optimize API requests using `useMemo` + `useCallback` + `useEffect`?** 😊

### **Real-World Example: Optimizing API Requests with `useMemo`, `useCallback`, and `useEffect`**

In this example, we build an app where:

- We fetch data from an API (like a list of users).
- We optimize the API request with `useMemo` and `useCallback` so that:
  - **`useMemo`** prevents recalculating data based on dependencies.
  - **`useCallback`** prevents unnecessary recreation of functions, especially event handlers.
  - **`useEffect`** ensures the data fetch only happens when needed.

---

### **🚨 Problem: Unoptimized API Fetching**

In this case, each time the `search` or `page` changes, we may be unnecessarily triggering the API request or making inefficient requests.

```jsx
import React, { useState, useEffect } from "react";

const App = () => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchUsers = async () => {
		setLoading(true);
		const response = await fetch(
			`https://api.example.com/users?search=${search}&page=${page}`,
		);
		const data = await response.json();
		setUsers(data);
		setLoading(false);
	};

	useEffect(() => {
		fetchUsers();
	}, [search, page]); // Re-fetch when `search` or `page` changes

	const handleSearchChange = (e) => setSearch(e.target.value);
	const handlePageChange = (pageNumber) => setPage(pageNumber);

	return (
		<div>
			<input
				type="text"
				placeholder="Search users..."
				value={search}
				onChange={handleSearchChange}
			/>
			<button onClick={() => handlePageChange(page - 1)}>Previous</button>
			<button onClick={() => handlePageChange(page + 1)}>Next</button>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default App;
```

### **🚨 Issues in the Code Above**

1. **API request happens on every render**:
   - If `search` or `page` changes, it triggers a re-fetch.
   - The `fetchUsers` function is **recreated every render** and called unnecessarily.

---

## **✅ Optimized with `useMemo`, `useCallback`, and `useEffect`**

```jsx
import React, { useState, useEffect, useMemo, useCallback } from "react";

const App = () => {
	const [search, setSearch] = useState("");
	const [page, setPage] = useState(1);
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);

	// ✅ Memoize the API URL so it doesn't get recomputed on every render
	const apiUrl = useMemo(() => {
		return `https://api.example.com/users?search=${search}&page=${page}`;
	}, [search, page]);

	// ✅ Memoize the fetch function to avoid re-creating it on every render
	const fetchUsers = useCallback(async () => {
		setLoading(true);
		const response = await fetch(apiUrl);
		const data = await response.json();
		setUsers(data);
		setLoading(false);
	}, [apiUrl]); // Re-run if `apiUrl` changes

	// ✅ Trigger the effect to fetch users when `apiUrl` changes
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]); // Only re-run when `fetchUsers` changes

	const handleSearchChange = useCallback((e) => setSearch(e.target.value), []);
	const handlePageChange = useCallback((pageNumber) => setPage(pageNumber), []);

	return (
		<div>
			<input
				type="text"
				placeholder="Search users..."
				value={search}
				onChange={handleSearchChange}
			/>
			<button onClick={() => handlePageChange(page - 1)}>Previous</button>
			<button onClick={() => handlePageChange(page + 1)}>Next</button>
			{loading ? (
				<p>Loading...</p>
			) : (
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default App;
```

---

### **🔍 How `useMemo`, `useCallback`, and `useEffect` Help Here**

1. **`useMemo` (for API URL)**:

   - Memoizes the **API URL** so it's only recalculated when `search` or `page` changes.
   - Prevents unnecessary re-calculation of the API URL on every render, optimizing performance.

2. **`useCallback` (for `fetchUsers`, `handleSearchChange`, and `handlePageChange`)**:

   - Memoizes the `fetchUsers` function to prevent it from being recreated on each render, which can lead to unnecessary re-executions in `useEffect`.
   - Memoizes the event handlers (`handleSearchChange`, `handlePageChange`) so they don’t get recreated on each render and cause unnecessary re-renders of child components.

3. **`useEffect` (to Trigger API Fetch)**:
   - **Runs only when `fetchUsers` changes**, so the data fetch only occurs when necessary (e.g., when search or page changes).
   - **Prevents redundant API requests** if no changes to the dependencies (e.g., search or page) occur.

---

### **📌 Why This Optimization Matters**

- **API calls** are **expensive**—optimizing them prevents unnecessary calls.
- **Memoizing functions** and **memoizing URLs** prevents **re-creation** and **re-fetching** of the same data.
- **Efficient data fetching** makes the app **faster**, especially when dealing with large datasets or external API calls.

---

## **🚀 Next Steps**

Would you like to dive into **how to handle pagination** and **lazy loading** to further optimize performance in large datasets or API-driven apps? 😊
