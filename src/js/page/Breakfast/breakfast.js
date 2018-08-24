/**
 * breakfast.js
 */

import React from 'react'
import {Dish} from '../../component/Dish/Dish'

export class Breakfast extends React.Component {

  constructor() {
    super();
    console.log('breakfast page work');
  }

  render() {
    return (
      <Dish name="Big Mac"></Dish>
    )
  }

}
