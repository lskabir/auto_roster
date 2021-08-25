import React, { Component } from 'react';

class CarsForm extends Component {

    state = {
        make: '',
        model: '',
        color: '',
        year: '',
        origin_id: ''
    }

    render() {
        return (
            <form>
                <input type='text' value={this.state.make} onChange={this.handleChange} name='name' placeholder='Make' /><br/>
                <input type='text' value={this.state.model} onChange={this.handleChange} name='model' placeholder='Model' /><br/>
                <input type='text' value={this.state.color} onChange={this.handleChange} name='color' placeholder='Color' /><br/>
                <input type="number" value={this.state.year} onChange={this.handleChange} name='year' placeholder='Year' /><br/>
                <input type='number' value={this.state.origin_id} onChange={this.handleChange} name='name' placeholder='Origin' /><br/>
                <input type='submit' value='New Car' />
            </form>
        )
    }
}

export default CarsForm