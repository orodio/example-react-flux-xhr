"use strict";

import projection from "oro-dispatcher/store";

let __Title = "";

export default projection("COUNTER_FORM", {

  getTitle() { return __Title; }

}, function(payload) {
  var {actionType, title} = payload.action;

  switch (actionType) {
    case "COUNTER_FORM_UPDATE_TITLE":
      __Title = title;
      this.broadcast();
      break;

    case "COUNTER_FORM_RESET":
      __Title = "";
      this.broadcast();
      break;
  }
});
