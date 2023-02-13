
import { callDetailItemAction } from "~/enum/enum"

const initState = {
    itemDetail:[]
}


const callDetailItemReducer = (state = initState, action) => {
    switch (action.type) {
        case callDetailItemAction.callDetailItemAction:
            return {
                ...state,
                itemDetail: (action.payload)
            }

        default:
            return state;
    }
}

export default callDetailItemReducer