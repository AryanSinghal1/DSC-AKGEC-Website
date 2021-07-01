import React from "react";

//import css
import classes from "./TeamList.module.css";
import classesDark from "./TeamListDark.module.css";

//import component
import TeamMember from "../TeamMember/TeamMember";

//import DataFile
import { TeamData } from "../TeamData";

const TeamList = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  const fourthYearList = TeamData.map((member) => {
    if (member.year === 4) {
      return (
        <TeamMember
          key={member.id}
          cardName={member.cardName}
          cardDesignation={member.cardDesignation}
          image={member.image}
          links={member.links}
          domain={member.domain}
          theme={props.theme}
        />
      );
    }
    return null;
  });

  const thirdYearList = TeamData.map((member) => {
    if (member.year === 3) {
      return (
        <TeamMember
          key={member.id}
          cardName={member.cardName}
          cardDesignation={member.cardDesignation}
          image={member.image}
          links={member.links}
          domain={member.domain}
          theme={props.theme}
        />
      );
    }
    return null;
  });

  const secondYearList = TeamData.map((member) => {
    if (member.year === 2) {
      return (
        <TeamMember
          key={member.id}
          cardName={member.cardName}
          cardDesignation={member.cardDesignation}
          image={member.image}
          links={member.links}
          domain={member.domain}
          theme={props.theme}
        />
      );
    }
    return null;
  });

  return (
    <div className={styles.TeamList}>
      <div className={styles.section}>
        <h1 className={styles.teamListHeader}>Members from 4th Year</h1>
        <div className={styles.listContainer}>{fourthYearList}</div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.teamListHeader}>Members from 3rd Year</h1>
        <div className={styles.listContainer}>{thirdYearList}</div>
      </div>
      <div className={styles.section}>
        <h1 className={styles.teamListHeader}>Members from 2nd Year</h1>
        <div className={styles.listContainer}>{secondYearList}</div>
      </div>
    </div>
  );
};

export default TeamList;
