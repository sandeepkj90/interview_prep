The **SOLID principles** are five design principles intended to make software designs more understandable, flexible, and maintainable. These principles are especially useful in object-oriented design but are applicable more broadly to software architecture.

---

### 🔹 **S – Single Responsibility Principle (SRP)**

> **A class should have only one reason to change.**

- Each class should do **only one job** or have **one responsibility**.
- Helps in reducing complexity and increasing cohesion.

**Example**:

```java
// Bad: User class handles both user data and file storage
class User {
    void saveToFile() { ... }
}

// Good: Separate responsibilities
class User { ... }
class UserPersistence {
    void save(User user) { ... }
}
```

---

### 🔹 **O – Open/Closed Principle (OCP)**

> **Software entities should be open for extension, but closed for modification.**

- You should be able to add new functionality without changing existing code.
- Achieved via abstraction, inheritance, interfaces, and polymorphism.

**Example**:

```python
# Bad: must modify method to add new shapes
def area(shape):
    if shape.type == "circle":
        return 3.14 * shape.radius ** 2

# Good: extend via polymorphism
class Shape:
    def area(self): pass

class Circle(Shape):
    def area(self): return 3.14 * self.radius
```

---

### 🔹 **L – Liskov Substitution Principle (LSP)**

> **Objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program.**

- Subtypes must behave consistently with their base types.
- Avoid overriding methods in a way that changes expected behavior.

**Example**:

```java
// Bad: Square breaks Rectangle behavior
class Rectangle {
    void setWidth(int w) { ... }
    void setHeight(int h) { ... }
}

class Square extends Rectangle {
    void setWidth(int w) {
        setHeight(w);
    }
}
```

---

### 🔹 **I – Interface Segregation Principle (ISP)**

> **Clients should not be forced to depend on interfaces they do not use.**

- Prefer several specific interfaces over a single general-purpose interface.

**Example**:

```csharp
// Bad: one big interface
interface IWorker {
    void work();
    void eat();
}

// Good: split into smaller interfaces
interface IWorkable {
    void work();
}
interface IFeedable {
    void eat();
}
```

---

### 🔹 **D – Dependency Inversion Principle (DIP)**

> **High-level modules should not depend on low-level modules. Both should depend on abstractions.**

- Abstractions should not depend on details; details should depend on abstractions.
- Promotes decoupling and easier testing.

**Example**:

```java
// Bad: tightly coupled
class LightBulb { ... }
class Switch {
    LightBulb bulb;
}

// Good: depend on abstraction
interface Switchable {
    void turnOn();
}

class LightBulb implements Switchable { ... }

class Switch {
    Switchable device;
}
```

---

Would you like practical code examples in a specific language like Python, Java, or C#?
