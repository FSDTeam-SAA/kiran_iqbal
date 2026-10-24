"use client";

import React from "react";

export default function HalloweenArt({ className = "" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        className="w-full max-w-[440px] sm:max-w-[480px] h-auto overflow-visible drop-shadow-[0_15px_35px_rgba(255,122,26,0.35)]"
        viewBox="0 0 480 430"
        role="img"
        aria-label="Car care kit with a bucket, spray bottles, foam cleaner, car wash shampoo and wash mitt, next to a glowing jack-o'-lantern, with a FREE badge"
      >
        <defs>
          <radialGradient id="hw-g-ray" gradientUnits="userSpaceOnUse" cx="240" cy="190" r="188">
            <stop offset="0" stopColor="#ffb347" stopOpacity=".42" />
            <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hw-g-halo" cx="50%" cy="50%" r="50%">
            <stop offset=".55" stopColor="#ffcf80" stopOpacity=".35" />
            <stop offset="1" stopColor="#ffcf80" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="hw-g-moon" cx="42%" cy="38%" r="62%">
            <stop offset="0" stopColor="#fff8e4" />
            <stop offset=".7" stopColor="#ffe2a8" />
            <stop offset="1" stopColor="#ffcc7a" />
          </radialGradient>
          <radialGradient id="hw-g-pump" cx="40%" cy="32%" r="72%">
            <stop offset="0" stopColor="#ffb860" />
            <stop offset=".55" stopColor="#ff7a1a" />
            <stop offset="1" stopColor="#c2410c" />
          </radialGradient>
          <radialGradient id="hw-g-pump-side" cx="50%" cy="32%" r="78%">
            <stop offset="0" stopColor="#ff993b" />
            <stop offset="1" stopColor="#a8380a" />
          </radialGradient>
          <linearGradient id="hw-g-bucket" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#c2410c" />
            <stop offset=".22" stopColor="#ff7a1a" />
            <stop offset=".42" stopColor="#ffa24a" />
            <stop offset=".7" stopColor="#ff7a1a" />
            <stop offset="1" stopColor="#b8400b" />
          </linearGradient>
          <linearGradient id="hw-g-bottle" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".6" stopColor="#eef0f4" />
            <stop offset="1" stopColor="#c9ced8" />
          </linearGradient>
          <linearGradient id="hw-g-can" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#3a3a44" />
            <stop offset=".4" stopColor="#26262e" />
            <stop offset="1" stopColor="#121216" />
          </linearGradient>
          <linearGradient id="hw-g-blue" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#60a5fa" />
            <stop offset=".45" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#1e40af" />
          </linearGradient>
          <clipPath id="hw-g-mitt-clip">
            <path d="M206 410C197 386 199 352 222 343C236 338 250 342 258 349C266 342 281 344 287 356C293 370 291 396 285 410Z" />
          </clipPath>
          <clipPath id="hw-g-cc">
            <path d="M0-17C5-17 13 9 13 13C13 18-13 18-13 13C-13 9-5-17 0-17Z" />
          </clipPath>
          <g id="hw-g-candy">
            <g clipPath="url(#hw-g-cc)">
              <rect x="-14" y="-18" width="28" height="12" fill="#fff8e7" />
              <rect x="-14" y="-6" width="28" height="12" fill="#ff8a1f" />
              <rect x="-14" y="6" width="28" height="14" fill="#ffd23f" />
            </g>
          </g>
          <path id="hw-g-badge-path" d="M398 78m-43 0a43 43 0 1 1 86 0a43 43 0 1 1 -86 0" />
        </defs>

        {/* burst + moon */}
        <path
          className="hw-rays origin-[240px_190px] animate-[spin_60s_linear_infinite]"
          fill="url(#hw-g-ray)"
          d="M240 190L539 164L539 216ZM240 190L530 268L512 317ZM240 190L486 362L452 402ZM240 190L412 436L367 462ZM240 190L318 480L266 489ZM240 190L214 489L162 480ZM240 190L113 462L68 436ZM240 190L28 402L-6 362ZM240 190L-32 317L-50 268ZM240 190L-59 216L-59 164ZM240 190L-50 112L-32 63ZM240 190L-6 18L28 -22ZM240 190L68 -56L113 -82ZM240 190L162 -100L214 -109ZM240 190L266 -109L318 -100ZM240 190L367 -82L412 -56ZM240 190L452 -22L486 18ZM240 190L512 63L530 112Z"
        />
        <circle cx="240" cy="150" r="148" fill="url(#hw-g-halo)" />
        <circle cx="240" cy="150" r="108" fill="url(#hw-g-moon)" />
        <g fill="#efbf78" opacity=".5">
          <circle cx="196" cy="96" r="12" />
          <circle cx="292" cy="88" r="8" />
          <circle cx="310" cy="160" r="13" />
          <circle cx="170" cy="150" r="7" />
        </g>

        {/* bats + candy corn */}
        <g className="animate-[bounce_6s_ease-in-out_infinite]">
          <g transform="translate(150 66) scale(0.5)">
            <path
              fill="#1d1029"
              d="M46 12L46 2L49.5 7L50.5 7L54 2L54 12C66 4 86 4 99 12C90 15 87 20 87 26C81 22 73 23 69 29C65 25 58 25 55 31L50 37L45 31C42 25 35 25 31 29C27 23 19 22 13 26C13 20 10 15 1 12C14 4 34 4 46 12Z"
            />
          </g>
        </g>
        <g className="animate-[pulse_4s_ease-in-out_infinite]">
          <g transform="translate(262 52) scale(0.36)">
            <path
              fill="#1d1029"
              d="M46 12L46 2L49.5 7L50.5 7L54 2L54 12C66 4 86 4 99 12C90 15 87 20 87 26C81 22 73 23 69 29C65 25 58 25 55 31L50 37L45 31C42 25 35 25 31 29C27 23 19 22 13 26C13 20 10 15 1 12C14 4 34 4 46 12Z"
            />
          </g>
        </g>
        <g className="animate-[bounce_7s_ease-in-out_infinite]">
          <g transform="translate(198 104) scale(0.26)">
            <path
              fill="#1d1029"
              d="M46 12L46 2L49.5 7L50.5 7L54 2L54 12C66 4 86 4 99 12C90 15 87 20 87 26C81 22 73 23 69 29C65 25 58 25 55 31L50 37L45 31C42 25 35 25 31 29C27 23 19 22 13 26C13 20 10 15 1 12C14 4 34 4 46 12Z"
            />
          </g>
        </g>
        <use href="#hw-g-candy" transform="translate(34 150) rotate(-18) scale(1.1)" />
        <use href="#hw-g-candy" transform="translate(452 196) rotate(22) scale(0.95)" />
        <use href="#hw-g-candy" transform="translate(40 290) rotate(12) scale(0.85)" />

        {/* sparkles */}
        <g fill="#ffd66e" className="animate-[pulse_2s_infinite]">
          <path d="M58 204l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
          <path d="M428 160l2.4 7 7 2.4-7 2.4-2.4 7-2.4-7-7-2.4 7-2.4z" />
          <path d="M112 168l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
        </g>

        <ellipse cx="240" cy="413" rx="212" ry="12" fill="#000" opacity=".42" />

        {/* bucket */}
        <path
          d="M136 162C126 68 354 68 344 162"
          fill="none"
          stroke="#2c2c34"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <path
          d="M136 162C126 68 354 68 344 162"
          fill="none"
          stroke="#8a8a96"
          strokeWidth="2"
          strokeLinecap="round"
          opacity=".55"
        />
        <path
          d="M130 158L350 158L332 392Q331 401 321 401L159 401Q149 401 148 392Z"
          fill="url(#hw-g-bucket)"
        />
        <rect x="131" y="168" width="218" height="5" fill="#000" opacity=".14" />
        <rect x="132" y="178" width="216" height="3" fill="#000" opacity=".1" />
        <ellipse cx="240" cy="146" rx="122" ry="12" fill="#2b2b33" />
        <rect x="118" y="146" width="244" height="20" rx="7" fill="#1b1b21" />
        <rect x="124" y="149" width="232" height="3" rx="1.5" fill="#fff" opacity=".18" />
        <path d="M142 210L338 210L332 312L148 312Z" fill="#1a0f07" />
        <path d="M142 210L338 210L337.5 216L142.5 216Z" fill="#ffd66e" />
        <path d="M147.7 306L332.3 306L332 312L148 312Z" fill="#ffd66e" />
        <text
          x="240"
          y="240"
          textAnchor="middle"
          fontSize="11"
          fontWeight="800"
          letterSpacing="3"
          fill="#ffb347"
        >
          FREE GIFT
        </text>
        <text
          x="240"
          y="275"
          textAnchor="middle"
          fontSize="32"
          fontWeight="900"
          fill="#fff7ef"
        >
          CAR CARE
        </text>
        <text
          x="240"
          y="300"
          textAnchor="middle"
          fontSize="22"
          fontWeight="900"
          letterSpacing="7"
          fill="#ff7a1a"
        >
          KIT
        </text>

        {/* foam can */}
        <rect x="164" y="276" width="16" height="12" rx="2" fill="#ffb347" />
        <rect x="154" y="284" width="36" height="20" rx="6" fill="#ff7a1a" />
        <rect x="150" y="300" width="44" height="110" rx="7" fill="url(#hw-g-can)" />
        <rect x="150" y="328" width="44" height="46" fill="#ffb347" />
        <path d="M150 362L194 340L194 352L150 374Z" fill="#ff7a1a" />
        <rect x="155" y="304" width="5" height="100" rx="2.5" fill="#fff" opacity=".18" />

        {/* car wash shampoo */}
        <rect x="298" y="282" width="28" height="15" rx="4" fill="#111827" />
        <rect x="303" y="295" width="18" height="24" rx="4" fill="#1e40af" />
        <rect x="288" y="316" width="48" height="94" rx="13" fill="url(#hw-g-blue)" />
        <rect x="294" y="342" width="36" height="46" rx="5" fill="#fff" />
        <circle cx="306" cy="358" r="5" fill="#93c5fd" />
        <circle cx="318" cy="366" r="7" fill="#60a5fa" />
        <circle cx="308" cy="377" r="4" fill="#bfdbfe" />
        <rect x="292" y="322" width="5" height="80" rx="2.5" fill="#fff" opacity=".3" />

        {/* spray bottles */}
        <g>
          <path
            d="M88 268C88 250 96 242 104 240L118 240C126 242 134 250 134 268Z"
            fill="url(#hw-g-bottle)"
          />
          <rect x="80" y="262" width="62" height="146" rx="14" fill="url(#hw-g-bottle)" />
          <rect x="99" y="226" width="24" height="16" rx="3" fill="#1f1f24" />
          <path d="M95 228L131 228L141 211L106 204Q94 206 95 228Z" fill="#26262c" />
          <rect x="137" y="204" width="15" height="9" rx="2" fill="#26262c" />
          <path d="M110 230Q103 248 111 258L117 256Q112 246 116 232Z" fill="#33333b" />
          <rect x="86" y="298" width="50" height="82" rx="7" fill="#ff7a1a" />
          <rect x="94" y="312" width="34" height="5" rx="2.5" fill="#fff" opacity=".9" />
          <rect x="94" y="322" width="24" height="4" rx="2.5" fill="#fff" opacity=".6" />
          <path
            d="M111 338c-6 8-9 12-9 16a9 9 0 0 0 18 0c0-4-3-8-9-16z"
            fill="#fff"
            opacity=".9"
          />
          <rect x="84" y="272" width="7" height="124" rx="3.5" fill="#fff" opacity=".5" />
        </g>
        <g transform="translate(480 0) scale(-1 1)">
          <path
            d="M88 268C88 250 96 242 104 240L118 240C126 242 134 250 134 268Z"
            fill="url(#hw-g-bottle)"
          />
          <rect x="80" y="262" width="62" height="146" rx="14" fill="url(#hw-g-bottle)" />
          <rect x="99" y="226" width="24" height="16" rx="3" fill="#1f1f24" />
          <path d="M95 228L131 228L141 211L106 204Q94 206 95 228Z" fill="#26262c" />
          <rect x="137" y="204" width="15" height="9" rx="2" fill="#26262c" />
          <path d="M110 230Q103 248 111 258L117 256Q112 246 116 232Z" fill="#33333b" />
          <rect x="86" y="298" width="50" height="82" rx="7" fill="#7c3aed" />
          <rect x="94" y="312" width="34" height="5" rx="2.5" fill="#fff" opacity=".9" />
          <rect x="94" y="322" width="24" height="4" rx="2.5" fill="#fff" opacity=".6" />
          <path
            d="M111 338c-6 8-9 12-9 16a9 9 0 0 0 18 0c0-4-3-8-9-16z"
            fill="#fff"
            opacity=".9"
          />
          <rect x="84" y="272" width="7" height="124" rx="3.5" fill="#fff" opacity=".5" />
        </g>

        {/* wash mitt */}
        <path
          d="M206 410C197 386 199 352 222 343C236 338 250 342 258 349C266 342 281 344 287 356C293 370 291 396 285 410Z"
          fill="#ff9a2e"
        />
        <rect x="202" y="398" width="88" height="17" rx="6" fill="#1f1f26" />
        <rect x="202" y="404" width="88" height="3" fill="#ff7a1a" />

        {/* jack-o'-lantern */}
        <g transform="translate(432 413) scale(.42) translate(-200 -229)">
          <ellipse cx="156" cy="180" rx="46" ry="50" fill="url(#hw-g-pump-side)" />
          <ellipse cx="244" cy="180" rx="46" ry="50" fill="url(#hw-g-pump-side)" />
          <ellipse cx="200" cy="176" rx="52" ry="55" fill="url(#hw-g-pump)" />
          <g fill="none" stroke="#a8380a" strokeWidth="3" strokeLinecap="round" opacity=".45">
            <path d="M182 127C167 152 167 204 182 229" />
            <path d="M218 127C233 152 233 204 218 229" />
            <path d="M132 140C118 162 118 200 132 222" />
            <path d="M268 140C282 162 282 200 268 222" />
          </g>
          <ellipse
            cx="184"
            cy="146"
            rx="14"
            ry="8"
            fill="#ffe0a8"
            opacity=".35"
            transform="rotate(-25 184 146)"
          />
          <path
            d="M199 124C198 112 201 103 211 97"
            fill="none"
            stroke="#5b3a1a"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M207 110c10-8 22-4 24 4"
            fill="none"
            stroke="#3f7d3a"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <g
            className="drop-shadow-[0_0_8px_#ffb020] animate-[pulse_3s_infinite]"
            fill="#ffd66e"
          >
            <path d="M160 170L186 170L173 149Z" />
            <path d="M214 170L240 170L227 149Z" />
            <path d="M194 186L206 186L200 176Z" />
            <path d="M156 194C172 224 228 224 244 194C236 200 228 201 222 198L216 208L208 201L192 201L184 208L178 198C172 201 164 200 156 194Z" />
          </g>
        </g>

        {/* FREE rotating badge */}
        <circle cx="398" cy="78" r="56" fill="#ff7a1a" />
        <circle cx="398" cy="78" r="56" fill="none" stroke="#ffd66e" strokeWidth="2.5" />
        <g className="origin-[398px_78px] animate-[spin_22s_linear_infinite]">
          <text fontSize="9.5" fontWeight="800" letterSpacing="1.5" fill="#1a0f07">
            <textPath href="#hw-g-badge-path" textLength="266" lengthAdjust="spacing">
              LIMITED TIME • HALLOWEEN TREAT •
            </textPath>
          </text>
        </g>
        <circle cx="398" cy="78" r="33" fill="#1a0f07" />
        <text
          x="398"
          y="80"
          textAnchor="middle"
          fontSize="19"
          fontWeight="900"
          fill="#ffb347"
        >
          FREE
        </text>
        <text
          x="398"
          y="94"
          textAnchor="middle"
          fontSize="7"
          fontWeight="800"
          letterSpacing="1"
          fill="#fff3e0"
        >
          ENDS OCT 31
        </text>
      </svg>
    </div>
  );
}
