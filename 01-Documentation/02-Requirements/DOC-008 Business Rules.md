# Document Information

| Field              | Value          |
| ------------------ | -------------- |
| **Document ID**    | DOC-008        |
| **Document Name**  | Business Rules |
| **Project Name**   | Gym ERP        |
| **Version**        | 1.0            |
| **Status**         | Approved       |
| **Project Owners** | Khizer & Ahad  |
| **Created Date**   | 22 July 2026   |
| **Last Updated**   | 22 July 2026   |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 22 July 2026 | Initial approved version. |

---

# 1. Purpose

This document defines the business rules that govern how Gym ERP shall operate. These rules ensure consistent behavior across all modules.

---

# 2. Member Rules

* Every member shall have a system-generated unique Member ID.
* A member shall not be registered more than once using the same mobile number.
* Address shall be optional during registration.
* Only essential information shall be required during registration.
* A member may have only one active membership at a time.
* Members may be marked as Active or Inactive without deleting their records.
* Historical member records shall never be permanently deleted.

---

# 3. Trainer Rules

* Every trainer shall have a system-generated unique Trainer ID.
* Years of Experience shall be a mandatory field.
* Trainer Specialization shall be selectable from predefined options and support custom entries.
* Trainers may be marked as Active or Inactive.
* Trainer records shall not be permanently deleted.

---

# 4. Attendance Rules

* A member may check in only once per day.
* Attendance shall be linked to the member's unique Member ID.
* Attendance history shall remain permanently available unless explicitly archived.

---

# 5. Membership Rules

* Membership plans shall be fully customizable.
* The system shall support unlimited membership plans.
* Membership duration and pricing shall be configurable.
* Expired memberships shall remain in history.
* Membership renewals shall create a new history record.

---

# 6. Payment Rules

* Every payment shall generate a unique receipt number.
* Every payment shall be linked to a member.
* Payment history shall remain permanently available.
* Deleted payments shall not be permitted.

---

# 7. Equipment Rules

* The system shall include a built-in equipment library.
* Gym owners may select equipment from the library.
* Gym owners may create custom equipment.
* Equipment categories shall be customizable.
* Equipment maintenance history shall be retained.

---

# 8. Diet Plan Rules

* The system shall include built-in diet plans.
* Custom diet plans shall be supported.
* Diet plans shall be assigned after member registration.
* A member may have one active diet plan at a time.

---

# 9. Reports

* Reports shall always use the latest available data.
* Reports shall support printing.
* Reports shall support exporting.

---

# 10. User Roles

* Every user shall be assigned a role.
* Permissions shall be controlled by role.
* The Gym Owner shall have unrestricted access.
* Other users shall access only authorized modules.

---

# 11. Audit Rules

* Important administrative actions shall be logged.
* Login history shall be recorded.
* Changes to critical business information shall be traceable.

---

# 12. General Rules

* The system shall use free and open-source technologies.
* The interface shall remain simple and professional.
* The software shall be suitable for commercial deployment.
* Future modules shall integrate without major architectural changes.

---

# 13. Conclusion

These business rules define the operational behavior of Gym ERP Version 1.0 and shall be followed throughout design, development, testing, and maintenance.
