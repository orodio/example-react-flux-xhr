"use strict";

import React     from "react";
import {map}     from "lodash";
import subscribe from "oro-dispatcher/lib/subscribe";
import store     from "./store";
import {poll}    from "./actions";
import Counter   from "../Counter";

function state() {
  return {
    counters : store.getAll()
  }
}

export default React.createClass({
  displayName : "CountersController",
  mixins      : [subscribe(store, state)],

  componentDidMount() { poll(); },

  render() {
    let {counters} = this.state;

    return  <div>
              {map(counters, d => <Counter {...d} key={d.id}/>)}
            </div>
  }
});
