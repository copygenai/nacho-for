import config from '../site.config.json'

const { candidate, company, role, hero, whyCompany, quote } = config
const accent = company.accentColor || '#ff5a1f'

export const metadata = {
  title: `${candidate.name} — for ${company.name}`,
  description: hero.subheadline,
}

export default function Page() {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Inter, sans-serif', background: '#fff', color: '#111' }}>

      {/* NAV */}
      <nav style={{ padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' }}>
        <span style={{ fontWeight: 700, fontSize: 16, letterSpacing: '-0.3px' }}>{candidate.name}</span>
        <span style={{ background: '#f4f4f4', padding: '5px 14px', borderRadius: 20, fontSize: 13, color: '#555' }}>
          Applying for {role} · {company.name}
        </span>
      </nav>

      {/* HERO */}
      <div style={{ padding: '80px 40px 40px', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: accent, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>
          Made for {company.name}
        </div>
        <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: 24 }}>
          {hero.headline}
        </h1>
        <p style={{ fontSize: 19, color: '#444', lineHeight: 1.6, maxWidth: 580 }}>
          {hero.subheadline}
        </p>
      </div>

      {/* CTA BUTTONS */}
      <div style={{ padding: '0 40px 60px', maxWidth: 720, margin: '0 auto', display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <a href={`mailto:${candidate.email}`}
          style={{ background: '#111', color: '#fff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
          Email me →
        </a>
        <a href={`tel:${candidate.phone}`}
          style={{ background: accent, color: '#fff', padding: '14px 28px', borderRadius: 8, fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>
          📞 Call me
        </a>
        <a href={candidate.linkedin} target="_blank" rel="noopener noreferrer"
          style={{ color: '#555', fontSize: 15, textDecoration: 'none', borderBottom: '1px solid #ccc', paddingBottom: 2 }}>
          LinkedIn ↗
        </a>
      </div>

      <div style={{ height: 1, background: '#f0f0f0', margin: '0 40px' }} />

      {/* WHY THIS COMPANY */}
      <div style={{ padding: '60px 40px', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 28 }}>
          Why {company.name}
        </div>
        {whyCompany.map((item, i) => (
          <div key={i} style={{ background: '#fafafa', border: '1px solid #ebebeb', borderRadius: 12, padding: 32, marginBottom: 16 }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{item.emoji} {item.title}</h3>
            <p style={{ fontSize: 15, color: '#555', lineHeight: 1.65 }}>{item.body}</p>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: '#f0f0f0', margin: '0 40px' }} />

      {/* WHAT I BRING */}
      <div style={{ padding: '60px 40px', maxWidth: 720, margin: '0 auto' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#999', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 28 }}>
          What I bring
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          {[
            { label: 'BDR · Copygen.ai', value: '1 year cold outreach', sub: '15–20 paying clients sourced from scratch. HubSpot, cold email, LinkedIn sequences.' },
            { label: 'Internship · NextAfter', value: 'Digital fundraising research', sub: 'B2B consultancy in Plano, TX. Learned to connect data to decisions fast.' },
            { label: 'Athletics', value: 'NCAA D2 Soccer', sub: 'Benedictine University Mesa. Discipline, accountability, competing every week.' },
            { label: 'Work authorization', value: 'OPT · June 1, 2026', sub: '12 months, no cost to employer. Spanish national, based in Arizona.' },
          ].map((card, i) => (
            <div key={i} style={{ border: '1px solid #ebebeb', borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 12, color: '#999', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>{card.label}</div>
              <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{card.value}</div>
              <div style={{ fontSize: 14, color: '#666' }}>{card.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>
          {['HubSpot', 'Cold email', 'LinkedIn outreach', 'Sales sequencing', 'B2B SaaS', 'Fluent Spanish'].map(tag => (
            <span key={tag} style={{ display: 'inline-block', background: '#f0f7ff', color: '#0066cc', padding: '4px 10px', borderRadius: 20, fontSize: 13, margin: '3px 3px 3px 0', fontWeight: 500 }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div style={{ height: 1, background: '#f0f0f0', margin: '0 40px', marginBottom: 40 }} />

      {/* QUOTE */}
      <div style={{ background: '#111', color: '#fff', borderRadius: 12, padding: 36, maxWidth: 640, margin: '0 auto' }}>
        <p style={{ fontSize: 20, lineHeight: 1.6, fontWeight: 500, letterSpacing: '-0.3px' }}>
          &ldquo;{quote}&rdquo;
        </p>
        <div style={{ marginTop: 20, fontSize: 14, color: '#999' }}>
          — {candidate.name}, applying for {role} at {company.name}
        </div>
      </div>

      {/* FOOTER CTA */}
      <div style={{ padding: '80px 40px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-1px', marginBottom: 16 }}>Ready to talk?</h2>
        <p style={{ fontSize: 16, color: '#666', marginBottom: 32 }}>
          I&rsquo;m available immediately. Let&rsquo;s get on a call this week.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`mailto:${candidate.email}`}
            style={{ background: accent, color: '#fff', padding: '16px 36px', borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
            {candidate.email} →
          </a>
          <a href={`tel:${candidate.phone}`}
            style={{ background: '#111', color: '#fff', padding: '16px 36px', borderRadius: 8, fontSize: 16, fontWeight: 700, textDecoration: 'none' }}>
            📞 {candidate.phone}
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ padding: '24px 40px', borderTop: '1px solid #f0f0f0', textAlign: 'center', color: '#bbb', fontSize: 13 }}>
        Built specifically for {company.name} · {candidate.name} · 2026
      </footer>

    </div>
  )
}
