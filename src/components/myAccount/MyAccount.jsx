import React from "react";

const MyAccount = ({ user, menuItems }) => {
  return (
    <div className="w-[90vw] mx-auto p-4 bg-white rounded-lg shadow-md font-sans">
      <h2 className="text-lg font-semibold mb-4">My Account</h2>
      
      <div className="flex items-center p-3 border rounded-lg cursor-pointer mb-4">
        <img src={user.image} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
        <div className="flex-1">
          <h4 className="font-semibold text-sm">{user.name}</h4>
          <p className="text-xs text-gray-500">{user.phone}</p>
        </div>
        <span className="text-gray-400">➡️</span>
      </div>
      
      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 border rounded-lg cursor-pointer"
          >
            <span className="text-sm">{item}</span>
            <span className="text-gray-400">➡️</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAccount;
