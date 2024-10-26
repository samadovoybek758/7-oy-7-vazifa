import { combineReducers, createStore} from "redux"
import themeReducer from "./themeReducer"
import cartReducer from "./cartReducer"
import languageReducer from "./languageRedux"

const rootReducers = combineReducers({
    theme : themeReducer,
    cart : cartReducer,
    lang: languageReducer
})
export const store = createStore(rootReducers)