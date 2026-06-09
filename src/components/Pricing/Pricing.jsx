import { useState } from 'react'
import { pricing } from '../../data/pricing.js'

function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-24 relative" id="pricing">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight text-white light:text-gray-900">Flexible Pricing Plans</h2>
          <p className="text-[#A1A1AA] light:text-gray-500 max-w-2xl mx-auto text-base sm:text-lg mb-8 px-4">
            Choose the plan that best fits your messaging needs. Instant setup.
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center">
            <div className="bg-[#12121A] light:bg-white border border-white/5 light:border-gray-200 rounded-full p-1.5 flex items-center light:shadow-sm">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${!isAnnual ? 'bg-[#272732] light:bg-gray-100 text-white light:text-gray-900 shadow-md light:shadow-sm' : 'text-gray-400 light:text-gray-500 hover:text-white light:hover:text-gray-900'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2 ${isAnnual ? 'bg-[#272732] light:bg-gray-100 text-white light:text-gray-900 shadow-md light:shadow-sm' : 'text-gray-400 light:text-gray-500 hover:text-white light:hover:text-gray-900'
                  }`}
              >
                Yearly
                <span className="text-[10px] bg-green-500 text-white px-2 py-0.5 rounded-md font-bold uppercase tracking-wider">SAVE 17%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch pt-8 relative">
          {pricing.map((tier, idx) => {
            const isLight = tier.theme === 'light'
            const isGold = tier.theme === 'gold'

            return (
              <div
                key={tier.name}
                className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 flex flex-col h-full animate-fade-in-up ${isLight
                  ? 'w-full bg-white text-gray-900 border-blue-600 shadow-2xl shadow-blue-500/10 md:scale-105 z-10 hover:scale-[1.02] md:hover:scale-[1.07]'
                  : isGold
                    ? 'w-full bg-[#27241A] light:bg-[#FFFCF5] text-white light:text-gray-900 border-yellow-500/30 light:border-yellow-200 shadow-[0_0_40px_rgba(234,179,8,0.15)] light:shadow-xl hover:scale-[1.02]'
                    : 'w-full bg-[#18181B] light:bg-[#F8F9FA] text-white light:text-gray-900 border-[#27272A] light:border-gray-200 hover:border-[#3F3F46] light:hover:border-gray-300 hover:scale-[1.02] light:shadow-sm'
                  }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider whitespace-nowrap ${isLight ? 'bg-blue-600 text-white shadow-lg' : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg'
                    }`}>
                    {tier.badge}
                  </div>
                )}

                <div className="mb-8 mt-2">
                  <h3 className={`text-2xl font-bold mb-1 ${isGold ? 'text-yellow-500' : ''}`}>{tier.name}</h3>
                  <p className={`text-sm font-medium mb-6 ${isGold ? 'text-yellow-500' : 'text-blue-500'
                    }`}>{tier.subtitle}</p>

                  <div className="flex items-center gap-2 mb-2">
                    <span className={`line-through text-sm font-semibold ${isLight ? 'text-gray-400' : 'text-gray-500 light:text-gray-400'}`}>₹{isAnnual ? tier.yearlyOriginalPrice : tier.originalPrice}</span>
                    <span className="text-blue-500 text-sm font-bold">(20% OFF)</span>
                  </div>

                  <div className={`flex items-baseline gap-1 ${isAnnual ? 'mb-2' : 'mb-6'}`}>
                    <span className={`text-2xl font-bold ${isLight ? 'text-blue-500' : isGold ? 'text-yellow-500' : 'text-blue-500'}`}>₹</span>
                    <span className={`text-[56px] leading-none font-black tracking-tight ${isLight ? 'text-gray-900' : isGold ? 'text-yellow-500' : 'text-white light:text-gray-900'}`}>{isAnnual ? tier.yearlyPrice : tier.price}</span>
                    <span className={`text-sm font-medium ${isLight ? 'text-gray-500' : 'text-gray-400 light:text-gray-500'}`}>{isAnnual ? '/yr' : '/mo'}</span>
                  </div>

                  {isAnnual && (
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-2.5 py-1 text-xs font-bold rounded-md bg-green-500/10 text-green-500 border border-green-500/20`}>
                        Get 2 Months Free
                      </span>
                    </div>
                  )}

                  <p className={`text-sm leading-relaxed ${isLight ? 'text-gray-500' : 'text-[#A1A1AA] light:text-gray-600'}`}>
                    {tier.description}
                  </p>
                </div>

                <ul className="flex-grow space-y-4 mb-10">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 shrink-0 mt-0.5 ${isLight ? 'bg-blue-50 text-blue-500' : isGold ? 'bg-[#27272A] light:bg-yellow-100 border border-yellow-500/20 light:border-yellow-200 text-yellow-500' : 'bg-[#1C1C24] light:bg-blue-50 text-blue-500'
                        }`}>
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-sm font-medium leading-relaxed ${isLight ? 'text-gray-600' : isGold ? 'text-gray-300 light:text-gray-700' : 'text-gray-300 light:text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-[16px] font-bold transition-all active:scale-[0.98] flex items-center justify-center gap-2 ${isLight
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/25'
                    : isGold
                      ? 'bg-gradient-to-r from-[#B48148] via-[#D9A05B] to-[#FCE08C] text-black shadow-lg shadow-[#D9A05B]/25 hover:brightness-110'
                      : 'bg-zinc-800 light:bg-gray-100 text-white light:text-gray-900 hover:bg-zinc-700 light:hover:bg-gray-200 shadow-sm'
                    }`}
                >
                  {tier.cta}
                </button>
              </div>
            )
          })}
        </div>

        {/* Launch Offer Pill */}
        <div className="flex justify-center mt-12 sm:mt-16 pb-8 animate-fade-in-up delay-500 px-4">
          <div className="bg-[#18181B] light:bg-white border border-white/5 light:border-gray-200 rounded-[2rem] px-5 sm:px-8 py-3 flex items-center shadow-lg text-center">
            <span className="text-xs sm:text-sm font-bold text-gray-300 light:text-gray-600 uppercase tracking-wide">
              Launch Offer: <span className="text-blue-400">Flat 20% Off</span><span className="hidden sm:inline"> on all plans! Limited time only.</span><span className="sm:hidden"> on all plans!</span>
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Pricing
