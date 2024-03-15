import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function CalendarComponent({ date, setDate, events }) {
    const handleDayClick = (clickedDate) => {
        const clickedDateString = clickedDate.toDateString();
        const matchingEventIndex = events.findIndex(event => event.date.toDateString() === clickedDateString);
        if (matchingEventIndex !== -1) {
            console.log(events[matchingEventIndex].name);
        }
    };

    const tileContent = ({ date }) => {
        const eventForDay = events.find(event => {
            const eventDate = new Date(event.date);
            return eventDate.getDate() === date.getDate() &&
                eventDate.getMonth() === date.getMonth() &&
                eventDate.getFullYear() === date.getFullYear();
        });
        return eventForDay && <div className="event-dot"></div>;
    };

    return (
        <div>
            <Calendar
                onChange={setDate}
                value={date}
                onClickDay={handleDayClick}
                tileContent={tileContent}
            />
        </div>
    );
}

export default CalendarComponent;
