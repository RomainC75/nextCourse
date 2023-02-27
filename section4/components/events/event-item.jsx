import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import DateIcon from "../icons/date-icon";
import classes from "./event-item.module.css";
import Button from "./ui/button";

const EventItem = ({ item }) => {
  const date = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formatedAddress = item.location.replace(", ", "\n");
  return (
    <li className={classes.item}>
      <img width={100} src={item.image} alt={item.title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{item.title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{date}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formatedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button
            link={{
              pathname: "/events/[id]",
              query: {
                id: item.id,
              },
            }}
          >
            <span>Explore Events</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>{" "}
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
