import { useState } from 'react'

const stats: [string, string][] = [
  ['2300+', 'Freelances'],
  ['5h', 'Gagnees/sem'],
  ['0', 'Erreurs'],
  ['60s', 'Par facture'],
]

export default function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className="center container" style={{ padding: '80px 20px' }}>
      <div style={{
        display: 'inline-block', padding: '8px 20px', borderRadius: '20px',
        background: 'rgba(212,175,55,.1)', border: '1px solid rgba(212,175,55,.3)',
        color: 'var(--gold3)', fontSize: '14px', marginBottom: '24px'
      }}>
        ⚡ La facturation reinventee
      </div>

      <h2 style={{
        fontFamily: 'Georgia,serif', fontSize: 'clamp(2.5rem,6vw,4.5rem)',
        fontWeight: 700, marginBottom: '16px'
      }}>
        Vos factures en <span className="text-gradient">1 clic</span>
      </h2>

      <p style={{ opacity: .7, fontSize: '1.2rem', marginBottom: '32px' }}>
        Avant meme votre premier cafe, vos factures sont pretes. Sans Excel, sans erreurs, sans stress.
      </p>

      <div className="flex center gap-12 wrap mb-24">
        <input
          className="input" type="email" placeholder="votre@email.com"
          value={email} onChange={e => setEmail(e.target.value)}
        />
        <button className="btn-gold">Commencer →</button>
      </div>

      <div className="flex center mt-40" style={{ gap: '40px' }}>
        {stats.map(([v, l]) => (
          <div key={l}>
            <div style={{ fontSize: '2rem', fontWeight: 700 }}>{v}</div>
            <div style={{ opacity: .6, fontSize: '.9rem' }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
