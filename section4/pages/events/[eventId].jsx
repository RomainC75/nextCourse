import { useRouter } from "next/router";
import { getEventById } from "../dummy-data";
import  EventSummary  from "../../components/event-detail/event-summary";
import  EventLogistics  from "../../components/event-detail/event-logistics";
import  EventContent  from "../../components/event-detail/event-content";

const EventId = () => {

  const router = useRouter();
  console.log("=>", router.query);
  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  console.log("event : ", event);

  if (!event) {
    console.log("no envet");
    return <p>No event</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventId;
