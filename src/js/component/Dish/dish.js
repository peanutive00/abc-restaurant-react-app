/**
 * dish.js
 */

import React from "react";

export class Dish extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    console.log(this.props);
  }

  render() {
    return(
      <p>{this.props.name}</p>
    )
  }

}
