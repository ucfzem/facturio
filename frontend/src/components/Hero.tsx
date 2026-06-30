import { useState } from 'react'
import { useLang } from '../i18n/LangContext'

const stats: { value: string; key: string }[] = [
  { value: '2300+', key: 'stat.1.label' },
  { value: '5h', key: 'stat.2.label' },
  { value: '0', key: 'stat.3.label' },
  { value: '60s', key: 'stat.4.label' },
]

export default function Hero() {
  const { t, tHtml } = useLang()
  const [email, setEmail] = useState('')

  const heading = tHtml('hero.heading')

  return (
    <section className="center container" style={{ padding: '80px 20px' }}>
      <div style={{
        display: 'inline-block', padding: '8px 20px', borderRadius: '20px',
        background: 'rgba(212,175,55,.1)', border: '1px solid rgba(212,175,55,.3)',
        color: 'var(--gold3)', fontSize: '14px', marginBottom: '24px'
      }}>
        {t('hero.badge')}
      </div>

      <h2 style={{
        fontFamily: 'Georgia,serif', fontSize: 'clamp(2.5rem,6vw,4.5rem)',
        fontWeight: 700, marginBottom: '16px'
      }}
        dangerouslySetInnerHTML={{ __html: heading.html }}
      />

      <p style={{ opacity: .7, fontSize: '1.2rem', marginBottom: '32px' }}>
        {t('hero.sub')}
      </p>

      <div className="flex center gap-12 wrap mb-24">
        <input
          className="input" type="email" placeholder={t('hero.placeholder')}
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <button className="btn-gold">{t('hero.cta')}</button>
      </div>

      <div className="flex center mt-40" style={{ gap: '40px' }}>
        {stats.map(s => (
          <div key={s.key}>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>{s.value}</div>
            <div style={{ opacity: .6, fontSize: '.9rem' }}>{t(s.key)}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
