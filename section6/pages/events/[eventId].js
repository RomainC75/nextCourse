import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFeaturedEvents } from '../../dummy-data';
import { getEventById } from '../../utils/api';
import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';
import ErrorAlert from '../../components/ui/error-alert';
import { reorganizedDataFn } from '../../utils/reorganizeData';

const api_url = process.env.DB_FIREBASE

function EventDetailPage({foundEvent}) {
  const router = useRouter();

  // const eventId = router.query.eventId;
  // const event = getEventById(eventId);

  if (!foundEvent) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={foundEvent.title} />
      <EventLogistics
        date={foundEvent.date}
        address={foundEvent.location}
        image={foundEvent.image}
        imageAlt={foundEvent.title}
      />
      <EventContent>
        <p>{foundEvent.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

export async function getStaticProps(context){
  const {params} = context

  const foundEvent = await getEventById(params.id)
  console.log("===========FOUND ===========")
  console.log(foundEvent)
  return {
    props:{
      foundEvent
    }
  }
}

export async function getStaticPaths(){
  try {
    const rawAns = await fetch(api_url)
    const data = await rawAns.json()

    const ids = getFeaturedEvents(data).map(event=>({params:{eventId:event.id}}))
    console.log('==> ids : ', ids)
    return {
      paths:ids,
      fallback: false 
    }
  } catch (error) {
    console.log('==getStaticPaths error==')
    console.log(error)
  }
}