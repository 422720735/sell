import Types from '../type';

export function onShoppingCountChange(count, callBack) { // 返回商品数量
    //return {type: Types.COUNTGOODS, count: count}

    return dispatch => {
        dispatch({type: Types.COUNTGOODS, count: count});
    }

}