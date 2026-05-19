export default function Home() {
  return (
    <div style={{ fontFamily: '"Inter", sans-serif', backgroundColor: '#0A0A0A', color: '#FFFFFF', margin: 0 }}>

      {/* ─── SECTION 1: NAVIGATION BAR ─────────────────────────────────── */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: '56px',
        backgroundColor: '#0A0A0A',
        borderBottom: '1px solid #C8102E',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
      }}>
        <div style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: '14px',
          fontWeight: 600,
          color: '#FFFFFF',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          Cross-Border Fraud Detection
        </div>
        <div style={{ display: 'flex', gap: '32px' }}>
          <a style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '13px',
            color: '#C8102E',
            textDecoration: 'none',
          }}>Live App</a>
          <a style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '13px',
            color: '#C8102E',
            textDecoration: 'none',
          }}>OpenClaw Workbench</a>
        </div>
      </nav>

      {/* ─── SECTION 2: HERO ───────────────────────────────────────────── */}
      <div style={{
        backgroundColor: '#0A0A0A',
        padding: '120px 40px 80px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '11px',
            color: '#C8102E',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '16px',
          }}>
            AI NATIVE ENTERPRISE — TEAM 25
          </div>
          <h1 style={{
            fontFamily: '"Playfair Display", serif',
            fontSize: '64px',
            fontWeight: 700,
            color: '#FFFFFF',
            lineHeight: 1.1,
            margin: '0 0 16px',
          }}>
            Cross-Border Fraud Detection Assistant
          </h1>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '16px',
            color: '#888888',
            margin: 0,
          }}>
            International Finance Track
          </div>
        </div>
      </div>

      {/* ─── SECTION 3: PROBLEM ─────────────────────────────────────────── */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '11px',
            color: '#C8102E',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '24px',
          }}>
            PROBLEM
          </div>
          <hr style={{
            border: 'none',
            borderTop: '1px solid #C8102E',
            width: '40px',
            margin: '0 0 24px',
          }} />
          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '17px',
            color: '#0A0A0A',
            lineHeight: 1.7,
            margin: 0,
          }}>
            Traditional fraud detection systems struggle to identify suspicious international transactions in real time. Fraud patterns constantly evolve across countries, currencies, and platforms — and legacy systems cannot keep pace.
          </p>
        </div>
      </div>

      {/* ─── SECTION 4: WHO IT SERVES ──────────────────────────────────── */}
      <div style={{
        backgroundColor: '#0A0A0A',
        padding: '80px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '11px',
            color: '#C8102E',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '24px',
          }}>
            WHO IT SERVES
          </div>
          <hr style={{
            border: 'none',
            borderTop: '1px solid #C8102E',
            width: '40px',
            margin: '0 0 24px',
          }} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
          }}>
            {[
              'International banks',
              'Fintech payment companies',
              'Compliance officers',
              'Cross-border transaction monitoring teams',
            ].map(item => (
              <div key={item} style={{
                backgroundColor: '#111111',
                border: '1px solid #C8102E',
                padding: '24px',
              }}>
                <span style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '15px',
                  color: '#FFFFFF',
                }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 5: AI CAPABILITIES ────────────────────────────────── */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '11px',
            color: '#C8102E',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '24px',
          }}>
            AI CAPABILITIES
          </div>
          <hr style={{
            border: 'none',
            borderTop: '1px solid #C8102E',
            width: '40px',
            margin: '0 0 24px',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              'Classify suspicious transactions',
              'Predict fraud risk',
              'Monitor transaction behaviour',
              'Recommend high-risk cases for human review',
            ].map(item => (
              <div key={item} style={{
                backgroundColor: '#0A0A0A',
                borderLeft: '3px solid #C8102E',
                padding: '20px 28px',
              }}>
                <span style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '15px',
                  color: '#FFFFFF',
                }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 6: AI-NATIVE LOGIC ─────────────────────────────────── */}
      <div style={{
        backgroundColor: '#0A0A0A',
        padding: '80px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '11px',
            color: '#C8102E',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '24px',
          }}>
            AI-NATIVE LOGIC
          </div>
          <hr style={{
            border: 'none',
            borderTop: '1px solid #C8102E',
            width: '40px',
            margin: '0 0 24px',
          }} />
          <div style={{
            backgroundColor: '#111111',
            border: '1px solid #C8102E',
            padding: '40px',
          }}>
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '16px',
              color: '#FFFFFF',
              lineHeight: 1.7,
              margin: '0 0 24px',
            }}>
              We are designing an AI-native fraud detection assistant for international financial institutions because traditional fraud monitoring systems are too slow and limited to detect evolving cross-border fraud patterns effectively.
            </p>
            <p style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '14px',
              color: '#888888',
              lineHeight: 1.7,
              margin: 0,
            }}>
              This concept is AI-native: the platform&apos;s core value depends on continuous AI-driven fraud prediction, behavioural analysis, and adaptive monitoring — not optional AI features layered onto an existing workflow.
            </p>
          </div>
        </div>
      </div>

      {/* ─── SECTION 7: WHAT SURVIVES / WHAT COLLAPSES ──────────────────── */}
      <div style={{
        backgroundColor: '#FFFFFF',
        padding: '80px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px' }}>
            {/* Left column */}
            <div style={{ paddingRight: '40px' }}>
              <div style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '11px',
                color: '#888888',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '24px',
              }}>
                WHAT SURVIVES WITHOUT AI
              </div>
              <hr style={{
                border: 'none',
                borderTop: '1px solid #888888',
                width: '40px',
                margin: '0 0 24px',
              }} />
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {[
                  'Basic transaction monitoring',
                  'Manual compliance processes',
                  'Rule-based alerts',
                  'Standard banking operations',
                ].map(item => (
                  <li key={item} style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '15px',
                    color: '#0A0A0A',
                    lineHeight: 2,
                  }}>{item}</li>
                ))}
              </ul>
            </div>
            {/* Vertical divider */}
            <div style={{
              borderLeft: '1px solid #C8102E',
              paddingLeft: '40px',
            }}>
              <div style={{
                fontFamily: '"Inter", sans-serif',
                fontSize: '11px',
                color: '#C8102E',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                marginBottom: '24px',
              }}>
                WHAT COLLAPSES WITHOUT AI
              </div>
              <hr style={{
                border: 'none',
                borderTop: '1px solid #C8102E',
                width: '40px',
                margin: '0 0 24px',
              }} />
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {[
                  'Real-time fraud prediction',
                  'Cross-country pattern recognition',
                  'Adaptive fraud detection',
                  'Large-scale monitoring efficiency',
                ].map(item => (
                  <li key={item} style={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '15px',
                    color: '#0A0A0A',
                    lineHeight: 2,
                  }}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ─── SECTION 8: KEY DEPENDENCY ───────────────────────────────────── */}
      <div style={{
        backgroundColor: '#C8102E',
        padding: '48px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '16px',
            color: '#FFFFFF',
            lineHeight: 1.6,
            margin: 0,
          }}>
            <strong>Key dependency:</strong> The system depends on high-quality, continuously updated international transaction data. Incomplete or biased data could significantly reduce fraud detection accuracy.
          </p>
        </div>
      </div>

      {/* ─── SECTION 9: TEAM ─────────────────────────────────────────────── */}
      <div style={{
        backgroundColor: '#0A0A0A',
        padding: '80px 40px',
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '11px',
            color: '#C8102E',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            marginBottom: '24px',
          }}>
            TEAM
          </div>
          <hr style={{
            border: 'none',
            borderTop: '1px solid #C8102E',
            width: '40px',
            margin: '0 0 24px',
          }} />
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}>
            {[
              { role: 'ROLE A', name: 'Emmanuel', focus: 'Business logic' },
              { role: 'ROLE B', name: 'Sasha', focus: 'Workflow & risk' },
              { role: 'ROLE C', name: 'Denis', focus: 'Prototype & tools' },
            ].map(m => (
              <div key={m.name} style={{
                backgroundColor: '#111111',
                borderTop: '3px solid #C8102E',
                padding: '28px',
              }}>
                <div style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '11px',
                  color: '#C8102E',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '12px',
                }}>{m.role}</div>
                <div style={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '8px',
                }}>{m.name}</div>
                <div style={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '13px',
                  color: '#888888',
                }}>{m.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SECTION 10: FOOTER ──────────────────────────────────────────── */}
      <footer style={{
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid #C8102E',
        padding: '40px 40px',
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            <a style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '13px',
              color: '#888888',
              textDecoration: 'none',
            }}>GitHub</a>
            <a style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '13px',
              color: '#888888',
              textDecoration: 'none',
            }}>Live App</a>
            <a style={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '13px',
              color: '#888888',
              textDecoration: 'none',
            }}>OpenClaw Workbench</a>
          </div>
          <div style={{
            fontFamily: '"Inter", sans-serif',
            fontSize: '13px',
            backgroundColor: '#C8102E',
            color: '#FFFFFF',
            padding: '12px 28px',
          }}>
            View Live App
          </div>
        </div>
      </footer>

    </div>
  );
}
