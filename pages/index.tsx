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

  const svg_bank = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>"';
  const svg_fintech = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><line x1="12" y1="2" x2="12" y2="22"/></svg>"';
  const svg_compliance = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>"';
  const svg_monitoring = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>"';
  const svg_emmanuel = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#C8102E" stroke-width="1.5"/><rect x="22" y="22" width="20" height="20" rx="2" stroke="#C8102E" stroke-width="1.5"/><line x1="32" y1="12" x2="32" y2="22" stroke="#C8102E" stroke-width="1.5"/><line x1="32" y1="42" x2="32" y2="52" stroke="#C8102E" stroke-width="1.5"/><line x1="12" y1="32" x2="22" y2="32" stroke="#C8102E" stroke-width="1.5"/><line x1="42" y1="32" x2="52" y2="32" stroke="#C8102E" stroke-width="1.5"/><circle cx="32" cy="32" r="4" fill="#C8102E"/></svg>"';
  const svg_sasha = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#C8102E" stroke-width="1.5"/><line x1="32" y1="18" x2="32" y2="46" stroke="#C8102E" stroke-width="1.5"/><line x1="20" y1="46" x2="44" y2="46" stroke="#C8102E" stroke-width="1.5"/><line x1="32" y1="22" x2="22" y2="30" stroke="#C8102E" stroke-width="1.5"/><line x1="32" y1="22" x2="42" y2="30" stroke="#C8102E" stroke-width="1.5"/><path d="M18 30 Q22 34 26 30" stroke="#C8102E" stroke-width="1.5" fill="none"/><path d="M38 30 Q42 26 46 30" stroke="#C8102E" stroke-width="1.5" fill="none"/></svg>"';
  const svg_denis = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="#C8102E" stroke-width="1.5"/><rect x="16" y="20" width="32" height="24" rx="2" stroke="#C8102E" stroke-width="1.5"/><polyline points="24,28 20,32 24,36" stroke="#C8102E" stroke-width="1.5" fill="none"/><polyline points="40,28 44,32 40,36" stroke="#C8102E" stroke-width="1.5" fill="none"/><line x1="29" y1="36" x2="35" y2="28" stroke="#C8102E" stroke-width="1.5"/></svg>"';

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
          
          <h1 style={{ fontFamily: '"Playfair Display", serif', fontSize: '80px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1, maxWidth: '800px', margin: 0 }}>The Fraud Detection Platform Built for Global Finance</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600" fill="none" style={{ position: 'absolute', right: '-100px', top: '50%', transform: 'translateY(-50%)', opacity: 0.08, pointerEvents: 'none' }}>
            <circle cx="300" cy="300" r="200" stroke="#C8102E" strokeWidth="1"/>
            <circle cx="300" cy="300" r="150" stroke="#C8102E" strokeWidth="1"/>
            <circle cx="300" cy="300" r="100" stroke="#C8102E" strokeWidth="1"/>
            <circle cx="300" cy="300" r="50" stroke="#C8102E" strokeWidth="1"/>
            <line x1="100" y1="300" x2="500" y2="300" stroke="#C8102E" strokeWidth="1"/>
            <line x1="300" y1="100" x2="300" y2="500" stroke="#C8102E" strokeWidth="1"/>
            <line x1="158" y1="158" x2="442" y2="442" stroke="#C8102E" strokeWidth="1"/>
            <line x1="442" y1="158" x2="158" y2="442" stroke="#C8102E" strokeWidth="1"/>
            <circle cx="300" cy="300" r="6" fill="#C8102E"/>
            <circle cx="300" cy="100" r="4" fill="#C8102E"/>
            <circle cx="300" cy="500" r="4" fill="#C8102E"/>
            <circle cx="100" cy="300" r="4" fill="#C8102E"/>
            <circle cx="500" cy="300" r="4" fill="#C8102E"/>
            <circle cx="158" cy="158" r="4" fill="#C8102E"/>
            <circle cx="442" cy="158" r="4" fill="#C8102E"/>
            <circle cx="158" cy="442" r="4" fill="#C8102E"/>
            <circle cx="442" cy="442" r="4" fill="#C8102E"/>
          </svg>
          
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
            {[{num:'01',title:'Behavioural Pattern Analysis',desc:'The system builds a unique behavioural baseline for every account — typical transaction amounts, geographies, time patterns, and counterparties. Any deviation from this baseline triggers a risk score calculation in real time.'},{num:'02',title:'Cross-Border Anomaly Detection',desc:'Using a multilayer neural network trained on millions of international transactions, the system identifies anomalies specific to cross-border flows — unusual currency conversions, high-risk corridor routing, and jurisdiction-hopping patterns.'},{num:'03',title:'Natural Language Risk Signals',desc:'The system scans transaction metadata, reference fields, and memo text using language processing to detect coded language, sanctioned entity references, and known fraud keywords across 14 languages.'},{num:'04',title:'Adaptive Learning Engine',desc:'Every confirmed fraud case retrains the model automatically. The system becomes more accurate over time, adapting to new fraud typologies without requiring manual rule updates from compliance teams.'}].map((card) => (
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
          <svg xmlns="http://www.w3.org/2000/svg" width="400" height="160" viewBox="0 0 400 160" fill="none" style={{ margin: '0 auto 40px', display: 'block', opacity: 0.6 }}>
            <circle cx="200" cy="80" r="12" stroke="#C8102E" strokeWidth="1.5"/>
            <circle cx="80" cy="40" r="8" stroke="#C8102E" strokeWidth="1.5"/>
            <circle cx="80" cy="120" r="8" stroke="#C8102E" strokeWidth="1.5"/>
            <circle cx="320" cy="40" r="8" stroke="#C8102E" strokeWidth="1.5"/>
            <circle cx="320" cy="120" r="8" stroke="#C8102E" strokeWidth="1.5"/>
            <circle cx="20" cy="80" r="6" stroke="#FFFFFF" strokeWidth="1" opacity="0.3"/>
            <circle cx="380" cy="80" r="6" stroke="#FFFFFF" strokeWidth="1" opacity="0.3"/>
            <line x1="200" y1="80" x2="80" y2="40" stroke="#C8102E" strokeWidth="1" strokeDasharray="4 4"/>
            <line x1="200" y1="80" x2="80" y2="120" stroke="#C8102E" strokeWidth="1" strokeDasharray="4 4"/>
            <line x1="200" y1="80" x2="320" y2="40" stroke="#C8102E" strokeWidth="1" strokeDasharray="4 4"/>
            <line x1="200" y1="80" x2="320" y2="120" stroke="#C8102E" strokeWidth="1" strokeDasharray="4 4"/>
            <line x1="80" y1="40" x2="20" y2="80" stroke="#FFFFFF" strokeWidth="1" opacity="0.2"/>
            <line x1="80" y1="120" x2="20" y2="80" stroke="#FFFFFF" strokeWidth="1" opacity="0.2"/>
            <line x1="320" y1="40" x2="380" y2="80" stroke="#FFFFFF" strokeWidth="1" opacity="0.2"/>
            <line x1="320" y1="120" x2="380" y2="80" stroke="#FFFFFF" strokeWidth="1" opacity="0.2"/>
            <circle cx="200" cy="80" r="6" fill="#C8102E"/>
          </svg>
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
<div style={{ backgroundColor: '#111111', borderTop: '3px solid #C8102E', padding: '40px 32px', borderRadius: 0 }}>
                <div style={{ width: '48px', height: '48px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg_bank }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>International Banks</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>Full integration with core banking infrastructure. Real-time scoring on all SWIFT and SEPA transactions with automated SAR generation.</div>
              </div>
              <div style={{ backgroundColor: '#111111', borderTop: '3px solid #C8102E', padding: '40px 32px', borderRadius: 0 }}>
                <div style={{ width: '48px', height: '48px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg_fintech }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>Fintech Payment Companies</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>API-first integration for neobanks and payment processors. Lightweight SDK available for rapid deployment within existing transaction pipelines.</div>
              </div>
              <div style={{ backgroundColor: '#111111', borderTop: '3px solid #C8102E', padding: '40px 32px', borderRadius: 0 }}>
                <div style={{ width: '48px', height: '48px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg_compliance }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>Compliance Officers</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>A dedicated compliance dashboard surfaces flagged transactions, risk scores, and one-click case escalation tools.</div>
              </div>
              <div style={{ backgroundColor: '#111111', borderTop: '3px solid #C8102E', padding: '40px 32px', borderRadius: 0 }}>
                <div style={{ width: '48px', height: '48px', marginBottom: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg_monitoring }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '18px', fontWeight: 600, color: '#FFFFFF', marginBottom: '12px' }}>Cross-Border Monitoring Teams</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>Multi-jurisdiction monitoring with configurable risk thresholds per corridor, currency pair, and transaction type.</div>
              </div>
          </div>
        </section>

        <section id="team" ref={setRef('team')} style={{ ...fadeStyle, minHeight: '100vh', backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '80px 40px' }}>
          
          <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '52px', fontWeight: 700, color: '#0A0A0A', textAlign: 'center', margin: 0, marginBottom: '80px' }}>Our Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', maxWidth: '900px', width: '100%' }}>
<div style={{ backgroundColor: '#FFFFFF', border: '1px solid #0A0A0A', borderTop: '3px solid #C8102E', padding: '48px 32px', borderRadius: 0 }}>
                <div style={{ width: '64px', height: '64px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg_emmanuel }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Role A</div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#0A0A0A', marginTop: '12px' }}>Emmanuel</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', marginTop: '8px' }}>Business Logic</div>
                <div style={{ width: '40px', height: '1px', backgroundColor: '#C8102E', margin: '24px 0' }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#0A0A0A' }}>Owns the product logic, use case definition, and decision framework.</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #0A0A0A', borderTop: '3px solid #C8102E', padding: '48px 32px', borderRadius: 0 }}>
                <div style={{ width: '64px', height: '64px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg_sasha }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Role B</div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#0A0A0A', marginTop: '12px' }}>Sasha</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', marginTop: '8px' }}>Workflow &amp; Risk</div>
                <div style={{ width: '40px', height: '1px', backgroundColor: '#C8102E', margin: '24px 0' }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#0A0A0A' }}>Designs the compliance workflow, risk scoring thresholds, and escalation protocols.</div>
              </div>
              <div style={{ backgroundColor: '#FFFFFF', border: '1px solid #0A0A0A', borderTop: '3px solid #C8102E', padding: '48px 32px', borderRadius: 0 }}>
                <div style={{ width: '64px', height: '64px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} dangerouslySetInnerHTML={{ __html: svg_denis }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.15em' }}>Role C</div>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '28px', fontWeight: 700, color: '#0A0A0A', marginTop: '12px' }}>Denis</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', marginTop: '8px' }}>Prototype &amp; Tools</div>
                <div style={{ width: '40px', height: '1px', backgroundColor: '#C8102E', margin: '24px 0' }} />
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '13px', color: '#0A0A0A' }}>Builds and deploys the live prototype and manages the GitHub repository.</div>
              </div>
          </div>
        </section>

        
        {/* ─── PROTOTYPE STATUS SECTION ────────────────────────────────── */}
        <section style={{ ...fadeStyle, backgroundColor: '#0A0A0A', padding: '80px 40px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '11px', color: '#C8102E', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '24px', textAlign: 'center' }}>PROTOTYPE STATUS</div>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '44px', fontWeight: 700, color: '#FFFFFF', textAlign: 'center', margin: 0, marginBottom: '64px', lineHeight: 1.2 }}>What we built, what is simulated, and what comes next</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '0px' }}>
              <div style={{ backgroundColor: '#111111', borderTop: '3px solid #C8102E', padding: '32px', borderRadius: 0 }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>What Changed</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>Added the six-step transaction workflow, human oversight section, dashboard preview, bank integration steps, and counterparty intelligence content.</div>
              </div>
              <div style={{ backgroundColor: '#111111', borderTop: '3px solid #C8102E', padding: '32px', borderRadius: 0 }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>What Is Simulated</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>Transaction data is simulated using placeholder records. Live banking API connections are not active. Fraud risk scores are generated by a prototype model. User authentication is not yet implemented.</div>
              </div>
              <div style={{ backgroundColor: '#111111', borderTop: '3px solid #C8102E', padding: '32px', borderRadius: 0 }}>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '16px', fontWeight: 600, color: '#FFFFFF', marginBottom: '16px' }}>What To Test Next</div>
                <div style={{ fontFamily: '"Inter", sans-serif', fontSize: '14px', color: '#888888', lineHeight: 1.7 }}>The human approval and rejection workflow on the compliance dashboard. Fraud risk scoring threshold configuration. The six-step transaction flow from input to final decision. Mobile responsiveness across all sections.</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: '#C8102E', padding: '40px' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontFamily: '"Playfair Display", serif', fontSize: '22px', color: '#FFFFFF', lineHeight: 1.5, margin: 0 }}>Our prototype proves that the system can detect suspicious international transactions by analyzing transaction patterns while the human still controls all final fraud decisions.</p>
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
