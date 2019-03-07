import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <div className='product'>
        <h4>Name: {this.props.name}</h4>
        <h5>Description: {this.props.description}</h5>
        <p> $ {this.props.price}</p>
    </div>
    )
  }
}
