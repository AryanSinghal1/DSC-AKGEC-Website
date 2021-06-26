import React from "react";
import { Link } from "react-router-dom";

//css import
import classes from "./EventsHome.module.css";
import classesDark from "./EventsHomeDark.module.css";

//image import
import image1 from "../../../assets/images/events.jpg";

//import component
// import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

const EventsHome = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.EventsHome}>
      <div className={styles.Container}>
        <h1>Recent Events</h1>
        <div className={styles.cardList}>
          <Card image={image1} href="/" theme={props.theme}>
            <>Card 1</>
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolores nostrum quos voluptatum culpa ipsam nemo repellat ad
              quisquam omnis?
            </>
          </Card>
          <Card image={image1} href="/" theme={props.theme}>
            <>Card 2</>
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolores nostrum quos voluptatum culpa ipsam nemo repellat ad
              quisquam omnis?
            </>
          </Card>
          <Card image={image1} href="/" theme={props.theme}>
            <>Card 3</>
            <>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              dolores nostrum quos voluptatum culpa ipsam nemo repellat ad
              quisquam omnis?
            </>
          </Card>
        </div>
        <Link to="/events" className={styles.eventBtn}>
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default EventsHome;
