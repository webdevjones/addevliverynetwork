const routeReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_ROUTE':
            return action.data
        default:
            return state
    }
}
export const setRoute = (index) => {
    return {
        type: 'SET_ROUTE',
        data: index
    }
}


export default routeReducer