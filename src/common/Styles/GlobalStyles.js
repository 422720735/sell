/*
* 全局样式，直接就可以用，不需要导入
* */
import {Dimensions} from 'react-native'

const {height, width} = Dimensions.get('window');
const BACKGROUND_COLOR = "#f3f3f4";
export default {
    line: {
        height: 0.5,
        opacity: 0.5,
        backgroundColor: 'darkgray'
    },
    root_container: {
        flex: 1,
        backgroundColor: BACKGROUND_COLOR
    },
    nav_bar_height_ios: 44,
    nav_bar_height_android: 50,
    backgroundColor: BACKGROUND_COLOR,
    window_height: height,
    borderBottomSolid_one: {
        borderStyle: 'solid',
        borderBottomWidth: 0.25,
        borderColor: 'rgba(7,17,27,0.1)'
    }
}