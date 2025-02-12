import { QRCodeSVG } from "qrcode.react";
import React from "react";


const MTCBusPass = ({ user, passDetails }) => {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg font-sans text-center">
      {/* Pass Header */}
      <h2 className="text-lg font-semibold mb-4">MTC Bus Pass</h2>

      {/* User Info */}
      <div className="p-4 border rounded-lg mb-4 text-left">
        <h4 className="font-semibold">{user.name}</h4>
        <p className="text-gray-500 text-sm">{user.phone}</p>
      </div>

      {/* Pass Details */}
      <div className="p-4 border rounded-lg mb-4 text-left">
        <h3 className="font-semibold">{passDetails.title}</h3>
        <p className="text-gray-500 text-sm">{passDetails.description}</p>
        <p className="text-lg font-bold mt-2">₹{passDetails.price}</p>
        <p className="text-sm text-gray-600">Valid Till: {passDetails.expiry}</p>
      </div>

      {/* QR Code */}
      <div className="flex justify-center mt-4">
        <QRCodeSVG value={JSON.stringify(passDetails)} size={150} />
      </div>

      {/* Footer */}
      <p className="text-sm text-gray-500 mt-4">Show this QR code for verification</p>
    </div>
  );
};

export default MTCBusPass;
