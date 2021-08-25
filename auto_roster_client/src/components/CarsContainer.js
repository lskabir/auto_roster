import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchCars from '../actions/carsActions';
import CarsForm from './CarsForm';

class CarsContainer extends Component {

    componentDidMount() {
        this.props.fetchCars()
    }

    render() {
        return (
            <div>
                Cars container
                <CarsForm />
            </div>
        )
    }
}

export default connect(null, { fetchCars })(CarsContainer)