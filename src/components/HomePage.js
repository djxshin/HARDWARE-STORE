import React, { Component } from 'react'

export default class HomePage extends Component {

  state = {
    itemCurrentlyOnSale: 'some nails'
  }

  render() {
    return (
      <div>
        <h1>My Hardware Store</h1>
	      <div>Currently On Sale: {this.state.itemCurrentlyOnSale} !</div>
        <button>Edit Sale Item</button>

        <div>
          <input type="text" placeholder="Update Item Here"/>
        </div>

      </div>
    )
  }
}
