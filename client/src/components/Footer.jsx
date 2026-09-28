import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-navy-900)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      color: '#94a3b8',
      padding: '3rem 0 2rem 0',
      fontSize: '0.875rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
          marginBottom: '2.5rem'
        }}>
          {/* Col 1: Brand & Tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontWeight: 700, fontSize: '1.0625rem', marginBottom: '0.75rem' }}>
              <Scale size={20} color="var(--color-accent)" />
              <span>BNS AI Legal Companion</span>
            </div>
            <p style={{ fontSize: '0.8125rem', lineHeight: 1.6, color: '#cbd5e1', marginBottom: '1rem' }}>
              <em>"Making Indian Law Understandable, Accessible, and Actionable for Everyone."</em>
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              padding: '0.3rem 0.625rem',
              borderRadius: 'var(--radius-sm)',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              fontSize: '0.75rem',
              color: '#e2e8f0'
            }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></span>
              <span>Phase 1: Deterministic Mock AI Layer</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <div style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
              Platform Modes
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li>
                <Link to="/citizen-assistant" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='#94a3b8'}>
                  Citizen Grievance Assistant
                </Link>
              </li>
              <li>
                <Link to="/legal-research" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='#94a3b8'}>
                  Legal Research & Concordance
                </Link>
              </li>
              <li>
                <Link to="/bns-explorer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='#94a3b8'}>
                  BNS Statutory Explorer
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color='#38bdf8'} onMouseOut={e => e.target.style.color='#94a3b8'}>
                  System Architecture & Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory Coverage */}
          <div>
            <div style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
              Statutory Coverage
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem' }}>
              <li>Bharatiya Nyaya Sanhita, 2023 (BNS)</li>
              <li>Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)</li>
              <li>Bharatiya Sakshya Adhiniyam, 2023 (BSA)</li>
              <li>Information Technology Act, 2000 (IT Act)</li>
              <li>IPC ↔ BNS Concordance Crosswalk</li>
            </ul>
          </div>

          {/* Col 4: Official Emergency Portals */}
          <div>
            <div style={{ color: '#ffffff', fontWeight: 600, marginBottom: '0.75rem', fontSize: '0.9375rem' }}>
              Official Reporting Portals
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem' }}>
              <li>
                <a href="https://cybercrime.gov.in" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#38bdf8' }}>
                  <span>National Cyber Crime Portal</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://ceir.sancharsaathi.gov.in" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#38bdf8' }}>
                  <span>CEIR Lost Phone Blocking</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a href="https://edaakhil.nic.in" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#38bdf8' }}>
                  <span>e-Daakhil Consumer Forum</span>
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          fontSize: '0.75rem',
          color: '#64748b',
          lineHeight: 1.5,
          textAlign: 'center'
        }}>
          <p style={{ marginBottom: '0.5rem' }}>
            <strong>Legal Disclaimer:</strong> The BNS AI Legal Companion is an educational legal information triage platform. All responses and statutory classifications in Phase 1 are derived from deterministic mock datasets. This tool does not provide licensed legal advice, establish an attorney-client relationship, or substitute formal representation.
          </p>
          <p>© {new Date().getFullYear()} BNS AI Legal Companion • Academic Final-Year Engineering Project</p>
        </div>
      </div>
    </footer>
  );
}
