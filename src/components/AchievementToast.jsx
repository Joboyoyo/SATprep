import { useState, useEffect } from 'react'

export default function AchievementToast({ achievement, onDone }) {
  const [phase, setPhase] = useState('enter') // enter → visible → exit → done

  useEffect(() => {
    // Slide in
    const visibleTimer = setTimeout(() => setPhase('visible'), 50)
    // Start exit after 4 seconds
    const exitTimer = setTimeout(() => setPhase('exit'), 4000)
    // Remove after exit animation
    const doneTimer = setTimeout(() => onDone(), 4500)

    return () => {
      clearTimeout(visibleTimer)
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  return (
    <div className={`achievement-toast ${phase}`}>
      <div className="achievement-toast-glow" />
      <div className="achievement-toast-content">
        <div className="achievement-toast-header">ACHIEVEMENT UNLOCKED</div>
        <div className="achievement-toast-body">
          <span className="achievement-toast-icon">{achievement.icon}</span>
          <div className="achievement-toast-info">
            <div className="achievement-toast-title">{achievement.title}</div>
            <div className="achievement-toast-desc">{achievement.description}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
