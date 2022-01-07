import EventItem from "./eventItem";
import classes from './eventList.module.css'


function EventsList(props) {
  const { items } = props;
  return (
    <div className={classes.list}>
      {items.map(({ id, title, location, date, image }) => (
        <EventItem
          key={id}
          id={id}
          title={title}
          location={location}
          date={date}
          image={image}
        />
      ))}
    </div>
  );
}

export default EventsList;
