"use strict";

var React   = require("react");
var store   = require("./store");
var actions = require("./actions");

function state() {
  return {
    title        : store.getTitle(),
    titleIsValid : store.getTitleValid()
  }
}

module.exports = React.createClass({
  displayName     : "CountersNewForm",
  getInitialState : state,

  update()               { this.setState(state()); },
  componentWillMount()   { store.subscribe(this.update); },
  componentWillUnmount() { store.unsubscribe(this.update); },

  render() {
    var {title, titleIsValid} = this.state;

    return  <form onSubmit={this.submit}>
              <input value={title} onChange={this.updateTitle} placeholder="New Counter"/>
              {titleIsValid && <button onClick={this.submit}>Add</button>}
            </form>
  },

  updateTitle(e) {
    actions.updateTitle(e.target.value);
  },

  submit(e) {
    e.preventDefault();
    if (!this.state.titleIsValid) return;
    actions.submit(this.state.title);
  }
});
