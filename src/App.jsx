import MainLayout from './layouts/MainLayout.jsx'
import Hero from './components/Hero/Hero.jsx'
import HowItWorks from './components/HowItWorks/HowItWorks.jsx'
import Features from './components/Features/Features.jsx'
import Stats from './components/Stats/Stats.jsx'
import Solutions from './components/Solutions/Solutions.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import FAQ from './components/FAQ/FAQ.jsx'

function App() {
  return (
    <MainLayout>
      <Hero />
      <HowItWorks />
      <Features />
      <Stats />
      <Solutions />
      <Pricing />
      <FAQ />
    </MainLayout>
  )
}

export default App
