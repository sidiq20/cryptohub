import React from 'react';
import { Lock, Zap, Users, BarChart3, Shield, Wallet2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className={`py-24 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="features"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          Why Choose <span className="gradient-text">CryptoHub</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Bank-Grade Security</h3>
            <p className="text-gray-400">Multi-signature wallets and advanced encryption protect your assets.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Lightning Fast</h3>
            <p className="text-gray-400">Execute trades in milliseconds with our advanced matching engine.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Community Driven</h3>
            <p className="text-gray-400">Join a growing community of traders and investors worldwide.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Advanced Analytics</h3>
            <p className="text-gray-400">Professional-grade trading tools and real-time market analysis.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Regulatory Compliance</h3>
            <p className="text-gray-400">Full compliance with global cryptocurrency regulations.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Wallet2 className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Multi-Wallet Support</h3>
            <p className="text-gray-400">Connect and manage multiple wallets seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;