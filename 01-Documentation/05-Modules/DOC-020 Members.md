# Document Information

| Field              | Value                    |
| ------------------ | ------------------------ |
| **Document ID**    | DOC-020                  |
| **Document Name**  | Member Management Module |
| **Project Name**   | Gym ERP                  |
| **Version**        | 1.0                      |
| **Status**         | Approved                 |
| **Project Owners** | Khizer & Ahad            |
| **Created Date**   | 23 July 2026             |
| **Last Updated**   | 23 July 2026             |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 23 July 2026 | Initial approved version. |

---

# 1. Purpose

The Member Management Module is the core module of Gym ERP. It is responsible for managing the complete lifecycle of every gym member, from registration to membership renewal, attendance tracking, payment history, and profile management.

Every member shall have a unique identity within the system, allowing authorized users to quickly access all relevant information from a single location.

The module shall prioritize speed, simplicity, and ease of use while maintaining accurate records.

---

# 2. Objectives

The Member Management Module shall:

* Register new members.
* Maintain complete member records.
* Generate a unique Member ID for every member.
* Allow quick searching and filtering of members.
* Track membership status.
* Display attendance history.
* Display payment history.
* Support profile editing.
* Support member deactivation without deleting historical data.
* Integrate with Attendance, Payments, Reports, and Dashboard modules.

---

# 3. User Roles

Access to this module shall depend on user permissions.

## Owner

The Owner shall have full access, including:

* Register Members
* Edit Members
* Delete Members
* Restore Members
* View Complete History
* Export Data

---

## Manager

The Manager may:

* Register Members
* Edit Members
* View Member History
* Renew Memberships

Deletion permissions may be restricted.

---

## Receptionist

The Receptionist shall normally be allowed to:

* Register Members
* Update Basic Information
* Record Payments
* View Attendance
* Search Members

Administrative functions may be restricted.

---

## Trainer

The Trainer shall have read-only access to assigned members, including:

* Member Name
* Contact Number
* Membership Status
* Attendance History
* Assigned Diet Plan

Financial information shall not be visible.

---

# 4. Member Registration

Every member shall be registered using a standardized registration form.

The registration process shall be quick and require only essential information.

Required fields:

* Full Name
* Mobile Number
* Gender
* Date of Birth
* Joining Date
* Membership Plan

Optional fields:

* Email Address
* Address
* Emergency Contact Name
* Emergency Contact Number
* Notes

The system shall automatically generate:

* Member ID
* Registration Date
* Member Status

The user shall not manually enter the Member ID.

---

# 5. Member ID

Every registered member shall receive a unique Member ID.

Requirements:

* Automatically generated.
* Never duplicated.
* Never reused, even if a member is deleted.
* Permanent throughout the member's lifetime.

The Member ID shall be the primary identifier used throughout Gym ERP.

---

# 6. Member Status

Each member shall have one of the following statuses:

* Active
* Expired
* Suspended
* Inactive

The status shall update automatically whenever possible based on business rules, while still allowing authorized users to make manual changes when required.

---

# 7. Member Profile

Selecting a member from the Members list shall open the Member Profile.

The profile shall serve as the central location for all information related to that member.

The profile shall include:

* Basic Information
* Membership Details
* Attendance History
* Payment History
* Notes
* Activity Log

The profile shall be organized using tabs for easy navigation.


# 8. Members List

The Members List shall display all registered members in a professional, searchable, and sortable table.

By default, the newest registered members shall appear at the top of the list.

The table shall support thousands of records while maintaining smooth performance.

---

# 9. Members Table Columns

The default columns shall include:

* Member ID
* Full Name
* Mobile Number
* Gender
* Membership Plan
* Joining Date
* Membership Expiry Date
* Membership Status
* Assigned Trainer
* Last Attendance
* Actions

The Owner may choose which columns are visible.

---

# 10. Search

A global search bar shall be available above the Members table.

The search shall support searching by:

* Member ID
* Full Name
* Mobile Number
* Membership Plan
* Assigned Trainer

Search results shall update instantly as the user types.

---

# 11. Filters

Users shall be able to filter members using one or more of the following filters:

* Membership Status
* Membership Plan
* Gender
* Assigned Trainer
* Joining Date
* Membership Expiry Date

Multiple filters shall be usable simultaneously.

A single button shall reset all filters.

---

# 12. Sorting

The Members table shall allow sorting by:

* Member ID
* Name
* Joining Date
* Membership Expiry Date
* Membership Status

Users shall be able to sort in both ascending and descending order.

---

# 13. Member Profile Layout

Opening a member shall display a dedicated profile page.

The profile shall be divided into the following tabs:

### Basic Information

Displays:

* Member ID
* Full Name
* Mobile Number
* Gender
* Date of Birth
* Email Address
* Address
* Emergency Contact
* Registration Date

---

### Membership

Displays:

* Current Membership Plan
* Membership Start Date
* Membership Expiry Date
* Membership Status
* Renewal History

---

### Attendance

Displays:

* Total Attendance
* Attendance Calendar
* Monthly Attendance Summary
* Attendance History

---

### Payments

Displays:

* Payment History
* Receipt Numbers
* Amount Paid
* Payment Method
* Payment Dates

---

### Notes

Displays notes added by authorized staff.

Each note shall display:

* Date
* Time
* User
* Note Content

Notes shall never be permanently deleted.

---

### Activity Timeline

The timeline shall record major activities including:

* Registration
* Membership Renewal
* Profile Updates
* Payment Records
* Status Changes

Activities shall be displayed in reverse chronological order.

---

# 14. Edit Member

Authorized users shall be able to edit member information.

The system shall maintain an activity log whenever important information is changed.

The Member ID shall never be editable.

---

# 15. Membership Renewal

Membership renewal shall be accessible directly from the Member Profile.

During renewal, the user shall select:

* Membership Plan
* Start Date
* Payment Details

The system shall automatically calculate the new expiry date according to the selected plan.

Every renewal shall be added to the member's renewal history.

---

# 16. Member Notes

Staff members shall be able to add notes to a member's profile.

Examples:

* Requested plan change.
* Payment reminder given.
* Special instructions.
* Temporary suspension reason.

Each note shall automatically store:

* Date
* Time
* User Name

Notes shall remain part of the permanent member record.

---

# 17. Quick Actions

The Member Profile shall provide one-click access to the following actions:

* Edit Member
* Renew Membership
* Record Payment
* Mark Attendance
* Print Member Profile
* View Payment History

The availability of each action shall depend on the user's permissions.

# 18. Validation Rules

The system shall validate all member information before saving.

Validation requirements:

## Full Name

* Required.
* Minimum 3 characters.
* Maximum 100 characters.

---

## Mobile Number

* Required.
* Must contain only valid digits.
* Duplicate mobile numbers shall not be allowed for active members.

---

## Date of Birth

* Required.
* Cannot be a future date.

---

## Joining Date

* Required.
* Cannot be a future date.

---

## Membership Plan

* Required.
* Must exist in the Membership Plans module.

---

## Email Address

* Optional.
* If provided, it shall be in a valid email format.

---

# 19. Duplicate Detection

To reduce accidental duplicate registrations, the system shall automatically check for existing members.

The system shall compare:

* Full Name
* Mobile Number

If a potential duplicate is found, the user shall receive a warning before continuing.

The final decision to continue or cancel the registration shall remain with the authorized user.

---

# 20. Member Registration Workflow

The standard registration workflow shall be:

1. Open Members Module.
2. Click **Register Member**.
3. Complete the registration form.
4. Validate all required fields.
5. Generate Member ID automatically.
6. Save the member record.
7. Open the newly created Member Profile.

If validation fails, the system shall highlight the affected fields and prevent submission until corrected.

---

# 21. Delete & Restore

To preserve historical records, member data shall not be permanently deleted during normal operation.

When a member is deleted:

* The record shall be marked as inactive.
* Attendance history shall remain.
* Payment history shall remain.
* Membership history shall remain.
* Activity logs shall remain.

Authorized users may restore an inactive member at any time.

---

# 22. Export Options

Authorized users shall be able to export member data.

Supported export formats:

* PDF
* Excel (XLSX)
* CSV

The export shall respect any active search or filter settings.

---

# 23. Performance Requirements

The Members module shall:

* Open quickly.
* Search results instantly.
* Filter records efficiently.
* Support at least 10,000 member records without noticeable performance degradation.
* Load individual member profiles promptly.

---

# 24. Error Handling

If an operation fails:

* Display a clear, user-friendly error message.
* Preserve unsaved user input where possible.
* Record technical details in the system log.
* Prevent application crashes.

The system shall always guide the user toward resolving the issue.

---

# 25. Business Rules

The following business rules shall apply:

* Every member shall have a unique Member ID.
* Member IDs shall never be reused.
* A member may have only one active membership at a time.
* Membership status shall update automatically based on expiry dates.
* Attendance may only be recorded for members with an Active membership.
* All renewals shall be recorded in the member's history.
* Payment records shall remain permanently linked to the member.
* Deactivated members shall remain searchable when appropriate permissions are granted.

---

# 26. Future Enhancements

The Member Management module shall support future features including:

* Member profile photo.
* QR code generation.
* Barcode-based identification.
* Digital membership card.
* Biometric attendance integration.
* Online member portal.
* Mobile application integration.
* SMS and email notifications.
* Multi-branch membership support.

The module architecture shall allow these enhancements without major redesign.

---

# 27. Acceptance Criteria

The Member Management module shall be considered complete when:

* Members can be registered successfully.
* Member IDs are generated automatically.
* Validation rules function correctly.
* Search and filters work accurately.
* Member profiles display complete information.
* Membership renewal functions correctly.
* Payment and attendance history are linked properly.
* Delete and restore functions preserve historical data.
* Export functionality works as expected.
* Role-based permissions are enforced.

---

# 28. Conclusion

The Member Management Module is the foundation of Gym ERP. It shall provide a fast, reliable, and user-friendly experience for managing member information while maintaining complete historical records, enforcing business rules, and supporting future expansion. Its design prioritizes simplicity for daily operations and robustness for long-term commercial use.
