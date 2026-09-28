import React from 'react';
import { Scale, BookOpen, AlertCircle, Shield } from 'lucide-react';
import SourceBadge from './SourceBadge.jsx';

export default function LawCard({ law, onInspect }) {
  if (!law) return null;

  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <div>
        {/* Header with Badges */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <SourceBadge act={law.act} section={law.section} isMock={true} />
          {law.classification && (
            <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', backgroundColor: 'var(--bg-surface-subtle)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
              {law.classification}
            </span>
          )}
        </div>

        {/* Section Title */}
        <h4 style={{ fontSize: '1.0625rem', marginBottom: '0.625rem', color: 'var(--color-navy-900)' }}>
          {law.title}
        </h4>

        {/* Why it may be relevant */}
        <div style={{ marginBottom: '1rem', backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
            <Scale size={13} />
            <span>Why this may be relevant</span>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {law.relevance}
          </p>
        </div>

        {/* Punishment */}
        {law.punishment && (
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase', marginBottom: '0.25rem' }}>
              <AlertCircle size={13} />
              <span>Prescribed Penalty / Scope</span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-primary)', fontWeight: 500 }}>
              {law.punishment}
            </p>
          </div>
        )}
      </div>

      {/* Footer / Source */}
      <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          Source: {law.source || 'Statutory Code'}
        </span>
        {onInspect && (
          <button
            onClick={() => onInspect(law)}
            className="btn btn-outline btn-sm"
            style={{ fontSize: '0.75rem' }}
          >
            <BookOpen size={12} />
            <span>Examine Section</span>
          </button>
        )}
      </div>
    </div>
  );
}
