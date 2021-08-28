
export const fetchCars = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/cars')
        .then(resp => resp.json())
        .then(cars => dispatch({type: 'FETCH_CARS', payload: cars}))
    }
}

export const addCar = (car) => {
    return (dispatch) => {
        fetch('http://localhost:3000/cars', {
            method: 'POST',
            body: JSON.stringify(car),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(car => dispatch({type: 'ADD_CAR', payload: car}))
    }
}

export const deleteCar = id => {
    return (dispatch) => {
    fetch(`http://localhost:3000/cars/${id}`, {
        method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(car => dispatch({type: 'DELETE_CAR', payload: car.id}))
    }
}