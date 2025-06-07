import { useState,useRef,useEffect   } from "react";
import React from "react";
import Button from "./Button";
import HomePage from './HomePage'
import HistoryPage from "./HistoryPage";
const Home = () => {
  const [sampleKural, setSampleKural] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');

  const sampleApiData = {
    Number: 1,
    Line1: "அகர முதல எழுத்தெல்லாம் ஆதி",
    Line2: "பகவன் முதற்றே உலகு.",
    Translation: "'A' leads letters; the Ancient Lord Leads and lords the entire world",
    mv: "எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.",
    sp: "எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.",
    mk: "அகரம் எழுத்துக்களுக்கு முதன்மை; ஆதிபகவன், உலகில் வாழும் உயிர்களுக்கு முதன்மை",
    explanation: "As the letter A is the first of all letters, so the eternal God is first in the world",
    couplet: "A, as its first of letters, every speech maintains;The \"Primal Deity\" is first through all the world's domains",
    transliteration1: "Akara Mudhala Ezhuththellaam Aadhi",
    transliteration2: "Pakavan Mudhatre Ulaku"
  };

  const apiBoxRef = useRef(null);
  const [activeTab, setActiveTab] = useState('Node.js');

  const usageSnippets = {
    "Node.js": `// Get all kurals
fetch('https://thirukural-api-spring-1.onrender.com/api/v1/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Get specific kural (example: kural 1)
fetch('https://thirukural-api-spring-1.onrender.com/api/v1/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));`,
    Java: `// Using Java with HttpClient (Java 11+)
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

public class ThirukuralApiClient {
    public static void main(String[] args) {
        HttpClient client = HttpClient.newHttpClient();
        
        // Get specific kural
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://thirukural-api-spring-1.onrender.com/api/v1/1"))
                .build();

        client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                .thenApply(HttpResponse::body)
                .thenAccept(System.out::println)
                .join();
    }
}`,
    Python: `import requests

# Get all kurals
response = requests.get("https://thirukural-api-spring-1.onrender.com/api/v1/")
if response.status_code == 200:
    all_kurals = response.json()
    print(all_kurals)

# Get specific kural (example: kural 1)
response = requests.get("https://thirukural-api-spring-1.onrender.com/api/v1/1")
if response.status_code == 200:
    kural = response.json()
    print(kural)
else:
    print(f"Error: {response.status_code}")`,
    Go: `package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	// Get specific kural
	url := "https://thirukural-api-spring-1.onrender.com/api/v1/1"
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println("Error fetching data:", err)
		return
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}

	fmt.Println(string(body))
}`,
    PHP: `<?php
// Get all kurals
$all_kurals_url = "https://thirukural-api-spring-1.onrender.com/api/v1/";
$all_response = file_get_contents($all_kurals_url);

if ($all_response !== FALSE) {
    echo "All Kurals: " . $all_response . "\\n";
}

// Get specific kural
$specific_url = "https://thirukural-api-spring-1.onrender.com/api/v1/1";
$specific_response = file_get_contents($specific_url);

if ($specific_response !== FALSE) {
    echo "Specific Kural: " . $specific_response;
} else {
    echo "Error fetching data.";
}
?>`
  };

  useEffect(() => {
    setSampleKural(sampleApiData);
  }, []);

  // Scroll to API section function
  const scrollToApi = () => {
    apiBoxRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const renderCodeSnippet = () => {
    return (
      <div className="relative group">
        <pre className="bg-gray-900/80 backdrop-blur-sm text-green-400 p-6 rounded-2xl overflow-auto whitespace-pre-wrap max-h-80 font-mono text-sm border border-gray-700 shadow-xl">
          {usageSnippets[activeTab]}
        </pre>
        <button
          onClick={() => {
            const textarea = document.createElement('textarea');
            textarea.value = usageSnippets[activeTab];
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            // Visual feedback
            const btn = document.querySelector('.copy-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Copied!';
            btn.classList.add('bg-green-600');
            setTimeout(() => {
              btn.textContent = originalText;
              btn.classList.remove('bg-green-600');
            }, 2000);
          }}
          className="copy-btn absolute top-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-all duration-300 shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
          aria-label="Copy code snippet"
        >
          Copy Code
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '60s'}}></div>
      </div>

      <div className="relative z-10 flex flex-col items-center p-6 font-sans">
        <div className="max-w-7xl w-full">
          {/* Enhanced Navigation */}
          <nav className="mb-16 py-6">
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-xl rounded-full p-2 shadow-2xl border border-white/20">
                <div className="flex gap-2">
                  <Button
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      currentPage === 'home' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentPage('home')}
                  >
                    🏠 Home
                  </Button>
                  <Button
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      currentPage === 'history' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                    onClick={() => setCurrentPage('history')}
                  >
                    📚 History
                  </Button>
                </div>
              </div>
            </div>
          </nav>

          {/* Page Content with Smooth Transitions */}
          <div className="transition-all duration-500 ease-in-out">
            {currentPage === 'home' ? (
              <HomePage
                sampleApiData={sampleApiData}
                sampleKural={sampleKural}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                renderCodeSnippet={renderCodeSnippet}
                apiBoxRef={apiBoxRef}
                scrollToApi={scrollToApi}
              />
            ) : (
              <HistoryPage />
            )}
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="mt-20 pt-12 border-t border-white/20 text-center max-w-7xl w-full">
          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-3 gap-8 text-sm">
              <div>
                <h4 className="font-bold text-blue-400 mb-3">Thirukural API</h4>
                <p className="text-gray-400">
                  Bringing ancient wisdom to modern applications
                </p>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 mb-3">Built with</h4>
                <p className="text-gray-400">
                  ❤️ Love, Respect, and the wisdom of Thirukural
                </p>
              </div>
              <div>
                <h4 className="font-bold text-pink-400 mb-3">Services provided by</h4>
                <p className="text-gray-400">
                  Abishek
                </p>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-gray-500">
                &copy; {new Date().getFullYear()} Thirukural API. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
