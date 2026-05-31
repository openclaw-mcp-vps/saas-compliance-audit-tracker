export default function Home() {
  const faqs = [
    {
      q: 'Which compliance frameworks are supported?',
      a: 'ComplianceTrack supports SOC2 Type I & II, GDPR, HIPAA, and ISO 27001 out of the box, with custom framework support on request.'
    },
    {
      q: 'How do deadline alerts work?',
      a: 'Automated email reminders are sent 30, 14, and 3 days before each compliance deadline. You can customize alert timing and recipients per framework.'
    },
    {
      q: 'Can my whole team use it?',
      a: 'Yes. Every plan includes unlimited team members with role-based access — admins, auditors, and read-only viewers.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          SOC2 · GDPR · HIPAA · ISO 27001
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Never Miss a Compliance Deadline Again
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          ComplianceTrack monitors your SOC2 and GDPR requirements, tracks evidence collection progress, and sends automated deadline alerts — so your SaaS stays audit-ready.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🗓️', title: 'Deadline Monitoring', desc: 'Automated alerts 30, 14, and 3 days before every compliance deadline.' },
            { icon: '📋', title: 'Evidence Tracker', desc: 'Assign, upload, and verify evidence artifacts across all controls.' },
            { icon: '👥', title: 'Team Collaboration', desc: 'Role-based access for founders, compliance officers, and auditors.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'All compliance frameworks (SOC2, GDPR, HIPAA, ISO 27001)',
              'Automated deadline email alerts',
              'Evidence collection & tracking',
              'Unlimited team members',
              'Audit-ready reports (PDF export)',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="mt-3 text-xs text-[#6e7681]">14-day free trial · No credit card needed</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-sm text-[#8b949e]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ComplianceTrack. Built for SaaS teams.
      </footer>
    </main>
  )
}
