import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

export default function CTA() {
  const { t, tHtml } = useLang()
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const heading = tHtml('cta.heading')

  const handleSubmit = () => {
    if (!email.trim()) {
      const input = document.querySelector<HTMLInputElement>('.cta-input')
      input?.focus()
      return
    }
    setDone(true)
  }

  if (done) {
    return (
      <section className="center container" style={{ padding: '60px 20px' }}>
        <div className="card" style={{
          maxWidth: '600px', margin: '0 auto', backdropFilter: 'blur(12px)'
        }}>
          <h3 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--gold-light)' }}>
            Merci ! 🎉
          </h3>
          <p style={{ opacity: .7 }}>On te tient au courant très vite.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="center container" style={{ padding: '60px 20px' }}>
      <div className="card" style={{
        maxWidth: '600px', margin: '0 auto', backdropFilter: 'blur(12px)'
      }}>
        <h3 style={{
          fontSize: '2.2rem', marginBottom: '16px'
        }}
          dangerouslySetInnerHTML={{ __html: heading.html }}
        />

        <p style={{ opacity: .7, marginBottom: '24px' }}>
          {t('cta.sub')}
        </p>

        <div className="flex center gap-12 wrap">
          <input
            className="input cta-input" type="email"
            placeholder={t('cta.placeholder')}
            value={email} onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          />
          <button className="btn-gold" onClick={handleSubmit}>{t('cta.btn')}</button>
        </div>
      </div>
    </section>
  )
}
