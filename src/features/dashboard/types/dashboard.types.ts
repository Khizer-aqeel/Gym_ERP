import React from 'react'

export type TrendType = 'up' | 'down' | 'warning' | 'neutral'

export interface KpiCard {
  label: string
  value: string
  icon: React.ReactNode
  trend: string
  trendType: TrendType
  subtext: string
  color: string
  route: string
}

export interface AttendanceFeedItem {
  initials: string
  name: string
  sub: string
  time: string
}

export interface RecentMemberItem {
  initials: string
  name: string
  plan: string
  trainer: string
}

export interface RecentPaymentItem {
  invoice: string
  name: string
  plan: string
  amount: string
}

export interface DonutLegendItem {
  color: string
  label: string
  value: string
}

export interface DashboardMetrics {
  kpiCards: KpiCard[]
  barHeights: number[]
  attendanceFeed: AttendanceFeedItem[]
  recentMembers: RecentMemberItem[]
  recentPayments: RecentPaymentItem[]
  donutLegend: DonutLegendItem[]
}
