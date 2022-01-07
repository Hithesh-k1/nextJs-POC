import EventsList from "../components/event/eventsList";
import {getFeaturedEvents} from '../dummy-data'

function HomePage() {
    const featuredEvents = getFeaturedEvents()
  return (
    <div>
      <ul>
        <EventsList items={featuredEvents}/>
      </ul>
    </div>
  );
}

export default HomePage;
