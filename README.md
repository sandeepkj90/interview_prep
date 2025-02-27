RESTful APIs follow a set of best practices to ensure scalability, security, and ease of use. Below are the best practices with detailed explanations and examples.

---

## **1. Use Nouns for Resource Endpoints**

RESTful APIs should use nouns (not verbs) in their endpoints to represent resources.

### **Bad Practice:**

```http
GET /getUsers
POST /createUser
DELETE /deleteUser/1
```

### **Good Practice:**

```http
GET /users
POST /users
DELETE /users/1
```

- `/users` represents a collection of user resources.
- `/users/1` represents a specific user resource.

---

## **2. Use HTTP Methods Correctly**

Use the appropriate HTTP methods for different operations.

| HTTP Method | Purpose                                     |
| ----------- | ------------------------------------------- |
| `GET`       | Retrieve a resource                         |
| `POST`      | Create a new resource                       |
| `PUT`       | Update a resource (replace entire resource) |
| `PATCH`     | Partially update a resource                 |
| `DELETE`    | Remove a resource                           |

### **Example:**

```http
GET /books      # Fetch all books
POST /books     # Create a new book
GET /books/5    # Fetch book with ID 5
PUT /books/5    # Update book with ID 5
PATCH /books/5  # Partially update book with ID 5
DELETE /books/5 # Delete book with ID 5
```

---

## **3. Use Plural Names for Collections**

- Use plural nouns to indicate a collection of resources.

### **Bad:**

```http
GET /user
```

### **Good:**

```http
GET /users
```

---

## **4. Use Proper Status Codes**

Use HTTP status codes to indicate the response result.

| Status Code                 | Meaning                                  |
| --------------------------- | ---------------------------------------- |
| `200 OK`                    | Request successful                       |
| `201 Created`               | Resource created successfully            |
| `204 No Content`            | Successful request with no response body |
| `400 Bad Request`           | Client-side input error                  |
| `401 Unauthorized`          | Authentication required                  |
| `403 Forbidden`             | No permission to access the resource     |
| `404 Not Found`             | Resource not found                       |
| `500 Internal Server Error` | Server error                             |

### **Example Response:**

```json
{
	"status": 201,
	"message": "User created successfully",
	"userId": 123
}
```

---

## **5. Use Query Parameters for Filtering, Sorting, and Pagination**

Use query parameters to filter, sort, and paginate results.

### **Filtering:**

```http
GET /products?category=electronics
```

### **Sorting:**

```http
GET /products?sort=price_asc
```

### **Pagination:**

```http
GET /products?page=2&limit=10
```

---

## **6. Use Meaningful Error Responses**

Provide meaningful error messages with proper structure.

### **Bad Response:**

```json
{
	"error": "Invalid input"
}
```

### **Good Response:**

```json
{
	"status": 400,
	"error": "Bad Request",
	"message": "Email field is required",
	"field": "email"
}
```

---

## **7. Use HATEOAS (Hypermedia as the Engine of Application State)**

Provide links to related resources.

### **Example Response:**

```json
{
	"id": 123,
	"name": "John Doe",
	"email": "john@example.com",
	"links": {
		"self": "/users/123",
		"orders": "/users/123/orders"
	}
}
```

---

## **8. Versioning the API**

Use versioning to prevent breaking changes.

### **Approaches:**

1. **URL versioning** (Recommended)

   ```http
   GET /v1/users
   ```

2. **Header versioning**
   ```http
   GET /users
   Accept: application/vnd.myapi.v1+json
   ```

---

## **9. Secure the API**

- Use **HTTPS** for secure communication.
- Use **JWT (JSON Web Tokens)** for authentication.
- Implement **rate limiting** to prevent abuse.

### **Example JWT Token in Header:**

```http
Authorization: Bearer eyJhbGciOiJIUzI1...
```

---

## **10. Use Caching for Performance Optimization**

Use **ETags** and **Cache-Control** headers to reduce server load.

### **Example Response with ETag:**

```http
ETag: "5d8c72a0"
Cache-Control: max-age=3600
```

---

## **Example RESTful API Implementation (Node.js + Express)**

```javascript
const express = require("express");
const app = express();
app.use(express.json());

let users = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
];

// GET all users
app.get("/users", (req, res) => {
	res.json(users);
});

// GET a user by ID
app.get("/users/:id", (req, res) => {
	const user = users.find((u) => u.id == req.params.id);
	if (!user) return res.status(404).json({ error: "User not found" });
	res.json(user);
});

// Create a new user
app.post("/users", (req, res) => {
	const newUser = { id: users.length + 1, name: req.body.name };
	users.push(newUser);
	res.status(201).json(newUser);
});

// Update a user
app.put("/users/:id", (req, res) => {
	let user = users.find((u) => u.id == req.params.id);
	if (!user) return res.status(404).json({ error: "User not found" });
	user.name = req.body.name;
	res.json(user);
});

// Delete a user
app.delete("/users/:id", (req, res) => {
	users = users.filter((u) => u.id != req.params.id);
	res.status(204).send();
});

// Start the server
app.listen(3000, () => console.log("Server running on port 3000"));
```

---

## **Conclusion**

Following RESTful best practices ensures your API is scalable, maintainable, and secure. Key takeaways:
✅ Use **nouns** in URLs.  
✅ Use correct **HTTP methods**.  
✅ Implement **proper status codes**.  
✅ Use **query parameters** for filtering & pagination.  
✅ Provide **meaningful error messages**.  
✅ Secure your API with **authentication** and **rate limiting**.  
✅ Implement **caching** and **versioning**.

Would you like help implementing a specific feature in your RESTful API? 🚀
