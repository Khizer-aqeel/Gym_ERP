# Document Information

| Field              | Value                   |
| ------------------ | ----------------------- |
| **Document ID**    | DOC-023                 |
| **Document Name**  | Membership Plans Module |
| **Project Name**   | Gym ERP                 |
| **Version**        | 1.0                     |
| **Status**         | Approved                |
| **Project Owners** | Khizer & Ahad           |
| **Created Date**   | 23 July 2026            |
| **Last Updated**   | 23 July 2026            |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 23 July 2026 | Initial approved version. |

---

# 1. Purpose

The Membership Plans Module is responsible for creating, managing, and maintaining all membership plans offered by the gym. The module is fully customizable, allowing each gym to define its own plans, pricing, and durations according to its business model.

The module integrates with Members, Payments, Attendance, Dashboard, Reports, and Settings to ensure that membership information is consistent throughout the system.

---

# 2. Objectives

The Membership Plans Module shall:

* Create customizable membership plans.
* Manage plan pricing and duration.
* Activate or deactivate plans.
* Support membership renewal.
* Support membership freeze.
* Calculate membership expiry automatically.
* Generate renewal reminders.
* Integrate with payment processing.
* Maintain complete membership history.

---

# 3. User Roles

Access to this module shall depend on user permissions.

## Owner

The Owner shall have full access to all membership plan functions.

---

## Admin

The Admin shall manage membership plans according to permissions assigned by the Owner.

---

## Manager

The Manager may:

* Create membership plans.
* Edit membership plans.
* Renew memberships.
* Freeze memberships.
* View membership history.

Deletion permissions may be restricted.

---

## Receptionist

The Receptionist may:

* View membership plans.
* Assign membership plans during member registration.
* Renew memberships.
* View membership history.

Receptionists shall not create or delete membership plans unless specifically authorized.

---

## Trainer

Trainers shall have read-only access to view a member's current membership plan and status.

---

# 4. Membership Plan Creation

The system shall allow authorized users to create unlimited membership plans.

Required fields:

* Plan Name
* Duration
* Duration Unit (Days, Weeks, Months, Years, Lifetime)
* Price

Optional fields:

* Description
* Notes

The system shall automatically generate:

* Plan ID
* Creation Date
* Status

---

# 5. Membership Plan Status

Each membership plan shall have one of the following statuses:

* Active
* Inactive

Inactive plans shall not be available for new registrations but shall remain linked to existing member records and historical data.

---

# 6. Membership Plan List

The Membership Plans module shall display all plans in a searchable and sortable table.

Default columns:

* Plan ID
* Plan Name
* Duration
* Price
* Status
* Number of Active Members
* Actions

By default, Active plans shall be displayed before Inactive plans.

---

# 7. Membership Plan Profile

Selecting a membership plan shall display its complete profile.

The profile shall include:

* Basic Information
* Pricing Details
* Duration Details
* Assigned Members
* Renewal History
* Activity Log

The profile shall use a tab-based layout for easy navigation.

# 8. Search

The Membership Plans module shall provide an instant search feature.

Users shall be able to search by:

* Plan ID
* Plan Name
* Price
* Status

Search results shall update instantly as the user types.

---

# 9. Filters

Users shall be able to filter membership plans using:

* Status
* Duration Unit
* Price Range

Multiple filters may be applied simultaneously.

A single action shall clear all active filters.

---

# 10. Sorting

The Membership Plans table shall support sorting by:

* Plan ID
* Plan Name
* Duration
* Price
* Status

Sorting shall be available in both ascending and descending order.

---

# 11. Membership Renewal

Membership renewal shall be available from:

* Member Profile
* Membership Module

During renewal, the user shall select:

* Membership Plan
* Start Date
* Payment Information

The system shall automatically calculate:

* Membership Expiry Date
* Remaining Membership Duration
* Membership Status

Every renewal shall be recorded in the member's membership history.

---

# 12. Membership Freeze

The Membership Freeze feature allows an active membership to be temporarily paused without reducing the member's remaining days.

Only the following users may freeze a membership:

* Owner
* Admin
* Manager

Receptionists and Trainers shall not have permission to freeze memberships.

Required information:

* Freeze Start Date
* Freeze End Date
* Reason
* Approved By

The system shall automatically calculate the total freeze duration.

During the freeze period:

* Attendance shall not be permitted.
* Membership duration shall not decrease.
* Renewal reminders shall be paused.

When the freeze period ends:

* The membership shall automatically resume.
* Remaining membership days shall continue from the day after the freeze ends.

Every freeze action shall be recorded in the audit log.

---

# 13. Assigned Members

Each membership plan shall display a list of members currently using that plan.

Default columns:

* Member ID
* Member Name
* Joining Date
* Membership Expiry Date
* Membership Status

Selecting a member shall open the Member Profile.

---

# 14. Membership History

The system shall maintain a complete membership history for every member.

History shall include:

* Membership Plan
* Start Date
* Expiry Date
* Renewal Date
* Freeze Periods
* Membership Status

Historical records shall never be permanently deleted.

---

# 15. Activity Log

Every important membership-related action shall be recorded automatically.

The activity log shall include:

* Date
* Time
* User
* Action
* Description

The activity log shall be read-only.

---

# 16. Quick Actions

The Membership Plans module shall provide one-click access to:

* Create Plan
* Edit Plan
* Activate Plan
* Deactivate Plan
* View Assigned Members
* Print Plan Details

The available actions shall depend on the user's permissions.

# 17. Validation Rules

The system shall validate all membership plan information before saving.

## Plan Name

* Required.
* Minimum 3 characters.
* Maximum 100 characters.
* Duplicate active plan names shall not be allowed.

---

## Duration

* Required.
* Must be greater than zero.
* Must contain a valid duration unit.

Supported duration units:

* Days
* Weeks
* Months
* Years
* Lifetime

---

## Price

* Required.
* Must be a valid numeric value.
* Cannot be negative.

---

# 18. Default Membership Plan Templates

Gym ERP shall provide predefined membership plan templates during initial setup.

The purpose of templates is to reduce setup time for new gyms while maintaining complete customization.

Default templates may include:

* 1 Month Membership
* 3 Months Membership
* 6 Months Membership
* 12 Months Membership

---

# 19. Template Management Rules

Authorized users shall be able to:

* Edit default templates.
* Change prices.
* Change durations.
* Rename plans.
* Deactivate templates.
* Delete unused templates.
* Create new custom plans.

Default templates shall not restrict the gym from creating its own membership structure.

---

# 20. Membership Expiry Handling

The system shall automatically calculate membership expiry dates based on:

* Membership start date.
* Selected plan duration.
* Freeze periods.

When the expiry date is reached:

The membership status shall automatically change to:

* Expired

The system shall not delete expired memberships.

Historical membership information shall remain available.

---

# 21. Renewal Reminder System

The system shall generate renewal reminders for upcoming expirations.

Default reminder periods:

* 7 days before expiry.
* 3 days before expiry.
* Expiry date.

The reminder system shall be configurable from Settings.

---

# 22. Freeze Calculation Rules

When a membership is frozen:

The system shall:

* Pause membership countdown.
* Store freeze start date.
* Store freeze end date.
* Calculate total frozen days.
* Extend the membership expiry date accordingly.

Example:

Original expiry:
30 July

Freeze:
10 days

New expiry:
9 August

---

# 23. Integration With Other Modules

The Membership Plans module shall integrate with:

## Members Module

Used for:

* Assigning plans.
* Viewing membership history.
* Renewing memberships.

---

## Payments Module

Used for:

* Recording membership payments.
* Linking transactions to plans.

---

## Attendance Module

Used for:

* Checking membership validity.
* Blocking attendance for expired or frozen memberships.

---

## Dashboard Module

Used for displaying:

* Active memberships.
* Expiring memberships.
* Frozen memberships.
* Expired memberships.

---

## Reports Module

Used for generating:

* Membership sales reports.
* Expiry reports.
* Renewal reports.

---

# 24. Performance Requirements

The Membership Plans module shall:

* Load plans quickly.
* Handle multiple plans efficiently.
* Calculate expiry dates instantly.
* Search and filter without noticeable delay.
* Support gyms with thousands of members.

---

# 25. Error Handling

If a membership operation fails:

The system shall:

* Display a clear error message.
* Prevent invalid data from being saved.
* Preserve entered information where possible.
* Record technical details in system logs.

---

# 26. Future Enhancements

The Membership Plans module shall support future features including:

* Discount codes.
* Promotional campaigns.
* Family memberships.
* Corporate memberships.
* Multiple pricing tiers.
* Online membership purchases.
* Automatic payment subscriptions.

---

# 27. Acceptance Criteria

The Membership Plans Module shall be considered complete when:

* Users can create unlimited customized plans.
* Default templates are available during setup.
* Plans can be activated or deactivated.
* Membership renewal works correctly.
* Expiry dates are calculated accurately.
* Freeze functionality works correctly.
* Membership history is maintained.
* Permissions are enforced.
* Integration with Members, Payments, Attendance, Dashboard, and Reports works correctly.

---

# 28. Conclusion

The Membership Plans Module provides a flexible and powerful system for managing gym subscriptions. By combining customizable plans, ready-to-use templates, automated expiry management, renewal handling, and membership freeze functionality, Gym ERP can adapt to different gym business models while maintaining a simple and professional user experience.
