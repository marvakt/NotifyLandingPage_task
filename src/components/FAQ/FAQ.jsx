import { useState } from 'react'

const faqCategories = [
  {
    title: 'GENERAL QUESTIONS',
    items: [
      {
        question: 'What is Notify?',
        answer: 'Notify is a high-speed notification engine developed by CODO AI Innovations that allows businesses to automate WhatsApp, Telegram, and Email messaging directly from their CRM or ERP systems.'
      },
      {
        question: 'How long does it take to set up?',
        answer: 'Setup usually takes less than 24 hours. Once your Facebook Business Manager is verified, you can link your number and start sending messages almost immediately.'
      }
    ]
  },
  {
    title: 'TECHNICAL & NUMBER SAFETY',
    items: [
      {
        question: 'Can I use my own WhatsApp number?',
        answer: 'Yes, you can use an existing number, but it must be disconnected from the standard WhatsApp app before linking it to the API.'
      },
      {
        question: 'Will my number get banned?',
        answer: 'We use official API integrations which drastically reduces the risk of bans compared to unofficial tools, as long as you adhere to commerce policies.'
      },
      {
        question: 'Do I need to keep my phone connected to the internet?',
        answer: 'No. Since this uses the official Cloud API, your physical phone does not need to be online or connected to the internet to send messages.'
      }
    ]
  },
  {
    title: 'INTEGRATION & API',
    items: [
      {
        question: 'Can I integrate this with my existing ERP or CRM?',
        answer: 'Absolutely. We provide comprehensive API documentation and webhooks to seamlessly connect with any modern CRM or ERP system.'
      },
      {
        question: 'Do you offer custom automation?',
        answer: 'Yes, our team can help you build custom chatbots and automated workflows tailored to your specific business requirements.'
      }
    ]
  },
  {
    title: 'BILLING & PLANS',
    items: [
      {
        question: 'What happens if I exceed my message limit?',
        answer: 'If you exceed your plan\'s limits, you will simply be billed a standard overage rate per message. There are no hard cutoffs.'
      },
      {
        question: 'Is there a discount for long-term plans?',
        answer: 'Yes! We offer a flat 17% discount when you choose to be billed annually instead of monthly.'
      },
      {
        question: 'What is your refund policy?',
        answer: 'We offer a 14-day money-back guarantee for new subscriptions if you are not completely satisfied with our platform.'
      }
    ]
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        className={`w-full text-left p-3.5 rounded-lg border flex items-center justify-between transition-all duration-500 focus:outline-none ${
          isOpen
            ? 'bg-blue-900/20 light:bg-blue-50 border-blue-900/50 light:border-blue-200'
            : 'bg-[#12121A] light:bg-white border-white/5 light:border-gray-200 hover:border-white/10 light:hover:border-gray-300'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-sm font-medium pr-3 transition-colors ${
          isOpen ? 'text-blue-500 light:text-blue-600' : 'text-gray-300 light:text-gray-700'
        }`}>
          {question}
        </span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-500' : 'text-gray-500'}`}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-4 text-xs text-gray-400 light:text-gray-600 leading-relaxed bg-[#0B0B0F]/50 light:bg-gray-50/50 rounded-b-lg -mt-1 border-x border-b border-white/5 light:border-gray-200">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

function FAQ() {
  return (
    <section className="py-24 relative" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start mb-8 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white light:text-gray-900 mb-3 tracking-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-gray-400 light:text-gray-500 text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-sm">
              Quick answers to common questions about Notify. For more help, reach out to our team.
            </p>
            <a href="#support" className="inline-flex items-center font-bold text-sm transition-colors group hover:opacity-80" style={{ color: '#3B82F6' }}>
              Contact Support
              <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Right Column - Accordion Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

            {/* Inner Column 1 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 bg-blue-900/20 px-2 py-1 rounded inline-block mb-4">{faqCategories[0].title}</h3>
                <div className="space-y-2">
                  {faqCategories[0].items.map((item, idx) => (
                    <FAQItem key={`gen-${idx}`} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 bg-blue-900/20 px-2 py-1 rounded inline-block mb-4">{faqCategories[1].title}</h3>
                <div className="space-y-2">
                  {faqCategories[1].items.map((item, idx) => (
                    <FAQItem key={`tech-${idx}`} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            </div>

            {/* Inner Column 2 */}
            <div className="space-y-8">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 bg-blue-900/20 px-2 py-1 rounded inline-block mb-4">{faqCategories[2].title}</h3>
                <div className="space-y-2">
                  {faqCategories[2].items.map((item, idx) => (
                    <FAQItem key={`int-${idx}`} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-500 bg-blue-900/20 px-2 py-1 rounded inline-block mb-4">{faqCategories[3].title}</h3>
                <div className="space-y-2">
                  {faqCategories[3].items.map((item, idx) => (
                    <FAQItem key={`bill-${idx}`} question={item.question} answer={item.answer} />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
