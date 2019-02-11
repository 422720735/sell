import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import NavigationUtil from "../../../js/navigator/NavigationUtil";

type Props = {};
import MenuList from './MenuList/MenuList' // 商品列表
import ShoppingCart from './ShoppingCart/ShoppingCart' // 购物车
import Data from '../../../js/data/data';

export default class GoodsPage extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                {/*列表展示部分*/}
                <MenuList foods={Data.goods} style={{
                    flex:1,
                    position: 'absolute',
                    overflow: 'hidden',
                    top: 174,
                    bottom: 49,
                    width: width,
                    height: height-(174-49)
                }}/>
                {/*底部购物车*/}
                <ShoppingCart/>
            </View>
        );
    }
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
