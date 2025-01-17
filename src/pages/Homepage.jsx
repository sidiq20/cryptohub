import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X, Wallet2, Shield, Bitcoin, Gem, ChevronRight, ArrowRight, Lock, Zap, Users, Rocket, BarChart3, Globe2, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import CryptoTicker from '../components/CryptoTicker';
import Footer from '../components/Footer';
// import AboutSection from '../components/sections/AboutSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import FutureReleaseSection from '../components/sections/FutureReleaseSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import CryptoHubLogo from '../assets/CryptoHub.svg';



function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const { ref: trustRef, inView: trustInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const { ref: platformRef, inView: platformInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header/Navbar */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50 py-4 px-6 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={CryptoHubLogo} alt="Logo" className="w-8 h-8" />
            <span className="text-2xl font-space font-bold">CryptoHubs</span>
          </div>


          {/* <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-[#00ff94] transition-colors">Features</a>
            <a href="#about" className="text-gray-300 hover:text-[#00ff94] transition-colors">About</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-[#00ff94] transition-colors">How It Works</a> */}
            {/* <button 
              onClick={() => navigate('/admin')}
              className="text-gray-300 hover:text-[#00ff94] transition-colors"
            >
              Admin
            </button> */}
          {/* </nav> */}

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => navigate('/waitlist')}
              className="btn btn-outline flex items-center space-x-2"
            >
              <Wallet2 className="w-4 h-4" />
              <span>Validate Wallet</span>
            </button>
          </div>

          <button 
            className="md:hidden text-gray-300 hover:text-[#00ff94]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800 py-4">
            <nav className="flex flex-col space-y-4 px-6">
              <a href="#features" className="text-gray-300 hover:text-[#00ff94] transition-colors">Features</a>
              <a href="#about" className="text-gray-300 hover:text-[#00ff94] transition-colors">About</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-[#00ff94] transition-colors">How It Works</a>
              {/* <button
                onClick={() => navigate('/admin')}
                className="text-gray-300 hover:text-[#00ff94] transition-colors text-left"
              >
                Admin
              </button> */}
              <button 
                onClick={() => navigate('/waitlist')}
                className="btn btn-filled flex items-center justify-center space-x-2"
              >
                <Wallet2 className="w-4 h-4" />
                <span>Validate Wallet</span>
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Crypto Ticker */}
      <div className="fixed top-[100px] left-0 right-0 z-40 border-b border-gray-800">
        <CryptoTicker />
      </div>

      {/* Main Content */}
      <main className="pt-36">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 pt-16 pb-24">
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-b from-[#00ff94]/20 to-transparent blur-3xl"></div>
            <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-t from-[#0ef]/20 to-transparent blur-3xl"></div>
          </div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-7xl font-space font-bold leading-tight">
                  The Future of <span className="gradient-text">Crypto Trading</span> is Here
                </h1>
                <p className="text-xl text-gray-400 max-w-xl">
                  Experience lightning-fast trades, institutional-grade security, and deep liquidity pools. 
                  Join thousands of traders who have already discovered the power of decentralized trading.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => navigate('/waitlist')}
                    className="btn btn-filled text-lg group"
                  >
                    <span>Validate Wallet</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <a href="#features" className="btn btn-outline text-lg">
                    Explore Features
                  </a>
                </div>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
                  <div>
                    <p className="text-3xl font-space text-[#00ff94] font-bold">$2B+</p>
                    <p className="text-gray-400">Trading Volume</p>
                  </div>
                  <div>
                    <p className="text-3xl font-space text-[#0ef] font-bold">50K+</p>
                    <p className="text-gray-400">Active Traders</p>
                  </div>
                  <div>
                    <p className="text-3xl font-space text-[#b3ffe6] font-bold">0.01s</p>
                    <p className="text-gray-400">Trade Execution</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Trading Interface Preview */}
              <div className="relative">
                <div className="relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 p-6 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?auto=format&fit=crop&w=1000&q=80" 
                    alt="Trading Interface"
                    className="rounded-lg w-full"
                  />
                  {/* Floating Stats Cards */}
                  <div className="absolute -right-12 top-1/4 transform translate-x-1/2 bg-gray-800/90 backdrop-blur-xl rounded-xl p-4 border border-gray-700 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <Bitcoin className="w-8 h-8 text-[#00ff94]" />
                      <div>
                        <p className="text-sm text-gray-400">24h Volume</p>
                        <p className="text-lg font-space font-bold">$1.2B</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -left-12 bottom-1/4 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-xl rounded-xl p-4 border border-gray-700 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <BarChart3 className="w-8 h-8 text-[#0ef]" />
                      <div>
                        <p className="text-sm text-gray-400">Total Users</p>
                        <p className="text-lg font-space font-bold">50,000+</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff94]/10 to-[#0ef]/10 rounded-2xl blur-3xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* About Section */}
        {/* <AboutSection /> */}

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Future Release Section */}
        <FutureReleaseSection />

        {/* Platform Features */}
        <section 
          ref={platformRef}
          className={`py-24 bg-gray-800/20 transition-all duration-1000 ${
            platformInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          id="about"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-space font-bold">
                  Advanced Trading <span className="gradient-text">Tools</span>
                </h2>
                <p className="text-xl text-gray-400">
                  Access professional-grade trading tools, real-time market data, and advanced charting capabilities.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-[#00ff94]" />
                    <span>Real-time order book depth</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-[#00ff94]" />
                    <span>Advanced charting tools</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-[#00ff94]" />
                    <span>Multiple order types</span>
                  </li>
                </ul>
                <button 
                  onClick={() => navigate('/waitlist')}
                  className="btn btn-outline group"
                >
                  Get Early Access
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1642790551116-18e150f248e3?auto=format&fit=crop&w=2000&q=80"
                  alt="Trading Tools"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff94]/20 to-[#0ef]/20 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;