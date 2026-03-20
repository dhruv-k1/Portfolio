export default function StockAnim() {
  // Candlestick data: [open, close, low, high] (0-100 scale)
  const candles = [
    { o: 35, c: 55, l: 28, h: 62, bull: true },
    { o: 55, c: 45, l: 38, h: 60, bull: false },
    { o: 45, c: 70, l: 40, h: 75, bull: true },
    { o: 70, c: 58, l: 52, h: 76, bull: false },
    { o: 58, c: 80, l: 54, h: 85, bull: true },
    { o: 80, c: 72, l: 65, h: 87, bull: false },
    { o: 72, c: 88, l: 68, h: 92, bull: true },
  ]

  const chartTop = 25
  const chartH = 120
  const chartLeft = 30
  const chartW = 250
  const candleW = 24
  const gap = (chartW - candles.length * candleW) / (candles.length + 1)

  const toY = (v: number) => chartTop + chartH - (v / 100) * chartH

  // Line chart points (closing prices)
  const linePoints = candles.map((c, i) => {
    const x = chartLeft + gap + i * (candleW + gap) + candleW / 2
    const y = toY(c.c)
    return `${x},${y}`
  }).join(' ')

  // Word2Vec embedding dots (decorative)
  const embDots = [
    { x: 310, y: 40, label: 'bullish', color: '#4fc86a' },
    { x: 290, y: 80, label: 'crash', color: '#ff5f5f' },
    { x: 330, y: 100, label: 'rally', color: '#4fc86a' },
    { x: 305, y: 130, label: 'decline', color: '#ff5f5f' },
    { x: 340, y: 60, label: 'surge', color: '#4fc86a' },
    { x: 275, y: 110, label: 'loss', color: '#ff5f5f' },
  ]

  return (
    <div style={{ width: '100%' }}>
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 600; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes candleRise {
          from { transform: scaleY(0); transform-origin: bottom; }
          to { transform: scaleY(1); transform-origin: bottom; }
        }
        @keyframes dotPulse {
          0%, 100% { r: 4; opacity: 0.7; }
          50% { r: 6; opacity: 1; }
        }
        @keyframes floatStock {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes priceFlash {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; fill: #4fc86a; }
        }
      `}</style>

      <svg viewBox="0 0 400 210" style={{ width: '100%', animation: 'floatStock 4s ease-in-out infinite' }}>
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7c5cfc" />
            <stop offset="100%" stopColor="#4f8ef7" />
          </linearGradient>
          <linearGradient id="areaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4f8ef7" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#4f8ef7" stopOpacity="0" />
          </linearGradient>
          <filter id="glowStock">
            <feGaussianBlur stdDeviation="2" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Chart background */}
        <rect x={chartLeft} y={chartTop} width={chartW} height={chartH}
          fill="rgba(13,31,60,0.8)" rx="6" stroke="rgba(79,142,247,0.2)" strokeWidth="1" />

        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((v) => (
          <g key={v}>
            <line
              x1={chartLeft} y1={toY(v)}
              x2={chartLeft + chartW} y2={toY(v)}
              stroke="rgba(79,142,247,0.08)" strokeWidth="1" strokeDasharray="4,4"
            />
            <text x={chartLeft - 4} y={toY(v) + 3} fontSize="7" fill="#4a6fa5" textAnchor="end" fontFamily="Inter">
              {v}
            </text>
          </g>
        ))}

        {/* Area fill under line */}
        <polygon
          points={`${chartLeft + gap + candleW / 2},${chartTop + chartH} ${linePoints} ${chartLeft + gap + (candles.length - 1) * (candleW + gap) + candleW / 2},${chartTop + chartH}`}
          fill="url(#areaGrad)"
        />

        {/* Candlesticks */}
        {candles.map((c, i) => {
          const x = chartLeft + gap + i * (candleW + gap)
          const bodyTop = toY(Math.max(c.o, c.c))
          const bodyH = Math.abs(toY(c.o) - toY(c.c)) || 3
          const wickX = x + candleW / 2
          return (
            <g key={i} style={{ animation: `candleRise 0.6s ${0.1 * i + 0.5}s ease-out both` }}>
              {/* Wick */}
              <line x1={wickX} y1={toY(c.h)} x2={wickX} y2={toY(c.l)}
                stroke={c.bull ? '#4fc86a' : '#ff5f5f'} strokeWidth="1.5" />
              {/* Body */}
              <rect x={x + 3} y={bodyTop} width={candleW - 6} height={bodyH}
                rx="2" fill={c.bull ? '#4fc86a' : '#ff5f5f'}
                opacity="0.85"
              />
            </g>
          )
        })}

        {/* Line chart overlay */}
        <polyline
          points={linePoints}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeDasharray="600"
          filter="url(#glowStock)"
          style={{ animation: 'drawLine 2s 1.5s ease-out forwards' }}
        />

        {/* Chart label */}
        <text x={chartLeft + 6} y={chartTop + 14} fontSize="8.5" fill="#8ba3c7" fontFamily="Inter" fontWeight="600">
          AAPL · 1000+ Days
        </text>

        {/* Price badge */}
        <g>
          <rect x={chartLeft + chartW - 70} y={chartTop + 6} width={64} height={18} rx="5"
            fill="rgba(79,200,100,0.15)" stroke="rgba(79,200,100,0.4)" strokeWidth="1" />
          <text x={chartLeft + chartW - 38} y={chartTop + 18} textAnchor="middle" fontSize="8.5" fill="#4fc86a"
            fontFamily="Inter" fontWeight="700" style={{ animation: 'priceFlash 2s infinite' }}>
            RF: 52% Acc.
          </text>
        </g>

        {/* Word2Vec embedding cluster */}
        <rect x="268" y="20" width="120" height="165" rx="8"
          fill="rgba(13,31,60,0.8)" stroke="rgba(124,92,252,0.25)" strokeWidth="1" />
        <text x="328" y="36" textAnchor="middle" fontSize="8.5" fill="#8ba3c7" fontFamily="Inter" fontWeight="600">
          Word2Vec Space
        </text>

        {/* Connection lines between dots */}
        {embDots.map((d, i) =>
          embDots.slice(i + 1, i + 3).map((d2, j) => (
            <line key={`${i}-${j}`}
              x1={d.x} y1={d.y} x2={d2.x} y2={d2.y}
              stroke={d.color === d2.color ? d.color : '#4a6fa5'}
              strokeWidth="0.5" opacity="0.3"
            />
          ))
        )}

        {/* Embedding dots */}
        {embDots.map((d, i) => (
          <g key={i}>
            <circle cx={d.x} cy={d.y} r={4} fill={d.color} filter="url(#glowStock)"
              style={{ animation: `dotPulse ${1.5 + i * 0.3}s ${i * 0.25}s ease-in-out infinite` }} />
            <text x={d.x} y={d.y + 14} textAnchor="middle" fontSize="6.5" fill="#4a6fa5" fontFamily="Inter">
              {d.label}
            </text>
          </g>
        ))}

        {/* Axis label */}
        <text x={chartLeft + chartW / 2} y={chartTop + chartH + 16} textAnchor="middle"
          fontSize="7.5" fill="#4a6fa5" fontFamily="Inter">Time →</text>
      </svg>
    </div>
  )
}
