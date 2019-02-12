/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

// 导航器配置文件
import AppNavigator from './src/js/navigator/AppNavigator'
AppRegistry.registerComponent(appName, () => App);
