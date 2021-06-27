import React from "react";

// import css
import classes from "./Team.module.css";
import classesDark from "./TeamDark.module.css";

//import Component
import ShowcaseTeam from "./ShowcaseTeam/ShowcaseTeam";
import TeamList from "./TeamList/TeamList";
import Footer from "../UI/Footer/Footer";

class Team extends React.Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Team}`).clientHeight;
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
      <div className={styles.Team}>
        <ShowcaseTeam theme={this.props.theme} />
        <TeamList theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Team;
