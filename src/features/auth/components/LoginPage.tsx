import { useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'
import { useAuth } from '@/app/providers/AuthProvider'
import styles from './LoginPage.module.css'

const PRESETS = [
  { label: 'Khizer',    email: 'khizer@gymerp.com', role: 'super_admin' as const },
  { label: 'Ahad',      email: 'ahad@gymerp.com',   role: 'super_admin' as const },
  { label: 'Reception', email: 'desk@gymerp.com',   role: 'receptionist' as const },
]

function DumbbellIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5h11M6.5 17.5h11M6 4v16M18 4v16M3 8v8M21 8v8" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

function LockShieldIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function EyeIcon({ visible }: { visible: boolean }) {
  if (visible) {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  )
}

export function LoginPage() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('khizer@gymerp.com')
  const [password, setPassword] = useState('password123')
  const [showPassword, setShowPassword] = useState(false)
  const [remember, setRemember] = useState(true)
  const [activePreset, setActivePreset] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />
  }

  function fillPreset(index: number) {
    const p = PRESETS[index]
    setActivePreset(index)
    setEmail(p.email)
    setPassword('password123')
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      const preset = PRESETS.find((p) => p.email === email)
      const user = preset
        ? { id: preset.email, name: preset.label, email: preset.email, role: preset.role }
        : { id: '1', name: 'Admin', email, role: 'admin' as const }
      login(user)
      navigate('/dashboard')
    }, 300)
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        
        {/* Brand & Header */}
        <div className={styles.header}>
          <div className={styles.logoBadge}>
            <DumbbellIcon />
          </div>
          <h1 className={styles.brandTitle}>Gym ERP</h1>
          <p className={styles.brandSubtitle}>Enterprise Management System</p>
        </div>

        {/* Demo Quick Selector Bar */}
        <div className={styles.demoSection}>
          <span className={styles.demoHint}>Demo Access</span>
          <div className={styles.demoSegmentBar}>
            {PRESETS.map((p, i) => (
              <button
                key={p.email}
                type="button"
                className={`${styles.demoSegment} ${activePreset === i ? styles.demoSegmentActive : ''}`}
                onClick={() => fillPreset(i)}
              >
                {activePreset === i && <span className={styles.activeDot} />}
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <form className={styles.form} onSubmit={handleSubmit}>
          
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className={styles.fieldInput}
              placeholder="khizer@gymerp.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.fieldGroup}>
            <div className={styles.labelRow}>
              <label className={styles.fieldLabel} htmlFor="password">
                Password
              </label>
              <a href="#" className={styles.forgotLink} tabIndex={-1}>
                Forgot password?
              </a>
            </div>
            <div className={styles.passwordWrapper}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className={styles.fieldInput}
                placeholder="••••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className={styles.eyeToggle}
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Hide password' : 'Show password'}
                tabIndex={-1}
              >
                <EyeIcon visible={showPassword} />
              </button>
            </div>
          </div>

          <div className={styles.optionsRow}>
            <label className={styles.rememberCheckbox}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <span>Keep me signed in</span>
            </label>
          </div>

          <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
            <span>{isSubmitting ? 'Signing in...' : 'Sign In'}</span>
            {!isSubmitting && <ArrowRightIcon />}
          </button>
        </form>

        {/* Footer Trust Indicator */}
        <div className={styles.trustFooter}>
          <LockShieldIcon />
          <span>256-Bit SSL Encrypted Enterprise Auth</span>
        </div>

      </div>
    </div>
  )
}





