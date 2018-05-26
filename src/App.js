import React, { Component } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RouteChange from "./RouteChange";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";

class App extends Component {

  static propTypes = {
    socialMedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired
    })).isRequired
  };

  state = {
    isMainPage: true
  };

  handleRouteChange = ({ pathname }) => {
    if (this.state.isMainPage && (
      pathname === '/about' ||
      pathname === '/sponsors' ||
      pathname === '/gallery' ||
      pathname === '/calendar' )) {
      this.setState({ isMainPage: false });
    } else if (!this.state.isMainPage && pathname === '/') {
      this.setState({ isMainPage: true });
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <RouteChange onRouteChange={this.handleRouteChange}/>

          <Header isCollapsed={!this.state.isMainPage}/>

          <Switch>
            <Route exact path="/" render={() => <h1>Home</h1>}/>
            <Route exact path="/about" render={() => <h1>About</h1>}/>
            <Route exact path="/sponsors" render={() => <h1>sponsors</h1>}/>
            <Route exact path="/gallery" render={() => <h1>gallery</h1>}/>
            <Route exact path="/calendar" render={() => <h1>Calendar</h1>}/>

            <Route component={NotFound} />
          </Switch>

          <Footer fixed={this.state.isMainPage} socialMedia={this.props.socialMedia}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
