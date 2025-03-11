import React from 'react'
import Items from './Items'
import itemsData from '@/data/EventsData'

const Event = () => {
    const eventData = itemsData;

    return (
        eventData.map((event, index) => (
            <div className=' py-10' key={index}>
                <h1 className='text-primary text-4xl p-4 text-center font-semibold my-10'>{event.section}</h1>

                <Items data={event.data} id={index}/>
            </div>
        ))
    )
}

export default Event