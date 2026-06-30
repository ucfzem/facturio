import { useState, useEffect } from 'react'
import { Theme, Lang, Page } from './types'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Preferences from './components/Preferences'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  )
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('lang') as Lang) || 'fr'
  )

  useEffect(() => {
    document.documentElement.className = theme
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('theme', theme)
    localStorage.setItem('lang', lang)
  }, [theme, lang])

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      color: 'var(--text)', transition: '.3s'
    }}>
      {page === 'preferences' ? (
        <Preferences
          lang={lang}
          theme={theme}
          onConfirm={(newLang, newTheme) => {
            setLang(newLang)
            setTheme(newTheme)
            setPage('home')
          }}
        />
      ) : (
        <>
          <Nav
            theme={theme}
            lang={lang}
            onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            onOpenPreferences={() => setPage('preferences')}
          />
          <Hero />
          <Features />
          <CTA />
          <Footer />
        </>
      )}
    </div>
  )
}
