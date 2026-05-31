import React from 'react';
import './index.css';

export default function App() {
  return (
    <div className="layout-container">
      <aside className="sidebar">
        <h2>💧 DripTracker</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>My Streams</li>
          <li>Vesting</li>
          <li>Settings</li>
        </ul>
      </aside>
      <main className="main-content">
        <header className="topbar glass-panel" style={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}>
          <button className="btn-connect">Connect Wallet</button>
        </header>
        <div className="dashboard">
          <h1>Your Dashboard</h1>
          <p>Manage your active streaming finance contracts across the Stellar network.</p>
          
          <div className="grid-layout">
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Active Streams</h2>
              
              <div className="stream-card glass-panel">
                <div className="stream-header">
                  <span className="stream-title">Dev Salary</span>
                  <span className="stream-amount">500 USDC / mo</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Streaming to: G_ALICE...</div>
              </div>

              <div className="stream-card glass-panel">
                <div className="stream-header">
                  <span className="stream-title">Marketing Fund</span>
                  <span className="stream-amount">1,000 XLM / mo</span>
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Streaming to: G_BOB...</div>
              </div>
            </div>
            
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <h2 style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>Analytics</h2>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent)' }}>
                ,450
              </div>
              <p style={{ color: 'var(--text-secondary)' }}>Total Value Streamed</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
