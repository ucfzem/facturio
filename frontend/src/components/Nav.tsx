import { Theme } from '../types'
import { useLang } from '../i18n/LangContext'

interface NavProps {
  theme: Theme
  onToggleTheme: () => void
  onGetStarted: () => void
}

export default function Nav({ theme, onToggleTheme, onGetStarted }: NavProps) {
  const { t } = useLang()
  const d = theme === 'dark'

  return (
    <nav style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '16px 32px', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)', position: 'sticky', top: 0,
      zIndex: 50,
      background: d ? 'rgba(26,20,16,.8)' : 'rgba(243,234,217,.8)'
    }}>
      <h1 style={{
        fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 700,
        color: 'var(--gold-light)',
      }}>
        Facturio
      </h1>

      <div className="flex gap-12" style={{ alignItems: 'center' }}>
        <button
          className="btn-outline"
          onClick={onToggleTheme}
        >
          {d ? t('nav.theme.dark') : t('nav.theme.light')}
        </button>
        <button className="btn-gold" onClick={onGetStarted}>{t('nav.cta')}</button>
      </div>
    </nav>
  )
}
