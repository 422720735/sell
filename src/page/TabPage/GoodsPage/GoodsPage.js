import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationUtil from "../../../js/navigator/NavigationUtil";
type Props = {};
export default class GoodsPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>商品</Text>
                <Text onPress={()=>{
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    }, "DetailPage");
                }}>商品详情页</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
