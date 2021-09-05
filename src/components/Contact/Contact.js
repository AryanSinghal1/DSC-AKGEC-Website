import React from "react";

//import css
import classes from "./Contact.module.css";
import classesDark from "./ContactDark.module.css";

// import component
import ShowcaseContact from "./ShowcaseContact/ShowcaseContact";
import Footer from "../UI/Footer/Footer";

class Contact extends React.Component {
  // componentDidMount() {
  //   var heightEle = document.querySelector(`.${classes.Contact}`).clientHeight;
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
      <div className={styles.Contact}>
        <ShowcaseContact theme={this.props.theme} />
        <Footer theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
