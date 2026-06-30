import { useLang } from '../i18n/LangContext'

const features: { emoji: string; titleKey: string; descKey: string }[] = [
  { emoji: '⚡', titleKey: 'features.1.title', descKey: 'features.1.desc' },
  { emoji: '⏱️', titleKey: 'features.2.title', descKey: 'features.2.desc' },
  { emoji: '🛡️', titleKey: 'features.3.title', descKey: 'features.3.desc' },
  { emoji: '📊', titleKey: 'features.4.title', descKey: 'features.4.desc' },
  { emoji: '🌍', titleKey: 'features.5.title', descKey: 'features.5.desc' },
  { emoji: '📱', titleKey: 'features.6.title', descKey: 'features.6.desc' },
]

export default function Features() {
  const { t } = useLang()

  return (
    <section className="container" style={{ padding: '60px 20px' }}>
      <h3 className="center" style={{
        fontSize: '2.5rem', marginBottom: '48px'
      }}>
        {t('features.title')}
      </h3>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
        gap: '24px'
      }}>
        {features.map(f => (
          <div
            key={f.titleKey}
            className="card"
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--gold2)'
              e.currentTarget.style.transform = 'translateY(-4px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = ''
              e.currentTarget.style.transform = ''
            }}
          >
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{f.emoji}</div>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{t(f.titleKey)}</h4>
            <p style={{ opacity: .6 }}>{t(f.descKey)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
