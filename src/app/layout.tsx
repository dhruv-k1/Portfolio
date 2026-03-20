import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dhruv Khandelwal — AI Engineer',
  description:
    'Portfolio of Dhruv Khandelwal — Generative AI Engineer, ML practitioner & final-year student at IIT Roorkee. Built multi-agent systems at Delhivery, won WWT Unravel 2025.',
  keywords: ['AI Engineer', 'ML Engineer', 'LangGraph', 'IIT Roorkee', 'Generative AI', 'RAG'],
  authors: [{ name: 'Dhruv Khandelwal' }],
  openGraph: {
    title: 'Dhruv Khandelwal — AI Engineer',
    description: 'Generative AI Engineer & ML practitioner from IIT Roorkee',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
