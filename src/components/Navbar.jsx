import { getDueQuestions, getDueWords, getStreak } from '../utils/storage'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ view, setView }) {
  const dueCount = getDueQuestions().length
  const dueWordCount = getDueWords().length
  const streak = getStreak()

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => setView('home')} style={{ cursor: 'pointer' }}>
        SAT Reading Prep
        {streak.current > 0 && (
          <span className="streak-flame" title={`${streak.current} day streak!`}>
            🔥 {streak.current}
          </span>
        )}
      </div>
      <div className="navbar-tabs">
        <button
          className={`nav-tab ${view === 'practice' ? 'active' : ''}`}
          onClick={() => setView('practice')}
        >
          Practice
        </button>
        <button
          className={`nav-tab ${view === 'review' ? 'active' : ''}`}
          onClick={() => setView('review')}
        >
          Review
          {dueCount > 0 && <span className="badge">{dueCount}</span>}
        </button>
        <button
          className={`nav-tab ${view === 'words' ? 'active' : ''}`}
          onClick={() => setView('words')}
        >
          Words
          {dueWordCount > 0 && <span className="badge">{dueWordCount}</span>}
        </button>
        <button
          className={`nav-tab ${view === 'stats' ? 'active' : ''}`}
          onClick={() => setView('stats')}
        >
          Stats
        </button>
        <ThemeToggle />
      </div>
    </nav>
  )
}
