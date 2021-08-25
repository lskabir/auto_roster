const carsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_CARS':
            return action.payload
        case 'ADD_CAR':
            console.log(action.payload)
            return [...state, action.payload]
        default:
            return state
    }
}

export default carsReducer
