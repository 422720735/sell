import React, {Component} from 'react'

import {View,Text, StyleSheet, Dimensions} from 'react-native';

export default class Splic extends Component {
    render() {
        return (
            <View>
                <Text style={styles.split}/>
            </View>
        );
    }
}
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    split: {
        width: width,
        height: 16,
        borderColor: 'rgba(7,17,27,0.1)',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: '#f3f5f7',
    }
});
