import React from 'react';

const FlightCard = ({ flight }) => {
  const renderStatusBadge = (status) => {
    let colorClass = '';
    switch(status) {
      case 'active':
        colorClass = 'bg-green-500';
        break;
      case 'scheduled':
        colorClass = 'bg-blue-500';
        break;
      case 'landed':
        colorClass = 'bg-gray-500';
        break;
      case 'cancelled':
        colorClass = 'bg-red-500';
        break;
      default:
        colorClass = 'bg-gray-400';
    }
    return (
      <span className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${colorClass}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between transform hover:-translate-y-1">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-blue-700">{flight.flight?.iata}</h2>
        {renderStatusBadge(flight.flight_status)}
      </div>
      <div className="space-y-2 text-gray-600">
        <p>
          <span className="font-semibold text-gray-800">Airline:</span> {flight.airline?.name}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Route:</span> {flight.departure?.iata} <span className="font-mono text-xs">✈️</span> {flight.arrival?.iata}
        </p>
        <p>
          <span className="font-semibold text-gray-800">Departure Time:</span> {flight.departure?.scheduled}
        </p>
      </div>
    </div>
  );
};

export default FlightCard;