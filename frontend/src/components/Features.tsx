const features: [string, string, string][] = [
  ['⚡', '1-clic', 'Facture complete en un seul clic'],
  ['⏱️', '5h gagnees', 'Automatisation intelligente'],
  ['🛡️', 'Zero erreur', 'Detection en temps reel'],
  ['📊', 'Dashboard', 'KPIs essentiels'],
  ['🌍', 'Paiements locaux', 'Wafa Cash, Barid Bank, Stripe'],
  ['📱', 'Mobile', 'Facturez depuis votre telephone'],
]

export default function Features() {
  return (
    <section className="container" style={{ padding: '60px 20px' }}>
      <h3 className="center" style={{
        fontFamily: 'Georgia,serif', fontSize: '2.5rem', marginBottom: '48px'
      }}>
        Tout ce dont vous avez besoin
      </h3>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
        gap: '24px'
      }}>
        {features.map(([emoji, title, desc]) => (
          <div
            key={title}
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
            <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{emoji}</div>
            <h4 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{title}</h4>
            <p style={{ opacity: .6 }}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
