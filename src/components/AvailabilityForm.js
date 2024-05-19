import React, { useState } from 'react';
import dayjs from 'dayjs';
import { addAvailability } from '../api/api';

function AvailabilityForm({ setAvailabilities }) {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAvailability = { start: dayjs(start).toISOString(), end: dayjs(end).toISOString() };
    const result = await addAvailability(newAvailability);
    setAvailabilities(prev => [...prev, result]);
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
      <button type="submit">Add Availability</button>
    </form>
  );
}

export default AvailabilityForm;
