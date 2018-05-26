import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SocialIcon from "./SocialIcon";

import './SocialIconList.css';

export default class SocialIconList extends PureComponent {

  static propTypes = {
    socialMedia: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      icon: PropTypes.object.isRequired
    })).isRequired
  };

  render() {
    return (
      <div className="social-media-list">
        {this.props.socialMedia.map(icon =>
          <SocialIcon key={icon.url} icon={icon.icon} url={icon.url} />
        )}
      </div>
    );
  }
}
