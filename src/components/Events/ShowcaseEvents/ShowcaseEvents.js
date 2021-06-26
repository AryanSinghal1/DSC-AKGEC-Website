import React from "react";

//import css
import classes from "./ShowcaseEvents.module.css";
import classesDark from "./ShowcaseEventsDark.module.css";

const ShowcaseEvents = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.ShowcaseEvents}>
      <div className={styles.Container}>
        <h1 className={styles.eventsHeading}>Events</h1>
        <p className={styles.eventsInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          aut?
        </p>
      </div>
    </div>
  );
};

export default ShowcaseEvents;
