import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    SectionList,
    Image,
    DeviceEventEmitter,
    TouchableOpacity
} from 'react-native';
import GlobalStyles from "../../../../../common/Styles/GlobalStyles";
import Price from "../../../../../common/Base/Price";

import AntDesign from 'react-native-vector-icons/AntDesign';

import actions from '../../../../../action/index';

import {connect} from 'react-redux'
import NavigationUtil from "../../../../../js/navigator/NavigationUtil";
import Toast from 'react-native-easy-toast'

class Contet extends Component {

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this)
        this.renderSectionHeader = this.renderSectionHeader.bind(this)
        this.state = {
            status: [],
            totalAllNum: 0,
            totalPrice: 0
        };
    }

    componentDidMount() {
        const {foods} = this.props;
        let Arr = [];
        foods.forEach((items, index) => {
            let newObj = {
                ...items,
                index: index,
            };
            let tempItems = [];
            newObj.foods.forEach(item => {
                let arr = item;
                if (!item.count) {
                    item.fatherIndex = index;
                    arr.count = 0;
                }
                tempItems.push(arr);
            });
            Arr.push(newObj)
        });
        this.state.status = Arr; // 组装的新数据
    }


    render() {
        const {foods} = this.props;
        let tempArr = foods.map((item, index) => {
            let tempData = {};
            item.index = index;
            tempData.key = item.name;
            tempData.index = index;
            tempData.data = item.foods;
            return tempData
        });
        return (
            <View style={styles.container}>
                <SectionList
                    renderSectionHeader={this.renderSectionHeader}
                    renderItem={this.renderItem}
                    sections={tempArr}
                    onViewableItemsChanged={(info) => this.itemChange(info)}  //滑动时调用
                />
                <Toast ref={toast => this.toast = toast} position={'center'}/>
            </View>
        );
    }

    /*头部*/
    renderSectionHeader = (info) => {
        let section = info.section.key;
        return (<View style={styles.headerTitle}>
                <Text style={{marginLeft: 14, color: 'rgb(147,153,159)'}}>{section}</Text>
            </View>
        )
    };
    itemChange = (info) => {
        let title = info.changed[0].item.index;
        var reg = new RegExp("^[0-9]*$");
        if (reg.test(title) && title > 0) {
            this.props.fn(title)
        }
    };

    maxTotalNum() {
        let total = 0, allMoney = 0;
        const status = this.state.status;
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

    /*加购物*/
    addToCart(item, childIndex) {
        const {onShoppingCountChange} = this.props;
        const status = this.state.status;
        if (this.maxTotalNum().total < 15) {
            status[item.fatherIndex].foods[childIndex].count++;
            this.maxTotalNum();
            this.setState({
                    status: status,
                    totalAllNum: this.maxTotalNum().total,
                    totalPrice: this.maxTotalNum().allMoney,
                },
                () => {
                    //这里打印的是最新的state值
                    onShoppingCountChange(this.state);
                });
            // 这个数据传输到redux中

            /*
            *
            * */
        } else {
            this.toast.show('最多只能购买15份');
        }
    }

    /*减购物*/
    decreaseOutCart(item, childIndex) {
        const {onShoppingCountChange} = this.props;
        const status = this.state.status;
        /*
        * 当前商品数量不能小于0
        * */
        if (status[item.fatherIndex].foods[childIndex].count > 0) {
            status[item.fatherIndex].foods[childIndex].count--;
            this.setState({
                status: status,
                totalAllNum: this.maxTotalNum().total,
                totalPrice: this.maxTotalNum().allMoney,
            }, () => {
                onShoppingCountChange(this.state);
            })
        }
    }

    renderItem = (info) => {
        const {item, index} = info;
        return (
            <TouchableOpacity onPress={() => NavigationUtil.goPage({item, index}, 'DetailPage')}>
                <View style={[styles.item, GlobalStyles.borderBottomSolid_one]}>
                    {/*上*/}
                    <View style={{flexDirection: 'row'}}>
                        <Image
                            style={styles.img}
                            source={{uri: item.image}}
                        />
                        <View style={{flex: 1}}>
                            <View>
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                            {item.description ? <View style={{marginBottom: 8}}>
                                <Text style={[styles.price_txt,]}>{item.description}</Text>
                            </View> : null}
                            <View style={styles.centers}>
                                <Text style={styles.price_txt}>月售{item.sellCount}分</Text>
                                <Text style={styles.price_txt}>好评率{item.rating}%</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <Price price={item.price} oldPrice={item.oldPrice}/>
                                <View style={styles.cart_control}>
                                    <AntDesign
                                        name={'minuscircleo'}
                                        size={24}
                                        color="#00a0dc"
                                        style={styles.button}
                                        onPress={() => this.decreaseOutCart(item, index)}
                                    />
                                    <Text style={[styles.price_txt, styles.num]}>{item.count}</Text>
                                    <AntDesign
                                        name={'pluscircle'}
                                        size={24}
                                        color="#00a0dc"
                                        style={styles.button}
                                        onPress={() => this.addToCart(item, index)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/*下*/}
                    <View>

                    </View>
                </View>
            </TouchableOpacity>
        )
    };
}

const mapStateToProps = state => ({});

const mapDispathchToProps = dispatch => ({
    onShoppingCountChange: (total) => dispatch(actions.onShoppingCountChange(total))
});

export default connect(mapStateToProps, mapDispathchToProps)(Contet)

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

