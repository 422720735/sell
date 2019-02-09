import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
type Props = {};
export default class header extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>我是头部2222</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
