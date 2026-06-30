export default function CTA() {
  return (
    <section className="center container" style={{ padding: '60px 20px' }}>
      <div className="card" style={{
        maxWidth: '600px', margin: '0 auto', backdropFilter: 'blur(12px)'
      }}>
        <h3 style={{
          fontFamily: 'Georgia,serif', fontSize: '2.2rem', marginBottom: '16px'
        }}>
          Pret a <span className="text-gradient">gagner 5h</span> par semaine ?
        </h3>

        <p style={{ opacity: .7, marginBottom: '24px' }}>
          Rejoignez 2300+ freelances. Gratuit.
        </p>

        <div className="flex center gap-12 wrap">
          <input className="input" type="email" placeholder="votre@email.com" />
          <button className="btn-gold">Commencer →</button>
        </div>
      </div>
    </section>
  )
}
