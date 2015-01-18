"use strict";

import send from "oro-dispatcher/lib/send";
import post from "oro-xhr/lib/post";
import del  from "oro-xhr/lib/delete";

function postInc(id) {
  return post("/api/v1/counter/inc", {id});
}

function postDec(id) {
  return post("/api/v1/counter/dec", {id});
}

function delCounter(id) {
  return del("/api/v1/counter", {id});
}

function updateCounters(res) {
  send("COUNTERS_UPDATE", {counters: JSON.parse(res.text)});
}

export default {
  inc(id) { postInc(id).then(updateCounters); },
  dec(id) { postDec(id).then(updateCounters); },
  del(id) { delCounter(id).then(updateCounters); }
}

