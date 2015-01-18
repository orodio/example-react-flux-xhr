"use strict";

var debug      = false;
var React      = require("react");
var App        = require("./components/App");
var dispatcher = require("oro-dispatcher");

React.render(<App/>, document.body);

if (debug) {
  dispatcher.register(function(payload) {
    var {action}     = payload;
    var {actionType} = action;
    console.log(actionType, action);
  });
}
