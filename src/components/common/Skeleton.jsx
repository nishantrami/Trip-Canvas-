import React from 'react';

export function Skeleton({ className = '', style = {}, variant = 'rect' }) {
  const variantClass = variant === 'circle' ? 'skeleton-circle' : variant === 'text' ? 'skeleton-text' : 'skeleton-rect';
  return <div className={`skeleton-pulse ${variantClass} ${className}`} style={style} />;
}

export function DestinationCardSkeleton() {
  return (
    <div className="card destination-skeleton-card">
      <Skeleton style={{ height: '260px', width: '100%' }} />
      <div style={{ padding: '1.25rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <Skeleton variant="text" style={{ width: '60%', height: '24px' }} />
          <Skeleton variant="text" style={{ width: '20%', height: '24px' }} />
        </div>
        <Skeleton variant="text" style={{ width: '40%', height: '16px', marginBottom: '1rem' }} />
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
          <Skeleton variant="rect" style={{ width: '80px', height: '24px', borderRadius: '12px' }} />
          <Skeleton variant="rect" style={{ width: '80px', height: '24px', borderRadius: '12px' }} />
        </div>
        <Skeleton variant="rect" style={{ width: '100%', height: '40px', borderRadius: '8px' }} />
      </div>
    </div>
  );
}

export function WeatherSkeleton() {
  return (
    <div className="card" style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <Skeleton variant="text" style={{ width: '140px', height: '28px' }} />
        <Skeleton variant="rect" style={{ width: '60px', height: '28px', borderRadius: '14px' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <Skeleton variant="circle" style={{ width: '64px', height: '64px' }} />
        <div>
          <Skeleton variant="text" style={{ width: '100px', height: '44px', marginBottom: '0.25rem' }} />
          <Skeleton variant="text" style={{ width: '120px', height: '18px' }} />
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        <Skeleton variant="rect" style={{ height: '60px', borderRadius: '8px' }} />
        <Skeleton variant="rect" style={{ height: '60px', borderRadius: '8px' }} />
        <Skeleton variant="rect" style={{ height: '60px', borderRadius: '8px' }} />
      </div>
    </div>
  );
}

export function ItinerarySkeleton() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[1, 2, 3].map((i) => (
        <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Skeleton variant="circle" style={{ width: '40px', height: '40px', flexShrink: 0 }} />
          <div style={{ flex: 1 }}>
            <Skeleton variant="text" style={{ width: '40%', height: '20px', marginBottom: '0.5rem' }} />
            <Skeleton variant="text" style={{ width: '70%', height: '16px' }} />
          </div>
          <Skeleton variant="rect" style={{ width: '80px', height: '32px', borderRadius: '6px' }} />
        </div>
      ))}
    </div>
  );
}
