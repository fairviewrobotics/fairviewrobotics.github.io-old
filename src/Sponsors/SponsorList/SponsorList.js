import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Sponsor from "./Sponsor";

import './SponsorList.css';

export default class SponsorList extends PureComponent {

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
      <div id="companies-outer">
        {this.props.sponsors.map(sponsor =>
          <Sponsor key={sponsor.name} name={sponsor.name} size={sponsor.size} url={sponsor.url} src={sponsor.src} />
        )}
      </div>
    );
  }
}
