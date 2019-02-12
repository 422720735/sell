import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducer';
import {middleware} from '../js/navigator/AppNavigator';

// 自定义日志打印中间件
const logger = store => next => action => {
    if (typeof action === 'function') {
        console.log('dispatching a function');
    } else {
        console.log('dispatch', action);
    }
    // 下一个state
    const resule = next(action);
    console.log('nextState', store.getState())
}


// 中间件是个数组，传入所以的
const middlewares = [
    middleware,
    logger,
    thunk
];

/*
* 创建store
* applyMiddleware: 中间件
* */
export default createStore(reducers, applyMiddleware(...middlewares));
