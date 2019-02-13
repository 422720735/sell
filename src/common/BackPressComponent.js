import React, {Component} from 'react';
import {BackHandler} from 'react-native';

/*
* 封装的Android物理返回键
*
* 可以直接把BackAndroid替换成BackHandler就行。
根据文档，安卓back键的处理主要就是一个事件监听：
* */
export default class BackPressComponent {
    /*
    * 这里是我们封装的android返回键
    * */
    constructor(props) {
        this._hardwareBackPress = this.onHardwareBackPress.bind(this);
        this.props = props;
    }

    /*
    * componentDidMount : 在第一次渲染后调用，只在客户端。之后组件已经生成了对应的DOM结构，
    * 可以通过this.getDOMNode()来进行访问。 如果你想和其他JavaScript框架一起使用，
    * 可以在这个方法中调用setTimeout, setInterval或者发送AJAX请求等操作(防止异步操作阻塞UI)。
    * */
    componentDidMount() {
        if (this.props.backPress) BackHandler.addEventListener("hardwareBackPress", this._hardwareBackPress);
    }

    /*
    * componentWillUnmount在组件从 DOM 中移除之前立刻被调用。
    * */
    componentWillUnmount() {
        if (this.props.backPress) BackHandler.addEventListener("hardwareBackPress", this._hardwareBackPress);
    }

    onHardwareBackPress(e) {
        return this.props.backPress(e);
    }
}