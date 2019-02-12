

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
import Data from '../../../js/data/data'
export default class TestPage extends Component {
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <LeftFlatList data={Data.goods}/>
                <RightSectionList data = {linkageData} foods={Data.goods}/>
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
