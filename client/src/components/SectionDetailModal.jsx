import React from 'react';
import { X, BookOpen, Scale, AlertCircle, CheckCircle, ArrowLeftRight, FileText } from 'lucide-react';
import SourceBadge from './SourceBadge.jsx';

export default function SectionDetailModal({ sectionData, onClose }) {
  if (!sectionData) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(11, 25, 44, 0.65)',
        backdropFilter: 'blur(4px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        className="card animate-fade-in"
        style={{
          width: '100%',
          maxWidth: '750px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          padding: '2rem',
          position: 'relative',
          boxShadow: 'var(--shadow-xl)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            padding: '4px'
          }}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ marginBottom: '1.25rem', paddingRight: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
            <SourceBadge act={sectionData.act || 'BNS'} section={sectionData.section} isMock={true} />
            {sectionData.chapter && (
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {sectionData.chapter}
              </span>
            )}
          </div>
          <h2 style={{ fontSize: '1.375rem', color: 'var(--color-navy-900)' }}>
            {sectionData.act} § {sectionData.section}: {sectionData.title}
          </h2>
          {sectionData.ipcEquivalent && (
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginTop: '0.5rem', padding: '0.25rem 0.625rem', backgroundColor: '#eff6ff', borderRadius: '4px', fontSize: '0.8125rem', color: '#1d4ed8', fontWeight: 600 }}>
              <ArrowLeftRight size={13} />
              <span>Concordance: Equivalent to {sectionData.ipcEquivalent}</span>
            </div>
          )}
        </div>

        {/* Plain Language Explanation */}
        <div style={{ marginBottom: '1.25rem', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.375rem' }}>
            <BookOpen size={14} />
            <span>Plain Language Meaning (Citizen Overview)</span>
          </div>
          <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.55 }}>
            {sectionData.plainExplanation || sectionData.summary || 'Summary not available.'}
          </p>
        </div>

        {/* Statutory Legal Text */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-navy-800)', textTransform: 'uppercase', marginBottom: '0.375rem' }}>
            <FileText size={14} />
            <span>Official Statutory Provision (Verbatim Excerpt)</span>
          </div>
          <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-strong)', padding: '1rem', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', color: '#1e293b', fontStyle: 'italic', lineHeight: 1.6 }}>
            "{sectionData.fullText || sectionData.summary}"
          </div>
        </div>

        {/* Section Classifications Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
          <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fef3c7', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase' }}>Punishment</div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#92400e', marginTop: '0.2rem' }}>
              {sectionData.punishment || 'Prescribed under Act'}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cognizability</div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
              {sectionData.cognizable || 'N/A'}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bail Status</div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
              {sectionData.bailable || 'N/A'}
            </div>
          </div>

          <div style={{ backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Compounding</div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
              {sectionData.compoundable || 'N/A'}
            </div>
          </div>
        </div>

        {/* Keywords */}
        {sectionData.keywords && (
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.375rem' }}>
              Indexed Semantic Tags:
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {sectionData.keywords.map((kw, i) => (
                <span key={i} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', backgroundColor: 'var(--bg-surface-muted)', color: 'var(--text-secondary)', borderRadius: '4px' }}>
                  #{kw}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Modal Footer */}
        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            Source: {sectionData.sourceDocument || 'Gazette of India (Mock Annotation)'}
          </span>
          <button onClick={onClose} className="btn btn-primary btn-sm">
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
