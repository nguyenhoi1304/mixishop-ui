import { combineReducers } from "redux";
import callPageProductsReducer from "./callPageProductsReducer";
import callPricesReducer from "./callPricesReducer";



//luu tru data cua redux
const RootReducer = combineReducers({
    callPageProducts: callPageProductsReducer,
    callPrices: callPricesReducer,
})

export default RootReducer;