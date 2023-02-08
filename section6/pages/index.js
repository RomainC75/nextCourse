import EventList from "../components/events/event-list";
import { getAllEvents, getFeaturedEvents } from "../dummy-data";
import { reorganizedDataFn } from "../utils/reorganizeData";


function HomePage({ featuredEvents }) {
  console.log('featured : ', featuredEvents)
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  try {
    const reorganizedData = await getFeaturedEvents()
    

    return {
      props: {
        featuredEvents: reorganizedData,
      },
      revalidate: 10,
    };
  } catch (error) {
    console.log("error : ", error);
  }
}
