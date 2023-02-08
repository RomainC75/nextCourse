import React from 'react'
import { getAllEvents } from '../dummy-data'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/events-search'
import { useRouter } from 'next/router'
import ResultsTitle from '../../components/events/results-title'

const AllEvents = () => {
    const event = getAllEvents()
    const router = useRouter()
    
    const findEventsHandler = (year, month) =>{
        router.push({
            pathname:'/events/[year]/[month]',
            query:{
                year,
                month
            }
        })
    }

  return (
    <div>
        <EventsSearch onSearch={findEventsHandler}/>
        <h1>All events</h1>
        <EventList list={event}/>
    </div>
  )
}

export default AllEvents