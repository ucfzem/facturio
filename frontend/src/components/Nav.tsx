import { Theme, Lang } from '../types'
import { useLang } from '../i18n/LangContext'

interface NavProps {
  theme: Theme
  lang: Lang
  onToggleTheme: () => void
  onChangeLang: (lang: Lang) => void
  onGetStarted: () => void
}

const flags: Record<Lang, string> = {
  fr: '🇫🇷',
  en: '🇬🇧',
  es: '🇪🇸',
  ar: '🇲🇦',
}

export default function Nav({ theme, lang, onToggleTheme, onChangeLang, onGetStarted }: NavProps) {
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <h1 style={{
          fontFamily: 'Cinzel, serif', fontSize: '24px', fontWeight: 700,
          color: 'var(--gold-light)',
        }}>
          Facturio
        </h1>
      </div>

      <div className="flex gap-12" style={{ alignItems: 'center' }}>
        <div style={{
          display: 'flex', gap: '4px',
          border: '1px solid var(--border)', borderRadius: '10px',
          padding: '4px', background: 'var(--bg2)'
        }}>
          {(Object.entries(flags) as [Lang, string][]).map(([key, flag]) => (
            <button
              key={key}
              onClick={() => onChangeLang(key)}
              style={{
                background: lang === key ? 'var(--gold)' : 'transparent',
                border: 'none', borderRadius: '8px',
                padding: '4px 8px', cursor: 'pointer',
                fontSize: '1.1rem', lineHeight: 1,
                transition: 'background .2s',
              }}
              title={key.toUpperCase()}
            >
              {flag}
            </button>
          ))}
        </div>
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
