import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Scale, BookOpen, ShieldAlert, Compass, Info, Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <Scale size={16} /> },
    { name: 'Citizen Assistant', path: '/citizen-assistant', icon: <ShieldAlert size={16} />, badge: 'Citizen Mode' },
    { name: 'Legal Research', path: '/legal-research', icon: <BookOpen size={16} />, badge: 'Pro' },
    { name: 'BNS Explorer', path: '/bns-explorer', icon: <Compass size={16} /> },
    { name: 'About', path: '/about', icon: <Info size={16} /> }
  ];

  return (
    <header style={{
      backgroundColor: 'var(--color-primary)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#ffffff',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '70px'
      }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: '#ffffff' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: 'var(--color-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 2px 8px rgba(2, 132, 199, 0.4)'
          }}>
            <Scale size={22} />
          </div>
          <div>
            <div style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              BNS AI Legal Companion
            </div>
            <div style={{ fontSize: '0.6875rem', color: '#94a3b8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Statutory Intelligence & Triage
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '0.5rem', alignItems: 'center' }} className="desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 0.875rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: isActive ? '#ffffff' : '#cbd5e1',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                transition: 'all 0.15s ease'
              })}
            >
              {item.icon}
              <span>{item.name}</span>
              {item.badge && (
                <span style={{
                  fontSize: '0.625rem',
                  padding: '1px 5px',
                  borderRadius: '999px',
                  backgroundColor: item.badge === 'Pro' ? '#d97706' : '#0284c7',
                  color: '#ffffff',
                  fontWeight: 700
                }}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Quick Emergency / Helpline Trigger */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-actions">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.4rem 0.75rem',
            backgroundColor: 'rgba(220, 38, 38, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            color: '#fca5a5'
          }}>
            <PhoneCall size={13} color="#ef4444" />
            <span>Cyber: <strong>1930</strong> | Emergency: <strong>112</strong></span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: '#ffffff',
            cursor: 'pointer',
            padding: '6px',
            display: 'block'
          }}
          className="mobile-menu-btn"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--color-navy-900)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          padding: '1rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                color: isActive ? '#ffffff' : '#94a3b8',
                backgroundColor: isActive ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                fontWeight: 600,
                fontSize: '0.9375rem'
              })}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {item.icon}
                <span>{item.name}</span>
              </div>
              {item.badge && (
                <span style={{ fontSize: '0.6875rem', padding: '2px 6px', borderRadius: '999px', backgroundColor: '#0284c7', color: '#ffffff' }}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}

          <div style={{
            marginTop: '0.75rem',
            padding: '0.75rem 1rem',
            backgroundColor: 'rgba(220, 38, 38, 0.15)',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.8125rem',
            color: '#fca5a5',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <PhoneCall size={16} />
            <span>Cyber Helpline: <strong>1930</strong> • Emergency: <strong>112</strong></span>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
