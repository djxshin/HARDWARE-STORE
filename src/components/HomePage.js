import React, { Component } from 'react'

export default class HomePage extends Component {

  state = {
    itemCurrentlyOnSale: 'some nails',
    showEditForm: false
  }

  render() {

    return (
      <div>
        <div>
        <h1>My Hardware Store</h1>
	      <div>Currently On Sale: {this.state.itemCurrentlyOnSale} !</div>
        <button>Edit Sale Item</button>
          {this.state.showEditForm ? (
              <div>
                <input type="text" placeholder="Update Item Here"/>
              </div>
            ): null
            }
        
          </div>
      </div>
    )
  }
}
