
import { callPageProduct } from "~/emun/emun"

const initState = {
    label: 'all',
}


const callPageProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case callPageProduct.callPageProduct:
            return {
                ...state,
                label: (action.payload)
            }
        default:
            return state;
    }
}

export default callPageProductsReducer