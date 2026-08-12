import type { RecentPaymentItem } from '../types/dashboard.types'
import { PaymentsIcon, ChevronRightIcon } from '@/design-system/icons'
import styles from './DashboardPage.module.css'

interface RecentPaymentsCardProps {
  recentPayments: RecentPaymentItem[]
  onNavigate: (route: string) => void
}

export function RecentPaymentsCard({
  recentPayments,
  onNavigate,
}: RecentPaymentsCardProps) {
  return (
    <div className={styles.sectionCard}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitleGroup}>
          <PaymentsIcon size={16} className={styles.sectionHeaderIcon} />
          <span className={styles.sectionTitle}>Recent Transactions</span>
        </div>
        <button className={styles.viewAllLinkBtn} onClick={() => onNavigate('/payments')}>
          View All <ChevronRightIcon size={12} />
        </button>
      </div>
      <div className={styles.feedList}>
        {recentPayments.map((p) => (
          <div key={p.invoice} className={styles.feedItem}>
            <div className={styles.feedDetails}>
              <div className={styles.feedTitle}>
                <span className={styles.invoiceCode}>{p.invoice}</span> • {p.name}
              </div>
              <div className={styles.feedSub}>{p.plan}</div>
            </div>
            <span className={styles.paymentAmount}>{p.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
