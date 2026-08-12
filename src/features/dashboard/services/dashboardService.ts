import { createElement } from 'react'
import type { DashboardMetrics } from '../types/dashboard.types'
import {
  MembersIcon,
  AttendanceIcon,
  TrendingUpIcon,
  AlertCircleIcon,
} from '@/design-system/icons'

export const dashboardService = {
  getMetrics: (): DashboardMetrics => {
    return {
      kpiCards: [
        {
          label: 'Active Members',
          value: '1,085',
          icon: createElement(MembersIcon, { size: 20 }),
          trend: '+12.4%',
          trendType: 'up',
          subtext: 'vs last month',
          color: 'var(--color-success)',
          route: '/members',
        },
        {
          label: "Today's Attendance",
          value: '142',
          icon: createElement(AttendanceIcon, { size: 20 }),
          trend: '18 Active',
          trendType: 'neutral',
          subtext: 'Peak time: 6:00 PM',
          color: 'var(--color-info)',
          route: '/attendance',
        },
        {
          label: 'Monthly Revenue',
          value: '$48,650',
          icon: createElement(TrendingUpIcon, { size: 20 }),
          trend: '+18.4%',
          trendType: 'up',
          subtext: 'Target: $45,000',
          color: 'var(--color-primary)',
          route: '/payments',
        },
        {
          label: 'Pending Renewals',
          value: '14',
          icon: createElement(AlertCircleIcon, { size: 20 }),
          trend: 'Action needed',
          trendType: 'warning',
          subtext: 'Expiring within 7 days',
          color: 'var(--color-warning)',
          route: '/subscriptions',
        },
      ],
      barHeights: [30, 50, 45, 70, 85, 95, 80, 60, 45, 55, 70, 90, 100, 78, 55, 40, 30, 20],
      attendanceFeed: [
        { initials: 'ZM', name: 'Zain Malik', sub: 'Platinum VIP • Turnstile 01', time: '6:02 AM' },
        { initials: 'EW', name: 'Emily Watson', sub: 'Corporate Elite • Main Gate', time: '6:15 AM' },
        { initials: 'DC', name: 'David Chen', sub: 'Platinum VIP • Turnstile 02', time: '6:31 AM' },
        { initials: 'RK', name: 'Riya Kapoor', sub: 'Gold Fitness • Main Gate', time: '7:10 AM' },
        { initials: 'MN', name: 'Marco Novak', sub: 'Gold Fitness • Turnstile 01', time: '7:42 AM' },
      ],
      recentMembers: [
        { initials: 'ZM', name: 'Zain Malik', plan: 'Platinum VIP', trainer: 'Alex Rivera' },
        { initials: 'EW', name: 'Emily Watson', plan: 'Corporate Elite', trainer: 'Elena Rostova' },
        { initials: 'DC', name: 'David Chen', plan: 'Platinum VIP', trainer: 'Alex Rivera' },
        { initials: 'RK', name: 'Riya Kapoor', plan: 'Gold Fitness', trainer: 'Jamal Hassan' },
      ],
      recentPayments: [
        { invoice: 'INV-2026-001', name: 'Zain Malik', plan: 'Platinum VIP', amount: '$149.00' },
        { invoice: 'INV-2026-002', name: 'David Chen', plan: 'Platinum VIP', amount: '$149.00' },
        { invoice: 'INV-2026-003', name: 'Emily Watson', plan: 'Corporate Elite', amount: '$119.00' },
        { invoice: 'INV-2026-004', name: 'Riya Kapoor', plan: 'Gold Fitness', amount: '$89.00' },
      ],
      donutLegend: [
        { color: 'var(--color-primary)', label: 'Platinum VIP', value: '54%' },
        { color: 'var(--color-success)', label: 'Gold Fitness', value: '24%' },
        { color: 'var(--color-warning)', label: 'Corporate Club', value: '12%' },
        { color: 'var(--color-info)', label: 'Basic Access', value: '10%' },
      ],
    }
  },
}
