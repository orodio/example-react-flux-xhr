"use strict";

var NS             = "COUNTERS";
var {EventEmitter} = require("events");
var {assign}       = require("lodash");
var dispatcher     = require("oro-dispatcher");

var __Counters = [];

var store = module.exports = assign({}, EventEmitter.prototype, {
  broadcast()     { this.emit(NS); },
  subscribe(fn)   { this.on(NS, fn); },
  unsubscribe(fn) { this.removeListener(NS, fn); },

  getAll() { return __Counters; },

  dispatcherToken : dispatcher.register(function(payload) {
    var {actionType, data} = payload.action;

    switch (actionType) {
      case "COUNTERS_UPDATE":
        __Counters = data;
        store.broadcast();
    }
  })
});
