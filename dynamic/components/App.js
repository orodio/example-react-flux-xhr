"use strict";

import React           from "react";
import sub             from "oro-dispatcher/sub";
import countersStore   from "../stores/counters";
import countersActions from "../actions/counters";
import Counters        from "./Counters";
import CounterForm     from "./CounterForm";

function state() {
  return {
    counters : countersStore.getAll(),
    total    : countersStore.getTotal()
  }
}

export default React.createClass({
  displayName : "App",
  mixins      : [sub(state, countersStore)],

  componentDidMount() { countersActions.poll(); },

  render() {
    let {counters, total} = this.state;

    return  <div>
              <h2>Counter App: {total}</h2>
              <CounterForm/>
              <Counters counters={counters}/>
            </div>
  }
});
