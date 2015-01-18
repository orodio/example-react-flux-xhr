"use strict";

var React            = require("react");
var {string, number} = React.PropTypes;
var Title            = require("./Title");
var Count            = require("./Count");
var Dec              = require("./Dec");
var Inc              = require("./Inc");

var Counter = module.exports = React.createClass({
  displayName : "Counter",

  propTypes : {
    id    : string,
    title : string,
    count : number
  },

  render() {
    var {id, title, count} = this.props;

    return  <div>
              <Title>{title}</Title>
              <Dec id={id}/>
              <Count>{count}</Count>
              <Inc id={id}/>
            </div>
  },

  statics : {
    mapper(d, i): Counter {
      return <Counter {...d} key={d.id}/>
    }
  }
})
