import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/app/providers/AuthProvider'
import { useDashboardData } from '../hooks/useDashboardData'
import { DashboardHeader } from './DashboardHeader'
import { KpiGrid } from './KpiGrid'
import { AttendanceChartCard } from './AttendanceChartCard'
import { MembershipTierCard } from './MembershipTierCard'
import { LiveAttendanceStream } from './LiveAttendanceStream'
import { RecentPaymentsCard } from './RecentPaymentsCard'
import styles from './DashboardPage.module.css'

export function DashboardPage() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const {
    metrics,
    formattedDate,
    formattedTime,
    activeFilter,
    setActiveFilter,
    isRefreshing,
    handleRefresh,
  } = useDashboardData()

  return (
    <div className={styles.page}>
      {/* ── Executive Header ── */}
      <DashboardHeader
        userName={user?.name || 'Admin'}
        clubName="IronPulse Fitness Club"
        formattedDate={formattedDate}
        formattedTime={formattedTime}
        isRefreshing={isRefreshing}
        onRefresh={handleRefresh}
      />

      {/* ── Executive KPI Summary ── */}
      <KpiGrid cards={metrics.kpiCards} onNavigate={navigate} />

      {/* ── Performance Analytics Workspace ── */}
      <div className={styles.chartsRow}>
        <AttendanceChartCard
          barHeights={metrics.barHeights}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <MembershipTierCard donutLegend={metrics.donutLegend} />
      </div>

      {/* ── Operational Activity Stream ── */}
      <div className={styles.bottomGrid}>
        <LiveAttendanceStream
          attendanceFeed={metrics.attendanceFeed}
          onNavigate={navigate}
        />
        <RecentPaymentsCard
          recentPayments={metrics.recentPayments}
          onNavigate={navigate}
        />
      </div>
    </div>
  )
}
