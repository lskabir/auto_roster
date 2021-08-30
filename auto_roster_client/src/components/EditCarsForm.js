import React from 'react'
import { editCar } from '../actions/carsActions'
import { connect } from 'react-redux'

class EditCarsForm extends React.Component {
    state = {
        id: '',
        make: '',
        model: '',
        color: '',
        year: '',
        origin_id: ''
    }

    componentDidMount() {
        const {
            id,
            make,
            model,
            color,
            year,
            origin_id,
        } = this.props.car;

        this.setState({
            id,
            make,
            model,
            color,
            year,
            origin_id,
        });
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    confirm = (event) => {
        event.preventDefault();
        this.props.editCar(this.state);
        this.props.closeForm();
    }
    
    cancel = (event) => {   
        event.preventDefault();
        this.props.closeForm();
    }

    render() {
        return (
            <div>
                <h2>Edit Car Info:</h2>
                <form onSubmit={this.confirm}>
                    <input type='text' value={this.state.make} onChange={this.handleChange} name='make' /><br />
                    <input type='text' value={this.state.model} onChange={this.handleChange} name='model' /><br />
                    <input type='text' value={this.state.color} onChange={this.handleChange} name='color' /><br />
                    <input type='number' value={this.state.year} onChange={this.handleChange} name='year' /><br />

                    <span><strong>Choose A Origin:</strong></span>
                    <select onChange={this.handleChange} name='origin_id'>
                        <option>Import</option>
                        <option>Export</option>
                    </select><br /><br />
                    <button onClick={this.cancel}>Cancel</button>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { editCar })(EditCarsForm)