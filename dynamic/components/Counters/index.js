"use strict";

var React         = require("react");
var Counter       = require("../Counter");
var NewForm       = require("../CountersNewForm");
var {map, reduce} = require("lodash");
var {array}       = React.PropTypes;

module.exports = React.createClass({
  displayName : "Counters",

  propTypes : {
    data : array
  },

  render() {
    var {data} = this.props;

    return  <div className="Counters">
              <h3>Total: {total(data)}</h3>
              <NewForm/>
              {map(data, Counter.mapper)}
            </div>
  }
});

function total(data) {
  return reduce(data, (acc, d) => acc + d.count , 0);
}
