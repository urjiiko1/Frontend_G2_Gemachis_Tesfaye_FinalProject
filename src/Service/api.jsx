export const fetchFlights = async () => {
  const apiKey = '78246549749afa42cfd8cff9a4cd3c33';
  const apiUrl = `https://api.aviationstack.com/v1/flights?access_key=${apiKey}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
};