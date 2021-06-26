import React from "react";
// import { NavLink } from "react-router-dom";

// css import
import classes from "./Card.module.css";
import classesDark from "./CardDark.module.css";

const Card = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.card}>
      <img src={props.image} alt={props.imgData} className={styles.cardImage} />
      <div className={styles.cardBody}>
        <a href={props.href}>
          <h3 className={styles.cardHeader}>{props.children[0]}</h3>
        </a>
        <p>{props.children[1]}</p>
        <a href={props.href} className={styles.btn}>
          Read
        </a>
      </div>
    </div>
  );
};

export default Card;
