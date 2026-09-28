import React from 'react';

export default function SourceBadge({ act, section, isMock = true }) {
  const getActClass = () => {
    const a = (act || '').toUpperCase();
    if (a.includes('BNS')) return 'badge-bns';
    if (a.includes('BNSS')) return 'badge-bnss';
    if (a.includes('BSA')) return 'badge-bsa';
    if (a.includes('IT')) return 'badge-itact';
    return 'badge-case';
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem' }}>
      <span className={`badge ${getActClass()}`}>
        {act} {section ? `§ ${section}` : ''}
      </span>
      {isMock && (
        <span className="badge badge-mock" title="Illustrative Mock Record for Development">
          MOCK
        </span>
      )}
    </div>
  );
}
