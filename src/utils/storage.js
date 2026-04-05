const STORAGE_KEY = 'satprep_review_queue'
const PROGRESS_KEY = 'satprep_progress'
const STATS_KEY = 'satprep_stats'

const TIER_DELAYS = [
  1 * 60 * 60 * 1000,       // Tier 0: 1 hour
  24 * 60 * 60 * 1000,      // Tier 1: 1 day
  3 * 24 * 60 * 60 * 1000,  // Tier 2: 3 days
  7 * 24 * 60 * 60 * 1000,  // Tier 3: 1 week
]

export const TIER_LABELS = ['1 Hour', '1 Day', '3 Days', '1 Week']

export function getReviewQueue() {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

function saveReviewQueue(queue) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(queue))
}

export function addToReviewQueue(questionId) {
  const queue = getReviewQueue()
  const existing = queue.find(item => item.questionId === questionId)

  if (existing) {
    existing.tier = 0
    existing.missedAt = Date.now()
    existing.reviewAt = Date.now() + TIER_DELAYS[0]
  } else {
    queue.push({
      questionId,
      tier: 0,
      missedAt: Date.now(),
      reviewAt: Date.now() + TIER_DELAYS[0],
    })
  }

  saveReviewQueue(queue)
}

export function promoteInQueue(questionId) {
  const queue = getReviewQueue()
  const index = queue.findIndex(item => item.questionId === questionId)

  if (index === -1) return

  const item = queue[index]

  if (item.tier >= 3) {
    queue.splice(index, 1)
  } else {
    item.tier += 1
    item.reviewAt = Date.now() + TIER_DELAYS[item.tier]
  }

  saveReviewQueue(queue)
}

export function resetInQueue(questionId) {
  const queue = getReviewQueue()
  const item = queue.find(item => item.questionId === questionId)

  if (item) {
    item.tier = 0
    item.reviewAt = Date.now() + TIER_DELAYS[0]
    saveReviewQueue(queue)
  }
}

export function getDueQuestions() {
  const queue = getReviewQueue()
  return queue.filter(item => Date.now() >= item.reviewAt)
}

export function getAnsweredIds() {
  const data = localStorage.getItem(PROGRESS_KEY)
  if (!data) return []
  const parsed = JSON.parse(data)
  // Migrate old format { answeredIds: [], currentIndex: 0 } to plain array
  if (Array.isArray(parsed)) return parsed
  if (parsed && Array.isArray(parsed.answeredIds)) return parsed.answeredIds
  return []
}

export function markAnswered(questionId) {
  const ids = getAnsweredIds()
  if (!ids.includes(questionId)) {
    ids.push(questionId)
    localStorage.setItem(PROGRESS_KEY, JSON.stringify(ids))
  }
}

export function resetProgress() {
  localStorage.removeItem(PROGRESS_KEY)
}

// ========== Stats Tracking ==========

export function recordAnswer(questionId, category, correct) {
  const stats = getStats()
  stats.push({
    questionId,
    category,
    correct,
    timestamp: Date.now(),
  })
  localStorage.setItem(STATS_KEY, JSON.stringify(stats))
}

export function getStats() {
  const data = localStorage.getItem(STATS_KEY)
  return data ? JSON.parse(data) : []
}

export function clearStats() {
  localStorage.removeItem(STATS_KEY)
}

// ========== Daily Goal ==========

const DAILY_GOAL_KEY = 'satprep_daily_goal'

export function getDailyGoal() {
  const data = localStorage.getItem(DAILY_GOAL_KEY)
  return data ? parseInt(data, 10) : 10
}

export function setDailyGoal(target) {
  localStorage.setItem(DAILY_GOAL_KEY, String(target))
}

export function getTodayAnswerCount() {
  const stats = getStats()
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayStart = today.getTime()
  return stats.filter(s => s.timestamp >= todayStart).length
}

// ========== Achievements ==========

const ACHIEVEMENTS_KEY = 'satprep_achievements'

export function getUnlockedAchievements() {
  const data = localStorage.getItem(ACHIEVEMENTS_KEY)
  return data ? JSON.parse(data) : {}
}

export function unlockAchievement(id) {
  const unlocked = getUnlockedAchievements()
  if (!unlocked[id]) {
    unlocked[id] = Date.now()
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(unlocked))
    return true
  }
  return false
}

// ========== Starred Questions ==========

const STARRED_KEY = 'satprep_starred'

export function getStarred() {
  const data = localStorage.getItem(STARRED_KEY)
  return data ? JSON.parse(data) : []
}

export function isStarred(questionId) {
  return getStarred().includes(questionId)
}

export function toggleStar(questionId) {
  const starred = getStarred()
  const idx = starred.indexOf(questionId)
  if (idx >= 0) {
    starred.splice(idx, 1)
  } else {
    starred.push(questionId)
  }
  localStorage.setItem(STARRED_KEY, JSON.stringify(starred))
  return idx < 0 // returns true if now starred
}

// ========== Daily Streak ==========

const STREAK_KEY = 'satprep_streak'

function todayString() {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function dayDiff(dateStrA, dateStrB) {
  const [ya, ma, da] = dateStrA.split('-').map(Number)
  const [yb, mb, db] = dateStrB.split('-').map(Number)
  const a = new Date(ya, ma - 1, da).getTime()
  const b = new Date(yb, mb - 1, db).getTime()
  return Math.round((a - b) / (24 * 60 * 60 * 1000))
}

export function recordActivity() {
  const today = todayString()
  const data = localStorage.getItem(STREAK_KEY)
  const streak = data ? JSON.parse(data) : { current: 0, best: 0, lastDate: null, days: [] }

  if (streak.lastDate === today) {
    return streak // already recorded today
  }

  if (streak.lastDate === null) {
    streak.current = 1
  } else {
    const diff = dayDiff(today, streak.lastDate)
    if (diff === 1) {
      streak.current += 1
    } else {
      streak.current = 1 // gap: reset
    }
  }

  streak.best = Math.max(streak.best, streak.current)
  streak.lastDate = today
  if (!streak.days.includes(today)) streak.days.push(today)

  localStorage.setItem(STREAK_KEY, JSON.stringify(streak))
  return streak
}

export function getStreak() {
  const data = localStorage.getItem(STREAK_KEY)
  if (!data) return { current: 0, best: 0, lastDate: null, days: [] }
  const streak = JSON.parse(data)

  // Check if streak is still "alive" (today or yesterday)
  if (streak.lastDate) {
    const today = todayString()
    const diff = dayDiff(today, streak.lastDate)
    if (diff > 1) {
      // streak broken — show 0 for current, but keep best
      return { ...streak, current: 0 }
    }
  }
  return streak
}

// ========== Word Bank ==========

const WORDBANK_KEY = 'satprep_wordbank'

export function getWordBank() {
  const data = localStorage.getItem(WORDBANK_KEY)
  return data ? JSON.parse(data) : []
}

function saveWordBank(bank) {
  localStorage.setItem(WORDBANK_KEY, JSON.stringify(bank))
}

const WORD_TIER_DELAYS = [
  0,                            // Tier 0: due immediately (just added or got wrong)
  1 * 24 * 60 * 60 * 1000,     // Tier 1: 1 day
  3 * 24 * 60 * 60 * 1000,     // Tier 2: 3 days
  7 * 24 * 60 * 60 * 1000,     // Tier 3: 1 week
  14 * 24 * 60 * 60 * 1000,    // Tier 4: 2 weeks
]

export const WORD_TIER_LABELS = ['Now', '1 Day', '3 Days', '1 Week', '2 Weeks']

export function addWord(word, definition, source = 'Manual') {
  const bank = getWordBank()
  const normalized = word.toLowerCase().trim()
  if (bank.some(w => w.word.toLowerCase() === normalized)) return false
  bank.push({
    word: word.trim(),
    definition: definition.trim(),
    source,
    addedAt: Date.now(),
    mastered: false,
    tier: 0,
    reviewAt: Date.now(),
  })
  saveWordBank(bank)
  return true
}

export function removeWord(word) {
  const bank = getWordBank()
  const filtered = bank.filter(w => w.word.toLowerCase() !== word.toLowerCase())
  saveWordBank(filtered)
}

export function toggleMastered(word) {
  const bank = getWordBank()
  const item = bank.find(w => w.word.toLowerCase() === word.toLowerCase())
  if (item) {
    item.mastered = !item.mastered
    saveWordBank(bank)
  }
}

export function isWordSaved(word) {
  const bank = getWordBank()
  return bank.some(w => w.word.toLowerCase() === word.toLowerCase().trim())
}

export function markWordCorrect(word) {
  const bank = getWordBank()
  const item = bank.find(w => w.word.toLowerCase() === word.toLowerCase())
  if (!item) return
  const newTier = Math.min((item.tier || 0) + 1, WORD_TIER_DELAYS.length - 1)
  item.tier = newTier
  item.reviewAt = Date.now() + WORD_TIER_DELAYS[newTier]
  if (newTier >= WORD_TIER_DELAYS.length - 1) {
    item.mastered = true
  }
  saveWordBank(bank)
}

export function markWordIncorrect(word) {
  const bank = getWordBank()
  const item = bank.find(w => w.word.toLowerCase() === word.toLowerCase())
  if (!item) return
  item.tier = 0
  item.reviewAt = Date.now()
  item.mastered = false
  saveWordBank(bank)
}

export function getDueWords() {
  const bank = getWordBank()
  return bank.filter(w => !w.mastered && Date.now() >= (w.reviewAt || 0))
}
