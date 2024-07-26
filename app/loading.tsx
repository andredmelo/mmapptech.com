import React from 'react';

export default function Loading() {
  return (
    <div id="loadingBanner" className="absolute top-0 left-0 flex flex-col items-center justify-center w-screen h-screen bg-[var(--background-grey)]">
      <div className="flex flex-col items-center mb-16 text-left">
        <picture className="mb-6 w-[25vw]">
          <img src="/images/logos/mmapp/logo_on_black.svg" alt="MMAPP Logo"/>
        </picture>
        <h5 className="text-white mb-6 animate-pulse">Loading</h5>
        <div className="flex-col gap-4 w-full flex items-center justify-center">
          <div className="flex items-center justify-center">
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg" width="48" height="48"
              viewBox="0 0 48 48" fill="none"
            >
              <circle cx="24" cy="24" r="22.5" stroke="#800080" strokeWidth="3" strokeDasharray="15 15" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
