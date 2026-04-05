import { useState } from 'react'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAY_MS = 24 * 60 * 60 * 1000

function formatDate(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

function formatFullDate(d) {
  return d.toLocaleDateString(undefined, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
}

function getLevel(count) {
  if (count === 0) return 0
  if (count <= 2) return 1
  if (count <= 5) return 2
  if (count <= 10) return 3
  return 4
}

function startOfDay(d) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}

export default function ContributionHeatmap({ stats, weeks = 16 }) {
  const [tooltip, setTooltip] = useState(null)

  // Build map: dateString -> { total, correct }
  const dayMap = {}
  stats.forEach(s => {
    const d = new Date(s.timestamp)
    const key = formatDate(d)
    if (!dayMap[key]) dayMap[key] = { total: 0, correct: 0 }
    dayMap[key].total += 1
    if (s.correct) dayMap[key].correct += 1
  })

  // Build list of all days in window
  const today = startOfDay(new Date())
  const todayDow = today.getDay()
  // End date = Saturday of the current week
  const endDate = new Date(today)
  endDate.setDate(today.getDate() + (6 - todayDow))
  // Start date = (weeks * 7 - 1) days before end
  const startDate = new Date(endDate)
  startDate.setDate(endDate.getDate() - (weeks * 7 - 1))

  const allDays = []
  for (let i = 0; i < weeks * 7; i++) {
    const d = new Date(startDate)
    d.setDate(startDate.getDate() + i)
    const isFuture = d > today
    const key = formatDate(d)
    const data = dayMap[key] || { total: 0, correct: 0 }
    allDays.push({ date: d, key, isFuture, ...data })
  }

  // Group by month (preserves chronological order)
  const monthGroups = []
  let currentGroup = null
  allDays.forEach(day => {
    const year = day.date.getFullYear()
    const month = day.date.getMonth()
    const groupKey = `${year}-${month}`
    if (!currentGroup || currentGroup.key !== groupKey) {
      currentGroup = { key: groupKey, year, month, label: MONTHS[month], days: [] }
      monthGroups.push(currentGroup)
    }
    currentGroup.days.push(day)
  })

  // For each month group, build a 2D grid [column][row] where row = day of week
  monthGroups.forEach(group => {
    const first = group.days[0].date
    const last = group.days[group.days.length - 1].date
    // Sunday of first week in this group
    const firstSun = new Date(first)
    firstSun.setDate(first.getDate() - first.getDay())
    // Saturday of last week in this group
    const lastSat = new Date(last)
    lastSat.setDate(last.getDate() + (6 - last.getDay()))
    const numCols = Math.round((lastSat - firstSun) / (7 * DAY_MS)) + 1
    const grid = Array.from({ length: numCols }, () => Array(7).fill(null))
    group.days.forEach(day => {
      const col = Math.floor((day.date - firstSun) / (7 * DAY_MS))
      const row = day.date.getDay()
      grid[col][row] = day
    })
    group.grid = grid
    group.numCols = numCols
  })

  const totalAnswered = stats.length
  const activeDays = Object.keys(dayMap).length

  const handleEnter = (e, cell) => {
    const rect = e.currentTarget.getBoundingClientRect()
    // Use viewport coords for fixed positioning. Flip below if not enough room above.
    const flipBelow = rect.top < 60
    setTooltip({
      x: rect.left + rect.width / 2,
      y: flipBelow ? rect.bottom : rect.top,
      cell,
      below: flipBelow,
    })
  }

  const handleLeave = () => setTooltip(null)

  return (
    <div className="heatmap-container">
      <div className="heatmap-header">
        <span className="heatmap-title">{totalAnswered} question{totalAnswered !== 1 ? 's' : ''} over {activeDays} day{activeDays !== 1 ? 's' : ''}</span>
        <div className="heatmap-legend">
          <span className="heatmap-legend-label">Less</span>
          {[0, 1, 2, 3, 4].map(level => (
            <span key={level} className={`heatmap-cell level-${level}`} />
          ))}
          <span className="heatmap-legend-label">More</span>
        </div>
      </div>

      <div className="heatmap-grid-wrap">
        <div className="heatmap-months-row">
          {monthGroups.map((group, gi) => (
            <div key={gi} className="heatmap-month-group">
              <div className="heatmap-month-label">{group.label}</div>
              <div className="heatmap-month-grid">
                {group.grid.map((col, ci) => (
                  <div key={ci} className="heatmap-col">
                    {col.map((cell, di) => {
                      if (!cell) {
                        return <span key={di} className="heatmap-cell heatmap-empty" />
                      }
                      if (cell.isFuture) {
                        return <span key={di} className="heatmap-cell heatmap-empty" />
                      }
                      const level = getLevel(cell.total)
                      return (
                        <span
                          key={di}
                          className={`heatmap-cell level-${level}`}
                          onMouseEnter={(e) => handleEnter(e, cell)}
                          onMouseLeave={handleLeave}
                        />
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {tooltip && (
        <div
          className={`heatmap-tooltip ${tooltip.below ? 'below' : ''}`}
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="heatmap-tooltip-main">
            {tooltip.cell.total > 0
              ? `${tooltip.cell.total} question${tooltip.cell.total !== 1 ? 's' : ''} · ${tooltip.cell.correct} correct`
              : 'No practice'}
          </div>
          <div className="heatmap-tooltip-date">{formatFullDate(tooltip.cell.date)}</div>
        </div>
      )}
    </div>
  )
}
