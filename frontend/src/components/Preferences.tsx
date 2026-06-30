import { useState } from 'react'
import { Lang, Theme } from '../types'

interface PreferencesProps {
  lang: Lang
  theme: Theme
  onConfirm: (lang: Lang, theme: Theme) => void
}

const flags: Record<Lang, { flag: string; label: string }> = {
  fr: { flag: '🇫🇷', label: 'FR' },
  en: { flag: '🇬🇧', label: 'EN' },
  es: { flag: '🇪🇸', label: 'ES' },
  ar: { flag: '🇲🇦', label: 'AR' },
}

export default function Preferences({ lang, theme, onConfirm }: PreferencesProps) {
  const [selectedLang, setSelectedLang] = useState<Lang>(lang)
  const [selectedTheme, setSelectedTheme] = useState<Theme>(theme)

  return (
    <div className="flex center" style={{
      minHeight: '100vh', padding: '24px',
      background: 'var(--bg)', color: 'var(--text)',
      transition: 'background .3s, color .3s'
    }}>
      <div style={{
        width: '100%', maxWidth: '420px',
        background: 'var(--bg2)', border: '1px solid var(--border)',
        borderRadius: '18px', padding: '28px 22px'
      }}>
        <h1 style={{
          fontFamily: 'Georgia,serif', fontSize: '1.25rem',
          color: 'var(--gold3)', margin: '0 0 6px'
        }}>
          Personnalise ton expérience
        </h1>
        <p style={{ color: 'var(--text2)', fontSize: '.85rem', margin: '0 0 22px' }}>
          Choisis ta langue et ton thème préférés
        </p>

        <div style={{
          fontSize: '.75rem', textTransform: 'uppercase',
          letterSpacing: '.08em', color: 'var(--text2)', margin: '0 0 10px'
        }}>
          Langue
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px', marginBottom: '26px'
        }}>
          {(Object.entries(flags) as [Lang, { flag: string; label: string }][]).map(([key, f]) => (
            <button
              key={key}
              onClick={() => setSelectedLang(key)}
              style={{
                background: 'transparent', border: `1px solid ${selectedLang === key ? 'var(--gold2)' : 'var(--border)'}`,
                borderRadius: '12px', padding: '12px 4px', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
                color: 'var(--text)',
                backgroundImage: selectedLang === key ? 'rgba(212,175,55,.12)' : undefined,
              }}
            >
              <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{f.flag}</span>
              <span style={{
                fontFamily: 'Georgia,serif', fontSize: '.8rem', fontWeight: 600,
                color: selectedLang === key ? 'var(--gold3)' : 'var(--text2)'
              }}>
                {f.label}
              </span>
            </button>
          ))}
        </div>

        <div style={{
          fontSize: '.75rem', textTransform: 'uppercase',
          letterSpacing: '.08em', color: 'var(--text2)', margin: '0 0 10px'
        }}>
          Thème
        </div>

        <div style={{
          display: 'flex', border: '1px solid var(--border)',
          borderRadius: '12px', overflow: 'hidden', marginBottom: '24px'
        }}>
          {(['dark', 'light'] as Theme[]).map(t => (
            <button
              key={t}
              onClick={() => setSelectedTheme(t)}
              style={{
                flex: 1, background: selectedTheme === t ? 'var(--gold2)' : 'transparent',
                border: 'none', padding: '12px 8px', cursor: 'pointer',
                color: selectedTheme === t ? '#1A1410' : 'var(--text2)',
                fontSize: '.85rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              }}
            >
              {t === 'dark' ? '🌙' : '☀️'} {t === 'dark' ? 'Sombre' : 'Clair'}
            </button>
          ))}
        </div>

        <button
          onClick={() => onConfirm(selectedLang, selectedTheme)}
          style={{
            width: '100%', padding: '13px', borderRadius: '12px',
            border: 'none', background: 'var(--gold2)', color: '#1A1410',
            fontWeight: 600, fontSize: '.9rem', cursor: 'pointer'
          }}
        >
          Valider
        </button>
      </div>
    </div>
  )
}
