/*
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
*/

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import LeftFlatList from './leftFlatList'
import RightSectionList from './RightSectionList'
import linkageData from './linkage.json'
export default class SellerPage extends Component {
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <LeftFlatList data = {linkageData}/>
                <RightSectionList data = {linkageData}/>
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
