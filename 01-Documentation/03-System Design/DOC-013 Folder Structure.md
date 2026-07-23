# Document Information

| Field              | Value            |
| ------------------ | ---------------- |
| **Document ID**    | DOC-013          |
| **Document Name**  | Folder Structure |
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

This document defines the official project folder structure for Gym ERP. Every source file shall follow this structure to maintain consistency, scalability, and maintainability.

---

# 2. Root Directory Structure

```text
Gym-ERP/
│
├── docs/
├── public/
├── src/
├── database/
├── assets/
├── scripts/
├── tests/
├── dist/
├── .gitignore
├── package.json
├── README.md
```

---

# 3. Source Directory

```text
src/
│
├── app/
├── components/
├── pages/
├── layouts/
├── routes/
├── hooks/
├── services/
├── store/
├── utils/
├── constants/
├── types/
├── styles/
├── assets/
└── main/
```

---

# 4. Components

Reusable UI components shall be stored in:

```text
src/components/
```

Examples:

* Buttons
* Cards
* Tables
* Forms
* Inputs
* Dialogs
* Navigation
* Sidebar
* Charts
* Modals

---

# 5. Pages

Each module shall have its own page directory.

Examples:

```text
pages/
├── Dashboard/
├── Members/
├── Trainers/
├── Attendance/
├── Memberships/
├── Payments/
├── Equipment/
├── DietPlans/
├── Reports/
└── Settings/
```

---

# 6. Services

Business logic and data operations shall be placed inside:

```text
src/services/
```

---

# 7. Store

Application state management shall be placed inside:

```text
src/store/
```

---

# 8. Database

Database-related files shall be stored inside:

```text
database/
```

Including:

* Schema
* Migrations
* Seed data
* Backup scripts

---

# 9. Tests

Automated tests shall be stored inside:

```text
tests/
```

---

# 10. Naming Convention

The project shall follow:

* PascalCase for React components.
* camelCase for variables and functions.
* kebab-case for route names.
* UPPER_SNAKE_CASE for constants.

---

# 11. Future Expansion

The folder structure shall support future modules without major reorganization.

---

# 12. Conclusion

This folder structure shall be considered the official project organization for Gym ERP and shall be followed throughout development.
