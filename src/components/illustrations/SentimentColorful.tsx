export default function SentimentColorful() {
  return (
    <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
      <style>{`
        @keyframes fillBar1 { from{width:0} to{width:87.5%} }
        @keyframes fillBar2 { from{width:0} to{width:81%} }
        @keyframes fillBar3 { from{width:0} to{width:89.8%} }
        @keyframes scan { 0%{top:52px;opacity:1} 100%{top:180px;opacity:0} }
      `}</style>
      <svg viewBox="0 0 480 240" style={{ width: '100%', display: 'block' }}>
        {/* White card background */}
        <rect width="480" height="240" fill="#ffffff" />

        {/* Header bar */}
        <rect width="480" height="36" fill="#1e3a8a" />
        <text x="16" y="23" fontSize="13" fontWeight="700" fill="#ffffff" fontFamily="Inter, sans-serif">🎬 IMDB Sentiment Analysis</text>
        <text x="420" y="23" fontSize="10" fill="#93c5fd" fontFamily="Inter, sans-serif">50K reviews</text>

        {/* LEFT: Document mockup */}
        <rect x="14" y="46" width="192" height="152" rx="8" fill="#f8faff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="22" y="62" fontSize="9" fill="#64748b" fontFamily="Inter, sans-serif" fontWeight="600">REVIEW SAMPLE</text>

        {/* Text lines with highlights */}
        <text x="22" y="80" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif">
          <tspan>"This film is </tspan>
        </text>
        <rect x="89" y="71" width="42" height="12" rx="3" fill="#bbf7d0" opacity="0.9" />
        <text x="91" y="80" fontSize="9.5" fill="#15803d" fontFamily="Inter, sans-serif" fontWeight="600">brilliant</text>
        <text x="133" y="80" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif"> and</text>

        <text x="22" y="95" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif">
          <tspan>absolutely </tspan>
        </text>
        <rect x="22" y="86" width="56" height="12" rx="3" fill="#bbf7d0" opacity="0.9" />
        <text x="24" y="95" fontSize="9.5" fill="#15803d" fontFamily="Inter, sans-serif" fontWeight="600">stunning</text>
        <text x="80" y="95" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif">— the acting</text>

        <text x="22" y="110" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif">was </text>
        <rect x="44" y="101" width="64" height="12" rx="3" fill="#bbf7d0" opacity="0.9" />
        <text x="46" y="110" fontSize="9.5" fill="#15803d" fontFamily="Inter, sans-serif" fontWeight="600">exceptional</text>
        <text x="110" y="110" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif">. The</text>

        <text x="22" y="125" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif">plot was </text>
        <rect x="63" y="116" width="46" height="12" rx="3" fill="#fecaca" opacity="0.9" />
        <text x="65" y="125" fontSize="9.5" fill="#dc2626" fontFamily="Inter, sans-serif" fontWeight="600">confusing</text>
        <text x="111" y="125" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif"> and</text>

        <text x="22" y="140" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif">the ending was </text>
        <rect x="106" y="131" width="54" height="12" rx="3" fill="#fecaca" opacity="0.9" />
        <text x="108" y="140" fontSize="9.5" fill="#dc2626" fontFamily="Inter, sans-serif" fontWeight="600">terrible</text>
        <text x="162" y="140" fontSize="9.5" fill="#1e293b" fontFamily="Inter, sans-serif">."</text>

        {/* Legend */}
        <rect x="22" y="158" width="10" height="10" rx="3" fill="#bbf7d0" stroke="#16a34a" strokeWidth="1" />
        <text x="36" y="167" fontSize="8.5" fill="#64748b" fontFamily="Inter, sans-serif">Positive</text>
        <rect x="90" y="158" width="10" height="10" rx="3" fill="#fecaca" stroke="#dc2626" strokeWidth="1" />
        <text x="104" y="167" fontSize="8.5" fill="#64748b" fontFamily="Inter, sans-serif">Negative</text>

        {/* VADER label */}
        <rect x="22" y="176" width="120" height="16" rx="4" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
        <text x="28" y="188" fontSize="8" fill="#1d4ed8" fontFamily="Inter, sans-serif" fontWeight="600">VADER → TF-IDF → Model</text>

        {/* RIGHT: Accuracy comparison chart */}
        <rect x="218" y="46" width="248" height="152" rx="8" fill="#f8faff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="228" y="64" fontSize="10" fill="#1e293b" fontFamily="Inter, sans-serif" fontWeight="700">Model Accuracy Comparison</text>

        {/* Logistic Regression */}
        <text x="228" y="88" fontSize="9" fill="#64748b" fontFamily="Inter, sans-serif">Logistic Regression</text>
        <rect x="228" y="92" width="186" height="14" rx="7" fill="#e2e8f0" />
        <rect x="228" y="92" width="0" height="14" rx="7" fill="#3b82f6"
          style={{ animation: 'fillBar1 1.2s 0.3s ease-out forwards' }} />
        <text x="420" y="103" fontSize="9.5" fill="#3b82f6" fontFamily="Inter, sans-serif" fontWeight="700">87.5%</text>

        {/* Naïve Bayes */}
        <text x="228" y="122" fontSize="9" fill="#64748b" fontFamily="Inter, sans-serif">Naïve Bayes</text>
        <rect x="228" y="126" width="186" height="14" rx="7" fill="#e2e8f0" />
        <rect x="228" y="126" width="0" height="14" rx="7" fill="#10b981"
          style={{ animation: 'fillBar2 1.2s 0.5s ease-out forwards' }} />
        <text x="420" y="137" fontSize="9.5" fill="#10b981" fontFamily="Inter, sans-serif" fontWeight="700">81.0%</text>

        {/* Random Forest — WINNER */}
        <text x="228" y="156" fontSize="9" fill="#64748b" fontFamily="Inter, sans-serif">Random Forest</text>
        <rect x="228" y="160" width="186" height="14" rx="7" fill="#e2e8f0" />
        <rect x="228" y="160" width="0" height="14" rx="7" fill="#f59e0b"
          style={{ animation: 'fillBar3 1.2s 0.7s ease-out forwards' }} />
        <text x="418" y="171" fontSize="9.5" fill="#f59e0b" fontFamily="Inter, sans-serif" fontWeight="700">89.8%</text>
        <text x="227" y="171" fontSize="9.5" fill="#f59e0b" fontFamily="Inter, sans-serif">⭐</text>

        {/* Bottom footer */}
        <rect x="0" y="204" width="480" height="36" fill="#f1f5f9" />
        <rect x="14" y="212" width="140" height="20" rx="6" fill="#fef9c3" stroke="#fde047" strokeWidth="1" />
        <text x="22" y="225" fontSize="9.5" fill="#854d0e" fontFamily="Inter, sans-serif" fontWeight="700">⭐ Best: Random Forest — 89.8%</text>
        <text x="330" y="222" fontSize="8.5" fill="#94a3b8" fontFamily="Inter, sans-serif">Python · Scikit-learn · VADER · TF-IDF</text>
      </svg>
    </div>
  )
}
