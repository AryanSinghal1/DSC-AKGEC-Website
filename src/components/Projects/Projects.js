import React from "react";
import { Helmet } from "react-helmet";

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
        <Helmet>
          <title>DSC | AKGEC | Projects</title>
          <meta
            name="description"
            content="Developer Student Clubs AKGEC Projects"
          />
          <meta property="og:title" content="DSC AKGEC" />
          <meta property="og:type" content="project.technology.article" />
          <meta property="og:url" content="https://dscakgec.org/projects" />
          <meta
            property="og:image"
            content="https://images.app.goo.gl/UQrT9aN5vNwQWDMHA"
          />
          <meta
            property="og:description"
            content="Our team has worked upon a lot of creative projects, turning ideas into reality."
          />
        </Helmet>

        <ShowcaseProjects theme={this.props.theme} />
        <ProjectsList theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
