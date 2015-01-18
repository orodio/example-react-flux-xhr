"use strict";

var React = require("react");
var actions = require("./actions");

module.exports = React.createClass({
  render() {
    return <button onClick={this.click}>+</button>
  },

  click(e) {
    e.preventDefault();
    actions.inc(this.props.id);
  }
})
