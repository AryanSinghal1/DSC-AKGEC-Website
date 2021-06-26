import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

//import css
import classes from "./Layout.module.css";
import classesDark from "./LayoutDark.module.css";

// import component
import Navbar from "../Navigation/Navbar/Navbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Home from "../Home/Home";
import Events from "../Events/Events";
// import Contact from "../Contact/Contact";
import Team from "../Team/Team";
import Projects from "../Projects/Projects";
import Blog from "../Blog/Blog";
// import Footer from "../UI/Footer/Footer";

class Layout extends Component {
  state = {
    theme: true,
    styles: classes,
  };

  constructor(props) {
    super(props);
    this.themeToggler = this.themeToggler.bind(this);
  }

  themeToggler() {
    this.state.theme === true
      ? this.setState({ theme: false })
      : this.setState({ theme: true });

    if (this.state.theme) {
      this.setState({ styles: classes });
    } else {
      this.setState({ styles: classesDark });
    }
  }

  render() {
    return (
      <>
        <div>
          <Navbar switchTheme={this.themeToggler} theme={this.state.theme} />
          <SideDrawer />
        </div>
        <div
          className={this.state.styles.Layout}
          // style={{ height: this.state.heightStyle }}
        >
          <Route
            render={({ location }) => (
              <TransitionGroup component={null}>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                >
                  <Switch location={location}>
                    <Route
                      path="/"
                      exact
                      component={() => <Home theme={this.state.theme} />}
                    />
                    <Route
                      path="/events"
                      component={() => <Events theme={this.state.theme} />}
                    />
                    <Route
                      path="/projects"
                      component={() => <Projects theme={this.state.theme} />}
                    />
                    <Route
                      path="/blog"
                      component={() => <Blog theme={this.state.theme} />}
                    />
                    <Route
                      path="/team"
                      component={() => <Team theme={this.state.theme} />}
                    />
                    {/* <Route path="/contact" component={Contact} /> */}
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </>
    );
  }
}

export default Layout;

// return (
//   <>
//     <div>
//       <Navbar />
//       <SideDrawer />
//     </div>
//     <div
//       className={classes.Layout}
//       style={{ height: this.state.heightStyle }}
//     >
//       <Route
//         render={({ location }) => (
//           <TransitionGroup component={null}>
//             <CSSTransition
//               key={location.key}
//               timeout={450}
//               classNames="fade"
//             >
//               <Switch location={location}>
//                 <Route
//                   path="/"
//                   exact
//                   component={() => (
//                     <Home setHeight={this.relativeHeightHandler} />
//                   )}
//                 />
//                 <Route
//                   path="/events"
//                   component={() => (
//                     <Events setHeight={this.relativeHeightHandler} />
//                   )}
//                 />
//                 <Route
//                   path="/projects"
//                   component={() => (
//                     <Projects setHeight={this.relativeHeightHandler} />
//                   )}
//                 />
//                 <Route
//                   path="/blog"
//                   component={() => (
//                     <Blog setHeight={this.relativeHeightHandler} />
//                   )}
//                 />
//                 <Route
//                   path="/team"
//                   component={() => (
//                     <Team setHeight={this.relativeHeightHandler} />
//                   )}
//                 />
//                 <Route
//                   path="/contact"
//                   component={() => (
//                     <Contact setHeight={this.relativeHeightHandler} />
//                   )}
//                 />
//               </Switch>
//             </CSSTransition>
//           </TransitionGroup>
//         )}
//       />
//     </div>
//     <Footer />
//   </>
// );