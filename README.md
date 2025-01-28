Here’s a comprehensive list of **Apache Kafka basic interview questions** along with their answers:

---

### **1. What is Apache Kafka?**

**Answer:**
Apache Kafka is an open-source distributed event streaming platform used for building real-time data pipelines and streaming applications. It is designed to handle high-throughput, fault-tolerant, and scalable messaging.

---

### **2. What are the key components of Kafka?**

**Answer:**
The main components of Kafka are:

1. **Producer:** Sends data (messages) to Kafka topics.
2. **Consumer:** Reads messages from Kafka topics.
3. **Broker:** A Kafka server that stores and serves data.
4. **Topic:** A category or feed name to which messages are published.
5. **Partition:** A topic is divided into partitions for scalability.
6. **Zookeeper:** (Before Kafka 3.0) Coordinates distributed systems, used for metadata management.
7. **Kafka Connect:** Integrates Kafka with external systems (databases, file systems, etc.).

---

### **3. What is a Kafka topic?**

**Answer:**
A **topic** is a logical channel where data is published by producers and consumed by consumers. Topics are divided into **partitions**, and each partition is replicated across brokers.

---

### **4. How does Kafka ensure fault tolerance?**

**Answer:**
Kafka ensures fault tolerance through:

1. **Replication:** Each partition is replicated to multiple brokers, ensuring data availability.
2. **Leader election:** If a broker fails, another replica becomes the leader.
3. **Acknowledgments:** Producers wait for acknowledgment from replicas before confirming data persistence.

---

### **5. What is a Kafka partition?**

**Answer:**
A **partition** is a subset of a topic, and data within a topic is distributed across partitions. Partitions allow Kafka to:

1. Scale horizontally by spreading data across brokers.
2. Process data in parallel.
3. Maintain message ordering within a partition.

---

### **6. What is an offset in Kafka?**

**Answer:**
An **offset** is a unique identifier assigned to each message within a partition. Consumers use offsets to track which messages they have read.

---

### **7. What are producers and consumers in Kafka?**

**Answer:**

- **Producer:** Sends messages to a Kafka topic.
- **Consumer:** Reads messages from a Kafka topic.

---

### **8. What is Kafka’s log retention policy?**

**Answer:**
Kafka retains messages in a partition for a configurable duration (e.g., 7 days) or until the log size exceeds a configured limit. This can be managed using the following configurations:

- `log.retention.hours` (time-based)
- `log.retention.bytes` (size-based)

---

### **9. What are the delivery semantics in Kafka?**

**Answer:**
Kafka supports three delivery semantics:

1. **At-most-once:** Messages may be lost but will not be redelivered.
2. **At-least-once:** Messages are not lost but may be redelivered.
3. **Exactly-once:** Messages are delivered exactly once (requires additional configuration).

---

### **10. How does Kafka handle message ordering?**

**Answer:**
Message ordering is guaranteed **only within a single partition.** If a topic has multiple partitions, there is no guarantee of ordering across partitions.

---

### **11. What is the role of Zookeeper in Kafka?**

**Answer:**
In Kafka (versions <3.0):

1. Manages metadata about brokers, topics, and partitions.
2. Handles leader election for partitions.
3. Stores Access Control Lists (ACLs).

**Note:** Kafka 3.0 and later support a Zookeeper-less architecture using the Kafka **KRaft** (Kafka Raft) protocol.

---

### **12. What is Kafka’s replication factor?**

**Answer:**
The **replication factor** defines the number of copies of a partition that are maintained across brokers for fault tolerance. A replication factor of 3 means each partition has three replicas.

---

### **13. How does Kafka achieve high throughput?**

**Answer:**
Kafka achieves high throughput by:

1. Writing data to disk sequentially (log-based storage).
2. Using zero-copy data transfer for efficient I/O.
3. Distributing partitions across brokers for parallel processing.

---

### **14. What is a consumer group in Kafka?**

**Answer:**
A **consumer group** is a collection of consumers that work together to consume messages from a topic. Kafka ensures that:

1. Each partition is consumed by only one consumer in the group.
2. Multiple consumer groups can read from the same topic independently.

---

### **15. What is Kafka Connect?**

**Answer:**
Kafka Connect is a tool for connecting Kafka with external systems like databases, file systems, or other messaging systems. It supports:

1. **Source connectors:** Pull data from external systems into Kafka.
2. **Sink connectors:** Push data from Kafka to external systems.

---

### **16. What are Kafka Streams?**

**Answer:**
Kafka Streams is a client library for building real-time, stream-processing applications on Kafka. It allows developers to:

1. Process data stored in Kafka topics.
2. Perform transformations, aggregations, and joins.

---

### **17. How do you achieve exactly-once delivery in Kafka?**

**Answer:**
To achieve exactly-once semantics:

1. Enable **idempotent producers** (`enable.idempotence=true`).
2. Use **transactions** (`transactional.id`) for producing and consuming in an atomic manner.

---

### **18. What are some common Kafka producer configurations?**

**Answer:**

- **acks:** Controls how many acknowledgments the producer waits for.
  - `acks=0`: No acknowledgment.
  - `acks=1`: Leader acknowledgment.
  - `acks=all`: All in-sync replicas acknowledgment.
- **retries:** Number of retry attempts for failed messages.
- **batch.size:** Number of messages sent in a single batch.
- **linger.ms:** Delay to wait before sending messages to accumulate a batch.

---

### **19. How do Kafka consumers commit offsets?**

**Answer:**
Kafka consumers commit offsets either:

1. **Automatically:** Using `enable.auto.commit=true`.
2. **Manually:** Using the consumer's API (`commitSync` or `commitAsync`).

---

### **20. How is Kafka different from traditional message brokers?**

**Answer:**

- Kafka persists messages on disk for a configurable period.
- Kafka decouples producers and consumers with a **publish-subscribe** model.
- Kafka supports horizontal scalability through partitions.
- Kafka provides high throughput and fault tolerance.

---

### **Bonus Practical Example Questions**

#### **21. How do you produce and consume messages in Kafka using CLI?**

**Answer:**

- Produce:

```bash
kafka-console-producer --broker-list localhost:9092 --topic my-topic
```

- Consume:

```bash
kafka-console-consumer --bootstrap-server localhost:9092 --topic my-topic --from-beginning
```

---

#### **22. How do you create a Kafka topic using CLI?**

**Answer:**

```bash
kafka-topics --create --topic my-topic --bootstrap-server localhost:9092 --partitions 3 --replication-factor 2
```

---

These questions will help you prepare for Kafka interviews and cover the foundational concepts along with practical examples. Let me know if you need advanced Kafka topics or hands-on examples!

Here’s how you can implement Apache Kafka in a Node.js application using the **KafkaJS** library, which is a popular and well-maintained Kafka client for Node.js.

---

### **1. Install Dependencies**

To start, you need to install the **kafkajs** package:

```bash
npm install kafkajs
```

---

### **2. Setting Up Kafka Broker Locally**

- Ensure Kafka is installed and running on your system.
- For local development, you can download and install Kafka from [Apache Kafka’s official site](https://kafka.apache.org/quickstart) or use Docker:

```bash
docker run -d --name zookeeper -p 2181:2181 zookeeper
docker run -d --name kafka -p 9092:9092 --env KAFKA_ZOOKEEPER_CONNECT=localhost:2181 --env KAFKA_ADVERTISED_LISTENERS=PLAINTEXT://localhost:9092 confluentinc/cp-kafka
```

---

### **3. Producer Implementation**

Here’s how you can create a Kafka producer to send messages to a Kafka topic.

```javascript
const { Kafka } = require("kafkajs");

// Initialize Kafka
const kafka = new Kafka({
	clientId: "my-app",
	brokers: ["localhost:9092"], // Replace with your broker addresses
});

// Create a producer
const producer = kafka.producer();

const produceMessages = async () => {
	await producer.connect();

	// Send a message to a topic
	const topic = "my-topic";
	const message = { value: "Hello Kafka!" };

	try {
		await producer.send({
			topic,
			messages: [message], // Array of messages
		});
		console.log("Message sent successfully");
	} catch (error) {
		console.error("Error in sending message:", error);
	} finally {
		await producer.disconnect();
	}
};

produceMessages();
```

---

### **4. Consumer Implementation**

Here’s how you can create a Kafka consumer to read messages from a topic.

```javascript
const { Kafka } = require("kafkajs");

// Initialize Kafka
const kafka = new Kafka({
	clientId: "my-app",
	brokers: ["localhost:9092"], // Replace with your broker addresses
});

// Create a consumer
const consumer = kafka.consumer({ groupId: "my-group" });

const consumeMessages = async () => {
	await consumer.connect();

	const topic = "my-topic";
	await consumer.subscribe({ topic, fromBeginning: true });

	console.log(`Subscribed to topic: ${topic}`);

	await consumer.run({
		eachMessage: async ({ topic, partition, message }) => {
			console.log(
				`Received message: ${message.value.toString()} from partition ${partition}`,
			);
		},
	});
};

consumeMessages();
```

---

### **5. Running Both Producer and Consumer**

1. Run the **Producer** script to send a message to the topic.
2. Run the **Consumer** script to read the message from the topic.

---

### **6. Handle Kafka Errors**

Always handle errors gracefully in both producers and consumers:

```javascript
producer.on("producer.crash", (error) => {
	console.error("Producer crashed:", error);
});

consumer.on("consumer.crash", (error) => {
	console.error("Consumer crashed:", error);
});
```

---

### **7. Example with Multiple Partitions**

You can create a topic with multiple partitions and send messages to specific partitions.

#### Create Topic with CLI:

```bash
kafka-topics --create --topic my-partitioned-topic --bootstrap-server localhost:9092 --partitions 3 --replication-factor 1
```

#### Producer Example:

```javascript
await producer.send({
	topic: "my-partitioned-topic",
	messages: [
		{ key: "key1", value: "Message for partition 1" },
		{ key: "key2", value: "Message for partition 2" },
	],
});
```

---

### **8. Kafka Configuration Tips**

- **Retries:** Configure retries for producer:

```javascript
const producer = kafka.producer({
	retry: {
		retries: 5,
	},
});
```

- **Compression:** Enable message compression:

```javascript
await producer.send({
	topic: "my-topic",
	messages: [{ value: "Compressed message" }],
	compression: 1, // Use CompressionTypes.GZIP
});
```

---

### **9. Using Kafka with Node.js Frameworks**

Integrate Kafka into popular frameworks like **Express.js** for APIs:

```javascript
const express = require("express");
const { Kafka } = require("kafkajs");

const kafka = new Kafka({ clientId: "api-app", brokers: ["localhost:9092"] });
const producer = kafka.producer();

const app = express();
app.use(express.json());

app.post("/produce", async (req, res) => {
	const { topic, message } = req.body;

	try {
		await producer.connect();
		await producer.send({ topic, messages: [{ value: message }] });
		res.status(200).send("Message produced successfully");
	} catch (error) {
		res.status(500).send("Error producing message");
	} finally {
		await producer.disconnect();
	}
});

app.listen(3000, () => {
	console.log("Server running on http://localhost:3000");
});
```

---

### **10. Kafka in Production**

- Use **SSL/TLS encryption** for secure communication.
- Enable **Kerberos or SASL authentication** for secure access.
- Monitor Kafka with **Confluent Control Center**, **Prometheus**, or **Grafana**.
- Use **Kafka Connect** for external integrations.

---

This setup is sufficient for building basic Kafka-based applications in Node.js. Let me know if you need assistance with advanced configurations or integrating Kafka Streams!
