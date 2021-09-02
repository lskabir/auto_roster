import React, { useState } from 'react';
import EditCarsForm from '../components/EditCarsForm';

const CarsComponent = ({cars, editCar, deleteCar}) => {
    const [carForm, setCarForm] = useState();

    return (cars.map((car, index) => {
        return (
            <div className="car-div border border-white h-75" key={car.id}>
                <h3>{car.make}</h3>
                <p>Model: {car.model}</p>
                <p>Color: {car.color}</p>
                <p>Year: {car.year}</p>
                <p>Origin: {car.origin.name}</p>
                <button className="button btn btn-info" onClick={() => setCarForm(index)}>Edit</button>
                <button className="button btn btn-danger" onClick={() => deleteCar(car.id)}>Delete</button>
                {carForm === index &&
                    <EditCarsForm car={car} closeForm={() => setCarForm(null)} />
                }
            </div>
        )
    }))
}

export default CarsComponent