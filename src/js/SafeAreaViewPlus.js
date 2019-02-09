import React, {Component,} from 'react';
import {DeviceInfo, SafeAreaView, StyleSheet, View, ViewPropTypes} from 'react-native';
import {PropTypes} from 'prop-types';

export default class SafeAreaViewPlus extends Component {
    // 属性检查
    static propTypes = {
        ...ViewPropTypes,
        topColor: PropTypes.string,
        bottomColor: PropTypes.string,
        enablePlus: PropTypes.bool,
        topInset: PropTypes.bool,
        bottomInset: PropTypes.bool,
    };

    // 默认值
    static defultProps = {
        topColor: 'transparent',
        bottomColor: '#f8f8f8',
        enablePlus: true,
        topInset: true,
        bottomInset: false,
    };

    // 生成SafeAreaView   children是别的组件， 我们的组件嵌套它里面
    genSafeAreaViewPlus() {
        const {children, topColor, bottomColor, topInset, bottomInset} = this.props;
        return <View style={[styles.container, this.props.style]}>
            {/*顶部的安全区域*/}
            {this.getTopArea(topColor, topInset)}
            {/*我们的组件部分*/}
            {children}
            {/*底部的安全区域*/}
            {this.getBottomArea(bottomColor, bottomInset)}
        </View>;
    }

    // 获取系统的SafeAreaView
    genSafeAreaView() {
        return <SafeAreaView style={[styles.container, this.props.style]} {...this.props}>
            {this.props.children}
        </SafeAreaView>
    }
    // 顶部的安全区域
    getTopArea(topColor, topInset) {
               //  判断是不是全面屏 并且 是不是要显示全面屏
        return !DeviceInfo.isIPhoneX_deprecated || !topInset ? null
            : <View style={[styles.topArea, {backgroundColor: topColor}]}/>;
    }
    // 底部的安全区域
    getBottomArea(bottomColor, bottomInset) {
        return !DeviceInfo.isIPhoneX_deprecated || !bottomInset ? null
            : <View style={[styles.bottomArea, {backgroundColor: bottomColor}]}/>;
    }

    render() {
        const {enablePlus} = this.props;
        // 判断我们用自己封装的还是Rn自带的。
        return enablePlus ? this.genSafeAreaViewPlus() : this.genSafeAreaView();
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topArea: {
        height: 44,
    },
    bottomArea: {
        height: 34,
    }
});