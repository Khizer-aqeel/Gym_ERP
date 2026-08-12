import type { DonutLegendItem } from '../types/dashboard.types'
import { PlansIcon } from '@/design-system/icons'
import styles from './DashboardPage.module.css'

interface MembershipTierCardProps {
  donutLegend: DonutLegendItem[]
}

export function MembershipTierCard({ donutLegend }: MembershipTierCardProps) {
  return (
    <div className={styles.chartCard}>
      <div className={styles.chartCardHeader}>
        <div className={styles.chartTitleGroup}>
          <div className={styles.chartTitleIconBox}>
            <PlansIcon size={18} />
          </div>
          <div>
            <div className={styles.chartCardTitle}>Subscription Distribution</div>
            <p className={styles.chartCardSubtitle}>Active members breakdown by plan tier</p>
          </div>
        </div>
      </div>
      <div className={styles.donutPlaceholder}>
        <div className={styles.donutRing}>
          <div className={styles.donutHole}>
            <span className={styles.donutHoleValue}>1,085</span>
            <span className={styles.donutHoleLabel}>Members</span>
          </div>
        </div>
        <div className={styles.donutLegend}>
          {donutLegend.map((item) => (
            <div key={item.label} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: item.color }} />
              <span className={styles.legendLabel}>{item.label}</span>
              <span className={styles.legendValue}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
