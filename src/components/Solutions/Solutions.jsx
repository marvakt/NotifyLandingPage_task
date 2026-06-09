const solutions = [
  {
    title: 'Bulk Marketing Campaigns',
    description: 'Send promotional WhatsApp messages or broadcast updates to thousands of customers instantly.',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    iconBg: 'bg-blue-500/10 light:bg-blue-50',
  },
  {
    title: 'Transactional Alerts',
    description: 'Automate order updates, OTPs, and shipping notifications efficiently via our REST API.',
    icon: (
      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    iconBg: 'bg-purple-500/10 light:bg-purple-50',
  },
  {
    title: 'Multi-User Dashboards',
    description: 'Let your team manage customer interactions and device health with role-based access.',
    icon: (
      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    iconBg: 'bg-emerald-500/10 light:bg-emerald-50',
  },
  {
    title: 'Detailed Analytics',
    description: 'Track delivery health and engagement to optimize your broader WhatsApp strategy.',
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: 'bg-yellow-500/10 light:bg-yellow-50',
  },
]

function Solutions() {
  return (
    <section className="py-24 relative" id="solutions">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white light:text-gray-900">Tailored Solutions</h2>
          <p className="text-[#A1A1AA] light:text-gray-500 max-w-2xl mx-auto text-lg">
            Industry-leading WhatsApp API tools built for speed, reliability, and business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {solutions.map((solution, idx) => (
              <div
              key={idx}
              className="group relative p-8 rounded-[24px] bg-zinc-900 light:bg-white border border-zinc-800 light:border-gray-200 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1 hover:border-blue-500/20 light:hover:border-blue-200 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${solution.iconBg} flex items-center justify-center mb-6`}>
                {solution.icon}
              </div>
              <h3 className="text-xl font-bold text-white light:text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-400 light:text-gray-600 text-[15px] leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in-up delay-400">
          <a href="#solutions" className="inline-flex items-center justify-center bg-[#16161D] light:bg-white hover:bg-[#1C1C24] light:hover:bg-gray-50 border border-white/10 light:border-gray-200 text-white light:text-gray-900 font-semibold py-3 px-6 rounded-full transition-all text-sm group light:shadow-sm">
            Explore All Solutions
            <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Solutions
