import React, {Component} from 'react';
import {
    ViewPropTypes, View, Text, StyleSheet,
    DeviceInfo,
    StatusBar, // StatusBar 是 React Native 0.20 起新增的跨平台组件，它可以用来设置并动态改变设备的状态栏显示特性。
    Platform, // 官方带的判断当前设备是ios还是android
} from 'react-native';
import PropTypes from 'prop-types';


const StatusBarShape = { // 设置状态栏所接受的属性
    barStyle: PropTypes.oneOf(['light-content', 'default']), // 限制你的属性值是某个特定值之一，只能是数组中定义的这两个
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string
};

// 通常来将导航栏的高度在Android和ios上是不同的，可判断当前设备进行适配
const NAV_BAR_HEIGHT_IOS = 44; // 导航栏在ios的高度
const NAV_BAR_HEIGHT_ANDROID = 50; // 导航栏在android的高度
const STATUS_BAR_HEIGHT = DeviceInfo.isIPhoneX_deprecated ? 0 : 20; // 顶部状态栏高度

export default class NavigationBar extends Component {
    // 使用 React Native 创建的组件是可以复用的，所以我们开发的组件可能会给项目组其他同事使用。
    // 但别人可能对这个组件不熟悉，常常会忘记使用某些属性，或者某些属性传递的数据类型有误。
    // 因此我们可以在开发 React Native 自定义组件时，可以通过属性确认来声明这个组件需要哪些属性
    static propTypes = {
        style: ViewPropTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        titleLayoutStyle: ViewPropTypes.style,
        hide: PropTypes.bool,
        statusBar: PropTypes.shape(StatusBarShape), // 一个指定属性及其类型的对象
        rightButton: PropTypes.element,
        leftButton: PropTypes.element,
    };
    // 设置默认属性,它就相当与Vue中 props下type中的default
    static defaultProps = {
        statusBar: {
            barStyle: 'light-content',
            hidden: false,
        }
    };

    render() {
        // 以下3个都是bar的左中右结构
        let statusBar = !this.props.statusBar.hidden ?
            <View>
                <StatusBar {...this.props.statusBar}/>
            </View> : null;

        let titleView = this.props.titleView ? this.props.titleView :
            // ellipsizeMode是省略号的显示方式 numberOfLines是在一行显示
            <Text ellipsizeMode="head" numberOfLines={1} style={styles.title}>{this.props.title}</Text>

        let content = this.props.hide ? null :
            <View style={styles.navBar}>
                {/*左边区域*/}
                {this.getButtonElement(this.props.leftButton)}
                <View style={[styles.navBarTitleContainer, this.props.titleLayoutStyle]}>
                    {/*中间title描述*/}
                    {titleView}
                </View>
                {/*右边文字描述*/}
                {this.getButtonElement(this.props.rightButton)}
            </View>;
        return (
            <View style={[styles.container, this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }

    getButtonElement(data) {
        return (
            <View style={styles.naBarButton}>
                {data ? data : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    naBarButton: {
        alignItems: 'center',
    },
    navBar: {
        flexDirection: 'row',
        alignItems: 'center',
        // justify-content 用于设置或检索弹性盒子元素在主轴（横轴）方向上的对齐方式。
        // 提示：使用 align-content 属性对齐交叉轴上的各项（垂直）。
        justifyContent: 'space-between',
        height: Platform.OS === 'ios' ? NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_ANDROID,
    },
    navBarTitleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute', // 跟它绝对定位在中间
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'white',
    },
    statusBar: {
        // 适配它的高度在android中它的高度是系统自身就带了的，不需要设置
        height: Platform.OS === 'ios' ? STATUS_BAR_HEIGHT : 0
    }
});