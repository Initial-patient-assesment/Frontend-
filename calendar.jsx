import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import DashBoard from './DashBoard';
const Calendar = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/events'); // Замените на ваш URL
        setEvents(response.data);
      } catch (error) {
        console.error('Ошибка при получении данных о событиях', error);
      }
    };
    fetchEventData();
  }, []);
  const handleDateClick = (arg) => {
    console.log("Дата клика", arg.dateStr);
  };
  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        events={events}
        dateClick={handleDateClick}
      />
    </>
  );
};
export default Calendar;

