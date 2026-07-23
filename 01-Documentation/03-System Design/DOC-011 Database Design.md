# Document Information

| Field              | Value           |
| ------------------ | --------------- |
| **Document ID**    | DOC-011         |
| **Document Name**  | Database Design |
| **Project Name**   | Gym ERP         |
| **Version**        | 1.0             |
| **Status**         | Approved        |
| **Project Owners** | Khizer & Ahad   |
| **Created Date**   | 22 July 2026    |
| **Last Updated**   | 22 July 2026    |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 22 July 2026 | Initial approved version. |

---

# 1. Purpose

This document defines the logical database design for Gym ERP Version 1.0. The database shall be normalized, scalable, and maintainable.

---

# 2. Design Principles

The database shall:

* Eliminate unnecessary data duplication.
* Maintain referential integrity.
* Support future expansion.
* Optimize data retrieval.
* Preserve historical records.
* Use primary and foreign keys appropriately.

---

# 3. Core Tables

The system shall include, at minimum, the following tables:

## Authentication

* Users
* Roles
* Permissions
* RolePermissions
* UserSessions

---

## Members

* Members
* MemberAttendance
* MemberMemberships
* MemberPayments
* MemberDietPlans
* MemberNotes

---

## Trainers

* Trainers
* TrainerSpecializations

---

## Membership

* MembershipPlans

---

## Equipment

* Equipment
* EquipmentCategories
* EquipmentMaintenance

---

## Diet Plans

* DietPlans

---

## Finance

* Payments
* Invoices
* Receipts

---

## Reports

Reports shall be generated dynamically from operational data and shall not require dedicated database tables unless future optimization demands it.

---

## Settings

* GymSettings
* ApplicationSettings

---

## System

* AuditLogs
* ActivityLogs
* ErrorLogs

---

# 4. Primary Key Strategy

Every table shall have a unique primary key.

Examples:

* MemberID
* TrainerID
* PaymentID
* EquipmentID
* DietPlanID
* InvoiceID

Primary keys shall never be reused.

---

# 5. Foreign Key Relationships

The database shall enforce relationships between related tables to maintain data consistency.

Examples include:

* MemberAttendance → Members
* MemberPayments → Members
* MemberMemberships → Members
* MemberDietPlans → Members
* EquipmentMaintenance → Equipment
* Payments → MembershipPlans (where applicable)

---

# 6. Data Integrity

The system shall:

* Prevent orphan records.
* Enforce required relationships.
* Validate unique fields where appropriate.
* Preserve historical data.

---

# 7. Future Expansion

The database shall support future additions such as:

* Multi-branch operations
* Mobile applications
* Online portals
* Cloud synchronization
* Additional modules

These enhancements shall not require redesign of the existing schema.

---

# 8. Conclusion

This database design provides the structural foundation for Gym ERP and shall guide all future database implementation and optimization activities.
