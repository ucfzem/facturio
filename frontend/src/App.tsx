import { useState, useEffect, useRef } from 'react'
import { Theme, Lang, Page } from './types'
import LangProvider from './i18n/LangProvider'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Preferences from './components/Preferences'

export default function App() {
  const [page, setPage] = useState<Page>(
    () => localStorage.getItem('configured') === 'true' ? 'home' : 'preferences'
  )
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  )
  const [lang, setLang] = useState<Lang>(
    () => (localStorage.getItem('lang') as Lang) || 'fr'
  )

  const featuresRef = useRef<HTMLElement>(null!)
  const ctaRef = useRef<HTMLElement>(null!)

  useEffect(() => {
    document.documentElement.className = theme
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('theme', theme)
    localStorage.setItem('lang', lang)
  }, [theme, lang])

  const scrollTo = (ref: HTMLElement) => {
    ref?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <LangProvider lang={lang}>
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
              localStorage.setItem('configured', 'true')
              setPage('home')
            }}
          />
        ) : (
          <>
            <Nav
              theme={theme}
              lang={lang}
              onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
              onChangeLang={setLang}
              onGetStarted={() => scrollTo(ctaRef.current)}
            />
            <Hero
              onGetStarted={() => scrollTo(featuresRef.current)}
            />
            <Features ref={featuresRef} onFeatureClick={() => scrollTo(ctaRef.current)} />
            <div ref={ctaRef}><CTA /></div>
            <Footer />
          </>
        )}
      </div>
    </LangProvider>
  )
}
