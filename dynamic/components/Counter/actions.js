"use strict";

var send = require("oro-dispatcher/lib/send");
var post = require("oro-xhr/lib/post");

function postInc(id) { return post("/api/v1/counter/inc", {id}); }
function postDec(id) { return post("/api/v1/counter/dec", {id}); }

function updateCounters(res) { send("COUNTERS_UPDATE", {data: JSON.parse(res.text)}); }

module.exports = {
  inc(id) { postInc(id).then(updateCounters); },
  dec(id) { postDec(id).then(updateCounters); }
};
