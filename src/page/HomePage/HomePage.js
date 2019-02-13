import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    TabNavigator,
    TouchableOpacity,
    Alert,
    createStackNavigator, // 核心函数是createStackNavigator ①要先引用该函数,②它需要一个路由配置对象.
    createMaterialTopTabNavigator, // 顶部导航的
    createBottomTabNavigator, // 底部导航的
    createSwitchNavigator,
} from 'react-navigation' // rn的路由导航
import {connect} from 'react-redux'
import {NavigationActions} from 'react-navigation'

/*处理全面屏上下的兼容问题*/
import SafeAreaViewPlus from '../../js/SafeAreaViewPlus'
import BackPressComponent from '../../common/BackPressComponent'
type Props = {};

// 头部组件
import Header from '../Header/Header'
// 引入tab页面
import GoodsPage from '../TabPage/GoodsPage/GoodsPage' // 商品
import RatingsPage from '../TabPage/RatingsPage/RatingsPage' // 评论
import SellerPage from '../TabPage/SellerPage/SellerPage' // 商家
import NavigationUtil from "../../js/navigator/NavigationUtil";
import DynamicTabNavigator from "../../js/navigator/DynamicTabNavigator";

import data from '../../js/data/data'
class HomePage extends Component<Props> {
    constructor(props) {
        super(props);
        this.backPress = new BackPressComponent({backPress: this.onBackPress()});
    }

    // 组件渲染后调用 装载完成），在render之后调用
    // 在初始化render之后只执行一次，在这个方法内，可以访问任何组件，
    // componentDidMount()方法中的子组件在父组件之前执行
    // 从这个函数开始，就可以和 JS 其他框架交互了，例如设置计时 setTimeout 或者 setInterval，或者发起网络请求
    componentDidMount(): void {
        // BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        this.backPress.componentDidMount()
    }

    // 当组件要被从界面上移除的时候，就会调用componentWillUnmount(),
    // 在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等
    componentWillUnmount(): void {
        // BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
        this.backPress.componentWillUnmount()
    }

    /*
    * 处理Android中物理返回键的兼容问题，我们点android的返回键直接就退出程序了。
    * 我们只需要它返回上一页。
    * 参照：https://www.jianshu.com/p/44e415a3cb0b
    * */

    onBackPress = () => {
        const {dispatch, nav} = this.props;
        if (nav.routes[1].index === 0) {
            // 如果RootNavigator的MainNavigator的index为0，则不处理事件。
            return false;
        }
        dispatch(NavigationActions.back());
        return true;
    };
    render() {
        NavigationUtil.navigation = this.props.navigation;
        const TabNavigator = createMaterialTopTabNavigator({
            GoodsPage: {
                screen: GoodsPage,
                navigationOptions: {
                    title: '商品'
                }
            },
            RatingsPage: {
                screen: RatingsPage,
                navigationOptions: {
                    title: '评论'
                }
            },
            SellerPage: {
                screen: SellerPage,
                navigationOptions: {
                    title: '商家'
                }
            }
        });
        return (
            <SafeAreaViewPlus style={styles.container}>
                {/*头部*/}
                <Header
                    seller={data.seller}
                />
                {/*tab切换*/}
                <DynamicTabNavigator/>
            </SafeAreaViewPlus>
        );
    }
}



// tab切换
class HomeTab extends Component {
    render() {
        const {tabLabel} = this.props;
        return (
            <View style={styles.container}>
                <Text>{tabLabel}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});



const mapStateToProps = state => ({
    nav: state.nav
});


export default connect(mapStateToProps,)(HomePage);
