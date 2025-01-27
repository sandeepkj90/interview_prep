Here are some commonly asked **scenario-based problem questions** combining **arrays, strings, and objects** in JavaScript that often appear in interviews. Each of these questions tests problem-solving, algorithmic thinking, and familiarity with JavaScript data structures.

---

### **1. Array of Objects: Filter and Transform**
**Problem:**  
You are given an array of objects representing users:  
```javascript
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];
```
Write a function that:
1. Filters users aged above 28.
2. Returns an array of their names.

**Expected Output:**
```javascript
["Bob", "Charlie"]
```

---

### **2. Find Duplicates in an Array of Strings**
**Problem:**  
You are given an array of strings:  
```javascript
const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];
```
Write a function to return an array of names that appear more than once.

**Expected Output:**
```javascript
["Alice", "Bob"]
```

---

### **3. Group Anagrams**
**Problem:**  
Write a function that groups anagrams from an array of strings.  
```javascript
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
```

**Expected Output:**
```javascript
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
```

---

### **4. Flatten a Nested Array**
**Problem:**  
Write a function to flatten a nested array.  
```javascript
const nestedArray = [1, [2, [3, 4]], [5]];
```

**Expected Output:**
```javascript
[1, 2, 3, 4, 5]
```

---

### **5. Convert Array to Object**
**Problem:**  
Write a function that converts an array of key-value pair arrays into an object.  
```javascript
const keyValuePairs = [["name", "Alice"], ["age", 25], ["city", "New York"]];
```

**Expected Output:**
```javascript
{ name: "Alice", age: 25, city: "New York" }
```

---

### **6. Longest Substring Without Repeating Characters**
**Problem:**  
Find the length of the longest substring without repeating characters in a given string.  
```javascript
const input = "abcabcbb";
```

**Expected Output:**
```javascript
3  // ("abc" is the longest substring)
```

---

### **7. Merge Two Sorted Arrays**
**Problem:**  
You are given two sorted arrays. Merge them into one sorted array.  
```javascript
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];
```

**Expected Output:**
```javascript
[1, 2, 3, 4, 5, 6]
```

---

### **8. Frequency Count of Elements**
**Problem:**  
Count the frequency of each element in an array.  
```javascript
const arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
```

**Expected Output:**
```javascript
{ apple: 3, banana: 2, orange: 1 }
```

---

### **9. Deep Clone an Object with Nested Arrays**
**Problem:**  
Write a function to deep clone an object that contains nested arrays and objects.  
```javascript
const obj = { name: "Alice", details: { age: 25, hobbies: ["reading", "gaming"] } };
```

**Expected Output:**  
A deep clone of the object where modifying the clone does not affect the original object.

---

### **10. Remove Duplicates Without Using Set**
**Problem:**  
Write a function to remove duplicates from an array without using `Set`.  
```javascript
const arr = [1, 2, 3, 2, 4, 1];
```

**Expected Output:**
```javascript
[1, 2, 3, 4]
```

---

### **11. Find Missing Number in a Range**
**Problem:**  
You are given an array of integers from 1 to `n` with one number missing. Find the missing number.  
```javascript
const arr = [1, 2, 4, 5];
```

**Expected Output:**
```javascript
3
```

---

### **12. Validate a String is Palindrome**
**Problem:**  
Write a function to check if a string is a palindrome (ignoring spaces and case).  
```javascript
const str = "A man a plan a canal Panama";
```

**Expected Output:**
```javascript
true
```

---

### **13. Find Common Elements in Two Arrays**
**Problem:**  
Write a function to return the common elements between two arrays.  
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
```

**Expected Output:**
```javascript
[3, 4]
```

---

### **14. Sum of Elements in an Array of Objects**
**Problem:**  
Calculate the total price of all products in the array.  
```javascript
const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 750 },
];
```

**Expected Output:**
```javascript
2250
```

---

### **15. Sort an Array of Objects by a Key**
**Problem:**  
Sort an array of objects by the `age` property.  
```javascript
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 20 },
];
```

**Expected Output:**
```javascript
[
  { name: "Charlie", age: 20 },
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
]
```

---

These problems test foundational JavaScript skills and the ability to work with arrays, strings, and objects effectively. Would you like a detailed solution for any of these?


Here are more advanced **scenario-based problems** involving **arrays, strings, and objects** in JavaScript. These focus on optimization, edge cases, and advanced techniques often explored in interviews.

---

### **16. Two Sum Problem**
**Problem:**  
Given an array of integers and a target sum, find two numbers that add up to the target. Return their indices.  
```javascript
const nums = [2, 7, 11, 15];
const target = 9;
```

**Expected Output:**
```javascript
[0, 1] // nums[0] + nums[1] = 2 + 7 = 9
```

---

### **17. Convert an Object to Query String**
**Problem:**  
Write a function to convert an object into a URL query string.  
```javascript
const params = { name: "Alice", age: 25, city: "New York" };
```

**Expected Output:**
```javascript
"name=Alice&age=25&city=New%20York"
```

---

### **18. Generate Permutations of an Array**
**Problem:**  
Write a function to generate all permutations of an array.  
```javascript
const nums = [1, 2, 3];
```

**Expected Output:**
```javascript
[
  [1, 2, 3],
  [1, 3, 2],
  [2, 1, 3],
  [2, 3, 1],
  [3, 1, 2],
  [3, 2, 1]
]
```

---

### **19. Check if Two Strings are Isomorphic**
**Problem:**  
Two strings are isomorphic if the characters in one string can be replaced to get the other string. Check if two strings are isomorphic.  
```javascript
const str1 = "egg";
const str2 = "add";
```

**Expected Output:**
```javascript
true
```

---

### **20. Rotate an Array**
**Problem:**  
Rotate an array `k` steps to the right.  
```javascript
const nums = [1, 2, 3, 4, 5, 6];
const k = 2;
```

**Expected Output:**
```javascript
[5, 6, 1, 2, 3, 4]
```

---

### **21. Check if a String Contains Valid Parentheses**
**Problem:**  
Write a function to check if a string containing parentheses is valid.  
```javascript
const input = "()[]{}";
```

**Expected Output:**
```javascript
true
```

**Edge Case:**
```javascript
const input = "([)]";
```

**Expected Output:**
```javascript
false
```

---

### **22. Find All Subsequences of a String**
**Problem:**  
Write a function to find all subsequences of a string.  
```javascript
const str = "abc";
```

**Expected Output:**
```javascript
["", "a", "b", "c", "ab", "ac", "bc", "abc"]
```

---

### **23. Convert Nested Array to Flat Object**
**Problem:**  
Convert a deeply nested array into a flat object with keys as paths.  
```javascript
const input = { a: { b: { c: 1, d: 2 }, e: 3 }, f: 4 };
```

**Expected Output:**
```javascript
{
  "a.b.c": 1,
  "a.b.d": 2,
  "a.e": 3,
  "f": 4
}
```

---

### **24. Intersection of Multiple Arrays**
**Problem:**  
Find the intersection of multiple arrays.  
```javascript
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const arr3 = [3, 4, 5];
```

**Expected Output:**
```javascript
[3]
```

---

### **25. Find Kth Largest Element**
**Problem:**  
Find the `k`th largest element in an array.  
```javascript
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
```

**Expected Output:**
```javascript
5
```

---

### **26. Find the First Non-Repeating Character**
**Problem:**  
Write a function to find the first non-repeating character in a string.  
```javascript
const input = "swiss";
```

**Expected Output:**
```javascript
"w"
```

---

### **27. Subarray Sum Equals K**
**Problem:**  
Find the number of continuous subarrays that sum to a given target `k`.  
```javascript
const nums = [1, 1, 1];
const k = 2;
```

**Expected Output:**
```javascript
2
```

---

### **28. Find the Longest Common Prefix**
**Problem:**  
Write a function to find the longest common prefix among an array of strings.  
```javascript
const strs = ["flower", "flow", "flight"];
```

**Expected Output:**
```javascript
"fl"
```

---

### **29. Remove Elements In-Place**
**Problem:**  
Write a function that removes all occurrences of a specific value in-place and returns the new length of the array.  
```javascript
const nums = [3, 2, 2, 3];
const val = 3;
```

**Expected Output:**
```javascript
2 // Modified array: [2, 2]
```

---

### **30. Implement a Debounce Function**
**Problem:**  
Write a debounce function to limit the rate at which a function is executed.  
```javascript
function debounce(func, delay) {
  // Your implementation here
}
```

**Usage Example:**
```javascript
const debouncedFunc = debounce(() => console.log("Called!"), 300);
debouncedFunc();
debouncedFunc();
debouncedFunc(); // Only one "Called!" after 300ms
```

---

### **31. Merge Overlapping Intervals**
**Problem:**  
Given a set of intervals, merge overlapping ones.  
```javascript
const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
```

**Expected Output:**
```javascript
[[1, 6], [8, 10], [15, 18]]
```

---

### **32. Count Triplets in Array**
**Problem:**  
Count the number of triplets in an array that can form a geometric progression of ratio `r`.  
```javascript
const arr = [1, 4, 16, 64];
const r = 4;
```

**Expected Output:**
```javascript
2
```

---

These additional problems are great for testing complex logic and critical thinking in JavaScript interviews. Let me know which problem you'd like to see solved!

Here’s an even more extensive list of **scenario-based problems** involving **arrays, strings, and objects** for JavaScript interviews. These problems delve deeper into advanced concepts, edge cases, and performance optimization.

---

### **33. Implement a Throttle Function**
**Problem:**  
Write a throttle function to ensure a given function executes at most once in a specified time period.  
```javascript
function throttle(func, limit) {
  // Your implementation here
}
```

**Usage Example:**
```javascript
const throttledFunc = throttle(() => console.log("Called!"), 1000);
throttledFunc(); // Executes
throttledFunc(); // Ignored
setTimeout(throttledFunc, 1500); // Executes
```

---

### **34. Find Maximum Product of Three Numbers**
**Problem:**  
Given an integer array, find the maximum product of any three numbers.  
```javascript
const nums = [-10, -10, 5, 2];
```

**Expected Output:**
```javascript
500 // (-10 * -10 * 5)
```

---

### **35. Find All Pairs Equal to Target**
**Problem:**  
Write a function to find all unique pairs of numbers in an array that sum up to a given target.  
```javascript
const nums = [1, 2, 3, 4, 3, 5];
const target = 6;
```

**Expected Output:**
```javascript
[[1, 5], [2, 4], [3, 3]]
```

---

### **36. Serialize and Deserialize an Object**
**Problem:**  
Write a function to serialize an object into a JSON string and deserialize it back to an object while preserving functions and dates.  
```javascript
const obj = { 
  name: "Alice", 
  greet: function() { return "Hello"; }, 
  createdAt: new Date() 
};
```

**Expected Output:**  
A function that can both serialize and deserialize the object.

---

### **37. Find Majority Element**
**Problem:**  
Find the element that appears more than `n/2` times in an array of size `n`.  
```javascript
const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
```

**Expected Output:**
```javascript
4
```

---

### **38. Rearrange Array by Sign**
**Problem:**  
Given an array of integers, rearrange the array such that positive and negative numbers alternate.  
```javascript
const nums = [3, -2, 5, -1, -7, 8];
```

**Expected Output:**
```javascript
[3, -2, 5, -1, 8, -7]
```

---

### **39. Longest Consecutive Sequence**
**Problem:**  
Find the length of the longest consecutive elements sequence in an unsorted array.  
```javascript
const nums = [100, 4, 200, 1, 3, 2];
```

**Expected Output:**
```javascript
4 // Sequence: [1, 2, 3, 4]
```

---

### **40. Find Missing and Repeating Numbers**
**Problem:**  
Find the missing and repeating numbers in an array of size `n`, containing numbers from `1` to `n`.  
```javascript
const nums = [4, 3, 6, 2, 1, 1];
```

**Expected Output:**
```javascript
{ missing: 5, repeating: 1 }
```

---

### **41. Generate Spiral Matrix**
**Problem:**  
Generate a `n x n` matrix filled with numbers in spiral order.  
```javascript
const n = 3;
```

**Expected Output:**
```javascript
[
  [1, 2, 3],
  [8, 9, 4],
  [7, 6, 5]
]
```

---

### **42. Find Subarray with Maximum Sum**
**Problem:**  
Use Kadane’s algorithm to find the subarray with the maximum sum.  
```javascript
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
```

**Expected Output:**
```javascript
6 // Subarray: [4, -1, 2, 1]
```

---

### **43. Implement LRU Cache**
**Problem:**  
Design a class that implements an LRU (Least Recently Used) Cache.  
```javascript
const cache = new LRUCache(2); // capacity of 2
cache.put(1, 1);
cache.put(2, 2);
cache.get(1); // returns 1
cache.put(3, 3); // removes key 2
cache.get(2); // returns -1 (not found)
```

---

### **44. Find Maximum Length of Subarray with Equal 0s and 1s**
**Problem:**  
Find the maximum length of a subarray containing an equal number of `0s` and `1s`.  
```javascript
const nums = [0, 1, 0, 1, 1, 0, 0];
```

**Expected Output:**
```javascript
6 // Subarray: [0, 1, 0, 1, 1, 0]
```

---

### **45. Implement an Event Emitter**
**Problem:**  
Write a class that acts as an event emitter with `on`, `off`, and `emit` methods.  
```javascript
const emitter = new EventEmitter();
emitter.on("event", () => console.log("Event triggered"));
emitter.emit("event"); // Logs "Event triggered"
```

---

### **46. Merge k Sorted Arrays**
**Problem:**  
Merge `k` sorted arrays into one sorted array.  
```javascript
const arrays = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];
```

**Expected Output:**
```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

---

### **47. Find All Palindromic Substrings**
**Problem:**  
Write a function to find all palindromic substrings in a string.  
```javascript
const str = "abcba";
```

**Expected Output:**
```javascript
["a", "b", "c", "b", "a", "abcba", "bcb"]
```

---

### **48. Implement Deep Merge for Objects**
**Problem:**  
Write a function to deep merge two objects.  
```javascript
const obj1 = { a: { b: 1 }, c: 3 };
const obj2 = { a: { d: 2 }, c: 4 };
```

**Expected Output:**
```javascript
{ a: { b: 1, d: 2 }, c: 4 }
```

---

### **49. Reverse Words in a String**
**Problem:**  
Reverse the words in a string.  
```javascript
const str = "The quick brown fox";
```

**Expected Output:**
```javascript
"fox brown quick The"
```

---

### **50. Find the k Closest Points to Origin**
**Problem:**  
Given a list of points on a 2D plane, find the `k` closest points to the origin `(0, 0)`.  
```javascript
const points = [[1, 3], [-2, 2], [5, 8], [0, 1]];
const k = 2;
```

**Expected Output:**
```javascript
[[-2, 2], [0, 1]]
```

---

Let me know if you’d like detailed solutions to any of these problems or additional examples!

Here are **even more advanced and scenario-based problems** that involve **arrays, strings, and objects** in JavaScript. These problems emphasize creative solutions, algorithmic thinking, and edge-case handling, which are common themes in interviews.

---

### **51. Find All Anagrams of a String in Another String**
**Problem:**  
Find all the start indices of substrings in a given string `s` that are anagrams of a string `p`.  
```javascript
const s = "cbaebabacd";
const p = "abc";
```

**Expected Output:**
```javascript
[0, 6] // "cba" and "bac" are anagrams
```

---

### **52. Group Strings by Anagrams**
**Problem:**  
Group an array of strings into anagrams.  
```javascript
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
```

**Expected Output:**
```javascript
[
  ["eat", "tea", "ate"],
  ["tan", "nat"],
  ["bat"]
]
```

---

### **53. Find Minimum Window Substring**
**Problem:**  
Given two strings `s` and `t`, find the smallest substring in `s` that contains all characters in `t`.  
```javascript
const s = "ADOBECODEBANC";
const t = "ABC";
```

**Expected Output:**
```javascript
"BANC"
```

---

### **54. Flatten a Nested Array**
**Problem:**  
Write a function to flatten a deeply nested array.  
```javascript
const arr = [1, [2, [3, [4]], 5]];
```

**Expected Output:**
```javascript
[1, 2, 3, 4, 5]
```

---

### **55. Find All Unique Triplets That Sum to Zero**
**Problem:**  
Find all unique triplets in the array whose sum is zero.  
```javascript
const nums = [-1, 0, 1, 2, -1, -4];
```

**Expected Output:**
```javascript
[[-1, -1, 2], [-1, 0, 1]]
```

---

### **56. Longest Substring with At Most K Distinct Characters**
**Problem:**  
Find the length of the longest substring that contains at most `k` distinct characters.  
```javascript
const s = "eceba";
const k = 2;
```

**Expected Output:**
```javascript
3 // "ece"
```

---

### **57. Check if Array Can Be Partitioned into Two Equal Sums**
**Problem:**  
Determine if an array can be partitioned into two subsets with equal sums.  
```javascript
const nums = [1, 5, 11, 5];
```

**Expected Output:**
```javascript
true // Subsets: [1, 5, 5] and [11]
```

---

### **58. Find Longest Palindromic Substring**
**Problem:**  
Find the longest palindromic substring in a given string.  
```javascript
const s = "babad";
```

**Expected Output:**
```javascript
"bab" // or "aba"
```

---

### **59. Find kth Smallest Element in a Sorted Matrix**
**Problem:**  
Find the `k`th smallest element in a sorted `n x n` matrix.  
```javascript
const matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15]
];
const k = 8;
```

**Expected Output:**
```javascript
13
```

---

### **60. Sort Characters by Frequency**
**Problem:**  
Sort the characters in a string by their frequency.  
```javascript
const s = "tree";
```

**Expected Output:**
```javascript
"eert" // or "eetr"
```

---

### **61. Find Top K Frequent Elements**
**Problem:**  
Find the top `k` most frequent elements in an array.  
```javascript
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;
```

**Expected Output:**
```javascript
[1, 2]
```

---

### **62. Find the Smallest Missing Positive Integer**
**Problem:**  
Find the smallest positive integer that does not appear in an unsorted array.  
```javascript
const nums = [3, 4, -1, 1];
```

**Expected Output:**
```javascript
2
```

---

### **63. Find All Paths in a Graph**
**Problem:**  
Given a directed acyclic graph, find all paths from the start node to the end node.  
```javascript
const graph = [[1, 2], [3], [3], []];
```

**Expected Output:**
```javascript
[[0, 1, 3], [0, 2, 3]]
```

---

### **64. Check if Array is a Valid Sudoku**
**Problem:**  
Validate if a 9x9 Sudoku board is valid.  
```javascript
const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];
```

**Expected Output:**
```javascript
true
```

---

### **65. Check if a String is a Scramble of Another**
**Problem:**  
Given two strings `s1` and `s2`, check if `s2` is a scrambled version of `s1`.  
```javascript
const s1 = "great";
const s2 = "rgeat";
```

**Expected Output:**
```javascript
true
```

---

### **66. Count Distinct Islands**
**Problem:**  
In a 2D grid, count the number of distinct islands.  
```javascript
const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1]
];
```

**Expected Output:**
```javascript
2
```

---

### **67. Find Largest Rectangle in Histogram**
**Problem:**  
Find the largest rectangular area in a histogram.  
```javascript
const heights = [2, 1, 5, 6, 2, 3];
```

**Expected Output:**
```javascript
10 // Rectangle spans [5, 6]
```

---

### **68. Check if a Word Exists in a Grid**
**Problem:**  
Given a 2D board and a word, check if the word exists in the board by moving up, down, left, or right.  
```javascript
const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"]
];
const word = "ABCCED";
```

**Expected Output:**
```javascript
true
```

---

These problems emphasize deeper problem-solving skills. Let me know if you'd like solutions for specific ones!