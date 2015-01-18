var _ = require("lodash");

var __Counters = {};

module.exports = {
  all    : function() { return _.map(__Counters, _.identity); },
  create : create,
  inc    : applyTo("count", inc),
  dec    : applyTo("count", dec),
  delete : del
};

function genId() {
  return (+new Date() + ~~(Math.random() * 999999)).toString(36);
}

function create(title) {
  var id = genId();
  __Counters[id] = {id: id, title: title, count: 0};
  return true;
}

function del(id) {
  delete __Counters[id];
  return true;
}

function applyTo(key, fn) {
  return function(id) {
    var val = __Counters[id][key];
    __Counters[id][key] = fn(val);
    return true;
  }
}

function inc(x) { return x + 1; }
function dec(x) { return x - 1; }
