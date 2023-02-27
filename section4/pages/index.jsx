import React from 'react'
import EventList from '../components/events/event-list'
import { getFeaturedEvents } from './dummy-data'

const HomePage = () => {
    const featuredEvents = getFeaturedEvents()
  return (
    <div>
        <h1>Home Page</h1>
        <EventList list={featuredEvents}/>
    </div>
  )
}

export default HomePage