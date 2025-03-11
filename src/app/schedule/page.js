"use client"
import { ScheduleData } from '@/data/ScheduleData';
import React, { useState } from 'react';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(ScheduleData[0].scheduleDate);

  return (
    <div className='my-32 px-6 min-h-screen'>
      {/* Heading */}
      <h1 className='text-center text-primary text-4xl font-semibold'>Schedule</h1>

      {/* Horizontal Date Navigation */}
      <div className='mt-6 mx-auto whitespace-nowrap gap-4 sm:w-3/5 w-full py-3 sm:mx-auto overflow-x-scroll justify-center'>
        {ScheduleData.map(({ scheduleDate }) => (
          <button
            key={scheduleDate}
            onClick={() => setSelectedDate(scheduleDate)}
            className={`px-4 py-2 w-fit mr-2 sm:w-fit border rounded-lg text-sm ${
              selectedDate === scheduleDate
                ? 'bg-primary text-white'
                : 'border-border text-secondary'
            }`}
          >
            {scheduleDate}
          </button>
        ))}
      </div>

      {/* Event Cards */}
      <div className='mt-8 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 justify-center'>
        {ScheduleData.find(({ scheduleDate }) => scheduleDate === selectedDate)?.events.map(
          (event, index) => (
            <div key={index} className='bg-white w-full shadow-lg rounded-lg p-6'>
              {/* Event Name & Type */}
              <h2 className='text-xl font-bold text-text-primary'>{event.eventName}</h2>
              <span className='text-sm px-3 py-1 bg-accent text-white rounded-full inline-block mt-1'>
                {event.eventType}
              </span>

              {/* Date */}
              <p className='text-text-secondary mt-3 text-sm'>📅 {event.time} - {selectedDate}</p>

              {/* Participating Colleges */}
              <div className='mt-3 flex gap-3 overflow-x-scroll py-2'>
                {event.participationColleges.map((college, i) => (
                  <div
                    key={i}
                    className='w-16 h-16 shrink-0 bg-border rounded-full flex items-center justify-center text-xs font-semibold text-primary'
                  >
                    {college[0]} {/* First letter as placeholder for logo */}
                  </div>
                ))}
              </div>

              {/* Status */}
              <p className='mt-3 text-xs text-text-secondary font-medium'>📌 Status: {event.status}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Schedule;
