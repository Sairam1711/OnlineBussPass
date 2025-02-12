import React from "react";

const BuyBusPass = ({ user, passDetails, paymentMethods }) => {
  return (
    <div className="max-w-md mx-auto  p-6 bg-white rounded-lg shadow-md font-sans">
      <h2 className="text-lg font-semibold mb-4">Buy Bus Pass</h2>

      {/* User Info */}
      <div className="p-4 border rounded-lg mb-4">
        <h4 className="font-semibold">{user.name}</h4>
        <p className="text-gray-500 text-sm">{user.phone}</p>
      </div>

      {/* Pass Details */}
      <div className="p-4 border rounded-lg mb-4">
        <h3 className="font-semibold">{passDetails.title}</h3>
        <p className="text-gray-500 text-sm">{passDetails.description}</p>
        <p className="text-lg font-bold mt-2">₹{passDetails.price}</p>
      </div>

      {/* Payment Methods */}
      <h3 className="text-md font-semibold mb-2">Select Payment Method</h3>
      <div className="space-y-2">
        {paymentMethods.map((method, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 border rounded-lg cursor-pointer"
          >
            <span>{method}</span>
            <span className="text-gray-400">➡️</span>
          </div>
        ))}
      </div>

      {/* Buy Button */}
      <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg">
        Buy Pass
      </button>
    </div>
  );
};

export default BuyBusPass;
