import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export default function DisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div style={{
      backgroundColor: '#fef3c7',
      borderBottom: '1px solid #fde68a',
      color: '#92400e',
      padding: '0.5rem 1rem',
      fontSize: '0.8125rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '0.75rem'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0 auto', maxWidth: '1200px' }}>
        <AlertTriangle size={15} style={{ flexShrink: 0, color: '#b45309' }} />
        <span>
          <strong>Legal Awareness Notice:</strong> This platform provides general legal information and statutory mapping based on test/mock data. It is <em>not</em> legal advice and does not replace consultation with a licensed advocate or official authorities.
        </span>
      </div>
      <button
        onClick={() => setDismissed(true)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#92400e',
          display: 'flex',
          alignItems: 'center',
          padding: '2px'
        }}
        aria-label="Dismiss banner"
      >
        <X size={14} />
      </button>
    </div>
  );
}
