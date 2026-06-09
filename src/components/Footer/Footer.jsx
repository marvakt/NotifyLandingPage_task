function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="pt-16 md:pt-20 pb-8 border-t border-white/5 light:border-gray-200 bg-[#12121A] light:bg-[#FAFAFA]" id="footer">
      <style>{`
        .footer-nav-link {
          transition: color 300ms ease;
        }
        .footer-nav-link:hover {
          color: #3B82F6 !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">

          {/* Brand & Description */}
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <img src="/icon.png" alt="BugRicer Notify Logo" className="w-8 h-8 rounded-lg object-contain shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
              <a href="#home" className="flex items-center text-xl font-bold tracking-tight">
                <span className="text-white light:text-gray-900">BugRicer</span>
                <span className="text-blue-500 ml-1">Notify</span>
              </a>
            </div>
            <p className="text-[#9F9FA9] text-sm leading-relaxed mb-6 pr-4">
              Next-generation campaign notification engine. Lightning fast, secure, and built for scale.
            </p>
            <div className="flex gap-3">
              <a href="#" className="group w-9 h-9 rounded-[10px] bg-white/5 light:bg-white border border-white/10 light:border-gray-200 light:shadow-sm flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-[#9F9FA9] group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              </a>
              <a href="#" className="group w-9 h-9 rounded-[10px] bg-white/5 light:bg-white border border-white/10 light:border-gray-200 light:shadow-sm flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-[#9F9FA9] group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              </a>
              <a href="#" className="group w-9 h-9 rounded-[10px] bg-white/5 light:bg-white border border-white/10 light:border-gray-200 light:shadow-sm flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-[#9F9FA9] group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" /></svg>
              </a>
              <a href="#" className="group w-9 h-9 rounded-[10px] bg-white/5 light:bg-white border border-white/10 light:border-gray-200 light:shadow-sm flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-[#9F9FA9] group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
              <a href="#" className="group w-9 h-9 rounded-[10px] bg-white/5 light:bg-white border border-white/10 light:border-gray-200 light:shadow-sm flex items-center justify-center transition-colors duration-300">
                <svg className="w-4 h-4 text-[#9F9FA9] group-hover:text-blue-500 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-white light:text-gray-900 mb-6 uppercase text-[12px] tracking-widest">Platform</h4>
              <ul className="space-y-4 text-sm font-medium text-zinc-400 light:text-gray-500">
                <li><a href="#" className="footer-nav-link">Features</a></li>
                <li><a href="#" className="footer-nav-link">Solutions</a></li>
                <li><a href="#" className="footer-nav-link">Pricing</a></li>
                <li><a href="#" className="footer-nav-link">API Documentation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white light:text-gray-900 mb-6 uppercase text-[12px] tracking-widest">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-zinc-400 light:text-gray-500">
                <li><a href="#" className="footer-nav-link">About</a></li>
                <li><a href="#" className="footer-nav-link">Services</a></li>
                <li><a href="#" className="footer-nav-link">Support</a></li>
                <li><a href="#" className="footer-nav-link">Contact</a></li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h4 className="font-bold text-white light:text-gray-900 mb-6 uppercase text-[12px] tracking-widest">Support</h4>
              <ul className="space-y-4 text-sm font-medium text-zinc-400 light:text-gray-500">
                <li><a href="#" className="footer-nav-link">info@codoai.in</a></li>
                <li><a href="#" className="footer-nav-link">info@bugricer.com</a></li>
                <li><a href="#" className="footer-nav-link">+91 8086995559</a></li>
                <li><a href="#" className="footer-nav-link">FAQ</a></li>
              </ul>
            </div>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-white light:text-gray-900 mb-6 uppercase text-[12px] tracking-widest">Connect</h4>
            <div className="bg-[#18181B] light:bg-white rounded-2xl p-6 border border-white/5 light:border-gray-200 light:shadow-sm">
              <p className="text-[#9F9FA9] text-sm leading-relaxed mb-6 font-medium">
                Subscribe for updates & early access to new features.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <div className="flex items-center px-3 py-3 bg-transparent border border-white/10 light:border-gray-200 rounded-[10px] text-[#9F9FA9] light:text-gray-500 text-sm cursor-pointer hover:bg-white/5 light:hover:bg-gray-50 transition-colors whitespace-nowrap">
                    <span>IN +91</span>
                    <svg className="w-3 h-3 ml-2 text-[#9F9FA9] light:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    placeholder="00000 00000"
                    className="bg-transparent border border-white/10 light:border-gray-200 rounded-[10px] outline-none text-white light:text-gray-900 px-3 py-3 w-full text-sm placeholder-[#9F9FA9] light:placeholder-gray-400 focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-[10px] py-3 font-bold text-sm transition-colors flex items-center justify-center gap-2">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L15 22L11 13L2 9L22 2Z" />
                  </svg>
                  Subscribe
                </button>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 light:border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0 relative">
          <p className="text-[#9F9FA9] text-xs text-center md:text-left order-2 md:order-1">
            © 2026 <span className="text-white light:text-gray-900">CODO AI Innovations</span>. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:pr-12 order-1 md:order-2 w-full md:w-auto">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest transition-colors hover:opacity-80" style={{ color: '#9F9FA9' }}>Privacy Policy</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest transition-colors hover:opacity-80" style={{ color: '#9F9FA9' }}>Terms of Service</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest transition-colors hover:opacity-80" style={{ color: '#9F9FA9' }}>Refund Policy</a>
          </div>
          <button
            onClick={scrollToTop}
            className="absolute top-0 md:top-1/2 md:-translate-y-1/2 right-0 w-10 h-10 rounded-xl bg-white/5 light:bg-white border border-white/10 light:border-gray-200 flex items-center justify-center text-[#9F9FA9] light:text-gray-500 hover:text-white light:hover:text-gray-900 hover:bg-white/10 light:hover:bg-gray-50 light:shadow-sm transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
