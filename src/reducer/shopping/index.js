import Types from '../../action/type';

import Data from '../../js/data/data'
const defaultState = {
    totalAllNum: 0,
    totalPrice: 0,
    status: Data.goods
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