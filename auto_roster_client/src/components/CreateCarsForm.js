import React, { Component } from 'react';
import { addCar } from '../actions/carsActions';
import { connect } from 'react-redux';

class CreateCarsForm extends Component {

    state = {
        make: '',
        model: '',
        color: '',
        year: '',
        origin_id: 'Import'
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
            <div className="form">
            <h2 className='text' style={{color:'#3DB2FF'}}><strong>Add new car to the inventory</strong></h2>
            <form onSubmit={this.handleSubmit}>
                <input className="form-control"  type='text' value={this.state.make} onChange={this.handleChange} name='make' placeholder='Make' /><br/>
                <input className="form-control" type='text' value={this.state.model} onChange={this.handleChange} name='model' placeholder='Model' /><br/>
                <input className="form-control" type='text' value={this.state.color} onChange={this.handleChange} name='color' placeholder='Color' /><br/>
                <input className="form-control" type="number" value={this.state.year} onChange={this.handleChange} name='year' placeholder='Year' /><br/>

                <span><strong style={{margin:'10px'}}>Choose A Origin:</strong></span>
                <select onChange={this.handleChange} name='origin_id'>
                    <option>Import</option>
                    <option>Export</option>
                </select><br/><br/>
                
                <button type="submit" className="btn btn-info">Add Car</button>
            </form>
            </div>
        )
    }
}

export default connect(null, { addCar })(CreateCarsForm)
