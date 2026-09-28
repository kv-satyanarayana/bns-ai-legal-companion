import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Compass,
  Search,
  BookOpen,
  Filter,
  ArrowLeftRight,
  Scale,
  FileText,
  AlertCircle,
  CheckCircle,
  Tag
} from 'lucide-react';
import { api } from '../services/api.js';
import SourceBadge from '../components/SourceBadge.jsx';

export default function BnsExplorerPage() {
  const { openModal } = useOutletContext();
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSections = async () => {
      setLoading(true);
      try {
        const response = await api.getBnsSections();
        if (response && response.success) {
          setSections(response.data || []);
          if (response.data?.length > 0) {
            setSelectedSection(response.data[0]);
          }
        } else {
          throw new Error('Failed to load BNS sections');
        }
      } catch (err) {
        setError(err.message || 'Error loading BNS statutory data.');
      } finally {
        setLoading(false);
      }
    };

    fetchSections();
  }, []);

  const chapters = ['ALL', ...new Set(sections.map(s => s.chapter).filter(Boolean))];

  const filteredSections = sections.filter(sec => {
    const matchesChapter = selectedChapter === 'ALL' || sec.chapter === selectedChapter;
    const q = searchTerm.toLowerCase().trim();
    if (!q) return matchesChapter;

    const matchNum = String(sec.section).toLowerCase().includes(q);
    const matchTitle = sec.title?.toLowerCase().includes(q);
    const matchIpc = sec.ipcEquivalent?.toLowerCase().includes(q);
    const matchPlain = sec.plainExplanation?.toLowerCase().includes(q);
    const matchKeywords = sec.keywords?.some(k => k.toLowerCase().includes(q));

    return matchesChapter && (matchNum || matchTitle || matchIpc || matchPlain || matchKeywords);
  });

  return (
    <div className="container">
      {/* Header Banner */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.625rem', backgroundColor: '#dbeafe', color: '#1e40af', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          <Compass size={14} />
          <span>Statutory Explorer</span>
        </div>
        <h1 style={{ fontSize: '2rem', color: 'var(--color-navy-900)' }}>
          Bharatiya Nyaya Sanhita (BNS), 2023 Browser
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginTop: '0.25rem' }}>
          Explore modern criminal statutory provisions, IPC concordance mappings, procedural classifications, and plain-English legal explanations.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="card" style={{ marginBottom: '1.5rem', backgroundColor: '#ffffff', borderColor: '#cbd5e1' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
          {/* Search Input */}
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              className="input-text"
              placeholder="Search by section #, title, or IPC equivalent (e.g. 103, 318, IPC 420)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ paddingLeft: '2.5rem' }}
            />
            <Search size={18} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>

          {/* Chapter Filter */}
          <div>
            <select
              className="select-input"
              value={selectedChapter}
              onChange={(e) => setSelectedChapter(e.target.value)}
            >
              {chapters.map((ch, idx) => (
                <option key={idx} value={ch}>
                  {ch === 'ALL' ? 'All Chapters (Entire BNS Corpus)' : ch}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Loading & Error States */}
      {loading && (
        <div className="card" style={{ textAlign: 'center', padding: '3rem 0' }}>
          <p style={{ color: 'var(--text-muted)' }}>Loading BNS section repository...</p>
        </div>
      )}

      {error && !loading && (
        <div className="card" style={{ backgroundColor: '#fef2f2', borderColor: '#fca5a5', marginBottom: '1.5rem' }}>
          <p style={{ color: '#b91c1c' }}>{error}</p>
        </div>
      )}

      {/* Master-Detail Layout */}
      {!loading && !error && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '1.5rem' }} className="bns-grid">
          {/* Left Column: Section List */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)' }}>
                Showing {filteredSections.length} Sections
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', maxHeight: '720px', overflowY: 'auto', paddingRight: '0.25rem' }}>
              {filteredSections.length === 0 ? (
                <div className="card" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    No BNS sections match your query.
                  </p>
                </div>
              ) : (
                filteredSections.map((sec, idx) => {
                  const isSelected = selectedSection?.section === sec.section;
                  return (
                    <div
                      key={idx}
                      onClick={() => setSelectedSection(sec)}
                      style={{
                        padding: '1rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: isSelected ? '#eff6ff' : '#ffffff',
                        border: isSelected ? '2px solid #3b82f6' : '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease',
                        boxShadow: isSelected ? 'var(--shadow-sm)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
                        <span style={{ fontWeight: 700, fontSize: '0.9375rem', color: isSelected ? '#1e40af' : 'var(--color-navy-900)' }}>
                          BNS § {sec.section}
                        </span>
                        {sec.ipcEquivalent && (
                          <span style={{ fontSize: '0.6875rem', color: '#2563eb', backgroundColor: '#dbeafe', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: 600 }}>
                            {sec.ipcEquivalent}
                          </span>
                        )}
                      </div>
                      <h4 style={{ fontSize: '0.875rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.35rem' }}>
                        {sec.title}
                      </h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>
                        {sec.plainExplanation?.substring(0, 85)}...
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>

          {/* Right Column: Deep-Dive Section Inspector */}
          <div>
            {selectedSection ? (
              <div className="card" style={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1', position: 'sticky', top: '90px' }}>
                {/* Header */}
                <div style={{ marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                    <SourceBadge act="BNS" section={selectedSection.section} isMock={true} />
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {selectedSection.chapter}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy-900)', marginBottom: '0.5rem' }}>
                    BNS § {selectedSection.section}: {selectedSection.title}
                  </h2>

                  {selectedSection.ipcEquivalent && (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', padding: '0.25rem 0.625rem', backgroundColor: '#eff6ff', borderRadius: '4px', fontSize: '0.8125rem', color: '#1d4ed8', fontWeight: 600 }}>
                      <ArrowLeftRight size={14} />
                      <span>Concordance: Equivalent to {selectedSection.ipcEquivalent}</span>
                    </div>
                  )}
                </div>

                {/* Plain-Language Citizen Meaning */}
                <div style={{ marginBottom: '1.25rem', backgroundColor: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    <BookOpen size={14} />
                    <span>Plain-Language Legal Meaning</span>
                  </div>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.55 }}>
                    {selectedSection.plainExplanation}
                  </p>
                </div>

                {/* Verbatim Statutory Text */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-navy-800)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    <FileText size={14} />
                    <span>Official Statutory Text (Verbatim Excerpt)</span>
                  </div>
                  <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--border-strong)', padding: '0.875rem', borderRadius: 'var(--radius-md)', fontSize: '0.8125rem', color: '#334155', fontStyle: 'italic', lineHeight: 1.6 }}>
                    "{selectedSection.fullText || selectedSection.summary}"
                  </div>
                </div>

                {/* Key Legal Attributes */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{ backgroundColor: '#fffbeb', border: '1px solid #fde68a', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#b45309', textTransform: 'uppercase' }}>Punishment</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#92400e', marginTop: '0.2rem' }}>
                      {selectedSection.punishment}
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Cognizability</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {selectedSection.cognizable}
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Bail Status</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {selectedSection.bailable}
                    </div>
                  </div>

                  <div style={{ backgroundColor: 'var(--bg-surface-subtle)', border: '1px solid var(--border-subtle)', padding: '0.75rem', borderRadius: 'var(--radius-sm)' }}>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Compounding</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.2rem' }}>
                      {selectedSection.compoundable}
                    </div>
                  </div>
                </div>

                {/* Keywords */}
                {selectedSection.keywords && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                      Related Indexing Tags:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                      {selectedSection.keywords.map((kw, i) => (
                        <span key={i} style={{ fontSize: '0.75rem', padding: '0.2rem 0.5rem', backgroundColor: 'var(--bg-surface-muted)', color: 'var(--text-secondary)', borderRadius: '4px' }}>
                          #{kw}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Source Verification */}
                <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>Source: {selectedSection.sourceDocument}</span>
                  <span className="badge badge-mock">MOCK RECORD</span>
                </div>
              </div>
            ) : (
              <div className="card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                <Compass size={36} color="var(--color-muted)" style={{ margin: '0 auto 1rem auto' }} />
                <p style={{ color: 'var(--text-muted)' }}>Select a BNS section from the left column to view statutory details.</p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 840px) {
          .bns-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
