import React, {Component} from 'react'

import {View, Text, StyleSheet} from 'react-native';

import {PropTypes} from 'prop-types'

export default class Price extends Component {
    // 属性检查
    static propTypes = {
        price: PropTypes.number,
        oldPrice: PropTypes.number || PropTypes.string
    };
    static defultProps = {
        oldPrice: 0
    };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <Text style={[styles.txt, {fontSize: 14, marginRight: 8}]}>¥{this.props.price}</Text>
                {this.props.oldPrice ? <Text style={[styles.txt, {
                    fontSize: 10,
                    color: 'rgb(147,153,159)',
                    textDecoration: 'line-through'
                }]}>¥{this.props.oldPrice}</Text> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        fontWeight: '700',
        paddingTop: 8,
        paddingBottom: 8,
        color: 'rgb(240,20,20)'
    }
});
