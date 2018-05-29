import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import './SocialIcon.css';

export default class SocialIcon extends PureComponent {

  static propTypes = {
    icon: PropTypes.any.isRequired,
    url: PropTypes.string.isRequired
  };

  render() {
    return (
      <a className="social-icon"
         target="_blank"
         href={this.props.url}>
        <FontAwesomeIcon icon={this.props.icon} />
      </a>
    );
  }
}
