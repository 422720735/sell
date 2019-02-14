import Types from '../type';

export function onShoppingCountChange(shopping) { // 返回商品数量
    return dispatch => {

        dispatch({type: Types.SHOPPINGTOTAL, shopping: shopping});
    }
}