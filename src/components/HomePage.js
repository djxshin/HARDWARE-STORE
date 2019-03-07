import React, { Component } from 'react'
import AdminView from './AdminView';
import ShopView from './ShopView';
import CartView from './CartView';


export default class HomePage extends Component {

  state = {
    itemCurrentlyOnSale: 'some nails',
    showEditForm: false,
    productList: [
      {
        name: 'Hammer',
        description: 'Its a hammer',
        price: 12.3,
      },
      {
        name: 'Nail',
        description: 'Its a nail',
        price: 0.12,
      }
    ]
 
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
          <hr/>
           <AdminView 
           productList={this.state.productList} 
           />
           <div>
             <ShopView/>
             <CartView/>
           </div>
      </div>
    )
  }
}
