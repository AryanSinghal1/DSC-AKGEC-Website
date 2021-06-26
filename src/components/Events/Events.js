import React from "react";

// import css
import classes from "./Events.module.css";
import classesDark from "./EventsDark.module.css";

//import component
import ShowcaseEvents from "./ShowcaseEvents/ShowcaseEvents";
import EventsList from "./EventsList/EventsList";
import Footer from "../UI/Footer/Footer";

class Events extends React.Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Events}`).clientHeight;
  //   // console.log(heightEle);
  //   this.props.setHeight(heightEle);
  // }
  render() {
    let styles = classes;
    if (this.props.theme) {
      styles = classes;
    } else {
      styles = classesDark;
    }
    return (
      <div className={styles.Events}>
        <ShowcaseEvents theme={this.props.theme} />
        <EventsList theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Events;
