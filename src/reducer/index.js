import {combineReducers} from 'redux';
import shopping from './shopping'; // 购物的

import {rootCom, RootNavigator} from '../js/navigator/AppNavigator';

// 1.指定默认的state  传入根路由 "Init"
const navState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams(rootCom));

/*
* 2.创建自己的 navigation reducer
* */
const navReducer = (state = navState, action) => {
    const nextState = RootNavigator.router.getStateForAction(action, state);
    // 如果 nextState为 null 或为定义，只需返回原始 state
    return nextState || state;
}

/*
* 3.合并reducer
* @type {reducer<any> | reducer<any, AnyAction>}
* */
const index = combineReducers({
    nav: navReducer,
    shopping: shopping,

});

export default index;