import { useState, useEffect } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import {
  DashboardIcon,
  MembersIcon,
  PlansIcon,
  AttendanceIcon,
  PaymentsIcon,
  StaffIcon,
  EquipmentIcon,
  WorkoutIcon,
  DietIcon,
  ReportsIcon,
  NotificationsIcon,
  SettingsIcon,
  SearchIcon,
  SunIcon,
  MoonIcon,
  ZapIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@/design-system/icons'
import styles from './AppLayout.module.css'

interface NavItem {
  path: string
  label: string
  icon: React.ReactNode
}

const NAV_ITEMS: NavItem[] = [
  { path: '/dashboard',     label: 'Dashboard',         icon: <DashboardIcon size={18} /> },
  { path: '/members',       label: 'Members',           icon: <MembersIcon size={18} /> },
  { path: '/subscriptions', label: 'Membership Plans',  icon: <PlansIcon size={18} /> },
  { path: '/attendance',    label: 'Attendance',        icon: <AttendanceIcon size={18} /> },
  { path: '/payments',      label: 'Payments',          icon: <PaymentsIcon size={18} /> },
  { path: '/staff',         label: 'Staff',             icon: <StaffIcon size={18} /> },
  { path: '/equipment',     label: 'Equipment',         icon: <EquipmentIcon size={18} /> },
  { path: '/workout-plans', label: 'Workout Plans',     icon: <WorkoutIcon size={18} /> },
  { path: '/diet-plans',    label: 'Diet Plans',        icon: <DietIcon size={18} /> },
  { path: '/reports',       label: 'Reports',           icon: <ReportsIcon size={18} /> },
  { path: '/notifications', label: 'Notifications',     icon: <NotificationsIcon size={18} /> },
  { path: '/settings',      label: 'Settings',          icon: <SettingsIcon size={18} /> },
]

export function AppLayout() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  function handleLogout() {
    logout()
    navigate('/login')
  }

  const avatarLetter = user?.name?.[0]?.toUpperCase() ?? 'U'

  return (
    <div className={`${styles.appShell} ${collapsed ? styles.collapsedShell : ''}`}>
      {/* ── Sidebar ── */}
      <aside className={`${styles.sidebar} ${collapsed ? styles.sidebarCollapsed : ''}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.brandIcon}>
            <ZapIcon size={20} />
          </div>
          {!collapsed && (
            <div className={styles.brandText}>
              <span className={styles.brandName}>Gym ERP</span>
              <span className={styles.brandSub}>Enterprise Portal</span>
            </div>
          )}
          <button
            className={styles.collapseToggleBtn}
            onClick={() => setCollapsed(!collapsed)}
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? <ChevronRightIcon size={14} /> : <ChevronLeftIcon size={14} />}
          </button>
        </div>

        <nav className={styles.sidebarNav}>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `${styles.navItem} ${isActive ? styles.active : ''}`
              }
              title={collapsed ? item.label : undefined}
            >
              <span className={styles.navIcon}>{item.icon}</span>
              {!collapsed && <span className={styles.navText}>{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* ── Main Area ── */}
      <div className={styles.mainArea}>
        {/* ── Topbar ── */}
        <header className={styles.topbar}>
          <div className={styles.topbarLeft}>
            <div className={styles.searchBox}>
              <span className={styles.searchIcon}>
                <SearchIcon size={16} />
              </span>
              <input
                type="text"
                className={styles.searchInput}
                placeholder="Search members, invoices, trainers..."
              />
            </div>
          </div>

          <div className={styles.topbarRight}>
            <button
              className={styles.themeToggleBtn}
              onClick={toggleTheme}
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <>
                  <SunIcon size={15} /> Light
                </>
              ) : (
                <>
                  <MoonIcon size={15} /> Dark
                </>
              )}
            </button>

            <div className={styles.userPill}>
              <div className={styles.userAvatar}>{avatarLetter}</div>
              <div className={styles.userInfo}>
                <span className={styles.userName}>{user?.name ?? 'User'}</span>
                <span className={styles.userRole}>Administrator</span>
              </div>
            </div>

            <button className={styles.logoutBtn} onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        {/* ── Page Content ── */}
        <main className={styles.contentBody}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
