import React from "react";

//import css
import classes from "./ShowcaseProjects.module.css";
import classesDark from "./ShowcaseProjectsDark.module.css";

const ShowcaseProjects = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.ShowcaseProjects}>
      <div className={styles.Container}>
        <div className={styles.topContent}>
          <h1 className={styles.projectsHeader}>Projects</h1>
          <p className={styles.projectsText}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            magni accusantium neque et veniam laudantium ratione voluptate
            dolorum officia tempora!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseProjects;
