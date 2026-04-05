import { useState, useEffect } from 'react'

const THEME_KEY = 'satprep_theme'

function getAutoTheme() {
  const hour = new Date().getHours()
  return (hour >= 4 && hour < 16) ? 'light' : 'dark'
}

function applyTheme(mode) {
  const resolved = mode === 'auto' ? getAutoTheme() : mode
  document.documentElement.setAttribute('data-theme', resolved)
}

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => {
    return localStorage.getItem(THEME_KEY) || 'auto'
  })

  useEffect(() => {
    applyTheme(mode)

    if (mode === 'auto') {
      // Check every minute for time-based switch
      const interval = setInterval(() => applyTheme('auto'), 60000)
      return () => clearInterval(interval)
    }
  }, [mode])

  const cycle = () => {
    const next = mode === 'auto' ? 'light' : mode === 'light' ? 'dark' : 'auto'
    setMode(next)
    localStorage.setItem(THEME_KEY, next)
    applyTheme(next)
  }

  const icons = { auto: '◑', light: '☀', dark: '☾' }
  const labels = { auto: 'Auto', light: 'Light', dark: 'Dark' }

  return (
    <button className="theme-toggle" onClick={cycle} title={`Theme: ${labels[mode]}`}>
      <span className="theme-icon">{icons[mode]}</span>
      <span className="theme-label">{labels[mode]}</span>
    </button>
  )
}

// Apply theme immediately on load (before React renders)
const saved = localStorage.getItem(THEME_KEY) || 'auto'
applyTheme(saved)
