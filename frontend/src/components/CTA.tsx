import { useLang } from '../i18n/LangContext'

export default function CTA() {
  const { t, tHtml } = useLang()
  const heading = tHtml('cta.heading')

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
          <input className="input" type="email" placeholder={t('cta.placeholder')} />
          <button className="btn-gold">{t('cta.btn')}</button>
        </div>
      </div>
    </section>
  )
}
