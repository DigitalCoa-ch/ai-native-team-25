export default function Home() {
  const labelStyle = {
    fontSize: '0.75rem',
    fontWeight: 600,
    fontVariant: 'small-caps',
    letterSpacing: '0.15em',
    color: '#C8102E',
    marginBottom: '0.75rem',
    display: 'block',
  };

  const bodyStyle = {
    fontFamily: 'Inter, sans-serif',
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#FFFFFF',
    opacity: 0.85,
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem', color: '#FFFFFF' }}>
      <header style={{ marginBottom: '3.5rem' }}>
        <span style={labelStyle}>AI Native Enterprise — Team 25</span>
        <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.25rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#FFFFFF', lineHeight: 1.2 }}>
          Cross-Border Fraud Detection Assistant
        </h1>
        <p style={{ ...bodyStyle, fontSize: '1rem', opacity: 0.6, margin: 0 }}>
          International Finance Track
        </p>
      </header>

      <section style={{ marginBottom: '2.5rem' }}>
        <span style={labelStyle}>Problem</span>
        <p style={bodyStyle}>
          Traditional fraud detection systems struggle to identify suspicious international transactions in real time. Fraud patterns constantly evolve across countries, currencies, and platforms — and legacy systems cannot keep pace.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <span style={labelStyle}>Who It Serves</span>
        <ul style={{ ...bodyStyle, paddingLeft: '1.25rem', lineHeight: 2 }}>
          <li>International banks</li>
          <li>Fintech payment companies</li>
          <li>Compliance officers</li>
          <li>Cross-border transaction monitoring teams</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <span style={labelStyle}>AI Capabilities</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['Classify suspicious transactions', 'Predict fraud risk', 'Monitor transaction behaviour', 'Recommend high-risk cases for human review'].map(tag => (
            <span key={tag} style={{ fontFamily: 'Inter, sans-serif', background: 'transparent', border: '1px solid #C8102E', borderRadius: '9999px', padding: '0.35rem 0.9rem', fontSize: '0.875rem', color: '#C8102E' }}>{tag}</span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem', background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.3)', borderRadius: '8px', padding: '1.5rem' }}>
        <span style={labelStyle}>AI-Native Logic</span>
        <p style={{ ...bodyStyle, margin: '0 0 1rem' }}>
          We are designing an <strong style={{ color: '#FFFFFF' }}>AI-native fraud detection assistant</strong> for international financial institutions because traditional fraud monitoring systems are too slow and limited to detect evolving cross-border fraud patterns effectively.
        </p>
        <p style={{ ...bodyStyle, fontSize: '0.875rem', opacity: 0.65, margin: 0 }}>
          This concept is <em>AI-native</em>: the platform&apos;s core value depends on continuous AI-driven fraud prediction, behavioural analysis, and adaptive monitoring — not optional AI features layered onto an existing workflow.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          <div>
            <span style={labelStyle}>What Survives Without AI</span>
            <ul style={{ ...bodyStyle, paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 2, listStyleType: 'disc' }}>
              <li>Basic transaction monitoring</li>
              <li>Manual compliance processes</li>
              <li>Rule-based alerts</li>
              <li>Standard banking operations</li>
            </ul>
          </div>
          <div>
            <span style={labelStyle}>What Collapses Without AI</span>
            <ul style={{ ...bodyStyle, paddingLeft: '1.25rem', fontSize: '0.875rem', lineHeight: 2, listStyleType: 'disc' }}>
              <li>Real-time fraud prediction</li>
              <li>Cross-country pattern recognition</li>
              <li>Adaptive fraud detection</li>
              <li>Large-scale monitoring efficiency</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem', background: 'rgba(200,16,46,0.08)', border: '1px solid rgba(200,16,46,0.35)', borderRadius: '8px', padding: '1rem 1.25rem' }}>
        <p style={{ ...bodyStyle, fontSize: '0.875rem', color: '#C8102E', margin: 0, lineHeight: 1.6 }}>
          <strong>Key dependency:</strong> The system depends on high-quality, continuously updated international transaction data. Incomplete or biased data could significantly reduce fraud detection accuracy.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <span style={labelStyle}>Team</span>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { role: 'A', name: 'Emmanuel', focus: 'Business logic' },
            { role: 'B', name: 'Sasha', focus: 'Workflow & risk' },
            { role: 'C', name: 'Denis', focus: 'Prototype & tools' },
          ].map(m => (
            <div key={m.name} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '8px', padding: '0.75rem 1rem', minWidth: '140px' }}>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.7rem', fontWeight: 600, fontVariant: 'small-caps', letterSpacing: '0.1em', color: '#C8102E' }}>Role {m.role}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '0.9rem', marginTop: '0.15rem', color: '#FFFFFF' }}>{m.name}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.75rem', color: '#FFFFFF', opacity: 0.55 }}>{m.focus}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <a href="https://github.com/DigitalCoa-ch/ai-native-team-25" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#C8102E', textDecoration: 'none', borderBottom: '1px solid #C8102E' }}>GitHub</a>
        <a href="https://team-25.apps.digitalcoa.ch" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#C8102E', textDecoration: 'none', borderBottom: '1px solid #C8102E' }}>Live App</a>
        <a href="https://ai-native-25.digitalcoa.ch" style={{ fontFamily: 'Inter, sans-serif', fontSize: '0.875rem', color: '#C8102E', textDecoration: 'none', borderBottom: '1px solid #C8102E' }}>OpenClaw Workbench</a>
      </footer>
    </div>
  );
}
