import React, { Component } from 'react'
import Product from './Product';


export default class AdminView extends Component {
  render() {
    return (
        <div className='admin-view'>
        <h1>Admin View</h1>
        <h2>Products</h2>
        {this.props.productList.map((product, index) => {
            console.log(product)
            return <Product 
            key={index} 
            name={product.productName}
            description={product.description}
            price={product.price}/>
             
            
        })}
        <h2>Create a New Product</h2>
        {/* create product form goes here */}
      </div>
    )
  }
}
