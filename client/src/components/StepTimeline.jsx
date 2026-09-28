import React from 'react';
import { ArrowRight, PhoneCall, Globe, CheckCircle2 } from 'lucide-react';

export default function StepTimeline({ steps = [] }) {
  if (!steps || steps.length === 0) return null;

  return (
    <div className="card">
      <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy-900)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <CheckCircle2 size={20} color="var(--color-accent)" />
        <span>Possible Next Steps & Redressal Pathway</span>
      </h3>
      <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Recommended procedural flow for reporting, triage, and legal consultation.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', position: 'relative' }}>
        {steps.map((step, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
              position: 'relative'
            }}
          >
            {/* Step Number Circle */}
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'var(--color-primary)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.875rem',
              flexShrink: 0,
              boxShadow: 'var(--shadow-xs)'
            }}>
              {step.stepNumber || idx + 1}
            </div>

            {/* Step Content */}
            <div style={{
              flex: 1,
              backgroundColor: 'var(--bg-surface-subtle)',
              padding: '1rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.375rem' }}>
                <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-navy-900)', fontWeight: 600 }}>
                  {step.title}
                </h4>
                {step.actionType && (
                  <span style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: '4px', backgroundColor: '#e2e8f0', color: '#334155' }}>
                    {step.actionType}
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {step.description}
              </p>

              {step.contactInfo && (
                <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--color-primary-light)', fontWeight: 600, backgroundColor: '#ffffff', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }}>
                  <PhoneCall size={14} color="var(--color-accent)" />
                  <span>{step.contactInfo}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
