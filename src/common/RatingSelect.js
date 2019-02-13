import React, {Component} from 'react'

import {View, Text, StyleSheet} from 'react-native';

export default class RatingSelect extends Component {
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <Text>全部</Text>
                <Text>推荐</Text>
                <Text>吐槽</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
