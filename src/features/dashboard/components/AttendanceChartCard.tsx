import { AttendanceIcon } from '@/design-system/icons'
import styles from './DashboardPage.module.css'

interface AttendanceChartCardProps {
  barHeights: number[]
  activeFilter: string
  onFilterChange: (filter: string) => void
}

export function AttendanceChartCard({
  barHeights,
  activeFilter,
  onFilterChange,
}: AttendanceChartCardProps) {
  return (
    <div className={styles.chartCard}>
      <div className={styles.chartCardHeader}>
        <div className={styles.chartTitleGroup}>
          <div className={styles.chartTitleIconBox}>
            <AttendanceIcon size={18} />
          </div>
          <div>
            <div className={styles.chartCardTitle}>Attendance Analytics</div>
            <p className={styles.chartCardSubtitle}>Hourly check-in volume &amp; peak floor utilization</p>
          </div>
        </div>
        <div className={styles.chartFilterPills}>
          {['Today', 'Weekly', 'Monthly'].map((f) => (
            <button
              key={f}
              className={`${styles.filterPill} ${activeFilter === f ? styles.filterPillActive : ''}`}
              onClick={() => onFilterChange(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.chartPlaceholder}>
        <div className={styles.barGroup}>
          {barHeights.map((h, i) => (
            <div
              key={i}
              className={`${styles.bar} ${i === 12 ? styles.barActive : ''}`}
              style={{ height: `${h}%` }}
              title={`Hour ${i + 6}:00 — ${h} check-ins`}
            />
          ))}
        </div>
        <div className={styles.chartXAxis}>
          <span>6 AM</span>
          <span>9 AM</span>
          <span>12 PM</span>
          <span>3 PM</span>
          <span>6 PM</span>
          <span>9 PM</span>
        </div>
      </div>
    </div>
  )
}
