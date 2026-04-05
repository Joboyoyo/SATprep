import { useState, useEffect, useRef } from 'react'
import { addWord, isWordSaved, isStarred, toggleStar } from '../utils/storage'

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

export default function QuestionCard({ question, onAnswer, onNext, onStarChange, reviewOnly = false }) {
  const [selected, setSelected] = useState(reviewOnly ? question.correctAnswer : null)
  const [submitted, setSubmitted] = useState(reviewOnly)
  const [elapsed, setElapsed] = useState(0)
  const startRef = useRef(Date.now())
  const [starred, setStarred] = useState(() => isStarred(question.id))
  const [struck, setStruck] = useState(new Set())

  const handleToggleStar = () => {
    setStarred(toggleStar(question.id))
    if (onStarChange) onStarChange()
  }

  const handleRightClick = (e, i) => {
    e.preventDefault()
    if (submitted) return
    setStruck(prev => {
      const next = new Set(prev)
      if (next.has(i)) next.delete(i)
      else next.add(i)
      return next
    })
    if (selected === i) setSelected(null)
  }
  const [savedWords, setSavedWords] = useState(() => {
    if (reviewOnly && question.vocabWords) {
      const saved = {}
      question.vocabWords.forEach(v => { saved[v.word] = isWordSaved(v.word) })
      return saved
    }
    return {}
  })

  useEffect(() => {
    if (submitted || reviewOnly) return
    const interval = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startRef.current) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [submitted, reviewOnly])

  const handleSelect = (index) => {
    if (submitted) return
    if (struck.has(index)) return
    setSelected(index)
  }

  const handleSubmit = () => {
    if (selected === null) return
    setSubmitted(true)
    onAnswer(selected === question.correctAnswer)

    if (question.vocabWords) {
      const saved = {}
      question.vocabWords.forEach(v => {
        saved[v.word] = isWordSaved(v.word)
      })
      setSavedWords(saved)
    }
  }

  const handleNext = () => {
    setSelected(null)
    setSubmitted(false)
    setSavedWords({})
    setStruck(new Set())
    onNext()
  }

  const handleSaveWord = (vocab) => {
    addWord(vocab.word, vocab.definition, `Question #${question.id}`)
    setSavedWords(prev => ({ ...prev, [vocab.word]: true }))
  }

  return (
    <div className="question-card">
      <div className="category-badge-bar">
        <span className={`category-badge cat-${question.category.toLowerCase().replace(/\s+/g, '-')}`}>
          {question.category}
        </span>
        <span className={`difficulty-badge diff-${question.difficulty.toLowerCase()}`}>
          {question.difficulty}
        </span>
        {!reviewOnly && (
          <span className={`timer-badge ${submitted ? 'timer-stopped' : ''}`}>
            {formatTime(elapsed)}
          </span>
        )}
        <button
          className={`star-btn ${starred ? 'starred' : ''}`}
          onClick={handleToggleStar}
          title={starred ? 'Unstar question' : 'Star question'}
          aria-label={starred ? 'Unstar question' : 'Star question'}
        >
          {starred ? '★' : '☆'}
        </button>
      </div>
      <div className="passage">
        <p>{question.passage}</p>
      </div>

      <div className="question-section">
        <h3 className="question-text">{question.question}</h3>

        <div className="choices">
          {question.choices.map((choice, i) => {
            let className = 'choice'
            if (submitted) {
              if (i === question.correctAnswer) className += ' correct'
              else if (i === selected && !reviewOnly) className += ' incorrect'
            } else if (i === selected) {
              className += ' selected'
            }
            if (struck.has(i) && !submitted) className += ' struck'

            return (
              <button
                key={i}
                className={className}
                onClick={() => handleSelect(i)}
                onContextMenu={(e) => handleRightClick(e, i)}
                title={!submitted ? 'Right-click to strike through' : undefined}
              >
                {choice}
              </button>
            )
          })}
        </div>

        {!submitted ? (
          <button
            className="btn-primary"
            onClick={handleSubmit}
            disabled={selected === null}
          >
            Submit Answer
          </button>
        ) : (
          <div className="feedback-section">
            {!reviewOnly && (
              <div className={`feedback ${selected === question.correctAnswer ? 'feedback-correct' : 'feedback-incorrect'}`}>
                {selected === question.correctAnswer ? 'Correct!' : 'Incorrect'}
              </div>
            )}
            <p className="explanation">{question.explanation}</p>

            {question.vocabWords && question.vocabWords.length > 0 && (
              <div className="vocab-suggestions">
                <div className="vocab-suggestions-title">Save to Word Bank</div>
                <div className="vocab-suggestion-list">
                  {question.vocabWords.map(v => (
                    <div key={v.word} className="vocab-suggestion">
                      <div className="vocab-suggestion-info">
                        <span className="vocab-word">{v.word}</span>
                        <span className="vocab-def">{v.definition}</span>
                      </div>
                      <button
                        className={`vocab-save-btn ${savedWords[v.word] ? 'saved' : ''}`}
                        onClick={() => handleSaveWord(v)}
                        disabled={savedWords[v.word]}
                      >
                        {savedWords[v.word] ? 'Saved' : '+ Save'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button className="btn-primary" onClick={handleNext}>
              {reviewOnly ? 'Back to Current Question' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
