import questions from '../data/questions'

export const ACHIEVEMENTS = [
  { id: 'first_correct', icon: '✓', title: 'First Step', description: 'Get your first question correct' },
  { id: 'ten_answered', icon: '🔟', title: 'Getting Started', description: 'Answer 10 questions' },
  { id: 'fifty_answered', icon: '📚', title: 'Dedicated', description: 'Answer 50 questions' },
  { id: 'hundred_answered', icon: '💯', title: 'Centurion', description: 'Answer 100 questions' },
  { id: 'first_hard_correct', icon: '💪', title: 'Punching Up', description: 'Get a Hard question correct' },
  { id: 'ten_hard_correct', icon: '🦾', title: 'Hard Mode', description: 'Get 10 Hard questions correct' },
  { id: 'streak_3', icon: '🔥', title: 'On a Roll', description: 'Maintain a 3-day streak' },
  { id: 'streak_7', icon: '⚡', title: 'Week Warrior', description: 'Maintain a 7-day streak' },
  { id: 'streak_30', icon: '🏆', title: 'Unstoppable', description: 'Maintain a 30-day streak' },
  { id: 'category_master', icon: '🎓', title: 'Category Master', description: 'Get 80%+ accuracy in a category (5+ attempts)' },
  { id: 'perfect_category', icon: '🌟', title: 'Flawless', description: 'Get 100% in a category (5+ attempts)' },
  { id: 'words_10', icon: '📝', title: 'Word Collector', description: 'Save 10 words to your word bank' },
  { id: 'words_mastered_5', icon: '🧠', title: 'Vocabulary Builder', description: 'Master 5 vocabulary words' },
  { id: 'starred_10', icon: '⭐', title: 'Curator', description: 'Star 10 questions' },
  { id: 'daily_goal', icon: '🎯', title: 'Goal Crusher', description: 'Hit your daily goal' },
  { id: 'overall_80', icon: '🏅', title: 'High Achiever', description: 'Reach 80% overall accuracy (20+ questions)' },
]

export function checkAchievements({ stats, streak, wordBank, starred, dailyGoalHit }) {
  const earned = new Set()

  const totalAnswered = stats.length
  const totalCorrect = stats.filter(s => s.correct).length

  // First correct
  if (totalCorrect >= 1) earned.add('first_correct')

  // Question count milestones
  if (totalAnswered >= 10) earned.add('ten_answered')
  if (totalAnswered >= 50) earned.add('fifty_answered')
  if (totalAnswered >= 100) earned.add('hundred_answered')

  // Hard questions
  const hardCorrect = stats.filter(s => {
    if (!s.correct) return false
    const q = questions.find(q => q.id === s.questionId)
    return q && q.difficulty === 'Hard'
  }).length
  if (hardCorrect >= 1) earned.add('first_hard_correct')
  if (hardCorrect >= 10) earned.add('ten_hard_correct')

  // Streaks
  if (streak.best >= 3) earned.add('streak_3')
  if (streak.best >= 7) earned.add('streak_7')
  if (streak.best >= 30) earned.add('streak_30')

  // Category mastery
  const categories = [...new Set(questions.map(q => q.category))]
  categories.forEach(cat => {
    const catStats = stats.filter(s => s.category === cat)
    if (catStats.length >= 5) {
      const acc = catStats.filter(s => s.correct).length / catStats.length
      if (acc >= 0.8) earned.add('category_master')
      if (acc === 1) earned.add('perfect_category')
    }
  })

  // Words
  if (wordBank.length >= 10) earned.add('words_10')
  if (wordBank.filter(w => w.mastered).length >= 5) earned.add('words_mastered_5')

  // Starred
  if (starred.length >= 10) earned.add('starred_10')

  // Daily goal
  if (dailyGoalHit) earned.add('daily_goal')

  // Overall accuracy
  if (totalAnswered >= 20 && totalCorrect / totalAnswered >= 0.8) earned.add('overall_80')

  return earned
}

// ========== SAT Score Prediction ==========

// Predict Reading & Writing score (200-800) based on weighted accuracy.
// Weights: Easy=1, Medium=2, Hard=3. Minimum 5 answered to predict.
export function predictSATScore(stats) {
  if (stats.length < 5) return null

  const weights = { Easy: 1, Medium: 2, Hard: 3 }
  let totalWeight = 0
  let earnedWeight = 0

  stats.forEach(s => {
    const q = questions.find(q => q.id === s.questionId)
    if (!q) return
    const w = weights[q.difficulty] || 2
    totalWeight += w
    if (s.correct) earnedWeight += w
  })

  if (totalWeight === 0) return null
  const weightedAccuracy = earnedWeight / totalWeight

  // Map 0-1 accuracy to 200-800.
  // Curve it so that very low accuracy still floors at 200 and perfect is 800.
  // Most high schoolers score 400-600, so shift the curve a bit.
  // Using: score = 200 + (accuracy^0.75) * 600 to make early gains easier
  const score = Math.round(200 + Math.pow(weightedAccuracy, 0.75) * 600)
  return Math.min(800, Math.max(200, score))
}

// Get a score label based on the predicted score
export function getScoreLabel(score) {
  if (score >= 700) return { label: 'Elite', color: '#a855f7' }
  if (score >= 600) return { label: 'Strong', color: '#22c55e' }
  if (score >= 500) return { label: 'Solid', color: '#3b82f6' }
  if (score >= 400) return { label: 'Developing', color: '#f59e0b' }
  return { label: 'Beginning', color: '#ef4444' }
}
