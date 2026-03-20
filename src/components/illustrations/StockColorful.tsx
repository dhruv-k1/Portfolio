export default function StockColorful() {
  // Candle data: [open%, close%, low%, high%, isBull]
  const candles: [number, number, number, number, boolean][] = [
    [42, 58, 36, 64, true],
    [58, 46, 40, 62, false],
    [46, 67, 42, 72, true],
    [67, 53, 47, 73, false],
    [53, 74, 49, 79, true],
    [74, 61, 55, 80, false],
    [61, 82, 57, 87, true],
    [82, 70, 65, 88, false],
    [70, 88, 66, 93, true],
  ]

  const chartX = 14, chartY = 46, chartW = 270, chartH = 130
  const candleW = 22
  const step = chartW / (candles.length + 1)
  const toY = (v: number) => chartY + chartH - (v / 100) * chartH

  const lineStr = candles.map((c, i) => {
    const x = chartX + step * (i + 1) + candleW / 2
    const y = toY(c[1])
    return `${x},${y}`
  }).join(' ')

  return (
    <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.18)' }}>
      <style>{`
        @keyframes drawStockLine { from{stroke-dashoffset:800} to{stroke-dashoffset:0} }
        @keyframes riseCandle { from{transform:scaleY(0)} to{transform:scaleY(1)} }
      `}</style>
      <svg viewBox="0 0 480 240" style={{ width: '100%', display: 'block' }}>
        <rect width="480" height="240" fill="#ffffff" />

        {/* Header */}
        <rect width="480" height="36" fill="#0f172a" />
        <text x="16" y="23" fontSize="13" fontWeight="700" fill="#ffffff" fontFamily="Inter, sans-serif">📈 AAPL Stock Sentiment Prediction</text>
        <rect x="350" y="8" width="115" height="20" rx="5" fill="#22c55e22" stroke="#22c55e" strokeWidth="1" />
        <text x="407" y="22" textAnchor="middle" fontSize="9" fill="#22c55e" fontFamily="Inter, sans-serif" fontWeight="700">1000+ days scraped</text>

        {/* Chart area */}
        <rect x={chartX} y={chartY} width={chartW} height={chartH} fill="#f8faff" stroke="#e2e8f0" strokeWidth="1" rx="4" />

        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(v => (
          <g key={v}>
            <line x1={chartX} y1={toY(v)} x2={chartX + chartW} y2={toY(v)} stroke="#e2e8f0" strokeWidth="0.8" />
            <text x={chartX - 4} y={toY(v) + 3} fontSize="7" fill="#94a3b8" textAnchor="end" fontFamily="Inter">{v}</text>
          </g>
        ))}

        {/* Candlesticks */}
        {candles.map(([o, c, l, h, bull], i) => {
          const x = chartX + step * (i + 1)
          const cx = x + candleW / 2
          const bodyTop = toY(Math.max(o, c))
          const bodyH = Math.max(Math.abs(toY(o) - toY(c)), 2)
          const color = bull ? '#16a34a' : '#dc2626'
          return (
            <g key={i} style={{ transformOrigin: `${cx}px ${toY(0)}px`, animation: `riseCandle 0.5s ${0.05 * i + 0.3}s ease-out both` }}>
              <line x1={cx} y1={toY(h)} x2={cx} y2={toY(l)} stroke={color} strokeWidth="1.5" />
              <rect x={x + 3} y={bodyTop} width={candleW - 6} height={bodyH} rx="2" fill={color} opacity="0.9" />
            </g>
          )
        })}

        {/* Moving average line */}
        <polyline
          points={lineStr}
          fill="none" stroke="#2563eb" strokeWidth="2.5"
          strokeLinecap="round" strokeLinejoin="round"
          strokeDasharray="800"
          style={{ animation: 'drawStockLine 2s 1s ease-out forwards' }}
        />
        <circle cx="16" cy="56" r="3" fill="#2563eb" />
        <text x="22" y="60" fontSize="7.5" fill="#2563eb" fontFamily="Inter" fontWeight="600">MA (Word2Vec)</text>

        {/* X-axis label */}
        <text x={chartX + chartW / 2} y={chartY + chartH + 14} textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="Inter">Time (Days) →</text>

        {/* RIGHT: NLP Pipeline panel */}
        <rect x="296" y="46" width="170" height="130" rx="8" fill="#f8faff" stroke="#e2e8f0" strokeWidth="1" />
        <text x="381" y="64" textAnchor="middle" fontSize="10" fill="#1e293b" fontFamily="Inter" fontWeight="700">NLP Pipeline</text>

        {/* Pipeline steps */}
        {[
          { step: '1', label: 'Web Scraping', sub: 'BeautifulSoup · yfinance', color: '#6366f1', bg: '#eef2ff' },
          { step: '2', label: 'Text Preprocessing', sub: 'Tokenize · Stem · Stopwords', color: '#0891b2', bg: '#ecfeff' },
          { step: '3', label: 'Word2Vec Embeddings', sub: 'Semantic relationships', color: '#7c3aed', bg: '#f5f3ff' },
          { step: '4', label: 'ML Classification', sub: 'RF · SVC · AdaBoost · LR', color: '#b45309', bg: '#fffbeb' },
        ].map((s, i) => (
          <g key={i}>
            <rect x="304" y={76 + i * 24} width="154" height="20" rx="5" fill={s.bg} stroke={s.color + '40'} strokeWidth="1" />
            <circle cx="316" cy={86 + i * 24} r="7" fill={s.color} />
            <text x="316" y={89 + i * 24} textAnchor="middle" fontSize="8" fill="#fff" fontFamily="Inter" fontWeight="700">{s.step}</text>
            <text x="328" y={84 + i * 24} fontSize="8.5" fill={s.color} fontFamily="Inter" fontWeight="600">{s.label}</text>
            <text x="328" y={93 + i * 24} fontSize="7" fill="#94a3b8" fontFamily="Inter">{s.sub}</text>
          </g>
        ))}

        {/* Bottom footer */}
        <rect x="0" y="192" width="480" height="48" fill="#0f172a" />
        <rect x="14" y="200" width="148" height="32" rx="8" fill="#dc262615" stroke="#dc2626" strokeWidth="1" />
        <text x="88" y="212" textAnchor="middle" fontSize="8.5" fill="#dc2626" fontFamily="Inter" fontWeight="600">Best Accuracy</text>
        <text x="88" y="224" textAnchor="middle" fontSize="13" fill="#ef4444" fontFamily="Inter" fontWeight="700">Random Forest: 52%</text>

        <rect x="174" y="200" width="148" height="32" rx="8" fill="#16a34a15" stroke="#16a34a" strokeWidth="1" />
        <text x="248" y="212" textAnchor="middle" fontSize="8.5" fill="#16a34a" fontFamily="Inter" fontWeight="600">Dataset</text>
        <text x="248" y="224" textAnchor="middle" fontSize="11" fill="#22c55e" fontFamily="Inter" fontWeight="700">850+ rows · 6 models</text>

        <rect x="334" y="200" width="132" height="32" rx="8" fill="#6366f115" stroke="#6366f1" strokeWidth="1" />
        <text x="400" y="212" textAnchor="middle" fontSize="8.5" fill="#6366f1" fontFamily="Inter" fontWeight="600">Embeddings</text>
        <text x="400" y="224" textAnchor="middle" fontSize="11" fill="#818cf8" fontFamily="Inter" fontWeight="700">Word2Vec · TF-IDF</text>
      </svg>
    </div>
  )
}
