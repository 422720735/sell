import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
type Props = {};
export default class Tab2 extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.instructions}>tab1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
