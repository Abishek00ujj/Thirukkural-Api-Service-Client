import React from 'react';
// You'll need to import the icons (like BookOpen, Languages, Sparkle)
// in the file where FeatureCard is used, typically App.jsx or HomePage.jsx,
// not directly within FeatureCard.jsx itself, as they are passed as props.

// Reusable FeatureCard component
const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 text-left">
      {icon}
      <h2 className="text-xl font-semibold mb-1 text-white">{title}</h2>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
};

export default FeatureCard; // Exporting as a default export
