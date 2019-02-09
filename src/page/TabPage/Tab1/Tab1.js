import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
type Props = {};
export default class Tab1 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text>tab1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
