export default function RAGColorful() {
  return (
    <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
      <style>{`
        @keyframes chatAppear {
          0%,100%{opacity:0;transform:translateX(-6px)}
          20%,80%{opacity:1;transform:translateX(0)}
        }
        @keyframes flowDot {
          0%{offset-distance:0%;opacity:0}
          10%{opacity:1}
          90%{opacity:1}
          100%{offset-distance:100%;opacity:0}
        }
      `}</style>
      <svg viewBox="0 0 480 240" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="240" fill="#f0fdff" />

        {/* Header */}
        <rect width="480" height="36" fill="#0c4a6e" />
        <text x="16" y="23" fontSize="13" fontWeight="700" fill="#e0f2fe" fontFamily="Inter, sans-serif">🏏 LeagueLens — Real-Time Cricket RAG Q&A System</text>
        <rect x="380" y="8" width="88" height="20" rx="5" fill="#0ea5e920" stroke="#38bdf8" strokeWidth="1" />
        <text x="424" y="22" textAnchor="middle" fontSize="8.5" fill="#38bdf8" fontFamily="Inter" fontWeight="700">IIT Roorkee '25</text>

        {/* ─── ROW 1: Input Node ─── */}
        <rect x="14" y="48" width="80" height="54" rx="8" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
        <text x="54" y="66" textAnchor="middle" fontSize="18">🎙️</text>
        <text x="54" y="81" textAnchor="middle" fontSize="8.5" fill="#7c3aed" fontFamily="Inter" fontWeight="700">User Input</text>
        <text x="54" y="93" textAnchor="middle" fontSize="7.5" fill="#94a3b8" fontFamily="Inter">Text / Voice</text>

        {/* Arrow → */}
        <line x1="94" y1="75" x2="114" y2="75" stroke="#64748b" strokeWidth="2" markerEnd="url(#a1)" />
        <defs>
          {['a1','a2','a3','a4','a5'].map((id, i) => (
            <marker key={id} id={id} markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill={['#64748b','#0891b2','#7c3aed','#0891b2','#ea580c'][i]} />
            </marker>
          ))}
        </defs>

        {/* ─── LangGraph Router ─── */}
        <rect x="116" y="44" width="100" height="62" rx="8" fill="#ffffff" stroke="#0891b2" strokeWidth="2" />
        <rect x="116" y="44" width="100" height="20" rx="8" fill="#0891b2" />
        <rect x="116" y="53" width="100" height="11" fill="#0891b2" />
        <text x="166" y="58" textAnchor="middle" fontSize="9" fill="#ffffff" fontFamily="Inter" fontWeight="700">LangGraph Router</text>
        {['Whisper STT', 'PostgreSQL', 'Pathway RAG', 'Tavily Web', 'Live JSON'].map((r, i) => (
          <g key={i}>
            <circle cx="128" cy={70 + i * 7.5} r="2.5" fill={['#a78bfa','#34d399','#60a5fa','#fb923c','#f472b6'][i]} />
            <text x="134" y={73 + i * 7.5} fontSize="7.5" fill="#475569" fontFamily="Inter">{r}</text>
          </g>
        ))}

        {/* Arrow → GPT-4o */}
        <line x1="216" y1="75" x2="236" y2="75" stroke="#0891b2" strokeWidth="2" markerEnd="url(#a2)" />

        {/* ─── GPT-4o ─── */}
        <rect x="238" y="44" width="90" height="62" rx="8" fill="#ffffff" stroke="#7c3aed" strokeWidth="2" />
        <rect x="238" y="44" width="90" height="20" rx="8" fill="#7c3aed" />
        <rect x="238" y="53" width="90" height="11" fill="#7c3aed" />
        <text x="283" y="58" textAnchor="middle" fontSize="9" fill="#ffffff" fontFamily="Inter" fontWeight="700">GPT-4o</text>
        <text x="283" y="75" textAnchor="middle" fontSize="8" fill="#7c3aed" fontFamily="Inter" fontWeight="600">Query Classify</text>
        <text x="283" y="86" textAnchor="middle" fontSize="8" fill="#7c3aed" fontFamily="Inter">Fusion + Halluc.</text>
        <rect x="246" y="94" width="74" height="10" rx="4" fill="#f5f3ff" stroke="#c4b5fd" strokeWidth="1" />
        <text x="283" y="102" textAnchor="middle" fontSize="7.5" fill="#6d28d9" fontFamily="Inter" fontWeight="700">&gt;90% accuracy</text>

        {/* Arrow → Response */}
        <line x1="328" y1="75" x2="348" y2="75" stroke="#7c3aed" strokeWidth="2" markerEnd="url(#a3)" />

        {/* ─── Response (ElevenLabs TTS) ─── */}
        <rect x="350" y="44" width="116" height="62" rx="8" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
        <rect x="350" y="44" width="116" height="20" rx="8" fill="#ea580c" />
        <rect x="350" y="53" width="116" height="11" fill="#ea580c" />
        <text x="408" y="58" textAnchor="middle" fontSize="9" fill="#ffffff" fontFamily="Inter" fontWeight="700">ElevenLabs TTS</text>

        {/* Animated chat bubbles */}
        <rect x="358" y="68" width="100" height="16" rx="8"
          fill="#fff7ed" stroke="#fdba74" strokeWidth="1"
          style={{ animation: 'chatAppear 4s 0.5s infinite' }} />
        <text x="360" y="79" fontSize="8" fill="#9a3412" fontFamily="Inter">🏏 "Kohli scored 82 runs"</text>

        <rect x="358" y="87" width="100" height="16" rx="8"
          fill="#ecfdf5" stroke="#6ee7b7" strokeWidth="1"
          style={{ animation: 'chatAppear 4s 2.5s infinite' }} />
        <text x="360" y="98" fontSize="8" fill="#065f46" fontFamily="Inter">📊 "IND vs AUS: 245/4"</text>

        {/* ─── BOTTOM ROW: Knowledge sources ─── */}
        <text x="240" y="126" textAnchor="middle" fontSize="8.5" fill="#64748b" fontFamily="Inter" fontWeight="600">Knowledge Sources ↕</text>

        {[
          { x: 14, label: 'Whisper', sub: 'STT', color: '#a78bfa', bg: '#f5f3ff', icon: '🎤' },
          { x: 102, label: 'PostgreSQL', sub: 'Match DB', color: '#34d399', bg: '#ecfdf5', icon: '🗄️' },
          { x: 190, label: 'Pathway', sub: 'Vector Store', color: '#60a5fa', bg: '#eff6ff', icon: '📚' },
          { x: 278, label: 'Tavily', sub: 'Web Search', color: '#fb923c', bg: '#fff7ed', icon: '🌐' },
          { x: 366, label: 'Live JSON', sub: 'Match Data', color: '#f472b6', bg: '#fdf2f8', icon: '📡' },
        ].map((s, i) => (
          <g key={i}>
            <rect x={s.x} y="134" width="82" height="48" rx="8" fill={s.bg} stroke={s.color} strokeWidth="1.5" />
            <text x={s.x + 14} y="155" fontSize="16">{s.icon}</text>
            <text x={s.x + 32} y="153" fontSize="8.5" fill={s.color} fontFamily="Inter" fontWeight="700">{s.label}</text>
            <text x={s.x + 32} y="163" fontSize="7.5" fill="#94a3b8" fontFamily="Inter">{s.sub}</text>
            {/* connector to LangGraph */}
            <line x1={s.x + 41} y1="134" x2={s.x + 41} y2="106" stroke={s.color} strokeWidth="1" strokeDasharray="3,2" opacity="0.6" />
          </g>
        ))}

        {/* Self-learning loop arrow */}
        <path d="M 466 106 Q 473 190 408 188 Q 200 188 54 188 Q 14 188 14 145"
          fill="none" stroke="#eab308" strokeWidth="1.5" strokeDasharray="5,3" opacity="0.7" />
        <text x="240" y="200" textAnchor="middle" fontSize="8" fill="#92400e" fontFamily="Inter" fontWeight="600">
          Self-learning loop · 100+ factual Q&amp;A pairs/day
        </text>

        {/* Footer stats */}
        <rect x="0" y="208" width="480" height="32" fill="#0c4a6e" />
        <text x="30" y="228" fontSize="9" fill="#7dd3fc" fontFamily="Inter">LangGraph</text>
        <text x="108" y="228" fontSize="9" fill="#7dd3fc" fontFamily="Inter">·</text>
        <text x="118" y="228" fontSize="9" fill="#7dd3fc" fontFamily="Inter">GPT-4o</text>
        <text x="168" y="228" fontSize="9" fill="#7dd3fc" fontFamily="Inter">·</text>
        <text x="178" y="228" fontSize="9" fill="#7dd3fc" fontFamily="Inter">Pathway RAG</text>
        <text x="264" y="228" fontSize="9" fill="#7dd3fc" fontFamily="Inter">·</text>
        <text x="274" y="228" fontSize="9" fill="#7dd3fc" fontFamily="Inter">ElevenLabs TTS</text>
        <text x="380" y="228" fontSize="9" fill="#38bdf8" fontFamily="Inter" fontWeight="700">Gen. Champ. Tech'25</text>
      </svg>
    </div>
  )
}
