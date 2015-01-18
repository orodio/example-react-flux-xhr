"use strict";

var React     = require("react");
var subscribe = require("oro-dispatcher/lib/subscribe");
var Counters  = require("../Counters");
var store     = require("./store");
var actions   = require("./actions");

function state() {
  return {
    data : store.getAll()
  }
}

module.exports = React.createClass({
  displayName     : "CountersController",
  mixins          : [subscribe(store, state)],

  componentDidMount() {
    actions.poll();
    // setInterval(actions.poll, 1000);
  },

  render() {
    var {data} = this.state;
    return <Counters {...{data}}/>;
  }
});





