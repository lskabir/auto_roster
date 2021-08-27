import React from 'react';

const CarsComponent = ({cars, deleteCar}) => {
    return (cars.map(car => {
        return (
            <div key={car.id}>
                <h3>{car.make}</h3>
                <p>Model: {car.model}</p>
                <p>Color: {car.color}</p>
                <p>Year: {car.year}</p>
                <button onClick={() => deleteCar(car.id)}>Delete</button>
            </div>
        )
    }))
}

export default CarsComponent