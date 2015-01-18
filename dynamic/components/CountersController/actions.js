"use strict";

var xhr  = require("superagent");
var send = require("oro-dispatcher/lib/send");
var get  = require("oro-xhr/lib/get");

function getCounters() {
  return get("/api/v1/counters");
}

function getCountersSuccess(res) {
  send("COUNTERS_UPDATE", {
    data : JSON.parse(res.text)
  });
}

function err(res) {
  console.erro(res);
}

module.exports = {
  poll() {
    getCounters().then(getCountersSuccess, err);
  }
};
