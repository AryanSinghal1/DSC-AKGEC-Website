import React from "react";

// import css
import classes from "./Projects.module.css";
import classesDark from "./ProjectsDark.module.css";

//import component
import ShowcaseProjects from "./ShowcaseProjects/ShowcaseProjects";
import ProjectsList from "./ProjectsList/ProjectsList";
import Footer from "../UI/Footer/Footer";

class Projects extends React.Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Projects}`).clientHeight;
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
      <div className={styles.Projects}>
        <ShowcaseProjects theme={this.props.theme} />
        <ProjectsList theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
