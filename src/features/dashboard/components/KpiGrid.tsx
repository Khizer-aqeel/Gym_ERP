import type { KpiCard } from '../types/dashboard.types'
import { ChevronRightIcon } from '@/design-system/icons'
import styles from './DashboardPage.module.css'

interface KpiCardItemProps {
  card: KpiCard
  onNavigate: (route: string) => void
}

export function KpiCardItem({ card, onNavigate }: KpiCardItemProps) {
  const trendClass = (type: KpiCard['trendType']) => {
    if (type === 'up') return styles.trendUp
    if (type === 'down') return styles.trendDown
    if (type === 'warning') return styles.trendWarning
    return styles.trendNeutral
  }

  return (
    <div
      className={styles.kpiCard}
      style={{ '--kpi-color': card.color } as React.CSSProperties}
      onClick={() => onNavigate(card.route)}
    >
      <div className={styles.kpiTop}>
        <div className={styles.kpiIconBox} style={{ color: card.color }}>
          {card.icon}
        </div>
        <span className={`${styles.trendPill} ${trendClass(card.trendType)}`}>
          {card.trend}
        </span>
      </div>

      <div className={styles.kpiMiddle}>
        <span className={styles.kpiLabel}>{card.label}</span>
        <div className={styles.kpiValue}>{card.value}</div>
      </div>

      <div className={styles.kpiFooter}>
        <span className={styles.trendSubtext}>{card.subtext}</span>
        <ChevronRightIcon size={14} className={styles.kpiArrow} />
      </div>
    </div>
  )
}

interface KpiGridProps {
  cards: KpiCard[]
  onNavigate: (route: string) => void
}

export function KpiGrid({ cards, onNavigate }: KpiGridProps) {
  return (
    <div className={styles.kpiGrid}>
      {cards.map((card) => (
        <KpiCardItem key={card.label} card={card} onNavigate={onNavigate} />
      ))}
    </div>
  )
}
