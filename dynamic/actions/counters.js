"use strict";

import send from "oro-dispatcher/send";
import get  from "oro-xhr/lib/get";
import post from "oro-xhr/lib/post";
import dele from "oro-xhr/lib/delete";

function poll()  { return get("/api/v1/counters"          ).then(update); }
function inc(id) { return post("/api/v1/counter/inc", {id}).then(update); }
function dec(id) { return post("/api/v1/counter/dec", {id}).then(update); }
function del(id) { return dele("/api/v1/counter",     {id}).then(update); }

function update(res) { send("COUNTERS_UPDATE", {counters: JSON.parse(res.text)}); }

export default { poll, inc, dec, del };

