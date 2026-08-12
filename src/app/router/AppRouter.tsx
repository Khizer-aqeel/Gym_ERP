import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import { AuthLayout } from '../layouts/AuthLayout'
import { useAuth } from '../providers/AuthProvider'
import { LoginPage } from '@/features/auth/components/LoginPage'
import { DashboardPage } from '@/features/dashboard/components/DashboardPage'

function ComingSoon({ title }: { title: string }) {
  return (
    <div style={{
      padding: '48px 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    }}>
      <h1 style={{ color: 'var(--color-text-main)', fontSize: '1.875rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
        {title}
      </h1>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
        This module is currently being built. Check back soon.
      </p>
    </div>
  )
}

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Protected */}
        <Route
          element={
            <PrivateRoute>
              <AppLayout />
            </PrivateRoute>
          }
        >
          <Route path="/"               element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard"      element={<DashboardPage />} />
          <Route path="/members"        element={<ComingSoon title="Members Management" />} />
          <Route path="/subscriptions"  element={<ComingSoon title="Membership Plans" />} />
          <Route path="/attendance"     element={<ComingSoon title="Attendance Tracker" />} />
          <Route path="/payments"       element={<ComingSoon title="Payments & Invoices" />} />
          <Route path="/staff"          element={<ComingSoon title="Staff & Trainers" />} />
          <Route path="/equipment"      element={<ComingSoon title="Gym Equipment" />} />
          <Route path="/workout-plans"  element={<ComingSoon title="Workout Plans" />} />
          <Route path="/diet-plans"     element={<ComingSoon title="Diet Plans" />} />
          <Route path="/reports"        element={<ComingSoon title="Analytics & Reports" />} />
          <Route path="/notifications"  element={<ComingSoon title="Notifications Center" />} />
          <Route path="/settings"       element={<ComingSoon title="System Settings" />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
