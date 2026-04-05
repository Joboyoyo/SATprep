import { useState } from 'react'
import { getWordBank, addWord, removeWord, toggleMastered, markWordCorrect, markWordIncorrect, getDueWords, WORD_TIER_LABELS } from '../utils/storage'

export default function WordBank() {
  const [words, setWords] = useState(() => getWordBank())
  const [filter, setFilter] = useState('all')
  const [mode, setMode] = useState('list')
  const [newWord, setNewWord] = useState('')
  const [newDef, setNewDef] = useState('')
  const [flashQueue, setFlashQueue] = useState([])
  const [flipped, setFlipped] = useState(false)
  const [sessionCorrect, setSessionCorrect] = useState(0)
  const [sessionTotal, setSessionTotal] = useState(0)

  const refresh = () => setWords(getWordBank())

  const filtered = words.filter(w => {
    if (filter === 'unmastered') return !w.mastered
    if (filter === 'mastered') return w.mastered
    return true
  })

  const handleAdd = (e) => {
    e.preventDefault()
    if (!newWord.trim() || !newDef.trim()) return
    addWord(newWord, newDef, 'Manual')
    setNewWord('')
    setNewDef('')
    refresh()
  }

  const handleRemove = (word) => {
    removeWord(word)
    refresh()
  }

  const handleToggle = (word) => {
    toggleMastered(word)
    refresh()
  }

  const startFlashcards = () => {
    const due = getDueWords()
    if (due.length === 0) {
      // If nothing due, use all unmastered words
      const unmastered = getWordBank().filter(w => !w.mastered)
      setFlashQueue(unmastered.map(w => w.word))
    } else {
      setFlashQueue(due.map(w => w.word))
    }
    setFlipped(false)
    setSessionCorrect(0)
    setSessionTotal(0)
    setMode('flashcard')
  }

  const currentFlashWord = flashQueue.length > 0
    ? getWordBank().find(w => w.word.toLowerCase() === flashQueue[0].toLowerCase())
    : null

  const handleCorrect = () => {
    if (!currentFlashWord) return
    markWordCorrect(currentFlashWord.word)
    setSessionCorrect(c => c + 1)
    setSessionTotal(t => t + 1)
    setFlashQueue(q => q.slice(1))
    setFlipped(false)
    refresh()
  }

  const handleIncorrect = () => {
    if (!currentFlashWord) return
    markWordIncorrect(currentFlashWord.word)
    setSessionTotal(t => t + 1)
    // Put it back at the end of the queue
    setFlashQueue(q => [...q.slice(1), q[0]])
    setFlipped(false)
    refresh()
  }

  const dueCount = getDueWords().length

  const formatNextReview = (reviewAt) => {
    if (!reviewAt) return 'Now'
    const diff = reviewAt - Date.now()
    if (diff <= 0) return 'Now'
    const hours = Math.floor(diff / (1000 * 60 * 60))
    if (hours > 24) return `${Math.floor(hours / 24)}d`
    if (hours > 0) return `${hours}h`
    return `${Math.floor(diff / (1000 * 60))}m`
  }

  // Flashcard mode
  if (mode === 'flashcard') {
    if (!currentFlashWord) {
      return (
        <div className="wordbank">
          <div className="wordbank-header">
            <h2>Session Complete!</h2>
            <button className="btn-secondary" onClick={() => { setMode('list'); refresh() }}>Back to List</button>
          </div>
          <div className="flash-complete">
            <div className="flash-complete-score">
              {sessionTotal > 0 ? Math.round((sessionCorrect / sessionTotal) * 100) : 0}%
            </div>
            <div className="flash-complete-detail">
              {sessionCorrect} correct out of {sessionTotal} attempts
            </div>
            <p className="flash-complete-msg">
              Words you got wrong will appear again immediately. Words you got right are scheduled for later review.
            </p>
            <button className="btn-primary" onClick={() => { setMode('list'); refresh() }}>
              Done
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="wordbank">
        <div className="wordbank-header">
          <h2>Flashcards</h2>
          <button className="btn-secondary" onClick={() => { setMode('list'); refresh() }}>Back to List</button>
        </div>
        <div className="flash-progress">
          {flashQueue.length} remaining &middot; {sessionCorrect}/{sessionTotal} correct
        </div>
        <div
          className={`flashcard ${flipped ? 'flipped' : ''}`}
          onClick={() => setFlipped(f => !f)}
        >
          <div className="flashcard-inner">
            <div className="flashcard-front">
              <span className="flashcard-label">Word</span>
              <span className="flashcard-word">{currentFlashWord.word}</span>
              <span className="flashcard-hint">Click to reveal definition</span>
            </div>
            <div className="flashcard-back">
              <span className="flashcard-label">Definition</span>
              <span className="flashcard-definition">{currentFlashWord.definition}</span>
              {currentFlashWord.source !== 'Manual' && (
                <span className="flashcard-source">From: {currentFlashWord.source}</span>
              )}
            </div>
          </div>
        </div>
        {flipped ? (
          <div className="flash-controls">
            <button className="btn-incorrect" onClick={handleIncorrect}>
              Incorrect — Review Again
            </button>
            <button className="btn-correct" onClick={handleCorrect}>
              Correct — Next Level
            </button>
          </div>
        ) : (
          <div className="flash-controls">
            <div className="flash-tap-hint">Tap the card to reveal the answer</div>
          </div>
        )}
      </div>
    )
  }

  // List mode
  return (
    <div className="wordbank">
      <div className="wordbank-header">
        <h2>Word Bank</h2>
        {words.length > 0 && (
          <button className="btn-primary" onClick={startFlashcards}>
            {dueCount > 0
              ? `Review ${dueCount} Due Word${dueCount !== 1 ? 's' : ''}`
              : `Practice All (${words.filter(w => !w.mastered).length})`
            }
          </button>
        )}
      </div>

      <form className="word-add-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Word or phrase..."
          value={newWord}
          onChange={e => setNewWord(e.target.value)}
          className="word-input"
        />
        <input
          type="text"
          placeholder="Definition..."
          value={newDef}
          onChange={e => setNewDef(e.target.value)}
          className="word-input word-input-def"
        />
        <button type="submit" className="btn-primary" disabled={!newWord.trim() || !newDef.trim()}>
          Add
        </button>
      </form>

      <div className="word-filters">
        {['all', 'unmastered', 'mastered'].map(f => (
          <button
            key={f}
            className={`word-filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f === 'all' ? `All (${words.length})` : f === 'unmastered' ? `Learning (${words.filter(w => !w.mastered).length})` : `Mastered (${words.filter(w => w.mastered).length})`}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>{words.length === 0 ? 'No words saved yet. Add words manually or save them from practice questions!' : 'No words match this filter.'}</p>
        </div>
      ) : (
        <div className="word-list">
          {filtered.map(w => (
            <div key={w.word} className={`word-item ${w.mastered ? 'word-mastered' : ''}`}>
              <div className="word-item-main">
                <div className="word-item-word">{w.word}</div>
                <div className="word-item-def">{w.definition}</div>
                <div className="word-item-meta">
                  <span className="word-source">{w.source}</span>
                  {!w.mastered && (
                    <span className="word-tier">
                      {WORD_TIER_LABELS[w.tier || 0]} &middot; {formatNextReview(w.reviewAt)}
                    </span>
                  )}
                  {w.mastered && <span className="word-tier word-tier-done">Mastered</span>}
                </div>
              </div>
              <div className="word-item-actions">
                <button
                  className={`word-toggle-btn ${w.mastered ? 'mastered' : ''}`}
                  onClick={() => handleToggle(w.word)}
                  title={w.mastered ? 'Mark as learning' : 'Mark as mastered'}
                >
                  {w.mastered ? '✓' : '○'}
                </button>
                <button
                  className="word-delete-btn"
                  onClick={() => handleRemove(w.word)}
                  title="Remove word"
                >
                  {"×"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
