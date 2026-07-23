# Document Information

| Field              | Value            |
| ------------------ | ---------------- |
| **Document ID**    | DOC-019          |
| **Document Name**  | Dashboard Module |
| **Project Name**   | Gym ERP          |
| **Version**        | 1.0              |
| **Status**         | Approved         |
| **Project Owners** | Khizer & Ahad    |
| **Created Date**   | 22 July 2026     |
| **Last Updated**   | 22 July 2026     |

---

# Revision History

| Version | Date         | Description               |
| ------- | ------------ | ------------------------- |
| 1.0     | 22 July 2026 | Initial approved version. |

---

# 1. Purpose

The Dashboard is the central control panel of Gym ERP. It is the first screen displayed after a successful login and provides users with a real-time overview of the gym's daily operations.

Instead of navigating through multiple modules, users should be able to understand the current business status within a few seconds of opening the application.

The Dashboard shall present important business information in a clean, modern, and organized layout while allowing quick access to frequently used actions.

---

# 2. Objectives

The Dashboard shall:

* Provide an instant overview of the gym.
* Display the most important business statistics.
* Reduce the number of clicks required to perform daily tasks.
* Highlight important alerts requiring immediate attention.
* Present information using visually attractive cards and charts.
* Maintain excellent performance even with large datasets.
* Support future dashboard widgets without redesign.

---

# 3. Target Users

The Dashboard shall be available to users according to their assigned permissions.

Typical users include:

* Gym Owner
* Manager
* Receptionist

Different users may see different dashboard widgets depending on their permissions.

Example:

* Receptionist should not see revenue analytics if permission is restricted.
* Managers may not have access to system configuration widgets.
* Owners shall have access to every dashboard widget.

---

# 4. Dashboard Layout

The Dashboard shall be divided into the following sections:

## 4.1 Header

The header shall display:

* Welcome message
* Logged-in user's name
* User role
* Current date
* Current time

The current time shall update automatically while the application is running.

---

## 4.2 Quick Statistics Section

Immediately below the header, the Dashboard shall display summary cards for key business metrics.

Each card shall contain:

* Icon
* Title
* Value
* Optional trend indicator
* Optional color indicator

Cards shall maintain equal size and spacing.

---

## 4.3 Analytics Section

This section shall display graphical information including:

* Attendance trends
* Revenue trends
* Membership statistics

Charts shall be interactive where appropriate.

---

## 4.4 Activity Section

The Dashboard shall display recent business activities such as:

* Newly registered members
* Recent payments
* Membership renewals
* Trainer additions

Activities shall be displayed in reverse chronological order.

---

## 4.5 Notification Section

The Dashboard shall display important business alerts including:

* Memberships expiring soon
* Pending payments
* Equipment maintenance reminders
* System notifications

Notifications shall be prioritized by importance.

---

# 5. Dashboard Design Principles

The Dashboard shall follow these design principles:

* Clean layout
* Minimal clutter
* High readability
* Consistent spacing
* Premium appearance
* Smooth animations
* Fast loading
* Responsive desktop layout

Information shall be grouped logically to improve usability.

---

# 6. General Functional Requirements

The Dashboard shall:

* Load automatically after login.
* Refresh displayed information without requiring application restart.
* Display only information authorized for the current user.
* Provide quick navigation to related modules.
* Display user-friendly messages when no data is available.
* Continue operating even if one widget fails to load.
* Handle database updates efficiently without noticeable delays.

---

# 7. Dashboard Widgets

The Dashboard shall consist of multiple widgets that provide real-time information and quick access to important business operations.

---

# 7.1 Statistics Cards

The first section of the Dashboard shall display summary cards.

The default cards are:

* Total Members
* Active Members
* Today's Attendance
* Active Trainers
* Monthly Revenue
* Memberships Expiring Soon

Each card shall contain:

* Icon
* Title
* Current Value
* Optional percentage change compared to the previous period

Clicking a statistics card shall navigate the user to its corresponding module.

Example:

* Total Members → Members Module
* Active Trainers → Trainers Module
* Monthly Revenue → Payments Module

---

# 7.2 Quick Actions

Quick Actions provide one-click access to the most frequently used operations.

The default quick actions are:

* Register New Member
* Mark Attendance
* Add Payment
* Add Trainer
* View Reports

Only actions permitted by the user's role shall be displayed.

---

# 7.3 Attendance Overview

The attendance widget shall display:

* Today's Attendance
* Weekly Attendance
* Monthly Attendance

The data shall be presented using interactive charts.

The widget shall support switching between:

* Daily View
* Weekly View
* Monthly View

---

# 7.4 Revenue Overview

The revenue widget shall display:

* Today's Revenue
* Weekly Revenue
* Monthly Revenue
* Yearly Revenue

Revenue shall be presented using charts for easy trend analysis.

Future versions may allow comparison between custom date ranges.

---

# 7.5 Membership Overview

The membership widget shall summarize:

* Active Memberships
* Expiring Memberships
* Expired Memberships

Selecting a category shall open the Membership Plans module with the appropriate filter applied.

---

# 8. Recent Activity

The Dashboard shall include a Recent Activity section showing the latest system events.

Activities may include:

* New member registrations
* Membership renewals
* Payment records
* Trainer additions
* Equipment updates

The newest activity shall always appear first.

Each activity shall display:

* Date
* Time
* User who performed the action
* Short description

---

# 9. Recent Members

The Dashboard shall display the most recently registered members.

Columns:

* Member ID
* Full Name
* Membership Plan
* Joining Date
* Membership Status

Clicking a member shall open that member's profile.

---

# 10. Recent Payments

The Dashboard shall display recent payment transactions.

Columns:

* Receipt Number
* Member Name
* Membership Plan
* Amount
* Payment Date
* Payment Status

Selecting a payment shall open its complete details.

---

# 11. Equipment Alerts

The Dashboard shall notify users about equipment requiring attention.

Examples:

* Maintenance Due
* Equipment Out of Service
* Recently Added Equipment

These alerts help gym staff manage equipment efficiently.

---

# 12. Notifications

The notification panel shall display important system alerts, including:

* Memberships expiring within 7 days
* Pending or overdue payments
* Equipment maintenance reminders
* System announcements

Notifications shall be ordered by priority, with the most critical items displayed first.

---


# 13. Search & Navigation

The Dashboard shall provide users with quick access to important information and modules.

Navigation shall be possible by:

* Clicking dashboard cards.
* Clicking quick action buttons.
* Clicking recent member records.
* Clicking recent payment records.
* Clicking notification items.

Every interactive element shall navigate directly to its related module or record.

---

# 14. User Permissions

Dashboard visibility shall be controlled by the logged-in user's role.

## Owner

The Owner shall have access to all dashboard widgets.

---

## Manager

The Manager shall have access only to widgets permitted by the Owner.

---

## Receptionist

The Receptionist shall normally have access to:

* Members
* Attendance
* Payments
* Memberships

Revenue analytics and system administration widgets may be hidden.

---

## Trainer

The Trainer dashboard shall display only:

* Assigned Members
* Today's Attendance
* Assigned Diet Plans
* Personal Notifications

Financial and administrative information shall not be displayed.

---

# 15. Loading Behavior

When the Dashboard is opened:

* Statistics shall load first.
* Charts shall load immediately after statistics.
* Tables shall load afterward.
* Notifications shall refresh automatically.

If a section is still loading, a loading placeholder (skeleton loader) shall be displayed instead of an empty area.

---

# 16. Empty States

If no data exists, the Dashboard shall display informative messages.

Examples:

"No members have been registered yet."

"No payments have been recorded."

"No attendance records available."

The application shall never display empty tables without explanation.

---

# 17. Error Handling

If a widget cannot retrieve data:

* Other widgets shall continue functioning.
* A user-friendly message shall be displayed.
* Technical details shall be written to the application log.
* The application shall not crash.

---

# 18. Performance Requirements

The Dashboard shall:

* Open quickly after login.
* Display statistics without noticeable delay.
* Refresh information efficiently.
* Handle thousands of member records without affecting usability.

---

# 19. Business Rules

The Dashboard shall follow these rules:

* Statistics shall always display the latest available data.
* Membership expiry calculations shall update automatically.
* Revenue shall reflect recorded payments only.
* Attendance statistics shall be generated from attendance records.
* Widgets shall respect user permissions.

---

# 20. Future Enhancements

The Dashboard architecture shall support future additions such as:

* Drag-and-drop widgets.
* Custom dashboard layouts.
* Widget visibility preferences.
* Advanced business analytics.
* AI-generated business insights.
* Multi-branch dashboard support.

These features shall not require redesign of the existing Dashboard structure.

---

# 21. Acceptance Criteria

The Dashboard module shall be considered complete when:

* All widgets display correct information.
* Navigation works correctly.
* Charts display accurate data.
* Notifications update properly.
* User permissions are enforced.
* Loading and error states function correctly.
* The interface follows the official Design System.

---

# 22. Conclusion

The Dashboard is the primary workspace of Gym ERP and shall provide users with an efficient, visually appealing, and informative overview of gym operations. It shall prioritize usability, performance, and clarity while remaining scalable for future enhancements.

