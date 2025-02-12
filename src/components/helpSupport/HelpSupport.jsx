import React from "react";

const HelpSupport = ({ language, topics }) => {
  return (
    <div className="w-[90vw] mx-5 p-4 bg-white rounded-lg shadow-md font-sans h-[90vh] flex flex-col justify-around">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Help & Support</h2>
        <button className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm flex items-center">
          {language} <span className="ml-1">▼</span>
        </button>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center p-3 border rounded-lg cursor-pointer">
          <span className="mr-2">⚙️</span>
          <span className="text-sm">View all issues</span>
        </div>
        <div className="flex items-center p-3 border rounded-lg cursor-pointer">
          <span className="mr-2">🎟️</span>
          <span className="text-sm">View all bookings</span>
        </div>
      </div>

      <h3 className="mt-4 text-md font-semibold">Other Topics</h3>
      <div className="space-y-3 mt-2">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-center p-3 border rounded-lg cursor-pointer"
          >
            <span className="mr-3 text-orange-500 text-xl">{topic.icon}</span>
            <div>
              <h4 className="font-semibold text-sm">{topic.title}</h4>
              <p className="text-xs text-gray-500">{topic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpSupport;
