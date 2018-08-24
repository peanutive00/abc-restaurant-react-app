/**
 * breakfast.js
 */

import React from 'react'
import {Dish} from '../../component/Dish/Dish'

export class Breakfast extends React.Component {

  constructor() {
    super();
  }

  render() {

    let menu = ['Big Mac', 'New York Strips', 'Ramen'];

    return (
        menu.map(item => (
            <Dish name={item}></Dish>
        ))
    );
  }

}
