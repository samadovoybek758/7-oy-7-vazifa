import { combineReducers, createStore} from "redux"
import themeReducer from "./themeReducer"
import cartReducer from "./cartReducer"

const rootReducers = combineReducers({
    theme : themeReducer,
    cart : cartReducer
})
export const store = createStore(rootReducers)