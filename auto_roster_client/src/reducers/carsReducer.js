const carsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CARS':
            return action.payload
        case 'ADD_CAR':
            return [...state, action.payload]
        case 'EDIT_CAR':
            const index = state.findIndex(({ id }) => id === action.payload.id);
            state[index] = action.payload;
            
            return [...state];
        case 'DELETE_CAR':
            return state.filter(car => car.id !== action.payload)
        default:
            return state
    }
}

export default carsReducer
