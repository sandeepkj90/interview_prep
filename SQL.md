Here’s a comprehensive list of **SQL interview questions and answers**, including **basic to advanced concepts** and **practical problems** that are frequently asked in interviews for roles such as Data Analyst, Data Engineer, Software Engineer, and Database Administrator.

---

## 🔹 **Basic SQL Interview Questions**

### 1. **What is SQL?**

**Answer:** SQL (Structured Query Language) is a standard language used to communicate with relational databases. It is used to perform tasks such as querying data, updating data, and managing schemas.

---

### 2. **What are the different types of SQL commands?**

**Answer:**

- **DDL (Data Definition Language):** `CREATE`, `ALTER`, `DROP`
- **DML (Data Manipulation Language):** `SELECT`, `INSERT`, `UPDATE`, `DELETE`
- **DCL (Data Control Language):** `GRANT`, `REVOKE`
- **TCL (Transaction Control Language):** `COMMIT`, `ROLLBACK`, `SAVEPOINT`

---

### 3. **What is the difference between `WHERE` and `HAVING`?**

**Answer:**

- `WHERE` is used to filter rows before grouping.
- `HAVING` is used to filter groups after `GROUP BY`.

---

### 4. **What is the difference between `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`?**

| Join Type         | Description                                                           |
| ----------------- | --------------------------------------------------------------------- |
| `INNER JOIN`      | Returns only matching rows from both tables.                          |
| `LEFT JOIN`       | Returns all rows from the left table and matched rows from the right. |
| `RIGHT JOIN`      | All rows from the right table and matched rows from the left.         |
| `FULL OUTER JOIN` | All rows when there is a match in either left or right table.         |

---

### 5. **What is normalization?**

**Answer:** It's the process of organizing data to reduce redundancy. Common normal forms include:

- 1NF: Atomic columns
- 2NF: No partial dependency
- 3NF: No transitive dependency

---

## 🔹 **Intermediate SQL Interview Questions**

### 6. **What is a subquery?**

**Answer:** A query inside another query. It can be:

- **Scalar subquery**
- **Correlated subquery**
- **Nested subquery**

---

### 7. **What is the difference between `RANK()` and `DENSE_RANK()`?**

**Answer:**

- `RANK()` skips ranks if there are ties.
- `DENSE_RANK()` does not skip ranks.

Example:

```sql
SELECT name, salary, RANK() OVER(ORDER BY salary DESC) AS rank
FROM employees;
```

---

### 8. **What is a window function?**

**Answer:** Performs a calculation across a set of table rows related to the current row.

Example:

```sql
SELECT name, department, salary,
       AVG(salary) OVER (PARTITION BY department) AS avg_dept_salary
FROM employees;
```

---

## 🔹 **Advanced SQL Interview Questions**

### 9. **What is a CTE (Common Table Expression)?**

**Answer:**
A temporary result set defined using `WITH` clause.

Example:

```sql
WITH dept_avg AS (
  SELECT department_id, AVG(salary) AS avg_sal
  FROM employees
  GROUP BY department_id
)
SELECT e.name, e.salary, d.avg_sal
FROM employees e
JOIN dept_avg d ON e.department_id = d.department_id;
```

---

### 10. **What is the difference between `DELETE`, `TRUNCATE`, and `DROP`?**

| Command    | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| `DELETE`   | Deletes rows; can have `WHERE` clause.                           |
| `TRUNCATE` | Deletes all rows; faster; cannot be rolled back in some systems. |
| `DROP`     | Deletes the table structure.                                     |

---

## 🔹 **Practical SQL Problems (Frequently Asked)**

### 🔸 1. **Second Highest Salary**

```sql
SELECT MAX(salary) AS second_highest_salary
FROM employees
WHERE salary < (
  SELECT MAX(salary) FROM employees
);
```

---

### 🔸 2. **Find Employees with Same Salary**

```sql
SELECT salary
FROM employees
GROUP BY salary
HAVING COUNT(*) > 1;
```

---

### 🔸 3. **Top 3 Salaries per Department**

```sql
SELECT name, department, salary
FROM (
  SELECT name, department, salary,
         DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rnk
  FROM employees
) sub
WHERE rnk <= 3;
```

---

### 🔸 4. **Find Duplicate Records**

```sql
SELECT name, COUNT(*)
FROM employees
GROUP BY name
HAVING COUNT(*) > 1;
```

---

### 🔸 5. **Employees Who Didn't Get a Bonus**

Assuming two tables `employees` and `bonuses`:

```sql
SELECT e.*
FROM employees e
LEFT JOIN bonuses b ON e.emp_id = b.emp_id
WHERE b.emp_id IS NULL;
```

---

### 🔸 6. **Find the Department with Highest Average Salary**

```sql
SELECT department
FROM employees
GROUP BY department
ORDER BY AVG(salary) DESC
LIMIT 1;
```

---

### 🔸 7. **Count of Employees Joined Each Month**

```sql
SELECT DATE_FORMAT(join_date, '%Y-%m') AS month, COUNT(*) AS num_employees
FROM employees
GROUP BY DATE_FORMAT(join_date, '%Y-%m')
ORDER BY month;
```

Absolutely! Here’s a **list of practical SQL problems** (with solutions) that are frequently asked in interviews, covering **real-world scenarios**, **joins**, **aggregations**, **window functions**, and **complex queries**.

---

## 🔹 **Practical SQL Interview Problems (with Solutions)**

---

### 🔸 **1. Retrieve Employees Who Earn More Than Their Manager**

```sql
SELECT e.name AS employee_name, e.salary, m.name AS manager_name, m.salary AS manager_salary
FROM employees e
JOIN employees m ON e.manager_id = m.emp_id
WHERE e.salary > m.salary;
```

---

### 🔸 **2. Retrieve the N-th Highest Salary (e.g., 3rd Highest)**

```sql
SELECT DISTINCT salary
FROM employees
ORDER BY salary DESC
LIMIT 1 OFFSET 2;  -- 0-based index, so 2 means 3rd highest
```

Or using `DENSE_RANK()`:

```sql
SELECT salary
FROM (
  SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk
  FROM employees
) sub
WHERE rnk = 3;
```

---

### 🔸 **3. List Departments With More Than 5 Employees**

```sql
SELECT department_id, COUNT(*) AS emp_count
FROM employees
GROUP BY department_id
HAVING COUNT(*) > 5;
```

---

### 🔸 **4. Find Customers With No Orders**

Assume tables: `customers(customer_id)` and `orders(order_id, customer_id)`

```sql
SELECT c.*
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
WHERE o.customer_id IS NULL;
```

---

### 🔸 **5. Find Products That Were Never Sold**

Assume: `products(product_id)`, `sales(product_id)`

```sql
SELECT p.*
FROM products p
LEFT JOIN sales s ON p.product_id = s.product_id
WHERE s.product_id IS NULL;
```

---

### 🔸 **6. Retrieve Top-Selling Product by Total Revenue**

Assume: `sales(product_id, quantity, price_per_unit)`

```sql
SELECT product_id, SUM(quantity * price_per_unit) AS total_revenue
FROM sales
GROUP BY product_id
ORDER BY total_revenue DESC
LIMIT 1;
```

---

### 🔸 **7. Running Total of Sales per Product**

```sql
SELECT product_id, sale_date, quantity,
       SUM(quantity) OVER (PARTITION BY product_id ORDER BY sale_date) AS running_total
FROM sales;
```

---

### 🔸 **8. Find Consecutive Login Days Per User**

Assume: `logins(user_id, login_date)`

```sql
SELECT user_id, login_date,
       DATEDIFF(login_date, ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY login_date)) AS grp
FROM logins;
```

This creates groups of consecutive dates. You can then group and count.

---

### 🔸 **9. Highest Paid Employee per Department**

```sql
SELECT *
FROM (
  SELECT *, RANK() OVER (PARTITION BY department_id ORDER BY salary DESC) AS rnk
  FROM employees
) ranked
WHERE rnk = 1;
```

---

### 🔸 **10. Pivot: Sales per Month**

Assume: `sales(product_id, sale_date, revenue)`

```sql
SELECT product_id,
       SUM(CASE WHEN MONTH(sale_date) = 1 THEN revenue ELSE 0 END) AS Jan,
       SUM(CASE WHEN MONTH(sale_date) = 2 THEN revenue ELSE 0 END) AS Feb,
       ...
FROM sales
GROUP BY product_id;
```

---

### 🔸 **11. User Retention: First vs. Repeat Buyers**

```sql
SELECT user_id,
       MIN(order_date) AS first_order,
       COUNT(order_id) AS total_orders
FROM orders
GROUP BY user_id;
```

Filter repeat buyers:

```sql
HAVING COUNT(order_id) > 1;
```

---

### 🔸 **12. Detect Duplicates Based on Email**

```sql
SELECT email, COUNT(*) AS count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

---

### 🔸 **13. Percentage of Orders Delivered on Time**

Assume: `orders(order_id, estimated_date, delivery_date)`

```sql
SELECT
  ROUND(
    100.0 * SUM(CASE WHEN delivery_date <= estimated_date THEN 1 ELSE 0 END) / COUNT(*), 2
  ) AS on_time_percentage
FROM orders;
```

---

### 🔸 **14. Last Order per Customer**

```sql
SELECT *
FROM (
  SELECT *,
         ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date DESC) AS rnk
  FROM orders
) sub
WHERE rnk = 1;
```

---

### 🔸 **15. Find Gaps in Order IDs (Missing Sequential IDs)**

```sql
SELECT o1.order_id + 1 AS missing_order_id
FROM orders o1
LEFT JOIN orders o2 ON o1.order_id + 1 = o2.order_id
WHERE o2.order_id IS NULL;
```

---
