import { useRouter } from "next/router";
import EventsList from "../../components/event/eventsList";
import { getFilteredEvents } from "../../dummy-data";
import ResultsTitle from "../../components/results-title/results-title";
import ErrorAlert from "../../components/ui/error-alert/error-alert";
import Button from "../../components/ui/button";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  //convert string year & month to int
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter , please adjust your values</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show All Events</Button>
        </div>
      </>
    );
  }
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p> No events found for the choosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events"> Show All Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <div>
      <ResultsTitle date={date} />
      <EventsList items={filteredEvents} />
    </div>
  );
}

export default FilteredEventsPage;
