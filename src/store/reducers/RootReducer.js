import { combineReducers } from "redux";
import callPageProductsReducer from "./callPageProductsReducer";



//luu tru data cua redux
const RootReducer = combineReducers({
    callPageProducts: callPageProductsReducer,
})

export default RootReducer;