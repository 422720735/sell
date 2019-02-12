import React, {Component} from 'react'

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
/*购物车*/

const isok = false;
export default class ShoppingCart extends Component {
    render() {
        return <View style={{width: width, height: 56, paddingTop: 9}}>
            <View style={styles.content}>
                {/*左边*/}
                <View style={styles.content_left}>
                    {/*logo*/}
                    <View style={styles.log_wrapper}>
                        <View style={styles.logo}>
                            <AntDesign
                                name={'shoppingcart'}
                                size={24}
                                style={{lineHeight: 44, color: '#80858a', textAlign: 'center'}}
                            />
                            <View style={styles.num}>
                                <Text style={{
                                    fontSize: 9,
                                    fontWeight: '700',
                                    color: '#fff',
                                    textAlign: 'center',
                                    lineHeight: 16,
                                }}>1</Text>
                            </View>
                        </View>
                    </View>

                    {/*价格*/}
                    <View style={styles.price}>
                        <Text style={{fontSize: 16, fontWeight: '700', lineHeight: 20, color: '#fff'}}>¥{'17'}</Text>
                    </View>
                    {/*配送说明*/}
                    <View style={styles.desc}>
                        <Text style={{
                            fontSize: 16,
                            color: 'rgba(255,255,255,0.4)',
                            fontWeight: '700',
                            lineHeight: 20
                        }}>另需配送费¥{'4元'}</Text>
                    </View>
                </View>
                {/*右边*/}
                <View style={styles.right_right}>
                    <View style={[styles.pay, isok ? styles.not_enough : styles.enough]}>
                        <Text style={[isok?
                            {color:'rgba(255,255,255,0.4)'}: {color:'#fff'}]}>还差3元</Text>
                    </View>
                </View>
            </View>
        </View>;
    }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#141d27',
        flex: 1,
        flexDirection: 'row',
    },
    content_left: {
        flex: 1,
        flexDirection: 'row',
    },
    log_wrapper: {
        position: 'relative',
        top: -10,
        marginLeft: 6,
        marginRight: 6,
        width: 56,
        height: 56,
        borderRadius: 56,
        backgroundColor: '#141d27',
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 6,
        paddingTop: 6,
    },
    logo: {
        borderRadius: 56,
        backgroundColor: '#2b343c',
        textAlign: 'center',
    },
    num: {
        position: 'absolute',
        top: -3,
        right: -10,
        width: 24,
        height: 16,
        borderRadius: 16,
        backgroundColor: '#f01414',
    },
    price: {
        alignItems: 'center',
        marginTop: 11,
        marginBottom: 11,
        paddingRight: 12,
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderColor: 'rgba(255,255,255,0.1)',
    },
    desc: {
        marginTop: 13,
        marginLeft: 12,

    },


    /*右边的*/
    right_right: {
        width: 105
    },
    pay: {
        height: 49,
        justifyContent:'center',
        alignItems:'center',
        fontSize: 12,
        fontWeight: '700',
    },
    not_enough: {
        backgroundColor: '#2b333c',
        flex: 1
    },
    enough: {
        backgroundColor: '#00b43c',
        flex: 1
    },
});
