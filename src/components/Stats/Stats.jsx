const stats = [
  { value: '99.9%', label: 'WhatsApp Uptime' },
  { value: '250M+', label: 'Messages Delivered' },
  { value: '< 1s', label: 'API Latency' },
  { value: '150+', label: 'Connected Devices' },
]

function Stats() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto relative py-12 sm:py-20 px-6 sm:px-8 rounded-[24px] sm:rounded-[40px] overflow-hidden">
        <div className="absolute inset-0 bg-blue-600"></div>
        <div className="absolute inset-0 bg-linear-to-br from-blue-600 to-indigo-900 opacity-90"></div>
        <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white mb-2 sm:mb-3 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/90 text-sm sm:text-base font-semibold tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
