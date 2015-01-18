"use strict";

var React = require("react");
var actions = require("./actions");

module.exports = React.createClass({
  displayName : "Counter/Dec",

  render() {
    return <button onClick={this.click}>-</button>
  },

  click(e) {
    e.preventDefault();
    actions.dec(this.props.id);
  }
})
