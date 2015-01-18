"use strict";

import send  from "oro-dispatcher/lib/send";
import get from "oro-xhr/lib/get";

function getCounters() { return get("/api/v1/counters"); }

function updateCounters(res) {
  send("COUNTERS_UPDATE", {counters: JSON.parse(res.text)});
}

export default {
  poll() { getCounters().then(updateCounters); }
};
