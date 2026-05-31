import React from 'react';

export const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <aside style={{ width: '250px', background: '#0a0a0a', color: 'white', padding: '2rem' }}>
        <h2 style={{ color: '#00D1D1' }}>💧 DripTracker</h2>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '2rem' }}>
          <li style={{ padding: '0.5rem 0', opacity: 0.8 }}>Dashboard</li>
          <li style={{ padding: '0.5rem 0', opacity: 0.8 }}>My Streams</li>
          <li style={{ padding: '0.5rem 0', opacity: 0.8 }}>Vesting</li>
          <li style={{ padding: '0.5rem 0', opacity: 0.8 }}>Settings</li>
        </ul>
      </aside>
      <main style={{ flex: 1, background: '#ffffff' }}>
        <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{ background: '#00D1D1', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', fontWeight: 'bold' }}>Connect Wallet</button>
        </header>
        {children}
      </main>
    </div>
  );
};
