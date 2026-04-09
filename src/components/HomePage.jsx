import { useState, useEffect } from 'react'

const FEATURES = [
  { icon: '📝', title: 'Practice Questions', desc: '285 SAT-style reading & writing questions across 6 categories and 3 difficulty levels.' },
  { icon: '⏱', title: 'Timed Tests', desc: '27 questions in 32 minutes — simulate real SAT conditions with a countdown timer.' },
  { icon: '🔁', title: 'Spaced Repetition', desc: 'Missed questions come back at 1 hour, 1 day, 3 days, and 1 week intervals.' },
  { icon: '📚', title: 'Word Bank', desc: 'Save vocabulary from questions and drill with flashcards that use spaced repetition.' },
  { icon: '📊', title: 'Stats & Score', desc: 'Track accuracy by category, predicted SAT score, daily streaks, and contribution heatmap.' },
  { icon: '🏆', title: 'Achievements', desc: '16 unlockable milestones from "First Step" to "Unstoppable" — with Steam-style popups.' },
]

const STATS = [
  { number: '285', label: 'Questions' },
  { number: '6', label: 'Categories' },
  { number: '66', label: 'Vocab Words' },
  { number: '3', label: 'Difficulty Levels' },
]

export default function HomePage({ onStart }) {
  const [visitors, setVisitors] = useState(null)
  const [weeklyUsers, setWeeklyUsers] = useState(null)

  useEffect(() => {
    // Track visit in localStorage for weekly count
    const now = Date.now()
    const weekAgo = now - 7 * 24 * 60 * 60 * 1000
    const visits = JSON.parse(localStorage.getItem('satprep_visit_log') || '[]')
    visits.push(now)
    const recentVisits = visits.filter(t => t > weekAgo)
    localStorage.setItem('satprep_visit_log', JSON.stringify(recentVisits))

    // Fetch visitor count from free counter API
    fetch('https://api.counterapi.dev/v1/satprep-cytsai/visits/up')
      .then(r => r.json())
      .then(data => {
        if (data && data.count) setVisitors(data.count)
      })
      .catch(() => {
        // Fallback: use localStorage visit count
        const localCount = parseInt(localStorage.getItem('satprep_local_visits') || '0') + 1
        localStorage.setItem('satprep_local_visits', String(localCount))
        setVisitors(localCount)
      })

    // Weekly users: count unique days with visits in last 7 days
    const uniqueDays = new Set(recentVisits.map(t => new Date(t).toDateString())).size
    setWeeklyUsers(uniqueDays)
  }, [])

  return (
    <div className="homepage">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">SAT Reading Prep</h1>
          <p className="hero-subtitle">
            Free practice with 285 questions, spaced repetition review, vocabulary flashcards, and real-time progress tracking.
          </p>
          <button className="hero-cta" onClick={onStart}>
            Start Practicing
          </button>
        </div>

        <div className="hero-stats">
          {STATS.map(s => (
            <div key={s.label} className="hero-stat">
              <div className="hero-stat-number">{s.number}</div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="home-section">
        <h2 className="home-section-title">Features</h2>
        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="home-section visitors-section">
        <div className="visitor-cards">
          <div className="visitor-card">
            <div className="visitor-number">{visitors !== null ? visitors.toLocaleString() : '—'}</div>
            <div className="visitor-label">Total Visits</div>
          </div>
          <div className="visitor-card">
            <div className="visitor-number">{weeklyUsers !== null ? weeklyUsers : '—'}</div>
            <div className="visitor-label">Days Active This Week</div>
          </div>
        </div>
      </div>

      <div className="home-footer">
        <button className="hero-cta" onClick={onStart}>
          Start Practicing
        </button>
        <p className="home-footer-text">100% free. No sign-up required. All progress saved in your browser.</p>
      </div>
    </div>
  )
}
