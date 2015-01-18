"use strict";

var {assign}       = require("lodash");
var {EventEmitter} = require("events");
var dispatcher     = require("oro-dispatcher");

function projection(NS, cb, obj) {
  return assign({
    broadcast       : function()   { this.emit(NS); },
    subscribe       : function(fn) { this.on(NS, fn); },
    unsubscribe     : function(fn) { this.removeListener(NS, fn); },
    dispatcherToken : dispatcher.register(cb)
  }, EventEmitter.prototype, obj);
}

module.exports = projection;
