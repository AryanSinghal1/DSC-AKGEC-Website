import React from "react";

//import css
import classes from "./ShowcaseContact.module.css";
import classesDark from "./ShowcaseContactDark.module.css";

//image import
// import registerImg from "../../../assets/images/register.png";

//import Components
// import ContactForm from "../ContactForm/ContactForm";
// import Success from "../Success/Success";

const ShowcaseContact = (props) => {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // function submitContact() {
  //   // console.log("Success");
  //   setIsSubmitted(true);
  // }

  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }

  return (
    <div className={styles.ShowcaseContact}>
      <div className={styles.Container}>
        <h1 className={styles.registerHeader}>Registration Open</h1>
        <div className={styles.wrapper}>
          <iframe
            title="gform"
            src="https://docs.google.com/forms/d/e/1FAIpQLSemWsn2-fx1EZutkYm0hwVSSRXjwo607b8jgqDczpgsNs0qQQ/viewform?embedded=true"
            width="100%"
            height="1702"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
          {/* <div className={styles.formContentRight}></div> */}
        </div>
      </div>
    </div>
  );
};

export default ShowcaseContact;
