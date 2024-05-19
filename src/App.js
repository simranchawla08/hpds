import React, { useState, useEffect } from 'react';
import Calendar from './components/Calendar';
import AvailabilityForm from './components/AvailabilityForm';
import BookingForm from './components/BookingForm';
import { fetchAvailabilities, fetchBookings, checkServerStatus } from './api/api';

function App() {
  const [availabilities, setAvailabilities] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [serverStatus, setServerStatus] = useState(null);

  useEffect(() => {
    fetchAvailabilities().then(data => setAvailabilities(data));
    fetchBookings().then(data => setBookings(data));
  }, []);

  const handleCheckServerStatus = async () => {
    try {
      const status = await checkServerStatus();
      setServerStatus(status);
    } catch (error) {
      setServerStatus('Error fetching server status');
    }
  };

  return (
    <div className="App">
      <h1>Scheduling and Booking Application</h1>
      <AvailabilityForm setAvailabilities={setAvailabilities} />
      <BookingForm availabilities={availabilities} setBookings={setBookings} />
      <Calendar availabilities={availabilities} bookings={bookings} />
      
      <button onClick={handleCheckServerStatus}>Check Server Status</button>
      {serverStatus && <p>Server Status: {JSON.stringify(serverStatus)}</p>}
    </div>
  );
}

export default App;
