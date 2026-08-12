import { createContext, useContext, useState, type ReactNode } from 'react'

export interface AuthUser {
  id: string
  name: string
  email: string
  role: 'super_admin' | 'admin' | 'trainer' | 'receptionist'
}

interface AuthContextValue {
  user: AuthUser | null
  isAuthenticated: boolean
  login: (user: AuthUser) => void
  logout: () => void
}

const DEFAULT_DEMO_USER: AuthUser = {
  id: 'usr_admin_01',
  name: 'Khizer',
  email: 'khizer@ironpulse.com',
  role: 'admin',
}

const AuthContext = createContext<AuthContextValue>({
  user: DEFAULT_DEMO_USER,
  isAuthenticated: true,
  login: () => {},
  logout: () => {},
})

export function useAuth() {
  return useContext(AuthContext)
}

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(DEFAULT_DEMO_USER)

  function login(authUser: AuthUser) {
    setUser(authUser)
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
