import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function MyCalendar({ availabilities, bookings }) {
  const events = [
    ...availabilities.map(a => ({
      title: 'Available',
      start: new Date(a.start),
      end: new Date(a.end),
      allDay: false,
    })),
    ...bookings.map(b => ({
      title: 'Booked',
      start: new Date(b.start),
      end: new Date(b.end),
      allDay: false,
    })),
  ];

  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default MyCalendar;
