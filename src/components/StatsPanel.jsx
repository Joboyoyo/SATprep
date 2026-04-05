import { useState } from 'react'
import { getStats, clearStats, getStreak, getDailyGoal, setDailyGoal, getTodayAnswerCount, getWordBank, getStarred } from '../utils/storage'
import { ACHIEVEMENTS, checkAchievements, predictSATScore, getScoreLabel } from '../utils/achievements'
import questions from '../data/questions'
import ContributionHeatmap from './ContributionHeatmap'

const CATEGORIES = [...new Set(questions.map(q => q.category))]
const DIFFICULTIES = ['Easy', 'Medium', 'Hard']

export default function StatsPanel() {
  const [stats, setStats] = useState(() => getStats())
  const [dailyGoal, setDailyGoalState] = useState(() => getDailyGoal())
  const [editingGoal, setEditingGoal] = useState(false)
  const [goalInput, setGoalInput] = useState(String(dailyGoal))
  const streak = getStreak()
  const todayCount = getTodayAnswerCount()
  const goalProgress = Math.min(100, (todayCount / dailyGoal) * 100)
  const goalHit = todayCount >= dailyGoal

  const predictedScore = predictSATScore(stats)
  const scoreLabel = predictedScore !== null ? getScoreLabel(predictedScore) : null

  const wordBank = getWordBank()
  const starred = getStarred()
  const earned = checkAchievements({
    stats,
    streak,
    wordBank,
    starred,
    dailyGoalHit: goalHit,
  })

  const handleClear = () => {
    clearStats()
    setStats([])
  }

  const handleSaveGoal = () => {
    const n = parseInt(goalInput, 10)
    if (!isNaN(n) && n > 0 && n <= 200) {
      setDailyGoal(n)
      setDailyGoalState(n)
    }
    setEditingGoal(false)
  }

  const totalAnswered = stats.length
  const totalCorrect = stats.filter(s => s.correct).length
  const accuracy = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0

  const categoryStats = CATEGORIES.map(cat => {
    const catAnswers = stats.filter(s => s.category === cat)
    const catCorrect = catAnswers.filter(s => s.correct).length
    const catTotal = catAnswers.length
    const catAccuracy = catTotal > 0 ? Math.round((catCorrect / catTotal) * 100) : null
    return { category: cat, correct: catCorrect, total: catTotal, accuracy: catAccuracy }
  }).sort((a, b) => {
    if (a.accuracy === null) return 1
    if (b.accuracy === null) return -1
    return a.accuracy - b.accuracy
  })

  const weakest = categoryStats.find(c => c.total > 0)
  const strongest = [...categoryStats].filter(c => c.total > 0).sort((a, b) => b.accuracy - a.accuracy)[0]

  const recent = [...stats].reverse().slice(0, 10)

  const catClass = (cat) => `cat-${cat.toLowerCase().replace(/\s+/g, '-')}`

  return (
    <div className="stats-panel">
      <div className="stats-header">
        <h2>Statistics</h2>
        <button className="btn-secondary" onClick={handleClear}>Clear Stats</button>
      </div>

      <div className="streak-row">
        <div className="streak-card streak-current">
          <div className="streak-icon">🔥</div>
          <div className="streak-content">
            <div className="streak-number">{streak.current}</div>
            <div className="streak-label">Current Streak {streak.current === 1 ? 'day' : 'days'}</div>
          </div>
        </div>
        <div className="streak-card streak-best">
          <div className="streak-icon">🏆</div>
          <div className="streak-content">
            <div className="streak-number">{streak.best}</div>
            <div className="streak-label">Best Streak {streak.best === 1 ? 'day' : 'days'}</div>
          </div>
        </div>
        <div className="streak-card streak-days">
          <div className="streak-icon">📅</div>
          <div className="streak-content">
            <div className="streak-number">{streak.days ? streak.days.length : 0}</div>
            <div className="streak-label">Total Days Practiced</div>
          </div>
        </div>
      </div>

      <div className="goal-score-row">
        <div className="goal-ring-card">
          <div className="goal-ring-container">
            <svg className="goal-ring" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="var(--bg-hover)" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="50"
                fill="none"
                stroke={goalHit ? 'var(--correct)' : '#3b82f6'}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${goalProgress * 3.1416} ${314.16 - goalProgress * 3.1416}`}
                strokeDashoffset="78.54"
                style={{ transition: 'stroke-dasharray 0.5s ease' }}
              />
            </svg>
            <div className="goal-ring-text">
              <span className="goal-ring-count">{todayCount}</span>
              <span className="goal-ring-divider">/ {dailyGoal}</span>
            </div>
          </div>
          <div className="goal-info">
            <div className="goal-label">
              Daily Goal {goalHit && <span className="goal-done-badge">✓ Hit!</span>}
            </div>
            {editingGoal ? (
              <div className="goal-edit">
                <input
                  type="number"
                  min="1"
                  max="200"
                  value={goalInput}
                  onChange={e => setGoalInput(e.target.value)}
                  className="goal-input"
                  autoFocus
                />
                <button className="btn-secondary" onClick={handleSaveGoal}>Save</button>
              </div>
            ) : (
              <button className="goal-edit-btn" onClick={() => { setGoalInput(String(dailyGoal)); setEditingGoal(true) }}>
                Change goal ({dailyGoal}/day)
              </button>
            )}
          </div>
        </div>

        {predictedScore !== null ? (
          <div className="predicted-score-card">
            <div className="predicted-score-label">Predicted R&W Score</div>
            <div className="predicted-score-number" style={{ color: scoreLabel.color }}>
              {predictedScore}
            </div>
            <div className="predicted-score-range">200–800 scale</div>
            <div className="predicted-score-tag" style={{ background: scoreLabel.color + '20', color: scoreLabel.color, borderColor: scoreLabel.color + '40' }}>
              {scoreLabel.label}
            </div>
            <div className="predicted-score-note">
              Weighted by difficulty · Based on {stats.length} answers
            </div>
          </div>
        ) : (
          <div className="predicted-score-card">
            <div className="predicted-score-label">Predicted R&W Score</div>
            <div className="predicted-score-empty">
              Answer at least 5 questions to see your predicted score
            </div>
          </div>
        )}
      </div>

      <div className="stats-section">
        <h3>Achievements <span className="achievements-count">{earned.size} / {ACHIEVEMENTS.length}</span></h3>
        <div className="achievements-grid">
          {ACHIEVEMENTS.map(a => {
            const isEarned = earned.has(a.id)
            return (
              <div
                key={a.id}
                className={`achievement ${isEarned ? 'earned' : 'locked'}`}
                title={a.description}
              >
                <div className="achievement-icon">{isEarned ? a.icon : '🔒'}</div>
                <div className="achievement-info">
                  <div className="achievement-title">{a.title}</div>
                  <div className="achievement-desc">{a.description}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {totalAnswered === 0 ? (
        <div className="empty-state">
          <p>No question data yet. Start practicing to see your full stats!</p>
        </div>
      ) : (
        <>
      <div className="stats-section">
        <h3>Activity</h3>
        <ContributionHeatmap stats={stats} weeks={16} />
      </div>

      <div className="stats-grid">
        <div className="stat-card stat-card-big">
          <div className="stat-ring-container">
            <svg className="stat-ring" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="52" fill="none" stroke="var(--bg-hover)" strokeWidth="10" />
              <circle
                cx="60" cy="60" r="52"
                fill="none"
                stroke={accuracy >= 70 ? 'var(--correct)' : accuracy >= 40 ? '#f59e0b' : 'var(--incorrect)'}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={`${accuracy * 3.267} ${326.7 - accuracy * 3.267}`}
                strokeDashoffset="81.675"
                style={{ transition: 'stroke-dasharray 0.5s ease' }}
              />
            </svg>
            <div className="stat-ring-text">
              <span className="stat-ring-pct">{accuracy}%</span>
            </div>
          </div>
          <div className="stat-label">Overall Accuracy</div>
          <div className="stat-sublabel">{totalCorrect} / {totalAnswered} correct</div>
        </div>

        <div className="stat-card">
          <div className="stat-number">{totalAnswered}</div>
          <div className="stat-label">Questions Answered</div>
        </div>

        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--correct)' }}>{totalCorrect}</div>
          <div className="stat-label">Correct</div>
        </div>

        <div className="stat-card">
          <div className="stat-number" style={{ color: 'var(--incorrect)' }}>{totalAnswered - totalCorrect}</div>
          <div className="stat-label">Incorrect</div>
        </div>
      </div>

      {weakest && strongest && weakest.category !== strongest.category && (
        <div className="stats-insights">
          <div className="insight-card insight-weak">
            <span className="insight-icon">!</span>
            <div>
              <div className="insight-title">Weakest: {weakest.category}</div>
              <div className="insight-detail">{weakest.accuracy}% accuracy ({weakest.correct}/{weakest.total})</div>
            </div>
          </div>
          <div className="insight-card insight-strong">
            <span className="insight-icon">*</span>
            <div>
              <div className="insight-title">Strongest: {strongest.category}</div>
              <div className="insight-detail">{strongest.accuracy}% accuracy ({strongest.correct}/{strongest.total})</div>
            </div>
          </div>
        </div>
      )}

      <div className="stats-section">
        <h3>By Category</h3>
        <div className="category-bars">
          {categoryStats.map(cat => (
            <div key={cat.category} className="cat-bar-row">
              <div className="cat-bar-label">
                <span className={`category-badge-sm ${catClass(cat.category)}`}>{cat.category}</span>
                <span className="cat-bar-score">
                  {cat.total > 0 ? `${cat.accuracy}% (${cat.correct}/${cat.total})` : 'No data'}
                </span>
              </div>
              <div className="cat-bar-track">
                <div
                  className={`cat-bar-fill ${catClass(cat.category)}`}
                  style={{ width: cat.accuracy !== null ? `${cat.accuracy}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-section">
        <h3>By Difficulty</h3>
        <div className="category-bars">
          {DIFFICULTIES.map(diff => {
            const diffAnswers = stats.filter(s => {
              const q = questions.find(q => q.id === s.questionId)
              return q && q.difficulty === diff
            })
            const diffCorrect = diffAnswers.filter(s => s.correct).length
            const diffTotal = diffAnswers.length
            const diffAccuracy = diffTotal > 0 ? Math.round((diffCorrect / diffTotal) * 100) : null
            return (
              <div key={diff} className="cat-bar-row">
                <div className="cat-bar-label">
                  <span className={`difficulty-badge-sm diff-${diff.toLowerCase()}`}>{diff}</span>
                  <span className="cat-bar-score">
                    {diffTotal > 0 ? `${diffAccuracy}% (${diffCorrect}/${diffTotal})` : 'No data'}
                  </span>
                </div>
                <div className="cat-bar-track">
                  <div
                    className={`cat-bar-fill diff-bar-${diff.toLowerCase()}`}
                    style={{ width: diffAccuracy !== null ? `${diffAccuracy}%` : '0%' }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="stats-section">
        <h3>Recent Activity</h3>
        <div className="recent-list">
          {recent.map((entry, i) => {
            const q = questions.find(q => q.id === entry.questionId)
            return (
              <div key={i} className="recent-item">
                <span className={`recent-dot ${entry.correct ? 'dot-correct' : 'dot-incorrect'}`} />
                <span className="recent-question">{q ? q.question : `Question #${entry.questionId}`}</span>
                <span className={`category-badge-sm ${catClass(entry.category)}`}>{entry.category}</span>
              </div>
            )
          })}
        </div>
      </div>
        </>
      )}
    </div>
  )
}
