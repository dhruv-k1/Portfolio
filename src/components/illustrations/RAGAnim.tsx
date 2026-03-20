export default function RAGAnim() {
  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @keyframes packetFlow {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes nodePulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; filter: drop-shadow(0 0 8px currentColor); }
        }
        @keyframes chatBubble {
          0% { transform: scale(0.8); opacity: 0; }
          20% { transform: scale(1.05); opacity: 1; }
          80% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.8); opacity: 0; }
        }
        @keyframes voiceWave {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        @keyframes floatRAG {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes dbPulse {
          0%, 100% { stroke-opacity: 0.4; }
          50% { stroke-opacity: 1; }
        }
      `}</style>

      <svg viewBox="0 0 430 220" style={{ width: '100%', animation: 'floatRAG 3.8s ease-in-out infinite' }}>
        <defs>
          <filter id="gRAG">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#4f8ef7" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4f8ef7" />
            <stop offset="100%" stopColor="#7c5cfc" />
          </linearGradient>
          <linearGradient id="flowGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c5cfc" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
        </defs>

        {/* Title */}
        <text x="215" y="16" textAnchor="middle" fontSize="9.5" fill="#8ba3c7" fontFamily="Inter" fontWeight="600">
          LangGraph Multi-Modal Cricket Q&A Pipeline
        </text>

        {/* ── Node 1: User Input (text/voice) ── */}
        <rect x="8" y="70" width="72" height="80" rx="10"
          fill="rgba(13,31,60,0.9)" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"
          style={{ animation: 'nodePulse 2s 0s infinite' }} filter="url(#gRAG)" />
        <text x="44" y="92" textAnchor="middle" fontSize="18">🎙️</text>
        <text x="44" y="110" textAnchor="middle" fontSize="8" fill="#00d4ff" fontFamily="Inter" fontWeight="700">User Input</text>
        {/* Voice wave bars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <rect key={i} x={24 + i * 9} y={118} width={6} height={4} rx={2} fill="#00d4ff" opacity="0.8"
            style={{ animation: `voiceWave ${0.4 + i * 0.1}s ${i * 0.07}s ease-in-out infinite alternate` }}
          />
        ))}
        <text x="44" y="145" textAnchor="middle" fontSize="7" fill="#4a6fa5" fontFamily="Inter">Text / Voice</text>

        {/* ── Flow 1: Input → LangGraph ── */}
        <path d="M 82 110 L 108 110" stroke="url(#flowGrad1)" strokeWidth="2" markerEnd="url(#arr1)" />
        <defs>
          <marker id="arr1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#4f8ef7" />
          </marker>
        </defs>
        <circle r="4" fill="#00d4ff" opacity="0.9" filter="url(#gRAG)">
          <animateMotion path="M 82 110 L 108 110" dur="1.2s" repeatCount="indefinite" begin="0s" />
        </circle>

        {/* ── Node 2: LangGraph Router ── */}
        <rect x="110" y="55" width="80" height="110" rx="10"
          fill="rgba(13,31,60,0.9)" stroke="rgba(79,142,247,0.5)" strokeWidth="1.5"
          style={{ animation: 'nodePulse 2s 0.3s infinite' }} filter="url(#gRAG)" />
        <text x="150" y="78" textAnchor="middle" fontSize="8" fill="#4f8ef7" fontFamily="Inter" fontWeight="700">LangGraph</text>
        <text x="150" y="90" textAnchor="middle" fontSize="7" fill="#4a6fa5" fontFamily="Inter">Dynamic Router</text>
        {/* Routes */}
        {['Whisper STT', 'PostgreSQL', 'Pathway RAG', 'Live JSON', 'Tavily'].map((r, i) => (
          <g key={i}>
            <rect x="118" y={100 + i * 12} width="64" height="10" rx="4"
              fill={`rgba(79,142,247,${0.06 + i * 0.03})`} stroke="rgba(79,142,247,0.2)" strokeWidth="0.7" />
            <text x="150" y={108 + i * 12} textAnchor="middle" fontSize="6.5" fill="#6a8fc8" fontFamily="Inter">{r}</text>
          </g>
        ))}

        {/* ── Flow 2: Router → GPT-4o ── */}
        <path d="M 192 110 L 218 110" stroke="url(#flowGrad2)" strokeWidth="2" markerEnd="url(#arr2)" />
        <defs>
          <marker id="arr2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#7c5cfc" />
          </marker>
        </defs>
        <circle r="4" fill="#4f8ef7" opacity="0.9" filter="url(#gRAG)">
          <animateMotion path="M 192 110 L 218 110" dur="1.4s" repeatCount="indefinite" begin="0.4s" />
        </circle>

        {/* ── Node 3: GPT-4o ── */}
        <rect x="220" y="60" width="80" height="100" rx="10"
          fill="rgba(13,31,60,0.9)" stroke="rgba(124,92,252,0.5)" strokeWidth="1.5"
          style={{ animation: 'nodePulse 2s 0.6s infinite' }} filter="url(#gRAG)" />
        <text x="260" y="82" textAnchor="middle" fontSize="18">🤖</text>
        <text x="260" y="100" textAnchor="middle" fontSize="8" fill="#7c5cfc" fontFamily="Inter" fontWeight="700">GPT-4o</text>
        <text x="260" y="112" textAnchor="middle" fontSize="6.5" fill="#4a6fa5" fontFamily="Inter">Query Classify</text>
        <text x="260" y="122" textAnchor="middle" fontSize="6.5" fill="#4a6fa5" fontFamily="Inter">Retrieval Fusion</text>
        <text x="260" y="132" textAnchor="middle" fontSize="6.5" fill="#4a6fa5" fontFamily="Inter">Halluc. Detection</text>
        <text x="260" y="152" textAnchor="middle" fontSize="6.5" fill="#f5c518" fontFamily="Inter">&gt;90% accuracy</text>

        {/* ── Flow 3: GPT-4o → Response ── */}
        <path d="M 302 110 L 328 110" stroke="url(#flowGrad3)" strokeWidth="2" markerEnd="url(#arr3)" />
        <defs>
          <marker id="arr3" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#00d4ff" />
          </marker>
        </defs>
        <circle r="4" fill="#7c5cfc" opacity="0.9" filter="url(#gRAG)">
          <animateMotion path="M 302 110 L 328 110" dur="1s" repeatCount="indefinite" begin="0.8s" />
        </circle>

        {/* ── Node 4: Output (TTS + Chat) ── */}
        <rect x="330" y="55" width="88" height="110" rx="10"
          fill="rgba(13,31,60,0.9)" stroke="rgba(0,212,255,0.5)" strokeWidth="1.5"
          style={{ animation: 'nodePulse 2s 0.9s infinite' }} filter="url(#gRAG)" />
        <text x="374" y="78" textAnchor="middle" fontSize="8" fill="#00d4ff" fontFamily="Inter" fontWeight="700">Response</text>

        {/* Chat bubble 1 */}
        <rect x="340" y="84" width="68" height="20" rx="8"
          fill="rgba(0,212,255,0.15)" stroke="rgba(0,212,255,0.4)" strokeWidth="1"
          style={{ animation: 'chatBubble 3s 0.5s ease-in-out infinite' }}
        />
        <text x="374" y="96" textAnchor="middle" fontSize="7" fill="#c8e8ff" fontFamily="Inter">🏏 Kohli scored 82</text>

        {/* Chat bubble 2 */}
        <rect x="340" y="110" width="68" height="20" rx="8"
          fill="rgba(79,142,247,0.15)" stroke="rgba(79,142,247,0.4)" strokeWidth="1"
          style={{ animation: 'chatBubble 3s 1.5s ease-in-out infinite' }}
        />
        <text x="374" y="122" textAnchor="middle" fontSize="7" fill="#c8e8ff" fontFamily="Inter">Live: IND 245/4</text>

        <text x="374" y="148" textAnchor="middle" fontSize="7.5" fill="#7c5cfc" fontFamily="Inter" fontWeight="600">ElevenLabs TTS</text>
        <text x="374" y="160" textAnchor="middle" fontSize="6.5" fill="#4a6fa5" fontFamily="Inter">Real-time voice</text>

        {/* Self-learning loop (bottom arc) */}
        <path d="M 150 170 Q 215 200 280 170" fill="none" stroke="rgba(245,197,24,0.4)" strokeWidth="1.5"
          strokeDasharray="4,3" />
        <text x="215" y="198" textAnchor="middle" fontSize="7.5" fill="#f5c518aa" fontFamily="Inter">
          Self-learning loop · 100+ Q&A/day
        </text>
        <circle r="3.5" fill="#f5c518" opacity="0.9">
          <animateMotion path="M 150 170 Q 215 200 280 170" dur="3s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  )
}
