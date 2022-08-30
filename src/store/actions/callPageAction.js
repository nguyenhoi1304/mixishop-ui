
import { callProductAction } from "~/emun/emun"


export const callProductActions = (label) => {
    return {
        type: callProductAction.callProductAction,
        payload: label,
    }
}