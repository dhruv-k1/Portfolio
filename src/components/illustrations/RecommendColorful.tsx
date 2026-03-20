export default function RecommendColorful() {
  const history = ['👟', '🎧', '💻', '📱']
  const candidates = [
    { emoji: '⌚', label: 'Watch', score: 0.91, top: true },
    { emoji: '🎮', label: 'Gaming', score: 0.74, top: false },
    { emoji: '🖱️', label: 'Mouse', score: 0.68, top: false },
    { emoji: '📷', label: 'Camera', score: 0.61, top: false },
    { emoji: '💡', label: 'Gadget', score: 0.52, top: false },
    { emoji: '🔋', label: 'Battery', score: 0.38, top: false },
  ]

  return (
    <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
      <style>{`
        @keyframes highlightPulse {
          0%,100% { box-shadow: 0 0 0 0 #f59e0b44; }
          50% { box-shadow: 0 0 0 6px #f59e0b00; }
        }
        @keyframes scoreBar { from{width:0} to{width:var(--w)} }
      `}</style>
      <svg viewBox="0 0 480 240" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="240" fill="#fffbeb" />

        {/* Header */}
        <rect width="480" height="36" fill="#78350f" />
        <text x="16" y="23" fontSize="13" fontWeight="700" fill="#fef3c7" fontFamily="Inter, sans-serif">🥇 WWT Unravel 2025 — Next-Item Recommendation</text>

        {/* Gold badge */}
        <rect x="360" y="8" width="108" height="20" rx="5" fill="#fef08a" stroke="#eab308" strokeWidth="1.5" />
        <text x="414" y="22" textAnchor="middle" fontSize="9" fill="#713f12" fontFamily="Inter, sans-serif" fontWeight="700">🏆 1st Nationwide</text>

        {/* USER HISTORY column */}
        <rect x="12" y="44" width="96" height="156" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="12" y="44" width="96" height="22" rx="8" fill="#dbeafe" />
        <rect x="12" y="55" width="96" height="11" fill="#dbeafe" />
        <text x="60" y="59" textAnchor="middle" fontSize="9" fill="#1d4ed8" fontFamily="Inter" fontWeight="700">User History</text>
        {history.map((e, i) => (
          <g key={i}>
            <rect x="20" y={72 + i * 31} width="80" height="26" rx="6"
              fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
            <text x="42" y={89 + i * 31} fontSize="15">{e}</text>
            <rect x="58" y={78 + i * 31} width="34" height="5" rx="3" fill="#bfdbfe" />
            <rect x="58" y={86 + i * 31} width="22" height="4" rx="2" fill="#dbeafe" />
          </g>
        ))}

        {/* PIPELINE arrows */}
        {/* SASRec box */}
        <rect x="120" y="60" width="88" height="56" rx="8" fill="#7c3aed" />
        <text x="164" y="83" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="Inter" fontWeight="700">SASRec</text>
        <text x="164" y="97" textAnchor="middle" fontSize="8" fill="#c4b5fd" fontFamily="Inter">Transformer</text>
        <text x="164" y="109" textAnchor="middle" fontSize="7.5" fill="#ddd6fe" fontFamily="Inter">5 epochs</text>

        {/* CatBoost box */}
        <rect x="120" y="126" width="88" height="56" rx="8" fill="#ea580c" />
        <text x="164" y="149" textAnchor="middle" fontSize="11" fill="#ffffff" fontFamily="Inter" fontWeight="700">CatBoost</text>
        <text x="164" y="163" textAnchor="middle" fontSize="8" fill="#fdba74" fontFamily="Inter">YetiRank</text>
        <text x="164" y="175" textAnchor="middle" fontSize="7.5" fill="#fed7aa" fontFamily="Inter">300 iterations</text>

        {/* Pipeline connector */}
        <line x1="164" y1="116" x2="164" y2="126" stroke="#d1d5db" strokeWidth="2" />
        <polygon points="160,124 168,124 164,128" fill="#d1d5db" />

        {/* Arrows in and out */}
        <line x1="108" y1="88" x2="120" y2="88" stroke="#1d4ed8" strokeWidth="2.5" markerEnd="url(#arrBlue)" />
        <line x1="108" y1="154" x2="120" y2="154" stroke="#1d4ed8" strokeWidth="2.5" markerEnd="url(#arrBlue2)" />
        <defs>
          <marker id="arrBlue" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#1d4ed8" />
          </marker>
          <marker id="arrBlue2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#1d4ed8" />
          </marker>
          <marker id="arrGold" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#d97706" />
          </marker>
        </defs>
        <line x1="208" y1="120" x2="224" y2="120" stroke="#d97706" strokeWidth="2.5" markerEnd="url(#arrGold)" />

        {/* RECOMMENDATIONS panel */}
        <rect x="224" y="44" width="244" height="156" rx="8" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
        <rect x="224" y="44" width="244" height="22" rx="8" fill="#fef9c3" />
        <rect x="224" y="55" width="244" height="11" fill="#fef9c3" />
        <text x="346" y="59" textAnchor="middle" fontSize="9" fill="#713f12" fontFamily="Inter" fontWeight="700">Ranked Recommendations (150-item pool)</text>

        {candidates.map((c, i) => (
          <g key={i}>
            <rect x="232" y={72 + i * 21} width="228" height="18" rx="5"
              fill={c.top ? '#fef3c7' : '#f8faff'}
              stroke={c.top ? '#fbbf24' : '#e2e8f0'}
              strokeWidth={c.top ? 1.5 : 0.8}
            />
            {c.top && <text x="240" y={84 + i * 21} fontSize="11">⭐</text>}
            {!c.top && <text x="240" y={84 + i * 21} fontSize="11">{c.emoji}</text>}
            {c.top && <text x="255" y={84 + i * 21} fontSize="11">{c.emoji}</text>}
            <text x={c.top ? 272 : 256} y={84 + i * 21} fontSize="9" fill={c.top ? '#92400e' : '#475569'} fontFamily="Inter" fontWeight={c.top ? '700' : '400'}>{c.label}</text>
            {c.top && <rect x="310" y={76 + i * 21} width="30" height="10" rx="3" fill="#fbbf24" />}
            {c.top && <text x="325" y={84 + i * 21} textAnchor="middle" fontSize="7.5" fill="#78350f" fontFamily="Inter" fontWeight="700">TOP</text>}
            {/* Score bar */}
            <rect x="350" y={77 + i * 21} width="80" height="8" rx="4" fill="#f1f5f9" />
            <rect x="350" y={77 + i * 21} width={Math.round(c.score * 80)} height="8" rx="4"
              fill={c.top ? '#f59e0b' : '#94a3b8'} />
            <text x="436" y={84 + i * 21} fontSize="8" fill={c.top ? '#92400e' : '#94a3b8'} fontFamily="Inter" fontWeight="600">
              {(c.score * 100).toFixed(0)}%
            </text>
          </g>
        ))}

        {/* Footer */}
        <rect x="0" y="204" width="480" height="36" fill="#78350f" />
        <rect x="12" y="211" width="116" height="22" rx="6" fill="#fef9c3" stroke="#fbbf24" strokeWidth="1" />
        <text x="70" y="225" textAnchor="middle" fontSize="9" fill="#713f12" fontFamily="Inter" fontWeight="700">recall@3 ≈ 0.36</text>
        <rect x="140" y="211" width="116" height="22" rx="6" fill="#d1fae515" stroke="#34d399" strokeWidth="1" />
        <text x="198" y="225" textAnchor="middle" fontSize="9" fill="#34d399" fontFamily="Inter" fontWeight="700">1.4M+ Orders</text>
        <rect x="268" y="211" width="116" height="22" rx="6" fill="#e0e7ff15" stroke="#818cf8" strokeWidth="1" />
        <text x="326" y="225" textAnchor="middle" fontSize="9" fill="#818cf8" fontFamily="Inter" fontWeight="700">500K+ Customers</text>
        <rect x="396" y="211" width="72" height="22" rx="6" fill="#fbbf2415" stroke="#fbbf24" strokeWidth="1" />
        <text x="432" y="225" textAnchor="middle" fontSize="9" fill="#fbbf24" fontFamily="Inter" fontWeight="700">11 features</text>
      </svg>
    </div>
  )
}
