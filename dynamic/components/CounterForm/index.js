"use strict";

import React   from "react";
import sub     from "oro-dispatcher/sub";
import actions from "./actions";
import store   from "./store";

function state() {
  return {
    title: store.getTitle()
  };
}

module.exports = React.createClass({
  mixins : [sub(state, store)],

  render() {
    let {state, submit, updateTitle} = this;
    let {title} = state;

    return  <form onSubmit={submit}>
              <input value={title} onChange={updateTitle}/>
              <button onClick={submit}>+</button>
            </form>
  },

  updateTitle(e) { e.preventDefault(); actions.updateTitle(e.target.value); },
  submit(e)      { e.preventDefault(); actions.submit(this.state.title); }
});
