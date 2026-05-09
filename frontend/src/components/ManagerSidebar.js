import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/authSlice';

const menuItems = [
  { path: '/manager/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/manager/attendance', label: 'Attendance', icon: '📋' },
  { path: '/manager/calendar', label: 'Calendar', icon: '📅' },
  { path: '/manager/reports', label: 'Reports', icon: '📈' },
  { path: '/manager/profile', label: 'Profile', icon: '👤' },
];

export default function ManagerSidebar({ onNavigate }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
    if (onNavigate) onNavigate();
  };

  // Hide sidebar after navigation
  const handleNav = (path) => {
    navigate(path);
    if (onNavigate) onNavigate();
    // Custom event for layout to listen
    window.dispatchEvent(new Event('manager-nav'));
  };

  return (
    <aside style={{
      width: 260,
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0, left: 0, bottom: 0,
      zIndex: 999,
      overflow: 'hidden',
      boxShadow: '4px 0 24px rgba(0,0,0,0.15)',
    }}>
      {/* Logo */}
      <div style={{
        padding: '20px 24px',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        display: 'flex', alignItems: 'center', gap: 12,
        minHeight: 72,
      }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, flexShrink: 0,
          boxShadow: '0 4px 12px rgba(59,130,246,0.4)',
        }}>
          📋
        </div>
          <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: '#fff', letterSpacing: 0.5 }}>AttendEase</div>
          </div>
      </div>

      {/* Navigation Items */}
      <nav style={{ flex: 1, padding: '4px 12px', overflowY: 'auto' }}>
        {menuItems.map(item => {
          const isActive = location.pathname === item.path;
          const isHovered = hoveredItem === item.path;
          return (
            <div
              key={item.path}
              onClick={() => handleNav(item.path)}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '11px 16px',
                marginBottom: 4,
                borderRadius: 10,
                textDecoration: 'none',
                transition: 'all 0.2s',
                background: isActive
                  ? 'linear-gradient(135deg, rgba(59,130,246,0.2), rgba(29,78,216,0.15))'
                  : isHovered ? 'rgba(255,255,255,0.05)' : 'transparent',
                borderLeft: isActive ? '3px solid #3B82F6' : '3px solid transparent',
                position: 'relative',
                cursor: 'pointer',
              }}
            >
              <span style={{
                fontSize: 18,
                filter: isActive ? 'none' : 'grayscale(0.3)',
                opacity: isActive ? 1 : 0.8,
              }}>
                {item.icon}
              </span>
              <span style={{
                fontSize: 14, fontWeight: isActive ? 700 : 500,
                color: isActive ? '#E2E8F0' : '#94A3B8',
                whiteSpace: 'nowrap',
              }}>
                {item.label}
              </span>
              {isActive && (
                <div style={{
                  marginLeft: 'auto', width: 6, height: 6,
                  borderRadius: '50%', background: '#3B82F6',
                }} />
              )}
            </div>
          );
        })}
      </nav>

      {/* Sign Out */}
      <div style={{
        padding: '16px 12px',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}>
        <button
          onClick={handleLogout}
          onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(239,68,68,0.15)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
          style={{
            display: 'flex', alignItems: 'center', gap: 14,
            padding: '11px 16px',
            width: '100%', border: 'none',
            background: 'transparent', borderRadius: 10,
            cursor: 'pointer', transition: 'all 0.2s',
          }}
          title="Sign Out"
        >
          <span style={{ fontSize: 18 }}>🚪</span>
          <span style={{ fontSize: 14, fontWeight: 500, color: '#EF4444' }}>
            Sign Out
          </span>
        </button>
      </div>
    </aside>
  );
}
