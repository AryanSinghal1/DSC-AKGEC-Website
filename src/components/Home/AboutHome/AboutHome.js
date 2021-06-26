import React from "react";

// import CSS
import classes from "./AboutHome.module.css";
import classesDark from "./AboutHomeDark.module.css";

// import image
import about from "../../../assets/images/aboutUS.png";
import appDevelopment from "../../../assets/images/appDevelopment.svg";
import webDevelopment from "../../../assets/images/webDevelopment.svg";
import machineLearning from "../../../assets/images/Background_1.svg";
import management from "../../../assets/images/management.svg";

const AboutHome = (props) => {
  let styles = classes;
  if (props.theme) {
    styles = classes;
  } else {
    styles = classesDark;
  }
  const redHeader = [styles.red, styles.cardHeader];
  const blueHeader = [styles.blue, styles.cardHeader];
  const greenHeader = [styles.green, styles.cardHeader];
  const yellowHeader = [styles.yellow, styles.cardHeader];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.AboutHome}>
          <div>
            <h2>
              What does&nbsp;<strong>DSC-AKGEC</strong> do?
            </h2>
            <p>
              We at
              <strong>&nbsp;DSC-AKGEC&nbsp;</strong>
              are a passionate group of people who work towards bringing a
              change in the ecosystem of development around the campus. We want
              to create a healthy environment for the budding developers to
              create solutions to real life problems and promote the
              <strong>&nbsp;developer culture</strong>.
            </p>
            <img src={about} className={styles.AboutHomeImg} alt="" />
          </div>
        </div>
        <div className={styles.Domains}>
          <h2>Fields we work in</h2>
          <div className={styles.card}>
            <div>
              <div className={styles.cardBody}>
                <h3 className={blueHeader.join(" ")}>Web Development</h3>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo dolorem necessitatibus, quaerat repudiandae aliquam
                  maxime vitae rem, minus aperiam dolorum dolore labore, laborum
                  cum voluptatum architecto. Fuga ipsam ex qui.
                </p>
              </div>
              <img
                src={webDevelopment}
                alt="Web Development"
                className={styles.DomainsImg}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <div className={styles.cardBody}>
                <h3 className={redHeader.join(" ")}>Machine Learning</h3>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo dolorem necessitatibus, quaerat repudiandae aliquam
                  maxime vitae rem, minus aperiam dolorum dolore labore, laborum
                  cum voluptatum architecto. Fuga ipsam ex qui.
                </p>
              </div>
              <img
                src={machineLearning}
                alt="Machine Learning"
                className={styles.DomainsImg}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <div className={styles.cardBody}>
                <h3 className={yellowHeader.join(" ")}>App Development</h3>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo dolorem necessitatibus, quaerat repudiandae aliquam
                  maxime vitae rem, minus aperiam dolorum dolore labore, laborum
                  cum voluptatum architecto. Fuga ipsam ex qui.
                </p>
              </div>
              <img
                src={appDevelopment}
                alt="App Development"
                className={styles.DomainsImg}
              />
            </div>
          </div>
          <div className={styles.card}>
            <div>
              <div className={styles.cardBody}>
                <h3 className={greenHeader.join(" ")}>Management</h3>
                <p className={styles.cardText}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo dolorem necessitatibus, quaerat repudiandae aliquam
                  maxime vitae rem, minus aperiam dolorum dolore labore, laborum
                  cum voluptatum architecto. Fuga ipsam ex qui.
                </p>
              </div>
              <img
                src={management}
                alt="Management"
                className={styles.DomainsImg}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
