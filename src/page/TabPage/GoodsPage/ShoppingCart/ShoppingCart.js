import React, {Component} from 'react'

import {View, Text, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
/*购物车*/


import {connect} from 'react-redux';

const upSend = 20; // 起送价
class ShoppingCart extends Component {
    constructor(props) {
        super(props);
    }

    totalMoney() {
        if (!this.props.shopping.totalPrice || this.props.shopping.totalPrice <= 0) {
            return '20元起送'
        } else if (this.props.shopping.totalPrice > 0 && this.props.shopping.totalPrice < 20) {
            return `还差${upSend - this.props.shopping.totalPrice}元起送`
        } else {
            return '去结算'
        }
    }

    render() {
        return <View style={{width: width, height: 56, paddingTop: 9}}>
            <View style={styles.content}>
                {/*左边*/}
                <View style={styles.content_left}>
                    {/*logo*/}
                    <View
                        style={[styles.log_wrapper, this.props.shopping.totalAllNum > 0 ? styles.NewbackgroundColor : styles.NobackgroundColor]}>
                        <View style={[styles.logo,
                            this.props.shopping.totalAllNum > 0 ? styles.Newlogo : styles.Nologo]}>
                            <AntDesign
                                name={'shoppingcart'}
                                size={24}
                                style={[{lineHeight: 44, textAlign: 'center'},
                                    this.props.shopping.totalAllNum > 0 ? styles.noColor : styles.newColor
                                ]}
                            />
                            {this.props.shopping.totalAllNum > 0 ?
                                <View style={styles.num}>
                                    <Text style={{
                                        fontSize: 9,
                                        fontWeight: '700',
                                        color: '#fff',
                                        textAlign: 'center',
                                        lineHeight: 16,
                                    }}>{this.props.shopping.totalAllNum}</Text>
                                </View> : null}
                        </View>
                    </View>
                    {/*价格*/}
                    <View style={styles.price}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: '700',
                            lineHeight: 20,
                            color: '#fff'
                        }}>¥{this.props.shopping.totalPrice > 0 ? this.props.shopping.totalPrice : 0}</Text>
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
                <TouchableOpacity style={{flexDirection:'row'}}  onPress={()=>alert('这里是去跳转结算逻辑')}>
                    <View style={styles.right_right}>
                        <View
                            style={[styles.pay, this.props.shopping.totalPrice >= 20 ? styles.enough : styles.not_enough]}>
                            <Text style={[this.props.shopping.totalPrice >= 20 ?
                                {color: '#f3f5f7'} : {color: '#ffffff'}]}>{this.totalMoney()}</Text>
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
        </View>;
    }
}

const mapStateToProps = state => ({
    shopping: state.shopping
});

export default connect(mapStateToProps)(ShoppingCart)


const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    noColor: {
        color: '#f8f8f8'
    },
    newColor: {
        color: '#80858a',
    },
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
        paddingLeft: 6,
        paddingRight: 6,
        paddingBottom: 6,
        paddingTop: 6,
    },
    NobackgroundColor: {backgroundColor: '#141d27'},
    NewbackgroundColor: {backgroundColor: '#00a0dc',},
    Nologo: {
        backgroundColor: '#2b343c',
    },
    Newlogo: {
        backgroundColor: '#00a0dc',
        color: '#f8f8f8'
    },
    logo: {
        borderRadius: 56,
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
        justifyContent: 'center',
        alignItems: 'center',
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
