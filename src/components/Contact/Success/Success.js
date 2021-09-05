import React from "react";

//import css
import classes from "./Success.module.css";
import classesDark from "./SuccessDark.module.css";

//import image
import successImg from "../../../assets/images/success.svg";

const Success = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  return (
    <div className={styles.formContentLeft}>
      <div className={styles.formSuccess}>
        <h1 className={styles.formHeader}>
          Thanks for Registering! Check your inbox for more details.
        </h1>
      </div>
      <img src={successImg} alt="success" className={styles.formImg2} />
    </div>
  );
};

export default Success;
