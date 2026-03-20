export default function RecommendAnim() {
  const historyItems = ['👟', '🎧', '📱', '💻']
  const candidateItems = ['⌚', '🖱️', '🎮', '📷', '🎧', '💡']
  const recommendedIdx = 4 // 🎧 — because user already bought it, similar items

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @keyframes pulseRec {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245,197,24,0.5); transform: scale(1); }
          50% { box-shadow: 0 0 0 8px rgba(245,197,24,0); transform: scale(1.08); }
        }
        @keyframes flowArrow {
          0%, 100% { transform: translateX(0); opacity: 0.7; }
          50% { transform: translateX(6px); opacity: 1; }
        }
        @keyframes slideInItem {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes glowGold {
          0%, 100% { filter: drop-shadow(0 0 4px #f5c51888); }
          50% { filter: drop-shadow(0 0 14px #f5c518cc); }
        }
        @keyframes countUp {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes floatRec {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <svg viewBox="0 0 420 230" style={{ width: '100%', animation: 'floatRec 4s ease-in-out infinite' }}>
        <defs>
          <filter id="glowRec">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="arrowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c5cfc" />
            <stop offset="100%" stopColor="#f5c518" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="210" y="18" textAnchor="middle" fontSize="10" fill="#8ba3c7" fontFamily="Inter" fontWeight="600">
          1.4M+ Orders → 500K+ Customers → Real-Time Predictions
        </text>

        {/* USER section */}
        <rect x="10" y="28" width="110" height="190" rx="10"
          fill="rgba(13,31,60,0.85)" stroke="rgba(79,142,247,0.3)" strokeWidth="1" />
        <text x="65" y="46" textAnchor="middle" fontSize="9" fill="#4f8ef7" fontFamily="Inter" fontWeight="700">User History</text>

        {historyItems.map((emoji, i) => (
          <g key={i} style={{ animation: `slideInItem 0.4s ${0.2 + i * 0.1}s both` }}>
            <rect x="20" y={54 + i * 40} width="90" height="32" rx="7"
              fill="rgba(79,142,247,0.1)" stroke="rgba(79,142,247,0.25)" strokeWidth="1" />
            <text x="43" y={74 + i * 40} fontSize="16">{emoji}</text>
            <rect x="62" y={60 + i * 40} width="40" height="5" rx="3" fill="rgba(79,142,247,0.2)" />
            <rect x="62" y={68 + i * 40} width="28" height="4" rx="2" fill="rgba(79,142,247,0.12)" />
          </g>
        ))}

        {/* SASRec + CatBoost engine in the middle */}
        <g style={{ animation: 'flowArrow 1.8s ease-in-out infinite' }}>
          <rect x="130" y="60" width="90" height="110" rx="10"
            fill="rgba(13,31,60,0.9)" stroke="rgba(124,92,252,0.4)" strokeWidth="1.5" />
          <text x="175" y="85" textAnchor="middle" fontSize="8" fill="#7c5cfc" fontFamily="Inter" fontWeight="700">SASRec</text>
          <text x="175" y="97" textAnchor="middle" fontSize="7" fill="#4a6fa5" fontFamily="Inter">Transformer</text>

          {/* Mini transformer diagram */}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={143} y={104 + i * 14} width={64} height={10} rx={3}
              fill={`rgba(124,92,252,${0.1 + i * 0.08})`} stroke="rgba(124,92,252,0.3)" strokeWidth="0.8" />
          ))}

          <line x1="175" y1="148" x2="175" y2="158" stroke="rgba(124,92,252,0.5)" strokeWidth="1" strokeDasharray="3,2" />

          <text x="175" y="142" textAnchor="middle" fontSize="7.5" fill="#4a6fa5" fontFamily="Inter">↕</text>
          <text x="175" y="166" textAnchor="middle" fontSize="8" fill="#f5c518" fontFamily="Inter" fontWeight="700">CatBoost</text>
          <text x="175" y="178" textAnchor="middle" fontSize="7" fill="#4a6fa5" fontFamily="Inter">YetiRank · 300 iters</text>
        </g>

        {/* Arrows left → center, center → right */}
        {[0, 1].map((idx) => (
          <g key={idx}>
            <path d={idx === 0 ? 'M 120 115 L 130 115' : 'M 220 115 L 232 115'}
              stroke="url(#arrowGrad)" strokeWidth="2" markerEnd={`url(#arrow${idx})`} />
          </g>
        ))}
        <defs>
          {[0, 1].map((i) => (
            <marker key={i} id={`arrow${i}`} markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={i === 0 ? '#7c5cfc' : '#f5c518'} />
            </marker>
          ))}
        </defs>

        {/* Recommendations panel */}
        <rect x="233" y="28" width="177" height="190" rx="10"
          fill="rgba(13,31,60,0.85)" stroke="rgba(245,197,24,0.3)" strokeWidth="1" />
        <text x="322" y="46" textAnchor="middle" fontSize="9" fill="#f5c518" fontFamily="Inter" fontWeight="700">Recommendations</text>

        {candidateItems.map((emoji, i) => {
          const isRec = i === recommendedIdx
          const col = i % 2
          const row = Math.floor(i / 2)
          const x = 242 + col * 85
          const y = 54 + row * 58
          return (
            <g key={i}>
              <rect x={x} y={y} width={76} height={50} rx="8"
                fill={isRec ? 'rgba(245,197,24,0.15)' : 'rgba(79,142,247,0.06)'}
                stroke={isRec ? 'rgba(245,197,24,0.7)' : 'rgba(79,142,247,0.15)'}
                strokeWidth={isRec ? 1.5 : 0.8}
                filter={isRec ? 'url(#glowRec)' : 'none'}
                style={isRec ? { animation: 'glowGold 1.8s ease-in-out infinite' } : {}}
              />
              <text x={x + 22} y={y + 28} fontSize="18">{emoji}</text>
              {isRec && (
                <>
                  <rect x={x + 3} y={y + 38} width={70} height={9} rx="4"
                    fill="rgba(245,197,24,0.3)" />
                  <text x={x + 38} y={y + 46} textAnchor="middle" fontSize="7" fill="#f5c518" fontFamily="Inter" fontWeight="700">
                    TOP PICK ✓
                  </text>
                </>
              )}
              {!isRec && (
                <>
                  <rect x={x + 3} y={y + 38} width={50} height="4" rx="2" fill="rgba(79,142,247,0.15)" />
                </>
              )}
            </g>
          )
        })}

        {/* Recall badge */}
        <rect x="248" y="198" width="148" height="16" rx="6"
          fill="rgba(245,197,24,0.1)" stroke="rgba(245,197,24,0.4)" strokeWidth="1" />
        <text x="322" y="209" textAnchor="middle" fontSize="8.5" fill="#f5c518" fontFamily="Inter" fontWeight="700">
          recall@3 ≈ 0.36  ·  150-item pool
        </text>
      </svg>
    </div>
  )
}
