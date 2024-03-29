import React, { Component } from 'react';
import { connect } from 'react-redux';
import CarsComponent from '../components/CarsComponent';
import { fetchCars, editCar, deleteCar } from '../actions/carsActions';

class CarsContainer extends Component {
    componentDidMount() {
        this.props.fetchCars()
    }

    render() {
        return (
            <div>
                <CarsComponent cars={this.props.cars} editCar={this.props.editCar} deleteCar={this.props.deleteCar} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cars: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCars: () => {
            dispatch(fetchCars())
        },
        editCar: (car) => {
            dispatch(editCar(car))
        },
        deleteCar: (id) => {
            dispatch(deleteCar(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsContainer)