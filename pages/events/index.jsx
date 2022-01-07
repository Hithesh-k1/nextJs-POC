import EventsList from "../../components/event/eventsList";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventsList items={events} />
    </div>
  );
}

export default AllEventsPage;
