import React, { Component } from 'react';
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import RouteChange from "./RouteChange";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NotFound from "./NotFound/NotFound";
import Home from "./Home/Home";
import About from "./About/About";
import Calendar from "./Calendar/Calendar";
import Sponsors from "./Sponsors/Sponsors";

import { sponsors } from "./constants";

function importAll(r) {
  return r.keys().map(r);
}

const homePageImages = importAll(require.context('./images/we-are/', false, /\.(png|jpe?g|svg)$/));

const weAreItems = homePageImages.map(src => ({
  src,
  name: src.split('.')[0].split('/').slice(-1)[0]
}));

const sponsorImages = importAll(require.context('./images/sponsors/', false, /\.(png|jpe?g|svg)$/));

const sponsorItems = sponsors.map(sponsor => ({
  ...sponsor,
  src: sponsorImages.find(image => image.includes(sponsor.name))
}));

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
    // TODO: simpfly to pathname !== '/', but fix not found page
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
            <Route exact path="/" render={() => <Home shuffle weAreItems={weAreItems}/>}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/sponsors" render={() => <Sponsors sponsors={sponsorItems} />}/>
            <Route exact path="/gallery" render={() => <h1>gallery</h1>}/>
            <Route exact path="/calendar" component={Calendar}/>

            <Route component={NotFound} />
          </Switch>

          <Footer fixed={this.state.isMainPage} socialMedia={this.props.socialMedia}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
