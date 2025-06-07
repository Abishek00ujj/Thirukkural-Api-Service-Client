import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Languages, Sparkle } from 'lucide-react'; // Icons for Feature Cards

// Reusable Button component (adapted from the movie demo)
const Button = ({ children, className, onClick }) => (
  <button
    className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 ease-in-out transform ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

// Reusable FeatureCard component (adapted from the movie demo)
const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-md border border-white/10 text-left">
      {icon}
      <h2 className="text-xl font-semibold mb-1 text-white">{title}</h2>
      <p className="text-gray-300 text-sm">{desc}</p>
    </div>
  );
};

// KuralCard component to display a single Thirukural elegantly
const KuralCard = ({ kural }) => {
  if (!kural) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="max-w-xl mx-auto bg-gradient-to-br from-indigo-700 to-purple-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out border border-indigo-500"
    >
      <div className="text-center text-white mb-6">
        <span className="inline-block bg-white text-indigo-700 font-bold px-4 py-2 rounded-full text-lg mb-4 shadow-lg">
          Kural {kural.Number}
        </span>
        <p className="text-2xl sm:text-3xl font-semibold leading-relaxed text-gray-50">
          {kural.Line1}
        </p>
        <p className="text-2xl sm:text-3xl font-semibold leading-relaxed mt-2 text-gray-50">
          {kural.Line2}
        </p>
      </div>
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-30">
        <h3 className="text-lg font-bold text-white mb-2">English Translation:</h3>
        <p className="text-white text-md mb-4 leading-relaxed font-light">
          {kural.Translation}
        </p>
        <h3 className="text-lg font-bold text-white mb-2">Tamil Explanations:</h3>
        <p className="text-white text-md leading-relaxed font-light">
          <span className="font-semibold">மு.வ (Mu.Va):</span> {kural.mv}
        </p>
        <p className="text-white text-md leading-relaxed font-light mt-2">
          <span className="font-semibold">சாலமன் பாப்பையா (SP):</span> {kural.sp}
        </p>
        <p className="text-white text-md leading-relaxed font-light mt-2">
          <span className="font-semibold">கலைஞர் (MK):</span> {kural.mk}
        </p>
        <p className="text-white text-md mt-4 font-light italic">
          (Transliteration: {kural.transliteration1}, {kural.transliteration2})
        </p>
      </div>
    </motion.div>
  );
};
export default Button;