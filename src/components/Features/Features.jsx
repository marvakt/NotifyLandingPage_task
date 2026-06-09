const featuresList = [
  {
    title: 'Unlimited Messaging',
    description: 'Send bulk WhatsApp campaigns without per-message platform limits on specific tiers.',
    icon: (
      <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    iconBg: 'bg-blue-500/10',
  },
  {
    title: 'Secure Connections',
    description: 'End-to-end encrypted protocol integration to ensure your customer data stays protected.',
    icon: (
      <svg className="w-6 h-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    iconBg: 'bg-emerald-500/10',
  },
  {
    title: 'Rich Media Support',
    description: 'Send images, documents, videos, and interactive elements seamlessly.',
    icon: (
      <svg className="w-6 h-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 11h16M10 11v10" />
      </svg>
    ),
    iconBg: 'bg-purple-500/10',
  },
  {
    title: 'Device Management',
    description: 'Easily manage and monitor multiple WhatsApp instances and API keys from one portal.',
    icon: (
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    iconBg: 'bg-orange-500/10',
  },
  {
    title: 'Global Delivery',
    description: 'Connect with users worldwide through optimized and stable WhatsApp routing.',
    icon: (
      <svg className="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    iconBg: 'bg-pink-500/10',
  },
  {
    title: 'Delivery Reports',
    description: 'Granular tracking of pending, sent, delivered, and failed WhatsApp messages.',
    icon: (
      <svg className="w-6 h-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    iconBg: 'bg-yellow-500/10',
  },
]

function Features() {
  return (
    <section className="py-24 relative" id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white light:text-gray-900">Powerful Features</h2>
          <p className="text-[#A1A1AA] light:text-gray-500 max-w-2xl mx-auto text-lg">
            Everything you need to manage your WhatsApp API campaigns with surgical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#14141C] light:bg-white border border-[#22222F] light:border-gray-200 rounded-[2rem] p-10 group animate-fade-in-up transition-all duration-300 hover:border-blue-500/40 light:hover:border-blue-300 hover:-translate-y-3 hover:shadow-[0_15px_50px_rgba(37,99,235,0.1)] light:shadow-sm light:hover:shadow-xl"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-[#1C1C26] light:bg-gray-50 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-[19px] font-bold mb-3 text-white light:text-gray-900 tracking-wide">{feature.title}</h3>
              <p className="text-[#9CA3AF] light:text-gray-500 text-[15px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
