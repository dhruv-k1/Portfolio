export default function NeuralNetAnim() {
  // Layers: 3 input, 4 hidden, 4 hidden2, 2 output
  const layers = [
    [{ x: 60, y: 60 }, { x: 60, y: 130 }, { x: 60, y: 200 }],
    [{ x: 170, y: 40 }, { x: 170, y: 100 }, { x: 170, y: 160 }, { x: 170, y: 220 }],
    [{ x: 280, y: 60 }, { x: 280, y: 130 }, { x: 280, y: 200 }],
    [{ x: 380, y: 95 }, { x: 380, y: 165 }],
  ]

  const nodeColors = ['#4f8ef7', '#7c5cfc', '#4f8ef7', '#00d4ff']
  const connections: { x1: number; y1: number; x2: number; y2: number; delay: number }[] = []

  layers.forEach((layer, li) => {
    if (li < layers.length - 1) {
      layer.forEach((n1) => {
        layers[li + 1].forEach((n2, n2i) => {
          connections.push({ x1: n1.x, y1: n1.y, x2: n2.x, y2: n2.y, delay: (li * 4 + n2i) * 0.3 })
        })
      })
    }
  })

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <style>{`
        @keyframes nodeGlow {
          0%, 100% { opacity: 0.7; r: 10; filter: drop-shadow(0 0 4px currentColor); }
          50% { opacity: 1; r: 13; filter: drop-shadow(0 0 12px currentColor); }
        }
        @keyframes lineFlow {
          0% { stroke-dashoffset: 200; opacity: 0.15; }
          50% { opacity: 0.5; }
          100% { stroke-dashoffset: 0; opacity: 0.15; }
        }
        @keyframes packetMove {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>

      <svg
        viewBox="0 0 440 270"
        style={{
          width: '100%',
          maxWidth: 440,
          animation: 'floatUpDown 4s ease-in-out infinite',
        }}
      >
        {/* Background glow blobs */}
        <defs>
          <radialGradient id="bgGlow1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4f8ef7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#4f8ef7" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="bgGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#7c5cfc" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#7c5cfc" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        <ellipse cx="150" cy="135" rx="120" ry="100" fill="url(#bgGlow1)" />
        <ellipse cx="320" cy="135" rx="100" ry="80" fill="url(#bgGlow2)" />

        {/* Connection lines */}
        {connections.map((c, i) => (
          <line
            key={i}
            x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2}
            stroke={i % 3 === 0 ? '#4f8ef7' : i % 3 === 1 ? '#7c5cfc' : '#00d4ff'}
            strokeWidth="0.8"
            strokeDasharray="200"
            style={{
              animation: `lineFlow ${2 + (i % 3) * 0.5}s ease-in-out ${c.delay % 2}s infinite`,
            }}
          />
        ))}

        {/* Layer labels */}
        {['Input', 'Hidden', 'Hidden', 'Output'].map((label, li) => (
          <text
            key={li}
            x={layers[li][0].x}
            y={248}
            textAnchor="middle"
            fontSize="9"
            fill="#4a6fa5"
            fontFamily="Inter, sans-serif"
          >
            {label}
          </text>
        ))}

        {/* Nodes */}
        {layers.map((layer, li) =>
          layer.map((node, ni) => (
            <g key={`${li}-${ni}`}>
              {/* Outer glow ring */}
              <circle
                cx={node.x} cy={node.y} r={16}
                fill="none"
                stroke={nodeColors[li]}
                strokeWidth="0.5"
                opacity="0.3"
                style={{ animation: `nodeGlow ${2 + ni * 0.4}s ease-in-out ${ni * 0.3 + li * 0.2}s infinite` }}
              />
              {/* Node body */}
              <circle
                cx={node.x} cy={node.y} r={10}
                fill={`${nodeColors[li]}22`}
                stroke={nodeColors[li]}
                strokeWidth="1.5"
                filter="url(#glow)"
                style={{ animation: `nodeGlow ${2 + ni * 0.4}s ease-in-out ${ni * 0.3 + li * 0.2}s infinite` }}
              />
              {/* Inner dot */}
              <circle cx={node.x} cy={node.y} r={3} fill={nodeColors[li]} opacity="0.9" />
            </g>
          ))
        )}

        {/* Animated data packets */}
        {connections.filter((_, i) => i % 5 === 0).map((c, i) => (
          <circle key={`packet-${i}`} r="3" fill="#00d4ff" opacity="0.9">
            <animateMotion
              dur={`${1.5 + i * 0.4}s`}
              begin={`${i * 0.7}s`}
              repeatCount="indefinite"
              path={`M ${c.x1} ${c.y1} L ${c.x2} ${c.y2}`}
            />
            <animate attributeName="opacity" values="0;1;1;0" dur={`${1.5 + i * 0.4}s`} begin={`${i * 0.7}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </svg>
    </div>
  )
}
