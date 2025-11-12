import { useEffect, useRef } from 'react';
import './MarketTrends.css';

const MarketTrends = ({ className = '' }) => {
  const widgetContainerRef = useRef(null);

  useEffect(() => {
    const loadWidget = () => {
      const baseUrl = "https://widgets.cryptocompare.com/";
      const scripts = document.getElementsByTagName("script");
      const embedder = scripts[scripts.length - 1];

      (function () {
        const appName = encodeURIComponent(window.location.hostname || "local");
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        const theUrl = baseUrl + 'serve/v3/coin/chart?fsym=BTC&tsyms=USD,EUR,GBP';
        s.src = theUrl + (theUrl.indexOf("?") >= 0 ? "&" : "?") + "app=" + appName;

        if (widgetContainerRef.current) {
          widgetContainerRef.current.innerHTML = '';
          widgetContainerRef.current.appendChild(s);
        }
      })();
    };

    loadWidget();

    return () => {
      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <section className={`bg-gray-50 py-6 lg:py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 lg:mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#1A1A37] mb-4">
            Current Market Trends
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track real-time cryptocurrency market movements with our interactive charts
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div
            ref={widgetContainerRef}
            className="w-full min-h-[600px] flex items-center justify-center p-4"
          >
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="text-gray-600">Loading market data...</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Data provided by CryptoCompare • Updates in real-time
          </p>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;
