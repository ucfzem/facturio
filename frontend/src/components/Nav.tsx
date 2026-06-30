import { Theme } from '../types'

interface NavProps {
  theme: Theme
  onToggleTheme: () => void
}

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const d = theme === 'dark'

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 32px', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)', position: 'sticky', top: 0,
      zIndex: 50,
      background: d ? 'rgba(26,20,16,.8)' : 'rgba(251,247,240,.8)'
    }}>
      <h1 style={{
        fontFamily: 'Georgia,serif', fontSize: '24px', fontWeight: 700,
        background: 'linear-gradient(135deg,var(--gold1),var(--gold2),var(--gold3))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
      }}>
        Facturio
      </h1>

      <div className="flex gap-12" style={{ alignItems: 'center' }}>
        <button
          className="btn-outline"
          onClick={onToggleTheme}
          style={{ color: d ? 'var(--gold3)' : 'var(--gold1)' }}
        >
          {d ? '☀️ Light' : '🌙 Dark'}
        </button>
        <button className="btn-gold">Essai gratuit</button>
      </div>
    </nav>
  )
}
