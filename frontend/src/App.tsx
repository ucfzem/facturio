import { useState, useEffect } from 'react'
import { Theme } from './types'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 'dark'
  )

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div style={{
      minHeight: '100vh', background: 'var(--bg)',
      color: 'var(--text)', transition: '.3s'
    }}>
      <Nav theme={theme} onToggleTheme={() => setTheme(t => t === 'dark' ? 'light' : 'dark')} />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
