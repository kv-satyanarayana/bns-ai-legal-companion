import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Search,
  BookOpen,
  Filter,
  Scale,
  Landmark,
  Layers,
  ArrowLeftRight,
  AlertCircle,
  FileText,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { api } from '../services/api.js';
import SourceBadge from '../components/SourceBadge.jsx';
import CaseCard from '../components/CaseCard.jsx';

export default function LegalResearchPage() {
  const { openModal } = useOutletContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeAct, setActiveAct] = useState('ALL');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const actFilters = [
    { key: 'ALL', label: 'All Sources' },
    { key: 'BNS', label: 'BNS (Substantive)' },
    { key: 'BNSS', label: 'BNSS (Procedure)' },
    { key: 'BSA', label: 'BSA (Evidence)' },
    { key: 'IT-ACT', label: 'IT Act (Cyber)' },
    { key: 'CASES', label: 'Case Law' }
  ];

  const quickSearchTags = [
    'Section 318 Cheating',
    'Section 103 Murder',
    'Section 66 IT Act',
    'Electronic Evidence BSA 61',
    'Zero FIR BNSS 173',
    'Stalking Section 78',
    'Shreya Singhal'
  ];

  const fetchSearchResults = async (query = '', act = 'ALL') => {
    setLoading(true);
    setError(null);
    try {
      const response = await api.searchLegal(query, act);
      if (response && response.success) {
        setResults(response.data || []);
      } else {
        throw new Error(response?.error?.message || 'Failed to fetch search results.');
      }
    } catch (err) {
      setError(err.message || 'Error communicating with legal search service.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults(searchTerm, activeAct);
  }, [activeAct]);

  const handleSearchSubmit = (e) => {
    e?.preventDefault();
    fetchSearchResults(searchTerm, activeAct);
  };

  const handleTagClick = (tag) => {
    setSearchTerm(tag);
    fetchSearchResults(tag, activeAct);
  };

  return (
    <div className="container">
      {/* Header Banner */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.625rem', backgroundColor: '#fef3c7', color: '#b45309', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          <BookOpen size={14} />
          <span>Mode B — Legal Research Workspace</span>
        </div>
        <h1 style={{ fontSize: '2rem', color: 'var(--color-navy-900)' }}>
          Statutory & Precedent Intelligence Engine
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginTop: '0.25rem' }}>
          Search Indian criminal statutes, section concordance mappings, procedural provisions, electronic evidence mandates, and landmark judicial decisions.
        </p>
      </div>

      {/* Search Bar & Filters */}
      <div className="card" style={{ marginBottom: '2rem', backgroundColor: '#ffffff', borderColor: '#cbd5e1' }}>
        <form onSubmit={handleSearchSubmit} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <div style={{ flex: 1, minWidth: '260px', position: 'relative' }}>
            <input
              type="text"
              className="input-text"
              placeholder="Search sections, offenses, keywords (e.g. '318', 'cheating', 'electronic evidence', 'stalking')..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '2.5rem' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading} style={{ minWidth: '120px' }}>
            <Search size={16} />
            <span>Search</span>
          </button>
        </form>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <Filter size={13} />
            <span>Filter Corpus:</span>
          </span>
          {actFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveAct(filter.key)}
              style={{
                fontSize: '0.8125rem',
                fontWeight: 600,
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                border: activeAct === filter.key ? '1px solid var(--color-primary)' : '1px solid var(--border-subtle)',
                backgroundColor: activeAct === filter.key ? 'var(--color-primary)' : '#ffffff',
                color: activeAct === filter.key ? '#ffffff' : 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Quick Tag Suggestions */}
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', alignItems: 'center', fontSize: '0.75rem' }}>
          <span style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Quick Lookups:</span>
          {quickSearchTags.map((tag, idx) => (
            <span
              key={idx}
              onClick={() => handleTagClick(tag)}
              style={{
                cursor: 'pointer',
                padding: '0.15rem 0.5rem',
                backgroundColor: 'var(--bg-surface-subtle)',
                color: 'var(--color-primary-light)',
                borderRadius: '4px',
                border: '1px solid var(--border-subtle)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="card" style={{ textAlign: 'center', padding: '3rem 0' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '3px solid #e2e8f0',
            borderTopColor: 'var(--color-accent)',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1rem auto'
          }} />
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Searching legal corpus...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="card" style={{ backgroundColor: '#fef2f2', borderColor: '#fca5a5', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <AlertCircle size={20} color="#dc2626" />
          <span style={{ color: '#b91c1c', fontSize: '0.875rem' }}>{error}</span>
        </div>
      )}

      {/* Search Results Display */}
      {!loading && !error && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.125rem', color: 'var(--color-navy-900)' }}>
              Corpus Results ({results.length})
            </h3>
            {searchTerm && (
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                Matching query: "<strong>{searchTerm}</strong>"
              </span>
            )}
          </div>

          {results.length === 0 ? (
            <div className="card" style={{ textAlign: 'center', padding: '3rem 1.5rem', backgroundColor: '#ffffff' }}>
              <Scale size={40} color="var(--color-muted)" style={{ margin: '0 auto 1rem auto', opacity: 0.5 }} />
              <h4 style={{ fontSize: '1.125rem', color: 'var(--color-navy-900)', marginBottom: '0.5rem' }}>
                No matching legal material found in current dataset
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', maxWidth: '450px', margin: '0 auto 1.5rem auto' }}>
                Try searching by section numbers (e.g. 103, 318, 303, 66), statutory keywords (cheating, murder, theft, stalking), or clearing filters.
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveAct('ALL'); fetchSearchResults('', 'ALL'); }}
                className="btn btn-outline btn-sm"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {results.map((item, idx) => {
                if (item.itemType === 'CASE') {
                  return <CaseCard key={idx} caseItem={item} />;
                }

                return (
                  <div
                    key={idx}
                    className="card card-clickable"
                    onClick={() => openModal(item)}
                    style={{ backgroundColor: '#ffffff', borderColor: '#e2e8f0', transition: 'all 0.2s ease' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <SourceBadge act={item.act} section={item.section} isMock={true} />
                        {item.chapter && (
                          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                            {item.chapter}
                          </span>
                        )}
                      </div>
                      {item.ipcEquivalent && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.75rem', color: '#1d4ed8', fontWeight: 600, backgroundColor: '#eff6ff', padding: '0.15rem 0.5rem', borderRadius: '4px' }}>
                          <ArrowLeftRight size={12} />
                          <span>IPC: {item.ipcEquivalent}</span>
                        </div>
                      )}
                    </div>

                    <h4 style={{ fontSize: '1.125rem', color: 'var(--color-navy-900)', marginBottom: '0.4rem' }}>
                      {item.act} § {item.section}: {item.title}
                    </h4>

                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>
                      {item.plainExplanation || item.summary}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <div style={{ display: 'flex', gap: '0.75rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {item.punishment && (
                          <span><strong>Punishment:</strong> {item.punishment.length > 60 ? `${item.punishment.substring(0, 60)}...` : item.punishment}</span>
                        )}
                        {item.cognizable && (
                          <span>• {item.cognizable}</span>
                        )}
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600 }}>
                        Click to Inspect Section →
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
