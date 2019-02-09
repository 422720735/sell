import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
type Props = {};
export default class SellerPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>商家</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
