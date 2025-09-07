export const FetchFlights = async (apikey) =>{
    const apiUrl =`https://api.aviationstack.com/v1/flights?access_key=${apiKey}`;

    try {
        const res = await fetch(apiUrl)
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        return data;
    }
    catch (error) {
        console.error("Error fetching flight data:", error);
        throw error;
    }
};