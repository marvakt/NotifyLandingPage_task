import { useState, useEffect } from 'react'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Services', href: '#services' },
  { label: 'API Docs', href: '#api-docs' },
  { label: 'Pricing', href: '#pricing' },
]

const mobileLinks = [
  { label: 'Home', href: '#home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Features', href: '#features', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z' },
  { label: 'Solutions', href: '#solutions', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { label: 'Services', href: '#services', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { label: 'API Docs', href: '#api-docs', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
]

function Navbar({ onHomeClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('#home')
  const [isLightMode, setIsLightMode] = useState(() => {
    return localStorage.getItem('theme') === 'light'
  })

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.classList.add('light')
      document.body.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      document.documentElement.classList.remove('light')
      document.body.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
  }, [isLightMode])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="animate-slide-down sticky top-4 z-50 w-full transition-all duration-300 px-4 sm:px-6 lg:px-8 mb-2">
      <div className="max-w-6xl mx-auto">
        <div className={`flex items-center justify-between h-16 rounded-full px-6 transition-all duration-300 ${scrolled ? 'bg-[#12121A]/95 light:bg-white/95 backdrop-blur-xl border border-white/10 light:border-gray-200/50 shadow-2xl light:shadow-sm' : 'bg-[#12121A]/80 light:bg-white/80 backdrop-blur-md border border-white/5 light:border-gray-200/50 shadow-xl light:shadow-sm'}`}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/icon.png" alt="BugRicer Notify Logo" className="w-8 h-8 rounded-lg object-contain shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
            <a href="#home" onClick={onHomeClick} className="flex items-center text-lg font-bold tracking-tight">
              <span className="text-white light:text-gray-900">BugRicer</span>
              <span className="text-blue-500 ml-1">Notify</span>
            </a>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 p-1 bg-zinc-800/30 light:bg-gray-100/50 rounded-2xl border border-zinc-800/50 light:border-gray-200/50 shadow-xl backdrop-blur-xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.label === 'Home' ? onHomeClick : undefined}
                className={`text-sm font-medium transition-all px-4 py-1.5 rounded-xl hover:bg-[#12121A] light:hover:bg-white hover:!text-[#3B82F6] light:hover:text-[#3B82F6] ${link.label === 'Home' ? 'text-gray-200 light:text-gray-900 bg-white/5 light:bg-white light:shadow-sm' : 'text-gray-400 light:text-gray-600'}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button 
              onClick={() => setIsLightMode(!isLightMode)}
              className="hidden md:flex text-gray-400 light:text-gray-500 hover:text-white light:hover:text-gray-900 transition-colors items-center justify-center bg-white/5 light:bg-white light:shadow-sm border border-white/5 light:border-gray-200 rounded-full w-10 h-10"
              aria-label="Toggle Theme"
            >
              {isLightMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <a href="#login" className={`hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-[12px] text-xs font-bold active:scale-[0.98] transition-all duration-500 shadow-lg ${isLightMode ? 'bg-[#09090B] hover:bg-black' : 'bg-white hover:bg-gray-100'}`} style={{ color: isLightMode ? '#ffffff' : '#09090b' }}>
              Login
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right" aria-hidden="true">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-400 light:text-gray-500 hover:text-white light:hover:text-gray-900 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[100] md:hidden bg-[#0B0B0F] light:bg-[#FAFAFA] flex flex-col overflow-y-auto w-full h-[100dvh]">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center gap-3">
                <img src="/icon.png" alt="BugRicer Notify Logo" className="w-8 h-8 rounded-lg object-contain shadow-[0_0_15px_rgba(37,99,235,0.6)]" />
                <span className="text-xl font-bold tracking-tight text-white light:text-gray-900">BugRicer</span>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsLightMode(!isLightMode)}
                  className="bg-[#18181B] light:bg-white border border-white/5 light:border-gray-200 hover:bg-white/10 light:hover:bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                >
                  {isLightMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  )}
                </button>
                <button onClick={() => setMobileMenuOpen(false)} className="bg-[#18181B] light:bg-white border border-white/5 light:border-gray-200 hover:bg-white/10 light:hover:bg-gray-50 w-10 h-10 rounded-xl flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 text-gray-400 light:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-col px-4 py-4 gap-2">
              {mobileLinks.map((link) => {
                const isActive = activeTab === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setActiveTab(link.href);
                      setMobileMenuOpen(false);
                      if (link.label === 'Home' && onHomeClick) onHomeClick();
                    }}
                    className={`flex items-center justify-between p-3 rounded-[20px] transition-all ${
                      isActive ? 'bg-[#0F172A] light:bg-blue-50 border border-blue-900/30 light:border-blue-100' : 'hover:bg-white/5 light:hover:bg-gray-100 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center ${
                        isActive ? 'bg-blue-600/20 text-blue-500' : 'bg-[#18181B] light:bg-white border border-white/5 light:border-gray-200 text-gray-400 light:text-gray-500'
                      }`}>
                        <svg className="w-[22px] h-[22px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                        </svg>
                      </div>
                      <span className={`font-bold text-[16px] tracking-wide ${isActive ? 'text-blue-500' : 'text-white light:text-gray-800'}`}>
                        {link.label}
                      </span>
                    </div>
                    <svg className={`w-5 h-5 mr-1 ${isActive ? 'text-blue-500' : 'text-gray-500 light:text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                )
              })}
            </div>

            {/* Stay Connected */}
            <div className="mt-auto pb-12 pt-8 px-6">
              <h4 className="text-[11px] font-bold text-gray-500 tracking-[0.2em] uppercase mb-6 text-center">Stay Connected</h4>
              <div className="flex justify-center gap-4">
                <a href="#" className="w-14 h-14 rounded-[16px] bg-[#18181B] light:bg-white border border-white/5 light:border-gray-200 flex items-center justify-center text-gray-400 light:text-gray-500 hover:text-white light:hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="w-14 h-14 rounded-[16px] bg-[#18181B] light:bg-white border border-white/5 light:border-gray-200 flex items-center justify-center text-gray-400 light:text-gray-500 hover:text-white light:hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="w-14 h-14 rounded-[16px] bg-[#18181B] light:bg-white border border-white/5 light:border-gray-200 flex items-center justify-center text-gray-400 light:text-gray-500 hover:text-white light:hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="#" className="w-14 h-14 rounded-[16px] bg-[#18181B] light:bg-white border border-white/5 light:border-gray-200 flex items-center justify-center text-gray-400 light:text-gray-500 hover:text-white light:hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                     <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar

