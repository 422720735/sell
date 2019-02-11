import React, {Component} from 'react'

import {View, Text, StyleSheet, Dimensions} from 'react-native';

/*购物车*/
export default class ShoppingCart extends Component {
    render() {
        return <View style={{width: width,height:56}}>
            <Text>车</Text>
        </View>;
    }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({});
