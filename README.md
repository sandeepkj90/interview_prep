# **Default (Built-in) Modules in Node.js**

Node.js comes with a set of **built-in modules** that provide core functionalities without requiring additional installation. These modules are optimized for performance and are essential for various aspects of development, such as **file handling, networking, cryptography, and more**.

---

## **1. List of Default Node.js Modules**

Here is a list of the **most commonly used built-in modules** in Node.js:

### **Core Modules**

| Module          | Description                                      |
| --------------- | ------------------------------------------------ |
| `fs`            | File System operations (reading/writing files)   |
| `path`          | Work with file paths                             |
| `os`            | Get system-related information (CPU, memory)     |
| `http`          | Create HTTP server and client                    |
| `https`         | Handle secure HTTP requests (SSL/TLS)            |
| `url`           | Parse and format URLs                            |
| `querystring`   | Parse and stringify URL query parameters         |
| `events`        | Event-driven programming (EventEmitter)          |
| `util`          | Utility functions for debugging and formatting   |
| `crypto`        | Secure cryptographic operations                  |
| `stream`        | Handle streaming data                            |
| `buffer`        | Work with binary data                            |
| `zlib`          | Compress and decompress files                    |
| `dns`           | Perform domain name resolution                   |
| `net`           | Create TCP and UDP servers/clients               |
| `child_process` | Run system commands and scripts                  |
| `cluster`       | Handle multi-threading in Node.js                |
| `timers`        | Schedule execution (`setTimeout`, `setInterval`) |

---

## **2. Explanation & Examples**

Now, let's go through some of the **most commonly used built-in modules** with examples.

---

### **1. `fs` (File System) Module**

The **`fs` module** allows interaction with the file system, such as reading and writing files.

#### **Example: Reading a File**

```js
const fs = require("fs");

fs.readFile("example.txt", "utf8", (err, data) => {
	if (err) throw err;
	console.log(data);
});
```

**Explanation:**

- `fs.readFile()` reads a file asynchronously.
- If successful, it prints the file content; otherwise, it throws an error.

#### **Example: Writing to a File**

```js
fs.writeFile("output.txt", "Hello, Node.js!", (err) => {
	if (err) throw err;
	console.log("File written successfully");
});
```

---

### **2. `path` (Path Handling) Module**

The **`path` module** helps work with file and directory paths.

#### **Example: Getting File Extension**

```js
const path = require("path");

const filePath = "/user/local/example.txt";

console.log(path.basename(filePath)); // example.txt
console.log(path.extname(filePath)); // .txt
console.log(path.dirname(filePath)); // /user/local
console.log(path.join("/user", "local", "file.txt")); // /user/local/file.txt
```

---

### **3. `os` (Operating System) Module**

The **`os` module** provides system-related information like CPU, memory, and network details.

#### **Example: Get System Information**

```js
const os = require("os");

console.log("OS Platform:", os.platform()); // e.g., win32, linux, darwin
console.log("OS CPU Architecture:", os.arch()); // e.g., x64, arm
console.log("Total Memory:", os.totalmem() / 1024 / 1024, "MB");
console.log("Free Memory:", os.freemem() / 1024 / 1024, "MB");
console.log("CPU Cores:", os.cpus().length);
```

---

### **4. `http` (Create a Simple HTTP Server)**

The **`http` module** allows the creation of web servers.

#### **Example: Simple HTTP Server**

```js
const http = require("http");

const server = http.createServer((req, res) => {
	res.writeHead(200, { "Content-Type": "text/plain" });
	res.end("Hello, Node.js!");
});

server.listen(3000, () => {
	console.log("Server running at http://localhost:3000");
});
```

**Explanation:**

- Creates a simple web server that listens on **port 3000**.
- Sends `"Hello, Node.js!"` as a response.

---

### **5. `crypto` (Cryptography) Module**

The **`crypto` module** allows encryption and decryption.

#### **Example: Hash a String using SHA256**

```js
const crypto = require("crypto");

const hash = crypto.createHash("sha256").update("password").digest("hex");
console.log("Hashed Password:", hash);
```

---

### **6. `events` (Event-Driven Programming)**

The **`events` module** enables working with event-driven programming in Node.js.

#### **Example: Custom Event Emitter**

```js
const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("greet", (name) => {
	console.log(`Hello, ${name}!`);
});

myEmitter.emit("greet", "Alice");
```

**Explanation:**

- Creates a **custom event (`greet`)**.
- Emits the event with a parameter `"Alice"`.

---

### **7. `stream` (Handling Streaming Data)**

The **`stream` module** is useful for handling large amounts of data efficiently.

#### **Example: Reading a Large File using Streams**

```js
const fs = require("fs");

const readStream = fs.createReadStream("largeFile.txt", "utf8");

readStream.on("data", (chunk) => {
	console.log("Received Chunk:", chunk);
});
```

**Explanation:**

- Reads large files **in chunks**, preventing memory overflow.

---

### **8. `timers` (Scheduling Tasks)**

The **`timers` module** provides functions for scheduling tasks.

#### **Example: Using `setTimeout()` and `setInterval()`**

```js
setTimeout(() => {
	console.log("Executed after 2 seconds");
}, 2000);

setInterval(() => {
	console.log("Runs every 3 seconds");
}, 3000);
```

---

### **9. `dns` (Domain Name Resolution)**

The **`dns` module** allows performing DNS lookups.

#### **Example: Get IP Address from a Domain**

```js
const dns = require("dns");

dns.lookup("google.com", (err, address) => {
	if (err) throw err;
	console.log("Google IP Address:", address);
});
```

---

### **10. `child_process` (Execute System Commands)**

The **`child_process` module** allows running shell commands.

#### **Example: Run a Shell Command**

```js
const { exec } = require("child_process");

exec("ls", (err, stdout) => {
	if (err) throw err;
	console.log("List of files:", stdout);
});
```

---

## **3. Summary Table**

| Module          | Purpose                       |
| --------------- | ----------------------------- |
| `fs`            | Read/write files              |
| `path`          | Work with file paths          |
| `os`            | Get system info               |
| `http`          | Create web servers            |
| `crypto`        | Perform encryption & hashing  |
| `events`        | Handle custom events          |
| `stream`        | Handle large data efficiently |
| `timers`        | Manage scheduled tasks        |
| `dns`           | Perform domain lookups        |
| `child_process` | Execute system commands       |

---

## **Conclusion**

🚀 Node.js built-in modules provide **powerful functionalities** for **file handling, networking, security, and system interaction**.

Would you like an **advanced project using these modules**? Let me know! 🚀
