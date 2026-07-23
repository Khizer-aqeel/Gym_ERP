# Document Information

| Field              | Value                        |
| ------------------ | ---------------------------- |
| **Document ID**    | DOC-022                      |
| **Document Name**  | Attendance Management Module |
| **Project Name**   | Gym ERP                      |
| **Version**        | 1.0                          |
| **Status**         | Approved                     |
| **Project Owners** | Khizer & Ahad                |
| **Created Date**   | 23 July 2026                 |
| **Last Updated**   | 23 July 2026                 |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 23 July 2026 | Initial approved version. |

---

# 1. Purpose

The Attendance Management Module is responsible for recording, managing, and monitoring the daily attendance of gym members. It provides a secure, accurate, and efficient attendance system using fingerprint authentication as the primary method, while also supporting controlled manual attendance for exceptional situations.

The module is designed to minimize fraudulent attendance, improve operational efficiency, and provide complete attendance history for every member.

---

# 2. Objectives

The Attendance Management Module shall:

* Record attendance using fingerprint authentication.
* Support manual attendance as a backup method.
* Prevent duplicate attendance.
* Maintain complete attendance history.
* Display attendance activity for every member.
* Support attendance searching and filtering.
* Integrate with Dashboard, Members, Reports, and Settings modules.
* Maintain a complete audit log for attendance operations.

---

# 3. User Roles

Access to this module shall depend on user permissions.

## Owner

The Owner shall have full access to all attendance functions.

---

## Admin

The Admin shall have full attendance management permissions assigned by the Owner.

---

## Manager

The Manager may:

* View attendance records.
* Mark manual attendance.
* View attendance reports.
* Search attendance history.

---

## Receptionist

The Receptionist may:

* Monitor fingerprint check-ins.
* Mark manual attendance.
* Search attendance records.
* View member attendance history.

---

## Trainer

The Trainer shall have read-only access to the attendance records of assigned members.

Manual attendance shall not be permitted.

---

# 4. Attendance Methods

The system shall support two attendance methods.

## Primary Method

Fingerprint Authentication.

This shall be the default attendance method for all members.

---

## Secondary Method

Manual Attendance.

Manual attendance shall only be used when:

* Fingerprint scanner is unavailable.
* Fingerprint cannot be recognized.
* Hardware malfunction occurs.
* An authorized user manually records attendance.

---

# 5. Fingerprint Integration

The Attendance module shall use a Fingerprint Integration Layer.

Version 1.0 shall officially support:

* ZKTeco
* eSSL

The architecture shall allow additional fingerprint device drivers to be added in future versions without modifying the Attendance module.

---

# 6. Attendance Workflow

Fingerprint Attendance Workflow:

1. Member places finger on scanner.
2. Fingerprint scanner verifies identity.
3. Gym ERP receives the verified Member ID.
4. Membership status is validated.
5. Duplicate attendance is checked.
6. Attendance is recorded.
7. Reception Check-In Dashboard is updated automatically.
8. Attendance activity is written to the audit log.

If verification fails, the system shall display an appropriate message and shall not record attendance.

# 7. Reception Check-In Dashboard

The Reception Check-In Dashboard shall display attendance events in real time.

Whenever a member successfully marks attendance, the dashboard shall immediately display:

* Member ID
* Member Name
* Check-In Time
* Membership Status
* Membership Expiry Date
* Attendance Method (Fingerprint or Manual)

If the member's membership has expired, the dashboard shall clearly display a warning so the receptionist can take appropriate action.

The dashboard shall always display the most recent attendance event at the top.

---

# 8. Manual Attendance

Manual attendance shall only be available to authorized users.

Authorized Roles:

* Owner
* Admin
* Manager
* Receptionist

Trainers shall not be permitted to mark manual attendance.

Before saving manual attendance, the system shall require:

* Member Selection
* Attendance Date
* Attendance Time (Auto-filled by default but editable by authorized users)
* Reason for Manual Attendance

Every manual attendance record shall be written to the Attendance Audit Log.

---

# 9. Alternative Member Search

If fingerprint attendance cannot be used, the member may be searched using:

* Member ID
* Full Name
* Mobile Number

After selecting the correct member, authorized users may record manual attendance.

---

# 10. Attendance Records

The Attendance module shall display all attendance records in a searchable table.

Default columns:

* Attendance ID
* Member ID
* Member Name
* Attendance Date
* Check-In Time
* Attendance Method
* Recorded By
* Membership Status

The newest attendance records shall appear first.

---

# 11. Search

The Attendance module shall provide instant search.

Users shall be able to search by:

* Attendance ID
* Member ID
* Member Name
* Mobile Number
* Attendance Method

Search results shall update as the user types.

---

# 12. Filters

Users shall be able to filter attendance records using:

* Date
* Date Range
* Attendance Method
* Membership Status
* Recorded By

Multiple filters may be applied simultaneously.

A single action shall clear all active filters.

---

# 13. Attendance Activity Status

Attendance Activity Status shall be calculated automatically using the member's last attendance date.

Available statuses:

* Active (Visited within the last 14 days)
* Less Active (No visit for 15–29 days)
* Inactive (No visit for 30–59 days)
* Long Absent (No visit for 60 days or more)

This status shall be displayed in the Member Profile and shall also be available for reporting and filtering.

Attendance Activity Status shall not affect Membership Status.

---

# 14. Duplicate Attendance Prevention

The system shall prevent duplicate attendance.

Rules:

* A member may only have one attendance record per day.
* Fingerprint scans after a successful attendance record shall not create duplicate entries.
* Manual attendance shall not be allowed if attendance already exists for that date.
* Duplicate attempts shall be logged for auditing purposes.

---

# 15. Validation Rules

Before attendance is recorded, the system shall verify:

* Member exists.
* Membership is Active.
* No attendance has already been recorded for the current day.
* Fingerprint verification is successful (for fingerprint attendance).
* Manual attendance contains a valid reason.

If validation fails, attendance shall not be recorded and a clear message shall be displayed to the user.
# 16. Attendance Audit Log

The system shall maintain a permanent Attendance Audit Log.

Every attendance-related action shall be recorded automatically.

The audit log shall include:

* Audit ID
* Member ID
* Member Name
* Attendance Method
* Attendance Date
* Attendance Time
* Action Performed
* Performed By
* Reason (for manual attendance or overrides)

The audit log shall be read-only and shall not be editable by any user.

---

# 17. Business Rules

The Attendance Management Module shall follow these business rules:

* Attendance shall primarily be recorded using fingerprint authentication.
* Version 1.0 shall officially support ZKTeco and eSSL fingerprint devices.
* Manual attendance shall only be available to authorized users.
* Every attendance record shall be linked to an existing member.
* Attendance shall not be recorded more than once for the same member on the same day.
* Attendance Activity Status shall be updated automatically after every successful attendance.
* Every manual attendance entry shall be stored in the Attendance Audit Log.
* Attendance history shall never be permanently deleted.

---

# 18. Performance Requirements

The Attendance module shall:

* Process fingerprint attendance with minimal delay.
* Display real-time attendance updates on the Reception Check-In Dashboard.
* Search attendance records instantly.
* Filter records efficiently.
* Support years of attendance history without noticeable performance degradation.

---

# 19. Error Handling

If attendance cannot be recorded, the system shall display a clear and user-friendly message.

Examples include:

* Fingerprint not recognized.
* Member not found.
* Membership expired.
* Duplicate attendance detected.
* Fingerprint device disconnected.
* Database connection unavailable.

The system shall record technical details in the application log while preventing application crashes.

---

# 20. Attendance Reports

The Attendance module shall support attendance reporting.

Reports shall include:

* Daily Attendance
* Weekly Attendance
* Monthly Attendance
* Attendance by Member
* Attendance by Date Range
* Members with No Attendance
* Attendance Activity Status Summary

Reports shall support export to:

* PDF
* Excel (XLSX)
* CSV

---

# 21. Member Retention Dashboard

The Attendance module shall automatically generate retention lists to help staff identify members who may require follow-up.

Default categories:

* Members absent for 15–29 days (Less Active)
* Members absent for 30–59 days (Inactive)
* Members absent for 60 or more days (Long Absent)

Each category shall display:

* Member ID
* Member Name
* Mobile Number
* Last Attendance Date
* Current Membership Status
* Attendance Activity Status

These lists shall also be available from the Dashboard and Reports modules.

---

# 22. Future Enhancements

The Attendance Management Module shall support future features including:

* Face Recognition Attendance
* QR Code Attendance
* NFC Card Attendance
* Mobile Application Check-In
* Multi-Branch Attendance Synchronization
* Attendance Heat Maps
* Advanced Attendance Analytics

The module architecture shall support these enhancements without major redesign.

---

# 23. Acceptance Criteria

The Attendance Management Module shall be considered complete when:

* Fingerprint attendance functions correctly with supported devices.
* Manual attendance follows role-based permissions.
* Duplicate attendance prevention functions correctly.
* Reception Check-In Dashboard updates in real time.
* Attendance Activity Status is calculated accurately.
* Audit logs record all attendance actions.
* Search and filters function correctly.
* Reports generate accurate attendance information.
* Export functionality works as expected.
* All business rules are enforced.

---

# 24. Conclusion

The Attendance Management Module provides a secure, reliable, and efficient solution for recording and monitoring member attendance. By combining fingerprint authentication, controlled manual attendance, attendance activity analysis, retention tracking, and comprehensive reporting, it delivers a professional-grade attendance system suitable for commercial gym operations while remaining scalable for future enhancements.
