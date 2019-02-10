import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
    TabNavigator,
    createStackNavigator, // 核心函数是createStackNavigator ①要先引用该函数,②它需要一个路由配置对象.
    createMaterialTopTabNavigator, // 顶部导航的
    createBottomTabNavigator, // 底部导航的
    createSwitchNavigator,
} from 'react-navigation' // rn的路由导航

type Props = {};

// 头部组件
import Header from '../../page/Header/Header'
// 引入tab页面
import GoodsPage from '../../page/TabPage/GoodsPage/GoodsPage' // 商品
import RatingsPage from '../../page/TabPage/RatingsPage/RatingsPage' // 评论
import SellerPage from '../../page/TabPage/SellerPage/SellerPage' // 商家
import NavigationUtil from "../../js/navigator/NavigationUtil";
import {BaseCss} from "../../common/Styles/Base"; // 工具

// 配置的路由
const TABS = {
    GoodsPage: {
        screen: GoodsPage,
        navigationOptions: {
            title: '商品',
        }
    },
    RatingsPage: {
        screen: RatingsPage,
        navigationOptions: {
            title: '评论',
        }
    },
    SellerPage: {
        screen: SellerPage,
        navigationOptions: {
            title: '商家',
        }
    }
};
export default class DynamicTabNavigator extends Component<Props> {
    constructor(props) {
        super(props);
        // 禁止警告
        console.disableYellowBox = true;
    }

    render() {
        const TabNavigator = createMaterialTopTabNavigator(TABS,
            {
                tabBarOptions: {
                    activeTintColor: 'red',
                    inactiveTintColor: '#4d555d',
                    tabStyle: styles.tabStyle, // 样式
                    upperCaseLabel: false, // 是否使标签大写，默认为true
                    scrollEnabled: false, // 是否支持 选项卡滚动，默认false
                    style: {
                        backgroundColor: '#f8f8f8',
                        // 设置了(scrollEnabled)滚动初始启动，就会有这样的问题
                        // 解决办法
                        justifyContent: "center",
                        height: 40 // fix 开启scrollEnabled后再Android上初次加载闪烁问题 。
                    },
                    indicatorStyle: styles.indicatorStyle, // 标签指示器就是标签下面那一根标示线的样式
                    labelStyle: styles.labelStyle // 文字的样式
                },
                lazy: true // 懒加载数据，每次只加载一个标签下的数据
            }
        );
        return <TabNavigator/>
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
        flex: 1
    },
    tabStyle: {
        // minWidth: 50,
        padding: 0,
    },
    indicatorStyle: {
        height: 2,
        backgroundColor: 'white'
    },
    labelStyle: {
        fontSize: 13,
        margin: 0,
    },
    indicatorContainer: {
        alignItems: 'center'
    },
    indicator: {
        color: 'red',
        margin: 10
    }
});
