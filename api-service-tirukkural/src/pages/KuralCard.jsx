import React, { useState } from 'react';

/**
 * KuralCard Component
 * A modern, responsive card displaying Thirukural with enhanced visual design
 * Features: Expandable explanations, glass morphism effects, smooth animations
 */
const KuralCard = ({ kural }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!kural) return null;

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6">
      {/* Main Card Container */}
      <div className="relative bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
        
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-600 opacity-70"></div>
        
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full -translate-y-16 translate-x-16 opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-400 to-cyan-400 rounded-full translate-y-12 -translate-x-12 opacity-20"></div>
        
        <div className="relative z-10 p-6 sm:p-8 lg:p-10">
          
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full shadow-lg mb-4 transform hover:rotate-12 transition-transform duration-300">
              <span className="text-white font-bold text-xl sm:text-2xl">
                {kural.Number}
              </span>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-sm font-medium text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
                திருக்குறள் • Thirukural
              </h2>
            </div>
          </div>

          {/* Tamil Verses */}
          <div className="text-center mb-8 space-y-3">
            <div className="bg-white/60 dark:bg-gray-700/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed mb-2 font-serif">
                {kural.Line1}
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-relaxed font-serif">
                {kural.Line2}
              </p>
              
              {/* Transliteration - shown on larger screens */}
              <div className="hidden sm:block mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  {kural.transliteration1}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                  {kural.transliteration2}
                </p>
              </div>
            </div>
          </div>

          {/* English Translation */}
          <div className="mb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-xl p-6 border-l-4 border-indigo-500">
              <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                English Translation
              </h3>
              <p className="text-gray-700 dark:text-gray-200 text-base sm:text-lg leading-relaxed font-medium">
                {kural.Translation}
              </p>
            </div>
          </div>

          {/* Expandable Tamil Explanations */}
          <div className="space-y-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-purple-200 dark:border-gray-500 hover:shadow-md transition-all duration-300 group"
            >
              <span className="text-lg font-semibold text-purple-700 dark:text-purple-300">
                Tamil Explanations
              </span>
              <svg 
                className={`w-6 h-6 text-purple-600 dark:text-purple-400 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Expandable Content */}
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="space-y-4 pt-2">
                
                {/* மு.வ Explanation */}
                <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                    மு.வ (Mu.Va)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {kural.mv}
                  </p>
                </div>

                {/* சாலமன் பாப்பையா Explanation */}
                <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                    சாலமன் பாப்பையா (SP)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {kural.sp}
                  </p>
                </div>

                {/* கலைஞர் Explanation */}
                <div className="bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm rounded-xl p-5 border border-gray-200 dark:border-gray-600">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2 flex items-center">
                    <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                    கலைஞர் (MK)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                    {kural.mk}
                  </p>
                </div>

                {/* Transliteration for mobile */}
                <div className="sm:hidden bg-gray-50 dark:bg-gray-600 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Transliteration:</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    {kural.transliteration1}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                    {kural.transliteration2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-600">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>Thiruvalluvar's wisdom</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                </button>
                <button className="p-2 text-gray-400 hover:text-red-500 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuralCard;