//import LoadingSkeleton from './LoadingSkeleton';
import React from 'react';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div id="loadingBanner" className="fixed top-0 left-0 flex flex-col items-center justify-center w-[100vw] h-[100vh]">
      <div className="flex flex-col items-center mb-16 text-left">
        <img className="mb-8 w-[75%] h-[75%]" src="/images/logo_on_black.svg" alt="MMAPP Logo"/>
        <h5 className="text-white animate-pulse">Loading...</h5>
      </div>
    </div>
  );
}




{/* <div id="loadingBanner" style={{ position: 'fixed', top: '0px', left: '0px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
<div style={{ display: 'flex', flexDirection: 'column', marginBottom: '4rem', alignItems: 'center', textAlign: 'left' }}>
  <img style={{ marginBottom: '2rem'}} src="/images/logo_on_black.svg" alt="MMAPP Logo" width="75%" height="75%"/>
  <h5 className="text-white animate-pulse">Loading...</h5>
</div>
</div> */}