"use strict";

var React = require("react");

module.exports = React.createClass({
  displayName : "Counter/Count",

  render() {
    var {children} = this.props;
    return <span>{children}</span>
  }
})
