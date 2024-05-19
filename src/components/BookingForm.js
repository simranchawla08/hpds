import React, { useState } from 'react';
import dayjs from 'dayjs';
import { addBooking } from '../api/api';

function BookingForm({ availabilities, setBookings }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBooking = { start: dayjs(start).toISOString(), end: dayjs(end).toISOString() };
    const result = await addBooking(newBooking);
    setBookings(prev => [...prev, result]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Start Time:
        <input type="datetime-local" value={start} onChange={(e) => setStart(e.target.value)} />
      </label>
      <label>
        End Time:
        <input type="datetime-local" value={end} onChange={(e) => setEnd(e.target.value)} />
      </label>
      <button type="submit">Book Slot</button>
    </form>
  );
}

export default BookingForm;
