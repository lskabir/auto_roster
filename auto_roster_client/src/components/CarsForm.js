import React, { Component } from 'react';
import { addCar } from '../actions/carsActions';
import { connect } from 'react-redux';

class CarsForm extends Component {

    state = {
        make: '',
        model: '',
        color: '',
        year: '',
        origin_id: ''
    }

    handleChange = event => {
        const { name, value } = event.target

        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()

        this.props.addCar(this.state)
        
        const name = event.target
        this.setState({
            [name]: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.make} onChange={this.handleChange} name='make' placeholder='Make' /><br/>
                <input type='text' value={this.state.model} onChange={this.handleChange} name='model' placeholder='Model' /><br/>
                <input type='text' value={this.state.color} onChange={this.handleChange} name='color' placeholder='Color' /><br/>
                <input type="number" value={this.state.year} onChange={this.handleChange} name='year' placeholder='Year' /><br/>

                <select id='origins' name='origin_id'>
                    <option>Choose a Origin:</option>
                    <option value={this.state.origin_id}>Import</option>
                    <option value={this.state.origin_id}>Export</option>
                </select><br/><br/>
                
                <input type='submit' value='Add Car' />
            </form>
        )
    }
}

export default connect(null, { addCar })(CarsForm)