import Types from '../../action/type';

const defaultState = {
    totalAllNum: 0
};
export default function onAction(state = defaultState, action) {
    switch (action.type) {
        case Types.SHOPPINGTOTAL:
            return {
                ...state,
                status: action.shopping.status,
                totalAllNum: action.shopping.totalAllNum,
                totalPrice: action.shopping.totalPrice,
            };
        default:
            return state;
    }
}