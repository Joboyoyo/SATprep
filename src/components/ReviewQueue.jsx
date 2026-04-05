import { useState, useEffect } from 'react'
import { getReviewQueue, getDueQuestions, promoteInQueue, resetInQueue, TIER_LABELS } from '../utils/storage'
import questions from '../data/questions'
import QuestionCard from './QuestionCard'

export default function ReviewQueue() {
  const [queue, setQueue] = useState([])
  const [dueItems, setDueItems] = useState([])
  const [currentReview, setCurrentReview] = useState(null)
  const [, setTick] = useState(0)

  const refresh = () => {
    setQueue(getReviewQueue())
    setDueItems(getDueQuestions())
    setTick(t => t + 1)
  }

  useEffect(() => {
    refresh()
    const interval = setInterval(refresh, 30000)
    return () => clearInterval(interval)
  }, [])

  const startReview = () => {
    const due = getDueQuestions()
    if (due.length > 0) {
      setCurrentReview(due[0])
    }
  }

  const handleAnswer = (correct) => {
    if (!currentReview) return

    if (correct) {
      promoteInQueue(currentReview.questionId)
    } else {
      resetInQueue(currentReview.questionId)
    }
  }

  const handleNext = () => {
    refresh()
    const due = getDueQuestions()
    if (due.length > 0) {
      setCurrentReview(due[0])
    } else {
      setCurrentReview(null)
    }
  }

  if (currentReview) {
    const q = questions.find(q => q.id === currentReview.questionId)
    if (q) {
      return (
        <div className="review-active">
          <div className="review-header">
            <h2>Review Mode</h2>
            <button className="btn-secondary" onClick={() => { setCurrentReview(null); refresh() }}>
              Back to Queue
            </button>
          </div>
          <QuestionCard question={q} onAnswer={handleAnswer} onNext={handleNext} />
        </div>
      )
    }
  }

  const grouped = [0, 1, 2, 3].map(tier => ({
    tier,
    label: TIER_LABELS[tier],
    items: queue.filter(item => item.tier === tier),
  }))

  const formatTime = (timestamp) => {
    const diff = timestamp - Date.now()
    if (diff <= 0) return 'Due now'
    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    if (hours > 24) return `${Math.floor(hours / 24)}d ${hours % 24}h`
    if (hours > 0) return `${hours}h ${minutes}m`
    return `${minutes}m`
  }

  return (
    <div className="review-queue">
      <div className="review-top">
        <h2>Review Queue</h2>
        {dueItems.length > 0 && (
          <button className="btn-primary" onClick={startReview}>
            Review {dueItems.length} Due Question{dueItems.length !== 1 ? 's' : ''}
          </button>
        )}
      </div>

      {queue.length === 0 ? (
        <div className="empty-state">
          <p>No missed questions yet. Keep practicing!</p>
        </div>
      ) : (
        <div className="tier-groups">
          {grouped.map(group => group.items.length > 0 && (
            <div key={group.tier} className="tier-group">
              <h3 className="tier-label">
                <span className={`tier-dot tier-${group.tier}`} />
                {group.label} interval
                <span className="tier-count">{group.items.length}</span>
              </h3>
              <div className="tier-items">
                {group.items.map(item => {
                  const q = questions.find(q => q.id === item.questionId)
                  if (!q) return null
                  return (
                    <div key={item.questionId} className={`review-item ${Date.now() >= item.reviewAt ? 'due' : ''}`}>
                      <div className="review-item-left">
                        <div className="review-badges">
                          <span className={`category-badge-sm cat-${q.category.toLowerCase().replace(/\s+/g, '-')}`}>
                            {q.category}
                          </span>
                          <span className={`difficulty-badge-sm diff-${q.difficulty.toLowerCase()}`}>
                            {q.difficulty}
                          </span>
                        </div>
                        <div className="review-item-question">{q.question}</div>
                      </div>
                      <div className="review-item-time">
                        {formatTime(item.reviewAt)}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
