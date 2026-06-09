function Hero() {
  return (
    <section className="relative flex-grow flex items-center justify-center pt-8 pb-12 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

        {/* Center Logo */}
        <div className="animate-fade-in transition-transform duration-300 hover:scale-105">
          <img src="/icon.png" alt="BugRicer Notify Logo" fetchPriority="high" className="animate-float w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 rounded-[16px] sm:rounded-[20px] object-cover shadow-[0_0_40px_rgba(37,99,235,0.5)] ring-1 ring-white/10" />
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 sm:mb-6 md:whitespace-nowrap leading-tight">
          <span className="text-white light:text-gray-900">Next-Gen </span>
          <span className="text-[#00E676]">WhatsApp </span>
          <span className="text-white light:text-gray-900">API</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 text-base sm:text-lg md:text-xl text-[#A1A1AA] light:text-gray-500 mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
          Experience the future of WhatsApp bulk messaging. Secure, scalable, and visually <br className="hidden md:block" />
          stunning. Built by experts at CODO AI Innovations for the modern enterprise.
        </p>

        {/* Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto">
          <a
            href="#pricing"
            className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold text-base sm:text-lg shadow-xl shadow-blue-500/20 hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-1 active:scale-[0.98] transition-all duration-500 text-center"
          >
            Get Access
          </a>
          <a
            href="#demo"
            className="w-full sm:w-auto px-8 py-3 sm:py-4 bg-zinc-900 light:bg-gray-50 border border-zinc-800 light:border-gray-200 text-white light:text-gray-900 rounded-2xl font-bold text-base sm:text-lg hover:bg-zinc-800 light:hover:bg-white hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 hover:border-blue-500/30 light:hover:border-blue-200 active:scale-[0.98] transition-all duration-500 text-center"
          >
            Start Free Trial
          </a>
        </div>

      </div>
    </section>
  )
}

export default Hero
