import React from "react";

export function TopVector({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFD166" stopOpacity="1" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g transform="translate(0,10)">
  <path d="M0 120 C150 10, 300 190, 600 60 L600 200 L0 200 Z" fill="url(#g1)" opacity="0.4" />
  <circle cx="520" cy="40" r="26" fill="#FF8A65" opacity="0.5" />
  <circle cx="480" cy="80" r="14" fill="#FFB4A2" opacity="0.38" />
  <rect x="80" y="20" width="10" height="10" rx="2" fill="#06B6D4" opacity="0.36" />
      </g>
    </svg>
  );
}

export default TopVector;
