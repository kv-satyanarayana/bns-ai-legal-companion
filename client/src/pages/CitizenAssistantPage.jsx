import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  ShieldAlert,
  Send,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  RefreshCw,
  Copy,
  Check,
  Printer,
  Scale,
  BookOpen,
  HelpCircle,
  FileText
} from 'lucide-react';
import { api } from '../services/api.js';
import LawCard from '../components/LawCard.jsx';
import EvidenceChecklist from '../components/EvidenceChecklist.jsx';
import StepTimeline from '../components/StepTimeline.jsx';
import CaseCard from '../components/CaseCard.jsx';
import SourceBadge from '../components/SourceBadge.jsx';

export default function CitizenAssistantPage() {
  const { openModal } = useOutletContext();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState(0);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [copiedReport, setCopiedReport] = useState(false);

  const sampleQueries = [
    { title: 'Instagram Hack & Threats', text: 'Someone hacked my Instagram account and is threatening me.' },
    { title: 'UPI QR Scam', text: 'I was scammed through UPI.' },
    { title: 'Online Stalking & Harassment', text: 'Someone is repeatedly threatening and stalking me online.' },
    { title: 'Landlord Deposit Dispute', text: 'My landlord is refusing to return my deposit.' },
    { title: 'Stolen Mobile Phone', text: 'Someone stole my phone.' }
  ];

  const loadingSteps = [
    'Parsing natural-language grievance...',
    'Classifying legal domain & factual ingredients...',
    'Synthesizing BNS, BNSS, BSA & IT Act provisions...',
    'Compiling evidence preservation checklist & next steps...'
  ];

  const handleAnalyze = async (textToAnalyze) => {
    const text = (textToAnalyze || query).trim();
    if (!text) return;

    setLoading(true);
    setError(null);
    setResult(null);
    setLoadingStep(0);

    // Simulated progress steps for cognitive feedback
    const interval = setInterval(() => {
      setLoadingStep((prev) => (prev < loadingSteps.length - 1 ? prev + 1 : prev));
    }, 150);

    try {
      const response = await api.analyzeLegalProblem(text);
      clearInterval(interval);
      if (response && response.success) {
        setResult(response.data);
      } else {
        throw new Error(response?.error?.message || 'Failed to analyze query.');
      }
    } catch (err) {
      clearInterval(interval);
      setError(err.message || 'We could not process your request. Please check backend connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSampleClick = (sampleText) => {
    setQuery(sampleText);
    handleAnalyze(sampleText);
  };

  const handleReset = () => {
    setQuery('');
    setResult(null);
    setError(null);
  };

  const handleCopyReport = () => {
    if (!result) return;
    const report = `
=========================================
BNS AI LEGAL COMPANION — ANALYSIS REPORT
=========================================
Grievance: "${result.query}"

PROBLEM CLASSIFICATION:
Category: ${result.problemAnalysis?.category}
Subcategory: ${result.problemAnalysis?.subcategory}
Summary: ${result.problemAnalysis?.summary}

Issues Detected:
${result.problemAnalysis?.issues?.map(i => `• ${i}`).join('\n')}

POTENTIALLY RELEVANT LEGAL PROVISIONS:
${result.relevantLaws?.map(l => `${l.act} § ${l.section} (${l.title})\nRelevance: ${l.relevance}\nPunishment: ${l.punishment}`).join('\n\n')}

EVIDENCE CHECKLIST:
${result.evidence?.map(e => `[ ] ${e.title}: ${e.description}`).join('\n')}

POSSIBLE NEXT STEPS:
${result.nextSteps?.map(s => `${s.stepNumber}. ${s.title}: ${s.description} ${s.contactInfo ? `(${s.contactInfo})` : ''}`).join('\n')}

SIMILAR JUDICIAL PRECEDENTS:
${result.similarCases?.map(c => `${c.caseName} (${c.court}, ${c.year})\nIssue: ${c.legalIssue}\nReasoning: ${c.courtReasoning}\nOutcome: ${c.outcome}`).join('\n\n')}

DISCLAIMER:
${result.disclaimer}
=========================================
    `.trim();

    navigator.clipboard.writeText(report);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  return (
    <div className="container">
      {/* Header Banner */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.25rem 0.625rem', backgroundColor: '#e0f2fe', color: '#0369a1', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
          <ShieldAlert size={14} />
          <span>Mode A — Citizen Assistant</span>
        </div>
        <h1 style={{ fontSize: '2rem', color: 'var(--color-navy-900)' }}>
          Describe a Legal Grievance in Plain Language
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', marginTop: '0.25rem', maxWidth: '750px' }}>
          No legal terminology required. Describe what occurred to discover potentially relevant laws, preserve necessary evidence, and view official reporting steps.
        </p>
      </div>

      {/* Input Section */}
      <div className="card" style={{ marginBottom: '2rem', backgroundColor: '#ffffff', borderColor: '#cbd5e1' }}>
        <label htmlFor="grievance-input" style={{ display: 'block', fontWeight: 600, fontSize: '0.9375rem', color: 'var(--color-navy-900)', marginBottom: '0.5rem' }}>
          Describe your problem or incident:
        </label>
        <textarea
          id="grievance-input"
          className="textarea-input"
          placeholder="e.g. Someone hacked my Instagram account and is demanding money while threatening to leak my private photos..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          rows={4}
          disabled={loading}
          style={{ fontSize: '1rem', lineHeight: 1.5, marginBottom: '1rem' }}
        />

        {/* Suggestion Chips */}
        <div style={{ marginBottom: '1.25rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            <Sparkles size={13} color="var(--color-gold)" />
            <span>Try an illustrative scenario:</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {sampleQueries.map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSampleClick(s.text)}
                disabled={loading}
                className="btn btn-outline btn-sm"
                style={{ fontSize: '0.75rem', backgroundColor: '#f8fafc' }}
              >
                <span>{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            {query.length > 0 ? `${query.length} characters` : 'Describe the incident in as much factual detail as possible.'}
          </span>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {(query || result) && (
              <button
                onClick={handleReset}
                disabled={loading}
                className="btn btn-outline btn-sm"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => handleAnalyze()}
              disabled={loading || !query.trim()}
              className="btn btn-primary"
              style={{ minWidth: '160px' }}
            >
              {loading ? (
                <>
                  <RefreshCw size={16} className="animate-pulse-subtle" />
                  <span>Analyzing...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Analyze Problem</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Loading Feedback State */}
      {loading && (
        <div className="card animate-fade-in" style={{ textAlign: 'center', padding: '3rem 2rem', backgroundColor: '#ffffff', marginBottom: '2rem' }}>
          <div style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '4px solid #e2e8f0',
            borderTopColor: 'var(--color-accent)',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 1.5rem auto'
          }} />
          <h3 style={{ fontSize: '1.25rem', color: 'var(--color-navy-900)', marginBottom: '0.5rem' }}>
            Analyzing Your Legal Grievance
          </h3>
          <p style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.9375rem' }}>
            {loadingSteps[loadingStep]}
          </p>
          <div style={{ maxWidth: '300px', margin: '1rem auto 0 auto', height: '4px', backgroundColor: '#f1f5f9', borderRadius: '999px', overflow: 'hidden' }}>
            <div style={{
              width: `${((loadingStep + 1) / loadingSteps.length) * 100}%`,
              height: '100%',
              backgroundColor: 'var(--color-accent)',
              transition: 'width 0.2s ease'
            }} />
          </div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* Error Feedback State */}
      {error && !loading && (
        <div className="card animate-fade-in" style={{ backgroundColor: '#fef2f2', borderColor: '#fca5a5', marginBottom: '2rem', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
          <AlertCircle size={24} color="#dc2626" style={{ flexShrink: 0, marginTop: '2px' }} />
          <div style={{ flex: 1 }}>
            <h4 style={{ color: '#991b1b', fontSize: '1rem', marginBottom: '0.25rem' }}>
              Unable to complete legal analysis
            </h4>
            <p style={{ color: '#b91c1c', fontSize: '0.875rem', marginBottom: '0.75rem' }}>
              {error}
            </p>
            <button onClick={() => handleAnalyze()} className="btn btn-outline btn-sm" style={{ backgroundColor: '#ffffff', borderColor: '#fca5a5', color: '#991b1b' }}>
              Retry Analysis
            </button>
          </div>
        </div>
      )}

      {/* Analysis Results Display */}
      {result && !loading && (
        <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Section 1: Problem Classification & Issues Detected */}
          <div className="card" style={{ backgroundColor: '#ffffff', borderColor: '#cbd5e1' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem', flexWrap: 'wrap' }}>
                  <span className="badge badge-category">
                    {result.problemAnalysis?.category || 'Legal Grievance'}
                  </span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    • {result.problemAnalysis?.subcategory}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.5rem', color: 'var(--color-navy-900)' }}>
                  Problem Classification & Issue Breakdown
                </h2>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem' }} className="no-print">
                <button onClick={handleCopyReport} className="btn btn-outline btn-sm">
                  {copiedReport ? <Check size={14} color="var(--color-success)" /> : <Copy size={14} />}
                  <span>{copiedReport ? 'Report Copied' : 'Copy Full Analysis'}</span>
                </button>
                <button onClick={() => window.print()} className="btn btn-outline btn-sm">
                  <Printer size={14} />
                  <span>Print</span>
                </button>
              </div>
            </div>

            <p style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
              {result.problemAnalysis?.summary}
            </p>

            {/* Detected Issues */}
            {result.problemAnalysis?.issues?.length > 0 && (
              <div style={{ backgroundColor: 'var(--bg-surface-subtle)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-navy-800)', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Core Issues Identified:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  {result.problemAnalysis.issues.map((issue, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={15} color="var(--color-accent)" />
                      <span>{issue}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Section 2: Potentially Relevant Legal Provisions */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Statutory Mapping
              </div>
              <h3 style={{ fontSize: '1.375rem', color: 'var(--color-navy-900)' }}>
                Potentially Relevant Legal Sources
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                Provisions under Bharatiya Nyaya Sanhita (BNS), IT Act, and procedural/evidence enactments.
              </p>
            </div>

            <div className="grid-2">
              {result.relevantLaws?.map((law, idx) => (
                <LawCard
                  key={idx}
                  law={law}
                  onInspect={(l) => {
                    // Look up section if in BNS
                    api.getBnsSectionDetails(l.section).then(res => {
                      if (res.success && res.data) {
                        openModal(res.data);
                      } else {
                        openModal({
                          act: l.act,
                          section: l.section,
                          title: l.title,
                          plainExplanation: l.relevance,
                          punishment: l.punishment,
                          cognizable: l.classification,
                          summary: l.relevance,
                          sourceDocument: l.source
                        });
                      }
                    }).catch(() => {
                      openModal({
                        act: l.act,
                        section: l.section,
                        title: l.title,
                        plainExplanation: l.relevance,
                        punishment: l.punishment,
                        cognizable: l.classification,
                        summary: l.relevance,
                        sourceDocument: l.source
                      });
                    });
                  }}
                />
              ))}
            </div>
          </div>

          {/* Section 3: Evidence Preservation Checklist */}
          {result.evidence && result.evidence.length > 0 && (
            <EvidenceChecklist evidence={result.evidence} />
          )}

          {/* Section 4: Possible Next Steps */}
          {result.nextSteps && result.nextSteps.length > 0 && (
            <StepTimeline steps={result.nextSteps} />
          )}

          {/* Section 5: Similar Cases / Judicial Precedents */}
          {result.similarCases && result.similarCases.length > 0 && (
            <div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Judicial Precedents
                </div>
                <h3 style={{ fontSize: '1.375rem', color: 'var(--color-navy-900)' }}>
                  Similar Decisions & Court Reasoning
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                  Illustrative judicial holdings and legal tests articulated by High Courts and Supreme Court.
                </p>
              </div>

              <div className="grid-2">
                {result.similarCases.map((caseItem, idx) => (
                  <CaseCard key={idx} caseItem={caseItem} />
                ))}
              </div>
            </div>
          )}

          {/* Section 6: Verified Sources Metadata */}
          {result.sources && result.sources.length > 0 && (
            <div className="card" style={{ backgroundColor: 'var(--bg-surface-subtle)' }}>
              <h4 style={{ fontSize: '0.9375rem', color: 'var(--color-navy-900)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                <FileText size={16} color="var(--color-accent)" />
                <span>Statutory Grounding & Metadata</span>
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                {result.sources.map((s, idx) => (
                  <div key={idx} style={{ padding: '0.75rem', backgroundColor: '#ffffff', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: 'var(--color-navy-900)' }}>
                      {s.act} {s.section ? `• ${s.section}` : ''}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                      {s.document} ({s.type})
                    </div>
                    <div style={{ marginTop: '0.35rem' }}>
                      <span className="badge badge-mock">MOCK RECORD</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section 7: Safety / Legal Disclaimer */}
          <div style={{ padding: '1rem', backgroundColor: '#fffbeb', border: '1px solid #fde68a', borderRadius: 'var(--radius-md)', fontSize: '0.8125rem', color: '#92400e', lineHeight: 1.5 }}>
            <strong>Notice:</strong> {result.disclaimer || 'This analysis is for legal education and awareness only. Always consult a practicing advocate or relevant cyber cell officer before initiating legal proceedings.'}
          </div>

          {/* Reset / Ask Another Question Button */}
          <div style={{ textAlign: 'center', padding: '1rem 0' }} className="no-print">
            <button onClick={handleReset} className="btn btn-outline btn-lg">
              <RefreshCw size={16} />
              <span>Describe Another Grievance</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
