"use strict";

import React     from "react";
import subscribe from "oro-dispatcher/sub";
import Counter   from "./Counter";

export default React.createClass({
  displayName : "Counters",

  render() {
    let {counters: cs} = this.props;

    return  <div>
              {[ for(c of cs) <Counter {...c} key={c.id}/> ]}
            </div>
  }
});
