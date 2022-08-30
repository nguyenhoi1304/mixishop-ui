
import { callProductAction } from "~/emun/emun"

const initState = {
    label: 'all',
}


const callPageProductsReducer = (state = initState, action) => {
    switch (action.type) {
        case callProductAction.callProductAction:
            return {
                ...state,
                label: (action.payload)
            }
        default:
            return state;
    }
}

export default callPageProductsReducer