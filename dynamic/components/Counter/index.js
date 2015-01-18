"use strict";

import React from "react";
import {inc, del, dec} from "./actions";

let {string, number} = React.PropTypes;

export default React.createClass({
  displayName : "Counter",

  propTypes : {
    title : string,
    count : number,
    id    : string
  },

  render() {
    let {props, dec, inc, del} = this;
    let {title, count}         = props;

    return <div>
            <button onClick={dec}>–</button>
            <button onClick={inc}>{title}: {count}</button>
            <button onClick={del}>x</button>
          </div>
  },

  inc(e) {
    e.preventDefault();
    inc(this.props.id);
  },

  dec(e) {
    e.preventDefault();
    dec(this.props.id);
  },

  del(e) {
    e.preventDefault();
    del(this.props.id);
  }
});
