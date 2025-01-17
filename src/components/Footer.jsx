import React from 'react';
import { Gem, Twitter, Github, MessageSquare } from 'lucide-react';
import CryptoHubLogo from '../assets/CryptoHub.svg';

function Footer() {
  return (
    <footer className="bg-gray-800/20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src={CryptoHubLogo} alt="Logo" className="w-8 h-8" />
              <span className="text-2xl font-space font-bold">CryptoHubs</span>
            </div>
            <p className="text-gray-400">
              The future of decentralized trading is here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-space mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Exchange</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Wallet</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-space mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">News</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-space mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#00ff94] transition-colors">Legal</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CryptoHubs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;