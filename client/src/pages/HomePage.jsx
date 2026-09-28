import React from 'react';
import { Link } from 'react-router-dom';
import {
  Scale,
  ShieldAlert,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers,
  FileCheck,
  Search,
  Sparkles,
  ArrowLeftRight,
  Info
} from 'lucide-react';

export default function HomePage() {
  const transitionExamples = [
    { offense: 'Cheating / Online Fraud', ipc: 'IPC Section 420', bns: 'BNS Section 318(4)', change: 'Retains 7-year imprisonment; updated for digital inducements' },
    { offense: 'Theft / Mobile Stolen', ipc: 'IPC Section 378 & 379', bns: 'BNS Section 303', change: 'Introduces community service for petty theft under ₹5,000' },
    { offense: 'Murder', ipc: 'IPC Section 302', bns: 'BNS Section 103', change: 'Explicit subsection targeting organized mob lynching' },
    { offense: 'Stalking & Cyberstalking', ipc: 'IPC Section 354D', bns: 'BNS Section 78', change: 'Strengthened electronic surveillance and online monitoring scope' },
    { offense: 'Criminal Intimidation & Threats', ipc: 'IPC Section 503 & 506', bns: 'BNS Section 351', change: 'Covers digital blackmail, online coercion, and extortion threats' }
  ];

  const capabilities = [
    {
      icon: <ShieldAlert size={24} color="var(--color-accent)" />,
      title: 'Natural-Language Grievance Triage',
      desc: 'Describe real-world issues (e.g. "I was tricked into scanning a QR code") and receive structured statutory classification without legal jargon.'
    },
    {
      icon: <FileCheck size={24} color="#059669" />,
      title: 'Actionable Evidence Checklists',
      desc: 'Dynamic checklists identifying critical digital proof (transcripts, UTR numbers, logs) with BSA Section 63 compliance guidance.'
    },
    {
      icon: <ArrowLeftRight size={24} color="#d97706" />,
      title: 'IPC ↔ BNS Concordance Engine',
      desc: 'Seamless cross-referencing between historical 1860 IPC sections and the modern 2023 Bharatiya Nyaya Sanhita structure.'
    },
    {
      icon: <Layers size={24} color="#6366f1" />,
      title: 'Multi-Statutory Synthesis',
      desc: 'Synthesizes substantive law (BNS), procedural law (BNSS), electronic evidence rules (BSA), and specialized cyber statutes (IT Act).'
    },
    {
      icon: <Search size={24} color="#0284c7" />,
      title: 'Source-Grounded Precedent Discovery',
      desc: 'Every legal claim is explicitly tied to statutory provisions and Supreme Court / High Court ratio decidendi.'
    },
    {
      icon: <Cpu size={24} color="#0f766e" />,
      title: 'Pluggable AI Architecture',
      desc: 'Engineered for seamless drop-in transition from deterministic mock testing to fine-tuned Indian Legal Llama 3.2 3B & ChromaDB RAG.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--color-primary)',
        color: '#ffffff',
        padding: '4.5rem 0 5.5rem 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        {/* Subtle background glow */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.18) 0%, rgba(11, 25, 44, 0) 70%)',
          pointerEvents: 'none'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center' }}>
            {/* Tagline Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.875rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#bae6fd',
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={14} color="#38bdf8" />
              <span>India's Criminal Law Transition Platform (BNS • BNSS • BSA • IT Act)</span>
            </div>

            {/* Main Title */}
            <h1 style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '1.25rem',
              lineHeight: 1.15
            }}>
              BNS AI Legal Companion
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              color: '#e2e8f0',
              fontWeight: 500,
              marginBottom: '1.5rem',
              lineHeight: 1.4
            }}>
              "Making Indian Law Understandable, Accessible, and Actionable for Everyone."
            </p>

            <p style={{
              fontSize: '1rem',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto 2.5rem auto',
              lineHeight: 1.6
            }}>
              Transform colloquial real-world grievances into clear statutory mappings, evidence preservation checklists, procedural next steps, and verified case precedents.
            </p>

            {/* Dual CTAs */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/citizen-assistant" className="btn btn-accent btn-lg" style={{ boxShadow: '0 4px 14px rgba(2, 132, 199, 0.4)' }}>
                <ShieldAlert size={20} />
                <span>Describe a Legal Problem</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/legal-research" className="btn btn-outline btn-lg" style={{ color: '#ffffff', borderColor: 'rgba(255, 255, 255, 0.3)', backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                <BookOpen size={20} />
                <span>Explore Legal Research</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Structured Cognitive Pipeline
            </div>
            <h2 style={{ fontSize: '1.875rem', color: 'var(--color-navy-900)' }}>
              How the Legal Companion Works
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginTop: '0.5rem' }}>
              A deterministic 3-tier synthesis model bridging citizen language with formal statutory frameworks.
            </p>
          </div>

          <div className="grid-3">
            <div className="card" style={{ backgroundColor: 'var(--bg-surface-subtle)', borderColor: 'var(--border-subtle)' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                1
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Natural Language Description</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Ordinary citizens explain what happened in plain English without needing to know section numbers, Latin maxims, or legal vocabulary.
              </p>
            </div>

            <div className="card" style={{ backgroundColor: 'var(--bg-surface-subtle)', borderColor: 'var(--border-subtle)' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: 'var(--color-accent)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                2
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Statutory & Evidentiary Synthesis</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                The engine evaluates substantive provisions (BNS), procedural avenues (BNSS), electronic evidence mandates (BSA), and cyber laws (IT Act).
              </p>
            </div>

            <div className="card" style={{ backgroundColor: 'var(--bg-surface-subtle)', borderColor: 'var(--border-subtle)' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                backgroundColor: '#059669',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                marginBottom: '1rem'
              }}>
                3
              </div>
              <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Actionable Roadmap & Precedents</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Outputs an interactive evidence preservation checklist, 1930/portal escalation steps, relevant case law holdings, and clear citations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* IPC to BNS Concordance Transition Table */}
      <section style={{ padding: '4rem 0', backgroundColor: 'var(--bg-page)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.375rem' }}>
                Legal Reform Crosswalk
              </div>
              <h2 style={{ fontSize: '1.75rem', color: 'var(--color-navy-900)' }}>
                IPC (1860) ↔ BNS (2023) Concordance
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginTop: '0.25rem' }}>
                Key criminal offenses renumbered and modernized under the new statutory regime.
              </p>
            </div>
            <Link to="/bns-explorer" className="btn btn-outline btn-sm">
              <span>View Full BNS Explorer</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.875rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-navy-900)', color: '#ffffff' }}>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Offense Category</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Old Law (IPC 1860)</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>New Law (BNS 2023)</th>
                    <th style={{ padding: '0.875rem 1.25rem', fontWeight: 600 }}>Key Statutory Nuance</th>
                  </tr>
                </thead>
                <tbody>
                  {transitionExamples.map((item, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid var(--border-subtle)', backgroundColor: idx % 2 === 0 ? '#ffffff' : '#f8fafc' }}>
                      <td style={{ padding: '0.875rem 1.25rem', fontWeight: 600, color: 'var(--color-navy-900)' }}>
                        {item.offense}
                      </td>
                      <td style={{ padding: '0.875rem 1.25rem', color: '#64748b' }}>
                        <span style={{ textDecoration: 'line-through' }}>{item.ipc}</span>
                      </td>
                      <td style={{ padding: '0.875rem 1.25rem' }}>
                        <span style={{ fontWeight: 700, color: '#1d4ed8', backgroundColor: '#dbeafe', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
                          {item.bns}
                        </span>
                      </td>
                      <td style={{ padding: '0.875rem 1.25rem', color: 'var(--text-secondary)', fontSize: '0.8125rem' }}>
                        {item.change}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Grid */}
      <section style={{ padding: '4rem 0', backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 3rem auto' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              Engineered for Accuracy
            </div>
            <h2 style={{ fontSize: '1.875rem', color: 'var(--color-navy-900)' }}>
              Core Platform Capabilities
            </h2>
          </div>

          <div className="grid-3">
            {capabilities.map((cap, i) => (
              <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>{cap.icon}</div>
                <h3 style={{ fontSize: '1.0625rem', color: 'var(--color-navy-900)' }}>{cap.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source Grounding & Anti-Hallucination Philosophy */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f1f5f9' }}>
        <div className="container">
          <div className="card" style={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', padding: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '12px',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Scale size={32} color="#38bdf8" />
              </div>

              <div style={{ flex: 1, minWidth: '280px' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                  Architecture Principle
                </div>
                <h3 style={{ fontSize: '1.375rem', color: 'var(--color-navy-900)', marginBottom: '0.75rem' }}>
                  Legal Grounding Before AI Generation
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  In criminal jurisprudence, generative AI models must never invent section numbers, statutory penalties, or fake judicial citations. Our architecture strictly decouples <strong>authoritative legal retrieval</strong> from <strong>plain-language explanation generation</strong>.
                </p>
                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <CheckCircle2 size={16} color="var(--color-success)" />
                    <span>Zero Ungrounded Section Numbering</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <CheckCircle2 size={16} color="var(--color-success)" />
                    <span>Explicit MOCK Labels in Development</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <CheckCircle2 size={16} color="var(--color-success)" />
                    <span>Traceable Judicial Ratios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
