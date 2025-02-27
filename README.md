In Node.js (or any web-based application using HTTP), status codes are derived from the HTTP protocol. Here’s a detailed list of all HTTP status codes categorized by their type:

---

## **1xx - Informational Responses**

These indicate that the request has been received and is being processed.

- **100 Continue** – The server received the initial request and the client should continue sending the rest.
- **101 Switching Protocols** – The server is switching protocols as requested by the client.
- **102 Processing** – The request is being processed, but no response is available yet (WebDAV).
- **103 Early Hints** – The server sends preliminary headers to improve performance.

---

## **2xx - Success Responses**

These indicate that the request was successfully received, understood, and accepted.

- **200 OK** – The request was successful.
- **201 Created** – A new resource has been created as a result of the request.
- **202 Accepted** – The request has been received but is still being processed.
- **203 Non-Authoritative Information** – The response is modified from a third-party source.
- **204 No Content** – The request was successful, but there is no response body.
- **205 Reset Content** – Instructs the client to reset its document view.
- **206 Partial Content** – Partial content is returned (used for range requests).
- **207 Multi-Status** – Multiple status codes are sent for different operations (WebDAV).
- **208 Already Reported** – A resource has already been reported in this request (WebDAV).
- **226 IM Used** – The server completed the request using instance manipulations.

---

## **3xx - Redirection Responses**

These indicate that the client must take additional action to complete the request.

- **300 Multiple Choices** – Multiple options are available for the requested resource.
- **301 Moved Permanently** – The requested resource has been permanently moved.
- **302 Found** – The resource is temporarily moved to a different URL.
- **303 See Other** – Redirects to a different resource, often used after a POST request.
- **304 Not Modified** – The resource has not been modified, so the cached version is used.
- **305 Use Proxy (Deprecated)** – The resource must be accessed through a proxy.
- **306 Unused (Reserved)** – This status code was used in previous versions but is no longer active.
- **307 Temporary Redirect** – The requested resource is temporarily redirected.
- **308 Permanent Redirect** – The resource is permanently moved but should use the same HTTP method.

---

## **4xx - Client Error Responses**

These indicate that the client made an error in the request.

- **400 Bad Request** – The request is malformed or contains invalid parameters.
- **401 Unauthorized** – Authentication is required but missing or incorrect.
- **402 Payment Required** – Reserved for future use (often seen in API rate-limiting cases).
- **403 Forbidden** – The client does not have permission to access the resource.
- **404 Not Found** – The requested resource does not exist.
- **405 Method Not Allowed** – The HTTP method used is not allowed for this resource.
- **406 Not Acceptable** – The server cannot return a response that meets the client’s requirements.
- **407 Proxy Authentication Required** – The client must authenticate with a proxy before making the request.
- **408 Request Timeout** – The server timed out waiting for the client’s request.
- **409 Conflict** – The request conflicts with the current state of the resource.
- **410 Gone** – The resource was previously available but is no longer available.
- **411 Length Required** – The request must include a valid `Content-Length` header.
- **412 Precondition Failed** – The client’s preconditions in headers failed.
- **413 Payload Too Large** – The request body is too large for the server to process.
- **414 URI Too Long** – The requested URL is too long.
- **415 Unsupported Media Type** – The media type of the request is unsupported.
- **416 Range Not Satisfiable** – The requested range is invalid.
- **417 Expectation Failed** – The expectation given in the request cannot be met.
- **418 I'm a Teapot** – A joke response from the 1998 April Fools’ RFC (RFC 2324).
- **421 Misdirected Request** – The request was sent to a server that cannot handle it.
- **422 Unprocessable Entity** – The request is well-formed but cannot be processed (WebDAV).
- **423 Locked** – The requested resource is locked (WebDAV).
- **424 Failed Dependency** – A dependent request failed (WebDAV).
- **425 Too Early** – The server is unwilling to process a request that might be replayed.
- **426 Upgrade Required** – The client must upgrade to a different protocol.
- **428 Precondition Required** – The server requires the request to have preconditions.
- **429 Too Many Requests** – The client has sent too many requests in a short time (rate-limiting).
- **431 Request Header Fields Too Large** – The request headers are too large for the server to process.
- **451 Unavailable For Legal Reasons** – The requested resource is unavailable due to legal restrictions.

---

## **5xx - Server Error Responses**

These indicate that the server encountered an error while processing the request.

- **500 Internal Server Error** – A generic error occurred on the server.
- **501 Not Implemented** – The server does not support the requested functionality.
- **502 Bad Gateway** – The server received an invalid response from an upstream server.
- **503 Service Unavailable** – The server is temporarily unable to handle the request.
- **504 Gateway Timeout** – The server did not receive a timely response from an upstream server.
- **505 HTTP Version Not Supported** – The requested HTTP version is not supported.
- **506 Variant Also Negotiates** – A server misconfiguration causes a circular reference.
- **507 Insufficient Storage** – The server has insufficient storage space to complete the request.
- **508 Loop Detected** – The server detected an infinite loop while processing the request.
- **510 Not Extended** – Additional extensions to the request are required.
- **511 Network Authentication Required** – The client must authenticate to gain network access.

---

## **How to Use HTTP Status Codes in Node.js**

In Node.js, status codes are typically used in responses when working with frameworks like **Express.js**:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.status(200).send("OK");
});

app.get("/not-found", (req, res) => {
	res.status(404).send("Not Found");
});

app.get("/server-error", (req, res) => {
	res.status(500).send("Internal Server Error");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
```

Would you like examples of handling specific status codes in a Node.js API? 🚀
