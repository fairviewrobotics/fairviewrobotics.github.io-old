import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";

export default withRouter(class RouteChange extends Component {

  static propTypes = {
    onRouteChange: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.routeChanged()
  }

  componentDidUpdate(prevProps) {
   if (this.props.location.pathname !== prevProps.location.pathname) {
      this.routeChanged();
    }
  }

  routeChanged() {
    let { location, push, replace } = this.props;

    this.props.onRouteChange(location, { push, replace });
  }

  render() {
    return null;
  }
});