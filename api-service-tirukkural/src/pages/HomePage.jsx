import React, { useState, useRef, useEffect } from "react";

// Mock Button component
const Button = ({ children, className, onClick, ...props }) => (
  <button className={className} onClick={onClick} {...props}>
    {children}
  </button>
);

// Copy Button Component
const CopyButton = ({ textToCopy, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`ml-2 px-3 py-1 text-xs bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-md transition-all duration-200 ${className}`}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
};

// Mock HomePage component
const HomePage = ({ sampleApiData, sampleKural, activeTab, setActiveTab, renderCodeSnippet, apiBoxRef, scrollToApi }) => (
  <div className="space-y-16">
    {/* Hero Section */}
    <div className="text-center space-y-8">
      <div className="flex flex-col items-center space-y-6">
        <img 
          src=".\src\assets\tiruvalluvar.webp" 
          alt="Thiruvalluvar" 
          className="w-[50%] h-[50%] md:w-50 md:h-50 rounded-full object-cover border-4 border-gradient-to-r from-blue-400 to-purple-400 shadow-2xl"
        />
        <div className="relative">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Thirukural API
          </h1>
          <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
        </div>
      </div>
      
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Access the timeless wisdom of <span className="text-blue-400 font-semibold">Thiruvalluvar</span> through our modern API
      </p>
      
      <div className="flex justify-center">
        <button 
          onClick={scrollToApi}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Get Started
        </button>
      </div>
    </div>

    {/* Sample Kural Display */}
    {sampleKural && (
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          Featured Kural
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="text-center space-y-4">
            <div className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-bold text-lg">
              Kural {sampleKural.Number}
            </div>
            <div className="text-sm min-lg:text-2xl font-bold text-gray-100 leading-relaxed space-y-2 flex flex-col">
                <div>
              <p className="flex">{sampleKural.Line1}</p>
              <p className="flex">{sampleKural.Line2}</p>
                </div>
              <div className="w-full flex justify-end">
                -திருவள்ளுவர்
              </div>
            </div>
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <p className="text-gray-300 text-lg italic">"{sampleKural.Translation}"</p>
            </div>
          </div>
        </div>
      </div>
    )}

    {/* API Usage Section */}
    <div ref={apiBoxRef} className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-2xl">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
        API Endpoints
      </h2>
      
      {/* API Documentation */}
      <div className="mb-8 space-y-6">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
          <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            Base URL
          </h3>
          <div className="flex items-center">
            <code className="text-green-400 text-lg bg-gray-900/50 px-4 py-2 rounded-lg flex-1">
              https://thirukural-api-spring-1.onrender.com
            </code>
            <CopyButton textToCopy="https://thirukural-api-spring-1.onrender.com" />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
              Get All Kurals
            </h3>
            <div className="flex items-center">
              <code className="text-green-400 bg-gray-900/50 px-3 py-2 rounded text-sm flex-1">
                GET /api/v1/
              </code>
              <CopyButton textToCopy="https://thirukural-api-spring-1.onrender.com/api/v1/" />
            </div>
            <p className="text-gray-400 text-sm mt-2">Fetch all 1330 Thirukural verses</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-bold text-pink-400 mb-3 flex items-center">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-3"></span>
              Get Specific Kural
            </h3>
            <div className="flex items-center">
              <code className="text-green-400 bg-gray-900/50 px-3 py-2 rounded text-sm flex-1">
                GET /api/v1/{'{kuralNumber}'}
              </code>
              <CopyButton textToCopy="https://thirukural-api-spring-1.onrender.com/api/v1/1" />
            </div>
            <p className="text-gray-400 text-sm mt-2">Fetch a specific kural (1-1330)</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-center mb-6 text-white">
        Code Examples
      </h3>
      
      {/* Language Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.keys({
          "Node.js": true,
          Java: true,
          Python: true,
          Go: true,
          PHP: true
        }).map((lang) => (
          <button
            key={lang}
            onClick={() => setActiveTab(lang)}
            className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === lang
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
      
      {renderCodeSnippet()}
    </div>
  </div>
);

export default HomePage;