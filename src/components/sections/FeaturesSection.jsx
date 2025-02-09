import React from 'react';
import { Lock, Zap, Users, BarChart3, Shield, Wallet2, Gift, Coins, Cross, CircleDotDashed, Boxes, ArrowDownNarrowWide, BookCheck, Crosshair, Check, CircleOff, ArrowDownUp, ArrowLeftRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

function FeaturesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const navigate = useNavigate();

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
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
            onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Bank-Grade Security</h3>
            <p className="text-gray-400">Multi-signature wallets and advanced encryption protect your assets.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
            onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Staking</h3>
            <p className="text-gray-400">Maximize your earnings with secure and reliable staking options. Our platform ensures your assets grow efficiently with minimal risk.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
            onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <BarChart3 className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Fix Transactions</h3>
            <p className="text-gray-400">Instant resolution of transaction errors for a seamless trading experience. We ensure that any issues are corrected quickly and your funds are secure.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
            onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Login Issue</h3>
            <p className="text-gray-400">Robust security measures to prevent and resolve login issues. Our support ensures you can access your account securely and without hassle.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
            onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <ArrowDownUp className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Migration</h3>
            <p className="text-gray-400">Migrate to the latest protocols for enhanced performance, scalability, and security.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
            onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Wallet2 className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Assets Recovery</h3>
            <p className="text-gray-400">Expert assistance for recovering lost or inaccessible assets. Our team works tirelessly to help you regain control of your digital wealth.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Wallet Retification</h3>
            <p className="text-gray-400">Execute trades in milliseconds with our advanced matching engine.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Crosshair className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Claim Issues</h3>
            <p className="text-gray-400">Effortless claims process for your rewards and airdrops. We ensure you receive what you’re entitled to, without delays.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <BookCheck className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Validation</h3>
            <p className="text-gray-400">Secure and accurate transaction verification with cutting-edge blockchain technology. Ensuring your transactions are processed swiftly and without errors.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Synchronize</h3>
            <p className="text-gray-400">Instant wallet synchronization for real-time updates. Stay in sync with the latest blockchain state without missing a beat.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <ArrowDownNarrowWide className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Slippage Issue</h3>
            <p className="text-gray-400">Minimized slippage with precision trading technology. Our system ensures you get the best possible price for your trades.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <CircleDotDashed className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Regulatory Compliance</h3>
            <p className="text-gray-400">Full compliance with global cryptocurrency regulations.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Gift className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Airdrops json error</h3>
            <p className="text-gray-400">Full compliance with global cryptocurrency regulations.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Coins className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Gas Fee Issues</h3>
            <p className="text-gray-400">Full compliance with global cryptocurrency regulations.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <CircleOff className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Bridging</h3>
            <p className="text-gray-400">Bridge your assets across blockchains to unlock greater liquidity and seamless interoperability..</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Boxes className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Wallet Glitch</h3>
            <p className="text-gray-400">Robust wallet technology with glitch-proof performance. We ensure your wallet remains fully functional at all times.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <ArrowLeftRight className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Swapping</h3>
            <p className="text-gray-400">Instantly swap tokens with minimal fees and seize market opportunities effortlessly.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Check className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Validate</h3>
            <p className="text-gray-400">Fast and secure transaction validation using advanced blockchain technology. We ensure your transactions are confirmed quickly and reliably.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Cross className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Asset Recovery</h3>
            <p className="text-gray-400">Quick and efficient recovery of lost assets with expert assistance. We help you regain access to your cryptocurrencies safely and swiftly.</p>
          </div>

          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all"
          onClick={() => navigate('/waitlist')}>
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Wallet2 className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">NFT Issues</h3>
            <p className="text-gray-400">Smooth NFT management with full support for minting and transfers. Our platform ensures your NFT operations are handled without hiccups.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
