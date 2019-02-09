import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

// 引入我们到页面跳转类
import NavigationUtil from '../../js/navigator/NavigationUtil'
export default class WelcomePage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            timeNumber: 5,
        }
    }

    /**
     * 我们要实现个功能，我们在这个页面第一次加载完成后，跳转别的页面。 相当于别的app 倒数5秒后跳转
     * */
    componentDidMount(): void {
        this.timer = setInterval(() => {
            if (this.state.timeNumber <= 0) {
                // 调用我们封装到路由跳转类
                NavigationUtil.resetToHomePage({
                    navigation: this.props.navigation
                });
                // 清除定时器
                this.timer && clearInterval(this.timer);
            }
            else {
                this.setState({
                    timeNumber: this.state.timeNumber-=1
                });
            }
        }, 100);
    }

    componentWillUnmount(): void {
        /*在页面中用了定时器，一定要在卸载组件销毁定时器*/
        this.timer && clearInterval(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>倒数{this.state.timeNumber}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
