
import { callProductAction } from "~/enum/enum"
import { callTotalPricectAction } from "~/enum/enum"
import { callDetailItemAction } from "~/enum/enum"


export const callProductActions = (label) => {
    return {
        type: callProductAction.callProductAction,
        payload: label,
    }
}

export const callTotalPricectActions = (prices) => {
    return {
        type: callTotalPricectAction.callTotalPricectAction,
        payload: prices,
    }
}
export const callDetailItemActions = (itemDetail) => {
    return {
        type: callDetailItemAction.callDetailItemAction,
        payload: itemDetail,
    }
}