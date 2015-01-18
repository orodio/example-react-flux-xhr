"use strict";

import React          from "react";
import Counters       from "../CountersController";
import NewCounterForm from "../NewCounterForm";

export default React.createClass({
  displayName : "App",

  render() {
    return  <div>
              <h2>Counter App</h2>
              <NewCounterForm/>
              <Counters/>
            </div>
  }
});
