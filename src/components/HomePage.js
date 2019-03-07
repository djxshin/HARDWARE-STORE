import React, { Component } from 'react'


export default class HomePage extends Component {

  state = {
    itemCurrentlyOnSale: 'some nails',
    showEditForm: false
  }

  handleClick = () => {
    console.log('i was clicked')
    this.setState({
      showEditForm: !this.state.showEditForm
    })
   
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({
      itemCurrentlyOnSale: event.target.value
    })
   

  }

  render() {

    return (
      <div>
        <div className="hardware-header">
        <h1>My Hardware Store</h1>
	      <div>Currently On Sale: {this.state.itemCurrentlyOnSale} !</div>
        <button onClick={this.handleClick}>
        { this.state.showEditForm
          ? "Hide"
          : "Edit Sale Item"
      
        }
        </button>
          {this.state.showEditForm ? (
              <div>
                <input type="text" placeholder="Update Item Here" 
                      value={this.state.itemCurrentlyOnSale} 
                      onChange={this.handleChange}
                />
              </div>
            ): null
            }
        
          </div>
      </div>
    )
  }
}
