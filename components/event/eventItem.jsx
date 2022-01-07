import Button from "../ui/button";
import classes from "./eventItem.module.css";
import DateIcon from "../icons/dateIcon";
import AddressIcon from "../icons/addressIcon";
import ArrowRightIcon from "../icons/arrowRightIcon";

function EventItem(props) {
  const { title, image, date, location, id } = props;
  const readableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{readableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon /> <address>{formatAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
              <span>
              Explore Link
              </span>
              <span className={classes.icon}><ArrowRightIcon/></span>
               </Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
