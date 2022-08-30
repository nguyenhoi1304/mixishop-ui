
import { callPageProduct } from "~/emun/emun"


export const callPageAction = (label) => {
    return {
        type: callPageProduct.callPageProduct,
        payload: label,
    }
}