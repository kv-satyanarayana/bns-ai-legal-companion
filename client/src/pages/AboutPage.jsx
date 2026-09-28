import React from 'react';
import {
  Scale,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="container" style={{ maxWidth: '900px' }}>
      {/* Header */}
      <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{
          width: '56px',
          height: '56px',
          borderRadius: '14px',
          backgroundColor: 'var(--color-primary)',
          color: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1rem auto',
          boxShadow: 'var(--shadow-md)'
        }}>
          <Scale size={30} color="#38bdf8" />
        </div>
        <h1 style={{ fontSize: '2.25rem', color: 'var(--color-navy-900)', marginBottom: '0.5rem' }}>
          About BNS AI Legal Companion
        </h1>
        <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '1.0625rem' }}>
          "Making Indian Law Understandable, Accessible, and Actionable for Everyone."
        </p>
      </div>

      {/* Project Vision */}
      <div className="card" style={{ marginBottom: '2rem', backgroundColor: '#ffffff', borderColor: '#cbd5e1' }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--color-navy-900)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ShieldCheck size={20} color="var(--color-accent)" />
          <span>Project Vision & Purpose</span>
        </h2>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>
          The enactment of the <strong>Bharatiya Nyaya Sanhita (BNS) 2023</strong>, <strong>Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023</strong>, and <strong>Bharatiya Sakshya Adhiniyam (BSA) 2023</strong> represents the most consequential reform in Indian criminal justice since 1860.
        </p>
        <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          This final-year engineering project bridges the cognitive gap between statutory legal complexity and everyday citizens, while offering a fast research workbench for law students and advocates.
        </p>
      </div>

      {/* Dual Personas */}
      <div className="grid-2" style={{ marginBottom: '2rem' }}>
        <div className="card" style={{ backgroundColor: '#ffffff' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
            Persona 1
          </div>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Everyday Citizens</h3>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>Zero requirement for legal jargon or section knowledge</li>
            <li>Colloquial query classification (cyber, property, harassment)</li>
            <li>Actionable evidence preservation checklists under BSA Sec 63</li>
            <li>Direct escalation pathways (1930 Helpline, cybercrime.gov.in)</li>
          </ul>
        </div>

        <div className="card" style={{ backgroundColor: '#ffffff' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
            Persona 2
          </div>
          <h3 style={{ fontSize: '1.125rem', marginBottom: '0.5rem' }}>Advocates & Law Students</h3>
          <ul style={{ paddingLeft: '1.25rem', fontSize: '0.875rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>IPC ↔ BNS Concordance crosswalk and section renumbering</li>
            <li>Procedural provisions and arrest/bail standards under BNSS</li>
            <li>Electronic evidence admissibility compliance under BSA</li>
            <li>Precedent synthesis and High Court / Supreme Court ratios</li>
          </ul>
        </div>
      </div>

      {/* Architecture & Future Roadmap */}
      <div className="card" style={{ marginBottom: '2rem', backgroundColor: '#f8fafc' }}>
        <h2 style={{ fontSize: '1.25rem', color: 'var(--color-navy-900)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Cpu size={20} color="var(--color-accent)" />
          <span>System Architecture & Future Roadmap</span>
        </h2>

        <div style={{ marginBottom: '1.25rem' }}>
          <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-navy-900)', marginBottom: '0.25rem' }}>
            Current Implementation (Phase 1: Working Mock Foundation)
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            Decoupled React client communicating with Express REST API, structured JSON mock legal datasets, and a pluggable <code>MockAiProvider</code> yielding deterministic responses with zero external AI dependencies.
          </p>
        </div>

        <div>
          <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-navy-900)', marginBottom: '0.25rem' }}>
            Next Phase: Indian Legal Llama 3.2 3B & ChromaDB RAG
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            The AI provider layer will connect to a local Ollama inference service running <code>GSMS-B/Indian-Legal-Llama-3.2-3B</code> backed by ChromaDB vector embeddings over official Gazette statutory PDFs and judicial databases. The frontend requires zero rewrite.
          </p>
        </div>
      </div>
    </div>
  );
}
