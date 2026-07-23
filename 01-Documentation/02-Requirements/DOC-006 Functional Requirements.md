# Document Information

| Field              | Value                   |
| ------------------ | ----------------------- |
| **Document ID**    | DOC-006                 |
| **Document Name**  | Functional Requirements |
| **Project Name**   | Gym ERP                 |
| **Version**        | 1.0                     |
| **Status**         | Approved                |
| **Project Owners** | Khizer & Ahad           |
| **Created Date**   | 22 July 2026            |
| **Last Updated**   | 22 July 2026            |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 22 July 2026 | Initial approved version. |

---

# 1. Purpose

This document defines the functional requirements of Gym ERP Version 1.0. Each requirement describes a capability that the system shall provide.

---

# 2. General Functional Requirements

The system shall:

* Authenticate users before granting access.
* Support role-based access control.
* Store all business data in a centralized database.
* Generate unique IDs where required.
* Validate user input before saving data.
* Maintain historical records.
* Support searching, filtering, and sorting of records.
* Record timestamps for important actions.
* Prevent duplicate records where applicable.

---

# 3. Dashboard

The system shall:

* Display business statistics.
* Display today's attendance.
* Display active members.
* Display memberships nearing expiry.
* Display pending payments.
* Display recent activities.
* Provide quick navigation to major modules.

---

# 4. Member Management

The system shall:

* Register new members.
* Generate a unique Member ID.
* Store member information.
* Edit member information.
* Search members.
* View member profiles.
* View attendance history.
* View payment history.
* View membership history.
* Assign diet plans.
* Add notes.
* Activate or deactivate members.

---

# 5. Trainer Management

The system shall:

* Register trainers.
* Generate unique Trainer IDs.
* Store trainer information.
* Record years of experience (mandatory).
* Record specialization.
* Edit trainer profiles.
* Search trainers.
* Activate or deactivate trainers.

---

# 6. Attendance Management

The system shall:

* Record member check-ins.
* Prevent duplicate check-ins for the same day.
* Maintain attendance history.
* Display attendance reports.
* Allow attendance search and filtering.

---

# 7. Membership Plans

The system shall:

* Create unlimited membership plans.
* Edit membership plans.
* Delete membership plans.
* Activate or deactivate plans.
* Assign plans to members.
* Renew memberships.
* Track expiry dates.

---

# 8. Payment Management

The system shall:

* Record payments.
* Generate invoices.
* Generate receipts.
* Maintain payment history.
* Record payment methods.
* Track pending payments.

---

# 9. Equipment Management

The system shall:

* Provide a built-in equipment library.
* Allow selection of equipment from the library.
* Allow creation of custom equipment.
* Categorize equipment.
* Record maintenance history.
* Record equipment status.

---

# 10. Diet Plan Management

The system shall:

* Provide built-in diet plans.
* Allow custom diet plans.
* Edit diet plans.
* Delete diet plans.
* Assign diet plans to members.

---

# 11. Reports

The system shall generate:

* Member reports.
* Attendance reports.
* Revenue reports.
* Payment reports.
* Membership reports.
* Equipment reports.

Reports shall support printing and exporting.

---

# 12. Settings

The system shall allow configuration of:

* Gym information.
* Logo.
* Contact information.
* Business hours.
* Theme settings.
* Membership preferences.
* System preferences.

---

# 13. Notifications

The system shall:

* Notify about expiring memberships.
* Notify about pending payments.
* Notify about upcoming equipment maintenance.

---

# 14. Audit & Logging

The system shall:

* Record important system events.
* Record login history.
* Record major administrative actions.

---

# 15. Conclusion

All future development shall comply with the functional requirements defined in this document.
