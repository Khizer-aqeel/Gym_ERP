import { useState, useEffect } from 'react'
import { dashboardService } from '../services/dashboardService'
import type { DashboardMetrics } from '../types/dashboard.types'

export function useDashboardData() {
  const [metrics, setMetrics] = useState<DashboardMetrics>(() => dashboardService.getMetrics())
  const [time, setTime] = useState<Date>(new Date())
  const [activeFilter, setActiveFilter] = useState<string>('Today')
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false)

  // Live clock interval
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setMetrics(dashboardService.getMetrics())
      setIsRefreshing(false)
    }, 400)
  }

  const formattedDate = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })

  return {
    metrics,
    formattedDate,
    formattedTime,
    activeFilter,
    setActiveFilter,
    isRefreshing,
    handleRefresh,
  }
}
