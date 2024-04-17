import React from 'react';
import type { SVGProps } from 'react';

export function LineMdMenu(props: SVGProps<SVGSVGElement>) {
	return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeDasharray={24} strokeDashoffset={24} strokeLinecap="round" strokeWidth={2}>
        <path d="M5 5H19">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="24;0"></animate>
        </path>
        <path d="M5 12H19">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="24;0"></animate>
        </path>
        <path d="M5 19H19">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="24;0"></animate>
        </path>
      </g>
    </svg>
  );
}

export function LineMdMenuToCloseTransition(props: SVGProps<SVGSVGElement>) {
	return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
        <path d="M5 5L12 5L19 5">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 5L12 5L19 5;M5 5L12 12L19 5"></animate>
        </path>

        <path d="M5 12H19">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 12H19;M12 12H12"></animate>
        </path>

        <path d="M5 19L12 19L19 19">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 19L12 19L19 19;M5 19L12 12L19 19"></animate>
        </path>
      </g>
    </svg>
  );
}

export function LineMdCloseToMenuTransition(props: SVGProps<SVGSVGElement>) {
	return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>
        <path d="M5 5L12 12L19 5">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 5L12 12L19 5;M5 5L12 5L19 5"></animate>
        </path>
        <path d="M12 12H12">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M12 12H12;M5 12H19"></animate>
        </path>
        <path d="M5 19L12 12L19 19">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 19L12 12L19 19;M5 19L12 19L19 19"></animate>
        </path>
      </g>
    </svg>
  );
}

export function LineMdCloseToMenuAltTransition(props: SVGProps<SVGSVGElement>) {
	return (
    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth={2}>

        <path d="M5 5L19 19" strokeWidth={3} stroke="var(--primary-fuchsia)">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 5L19 19;M5 5L19 5"></animate>
        </path>
        <path d="M5 5L19 19">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 5L19 19;M5 5L19 5"></animate>
        </path>

        <path d="M12 12H12" opacity={0} strokeWidth={3} stroke="var(--primary-fuchsia)">
          <animate fill="freeze" attributeName="d" begin="0.2s" dur="0.2s" values="M12 12H12;M5 12H19"></animate>
          <set attributeName="opacity" begin="0.2s" to={1}></set>
        </path>
        <path d="M12 12H12" opacity={0}>
          <animate fill="freeze" attributeName="d" begin="0.2s" dur="0.2s" values="M12 12H12;M5 12H19"></animate>
          <set attributeName="opacity" begin="0.2s" to={1}></set>
        </path>

        <path d="M5 19L19 5" strokeWidth={3} stroke="var(--primary-fuchsia)">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 19L19 5;M5 19L19 19"></animate>
        </path>
        <path d="M5 19L19 5">
          <animate fill="freeze" attributeName="d" dur="0.2s" values="M5 19L19 5;M5 19L19 19"></animate>
        </path>
      </g>
    </svg>
  );
}

