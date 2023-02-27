import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";

const EventSlug = () => {
  const router = useRouter();
  console.log("query", router.query);
  const filteredData = router.query.slug;
  console.log("=>", filteredData);
  // console.log('=========>', month, year)
  if (!filteredData) {
    return <p className="center">Loading </p>;
  }
  if (
    isNaN(filteredData[0]) ||
    isNaN(filteredData[1]) ||
    filteredData[0] > 2030 ||
    filteredData[0] < 2021 ||
    filteredData[1] < 1 ||
    filteredData[1] > 12
  ) {
    return <p>Invalid Filter</p>
  }

  const events = getFilteredEvents({
    month: parseInt(filteredData[1]) ,
    year: parseInt(filteredData[0]),
  });

  if (!events || events.length === 0) {
    return (
        <>
            <p className="center">No events found !</p>
            <Button link='/events'>Show All Events</Button>
        </>
    );
  }

  const date = new Date(filteredData[0],filteredData[1]-1)

  return (
    <>
        <ResultsTitle date={date}/>
        <EventList list={events} />
    </>
  )
};

export default EventSlug;
