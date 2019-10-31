import React from "react";
import PropTypes from "prop-types";

export default class Temperature extends React.Component {
  static propTypes = {
    temp: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    toggleForecast: PropTypes.func.isRequired
  };
  render() {
    return (
      <div onClick={this.props.toggleForecast}>
        <p>{this.props.temp}&deg;c</p>
        <div>{this.props.city}</div>
      </div>
    );
  }
}
