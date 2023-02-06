
import { callTotalPricectAction } from "~/enum/enum"

const initState = {
    prices: 0,
}


const callPageProductsReducer = (state = initState, action) => {
    switch (action.type) {

        case callTotalPricectAction.callTotalPricectAction:
            return {
                ...state,
                prices: (action.payload)
            }
        default:
            return state;
    }
}

export default callPageProductsReducer