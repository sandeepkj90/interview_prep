Here is a comprehensive list of **Redis Cache interview questions and answers**, covering basic to advanced levels, with examples:

---

### **Basic Questions**

#### **1. What is Redis?**
**Answer:**  
Redis (Remote Dictionary Server) is an open-source, in-memory data store used as a database, cache, and message broker. It supports various data structures like strings, hashes, lists, sets, and sorted sets. Redis is highly performant and supports operations with sub-millisecond latency.

---

#### **2. What are the primary use cases for Redis?**
**Answer:**  
- **Caching:** Storing frequently accessed data to improve application performance.
- **Session Store:** Managing user sessions in web applications.
- **Real-Time Analytics:** Processing data for real-time leaderboards, counters, etc.
- **Message Queues:** Using Redis as a Pub/Sub or stream-based message broker.
- **Data Structures:** Storing and manipulating complex data types like lists, sets, and hashes.

---

#### **3. What data types are supported by Redis?**
**Answer:**  
- **String:** Basic data type to store text, numbers, or binary data.
- **Hash:** Key-value pairs, similar to a dictionary.
- **List:** Ordered collection of strings.
- **Set:** Unordered collection of unique strings.
- **Sorted Set (ZSet):** Set with a score for each element, enabling sorting.
- **Stream:** Logs or message queues.
- **Bitmap:** Bit-level operations.
- **HyperLogLog:** Approximate cardinality estimation.

---

#### **4. What is the difference between Redis and a traditional database?**
**Answer:**  
- Redis stores data **in memory** (RAM) for faster access, while traditional databases use disk storage.
- Redis supports **limited persistence**, while traditional databases prioritize durability.
- Redis offers specialized data structures, whereas traditional databases rely on tables.

---

#### **5. How does Redis persist data?**
**Answer:**  
Redis offers two persistence methods:
1. **RDB (Redis Database):** Snapshot-based persistence; saves data to disk periodically.
2. **AOF (Append-Only File):** Logs every write operation for durability.

---

### **Intermediate Questions**

#### **6. How do you set up a Redis cache in Node.js?**
**Answer:**  
1. Install Redis and its client library:
   ```bash
   npm install redis
   ```
2. Connect to Redis and use caching:
   ```javascript
   const redis = require('redis');
   const client = redis.createClient();

   client.on('connect', () => {
     console.log('Connected to Redis');
   });

   client.set('key', 'value', (err, reply) => {
     console.log(reply); // "OK"
   });

   client.get('key', (err, reply) => {
     console.log(reply); // "value"
   });
   ```

---

#### **7. What is a Redis eviction policy?**
**Answer:**  
Redis uses eviction policies to handle memory limits. Common policies include:
- **noeviction:** Writes fail when memory is full.
- **allkeys-lru:** Evicts least recently used (LRU) keys.
- **volatile-lru:** Evicts LRU keys with an expiry.
- **allkeys-random:** Evicts random keys.
- **volatile-ttl:** Evicts keys with the nearest expiration time.

---

#### **8. How do you implement caching with expiration in Redis?**
**Answer:**  
You can set an expiration time using the `SETEX` command or `EXPIRE` function:
```javascript
// Using SETEX
client.setex('key', 60, 'value'); // Cache 'value' for 60 seconds

// Using EXPIRE
client.set('key', 'value');
client.expire('key', 60); // Expire key in 60 seconds
```

---

#### **9. How does Redis handle concurrency?**
**Answer:**  
Redis is single-threaded, and commands execute sequentially. However, it uses **optimistic locking** for transactions through the `WATCH` command.

Example:
```javascript
client.watch('balance');
client.get('balance', (err, balance) => {
  const newBalance = parseInt(balance) - 50;

  const multi = client.multi();
  multi.set('balance', newBalance);
  multi.exec((err, replies) => {
    if (replies === null) {
      console.log('Transaction failed');
    } else {
      console.log('Transaction successful');
    }
  });
});
```

---

#### **10. How can you scale Redis?**
**Answer:**  
- **Partitioning:** Divide data across multiple Redis instances.
- **Replication:** Use replicas for high availability.
- **Redis Cluster:** Built-in sharding for horizontal scaling.
- **Proxy:** Tools like Twemproxy for managing Redis nodes.

---

### **Advanced Questions**

#### **11. What is a Redis pipeline, and why is it useful?**
**Answer:**  
A Redis pipeline allows batching multiple commands and sending them to the server in a single request to reduce network overhead.
Example:
```javascript
const pipeline = client.pipeline();
pipeline.set('key1', 'value1');
pipeline.set('key2', 'value2');
pipeline.exec((err, results) => {
  console.log(results);
});
```

---

#### **12. What is a Redis Cluster?**
**Answer:**  
Redis Cluster is a distributed implementation of Redis that provides:
- Automatic data sharding.
- High availability (replicas and failover).
- Scalability across multiple nodes.

---

#### **13. How do you handle cache invalidation in Redis?**
**Answer:**  
Cache invalidation strategies:
1. **Time-to-live (TTL):** Set expiration for keys to auto-expire after a duration.
2. **Manual Invalidation:** Delete cache entries when underlying data changes.
   ```javascript
   client.del('key');
   ```
3. **Write-Through Caching:** Update cache whenever the database is updated.

---

#### **14. What is the difference between Redis Pub/Sub and Redis Streams?**
**Answer:**  
- **Pub/Sub:** Publish-subscribe model where messages are sent to all subscribers of a channel.
- **Streams:** Persistent log-based messaging that retains messages until consumed, with support for message acknowledgment and replay.

---

#### **15. How do you secure Redis?**
**Answer:**  
- Use **authentication** with a password (`requirepass` in the configuration).
- Bind Redis to specific IP addresses (`bind` directive).
- Enable **SSL/TLS** for encrypted communication.
- Use firewalls or VPNs to restrict access.

---

#### **16. What is Redis Sentinel?**
**Answer:**  
Redis Sentinel provides high availability by monitoring Redis instances and performing failover in case the primary node goes down.

---

#### **17. How do you monitor Redis performance?**
**Answer:**  
Use commands like:
- `INFO`: Displays server stats.
- `MONITOR`: Real-time command execution monitoring.
- Third-party tools: **RedisInsight**, **Prometheus**, **Grafana**.

---

#### **18. How is Redis different from Memcached?**
**Answer:**
| Feature          | Redis                         | Memcached                 |
|-------------------|-------------------------------|---------------------------|
| Data Structures   | Strings, lists, hashes, sets | Strings only              |
| Persistence       | Yes                          | No                        |
| Clustering        | Yes                          | No                        |
| Performance       | Slightly slower than Memcached | Faster for simple caching |

---

#### **19. What is Redis HyperLogLog?**
**Answer:**  
HyperLogLog is a data structure in Redis used for approximate cardinality estimation with low memory usage.
Example:
```javascript
client.pfadd('hll', 'a', 'b', 'c');
client.pfcount('hll', (err, count) => {
  console.log(count); // Approximate unique count
});
```

---

#### **20. What are Lua scripts in Redis?**
**Answer:**  
Redis supports Lua scripting for atomic execution of complex logic.
Example:
```lua
-- Lua script example
local value = redis.call('GET', KEYS[1])
return value
```

Use in Node.js:
```javascript
client.eval("return redis.call('GET', KEYS[1])", 1, 'key', (err, result) => {
  console.log(result);
});
```

---

These questions and answers will help you ace Redis-related interviews, covering both theoretical and practical aspects. Let me know if you need in-depth examples or more advanced scenarios!