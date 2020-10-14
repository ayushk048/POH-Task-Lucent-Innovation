
import { SELECT_BOX, SUBMIT_CARD, SUBMIT_GIFTS } from "./actionsTypes";

const initialState = {
    selectedBox: null,
    selectedGifts: [],
    selectedCard: null,
    totalPrice: 0
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_BOX:
            return {
                ...state,
                selectedBox: action.selectedBox,
                totalPrice: action.selectedBox.price
            }
        case SUBMIT_GIFTS:
            return {
                ...state,
                selectedGifts: action.selectedGifts,
                totalPrice: action.totalPrice
            }
        case SUBMIT_CARD:
            return {
                ...state,
                selectedCard: action.card,
                totalPrice: action.totalPrice
            }
        default:
            return state;
    }
}

export default reducer;