## 🏥 **Clinic Management System (CMS)**

### 🎯 Purpose:

To help doctors manage their clinic efficiently — appointments, patient records, prescriptions, billing, etc.

---

### 👥 **User Roles:**

1. **Admin**

   - Manage doctors and staff
   - Configure clinic timings and system settings

2. **Doctor**

   - View and manage appointments
   - Access and update patient records
   - Generate prescriptions
   - View analytics (e.g. number of patients per day/week)

3. **Receptionist**

   - Book appointments
   - Register new patients
   - Generate bills and payment receipts

4. **Patient**
   - Book and view appointments
   - View prescriptions and visit history
   - Update profile details

---

### 🛠️ **Core Features (with CRUD Operations):**

| Feature               | Description                                 | CRUD                     |
| --------------------- | ------------------------------------------- | ------------------------ |
| Patient Records       | Add, view, edit, delete patient details     | ✅                       |
| Appointments          | Schedule, update, or cancel appointments    | ✅                       |
| Prescription Module   | Create, read, edit prescriptions            | ✅                       |
| Billing & Invoices    | Create and view bills, print invoices       | ✅                       |
| Doctor's Schedule     | Set or edit available slots                 | ✅                       |
| Notifications         | Send reminders for appointments, follow-ups | (Optional, nice-to-have) |
| Role-based Dashboards | Separate views for each user type           | ✅                       |

---

### 🧠 Tech Stack:

- **Frontend**: Javascript, HTML, CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose for ODM)
- **Authentication**: JWT + Role-Based Middleware
- **File Uploads**: Multer or local (for reports, documents)

---

### 🚀 Bonus Ideas:

- Export prescription as PDF
- SMS or email reminders for appointments
- Patient health analytics
