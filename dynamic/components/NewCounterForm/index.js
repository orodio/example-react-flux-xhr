"use strict";

var React                 = require("react");
var subscribe             = require("oro-dispatcher/lib/subscribe");
var {updateTitle, submit} = require("./actions");
var store                 = require("./store");

function state() {
  return {
    title: store.getTitle()
  };
}

module.exports = React.createClass({
  mixins : [subscribe(store, state)],

  render() {
    var {title} = this.state;

    return  <form onSubmit={this.submit}>
              <input value={title} onChange={this.updateTitle}/>
              <button onClick={this.submit}>+</button>
            </form>
  },

  updateTitle(e) {
    e.preventDefault();
    updateTitle(e.target.value);
  },

  submit(e) {
    e.preventDefault();
    submit(this.state.title);
  }
});
