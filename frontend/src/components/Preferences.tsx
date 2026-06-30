import { useState } from 'react'
import { Lang, Theme } from '../types'
import { useLang } from '../i18n/LangContext'

interface PreferencesProps {
  lang: Lang
  theme: Theme
  onConfirm: (lang: Lang, theme: Theme) => void
}

type LangEntry = { flag: string; label: string }

const flags: Record<Lang, LangEntry> = {
  fr: { flag: '🇫🇷', label: 'FR' },
  en: { flag: '🇬🇧', label: 'EN' },
  es: { flag: '🇪🇸', label: 'ES' },
  ar: { flag: '🇲🇦', label: 'AR' },
}

export default function Preferences({ lang, theme, onConfirm }: PreferencesProps) {
  const { t } = useLang()
  const [selectedLang, setSelectedLang] = useState<Lang>(lang)
  const [selectedTheme, setSelectedTheme] = useState<Theme>(theme)

  const cardStyle: React.CSSProperties = {
    width: '100%', maxWidth: '420px',
    background: 'var(--bg-card, var(--bg2))',
    border: '1px solid var(--border)',
    borderRadius: '18px',
    padding: '28px 22px',
  }

  const langBtnStyle = (active: boolean): React.CSSProperties => ({
    background: active ? 'rgba(201,162,75,.12)' : 'transparent',
    border: `1px solid ${active ? 'var(--gold)' : 'var(--border)'}`,
    borderRadius: '12px',
    padding: '12px 4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    cursor: 'pointer',
    color: 'var(--text)',
    transition: 'border-color .2s, background .2s',
  })

  const initialsStyle = (active: boolean): React.CSSProperties => ({
    fontFamily: 'Cinzel, serif',
    fontSize: '.8rem',
    fontWeight: 600,
    color: active ? 'var(--gold-light, var(--gold3))' : 'var(--muted, var(--text2))',
  })

  const themeBtnStyle = (active: boolean): React.CSSProperties => ({
    flex: 1,
    background: active ? 'var(--gold)' : 'transparent',
    border: 'none',
    padding: '12px 8px',
    color: active ? '#1a1410' : 'var(--muted, var(--text2))',
    fontSize: '.85rem',
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    transition: 'background .2s, color .2s',
  })

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg)',
      color: 'var(--text)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      transition: 'background .3s, color .3s',
    }}>
      <div style={cardStyle}>
        <h1 style={{
          fontFamily: 'Cinzel, serif',
          fontSize: '1.25rem',
          color: 'var(--gold-light, var(--gold3))',
          margin: '0 0 6px',
          letterSpacing: '.03em',
        }}>
          {t('prefs.title')}
        </h1>
        <p style={{
          color: 'var(--muted, var(--text2))',
          fontSize: '.85rem',
          margin: '0 0 22px',
        }}>
          {t('prefs.sub')}
        </p>

        <div style={{
          fontSize: '.75rem',
          textTransform: 'uppercase',
          letterSpacing: '.08em',
          color: 'var(--muted, var(--text2))',
          margin: '0 0 10px',
        }}>
          {t('prefs.lang')}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
          marginBottom: '26px',
        }}>
          {(Object.entries(flags) as [Lang, LangEntry][]).map(([key, f]) => (
            <button
              key={key}
              style={langBtnStyle(selectedLang === key)}
              onClick={() => setSelectedLang(key)}
            >
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{f.flag}</span>
              <span style={initialsStyle(selectedLang === key)}>{f.label}</span>
            </button>
          ))}
        </div>

        <div style={{
          fontSize: '.75rem',
          textTransform: 'uppercase',
          letterSpacing: '.08em',
          color: 'var(--muted, var(--text2))',
          margin: '0 0 10px',
        }}>
          {t('prefs.theme')}
        </div>

        <div style={{
          display: 'flex',
          border: '1px solid var(--border)',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '24px',
        }}>
          <button
            style={themeBtnStyle(selectedTheme === 'dark')}
            onClick={() => setSelectedTheme('dark')}
          >
            {t('prefs.dark')}
          </button>
          <button
            style={themeBtnStyle(selectedTheme === 'light')}
            onClick={() => setSelectedTheme('light')}
          >
            {t('prefs.light')}
          </button>
        </div>

        <button
          onClick={() => onConfirm(selectedLang, selectedTheme)}
          style={{
            width: '100%',
            padding: '13px',
            borderRadius: '12px',
            border: 'none',
            background: 'var(--gold)',
            color: '#1a1410',
            fontWeight: 600,
            fontSize: '.9rem',
            cursor: 'pointer',
          }}
        >
          {t('prefs.confirm')}
        </button>
      </div>
    </div>
  )
}
