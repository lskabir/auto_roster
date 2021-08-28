import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
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
        this.setState({make: '', model: '', color: '', year: ''})
    }

    render() {
        return (
            <div id="form">
            <h2>Add new car to the inventory:</h2>
            <form onSubmit={this.handleSubmit}>
                <input className="form-control"  type='text' value={this.state.make} onChange={this.handleChange} name='make' placeholder='Make' /><br/>
                <input className="form-control" type='text' value={this.state.model} onChange={this.handleChange} name='model' placeholder='Model' /><br/>
                <input className="form-control" type='text' value={this.state.color} onChange={this.handleChange} name='color' placeholder='Color' /><br/>
                <input className="form-control" type="number" value={this.state.year} onChange={this.handleChange} name='year' placeholder='Year' /><br/>

                <span><strong>Origin:</strong></span>
                <select onChange={this.handleChange} name='origin_id'>
                    <option>Import</option>
                    <option>Export</option>
                </select><br/><br/>
                
                <Button type="submit" className="btn btn-light btn-outline-dark">Add Car</Button>
            </form>
            </div>
        )
    }
}

export default connect(null, { addCar })(CarsForm)
