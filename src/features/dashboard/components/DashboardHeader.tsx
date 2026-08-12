import { RefreshIcon, ClockIcon } from '@/design-system/icons'
import styles from './DashboardPage.module.css'

interface DashboardHeaderProps {
  userName: string
  clubName: string
  formattedDate: string
  formattedTime: string
  isRefreshing: boolean
  onRefresh: () => void
}

export function DashboardHeader({
  userName,
  clubName,
  formattedDate,
  formattedTime,
  isRefreshing,
  onRefresh,
}: DashboardHeaderProps) {
  return (
    <div className={styles.pageHeader}>
      <div className={styles.headerLeft}>
        <div className={styles.welcomeTag}>System Overview</div>
        <h1 className={styles.pageTitle}>
          Welcome back, <span className={styles.pageTitleAccent}>{userName}</span>
        </h1>
        <p className={styles.pageSubtitle}>
          Real-time operational & business intelligence for <strong>{clubName}</strong>
        </p>
      </div>
      <div className={styles.headerRight}>
        <div className={styles.dateBadge}>
          <ClockIcon size={14} className={styles.clockIcon} />
          <span>{formattedDate}</span>
          <span className={styles.clockTime}>{formattedTime}</span>
        </div>
        <button className={styles.refreshBtn} onClick={onRefresh} disabled={isRefreshing}>
          <RefreshIcon size={14} className={isRefreshing ? styles.spinning : ''} />
          <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
        </button>
      </div>
    </div>
  )
}
