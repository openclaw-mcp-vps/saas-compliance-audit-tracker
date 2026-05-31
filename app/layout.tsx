import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ComplianceTrack — SOC2 & GDPR Deadline Tracker',
  description: 'Monitor compliance requirements across SOC2 and GDPR frameworks, track evidence collection, and never miss a deadline. Built for SaaS companies.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9c3f5313-a942-453b-ac98-7bab09827a36"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
