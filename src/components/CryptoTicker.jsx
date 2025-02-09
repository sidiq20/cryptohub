import React, { useState, useEffect } from 'react';
import { Bitcoin, Coins, Gem } from 'lucide-react';

const fallbackData = [
  { name: 'Bitcoin', symbol: 'BTC', price: '45,000.00', change: '+2.5%', icon: Bitcoin },
  { name: 'Ethereum', symbol: 'ETH', price: '2,800.00', change: '+1.8%', icon: Coins },
  { name: 'BNB', symbol: 'BNB', price: '320.00', change: '+1.2%', icon: Gem },
  { name: 'Solana', symbol: 'SOL', price: '98.00', change: '+3.5%', icon: Coins },
  { name: 'XRP', symbol: 'XRP', price: '0.55', change: '+0.8%', icon: Coins },
  { name: 'Dogecoin', symbol: 'DOGE', price: '0.30', change: '+1.0%', icon: Coins },
  { name: 'Cardano', symbol: 'ADA', price: '1.20', change: '+2.1%', icon: Coins }
];

const cryptoIds = 'bitcoin,ethereum,binancecoin,solana,ripple,dogecoin,cardano';

function CryptoTicker() {
  const [cryptoData, setCryptoData] = useState(fallbackData);
  const [isPaused, setIsPaused] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let retryCount = 0;
    const maxRetries = 3;
    const retryDelay = 10000;
    let lastFetchTime = 0;
    const minFetchInterval = 10000;

    const fetchData = async () => {
      const now = Date.now();
      if (now - lastFetchTime < minFetchInterval) {
        return;
      }

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${cryptoIds}&vs_currencies=usd&include_24h_change=true`,
          {
            signal: controller.signal,
            headers: {
              'Accept': 'application/json',
              'Cache-Control': 'no-cache'
            }
          }
        );

        clearTimeout(timeoutId);

        if (!response.ok) {
          if (response.status === 429) {
            throw new Error('Rate limit exceeded. Using fallback data.');
          }
          throw new Error(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        lastFetchTime = Date.now();

        if (!isMounted) return;

        const formattedData = [
          {
            name: 'Bitcoin',
            symbol: 'BTC',
            price: data.bitcoin?.usd?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || fallbackData[0].price,
            change: data.bitcoin?.usd_24h_change ? `${data.bitcoin.usd_24h_change.toFixed(2)}%` : fallbackData[0].change,
            icon: Bitcoin
          },
          {
            name: 'Ethereum',
            symbol: 'ETH',
            price: data.ethereum?.usd?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || fallbackData[1].price,
            change: data.ethereum?.usd_24h_change ? `${data.ethereum.usd_24h_change.toFixed(2)}%` : fallbackData[1].change,
            icon: Coins
          },
          {
            name: 'BNB',
            symbol: 'BNB',
            price: data.binancecoin?.usd?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || fallbackData[2].price,
            change: data.binancecoin?.usd_24h_change ? `${data.binancecoin.usd_24h_change.toFixed(2)}%` : fallbackData[2].change,
            icon: Gem
          },
          {
            name: 'Solana',
            symbol: 'SOL',
            price: data.solana?.usd?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || fallbackData[3].price,
            change: data.solana?.usd_24h_change ? `${data.solana.usd_24h_change.toFixed(2)}%` : fallbackData[3].change,
            icon: Coins
          },
          {
            name: 'XRP',
            symbol: 'XRP',
            price: data.ripple?.usd?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || fallbackData[4].price,
            change: data.ripple?.usd_24h_change ? `${data.ripple.usd_24h_change.toFixed(2)}%` : fallbackData[4].change,
            icon: Coins
          },
          {
            name: 'Dogecoin',
            symbol: 'DOGE',
            price: data.dogecoin?.usd?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || fallbackData[5].price,
            change: data.dogecoin?.usd_24h_change ? `${data.dogecoin.usd_24h_change.toFixed(2)}%` : fallbackData[5].change,
            icon: Coins
          },
          {
            name: 'Cardano',
            symbol: 'ADA',
            price: data.cardano?.usd?.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) || fallbackData[6].price,
            change: data.cardano?.usd_24h_change ? `${data.cardano.usd_24h_change.toFixed(2)}%` : fallbackData[6].change,
            icon: Coins
          }
        ];

        setCryptoData(formattedData);
        setError(null);
        retryCount = 0;
      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn('Request timed out, using fallback data');
          return;
        }

        console.warn('Error fetching crypto data:', error.message);
        setError(error.message);

        if (retryCount < maxRetries) {
          retryCount++;
          setTimeout(fetchData, retryDelay * retryCount);
        }
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className="bg-gray-800/50 backdrop-blur-sm py-3 border-y border-gray-700"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto flex justify-center overflow-hidden">
        <div className={`flex space-x-12 ${!isPaused ? 'animate-scroll' : ''}`}>
          {cryptoData.map((crypto, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm whitespace-nowrap">
              <crypto.icon className="w-5 h-5 text-[#00ff94]" />
              <span className="font-space">{crypto.symbol}</span>
              <span className="text-gray-300">${crypto.price}</span>
              <span className={crypto.change.startsWith('-') ? 'text-red-500' : 'text-[#00ff94]'}>
                {crypto.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CryptoTicker;
