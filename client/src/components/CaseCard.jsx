import React from 'react';
import { Landmark, Scale, FileText } from 'lucide-react';
import SourceBadge from './SourceBadge.jsx';

export default function CaseCard({ caseItem }) {
  if (!caseItem) return null;

  return (
    <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-accent)', marginBottom: '0.25rem' }}>
              <Landmark size={14} />
              <span>{caseItem.court} • {caseItem.year}</span>
            </div>
            <h4 style={{ fontSize: '1.0625rem', color: 'var(--color-navy-900)', fontWeight: 700 }}>
              {caseItem.caseName}
            </h4>
          </div>
          <SourceBadge act="CASE" isMock={true} />
        </div>

        {/* Legal Issue */}
        <div style={{ marginBottom: '0.75rem' }}>
          <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, color: 'var(--text-muted)' }}>
            Core Legal Issue
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500, marginTop: '0.15rem' }}>
            {caseItem.legalIssue}
          </p>
        </div>

        {/* Court Reasoning */}
        {caseItem.courtReasoning && (
          <div style={{ marginBottom: '0.75rem', backgroundColor: 'var(--bg-surface-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, color: 'var(--color-primary-light)', marginBottom: '0.2rem', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              <Scale size={12} />
              <span>Ratio Decidendi / Judicial Reasoning</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
              {caseItem.courtReasoning}
            </p>
          </div>
        )}

        {/* Outcome */}
        {caseItem.outcome && (
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ fontSize: '0.6875rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 700, color: '#15803d' }}>
              Judicial Outcome / Holding
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
              {caseItem.outcome}
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ paddingTop: '0.625rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        <span>Citation: {caseItem.citation || 'Case Record'}</span>
        <span>{caseItem.source || 'MOCK Database'}</span>
      </div>
    </div>
  );
}
