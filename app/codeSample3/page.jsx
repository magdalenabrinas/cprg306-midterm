"use client";

import React, { useState } from 'react';

const CodeSample3 = () => {
  const [secretCode, setSecretCode] = useState(null);
  const [error, setError] = useState(null);
  const passcode = "ehen2rfow"; // Static passcode for the API request

  const fetchSecretCode = async () => {
    try {
      const response = await fetch(`https://webdev2-class-demo.vercel.app/api/sampleReqs/${passcode}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (data && data.secretCode) {
        setSecretCode(data.secretCode);
        setError(null); // Reset error state
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error fetching secret code:', error);
      setError('Failed to fetch secret code');
      setSecretCode(null); // Clear secretCode if fetch fails
    }
  };

  return (
    <div className="h-screen bg-white p-2 text-black">
      <h1 className="pb-2 text-blue-600">Code sample 3: Making an API Call</h1>
      <div className="p-2 text-sm text-gray-600">
        <p className="pb-2">
          Create a function that calls the following URL
          https://webdev2-class-demo.vercel.app/api/sampleReqs/. The function
          should be called on the click of the button below. This call is a GET
          request and it requires a passcode as part of the URL for it to work.
        </p>
        <p>
          This passcode is: "ehen2rfow". It is to be appended to the URL. The
          response from this call will contain a JSON with a single field called
          "secretCode". This is the answer to your question.{" "}
        </p>
      </div>

      <div className="p-4">
        <button onClick={fetchSecretCode} className="bg-red-300 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
          Fetch Secret Code
        </button>
        {error && <p className="text-red-600 mt-2">{error}</p>}
        {secretCode && (
          <div className="mt-4">
            <h3 className="font-bold">Secret Code:</h3>
            <p>{secretCode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeSample3;
