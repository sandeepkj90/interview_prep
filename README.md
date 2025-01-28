To implement S3 bucket operations in a Node.js application, you can use the **AWS SDK for JavaScript**. Below is a step-by-step guide with examples to perform common S3 bucket operations:

---

### **Step 1: Install AWS SDK**
Install the AWS SDK for Node.js using npm or yarn.

```bash
npm install aws-sdk
```

---

### **Step 2: Configure AWS SDK**
Set up your AWS credentials and region. You can use the AWS Management Console, environment variables, or a credentials file.

#### **Example Configuration:**
```javascript
const AWS = require('aws-sdk');

// Configure AWS SDK
AWS.config.update({
  accessKeyId: 'your-access-key-id',      // Replace with your Access Key
  secretAccessKey: 'your-secret-access-key',  // Replace with your Secret Key
  region: 'us-east-1'                    // Replace with your AWS region
});

// Create an S3 instance
const s3 = new AWS.S3();
```

---

### **Step 3: Implement Bucket Operations**

#### **1. Create a Bucket**
```javascript
const createBucket = async (bucketName) => {
  const params = {
    Bucket: bucketName,
  };
  
  try {
    const result = await s3.createBucket(params).promise();
    console.log('Bucket created successfully', result);
  } catch (error) {
    console.error('Error creating bucket:', error);
  }
};

// Example usage
createBucket('my-new-s3-bucket');
```

---

#### **2. List All Buckets**
```javascript
const listBuckets = async () => {
  try {
    const result = await s3.listBuckets().promise();
    console.log('Buckets:', result.Buckets);
  } catch (error) {
    console.error('Error listing buckets:', error);
  }
};

// Example usage
listBuckets();
```

---

#### **3. Upload a File**
```javascript
const fs = require('fs');

const uploadFile = async (bucketName, filePath, key) => {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: key, // File name in S3
    Body: fileContent,
  };

  try {
    const result = await s3.upload(params).promise();
    console.log('File uploaded successfully', result.Location);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};

// Example usage
uploadFile('my-new-s3-bucket', './example.txt', 'example.txt');
```

---

#### **4. Download a File**
```javascript
const downloadFile = async (bucketName, key, downloadPath) => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  try {
    const result = await s3.getObject(params).promise();
    fs.writeFileSync(downloadPath, result.Body);
    console.log('File downloaded successfully');
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};

// Example usage
downloadFile('my-new-s3-bucket', 'example.txt', './downloaded-example.txt');
```

---

#### **5. Delete a File**
```javascript
const deleteFile = async (bucketName, key) => {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  try {
    await s3.deleteObject(params).promise();
    console.log('File deleted successfully');
  } catch (error) {
    console.error('Error deleting file:', error);
  }
};

// Example usage
deleteFile('my-new-s3-bucket', 'example.txt');
```

---

#### **6. Delete a Bucket**
**Note:** You can only delete an empty bucket.

```javascript
const deleteBucket = async (bucketName) => {
  const params = {
    Bucket: bucketName,
  };

  try {
    await s3.deleteBucket(params).promise();
    console.log('Bucket deleted successfully');
  } catch (error) {
    console.error('Error deleting bucket:', error);
  }
};

// Example usage
deleteBucket('my-new-s3-bucket');
```

---

#### **7. Generate a Pre-Signed URL**
```javascript
const generatePresignedUrl = async (bucketName, key, expiresInSeconds) => {
  const params = {
    Bucket: bucketName,
    Key: key,
    Expires: expiresInSeconds,
  };

  try {
    const url = s3.getSignedUrl('getObject', params);
    console.log('Pre-signed URL:', url);
  } catch (error) {
    console.error('Error generating pre-signed URL:', error);
  }
};

// Example usage
generatePresignedUrl('my-new-s3-bucket', 'example.txt', 3600); // URL valid for 1 hour
```

---

### **Step 4: Run the Application**
Save your code in a `.js` file and run it using Node.js.

```bash
node your-script.js
```

---

### **Security Best Practices**
- Avoid hardcoding credentials; use environment variables or IAM roles.
- Use S3 bucket policies and IAM policies for fine-grained access control.
- Encrypt sensitive data using server-side or client-side encryption.
- Monitor and log bucket activities using AWS CloudTrail or S3 Access Logs.

By using the above examples, you can easily implement and manage S3 bucket operations in a Node.js application.


Accessing multiple S3 buckets in a Node.js application involves the same steps as accessing a single S3 bucket, but you handle each bucket by specifying its name explicitly in the API calls. Here's how you can work with multiple buckets:

---

### **Step 1: Configure AWS SDK**
Ensure you have the AWS SDK installed and configured.

```bash
npm install aws-sdk
```

Set up the AWS SDK:

```javascript
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'your-access-key-id', // Replace with your AWS Access Key
  secretAccessKey: 'your-secret-access-key', // Replace with your AWS Secret Key
  region: 'us-east-1', // Replace with your AWS region
});

const s3 = new AWS.S3();
```

---

### **Step 2: Access Multiple Buckets**

#### **1. List Objects in Multiple Buckets**
You can iterate over an array of bucket names and retrieve the data.

```javascript
const listObjectsInBuckets = async (bucketNames) => {
  for (const bucketName of bucketNames) {
    const params = {
      Bucket: bucketName,
    };

    try {
      const result = await s3.listObjectsV2(params).promise();
      console.log(`Objects in bucket "${bucketName}":`, result.Contents);
    } catch (error) {
      console.error(`Error listing objects in bucket "${bucketName}":`, error);
    }
  }
};

// Example usage
const buckets = ['bucket1', 'bucket2', 'bucket3'];
listObjectsInBuckets(buckets);
```

---

#### **2. Upload Files to Different Buckets**
You can specify the target bucket for each file dynamically.

```javascript
const uploadFileToBuckets = async (bucketFiles) => {
  for (const { bucketName, filePath, key } of bucketFiles) {
    const fileContent = require('fs').readFileSync(filePath);

    const params = {
      Bucket: bucketName,
      Key: key,
      Body: fileContent,
    };

    try {
      const result = await s3.upload(params).promise();
      console.log(`File uploaded to bucket "${bucketName}":`, result.Location);
    } catch (error) {
      console.error(`Error uploading file to bucket "${bucketName}":`, error);
    }
  }
};

// Example usage
const filesToUpload = [
  { bucketName: 'bucket1', filePath: './file1.txt', key: 'file1.txt' },
  { bucketName: 'bucket2', filePath: './file2.txt', key: 'file2.txt' },
];
uploadFileToBuckets(filesToUpload);
```

---

#### **3. Download Files from Multiple Buckets**
Specify the bucket and object key for each file.

```javascript
const downloadFilesFromBuckets = async (bucketFiles) => {
  for (const { bucketName, key, downloadPath } of bucketFiles) {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    try {
      const result = await s3.getObject(params).promise();
      require('fs').writeFileSync(downloadPath, result.Body);
      console.log(`File downloaded from bucket "${bucketName}" to "${downloadPath}"`);
    } catch (error) {
      console.error(`Error downloading file from bucket "${bucketName}":`, error);
    }
  }
};

// Example usage
const filesToDownload = [
  { bucketName: 'bucket1', key: 'file1.txt', downloadPath: './download1.txt' },
  { bucketName: 'bucket2', key: 'file2.txt', downloadPath: './download2.txt' },
];
downloadFilesFromBuckets(filesToDownload);
```

---

#### **4. Delete Files from Multiple Buckets**
Delete specific files in different buckets.

```javascript
const deleteFilesFromBuckets = async (bucketFiles) => {
  for (const { bucketName, key } of bucketFiles) {
    const params = {
      Bucket: bucketName,
      Key: key,
    };

    try {
      await s3.deleteObject(params).promise();
      console.log(`File "${key}" deleted from bucket "${bucketName}"`);
    } catch (error) {
      console.error(`Error deleting file from bucket "${bucketName}":`, error);
    }
  }
};

// Example usage
const filesToDelete = [
  { bucketName: 'bucket1', key: 'file1.txt' },
  { bucketName: 'bucket2', key: 'file2.txt' },
];
deleteFilesFromBuckets(filesToDelete);
```

---

### **Step 3: Handle Dynamic Buckets**
If the bucket names are dynamically determined (e.g., fetched from a database), retrieve the bucket list first and loop through it.

```javascript
const processBucketsDynamically = async () => {
  try {
    const bucketList = await s3.listBuckets().promise();
    const bucketNames = bucketList.Buckets.map(bucket => bucket.Name);

    for (const bucketName of bucketNames) {
      console.log(`Processing bucket: ${bucketName}`);
      // Perform operations like listing, uploading, etc.
      const objects = await s3.listObjectsV2({ Bucket: bucketName }).promise();
      console.log(`Objects in bucket "${bucketName}":`, objects.Contents);
    }
  } catch (error) {
    console.error('Error processing buckets dynamically:', error);
  }
};

processBucketsDynamically();
```

---

### **Security Considerations**
- **Access Control:** Ensure IAM roles or policies grant permission to access the required buckets.
- **Error Handling:** Handle errors for buckets or objects that don’t exist or lack permissions.
- **Environment Variables:** Avoid hardcoding credentials. Use `process.env` to load them securely.

By following the above methods, you can easily handle multiple S3 buckets in a Node.js application.