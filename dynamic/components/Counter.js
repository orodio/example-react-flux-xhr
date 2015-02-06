"use strict";

import React   from "react";
import actions from "../actions/counters";

export default React.createClass({
  render() {
    let {props, del, inc, dec} = this;
    let {title, count}         = props;

    return <div>
      <button onClick={del}>x</button>
      {title}: {count}
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </div>
  },

  del(e) { e.preventDefault(); actions.del(this.props.id); },
  inc(e) { e.preventDefault(); actions.inc(this.props.id); },
  dec(e) { e.preventDefault(); actions.dec(this.props.id); }
});

