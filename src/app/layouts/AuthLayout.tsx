import { Outlet } from 'react-router-dom'

// AuthLayout is transparent — LoginPage manages its own full-page layout
export function AuthLayout() {
  return <Outlet />
}
