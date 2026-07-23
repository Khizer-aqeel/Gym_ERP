# Document Information

| Field              | Value                     |
| ------------------ | ------------------------- |
| **Document ID**    | DOC-021                   |
| **Document Name**  | Trainer Management Module |
| **Project Name**   | Gym ERP                   |
| **Version**        | 1.0                       |
| **Status**         | Approved                  |
| **Project Owners** | Khizer & Ahad             |
| **Created Date**   | 23 July 2026              |
| **Last Updated**   | 23 July 2026              |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 23 July 2026 | Initial approved version. |

---

# 1. Purpose

The Trainer Management Module is responsible for maintaining complete records of all trainers working at the gym. It provides a centralized location for storing trainer information, assigning members, tracking availability, and managing trainer status.

The module is designed to be simple for daily use while remaining flexible enough to support gyms of different sizes.

---

# 2. Objectives

The Trainer Management Module shall:

* Register new trainers.
* Maintain trainer profiles.
* Record years of experience.
* Record trainer specializations.
* Assign members to trainers.
* Track trainer availability.
* Maintain trainer status.
* Support searching and filtering.
* Integrate with Members, Dashboard, Reports, and Settings modules.

---

# 3. User Roles

Access to this module shall depend on user permissions.

## Owner

The Owner shall have full access to all trainer records and management functions.

---

## Admin

The Admin shall have permissions assigned by the Owner and may manage trainer records if authorized.

---

## Manager

The Manager may:

* Register trainers.
* Edit trainer information.
* Assign members.
* View trainer history.

Deletion permissions may be restricted.

---

## Receptionist

The Receptionist may:

* View trainer information.
* Assign trainers to members.
* Update basic trainer information if permitted.

---

## Trainer

By default, trainers shall **not** have login access to Gym ERP.

If enabled by the Owner in the future, a trainer account may be created with limited permissions.

---

# 4. Trainer Registration

Every trainer shall be registered through a standardized registration form.

Required fields:

* Full Name
* Mobile Number
* Gender
* Years of Experience
* Joining Date

Optional fields:

* Email Address
* Address
* Salary
* Specialization(s)
* Notes

The system shall automatically generate:

* Trainer ID
* Registration Date
* Trainer Status

---

# 5. Trainer ID

Every trainer shall receive a unique Trainer ID.

Requirements:

* Automatically generated.
* Unique.
* Permanent.
* Never reused.

The Trainer ID shall be the primary identifier throughout the system.

---

# 6. Trainer Status

Each trainer shall have one of the following statuses:

* Active
* On Leave
* Inactive

Status changes shall be recorded in the activity log.

---

# 7. Trainer Profile

Selecting a trainer from the Trainers list shall open the Trainer Profile.

The profile shall contain:

* Basic Information
* Assigned Members
* Experience & Specializations
* Activity History
* Notes

The profile shall use a tab-based layout for easy navigation.

# 8. Trainers List

The Trainers List shall display all registered trainers in a professional, searchable, and sortable table.

By default, active trainers shall appear first, followed by trainers who are On Leave and Inactive.

The table shall remain responsive and perform efficiently even with a large number of trainer records.

---

# 9. Trainers Table Columns

The default columns shall include:

* Trainer ID
* Full Name
* Mobile Number
* Gender
* Years of Experience
* Specialization(s)
* Assigned Members
* Joining Date
* Status
* Actions

The Owner shall be able to customize the visible columns.

---

# 10. Search

A global search bar shall be available above the Trainers table.

Users shall be able to search using:

* Trainer ID
* Full Name
* Mobile Number
* Specialization
* Status

Search results shall update instantly as the user types.

---

# 11. Filters

The Trainers module shall support filtering by:

* Status
* Gender
* Years of Experience
* Specialization
* Joining Date

Multiple filters may be applied simultaneously.

A single action shall clear all active filters.

---

# 12. Sorting

The Trainers table shall support sorting by:

* Trainer ID
* Full Name
* Years of Experience
* Joining Date
* Status

Sorting shall be available in both ascending and descending order.

---

# 13. Trainer Profile Layout

Selecting a trainer shall open the Trainer Profile.

The profile shall contain the following tabs:

## Basic Information

Displays:

* Trainer ID
* Full Name
* Mobile Number
* Gender
* Email Address
* Address
* Joining Date
* Status

---

## Experience & Specializations

Displays:

* Years of Experience
* Primary Specialization
* Additional Specializations
* Professional Notes

---

## Assigned Members

Displays all members assigned to the trainer.

Columns:

* Member ID
* Member Name
* Membership Plan
* Membership Status
* Last Attendance

Selecting a member shall open the Member Profile.

---

## Notes

Authorized users may add notes related to the trainer.

Each note shall display:

* Date
* Time
* User
* Note Content

Notes shall become part of the permanent trainer record.

---

## Activity Timeline

The activity timeline shall display:

* Trainer Registration
* Profile Updates
* Status Changes
* Member Assignments
* Member Removals

Activities shall be displayed in reverse chronological order.

---

# 14. Assigning Members

Members may be assigned to a trainer from either:

* Trainer Profile
* Member Profile

The assignment process shall allow searching by:

* Member ID
* Member Name
* Mobile Number

A member may have only one primary trainer at a time.

Changing a trainer assignment shall automatically update both the Member and Trainer records.

---

# 15. Trainer Availability

Each trainer shall have an availability status.

Available statuses:

* Available
* Busy
* On Leave

This information helps staff assign members to the appropriate trainer.

---

# 16. Quick Actions

The Trainer Profile shall provide one-click access to:

* Edit Trainer
* Assign Member
* Remove Member
* View Assigned Members
* Print Trainer Profile

The available actions shall depend on the user's permissions.

# 17. Validation Rules

The system shall validate all trainer information before saving.

Validation requirements:

## Full Name

* Required.
* Minimum 3 characters.
* Maximum 100 characters.

---

## Mobile Number

* Required.
* Must contain only valid digits.
* Duplicate mobile numbers shall not be allowed for active trainers.

---

## Gender

* Required.

---

## Years of Experience

* Required.
* Must be a whole number.
* Cannot be negative.

---

## Joining Date

* Required.
* Cannot be a future date.

---

## Email Address

* Optional.
* If provided, it shall be in a valid email format.

---

# 18. Trainer Registration Workflow

The standard trainer registration workflow shall be:

1. Open the Trainers Module.
2. Click **Add Trainer**.
3. Complete the registration form.
4. Validate all required fields.
5. Generate the Trainer ID automatically.
6. Save the trainer record.
7. Open the Trainer Profile.

If validation fails, the system shall highlight the affected fields and prevent submission until corrected.

---

# 19. Delete & Restore

Trainer records shall not be permanently deleted during normal operation.

When a trainer is deleted:

* The trainer shall be marked as Inactive.
* Assignment history shall remain.
* Activity history shall remain.
* Notes shall remain.

Authorized users may restore an inactive trainer at any time.

---

# 20. Export Options

Authorized users shall be able to export trainer information.

Supported export formats:

* PDF
* Excel (XLSX)
* CSV

The exported data shall respect the current search results and applied filters.

---

# 21. Performance Requirements

The Trainers module shall:

* Open quickly.
* Display trainer records without noticeable delay.
* Perform searches instantly.
* Apply filters efficiently.
* Support hundreds of trainer records while maintaining smooth performance.

---

# 22. Error Handling

If an operation fails:

* Display a clear and user-friendly error message.
* Preserve entered information whenever possible.
* Record technical details in the application log.
* Prevent application crashes.

---

# 23. Business Rules

The following business rules shall apply:

* Every trainer shall have a unique Trainer ID.
* Trainer IDs shall never be reused.
* Years of Experience is a mandatory field.
* A trainer may supervise multiple members.
* A member may have only one primary trainer at a time.
* Trainer assignment changes shall be recorded in the activity log.
* Inactive trainers cannot receive new member assignments.
* Trainer history shall remain permanently available for reporting purposes.

---

# 24. Future Enhancements

The Trainer Management Module shall support future features including:

* Trainer profile photo.
* Trainer certifications.
* Trainer work schedules.
* Trainer attendance.
* Trainer performance analytics.
* Trainer login accounts.
* Commission management.
* Multi-branch trainer assignment.

The module architecture shall allow these enhancements without major redesign.

---

# 25. Acceptance Criteria

The Trainer Management Module shall be considered complete when:

* Trainers can be registered successfully.
* Trainer IDs are generated automatically.
* Validation rules function correctly.
* Search and filters work accurately.
* Trainer profiles display complete information.
* Member assignment functions correctly.
* Delete and restore preserve historical data.
* Export functionality works as expected.
* Role-based permissions are enforced.

---

# 26. Conclusion

The Trainer Management Module provides a centralized and efficient way to manage trainer information within Gym ERP. It ensures accurate record keeping, simplifies member assignment, supports future scalability, and maintains a professional user experience suitable for commercial gym operations.
