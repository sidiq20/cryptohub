import React from 'react';
import { Shield, Globe2, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function AboutSection() {
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
      id="about"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-space font-bold text-center mb-16">
          About <span className="gradient-text">CryptoHub</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Secure Platform</h3>
            <p className="text-gray-400">Built with industry-leading security measures to protect your assets.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Globe2 className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Global Access</h3>
            <p className="text-gray-400">Trade from anywhere in the world with our globally distributed infrastructure.</p>
          </div>
          
          <div className="p-8 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-[#00ff94] transition-all">
            <div className="w-12 h-12 bg-[#00ff94]/20 rounded-full flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-[#00ff94]" />
            </div>
            <h3 className="text-xl font-space mb-4">Innovation First</h3>
            <p className="text-gray-400">Constantly evolving with the latest blockchain technologies and features.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;