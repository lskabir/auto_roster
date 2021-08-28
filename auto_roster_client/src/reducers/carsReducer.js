const carsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CARS':
            return action.payload
        case 'ADD_CAR':
            return [...state, action.payload]
        case 'DELETE_CAR':
            return state.filter(car => car.id !== action.payload)
        default:
            return state
    }
}

export default carsReducer
