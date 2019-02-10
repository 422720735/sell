import React, {Component} from 'react';

import {
    StyleSheet, View, Text, DeviceInfo,
    TouchableOpacity, // TouchableOpacity组件用于封装视图，使其可以正确响应触摸操作。当按下的时候，封装的视图的不透明度会降低。
    Modal, // Modal 组件是一种简单的覆盖在其他视图之上显示内容的方式
} from 'react-native';

export default class HeanerDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    show() {
        this.setState({
            visible: true
        })
    }

    dismiss() {
        this.setState({
            visible: false
        })
    }

    render(){
        return (<Modal
            // transparent (透明度) bool
            transparent={true}
            // 显示或隐藏
            visible={true}
            // onRequestClose（被销毁时会调用此函数）
        >
            <TouchableOpacity>
                <View>
                    <Text>1</Text>
                </View>
            </TouchableOpacity>
        </Modal>)
    }
}