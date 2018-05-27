import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shuffle from 'array-shuffle';

import './Home.css';

import BackgroundImage from "../BackgroundImage/BackgroundImage";

// TODO: add spinning loading svg to wait for all images to load
// TODO: add code to check if images are loaded (https://forums.meteor.com/t/solved-how-to-determine-when-all-the-images-in-a-component-are-loaded-displayed/14297/5)
export default class Home extends Component {

  static propTypes = {
    weAreItems: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })).isRequired,
    shuffle: PropTypes.bool,
    timeActive: PropTypes.number.isRequired,
    timeToFade: PropTypes.number.isRequired
  };

  static defaultProps = {
    shuffle: false,
    timeActive: 1000,
    timeToFade: 2000
  };

  state = {
    items: this.props.shuffle ? shuffle(this.props.weAreItems) : this.props.weAreItems,
    arrayPos: 0,
    fadingOut: false,
    fadingIn: false
  };

  componentDidMount() {
    this.loopWeAre();
  }

  componentWillUnmount() {
    // Removes all timers (this prevents memory leaks)
    clearInterval(this.loopInterval);
    clearTimeout(this.fadeOutTimeout);
    clearTimeout(this.fadeInTimeout);
  }

  loopWeAre = () => {
    this.loopInterval = setInterval(() => {
      this.updateWeAre(this.state.items[this.state.arrayPos]);

    }, this.props.timeActive + this.props.timeToFade);
  };

  getNextArrayPos() {
    let nextPos = this.state.arrayPos + 1;

    if (nextPos >= this.state.items.length) {
      if (this.props.shuffle) {
        this.setState({ items: shuffle(this.state.items) })
      }
      nextPos = 0;
    }
    return nextPos;
  }

  updateWeAre = () => {
    this.setState({ fadingOut: true }); // fade out

    this.fadeOutTimeout = setTimeout(() => {
      this.setState({
        arrayPos: this.getNextArrayPos(),
        fadingOut: false,
        fadingIn: true
      }); // start fade in

      this.fadeInTimeout = setTimeout(() => {
        this.setState({ fadingOut: false, fadingIn: false }); // end fade in
      }, this.props.timeToFade / 2);

    }, this.props.timeToFade / 2);
  };

  render() {

    let fadeClass = '';

    if (this.state.fadingIn) {
      fadeClass = 'fading-in';
    } else if (this.state.fadingOut) {
      fadeClass = 'fading-out';
    }

    const {name: weAre, src} = this.state.items[this.state.arrayPos];

    return (
      <div>
        <BackgroundImage fullScreen src={src} animate={{ duration: this.props.timeToFade / 2 }} />
        <h1 className={`we-are ${fadeClass}`}>we are <span className="we-are-inner">{weAre}</span></h1>
      </div>
    );
  }
}
