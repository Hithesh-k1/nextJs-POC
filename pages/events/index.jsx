import { useRouter } from "next/router";
import EventsList from "../../components/event/eventsList";
import EventsSearch from "../../components/event/eventsSearch";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const events = getAllEvents();

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };
  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventsList items={events} />
    </>
  );
}

export default AllEventsPage;
