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

/*处理全面屏上下的兼容问题*/
import SafeAreaViewPlus from '../../js/SafeAreaViewPlus'
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
export default class HomePage extends Component<Props> {

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
