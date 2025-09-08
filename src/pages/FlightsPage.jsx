import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FlightCard from '../components/FlightCard';
import Pagination from '../components/Pagination';
import { fetchFlights } from '../Service/api';

const FlightsPage = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allFlights, setAllFlights] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [currentPage, setCurrentPage] = useState(1);
  const flightsPerPage = 9;

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const data = await fetchFlights();
        
        if (data && data.data) {
          setAllFlights(data.data);
          setFlights(data.data);
        } else {
          setAllFlights([]);
          setFlights([]);
        }
      } catch (err) {
        setError("Failed to fetch flight data. Please check your network connection.");
        console.error("API Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };
    
    getData();
  }, []);

  useEffect(() => {
    setCurrentPage(1);
    
    if (searchQuery === '') {
      setFlights(allFlights);
    } else {
      const filteredFlights = allFlights.filter(flight => {
        const query = searchQuery.toLowerCase();
        
        const flightNumber = flight.flight?.iata?.toLowerCase() || '';
        const airlineName = flight.airline?.name?.toLowerCase() || '';
        const departureAirport = flight.departure?.iata?.toLowerCase() || '';
        const arrivalAirport = flight.arrival?.iata?.toLowerCase() || '';
        const scheduledTime = flight.departure?.scheduled?.toLowerCase() || '';

        return (
          flightNumber.includes(query) ||
          airlineName.includes(query) ||
          departureAirport.includes(query) ||
          arrivalAirport.includes(query) ||
          scheduledTime.includes(query)
        );
      });
      setFlights(filteredFlights);
    }
  }, [searchQuery, allFlights]);

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = flights.slice(indexOfFirstFlight, indexOfLastFlight);
  const totalPages = Math.ceil(flights.length / flightsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="bg-slate-100 min-h-screen antialiased text-gray-800 p-4 sm:p-8">
      <Header />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="container mx-auto max-w-5xl">
        {loading && (
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {error && (
          <div className="text-center p-4 bg-red-100 text-red-700 rounded-lg shadow-sm">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentFlights.length > 0 ? (
                currentFlights.map((flight, index) => (
                  <FlightCard key={index} flight={flight} />
                ))
              ) : (
                <div className="text-center md:col-span-2 lg:col-span-3">
                  <p className="text-gray-500 text-lg">No flights found at this time.</p>
                </div>
              )}
            </div>
            
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default FlightsPage;