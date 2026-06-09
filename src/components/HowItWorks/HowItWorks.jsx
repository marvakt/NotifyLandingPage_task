const steps = [
  {
    id: 1,
    title: 'Link Your Device',
    description: "Scan the QR code to connect your business WhatsApp account instantly. Start sending messages within minutes.",
    icon: (
      <svg className="w-10 h-10 text-[#00E676]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
      </svg>
    ),
    badgeColor: 'bg-[#00E676]',
    shadowClass: 'group-hover:shadow-[0_0_40px_rgba(0,230,118,0.3)]',
    hoverTextColor: 'group-hover:text-blue-500',
  },
  {
    id: 2,
    title: 'Dispatch Campaigns',
    description: 'Send bulk WhatsApp messages, transactional alerts, or broadcast campaigns via our robust API and dashboard.',
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
    badgeColor: 'bg-blue-600',
    shadowClass: 'group-hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]',
    hoverTextColor: 'group-hover:text-blue-500',
  },
  {
    id: 3,
    title: 'Real-time Tracking',
    description: 'Monitor delivery status, track sent/failed messages, and analyze WhatsApp engagement on our live dashboard.',
    icon: (
      <svg className="w-10 h-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h4l2-4 4 10 3-6 2 2h3" />
      </svg>
    ),
    badgeColor: 'bg-purple-500',
    shadowClass: 'group-hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]',
    hoverTextColor: 'group-hover:text-blue-500',
  },
]

function HowItWorks() {
  return (
    <section className="py-24 relative" id="how-it-works">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white light:text-gray-900">How It Works</h2>
          <p className="text-[#A1A1AA] light:text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            From connection to delivery, we ensure your WhatsApp campaigns reach your audience effortlessly and securely.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-[3rem] left-[16.66%] right-[16.66%] h-[1px] bg-white/5 light:bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center group animate-fade-in-up cursor-pointer" style={{ animationDelay: `${step.id * 120}ms` }}>
                <div className="relative mb-8">
                  <div className={`w-24 h-24 rounded-[2rem] bg-[#12121A] light:bg-blue-50 border border-white/5 light:border-blue-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-3 ${step.shadowClass}`}>
                    {step.icon}
                  </div>
                  {/* Number Badge */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${step.badgeColor} border-[3px] border-[#0B0B0F] light:border-[#FAFAFA] flex items-center justify-center text-xs font-bold text-white shadow-lg`}>
                    0{step.id}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-4 text-white light:text-gray-900 tracking-tight transition-colors duration-300 ${step.hoverTextColor}`}>{step.title}</h3>
                <p className="text-[#A1A1AA] light:text-gray-500 text-base leading-relaxed max-w-[280px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
