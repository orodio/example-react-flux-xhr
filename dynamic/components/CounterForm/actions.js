"use strict";

import send from "oro-dispatcher/send";
import post from "oro-xhr/lib/post";

function postCreate(title)  { return post("/api/v1/counter", {title}).then(update); }
function update(res)        { send("COUNTERS_UPDATE", {counters: JSON.parse(res.text)}); }

function updateTitle(title) { send("COUNTER_FORM_UPDATE_TITLE", {title}); }
function submit(title)      { postCreate(title).then(()=> send("COUNTER_FORM_RESET")); }

export default { updateTitle, submit };
