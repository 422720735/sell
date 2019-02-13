import Types from '../type';

export function onDetailChange(index) { // 返回商品数量
    return dispatch => {
        dispatch({type: Types.GOTOGOODDETAil, index: index});
    }

}