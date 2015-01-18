"use strict";

var projection   = require("oro-dispatcher/lib/projection");
var __Title      = "";
var __TitleValid = false;

var store = module.exports = projection("COUNTERS_NEW_FORM", dispatch, {
  getTitle()      { return __Title; },
  getTitleValid() { return __TitleValid; },
});

function dispatch(payload) {
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
}
