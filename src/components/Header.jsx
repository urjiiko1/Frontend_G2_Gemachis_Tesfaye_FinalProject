import React from 'react';

const Header = () => {
  return (
    <header className="text-center py-8">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800 tracking-tight">
        Flight Tracker
      </h1>
      <p className="mt-2 text-lg sm:text-xl text-gray-600">
        Real-time flight data at your fingertips.
      </p>
    </header>
  );
};

export default Header;