"use strict";

var projection = require("oro-dispatcher/lib/projection");
var __Counters = [];

var store = module.exports = projection("COUNTERS", dispatch, {
  getAll() { return __Counters; }
});

function dispatch(payload) {
  var {actionType, data} = payload.action;

  switch (actionType) {
    case "COUNTERS_UPDATE":
      __Counters = data;
      store.broadcast();
      break;
  }
}


