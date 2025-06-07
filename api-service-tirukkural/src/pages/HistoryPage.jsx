import React from "react";

const HistoryPage = () => (
  <div className="space-y-12">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-6">
        History of Thirukural
      </h1>
      <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
        Discover the rich heritage and timeless wisdom of one of the world's greatest literary works
      </p>
    </div>
    
    {/* YouTube Video Section */}
    <div className="flex justify-center">
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-xl">
        <div className="aspect-[9/16] w-80 mx-auto">
          <iframe
            src="https://www.youtube.com/embed/RxhFalnMr8M?autoplay=1&loop=1&playlist=RxhFalnMr8M"
            title="Thirukural History Video"
            className="w-full h-full rounded-2xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">
        <h3 className="text-2xl font-bold text-blue-400 mb-4">About Thiruvalluvar</h3>
        <p className="text-gray-300 leading-relaxed">
          Thiruvalluvar was a celebrated Tamil poet and philosopher who lived between the 3rd century BCE and 1st century CE. 
          His masterwork, the Thirukural, consists of 1,330 couplets organized into 133 chapters.
        </p>
      </div>
      
      <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-xl">
        <h3 className="text-2xl font-bold text-purple-400 mb-4">Universal Wisdom</h3>
        <p className="text-gray-300 leading-relaxed">
          The Thirukural covers three main themes: virtue (aram), wealth (porul), and love (inbam). 
          Its teachings transcend time and culture, offering guidance for righteous living.
        </p>
      </div>
    </div>
  </div>
);

export default HistoryPage;