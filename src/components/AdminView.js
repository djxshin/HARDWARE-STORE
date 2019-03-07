import React, { Component } from 'react'

export default class AdminView extends Component {
  render() {
    return (
        <div>
        <h1>Admin View</h1>
        <h2>Products</h2>
        {this.props.productList.map((product, index) => {
            console.log(product)
            return(
                <div key={index} >
                    <h4>{product.productName}</h4>
                    <h5>{product.description}</h5>
                    <p>$ {product.price}</p>
                </div>
            )
        })}
        <h2>Create a New Product</h2>
        {/* create product form goes here */}
      </div>
    )
  }
}
