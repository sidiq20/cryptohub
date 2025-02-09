import React from 'react';
import { Wallet2, ShieldCheck, Rocket, ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function HowItWorksSection() {
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
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          How It <span className="gradient-text">Works</span>
        </h2>

        <div className="relative">
          {/* Single Connection Line */}
          <div className="absolute top-1/2 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-[#00ff94] to-[#0ef] hidden md:block"></div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="relative">
              <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
                <div className="w-16 h-16 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Wallet2 className="w-8 h-8 text-[#00ff94]" />
                </div>
                <h3 className="text-xl font-space mb-4 text-center">1. Connect Wallet</h3>
                <p className="text-gray-400 text-center">
                  Link your preferred crypto wallet to start trading on our platform.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
                <div className="w-16 h-16 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <ShieldCheck className="w-8 h-8 text-[#00ff94]" />
                </div>
                <h3 className="text-xl font-space mb-4 text-center">2. Verify Account</h3>
                <p className="text-gray-400 text-center">
                  Complete a quick verification process to ensure security.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
                <div className="w-16 h-16 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Rocket className="w-8 h-8 text-[#00ff94]" />
                </div>
                <h3 className="text-xl font-space mb-4 text-center">3. Start Trading</h3>
                <p className="text-gray-400 text-center">
                  Begin trading with access to all our advanced features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;