import React, { useState } from 'react';
import CalendarComponent from './components/Calendar';
import EventForm from './components/EventForm';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  const addEvent = (eventData) => {
    setEvents([...events, { date: date, name: eventData.name, time: eventData.time }]);
  };

  const removeEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div className='app'>
      <h1 className='text-center'>Event Calendar</h1>
      <div className='calendar-container'>
        <CalendarComponent date={date} setDate={setDate} events={events} setEvents={setEvents} />
        <EventForm onSubmit={addEvent} events={events} removeEvent={removeEvent} currentDate={date} />

      </div>
    </div>
  );
}

export default App;