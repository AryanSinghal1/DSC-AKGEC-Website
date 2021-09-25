import React, { useState } from "react";

//import css
import classes from "./ShowcaseContact.module.css";
import classesDark from "./ShowcaseContactDark.module.css";

//image import
import registerImg from "../../../assets/images/register.png";

//import Components
import ContactForm from "../ContactForm/ContactForm";
import Success from "../Success/Success";

const ShowcaseContact = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitContact() {
    // console.log("Success");
    setIsSubmitted(true);
  }

  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  return (
    <div className={styles.ShowcaseContact}>
      <div className={styles.Container}>
        <h1 className={styles.registerHeader}>Registration Closed</h1>
        <div className={styles.wrapper}>
          <div className={styles.formContentRight}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContact;
