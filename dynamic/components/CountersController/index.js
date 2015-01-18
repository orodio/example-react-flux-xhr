"use strict";

var React    = require("react");
var Counters = require("../Counters");
var store    = require("./store");
var actions  = require("./actions");

function state() {
  return {
    data : store.getAll()
  }
}

module.exports = React.createClass({
  displayName     : "CountersController",
  getInitialState : state,

  update()               { this.setState(state()); },
  componentWillMount()   { store.subscribe(this.update); },
  componentWillUnmount() { store.unsubscribe(this.update); },

  componentDidMount() {
    actions.poll();
    // setInterval(actions.poll, 1000);
  },

  render() {
    var {data} = this.state;
    return <Counters {...{data}}/>;
  }
});
