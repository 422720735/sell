import {
    createStackNavigator, // 核心函数是createStackNavigator ①要先引用该函数,②它需要一个路由配置对象.
    // createMaterialTopTabNavigator, // 顶部导航的
    // createBottomTabNavigator, // 底部导航的
    createSwitchNavigator,
} from 'react-navigation' // rn的路由导航

import WelcomePage from '../../page/WelcomePage/WelcomePage'
import HomePage from '../../page/HomePage/HomePage'
import DetailPage from '../../page/DetailPage/DetailPage'

/**
 * 欢迎页面的导航器，我们可以这 打开app显示图片，广告的功能都可以在这里做。
 * */
const InitNavigator = createStackNavigator({
    /**
     * 配置路由，我们页面要使用都需要进行配置，跟vue一样
     * */
    WelcomePage: { // 欢迎页面
        screen: WelcomePage,
        navigationOptions: { // 配置页面的参数
            header: null, // 禁用Navigation NavBar的头部 我们全屏显示
        }
    }
});

/**
* 这是我们进来的页面的显示，业务页面都在这里配置
* */
const MainNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
        navigationOptions: { // 配置页面的参数
            header: null, // 禁用Navigation NavBar的头部 我们全屏显示
        }
    },
    /**
     * 我们像从HomePage跳转到DetailPage
     * */
    DetailPage: {
        screen: DetailPage,
        navigationOptions: { // 配置页面的参数
            // header: null, // 禁用Navigation NavBar的头部 我们全屏显示
        }
    },
});

/**
 * 连接上面我们配置的导航器
 * {},{}
 * */
export default createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator
}, {
    navigationOptions: { // 配置页面的参数
        header: null, // 禁用Navigation NavBar的头部 我们全屏显示
    }
});