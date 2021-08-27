const carsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CARS':
            return action.payload
        case 'ADD_CAR':
            return [...state, action.payload]
        default:
            return state
    }
}

export default carsReducer
