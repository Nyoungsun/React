import { combineReducers } from "redux";
import count from './modules/count'
import color from './modules/color'
import animal from './modules/animal'

export default combineReducers({
    color: color,
    count: count,
    animal: animal
})