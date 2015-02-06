"use strict";

import store from "oro-dispatcher/store";

let __counters = [];
let __total    = 0;

export default store("COUNTERS", {

  getAll()   { return __counters; },
  getTotal() { return __total; },

}, function(payload) {

  let {actionType, counters} = payload.action;

  switch (actionType) {
    case "COUNTERS_UPDATE":
      __counters = counters;
      __total    = counters.reduce(sum, 0);
      this.broadcast();
      break;
  }

});

function sum(acc,d) { return acc + d.count; }
