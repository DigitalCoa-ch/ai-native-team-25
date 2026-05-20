import { useEffect, useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
          }
        });
      },
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const fadeStyle = {
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  };

  return (
    <>
      <Head>
        <title>FraudGuard — Cross-Border Fraud Detection</title>
        <meta name="description" content="Cross-Border Fraud Detection" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <style>{`
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; }
        body { margin: 0; }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
      `}</style>

      <div style={{ fontFamily: '"Inter", sans-serif', backgroundColor: '#0A0A0A', color: '#FFFFFF', margin: 0 }}>
        <nav style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          height: '56px',
          backgroundColor: '#0A0A0A',
          borderBottom: '1px solid #C8102E',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 40px',
        }}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', fontWeight: 600, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.15em' }}>AMED</div>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            {['Overview', 'How It Works', 'Integration', 'Technology', 'Team'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.1em', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C8102E')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
              >{link}</a>
            ))}
          </div>
          <a href="https://team-25.apps.digitalcoa.ch" style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: '#FFFFFF', backgroundColor: '#C8102E', padding: '10px 20px', textDecoration: 'none', borderRadius: 0 }}>View Live App</a>
        </nav>

        <section id="overview" ref={setRef('overview')} style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#0A0A0A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 40px', position: 'relative' }}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '24px' }}>CROSS-BORDER FRAUD DETECTION — TEAM 25</div>
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '80px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1, maxWidth: '800px', margin: 0 }}>The Fraud Detection Platform Built for Global Finance</h1>
          
          <div style={{ display: 'flex', gap: '16px', marginTop: '48px' }}>
            <a href="#how-it-works" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#FFFFFF', backgroundColor: '#C8102E', padding: '16px 36px', textDecoration: 'none', borderRadius: 0 }}>Explore the Platform</a>
            <a href="https://github.com/DigitalCoa-ch/ai-native-team-25" target="_blank" rel="noopener noreferrer" style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#FFFFFF', backgroundColor: 'transparent', border: '1px solid #FFFFFF', padding: '16px 36px', textDecoration: 'none', borderRadius: 0 }}>View on GitHub</a>
          </div>
          <div style={{ position: 'absolute', bottom: '40px', animation: 'bounce 2s infinite' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </section>

        <section style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
          <div style={{ maxWidth: '1100px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '120px', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>THE PROBLEM</div>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C8102E', margin: '16px 0 32px' }} />
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.2, margin: 0 }}>Legacy systems cannot keep pace with modern fraud</h2>
            </div>
            <div>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: '#0A0A0A', lineHeight: 1.8, margin: 0 }}>Traditional fraud detection systems struggle to identify suspicious international transactions in real time. Fraud patterns constantly evolve across countries, currencies, and platforms — and legacy systems cannot keep pace. Cross-border transactions involve multiple currencies, jurisdictions, and regulatory frameworks, making rule-based detection dangerously insufficient.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginTop: '48px' }}>
                <div><div style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', fontWeight: 700, color: '#C8102E' }}>73%</div><div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#888888', marginTop: '8px', lineHeight: 1.5 }}>of fraud goes undetected by legacy systems</div></div>
                <div><div style={{ fontFamily: '"Playfair Display", serif', fontSize: '48px', fontWeight: 700, color: '#C8102E' }}>2.4s</div><div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#888888', marginTop: '8px', lineHeight: 1.5 }}>average time the platform needs to flag a suspicious transaction</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" ref={setRef('how-it-works')} style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#0A0A0A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>HOW IT WORKS</div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '52px', fontWeight: 700, color: '#FFFFFF', textAlign: 'center', margin: 0, marginBottom: '80px' }}>Four layers of intelligent detection</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', maxWidth: '1000px', width: '100%' }}>
            {[{num:'01',title:'Behavioural Pattern Analysis',desc:'The AI builds a unique behavioural baseline for every account — typical transaction amounts, geographies, time patterns, and counterparties. Any deviation from this baseline triggers a risk score calculation in real time.'},{num:'02',title:'Cross-Border Anomaly Detection',desc:'Using a multilayer neural network trained on millions of international transactions, the system identifies anomalies specific to cross-border flows — unusual currency conversions, high-risk corridor routing, and jurisdiction-hopping patterns.'},{num:'03',title:'Natural Language Risk Signals',desc:'The system scans transaction metadata, reference fields, and memo text using language processing to detect coded language, sanctioned entity references, and known fraud keywords across 14 languages.'},{num:'04',title:'Adaptive Learning Engine',desc:'Every confirmed fraud case retrains the model automatically. The system becomes more accurate over time, adapting to new fraud typologies without requiring manual rule updates from compliance teams.'}].map((card) => (
              <div key={card.num} style={{ backgroundColor: '#111111', borderLeft: '3px solid #C8102E', padding: '40px', borderRadius: 0 }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '64px', fontWeight: 700, color: '#C8102E', opacity: 0.3, lineHeight: 1, marginBottom: '24px' }}>{card.num}</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>{card.title}</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#888888', lineHeight: 1.7 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="integration" ref={setRef('integration')} style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', padding: '80px 40px' }}>
          <div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '80px', alignItems: 'center' }}>
            <div style={{ position: 'sticky', top: '100px', alignSelf: 'flex-start' }}>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>BANK INTEGRATION</div>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C8102E', margin: '16px 0 32px' }} />
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '44px', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.2, margin: 0 }}>Seamlessly embedded into your existing infrastructure</h2>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', color: '#888888', lineHeight: 1.7, marginTop: '24px' }}>The platform does not replace your core banking system. It connects to it via a secure API layer, processes transaction data in real time, and returns risk scores and flags directly into your existing compliance dashboard.</p>
            </div>
            <div>
              {[{step:'1',title:'API Connection',desc:'The platform connects to your core banking system via REST API or ISO 20022 message format. No database migration required. Setup time: under 48 hours.'},{step:'2',title:'KYC & Background Profiling',desc:'For every new counterparty, the system performs an automated background check — pulling from international sanctions lists (OFAC, EU, UN), PEP databases, adverse media feeds, and corporate registry data to build a full risk profile before the first transaction is approved.'},{step:'3',title:'Real-Time Transaction Screening',desc:'Every transaction is scored within 2.4 seconds. Scores above the configurable threshold are automatically flagged and routed to a human compliance officer for review.'},{step:'4',title:'Compliance Reporting',desc:'Flagged cases are automatically documented with a full audit trail — transaction metadata, reasoning, risk score breakdown, and recommended action — ready for regulatory submission.'}].map((item) => (
                <div key={item.step} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '24px', marginBottom: '40px', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '32px', fontWeight: 700, color: '#C8102E' }}>{item.step}</div>
                  <div><div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', fontWeight: 600, color: '#0A0A0A', marginBottom: '8px' }}>{item.title}</div><div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.6 }}>{item.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="technology" ref={setRef('technology')} style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#0A0A0A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>COUNTERPARTY INTELLIGENCE</div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '52px', fontWeight: 700, color: '#FFFFFF', textAlign: 'center', lineHeight: 1.2, margin: 0, marginBottom: '48px', maxWidth: '900px' }}>Know who you are doing business with — before the transaction clears</h2>
          <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: '#888888', lineHeight: 1.8, margin: 0, marginBottom: '48px', maxWidth: '700px', textAlign: 'center' }}>Before any cross-border transaction is approved, the platform builds a complete risk profile of the counterparty. This includes sanctions screening, politically exposed person checks, corporate ownership structure analysis, and adverse media monitoring across global news sources.</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['OFAC Screening', 'PEP Database', 'Adverse Media', 'Corporate Registry', 'Sanctions Lists'].map((badge) => (
              <div key={badge} style={{ backgroundColor: '#1A1A1A', border: '1px solid #C8102E', padding: '16px 24px', fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em', borderRadius: 0 }}>{badge}</div>
            ))}
          </div>
        </section>

        <section style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
          <div style={{ maxWidth: '1100px', width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '16px' }}>PLATFORM LOGIC</div>
              <div style={{ width: '40px', height: '1px', backgroundColor: '#C8102E', margin: '16px 0 32px' }} />
              <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '44px', fontWeight: 700, color: '#0A0A0A', lineHeight: 1.2, margin: 0 }}>This is not detection as a feature. This is detection as the foundation.</h2>
            </div>
            <div>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', color: '#0A0A0A', lineHeight: 1.8, margin: 0, marginBottom: '24px' }}>We are designing a fraud detection assistant for international financial institutions because traditional fraud monitoring systems are too slow and limited to detect evolving cross-border fraud patterns effectively.</p>
              <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', color: '#0A0A0A', lineHeight: 1.8, margin: 0 }}>The platform's core value depends on continuous fraud prediction, behavioural analysis, and adaptive monitoring — not optional features layered onto an existing workflow.</p>
            </div>
          </div>
        </section>

        <section style={{ ...fadeStyle, backgroundColor: '#FFFFFF', padding: '0 40px 80px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0px' }}>
              <div style={{ borderLeft: '3px solid #0A0A0A', paddingLeft: '40px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>WHAT SURVIVES WITHOUT THE PLATFORM</div>
                {['Basic transaction monitoring', 'Manual compliance processes', 'Rule-based alerts', 'Standard banking operations'].map((item) => (
                  <div key={item} style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#0A0A0A', lineHeight: 2 }}>{item}</div>
                ))}
              </div>
              <div style={{ borderLeft: '3px solid #C8102E', paddingLeft: '40px' }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>WHAT COLLAPSES WITHOUT THE PLATFORM</div>
                {['Real-time fraud prediction', 'Cross-country pattern recognition', 'Adaptive fraud detection', 'Large-scale monitoring efficiency'].map((item) => (
                  <div key={item} style={{ fontFamily: '"Inter", sans-serif', fontSize: '15px', color: '#0A0A0A', fontWeight: 600, lineHeight: 2 }}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#C8102E', padding: '64px 40px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#FFFFFF', display: 'block', marginBottom: '16px' }}>Key dependency:</span>
            <p style={{ fontFamily: '"Inter", sans-serif', fontSize: '17px', color: '#FFFFFF', lineHeight: 1.7, margin: 0 }}>The system depends on high-quality, continuously updated international transaction data. Incomplete or biased data could significantly reduce fraud detection accuracy. Data partnerships with SWIFT, local central banks, and licensed data providers are essential to system performance.</p>
          </div>
        </section>

        <section style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#0A0A0A', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
          <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px' }}>WHO IT SERVES</div>
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '52px', fontWeight: 700, color: '#FFFFFF', textAlign: 'center', margin: 0, marginBottom: '80px' }}>Built for the institutions that move money across borders</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', maxWidth: '1100px', width: '100%' }}>
            {[{title:'International Banks',desc:'Full integration with core banking infrastructure. Real-time scoring on all SWIFT and SEPA transactions with automated SAR generation.'},{title:'Fintech Payment Companies',desc:'API-first integration for neobanks and payment processors. Lightweight SDK available for rapid deployment within existing transaction pipelines.'},{title:'Compliance Officers',desc:'A dedicated compliance dashboard surfaces flagged transactions, risk scores, and one-click case escalation tools.'},{title:'Cross-Border Monitoring Teams',desc:'Multi-jurisdiction monitoring with configurable risk thresholds per corridor, currency pair, and transaction type.'}].map((card) => (
              <div key={card.title} style={{ backgroundColor: '#111111', borderTop: '3px solid #C8102E', padding: '40px 32px', borderRadius: 0 }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: '#C8102E', marginBottom: '24px' }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>{card.title}</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="team" ref={setRef('team')} style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
          
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '52px', fontWeight: 700, color: '#0A0A0A', textAlign: 'center', margin: 0, marginBottom: '80px' }}>Our Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px', width: '100%' }}>
            {[{role:'Role A',name:'Emmanuel',desc:'Business Logic',resp:'Owns the product logic, use case definition, and decision framework.'},{role:'Role B',name:'Sasha',desc:'Workflow & Risk',resp:'Designs the compliance workflow, risk scoring thresholds, and escalation protocols.'},{role:'Role C',name:'Denis',desc:'Prototype & Tools',resp:'Builds and deploys the live prototype and manages the GitHub repository.'}].map((card) => (
              <div key={card.name} style={{ backgroundColor: '#FFFFFF', border: '1px solid #0A0A0A', borderTop: '3px solid #C8102E', padding: '48px 32px', borderRadius: 0 }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.15em' }}>{card.role}</div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#0A0A0A', marginTop: '12px' }}>{card.name}</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', marginTop: '8px' }}>{card.desc}</div>
                <div style={{ width: '40px', height: '1px', backgroundColor: '#C8102E', margin: '24px 0' }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#0A0A0A' }}>{card.resp}</div>
              </div>
            ))}
          </div>
        </section>

        <footer style={{ backgroundColor: '#0A0A0A', borderTop: '1px solid #C8102E', padding: '48px 40px' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', alignItems: 'center', gap: '40px' }}>
            <div>
              <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cross-Border Fraud Detection</div>

            </div>
            <div style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
              {['GitHub', 'Live App'].map((link) => (
                <a key={link} href={link === 'GitHub' ? 'https://github.com/DigitalCoa-ch/ai-native-team-25' : 'https://team-25.apps.digitalcoa.ch'} style={{ fontFamily: '"Inter", sans-serif', fontSize: '12px', color: '#888888', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#C8102E')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#888888')}
                >{link}</a>
              ))}
            </div>
            <div style={{ textAlign: 'right' }}>
              <a href="https://team-25.apps.digitalcoa.ch" style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#FFFFFF', backgroundColor: '#C8102E', padding: '12px 28px', textDecoration: 'none', borderRadius: 0, display: 'inline-block' }}>View Live App</a>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
