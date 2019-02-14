import React, {Component} from 'react'

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import {connect} from "react-redux";
import actions from "../../action";

class ShoppingButton extends Component {
    constructor(props) {
        super(props);
        const {shopping, data} = this.props;
        this.state = {
            shopping,
            data
        }
    }

    /*
    * 这个需要对应的数据
    * */
    maxTotalNum() {
        let total = 0, allMoney = 0;
        const status = this.state.shopping.status;
        status.forEach(items => {
            items.foods.forEach(item => {
                if (item.count > 0) {
                    total += item.count;
                    allMoney += (item.count * item.price)
                }
            })
        });
        return {
            total,
            allMoney
        }
    }

    deleteGoods() {
        const {onShoppingCountChange} = this.props;
        const {shopping, data} = this.state;
        let fatherIndex = data.item.fatherIndex;
        let chindIndex = data.index;
        if (shopping.status[fatherIndex].foods[chindIndex].count > 0) {
            shopping.status[fatherIndex].foods[chindIndex].count--;
            this.setState({
                shopping,
                data,
                totalAllNum: this.maxTotalNum().total,
                totalPrice: this.maxTotalNum().allMoney,
            }, () => {
                onShoppingCountChange(this.state);
            })
        }
    }

    addGoods() {
        const {onShoppingCountChange} = this.props;
        const {shopping, data} = this.state;
        if (this.maxTotalNum().total < 15) {
            let fatherIndex = data.item.fatherIndex;
            let chindIndex = data.index;
            shopping.status[fatherIndex].foods[chindIndex].count++;


            /*
            * 原价格上加上新价格
            * */
            this.setState({
                shopping,
                data,
                totalAllNum: this.maxTotalNum().total,
                totalPrice: this.maxTotalNum().allMoney,
            }, () => {
                onShoppingCountChange(this.state);
            })
        } else {
            alert('最多只能买15份')
        }
    }
    addShoppingGoodCart() {
        return <TouchableOpacity
            style={{
                borderRadius: 24,
                backgroundColor: '#00a0dc',
                justifyContent: 'center',
                paddingLeft: 12, paddingRight: 12,
            }}
            onPress={() => this.addGoods()}>
            <View><Text style={{
                color: '#f8f8f8',
            }}>加入购物车</Text></View>
        </TouchableOpacity>
    }
    render() {
        const {shopping, data} = this.state;
        let fatherIndex = data.item.fatherIndex;
        let chindIndex = data.index;
        return (
            shopping.status[fatherIndex].foods[chindIndex].count > 0?
            <View style={styles.cart_control}>
                {/*delete方法*/}
                <AntDesign
                    name={'minuscircleo'}
                    size={24}
                    color="#00a0dc"
                    style={styles.button}
                    onPress={() => {
                        this.deleteGoods()
                    }}
                />
                <Text style={[styles.price_txt, styles.num, {color: '#93999f'}]}>{shopping.status[fatherIndex].foods[chindIndex].count}</Text>
                {/*add方法*/}
                <AntDesign
                    name={'pluscircle'}
                    size={24}
                    color="#00a0dc"
                    style={styles.button}
                    onPress={() => {
                        this.addGoods()
                    }}
                />
            </View>:this.addShoppingGoodCart()
        );
    }
}


const mapStateToProps = state => ({
    shopping: state.shopping
});

const mapDispathchToProps = dispatch => ({
    onShoppingCountChange: (total) => dispatch(actions.onShoppingCountChange(total))
});

export default connect(mapStateToProps, mapDispathchToProps)(ShoppingButton)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerTitle: {
        height: 26,
        justifyContent: 'center',
        borderLeftWidth: 2,
        borderColor: '#d9dde1',
        borderStyle: 'solid',
        backgroundColor: '#f3f5f7'
    },
    item: {
        marginTop: 18,
        marginBottom: 18,
        marginLeft: 18,
        marginRight: 18,
    },
    img: {
        width: 57,
        height: 57,
        marginRight: 10,
        borderRadius: 2
    },
    centers: {
        flexDirection: 'row',
    },
    price_txt: {
        color: '#93999f',
        fontSize: 10,
    },

    name: {
        marginTop: 2,
        marginBottom: 8,
        fontSize: 14
    },


    /*按钮*/
    cart_control: {
        flexDirection: 'row'
    },

    button: {
        paddingLeft: 6,
        paddingRight: 6,
        paddingTop: 6,
        paddingBottom: 6
    },
    num: {
        width: 12,
        textAlign: 'center',
        paddingTop: 6,
        lineHeight: 24
    }
});
