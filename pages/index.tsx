export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '860px', margin: '0 auto', padding: '3rem 1.5rem', color: '#111' }}>
      <header style={{ marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b7280', marginBottom: '0.5rem' }}>
          AI Native Enterprise — Team 25
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, margin: '0 0 0.5rem', color: '#111' }}>
          Cross-Border Fraud Detection Assistant
        </h1>
        <p style={{ fontSize: '1rem', color: '#6b7280', margin: 0 }}>
          International Finance Track
        </p>
      </header>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.75rem' }}>Problem</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, margin: 0, color: '#374151' }}>
          Traditional fraud detection systems struggle to identify suspicious international transactions in real time. Fraud patterns constantly evolve across countries, currencies, and platforms — and legacy systems cannot keep pace.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.75rem' }}>Who It Serves</h2>
        <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#374151', lineHeight: 1.8 }}>
          <li>International banks</li>
          <li>Fintech payment companies</li>
          <li>Compliance officers</li>
          <li>Cross-border transaction monitoring teams</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.75rem' }}>AI Capabilities</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {['Classify suspicious transactions', 'Predict fraud risk', 'Monitor transaction behaviour', 'Recommend high-risk cases for human review'].map(tag => (
            <span key={tag} style={{ background: '#f3f4f6', borderRadius: '9999px', padding: '0.35rem 0.9rem', fontSize: '0.875rem', color: '#374151' }}>{tag}</span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
        <h2 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.75rem' }}>AI-Native Logic</h2>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 1rem', color: '#374151' }}>
          We are designing an <strong>AI-native fraud detection assistant</strong> for international financial institutions because traditional fraud monitoring systems are too slow and limited to detect evolving cross-border fraud patterns effectively.
        </p>
        <p style={{ fontSize: '0.875rem', color: '#6b7280', margin: 0 }}>
          This concept is <em>AI-native</em>: the platform&apos;s core value depends on continuous AI-driven fraud prediction, behavioural analysis, and adaptive monitoring — not optional AI features layered onto an existing workflow.
        </p>
      </section>

      <section style={{ marginBottom: '2.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div>
            <h2 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.75rem' }}>What Survives Without AI</h2>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#374151', fontSize: '0.875rem', lineHeight: 1.8 }}>
              <li>Basic transaction monitoring</li>
              <li>Manual compliance processes</li>
              <li>Rule-based alerts</li>
              <li>Standard banking operations</li>
            </ul>
          </div>
          <div>
            <h2 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.75rem' }}>What Collapses Without AI</h2>
            <ul style={{ paddingLeft: '1.25rem', margin: 0, color: '#374151', fontSize: '0.875rem', lineHeight: 1.8 }}>
              <li>Real-time fraud prediction</li>
              <li>Cross-country pattern recognition</li>
              <li>Adaptive fraud detection</li>
              <li>Large-scale monitoring efficiency</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2.5rem', background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '1rem 1.25rem' }}>
        <p style={{ fontSize: '0.875rem', color: '#92400e', margin: 0, lineHeight: 1.6 }}>
          <strong>Key dependency:</strong> The system depends on high-quality, continuously updated international transaction data. Incomplete or biased data could significantly reduce fraud detection accuracy.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9ca3af', marginBottom: '0.75rem' }}>Team</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { role: 'A', name: 'Emmanuel', focus: 'Business logic' },
            { role: 'B', name: 'Sasha', focus: 'Workflow & risk' },
            { role: 'C', name: 'Denis', focus: 'Prototype & tools' },
          ].map(m => (
            <div key={m.name} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '0.75rem 1rem', minWidth: '140px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', color: '#9ca3af' }}>Role {m.role}</div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', marginTop: '0.15rem' }}>{m.name}</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>{m.focus}</div>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: '1px solid #e5e7eb', paddingTop: '1.5rem', display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        <a href="https://github.com/DigitalCoa-ch/ai-native-team-25" style={{ fontSize: '0.875rem', color: '#374151', textDecoration: 'underline' }}>GitHub</a>
        <a href="https://team-25.apps.digitalcoa.ch" style={{ fontSize: '0.875rem', color: '#374151', textDecoration: 'underline' }}>Live App</a>
        <a href="https://ai-native-25.digitalcoa.ch" style={{ fontSize: '0.875rem', color: '#374151', textDecoration: 'underline' }}>OpenClaw Workbench</a>
      </footer>
    </div>
  );
}
