//import LoadingSkeleton from './LoadingSkeleton';
import React from 'react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div><img src="/images/logo_on_black.svg" alt="MMAPP Logo" width="75%" height="75%" /></div>
      <div><h4>Loading...</h4></div>
    </div>
  );
}