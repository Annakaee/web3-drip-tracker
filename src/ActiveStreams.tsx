import React from 'react';

export const ActiveStreams = () => {
  return (
    <div style={{ padding: '1.5rem', background: '#f8f9fa', borderRadius: '8px' }}>
      <h2>Active Streams</h2>
      <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
        <li style={{ padding: '1rem', background: 'white', marginBottom: '0.5rem', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <strong>Dev Salary</strong>
          <div style={{ color: '#666', fontSize: '0.9rem' }}>500 USDC / month</div>
        </li>
        <li style={{ padding: '1rem', background: 'white', marginBottom: '0.5rem', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
          <strong>Marketing Fund</strong>
          <div style={{ color: '#666', fontSize: '0.9rem' }}>1000 XLM / month</div>
        </li>
      </ul>
    </div>
  );
};
