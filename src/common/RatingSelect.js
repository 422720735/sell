import React, {Component} from 'react'

import {View, Text, StyleSheet} from 'react-native';

export default class RatingSelect extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.block, {backgroundColor: '#00a0dc'}]}>全部</Text>
                <Text style={[styles.block, {backgroundColor: 'rgba(0,160,220,0.2)'}]}>推荐</Text>
                <Text style={[styles.block, {backgroundColor: 'rgba(77,85,93,0.2)'}]}>吐槽</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    block: {
        fontSize: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 8,
        paddingBottom: 8,
        marginRight: 8,
    }
});
