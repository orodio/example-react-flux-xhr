"use strict";

var React = require("react");

module.exports = React.createClass({
  render() {
    return <span>{this.props.children}: </span>
  }
})
