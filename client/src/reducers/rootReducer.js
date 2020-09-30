import { combineReducers } from 'redux'
import adReducer from './adReducer'
import routeReducer from './routeReducer'


export default combineReducers({
    ads: adReducer,
    route: routeReducer,
}) 