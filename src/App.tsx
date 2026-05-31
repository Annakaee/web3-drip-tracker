import React from 'react';
import { DashboardLayout } from './DashboardLayout';
import { ActiveStreams } from './ActiveStreams';

export default function App() {
  return (
    <DashboardLayout>
      <div style={{ padding: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#1a1a1a' }}>Your Drips Dashboard</h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>Manage your active streaming finance contracts across the Stellar network.</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <ActiveStreams />
          <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
            <h2>Analytics</h2>
            <p>Total Value Streamed: ,450.00</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
