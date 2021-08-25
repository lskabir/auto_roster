import { connect } from 'react-redux';

const CarsComponent = props => {
    return (props.cars.map(car => {
        return (
            <div key={car.id}>
                <h2>{car.make}</h2>
            </div>
        )
    }))
}

const mapStateToProps = state => {
    return {
        cars: state
    }
}

export default connect(mapStateToProps)(CarsComponent)