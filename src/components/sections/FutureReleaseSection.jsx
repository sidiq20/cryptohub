import React from 'react';
import { Rocket, Lock, Zap, Globe2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function FutureReleaseSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section 
      ref={ref}
      className={`py-24 bg-gray-800/20 transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      id="future-releases"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-space font-bold mb-4">
            Future <span className="gradient-text">Releases</span>
          </h2>
          <p className="text-xl text-gray-400">Exciting features coming to CryptoHub</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff94]/20 to-[#0ef]/20 rounded-xl blur-xl transition-all group-hover:blur-2xl"></div>
            <div className="relative p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
              <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
                <Rocket className="w-6 h-6 text-[#00ff94]" />
              </div>
              <h3 className="text-xl font-space mb-4">DeFi Integration</h3>
              <p className="text-gray-400">Access multiple DeFi protocols directly from your dashboard.</p>
              <div className="mt-4 inline-block px-3 py-1 bg-[#00ff94]/10 rounded-full text-[#00ff94] text-sm">
                Coming Q2 2024
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff94]/20 to-[#0ef]/20 rounded-xl blur-xl transition-all group-hover:blur-2xl"></div>
            <div className="relative p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
              <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
                <Lock className="w-6 h-6 text-[#00ff94]" />
              </div>
              <h3 className="text-xl font-space mb-4">Smart Contracts</h3>
              <p className="text-gray-400">Create and deploy custom smart contracts with our intuitive interface.</p>
              <div className="mt-4 inline-block px-3 py-1 bg-[#00ff94]/10 rounded-full text-[#00ff94] text-sm">
                Coming Q3 2024
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff94]/20 to-[#0ef]/20 rounded-xl blur-xl transition-all group-hover:blur-2xl"></div>
            <div className="relative p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
              <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#00ff94]" />
              </div>
              <h3 className="text-xl font-space mb-4">Layer 2 Support</h3>
              <p className="text-gray-400">Enhanced scalability with major Layer 2 networks integration.</p>
              <div className="mt-4 inline-block px-3 py-1 bg-[#00ff94]/10 rounded-full text-[#00ff94] text-sm">
                Coming Q4 2024
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00ff94]/20 to-[#0ef]/20 rounded-xl blur-xl transition-all group-hover:blur-2xl"></div>
            <div className="relative p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
              <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-[#00ff94]" />
              </div>
              <h3 className="text-xl font-space mb-4">Cross-Chain Bridge</h3>
              <p className="text-gray-400">Seamlessly transfer assets across multiple blockchain networks.</p>
              <div className="mt-4 inline-block px-3 py-1 bg-[#00ff94]/10 rounded-full text-[#00ff94] text-sm">
                Coming Q1 2025
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FutureReleaseSection;