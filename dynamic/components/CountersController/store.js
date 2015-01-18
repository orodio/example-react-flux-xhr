"use strict";

import projection from "oro-dispatcher/lib/projection";

let __Counters = [];

let store = projection("COUNTERS", fromDispatcher, {
  getAll() { return __Counters; }
});

function fromDispatcher(payload) {
  let {actionType, counters} = payload.action;

  switch (actionType) {
    case "COUNTERS_UPDATE":
      __Counters = counters;
      store.broadcast();
      break;
  }
}

export default store;
