## **Global Objects in Node.js**

In Node.js, **global objects** are available in all modules and do not require importing. These objects provide functionalities for interacting with the system, handling timers, and managing processes.

---

### **1. `global`**

The `global` object is the root object in Node.js (similar to `window` in the browser). Any variable or function attached to `global` is accessible throughout the application.

#### **Example:**

```js
global.appName = "My Node App";
console.log(global.appName); // Output: My Node App
```

However, it is **not recommended** to define global variables, as it can cause unexpected behavior.

---

### **2. `console`**

The `console` object provides methods for printing messages to the console.

#### **Example:**

```js
console.log("Hello, World!"); // Prints message
console.warn("Warning!"); // Prints warning
console.error("Error!"); // Prints error
console.table([
	{ name: "Alice", age: 25 },
	{ name: "Bob", age: 30 },
]); // Tabular output
```

---

### **3. `process`**

The `process` object provides information about the current Node.js process.

#### **Example:**

```js
console.log(process.pid); // Get Process ID
console.log(process.cwd()); // Get Current Working Directory
console.log(process.env.NODE_ENV); // Access Environment Variables
```

#### **Useful Methods:**

| Method           | Description                           |
| ---------------- | ------------------------------------- |
| `process.exit()` | Terminates the Node.js process        |
| `process.cwd()`  | Returns the current working directory |
| `process.env`    | Access environment variables          |
| `process.argv`   | Returns command-line arguments        |

#### **Example: Handling Signals**

```js
process.on("exit", (code) => {
	console.log(`Process exited with code: ${code}`);
});
```

---

### **4. `setTimeout()`**

Executes a function after a specified delay.

#### **Example:**

```js
setTimeout(() => {
	console.log("Hello after 3 seconds");
}, 3000);
```

---

### **5. `setInterval()`**

Executes a function repeatedly at specified intervals.

#### **Example:**

```js
setInterval(() => {
	console.log("This message appears every 2 seconds");
}, 2000);
```

---

### **6. `setImmediate()`**

Executes a function immediately after I/O events are processed.

#### **Example:**

```js
setImmediate(() => {
	console.log("Executed immediately after the current event loop cycle");
});
```

---

### **7. `clearTimeout()` & `clearInterval()`**

Used to cancel timers.

#### **Example:**

```js
let timer = setTimeout(() => {
	console.log("This will not run");
}, 5000);

clearTimeout(timer); // Cancels the timeout
```

```js
let interval = setInterval(() => {
	console.log("This will stop after 5 seconds");
}, 1000);

setTimeout(() => {
	clearInterval(interval); // Stops the interval
}, 5000);
```

---

### **8. `__dirname`**

Returns the **absolute path** of the directory containing the current script.

#### **Example:**

```js
console.log(__dirname); // Outputs the directory path
```

---

### **9. `__filename`**

Returns the **absolute path** of the current script file.

#### **Example:**

```js
console.log(__filename); // Outputs the file path
```

---

### **10. `require()`**

Used to import modules.

#### **Example:**

```js
const fs = require("fs"); // Import the File System module
console.log(fs); // Prints available methods in fs
```

---

### **11. `module`**

Represents the current module and contains metadata.

#### **Example:**

```js
console.log(module); // Displays module information
```

---

### **12. `exports`**

Used to export functions or variables from a module.

#### **Example:**

```js
// myModule.js
module.exports = {
	name: "Alice",
	greet: function () {
		return "Hello!";
	},
};

// main.js
const myModule = require("./myModule");
console.log(myModule.name); // Alice
console.log(myModule.greet()); // Hello!
```

---

## **Summary Table**

| Global Object     | Description                                       |
| ----------------- | ------------------------------------------------- |
| `global`          | The root object in Node.js                        |
| `console`         | Logs messages, warnings, and errors               |
| `process`         | Provides process-related information              |
| `setTimeout()`    | Runs a function after a delay                     |
| `setInterval()`   | Runs a function repeatedly at intervals           |
| `setImmediate()`  | Executes a function immediately after I/O events  |
| `clearTimeout()`  | Cancels a timeout                                 |
| `clearInterval()` | Cancels an interval                               |
| `__dirname`       | Path of the directory containing the current file |
| `__filename`      | Path of the current file                          |
| `require()`       | Imports modules                                   |
| `module`          | Provides information about the current module     |
| `exports`         | Exports functions or variables                    |

---

## **Conclusion**

- **Global objects** help interact with the Node.js runtime.
- **`console`**, **`process`**, and **timers** (`setTimeout`, `setInterval`) are frequently used.
- **Avoid using `global` variables** to prevent unintended behavior.

Would you like a **practical Node.js project** that uses these global objects? 🚀
