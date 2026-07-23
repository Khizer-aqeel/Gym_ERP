# Document Information

| Field              | Value                    |
| ------------------ | ------------------------ |
| **Document ID**    | DOC-009                  |
| **Document Name**  | User Roles & Permissions |
| **Project Name**   | Gym ERP                  |
| **Version**        | 1.0                      |
| **Status**         | Approved                 |
| **Project Owners** | Khizer & Ahad            |
| **Created Date**   | 22 July 2026             |
| **Last Updated**   | 22 July 2026             |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 22 July 2026 | Initial approved version. |

---

# 1. Purpose

This document defines the user roles and permission model for Gym ERP Version 1.0.

---

# 2. User Roles

The system shall support the following default user roles:

* Owner
* Manager
* Receptionist
* Trainer

Future versions may introduce additional roles.

---

# 3. Owner

The Owner shall have unrestricted access to all modules and settings.

Permissions include:

* Dashboard
* Member Management
* Trainer Management
* Attendance
* Membership Plans
* Payments
* Equipment
* Diet Plans
* Reports
* Settings
* User Management
* Backup & Restore
* Audit Logs

---

# 4. Manager

The Manager shall have access to operational modules as assigned by the Owner.

The Owner shall be able to enable or disable individual permissions.

---

# 5. Receptionist

The Receptionist may be granted access to:

* Dashboard
* Member Registration
* Member Search
* Attendance
* Membership Renewals
* Payments
* Invoice Printing
* Receipt Printing

The Receptionist shall not have access to system settings unless explicitly permitted.

---

# 6. Trainer

The Trainer may be granted access to:

* Assigned Members
* Member Profiles
* Assigned Diet Plans
* Attendance View (optional)

The Trainer shall not have access to financial information unless explicitly permitted.

---

# 7. Permission Management

The system shall:

* Allow the Owner to customize permissions.
* Support module-level permissions.
* Support view, create, edit, and delete permissions where applicable.
* Apply permission changes immediately.

---

# 8. Authentication

The system shall:

* Require every user to log in.
* Authenticate users before granting access.
* Allow secure password changes.
* Support user account activation and deactivation.

---

# 9. Authorization

The system shall:

* Restrict access based on assigned permissions.
* Prevent unauthorized actions.
* Display only authorized modules in the navigation menu.

---

# 10. Future Expansion

The permission system shall be designed to support additional user roles without requiring major architectural changes.

---

# 11. Conclusion

The role-based permission model defined in this document shall ensure secure and controlled access to Gym ERP while providing flexibility for different gym operations.
