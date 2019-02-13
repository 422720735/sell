import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Dimensions, Image} from 'react-native';

import BackPressComponent from "../../common/BackPressComponent";
import NavigationUtil from "../../js/navigator/NavigationUtil";
import NavigationBar from "../../common/NavigationBar";
import ViewUtil from "../../common/util/ViewUtil";
import SafeAreaViewPlus from '../../js/SafeAreaViewPlus'
import ShoppingCart from "../TabPage/GoodsPage/ShoppingCart/ShoppingCart";
import Price from "../../common/Base/Price";
import Splic from "../../common/Base/Splic";

type Props = {};
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
                <View><Text>加入购物车</Text></View>
            </View>
        </View>
    }


    render() {
        // SafeAreaViewPlus 处理全面屏的兼容
        // ScrollView超出就定位
        return <SafeAreaViewPlus>
            <ScrollView>
                {this.ImageHeader()}
                {this.content()}
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


    split: {
        width: width,
        height: 16,
        borderColor: 'rgba(7,17,27,0.1)',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        backgroundColor: 'red'
    }


});
