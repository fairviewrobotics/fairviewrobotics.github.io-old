import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SponsorList from "./SponsorList/SponsorList";
import BackgroundImage from "../BackgroundImage/BackgroundImage";

import './Sponsors.css';

import intro11 from '../images/intro/11.jpg';

export default class Sponsors extends PureComponent {

  static propTypes = {
    sponsors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      size: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })).isRequired
  };

  render() {
    return (
      <div>
        <BackgroundImage src={intro11}/>
        <h1 className="page-title">SPONSORS</h1>
        <SponsorList sponsors={this.props.sponsors}/>
      </div>
    );
  }
}
