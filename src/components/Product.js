import React, { Component } from 'react'

export default class Product extends Component {
  render() {
    return (
        <div>
        <h4>{this.props.name}</h4>
        <h5>{this.props.description}</h5>
        <p>$ {this.props.price}</p>
    </div>
    )
  }
}
