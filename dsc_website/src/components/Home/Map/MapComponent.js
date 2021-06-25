import React from "react";
import { Link } from "react-router-dom";

//import css
// import classes from "./ProjectsHome.module.css";
import classes from "./MapComponent.module.css";

const MapComponent = () => {
   
      return (
        <div className={classes.mapContainer}>
            <div className={classes.mapdiv}>
                {/* <h2 > DSC - AKGEC</h2> */}
                <div className={classes.iframediv}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.25056360013164!2d77.50001433425109!3d28.67712323951721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf30885b1e2a5%3A0x9983675e24c6638b!2sAKGEC%3A%20Ajay%20Kumar%20Garg%20Engineering%20College%2C%20Ghaziabad!5e0!3m2!1sen!2sin!4v1602677558774!5m2!1sen!2sin" width="100%" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                </div>
            </div>
        </div>
        
      
      );
  };





export default MapComponent;
