"use strict";

var NS             = "COUNTERS_NEW_FORM";
var {assign}       = require("lodash");
var {EventEmitter} = require("events");
var dispatcher     = require("oro-dispatcher");

var __Title      = "";
var __TitleValid = false;

var store = module.exports = assign({}, EventEmitter.prototype, {
  broadcast()     { this.emit(NS); },
  subscribe(fn)   { this.on(NS, fn); },
  unsubscribe(fn) { this.removeListener(NS, fn); },

  getTitle()      { return __Title; },
  getTitleValid() { return __TitleValid; },

  dispatcherToken : dispatcher.register(function(payload) {
    var {actionType, title} = payload.action;

    switch (actionType) {
      case "COUNTERS_NEW_FORM_UPDATE_TITLE":
        __Title = title;
        __TitleValid = __Title.length > 0;
        store.broadcast();
        break;

      case "COUNTERS_NEW_FORM_RESET":
        __Title = "";
        store.broadcast();
        break;
    }
  })
});
