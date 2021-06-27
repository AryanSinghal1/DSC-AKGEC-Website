import React from "react";

//import css
import classes from "./ShowcaseTeam.module.css";
import classesDark from "./ShowcaseTeamDark.module.css";

const ShowcaseTeam = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.ShowcaseTeam}>
      <div className={styles.container}>
        <h1 className={styles.teamHeader}>Meet The Team</h1>
        <p className={styles.teamInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, dicta
          est consequuntur hic atque ullam non quis nisi fugiat quos. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Explicabo eum
          itaque nam necessitatibus, reiciendis quisquam!
        </p>
      </div>
    </div>
  );
};

export default ShowcaseTeam;
