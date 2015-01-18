"use strict";

import send from "oro-dispatcher/lib/send";
import post from "oro-xhr/lib/post";

function postCreate(title) {
  return post("/api/v1/counter", {title});
}

function updateCounters(res) {
  send("COUNTERS_UPDATE", {counters: JSON.parse(res.text)});
}

export default {
  updateTitle(title) { send("COUNTER_FORM_UPDATE_TITLE", {title}); },

  submit(title) {
    postCreate(title)
      .then(updateCounters)
      .then(send.bind(null, "COUNTER_FORM_RESET"));
  }
};
