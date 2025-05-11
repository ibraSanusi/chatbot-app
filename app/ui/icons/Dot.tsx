import React from "react";

export default function Dot({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="59"
      height="52"
      viewBox="0 0 59 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1_1_895" fill="white">
        <path d="M9 26C9 12.1929 20.1929 1 34 1C47.8071 1 59 12.1929 59 26C59 39.8071 47.8071 51 34 51C20.1929 51 9 39.8071 9 26Z" />
      </mask>
      <path
        d="M9 1H59H9ZM59 51H9H59ZM32.5 51C18.6929 51 7.5 39.8071 7.5 26C7.5 12.1929 18.6929 1 32.5 1H34C21.0213 1 10.5 12.1929 10.5 26C10.5 39.8071 21.0213 51 34 51H32.5ZM59 1V51V1Z"
        fill="url(#paint0_linear_1_895)"
        mask="url(#path-1-inside-1_1_895)"
      />
      <g filter="url(#filter0_f_1_895)">
        <circle cx="26" cy="26" r="6" fill="url(#paint1_radial_1_895)" />
        <circle cx="26" cy="26" r="6" fill="url(#paint2_radial_1_895)" />
      </g>
      <g filter="url(#filter1_ii_1_895)">
        <circle cx="27" cy="26" r="7" fill="url(#paint3_radial_1_895)" />
        <circle cx="27" cy="26" r="7" fill="url(#paint4_radial_1_895)" />
      </g>
      <defs>
        <filter
          id="filter0_f_1_895"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="10"
            result="effect1_foregroundBlur_1_895"
          />
        </filter>
        <filter
          id="filter1_ii_1_895"
          x="20"
          y="17"
          width="14"
          height="18"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.014184 0 0 0 0 0.0185896 0 0 0 0 0.0791667 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1_895"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="1.5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.014184 0 0 0 0 0.0185896 0 0 0 0 0.0791667 0 0 0 0.18 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_1_895"
            result="effect2_innerShadow_1_895"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_895"
          x1="9"
          y1="23"
          x2="15"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#5661F6" />
          <stop offset="1" stop-color="#5661F6" stop-opacity="0" />
        </linearGradient>
        <radialGradient
          id="paint1_radial_1_895"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.5 23.75) rotate(52.125) scale(8.55132)"
        >
          <stop stop-color="#858DFF" />
          <stop offset="1" stop-color="#5661F6" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1_895"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(24.5 23.75) rotate(52.125) scale(8.55132)"
        >
          <stop stop-color="#858DFF" />
          <stop offset="1" stop-color="#5661F6" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_1_895"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.25 23.375) rotate(52.125) scale(9.97654)"
        >
          <stop stop-color="#858DFF" />
          <stop offset="1" stop-color="#5661F6" />
        </radialGradient>
        <radialGradient
          id="paint4_radial_1_895"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(25.25 23.375) rotate(52.125) scale(9.97654)"
        >
          <stop stop-color="#858DFF" />
          <stop offset="1" stop-color="#5661F6" />
        </radialGradient>
      </defs>
    </svg>
  );
}
