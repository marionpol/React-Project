import React, { useState } from 'react';
import './EventForm.css';

function EventForm({ onSubmit, events, removeEvent }) {
    const [eventName, setEventName] = useState('');
    const [eventTime, setEventTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name: eventName, time: eventTime });
        setEventName('');
        setEventTime('');
    };

    return (
        <div className='event-form'>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
                    <input
                        type="text"
                        placeholder="Event Name"
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                    />
                    <CustomTimeInput
                        value={eventTime}
                        onChange={setEventTime}
                    />
                </div>
                <button type="submit">Add Event</button>
            </form>
            <div>
                {events.map((event, index) => (
                    <div key={index} className='event-item'>
                        <p>{event.name} - {event.time}</p>
                        <p>Date: {event.date.toDateString()}</p>
                        <button onClick={() => removeEvent(index)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
}


function CustomTimeInput({ value, onChange }) {
    return (
        <div className="custom-time-input">
            <select
                className="event-form-select"
                value={value.split(':')[0]}
                onChange={(e) => onChange(e.target.value.padStart(2, '0') + ':' + value.split(':')[1])}
            >
                {Array.from(Array(24).keys()).map(hour =>
                    <option key={hour} value={hour.toString().padStart(2, '0')}>{hour.toString().padStart(2, '0')}</option>
                )}
            </select>
            <select
                className="event-form-select"
                value={value.split(':')[1]}
                onChange={(e) => onChange(value.split(':')[0] + ':' + e.target.value.padStart(2, '0'))}
            >
                {Array.from(Array(60).keys()).map(minute =>
                    <option key={minute} value={minute.toString().padStart(2, '0')}>{minute.toString().padStart(2, '0')}</option>
                )}
            </select>
        </div>
    );
}







export default EventForm;
