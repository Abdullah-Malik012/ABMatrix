// BlockchainIcon.jsx
import * as React from "react";

function BlockchainIcon(props) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Robot Head */}
    <circle cx="12" cy="12" r="10" />
    {/* Eyes */}
    <circle cx="8" cy="10" r="1" />
    <circle cx="16" cy="10" r="1" />
    {/* Mouth */}
    <path d="M8 16h8M9 13h6" />
  </svg>
  );
}

export default BlockchainIcon;
