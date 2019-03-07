import React, { Component } from 'react'

export default class ProductForm extends Component {

    state={
        
            name: '',
            description: '',
            price: 0.00
        
    }

    handleChange = (event) => {
       this.setState({
         [event.target.name] : event.target.value
       })
    }

    handleSubmit = (event) => {
        event.preventDefault()
       
        this.props.addProductToProuctList(this.state)
        this.setState({
            name:'',
            description: '',
            price: 0
        })
    }

  render() {
    return (
        <form onSubmit={this.handleSubmit} className='product-form'>
            <div>
                <label htmlFor='name'>Product Name</label>
                <input type='text' name='name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor='description'>Product Description</label>
                <input type='text' name='description'
                    value={this.state.description}
                    onChange={this.handleChange}
                />
            </div>
            <div>
                <label htmlFor='price'>Product Price</label>
                <input type='number' name='price'
                    value={this.state.price}
                    onChange={this.handleChange}
                />
            </div>
         
                <button type='submit'>Create New Product</button>
        </form>
    )
  }
}
