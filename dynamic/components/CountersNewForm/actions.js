"use strict";

var send = require("oro-dispatcher/lib/send");
var post = require("oro-xhr/lib/post");

function createCounter(title) {
  return post("/api/v1/counter", {title});
}

function createCounterSuccess(res) {
  send("COUNTERS_UPDATE", {data: JSON.parse(res.text)});
  send("COUNTERS_NEW_FORM_RESET");
}

module.exports = {
  updateTitle(title) { send("COUNTERS_NEW_FORM_UPDATE_TITLE", {title}); },
  submit(title)      { createCounter(title).then(createCounterSuccess); }
};
