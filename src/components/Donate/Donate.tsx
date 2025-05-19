import React, { useEffect, useState } from 'react';
import { CreditCard } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Donate: React.FC = () => {
  const { isDayMode } = useTheme();
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    // Check if donation parameter exists in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('donated') === 'true') {
      setShowThankYou(true);
      
      // Remove query parameters
      window.history.replaceState({}, document.title, window.location.pathname + '#donate');
    }
  }, []);

  return (
    <div className="section min-h-screen py-10 px-4">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Support Abu Yusuf Alhamdy's Work
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <div className={`p-6 rounded-lg ${
          isDayMode 
            ? 'bg-white/50 shadow-md'
            : 'bg-black/20 shadow-md'
        }`}>
          <p className="text-lg mb-6 leading-relaxed text-center">
            Your support helps me continue creating content and sharing knowledge with the world. 
            Every donation, even just $1, makes a huge difference in keeping this work alive. 
            Thank you for your generosity!
          </p>
          
          <div className="flex justify-center">
            <form 
              action="https://www.paypal.com/donate" 
              method="post" 
              target="_blank"
              className="text-center"
            >
              <input type="hidden" name="business" value="abuyusufalhamdy@gmail.com" />
              <input type="hidden" name="no_recurring" value="0" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="return" value={`${window.location.origin}${window.location.pathname}#donate?donated=true`} />
              
              <button 
                type="submit"
                className={`flex items-center justify-center mx-auto gap-2 py-3 px-6 rounded-lg text-lg font-medium ${
                  isDayMode 
                    ? 'bg-[#005555] hover:bg-[#003f3f] text-white'
                    : 'bg-[#0ff] hover:bg-[#00cc99] text-black'
                } transition-colors`}
              >
                <CreditCard size={20} />
                <span>Donate via PayPal</span>
              </button>
            </form>
          </div>
          
          {showThankYou && (
            <div className={`mt-8 p-4 rounded-lg text-center text-lg font-medium animate-fadeIn ${
              isDayMode
                ? 'bg-white/80 text-[#005555] shadow-[0_0_20px_#005555]'
                : 'bg-black/30 text-[#0ff] shadow-[0_0_20px_#0ff]'
            }`}>
              Thank you for your donation! Your support means the world and helps me continue this journey.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Donate;