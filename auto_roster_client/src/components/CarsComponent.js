import React from 'react';
import { Button } from 'react-bootstrap';

const CarsComponent = ({cars, deleteCar}) => {
    return (cars.map(car => {
        return (
            <div className="border border-white h-75" key={car.id}>
                <h3>{car.make}</h3>
                <p>Model: {car.model}</p>
                <p>Color: {car.color}</p>
                <p>Year: {car.year}</p>
                <Button className="btn btn-danger" onClick={() => deleteCar(car.id)}>Delete</Button>
            </div>
        )
    }))
}

export default CarsComponent