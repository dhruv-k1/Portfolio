export default function SentimentAnim() {
  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @keyframes barGrow1 { from { width: 0 } to { width: 87.5% } }
        @keyframes barGrow2 { from { width: 0 } to { width: 81% } }
        @keyframes barGrow3 { from { width: 0 } to { width: 89.8% } }
        @keyframes wordFade {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes scanLine {
          0% { transform: translateY(0px); opacity: 1; }
          100% { transform: translateY(120px); opacity: 0; }
        }
        @keyframes floatSentiment {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <svg viewBox="0 0 320 220" style={{ width: '100%', animation: 'floatSentiment 3.5s ease-in-out infinite' }}>
        <defs>
          <clipPath id="docClip"><rect x="20" y="10" width="140" height="170" rx="8" /></clipPath>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Document card */}
        <rect x="20" y="10" width="140" height="170" rx="8"
          fill="rgba(13,31,60,0.9)" stroke="rgba(79,142,247,0.3)" strokeWidth="1" />

        {/* Doc header bar */}
        <rect x="20" y="10" width="140" height="24" rx="8" fill="rgba(79,142,247,0.15)" />
        <circle cx="35" cy="22" r="4" fill="#ff5f57" />
        <circle cx="49" cy="22" r="4" fill="#febc2e" />
        <circle cx="63" cy="22" r="4" fill="#28c840" />
        <text x="90" y="26" textAnchor="middle" fontSize="8" fill="#4a6fa5" fontFamily="Inter">50K IMDB Reviews</text>

        {/* Text lines with highlighted words */}
        <rect x="32" y="44" width="55" height="7" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="91" y="44" width="30" height="7" rx="3" fill="rgba(79,200,100,0.35)" style={{ animation: 'wordFade 2s 0.2s infinite' }} />
        <rect x="125" y="44" width="25" height="7" rx="3" fill="rgba(255,255,255,0.08)" />

        <rect x="32" y="58" width="40" height="7" rx="3" fill="rgba(255,80,80,0.35)" style={{ animation: 'wordFade 2s 0.6s infinite' }} />
        <rect x="76" y="58" width="55" height="7" rx="3" fill="rgba(255,255,255,0.08)" />

        <rect x="32" y="72" width="65" height="7" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="101" y="72" width="35" height="7" rx="3" fill="rgba(79,200,100,0.35)" style={{ animation: 'wordFade 2s 1s infinite' }} />

        <rect x="32" y="86" width="30" height="7" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="66" y="86" width="50" height="7" rx="3" fill="rgba(255,80,80,0.35)" style={{ animation: 'wordFade 2s 0.4s infinite' }} />
        <rect x="120" y="86" width="25" height="7" rx="3" fill="rgba(255,255,255,0.08)" />

        <rect x="32" y="100" width="80" height="7" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="32" y="114" width="60" height="7" rx="3" fill="rgba(79,142,247,0.35)" style={{ animation: 'wordFade 2s 0.8s infinite' }} />
        <rect x="96" y="114" width="40" height="7" rx="3" fill="rgba(255,255,255,0.08)" />

        {/* Scanning line */}
        <rect x="20" y="44" width="140" height="2" fill="rgba(0,212,255,0.4)" clipPath="url(#docClip)">
          <animateTransform attributeName="transform" type="translate" values="0,0;0,135" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.8;0" keyTimes="0;0.9;1" dur="3s" repeatCount="indefinite" />
        </rect>

        {/* Legend */}
        <rect x="32" y="136" width="8" height="8" rx="2" fill="rgba(79,200,100,0.6)" />
        <text x="44" y="143" fontSize="7.5" fill="#8ba3c7" fontFamily="Inter">Positive</text>
        <rect x="85" y="136" width="8" height="8" rx="2" fill="rgba(255,80,80,0.6)" />
        <text x="97" y="143" fontSize="7.5" fill="#8ba3c7" fontFamily="Inter">Negative</text>

        {/* Accuracy bars panel */}
        <rect x="172" y="10" width="130" height="170" rx="8"
          fill="rgba(13,31,60,0.9)" stroke="rgba(124,92,252,0.3)" strokeWidth="1" />
        <text x="237" y="30" textAnchor="middle" fontSize="9" fill="#8ba3c7" fontFamily="Inter" fontWeight="600">Model Accuracy</text>

        {/* LR bar */}
        <text x="184" y="56" fontSize="8" fill="#4a6fa5" fontFamily="Inter">Logistic Reg.</text>
        <rect x="184" y="60" width="106" height="10" rx="5" fill="rgba(79,142,247,0.1)" />
        <rect x="184" y="60" width="0" height="10" rx="5" fill="#4f8ef7"
          style={{ animation: 'barGrow1 1.5s 0.5s ease-out forwards' }} />
        <text x="294" y="69" fontSize="8" fill="#4f8ef7" fontFamily="Inter" fontWeight="700">87.5%</text>

        {/* NB bar */}
        <text x="184" y="92" fontSize="8" fill="#4a6fa5" fontFamily="Inter">Naïve Bayes</text>
        <rect x="184" y="96" width="106" height="10" rx="5" fill="rgba(124,92,252,0.1)" />
        <rect x="184" y="96" width="0" height="10" rx="5" fill="#7c5cfc"
          style={{ animation: 'barGrow2 1.5s 0.8s ease-out forwards' }} />
        <text x="293" y="105" fontSize="8" fill="#7c5cfc" fontFamily="Inter" fontWeight="700">81%</text>

        {/* RF bar - winner */}
        <text x="184" y="128" fontSize="8" fill="#4a6fa5" fontFamily="Inter">Random Forest</text>
        <rect x="184" y="132" width="106" height="10" rx="5" fill="rgba(0,212,255,0.1)" />
        <rect x="184" y="132" width="0" height="10" rx="5" fill="url(#rfGrad)"
          style={{ animation: 'barGrow3 1.5s 1.1s ease-out forwards' }} />
        <defs>
          <linearGradient id="rfGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f8ef7" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
        </defs>
        <text x="294" y="141" fontSize="8" fill="#00d4ff" fontFamily="Inter" fontWeight="700">89.8%</text>

        {/* Winner badge */}
        <rect x="184" y="155" width="106" height="18" rx="6"
          fill="rgba(0,212,255,0.12)" stroke="rgba(0,212,255,0.35)" strokeWidth="1" />
        <text x="237" y="167" textAnchor="middle" fontSize="8.5" fill="#00d4ff" fontFamily="Inter" fontWeight="700">
          🏆 Best: Random Forest
        </text>
      </svg>
    </div>
  )
}
