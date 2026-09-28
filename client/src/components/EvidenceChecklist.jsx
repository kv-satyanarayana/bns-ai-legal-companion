import React, { useState } from 'react';
import { CheckSquare, Square, Copy, Check, ShieldCheck, Printer } from 'lucide-react';

export default function EvidenceChecklist({ evidence = [] }) {
  const [checkedIds, setCheckedIds] = useState(new Set());
  const [copied, setCopied] = useState(false);

  const toggleCheck = (id) => {
    setCheckedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const total = evidence.length;
  const completed = checkedIds.size;
  const progressPercent = total > 0 ? Math.round((completed / total) * 100) : 0;

  const handleCopy = () => {
    const text = evidence
      .map((item, idx) => {
        const isDone = checkedIds.has(item.id || idx);
        return `[${isDone ? 'X' : ' '}] ${item.title}: ${item.description}`;
      })
      .join('\n\n');

    navigator.clipboard.writeText(`BNS AI Legal Companion - Evidence Preservation Checklist\n\n${text}\n\n*General legal awareness guideline. Ensure electronic certificates under BSA Section 63.`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!evidence || evidence.length === 0) return null;

  return (
    <div className="card" style={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.75rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <ShieldCheck size={20} color="var(--color-accent)" />
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy-900)' }}>
              Evidence Preservation Checklist
            </h3>
          </div>
          <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
            Preserve these items before approaching authorities or cyber cells.
          </p>
        </div>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: '0.5rem' }} className="no-print">
          <button onClick={handleCopy} className="btn btn-outline btn-sm">
            {copied ? <Check size={14} color="var(--color-success)" /> : <Copy size={14} />}
            <span>{copied ? 'Copied' : 'Copy Checklist'}</span>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{ marginBottom: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.375rem' }}>
          <span>Preservation Progress: {completed} of {total} items documented</span>
          <span>{progressPercent}%</span>
        </div>
        <div style={{ width: '100%', height: '8px', backgroundColor: 'var(--bg-surface-muted)', borderRadius: '999px', overflow: 'hidden' }}>
          <div
            style={{
              width: `${progressPercent}%`,
              height: '100%',
              backgroundColor: progressPercent === 100 ? 'var(--color-success)' : 'var(--color-accent)',
              transition: 'width 0.3s ease'
            }}
          />
        </div>
      </div>

      {/* Checklist Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {evidence.map((item, index) => {
          const id = item.id || `item-${index}`;
          const isChecked = checkedIds.has(id);

          return (
            <div
              key={id}
              onClick={() => toggleCheck(id)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                padding: '0.875rem 1rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: isChecked ? '#f0fdf4' : 'var(--bg-surface-subtle)',
                border: isChecked ? '1px solid #bbf7d0' : '1px solid var(--border-subtle)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              <div style={{ marginTop: '2px', color: isChecked ? 'var(--color-success)' : 'var(--text-muted)' }}>
                {isChecked ? <CheckSquare size={20} /> : <Square size={20} />}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  color: isChecked ? '#166534' : 'var(--text-primary)',
                  textDecoration: isChecked ? 'line-through' : 'none'
                }}>
                  {item.title}
                </div>
                <div style={{
                  fontSize: '0.8125rem',
                  color: isChecked ? '#15803d' : 'var(--text-secondary)',
                  marginTop: '0.2rem',
                  lineHeight: 1.45
                }}>
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '1rem', padding: '0.625rem 0.875rem', backgroundColor: '#eff6ff', borderRadius: 'var(--radius-sm)', border: '1px solid #dbeafe', fontSize: '0.75rem', color: '#1e40af' }}>
        <strong>BSA Section 63 Reminder:</strong> Under the Bharatiya Sakshya Adhiniyam, digital evidence printouts, chats, and screenshots require a statutory certificate signed by the device custodian to be fully admissible.
      </div>
    </div>
  );
}
