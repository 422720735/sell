import React, {Component} from 'react'

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import ViewUtil from "../util/ViewUtil";

export default class SolitTitle extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View style={styles.split_title}>
                    <View style={styles.line}></View>
                    <View style={styles.text}>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </View>
                    <View style={styles.line}></View>
                </View>
            </View>
        );
    }
}

const MainWidth = Dimensions.get('window').width * 0.8;
const styles = StyleSheet.create({
    split_title: {
        width: MainWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        marginTop: 28,
        marginBottom: 28,
        marginLeft: 24,
        marginRight: 24,
    },
    line: {
        flex: 1,
        height:0.3,
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    text: {
        paddingLeft:12,
        paddingRight:12
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '700',
    },

});
