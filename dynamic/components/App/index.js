"use strict";

var React              = require("react");
var CountersController = require("../CountersController");

module.exports = React.createClass({
  displayName : "App",

  render() {
    return  <div>
              <h2>Counter App</h2>
              <CountersController/>
            </div>
  }
});
