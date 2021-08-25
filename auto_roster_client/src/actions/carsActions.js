
const fetchCars = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/cars')
        .then(resp => resp.json())
        .then(cars => dispatch({type: 'FETCH_CARS', payload: cars}))
    }
}

export default fetchCars