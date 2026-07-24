# SECURITY.md — Security & Access Control

**Project:** Gym ERP | **Version:** 1.0 | **Status:** Active | **Owners:** Khizer & Ahad
**Last Updated:** 2026-07-24

---

## 1. User Roles

The system enforces four default roles. All access is role-based.

| Role | Description |
|---|---|
| **Owner** | Unrestricted access to all modules, users, settings, and audit logs |
| **Manager** | Configurable access to operational modules, assigned by Owner |
| **Receptionist** | Member registration, check-in, renewals, payments, invoices |
| **Trainer** | Assigned member profiles, diet plans, optional attendance view |

**Rules:**
- Every user account must have exactly one assigned role
- The Owner role cannot be deleted or demoted by another user
- Role assignments are logged in the audit trail
- Future roles can be added without architectural changes

---

## 2. Access Control

**Model:** Role-Based Access Control (RBAC)

| Module | Owner | Manager | Receptionist | Trainer |
|---|---|---|---|---|
| Dashboard | ✅ | ✅ | ✅ | ✅ |
| Member Management | ✅ | Configurable | ✅ | Read-only (assigned) |
| Trainer Management | ✅ | Configurable | ❌ | ❌ |
| Attendance | ✅ | Configurable | ✅ | Optional |
| Membership Plans | ✅ | Configurable | View only | ❌ |
| Payments | ✅ | Configurable | ✅ | ❌ |
| Equipment | ✅ | Configurable | ❌ | ❌ |
| Diet Plans | ✅ | Configurable | ❌ | ✅ (assigned) |
| Reports | ✅ | Configurable | ❌ | ❌ |
| Settings | ✅ | ❌ | ❌ | ❌ |
| User Management | ✅ | ❌ | ❌ | ❌ |
| Audit Logs | ✅ | ❌ | ❌ | ❌ |
| Backup & Restore | ✅ | ❌ | ❌ | ❌ |

**Enforcement:**
- Access is enforced at two layers: UI route guards and service/backend layer
- Navigation renders only authorized modules — no hidden links
- Permission changes take effect immediately without requiring logout
- The Owner can grant/revoke module-level access for Manager and Receptionist roles

**Permission Granularity:**
- View
- Create
- Edit
- Delete (soft-delete only for records — permanent delete not permitted for members, payments)

---

## 3. API Security

- No raw data access is permitted from the UI layer — all calls go through the service layer
- Input validation is enforced at both client (Zod schemas) and backend before any database operation
- SQL injection is prevented via Prisma ORM parameterized queries — no raw SQL strings
- XSS prevention: React's default JSX escaping + no `dangerouslySetInnerHTML` without explicit review
- All API responses are typed — no unvalidated data reaches the UI
- Error responses never expose stack traces, internal paths, or database details to the client
- Rate limiting applies to authentication endpoints (see Section 4)

---

## 4. Rate Limiting

Authentication endpoints are rate-limited to prevent brute-force attacks.

| Endpoint | Limit | Window |
|---|---|---|
| Login | 5 attempts | 15 minutes |
| Password change | 3 attempts | 30 minutes |

**Behavior on limit exceeded:**
- Account temporarily locked for the window period
- Failed attempt logged with timestamp and source
- User shown a generic error message (no information on lock status)

---

## 5. Session Management

- Every login creates a session record in the `UserSessions` table
- Sessions contain: user ID, role, login timestamp, last activity timestamp, session token hash
- Session tokens are never stored in plain text
- Sessions expire after inactivity (configurable, default: 8 hours)
- Logout invalidates the session immediately
- Login history is permanently retained in the `AuditLogs` table
- Concurrent session handling: single active session per user (new login invalidates old)

---

## 6. Database Security

- SQLite database file is stored in the user's application data directory (not in the installation folder)
- Database file permissions restrict access to the application process only
- All database operations use Prisma ORM — no raw SQL string construction
- Foreign key constraints are enabled at the SQLite level
- No test data, seed credentials, or demo accounts exist in production builds
- Database backups are encrypted when stored (future milestone — pending encryption library selection)

---

## 7. Password Requirements

| Requirement | Rule |
|---|---|
| Minimum length | 8 characters |
| Complexity | At least one uppercase, one lowercase, one number |
| Storage | bcrypt hash, minimum 10 rounds |
| Plain text | Never stored, never logged |
| Transmission | Never transmitted over unencrypted channels |
| Reset | Owner can reset any user password; generates a temporary password requiring change on next login |

**Prohibited:**
- Hardcoded passwords or credentials anywhere in source code
- Default passwords that are not forced to change on first login
- Passwords written to any log file

---

## 8. Data Encryption

**Current scope (V1.0 — local desktop):**

- No network transmission of data in V1.0 (local SQLite, no cloud sync)
- Sensitive fields (passwords) are hashed with bcrypt
- Database file encryption: deferred to a future milestone

**Future scope (cloud/network features):**

- All network communication over HTTPS (TLS 1.2 minimum)
- JWT tokens for API authentication, signed with a secret stored in environment variables
- Sensitive PII fields encrypted at rest
- Encryption keys never hardcoded — loaded from environment or key management service

---

## 9. Backup and Recovery

**Backup:**
- Manual backup triggered from Settings module by Owner
- Backup creates a copy of the SQLite database file
- Backup file is saved to an Owner-specified location outside the application directory
- Backup filename includes timestamp: `gymerp-backup-YYYYMMDD-HHMMSS.db`
- Owner is responsible for securing the backup location

**Recovery:**
- Recovery triggered from Settings module by Owner
- Owner selects a valid backup file
- Application stops all operations, replaces the current database with the backup, then restarts
- Recovery is logged in the audit trail with timestamp and file used

**Recommendations (communicated during installation):**
- Perform daily backups during active use
- Store backups on a separate drive or USB device
- Test restore procedure periodically
- Keep at least 7 days of backup history

**Audit trail for backup/recovery:**
- Every backup operation recorded: who triggered it, when, where saved
- Every restore operation recorded: who triggered it, when, which backup file used
