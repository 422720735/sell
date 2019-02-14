import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';

import BackPressComponent from "../../common/BackPressComponent";
import NavigationUtil from "../../js/navigator/NavigationUtil";
import NavigationBar from "../../common/NavigationBar";
import ViewUtil from "../../common/util/ViewUtil";
import SafeAreaViewPlus from '../../js/SafeAreaViewPlus'
import ShoppingCart from "../TabPage/GoodsPage/ShoppingCart/ShoppingCart";
import Price from "../../common/Base/Price";
import Splic from "../../common/Base/Splic";
import RatingSelect from "../../common/RatingSelect";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import {formatDate} from '../../common/util/DateUtil'
import ShoppingButton from "../../common/ShoppingButton/ShoppingButton";

type Props = {};
const isShow = false;
export default class DetailPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.params = this.props.navigation.state.params;
        const {item, index} = this.params;
        this.state = {
            canGoBack: false, // 是否可以返回上一页
            food: item,
            index
        };
        this.backPress = new BackPressComponent({backPress: () => this.onBackPress()})


    }

    componentDidMount() {
        this.backPress.componentDidMount();
    }

    componentWillUnmount(): void {
        this.backPress.componentWillUnmount()
    }

    onBackPress() {
        this.onBack();
        return true;
    }

    // 返回事件
    onBack() {
        if (this.state.canGoBack) {
            // 返回webView的上一页
            this.webView.goBack()
        } else {
            NavigationUtil.goBack(this.props.navigation);
        }
    }


    /*头部*/
    ImageHeader() {
        const {food} = this.state;
        let navigationBar = <NavigationBar
            style={styles.back}
            // 点击左边按钮的时候
            leftButton={ViewUtil.getLeftBackButton(() => this.onBack())}
        />;
        return <View>
            <Image
                resizeMode="contain"
                style={{width: width, height: width}}
                source={{uri: food.image}}
            />
            {navigationBar}
        </View>
    }

    /*内容*/
    content() {
        const {food} = this.state;
        return <View style={styles.content}>
            <View style={{marginBottom: 8}}><Text
                style={{fontSize: 14, fontWeight: '700', color: '#07111b'}}>{food.name}</Text></View>
            <View style={{flexDirection: 'row', marginBottom: 18}}>
                <Text style={[styles.soldCount, {marginRight: 12}]}>月售{food.sellCount}</Text>
                <Text style={styles.soldCount}>好评率{food.rating}%</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Price price={food.price} oldPrice={food.oldPrice}/>
                <ShoppingButton data={this.params}/>
            </View>
        </View>
    }


    /*商品评价*/
    goodEvaluation() {
        const {food} = this.props;
        return <View style={{paddingTop: 18}}>
            <Text style={{fontSize: 14, marginLeft: 18, color: '#07111b'}}>商品评价</Text>
            <View style={styles.ratingType}>
                {/*3个按钮*/}
                <View style={{marginBottom: 18}}><RatingSelect/></View>
                {/*评论*/}
                <View style={[{flexDirection: 'row'}, styles.switch]}>
                    <AntDesign
                        name={'checkcircle'}
                        size={24}
                        style={
                            [isShow ? styles.part : styles.all, {marginRight: 7}]
                        }
                    />
                    <Text style={{color: '#93999f', fontSize: 12, lineHeight: 24,}}>{isShow ? '只看有内容部分' : '查看全部'}</Text>
                </View>
            </View>
        </View>
    }

    formatDateTime(tiem) {
        let date = new Date(tiem);
        return formatDate(date, 'yyyy-MM-dd hh:mm')
    }

    /*评价*/
    ratingWrapper() {
        const {food} = this.state;
        let views = [];
        for (let i = 0, l = food.ratings.length; i < l; i++) {
            views.push(
                <View style={[{paddingTop: 16, paddingBottom: 16}, styles.borderBottomSolid]}>
                    <View key={i} style={{
                        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 6,
                    }}>
                        <Text style={{
                            color: '#93999f',
                            lineHeight: 12,
                            fontSize: 10
                        }}>{this.formatDateTime(food.ratings[i].rateTime)}</Text>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{
                                marginRight: 6,
                                fontSize: 10,
                                color: '#93999f'
                            }}>{food.ratings[i].username}</Text>
                            <Image
                                style={{width: 12, height: 12, borderRadius: 6}}
                                source={{uri: 'http://static.galileo.xiaojukeji.com/static/tms/default_header.png'}}
                            />
                        </View>

                    </View>
                    <Entypo
                        name={'thumbs-up'}
                        size={12}
                        style={{color: '#00a0dc'}}
                    />
                </View>
            )
        }
        return views;
    }

    render() {
        const {food} = this.state;
        const foodInfo = <View style={styles.content}>
            <Text style={{fontSize: 14, marginBottom: 6, color: '#07111b'}}>商品信息</Text>
            <Text style={{color: '#4d555d', paddingLeft: 8, paddingRight: 8, lineHeight: 24}}>{food.info}</Text>
        </View>;
        // SafeAreaViewPlus 处理全面屏的兼容
        // ScrollView超出就定位
        return <SafeAreaViewPlus>
            <ScrollView>
                {this.ImageHeader()}
                {this.content()}
                {/*修饰线*/}
                <Splic/>
                {/*商品评价*/}
                {food.info || food.info !== '' ? foodInfo : null}
                {/*修饰线*/}
                <Splic/>
                {/*商品评价*/}
                {this.goodEvaluation()}
                <View style={{paddingLeft: 18, paddingRight: 18}}>
                    {food.ratings && food.ratings.length ? this.ratingWrapper() : null}
                    {/*暂无评论*/}
                    {food.ratings && !food.ratings.length ? <View>
                        <Text style={{fontSize: 12, color: '#93999f', paddingTop: 16, paddingBottom: 16}}>暂无评论</Text>
                    </View> : null}
                </View>
            </ScrollView>

            {/*购物车组件是公共的*/}
            <ShoppingCart/>
        </SafeAreaViewPlus>
    }
}

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    dialog: {
        width: width,
    },
    dialog_detail: {
        backgroundColor: 'rgba(7,17,27,0.8)',
        minHeight: height
    },
    soldCount: {
        fontSize: 10,
        color: '#93999f',
    },
    back: {
        position: 'absolute',
        top: 10,
        left: 0
    },
    content: {
        paddingLeft: 18,
        paddingRight: 18,
        paddingTop: 18,
        paddingBottom: 18
    },

    borderBottomSolid: {
        borderBottomWidth: 0.25,
        borderColor: 'rgba(7,17,27,0.1)',
        borderStyle: 'solid',
    },
    split: {
        width: width,
        height: 16,
        borderColor: 'rgba(7,17,27,0.1)',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'red'
    },

    ratingType: {
        paddingLeft: 18,
        paddingRight: 18,
        marginTop: 18,
        marginBottom: 18,
    },
    part: {
        color: '#93999f',
    },
    all: {
        color: '#00c850'
    },
    switch: {
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 18,
        paddingRight: 18,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: 'rgba(7,17,27,0.1)',
    }
});
