"use strict";

import projection from "oro-dispatcher/lib/projection";

let __Title = "";

let store = projection("COUNTER_FORM", fromDispatcher, {
  getTitle() { return __Title; }
});

function fromDispatcher(payload) {
  var {actionType, title} = payload.action;

  switch (actionType) {
    case "COUNTER_FORM_UPDATE_TITLE":
      __Title = title;
      store.broadcast();
      break;

    case "COUNTER_FORM_RESET":
      __Title = "";
      store.broadcast();
      break;
  }
}

export default store;
