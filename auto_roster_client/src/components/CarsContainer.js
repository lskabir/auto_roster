import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarsComponent from './CarsComponent';
import { fetchCars } from '../actions/carsActions';
import CarsForm from './CarsForm';

class CarsContainer extends Component {

    componentDidMount() {
        this.props.fetchCars()
    }

    render() {
        return (
            <div>
                <CarsComponent />
                <h2>Add new car to the inventory:</h2>
                <CarsForm />
            </div>
        )
    }
}

export default connect(null, { fetchCars })(CarsContainer)