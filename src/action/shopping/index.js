import Types from '../type';

export function onShoppingCountChange(count) { // 返回商品数量
    return dispatch => {
        dispatch({type: Types.COUNTGOODS, count: count, index: 35});
    }

}