import { Theme } from '../types'
import { useLang } from '../i18n/LangContext'

interface NavProps {
  theme: Theme
  onToggleTheme: () => void
  onOpenPreferences: () => void
}

export default function Nav({ theme, onToggleTheme, onOpenPreferences }: NavProps) {
  const { lang, t } = useLang()
  const d = theme === 'dark'

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 32px', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)', position: 'sticky', top: 0,
      zIndex: 50,
      background: d ? 'rgba(26,20,16,.8)' : 'rgba(251,247,240,.8)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {lang !== 'fr' && (
          <button className="btn-outline" onClick={onOpenPreferences}
            style={{ padding: '4px 10px', fontSize: '1.1rem', lineHeight: 1 }}>
            ⚙️
          </button>
        )}
        <h1 style={{
          fontFamily: 'Georgia,serif', fontSize: '24px', fontWeight: 700,
          background: 'linear-gradient(135deg,var(--gold1),var(--gold2),var(--gold3))',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
        }}>
          Facturio
        </h1>
      </div>

      <div className="flex gap-12" style={{ alignItems: 'center' }}>
        {lang === 'fr' && (
          <button className="btn-outline" onClick={onOpenPreferences}
            style={{ padding: '4px 10px', fontSize: '1.1rem', lineHeight: 1 }}>
            ⚙️
          </button>
        )}
        <button
          className="btn-outline"
          onClick={onToggleTheme}
          style={{ color: d ? 'var(--gold3)' : 'var(--gold1)' }}
        >
          {d ? t('nav.theme.dark') : t('nav.theme.light')}
        </button>
        <button className="btn-gold">{t('nav.cta')}</button>
      </div>
    </nav>
  )
}
