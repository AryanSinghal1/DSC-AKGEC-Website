import React, { Component } from "react";

//import css
import classes from "./Home.module.css";

// components Import
import ShowcaseHome from "./ShowcaseHome/ShowcaseHome";
import AboutHome from "./AboutHome/AboutHome";
import EventsHome from "./EventsHome/EventsHome";
import ProjectsHome from "./ProjectsHome/ProjectsHome";
import BlogHome from "./BlogHome/BlogHome";
import TeamHome from "./TeamHome/TeamHome";
import Footer from "../UI/Footer/Footer";

class Home extends Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Home}`).clientHeight;
  //   // console.log(heightEle);
  //   this.props.setHeight(heightEle);
  // }

  render() {
    return (
      <div className={classes.Home}>
        <ShowcaseHome theme={this.props.theme} />
        <AboutHome theme={this.props.theme} />
        <EventsHome theme={this.props.theme} />
        <ProjectsHome theme={this.props.theme} />
        {/* <BlogHome theme={this.props.theme} /> */}
        <TeamHome theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
