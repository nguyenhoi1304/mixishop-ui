import { combineReducers } from "redux";
import callDetailItemReducer from "./callDetailItemReducer";
import callPageProductsReducer from "./callPageProductsReducer";
import callPricesReducer from "./callPricesReducer";



//luu tru data cua redux
const RootReducer = combineReducers({
    callPageProducts: callPageProductsReducer,
    callPrices: callPricesReducer,
    callDetail: callDetailItemReducer,
})

export default RootReducer;