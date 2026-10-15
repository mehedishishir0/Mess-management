export function dhakaToday(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Dhaka',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(now)
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? ''
  return `${value('year')}-${value('month')}-${value('day')}`
}

export function validDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const parsed = new Date(`${value}T00:00:00.000Z`)
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().slice(0, 10) === value
}

export function monthBounds(monthKey: string) {
  const [year, month] = monthKey.split('-').map(Number)
  const endDay = new Date(Date.UTC(year, month, 0)).getUTCDate()
  return {
    start: `${monthKey}-01`,
    end: `${monthKey}-${String(endDay).padStart(2, '0')}`,
  }
}

export function resolveMealCount({ manualCount, plannedCount, date, autoStart, today }: {
  manualCount?: number
  plannedCount?: number
  date: string
  autoStart: string
  today: string
}): { count: number; source: 'manual' | 'planned' | 'automatic' } {
  if (manualCount !== undefined) return { count: manualCount, source: 'manual' }
  if (plannedCount !== undefined) return { count: plannedCount, source: 'planned' }
  return { count: date >= autoStart && date <= today ? 2 : 0, source: 'automatic' }
}
