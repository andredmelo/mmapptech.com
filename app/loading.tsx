//import LoadingSkeleton from './LoadingSkeleton';
import React from 'react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '4rem', alignItems: 'center', textAlign: 'left' }}>
        <img style={{ marginBottom: '2rem'}} src="/images/logo_on_black.svg" alt="MMAPP Logo" width="75%" height="75%"/>
        <h5>Loading...</h5>
      </div>
    </div>
  );
}