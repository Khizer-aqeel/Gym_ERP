import type { AttendanceFeedItem } from '../types/dashboard.types'
import { AttendanceIcon, ChevronRightIcon } from '@/design-system/icons'
import styles from './DashboardPage.module.css'

interface LiveAttendanceStreamProps {
  attendanceFeed: AttendanceFeedItem[]
  onNavigate: (route: string) => void
}

export function LiveAttendanceStream({
  attendanceFeed,
  onNavigate,
}: LiveAttendanceStreamProps) {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleGroup}>
          <AttendanceIcon size={16} className={styles.sectionHeaderIcon} />
          <span className={styles.sectionTitle}>Live Check-ins</span>
        </div>
        <button className={styles.viewAllLinkBtn} onClick={() => onNavigate('/attendance')}>
          View All <ChevronRightIcon size={12} />
        </button>
      </div>
      <div className={styles.feedList}>
        {attendanceFeed.map((item) => (
          <div key={item.name} className={styles.feedItem}>
            <div className={styles.feedAvatar}>{item.initials}</div>
            <div className={styles.feedDetails}>
              <div className={styles.feedTitle}>{item.name}</div>
              <div className={styles.feedSub}>{item.sub}</div>
            </div>
            <span className={`${styles.statusBadge} ${styles.statusActive}`}>{item.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
