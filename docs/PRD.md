# PRD.md — Product Requirements Document

**Project:** Gym ERP | **Version:** 1.0 | **Status:** Active | **Owners:** Khizer & Ahad
**Last Updated:** 2026-07-24

---

## 1. Purpose

Gym ERP is a commercial-grade Gym Management System. It enables gym owners to run their entire operation from a single application — members, trainers, attendance, subscriptions, payments, equipment, diet plans, and reporting.

The system replaces paper records and fragmented manual processes with a professional, fast, and customizable software platform suitable for commercial deployment.

---

## 2. Problem Statement

Gym owners currently manage operations through paper records, spreadsheets, or disconnected tools. This causes:

- Slow member registration and check-in
- Inaccurate payment and membership tracking
- No visibility into business performance
- Difficulty managing trainer assignments and diet plans
- No audit trail for administrative actions

Gym ERP solves all of these through a unified, role-based desktop application.

---

## 3. Target Users

| Role | Description |
|---|---|
| Owner | Full access to all modules, settings, reports, and user management |
| Manager | Operational access as configured by the Owner |
| Receptionist | Member registration, check-in, membership renewals, payments |
| Trainer | Assigned member profiles, diet plans, optional attendance view |

Future releases may add a Member Portal and Trainer Portal.

---

## 4. Core Features

### Dashboard
- Business overview with key performance indicators
- Today's attendance, active members, revenue snapshot
- Recent activity feed
- Quick-action shortcuts

### Member Management
- Member registration with auto-generated Member ID
- Member profile: contact info, membership history, attendance history, payment history, assigned diet plan, notes
- Member search and filtering
- Member status: Active, Inactive, Expiring
- Unique mobile number enforcement (no duplicate registrations)

### Trainer Management
- Trainer registration with auto-generated Trainer ID
- Trainer profile: name, phone, joining date, experience (mandatory), specialization, status
- Optional: photo, email, address, certifications, emergency contact, notes
- Trainer status: Active, Inactive

### Attendance Management
- Manual check-in per member per day (one check-in per day rule)
- Attendance history: daily, weekly, monthly, yearly, lifetime
- Attendance statistics and reports

### Membership Plans
- Unlimited, fully customizable membership plans
- Configurable duration and pricing
- Membership renewal creates a new history record
- Expiry tracking with notifications

### Payment Management
- Record membership payments linked to members
- Auto-generated unique receipt number per payment
- Invoice and receipt generation and printing
- Payment history (permanent, no deletion)
- Pending payment tracking
- Discount support

### Equipment Management
- Built-in equipment library organized by category
- Gym owners select equipment from library or add custom equipment
- Per-equipment: maintenance records, warranty, status, images, notes
- Equipment categories are customizable

### Diet Plan Management
- Built-in diet plan collection
- Custom diet plan creation
- Diet plans assigned to members after registration
- One active diet plan per member at a time

### Reports
- Active members report
- Expired memberships report
- Attendance reports (daily, weekly, monthly)
- Revenue and payment reports
- Equipment reports
- Print and export support

### Settings
- Gym name, logo, contact information
- Business hours and preferences
- Theme customization (deferred to future milestone)
- User account and permission management
- Backup and restore

---

## 5. Application Flow

```
Login
  └── Role-based dashboard
        ├── Owner → Full navigation
        ├── Manager → Configured modules
        ├── Receptionist → Members, Attendance, Payments
        └── Trainer → Assigned members, Diet plans

Member Lifecycle:
  Register → Assign Plan → Record Payment → Generate Invoice
  → Daily Check-In → Renewal / Expiry Notification → History
```

---

## 6. Success Criteria

### Functional
- All 9 core modules implemented and functioning per requirements
- Member registration completes in under 2 minutes
- Attendance check-in completes in under 30 seconds
- Reports generate in under 3 seconds for standard data sets

### Quality
- No critical defects in production
- Data integrity maintained (no orphan records, no data loss)
- Application stable under normal operating conditions

### Commercial
- Suitable for live demonstration to paying customers
- Requires minimal staff training
- Installable on target hardware without technical expertise

---

## 7. Business Requirements

- Member records are **never permanently deleted**
- Payment records are **never permanently deleted**
- Attendance history is **permanently preserved**
- Every payment produces a unique receipt number
- A member may hold only one active membership at a time
- A member may check in only once per day
- All reports must support printing and export
- User permissions are role-based and configurable by the Owner
- Audit logs must capture critical administrative actions
- The system must operate without an internet connection

---

## V1.0 Out of Scope

The following are explicitly excluded from Version 1.0:

- Mobile applications
- Multi-branch management
- Online member portal or trainer portal
- Online payment gateway integration
- Biometric / RFID attendance devices
- AI-powered analytics
- SMS or email automation
- Cloud synchronization
- Third-party integrations

*These features are architecturally supported but deferred to future releases.*
