import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './Sponsor.css';

export default class Sponsor extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
  };

  render() {
    const trueWidth = this.props.size * .9;

    return (
      <a className='company' target='_blank' href={this.props.url}>
        <img src={this.props.src} alt={this.props.name} style={{ height: 'auto', width: `${trueWidth}vw` }} />
      </a>
    );
  }
}
