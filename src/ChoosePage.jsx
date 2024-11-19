import React from 'react';
import { Link } from 'react-router-dom';

const ChoosePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8">Choose Detection Method</h2>
      <div className="flex space-x-8">
        <Link
          to="/image-detection"
          className="px-8 py-4 bg-blue-500 rounded-lg hover:bg-blue-400 transition duration-300"
        >
          Image Detection
        </Link>
        <Link
          to="/voice-detection"
          className="px-8 py-4 bg-green-500 rounded-lg hover:bg-green-400 transition duration-300"
        >
          Voice Detection
        </Link>
      </div>
    </div>
  );
};

export default ChoosePage;
