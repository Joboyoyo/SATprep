import { useState, useCallback, useMemo, useEffect, useRef } from 'react'
import Navbar from './components/Navbar'
import QuestionCard from './components/QuestionCard'
import ReviewQueue from './components/ReviewQueue'
import questions from './data/questions'
import StatsPanel from './components/StatsPanel'
import WordBank from './components/WordBank'
import AchievementToast from './components/AchievementToast'
import HomePage from './components/HomePage'
import { addToReviewQueue, recordAnswer, getAnsweredIds, markAnswered, resetProgress, recordActivity, getStarred, getStats, getStreak, getWordBank, getDailyGoal, getTodayAnswerCount, getUnlockedAchievements, unlockAchievement } from './utils/storage'
import { ACHIEVEMENTS, checkAchievements } from './utils/achievements'

const CATEGORIES = ['All', ...new Set(questions.map(q => q.category))]
const DIFFICULTIES = ['All Levels', 'Easy', 'Medium', 'Hard']
const CATEGORY_LIST = [...new Set(questions.map(q => q.category))]

const TIMED_TEST_DURATION = 32 * 60 // 32 minutes in seconds
const TIMED_TEST_COUNT = 27
const WEAKNESS_COUNT = 10

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function buildWeaknessSession() {
  // Compute per-category accuracy from stats
  const stats = getStats()
  const catScores = CATEGORY_LIST.map(cat => {
    const catStats = stats.filter(s => s.category === cat)
    if (catStats.length === 0) return { cat, accuracy: 0.5, total: 0 } // unknown = treat as middling
    const correct = catStats.filter(s => s.correct).length
    return { cat, accuracy: correct / catStats.length, total: catStats.length }
  })
  // Sort by accuracy ascending (weakest first). Tiebreak: fewer attempts = needs more practice
  catScores.sort((a, b) => a.accuracy - b.accuracy || a.total - b.total)

  // Weight: pull more from weaker categories
  // Top 3 weakest get 60% of slots, next 2 get 40%
  const slots = {}
  const topWeak = catScores.slice(0, 3)
  const midWeak = catScores.slice(3)
  topWeak.forEach((c, i) => { slots[c.cat] = [2, 2, 2][i] || 2 })
  midWeak.forEach((c, i) => { slots[c.cat] = [2, 2][i] || 1 })

  // Ensure we reach WEAKNESS_COUNT total
  let totalSlots = Object.values(slots).reduce((a, b) => a + b, 0)
  while (totalSlots < WEAKNESS_COUNT) {
    slots[topWeak[0].cat] = (slots[topWeak[0].cat] || 0) + 1
    totalSlots++
  }

  // Build question list
  const picked = []
  Object.entries(slots).forEach(([cat, count]) => {
    const pool = shuffle(questions.filter(q => q.category === cat))
    picked.push(...pool.slice(0, count))
  })

  return shuffle(picked).slice(0, WEAKNESS_COUNT)
}

function buildTimedSession() {
  // 27 random questions with a balanced mix
  return shuffle(questions).slice(0, TIMED_TEST_COUNT)
}

function formatSeconds(s) {
  const m = Math.floor(s / 60)
  const sec = s % 60
  return `${m}:${String(sec).padStart(2, '0')}`
}

export default function App() {
  const [view, setView] = useState('home')
  const [category, setCategory] = useState('All')
  const [difficulty, setDifficulty] = useState('All Levels')
  const [answeredIds, setAnsweredIds] = useState(() => getAnsweredIds())
  const [key, setKey] = useState(0)
  const [reviewingPrev, setReviewingPrev] = useState(null)
  const [starredOnly, setStarredOnly] = useState(false)
  const [starredIds, setStarredIds] = useState(() => getStarred())
  const [showFilters, setShowFilters] = useState(false)
  const [toastQueue, setToastQueue] = useState([])
  const prevUnlocked = useRef(new Set(Object.keys(getUnlockedAchievements())))

  const checkForNewAchievements = useCallback(() => {
    const stats = getStats()
    const streak = getStreak()
    const wordBank = getWordBank()
    const starred = getStarred()
    const todayCount = getTodayAnswerCount()
    const dailyGoal = getDailyGoal()
    const earned = checkAchievements({ stats, streak, wordBank, starred, dailyGoalHit: todayCount >= dailyGoal })

    const newlyEarned = []
    earned.forEach(id => {
      if (!prevUnlocked.current.has(id)) {
        if (unlockAchievement(id)) {
          const ach = ACHIEVEMENTS.find(a => a.id === id)
          if (ach) newlyEarned.push(ach)
        }
        prevUnlocked.current.add(id)
      }
    })

    if (newlyEarned.length > 0) {
      setToastQueue(prev => [...prev, ...newlyEarned])
    }
  }, [])

  // Session state
  const [sessionMode, setSessionMode] = useState('free') // 'free' | 'weakness' | 'timed'
  const [sessionQueue, setSessionQueue] = useState([])
  const [sessionIndex, setSessionIndex] = useState(0)
  const [sessionCorrect, setSessionCorrect] = useState(0)
  const [sessionResults, setSessionResults] = useState(null) // { correct, total, byCategory } when finished
  const [timedSecondsLeft, setTimedSecondsLeft] = useState(TIMED_TEST_DURATION)
  const timedStartRef = useRef(null)

  // Timer for timed mode
  useEffect(() => {
    if (sessionMode !== 'timed' || sessionResults) return
    timedStartRef.current = Date.now()
    const interval = setInterval(() => {
      const elapsed = Math.floor((Date.now() - timedStartRef.current) / 1000)
      const remaining = Math.max(0, TIMED_TEST_DURATION - elapsed)
      setTimedSecondsLeft(remaining)
      if (remaining === 0) {
        clearInterval(interval)
        finishSession()
      }
    }, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionMode, sessionResults])

  const filtered = useMemo(
    () => {
      const starSet = new Set(starredIds)
      return questions.filter(q =>
        (category === 'All' || q.category === category) &&
        (difficulty === 'All Levels' || q.difficulty === difficulty) &&
        (!starredOnly || starSet.has(q.id))
      )
    },
    [category, difficulty, starredOnly, starredIds]
  )

  const answeredSet = useMemo(() => new Set(answeredIds), [answeredIds])

  const remaining = useMemo(
    () => filtered.filter(q => !answeredSet.has(q.id)),
    [filtered, answeredSet]
  )

  const answeredInCategory = filtered.length - remaining.length

  // Current question depends on session mode
  const currentQuestion = sessionMode === 'free'
    ? remaining[0]
    : sessionQueue[sessionIndex]

  const isComplete = sessionMode === 'free' && remaining.length === 0

  const handleAnswer = useCallback((correct) => {
    if (!currentQuestion) return
    if (!correct) {
      addToReviewQueue(currentQuestion.id)
    }
    recordAnswer(currentQuestion.id, currentQuestion.category, correct)
    recordActivity()
    if (sessionMode !== 'free' && correct) {
      setSessionCorrect(c => c + 1)
    }
    // Check achievements after a short delay so stats are saved
    setTimeout(checkForNewAchievements, 100)
  }, [currentQuestion, sessionMode, checkForNewAchievements])

  const finishSession = useCallback(() => {
    // Compute per-category breakdown from sessionQueue + use results
    setSessionResults({
      correct: sessionCorrect,
      total: sessionIndex + (sessionMode !== 'free' && currentQuestion ? 0 : 0),
      mode: sessionMode,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionCorrect, sessionIndex, sessionMode, currentQuestion])

  const handleNext = useCallback(() => {
    if (sessionMode === 'free') {
      if (currentQuestion) {
        markAnswered(currentQuestion.id)
        setAnsweredIds(prev => [...prev, currentQuestion.id])
      }
      setReviewingPrev(null)
      setStarredIds(getStarred())
      setKey(k => k + 1)
    } else {
      // Session mode: mark as answered in global progress too
      if (currentQuestion) {
        markAnswered(currentQuestion.id)
        setAnsweredIds(prev => [...prev, currentQuestion.id])
      }
      const nextIdx = sessionIndex + 1
      if (nextIdx >= sessionQueue.length) {
        setSessionResults({
          correct: sessionCorrect,
          total: sessionQueue.length,
          mode: sessionMode,
        })
      } else {
        setSessionIndex(nextIdx)
        setKey(k => k + 1)
      }
    }
  }, [currentQuestion, sessionMode, sessionIndex, sessionQueue, sessionCorrect])

  const lastAnsweredQuestion = useMemo(() => {
    const answeredInFilter = filtered.filter(q => answeredSet.has(q.id))
    return answeredInFilter.length > 0 ? answeredInFilter[answeredInFilter.length - 1] : null
  }, [filtered, answeredSet])

  const handlePrevious = () => {
    if (lastAnsweredQuestion) {
      setReviewingPrev(lastAnsweredQuestion)
    }
  }

  const handleBackToCurrent = () => {
    setReviewingPrev(null)
  }

  const handleReset = () => {
    resetProgress()
    setAnsweredIds([])
    setKey(k => k + 1)
  }

  const startWeakness = () => {
    const queue = buildWeaknessSession()
    setSessionQueue(queue)
    setSessionIndex(0)
    setSessionCorrect(0)
    setSessionResults(null)
    setSessionMode('weakness')
    setKey(k => k + 1)
  }

  const startTimed = () => {
    const queue = buildTimedSession()
    setSessionQueue(queue)
    setSessionIndex(0)
    setSessionCorrect(0)
    setSessionResults(null)
    setTimedSecondsLeft(TIMED_TEST_DURATION)
    setSessionMode('timed')
    setKey(k => k + 1)
  }

  const exitSession = () => {
    setSessionMode('free')
    setSessionQueue([])
    setSessionIndex(0)
    setSessionCorrect(0)
    setSessionResults(null)
    setKey(k => k + 1)
  }

  const sessionAccuracy = sessionResults && sessionResults.total > 0
    ? Math.round((sessionResults.correct / sessionResults.total) * 100)
    : 0

  return (
    <div className="app">
      <Navbar view={view} setView={setView} />

      <main className="main-content">
        {view === 'home' ? (
          <HomePage onStart={() => setView('practice')} />
        ) : view === 'practice' ? (
          <>
            {sessionResults ? (
              <div className="session-results">
                <h2>{sessionResults.mode === 'timed' ? 'Timed Test Complete!' : 'Session Complete!'}</h2>
                <div className="session-results-score">
                  <div className="session-results-percent">{sessionAccuracy}%</div>
                  <div className="session-results-detail">
                    {sessionResults.correct} / {sessionResults.total} correct
                  </div>
                </div>
                <p className="session-results-msg">
                  {sessionAccuracy >= 80 ? 'Excellent work! 🎉' :
                   sessionAccuracy >= 60 ? 'Good job — keep practicing!' :
                   'Keep at it — review your missed questions.'}
                </p>
                <button className="btn-primary" onClick={exitSession}>
                  Back to Practice
                </button>
              </div>
            ) : sessionMode !== 'free' ? (
              <div className="session-active">
                <div className="session-banner">
                  <div className="session-banner-info">
                    <span className="session-banner-title">
                      {sessionMode === 'timed' ? '⏱ Timed Test' : '🎯 Weakness Drill'}
                    </span>
                    <span className="session-banner-progress">
                      Question {sessionIndex + 1} of {sessionQueue.length}
                    </span>
                  </div>
                  {sessionMode === 'timed' && (
                    <div className={`session-timer ${timedSecondsLeft < 300 ? 'urgent' : ''}`}>
                      {formatSeconds(timedSecondsLeft)}
                    </div>
                  )}
                  <button className="btn-secondary" onClick={exitSession}>
                    Exit
                  </button>
                </div>
                {currentQuestion && (
                  <QuestionCard
                    key={key}
                    question={currentQuestion}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    onStarChange={() => setStarredIds(getStarred())}
                  />
                )}
              </div>
            ) : (
              <div className="arena">
                {/* Minimal HUD */}
                <div className="arena-hud">
                  <div className="arena-hud-left">
                    {lastAnsweredQuestion && !reviewingPrev && (
                      <button className="arena-btn" onClick={handlePrevious} title="Previous question">
                        ←
                      </button>
                    )}
                    {reviewingPrev && (
                      <button className="arena-btn" onClick={handleBackToCurrent}>
                        Back
                      </button>
                    )}
                  </div>
                  <div className="arena-hud-center">
                    <span className="arena-count">{answeredInCategory} / {filtered.length}</span>
                  </div>
                  <div className="arena-hud-right">
                    <button className="arena-btn" onClick={startWeakness} title="Weakness Drill">🎯</button>
                    <button className="arena-btn" onClick={startTimed} title="Timed Test">⏱</button>
                    <button className={`arena-btn ${showFilters ? 'arena-btn-active' : ''}`} onClick={() => setShowFilters(f => !f)} title="Filters">
                      ☰
                    </button>
                  </div>
                </div>

                {/* Collapsible filter drawer */}
                {showFilters && (
                  <div className="arena-filters">
                    <div className="category-filters">
                      {CATEGORIES.map(cat => (
                        <button
                          key={cat}
                          className={`category-chip ${category === cat ? 'active' : ''}`}
                          onClick={() => setCategory(cat)}
                        >
                          {cat}
                          <span className="chip-count">
                            {cat === 'All' ? questions.length : questions.filter(q => q.category === cat).length}
                          </span>
                        </button>
                      ))}
                    </div>
                    <div className="category-filters">
                      {DIFFICULTIES.map(diff => (
                        <button
                          key={diff}
                          className={`category-chip diff-chip ${difficulty === diff ? 'active' : ''} ${diff !== 'All Levels' ? 'diff-' + diff.toLowerCase() : ''}`}
                          onClick={() => setDifficulty(diff)}
                        >
                          {diff}
                          <span className="chip-count">
                            {diff === 'All Levels' ? questions.length : questions.filter(q => q.difficulty === diff).length}
                          </span>
                        </button>
                      ))}
                      <button
                        className={`category-chip starred-chip ${starredOnly ? 'active' : ''}`}
                        onClick={() => {
                          setStarredIds(getStarred())
                          setStarredOnly(s => !s)
                        }}
                      >
                        {starredOnly ? '★' : '☆'} Starred
                        <span className="chip-count">{starredIds.length}</span>
                      </button>
                    </div>
                    <button className="btn-primary" onClick={handleReset} style={{ fontSize: '0.78rem', padding: '0.4rem 0.8rem' }}>
                      Reset Progress
                    </button>
                  </div>
                )}

                {/* The arena — just the question */}
                {reviewingPrev ? (
                  <QuestionCard
                    key={'prev-' + reviewingPrev.id}
                    question={reviewingPrev}
                    onAnswer={() => {}}
                    onNext={handleBackToCurrent}
                    reviewOnly
                  />
                ) : isComplete ? (
                  <div className="complete-state">
                    <h2>All done!</h2>
                    <p>You've completed all {filtered.length} questions in this set.</p>
                    <p>Try a different filter, or reset progress to replay.</p>
                    <button className="btn-primary" onClick={handleReset} style={{ marginTop: '1rem' }}>
                      Start Over
                    </button>
                  </div>
                ) : (
                  <QuestionCard
                    key={key}
                    question={currentQuestion}
                    onAnswer={handleAnswer}
                    onNext={handleNext}
                    onStarChange={() => setStarredIds(getStarred())}
                  />
                )}
              </div>
            )}
          </>
        ) : view === 'review' ? (
          <ReviewQueue />
        ) : view === 'words' ? (
          <WordBank />
        ) : (
          <StatsPanel />
        )}
      </main>

      {toastQueue.length > 0 && (
        <AchievementToast
          key={toastQueue[0].id}
          achievement={toastQueue[0]}
          onDone={() => setToastQueue(q => q.slice(1))}
        />
      )}
    </div>
  )
}
