var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var compression = require("compression");
var morgan      = require("morgan");
var PORT        = Number( process.env.PORT || 3000 );
var counters    = require("./lib/counters");

app.use(morgan("combined"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(compression());

function sendFile(name) {
  return function(x, res) {
    res.sendFile(__dirname + "/static/" + name);
  };
}

app.get("/",        sendFile("index.html"));
app.get("/scripts", sendFile("scripts.js"));
app.get("/styles",  sendFile("styles.css"));

app.get("/api/v1/counters",  function(req, res) { res.json(counters.all()); });

app.post("/api/v1/counter", function(req, res) {
  counters.create(req.body.title);
  return res.json(counters.all());
});

app.delete("/api/v1/counter", function(req, res) {
  counters.delete(req.body.id);
  return res.json(counters.all());
});

app.post("/api/v1/counter/inc", function(req, res) {
  counters.inc(req.body.id);
  return res.json(counters.all());
});

app.post("/api/v1/counter/dec", function(req, res) {
  counters.dec(req.body.id);
  return res.json(counters.all());
});



app.get("*",        sendFile("index.html"));
app.head("*",       sendFile("index.html"));

app.listen(PORT, console.log.bind(null, "PORT: " + PORT));

