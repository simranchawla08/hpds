import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const fetchAvailabilities = async () => {
  const response = await axios.get(`${API_URL}/availabilities`);
  return response.data;
};

export const addAvailability = async (availability) => {
  const response = await axios.post(`${API_URL}/availabilities`, availability);
  return response.data;
};

export const fetchBookings = async () => {
  const response = await axios.get(`${API_URL}/bookings`);
  return response.data;
};

export const addBooking = async (booking) => {
  const response = await axios.post(`${API_URL}/bookings`, booking);
  return response.data;
};

export const deleteBooking = async (id) => {
  const response = await axios.delete(`${API_URL}/bookings/${id}`);
  return response.data;
};

// New function to fetch data from the external API
export const checkServerStatus = async () => {
  const options = {
    method: 'GET',
    url: 'https://sky-scrapper.p.rapidapi.com/api/v1/checkServer',
    headers: {
      'X-RapidAPI-Key': '1a86c0f26amsh18565ff34bbec4ap1842cbjsn84fe4d900607',
      'X-RapidAPI-Host': 'sky-scrapper.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
