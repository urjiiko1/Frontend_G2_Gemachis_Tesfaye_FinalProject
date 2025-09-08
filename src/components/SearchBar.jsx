import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <section className="container mx-auto max-w-xl mb-8">
      <div className="flex items-center space-x-2">
        <input 
          type="text"
          placeholder="Search by flight number, airline, route or time..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-grow p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
      </div>
    </section>
  );
}
