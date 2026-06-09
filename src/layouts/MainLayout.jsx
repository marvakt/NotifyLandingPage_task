import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar/Navbar.jsx'
import Footer from '../components/Footer/Footer.jsx'

function MainLayout({ children }) {
  const [showBanner, setShowBanner] = useState(true)

  // Initialize with exactly 22d 6h 49m 29s (1925369 seconds)
  const [timeLeft, setTimeLeft] = useState(1925369)

  useEffect(() => {
    if (!showBanner) return
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [showBanner])

  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const days = Math.floor(timeLeft / (24 * 60 * 60))
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60))
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60)
  const seconds = timeLeft % 60

  return (
    <div id="home" className="min-h-screen bg-[#0B0B0F] light:bg-[#FAFAFA] text-white light:text-[#09090B] flex flex-col font-sans selection:bg-blue-500/30 overflow-x-clip">
      {/* Top Banner */}
      {showBanner && (
        <div className="bg-[#1D4ED8] text-white text-[11px] sm:text-xs font-bold py-2.5 px-2 sm:px-4 flex justify-between items-center relative z-[60]">
          <div className="flex-1 hidden md:block"></div>
          <div className="flex flex-row items-center gap-2 sm:gap-4 w-full md:w-auto justify-start sm:justify-center overflow-x-auto whitespace-nowrap px-6 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <span className="font-bold tracking-wide shrink-0">LAUNCH DISCOUNT: 20% OFF</span>
            <span className="text-white/30 shrink-0">|</span>
            <span className="font-mono tracking-widest text-white font-bold shrink-0">
              {days}d {hours}h {minutes}m {seconds}s
            </span>
            <span className="text-white/30 shrink-0">|</span>
            <button className="bg-white text-blue-600 px-2 sm:px-3 py-1 rounded-[4px] text-[10px] sm:text-xs font-bold hover:bg-gray-100 transition-colors shrink-0">
              GET ACCESS
            </button>
          </div>
          <div className="flex-1 flex justify-end absolute right-2 top-1/2 -translate-y-1/2 md:relative md:top-auto md:translate-y-0 md:right-auto bg-[#1D4ED8] pl-2 md:pl-0">
            <button
              onClick={() => setShowBanner(false)}
              className="text-white hover:text-gray-200 transition-colors p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      <Navbar onHomeClick={() => setShowBanner(true)} />
      <main className="flex-grow flex flex-col">{children}</main>
      <Footer />

      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] z-[100] group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  )
}

export default MainLayout
