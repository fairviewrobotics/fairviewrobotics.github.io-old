import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SocialIconList from "./SocialIconList/SocialIconList";

import './Footer.css'

export default class Footer extends PureComponent {

  static propTypes = {
    socialMedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired
    })).isRequired
  };

  render() {
    return (
      <div className="social-media-home">
        <SocialIconList socialMedia={this.props.socialMedia}/>
        <a className="social-email" href="mailto:fairviewrobotics@gmail.com">FAIRVIEWROBOTICS@GMAIL.COM</a>
      </div>
    );
  }
}
