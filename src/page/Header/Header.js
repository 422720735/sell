import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    ScrollView,
    TouchableOpacity, // 触摸组件TouchableOpacity
    Text, View, Image,
    Dimensions,
    Modal, // Modal 组件是一种简单的覆盖在其他视图之上显示内容的方式


} from 'react-native';

type Props = {};
import {PropTypes} from 'prop-types';
import ViewUtil from "../../common/util/ViewUtil";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Star from "./Star/Star";
import SolitTitle from "../../common/Base/SolitTitle";

export default class header extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    // 属性检查
    static propTypes = {
        seller: PropTypes.object
    };

    supports(supports) {
        return supports || supports.length ?
            ViewUtil.getActivityMap(supports, 0, 'minni') : null;
    }

    /*显示活动详情*/
    showActivityView() {
        this.setState({
            visible: !this.state.visible
        })
    }

    setModalVisible(visible) {
        this.setState({visible: visible});
    }

    renderItms(item, index) {
        console.log(item)

    }

    render() {
        const {seller} = this.props;
        return (
            <View
                style={styles.container}>
                <View style={styles.content_wrapper}>
                    {/*左边图片*/}
                    <View style={styles.avatar}>
                        <Image
                            style={{width: 64, height: 64, borderRadius: 2}}
                            source={{uri: seller.avatar}}
                        />
                    </View>
                    {/*右边文字*/}
                    <View style={{marginLeft: 16}}>
                        {/*1*/}
                        <View style={styles.content_title}>
                            <Image
                                style={styles.brand}
                                source={require('../../common/images/brand.png')}
                            />
                            <View style={{marginLeft: 6}}>
                                <Text style={[styles.txt, {fontSize: 16, fontWeight: '400'}]}>{seller.name}</Text>
                            </View>
                        </View>
                        {/*描述*/}
                        <View style={styles.description}>
                            <Text style={{
                                fontSize: 12,
                                color: '#fff'
                            }}>{seller.description}/{seller.deliveryTime}分钟送达</Text>
                        </View>
                        {/*3*/}
                        {this.supports(seller.supports)}
                    </View>
                </View>
                {seller.supports || seller.supports.length ?
                    <TouchableHighlight
                        onPress={() => {
                            this.showActivityView()
                        }}
                    >
                        <View style={styles.support_count}>
                            <Text style={[styles.txt, {marginRight: 1}]}>{seller.supports.length}个</Text>
                            <AntDesign
                                name={'right'}
                                size={10}
                                color='#fff'
                            />
                        </View>
                    </TouchableHighlight>
                    : null
                }
                {/*公告*/}
                <View style={styles.bulletin_wrapper}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image
                            style={{width: 22, height: 12}}
                            source={require('../../common/images/bulletin.png')}
                        />
                        <Text
                            numberOfLines={1}
                            style={[styles.txt, {marginLeft: 4}]}>{seller.bulletin}</Text>
                    </View>
                    <AntDesign
                        onPress={() => {
                            this.showActivityView()
                        }}
                        style={styles.aleView}
                        name={'right'}
                        color={'#fff'}
                        size={10}
                    />
                </View>

                <Modal
                    style={styles.dialog}
                    transparent={true}
                    visible={this.state.visible}>
                    <ScrollView style={{backgroundColor: 'rgba(7,17,27,0.8)',}}>
                        <View style={styles.dialog_detail}>
                            {/*内容部分*/}
                            <View style={styles.dia_content}>
                                {/*name*/}
                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <Text style={{
                                        color: '#fff',
                                        fontSize: 16,
                                        fontWeight: '700',
                                        justifyContent: 'center'
                                    }}>{seller.name}</Text>
                                </View>
                                {/*评分星星*/}
                                <View>
                                    <Star
                                        size={48}
                                        score={seller.score}
                                    />
                                </View>
                                {/**/}
                                <SolitTitle title={'优惠信息'}/>

                                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                                    <View style={styles.supports_list}>
                                        {seller.supports || seller.supports.length ?
                                            seller.supports.map((result, index) => {
                                                return <View
                                                    style={index < seller.supports.length - 1 ? styles.title_li : null}
                                                    key={index}>
                                                    {ViewUtil.getActivityMap(result, index, 'small')}
                                                </View>
                                            }) : null}
                                    </View>
                                </View>
                                <SolitTitle title={'商家公告'}/>
                                <View style={{flexDirection:'row',justifyContent:'center'}}>
                                    <View style={styles.supports_list}>
                                        <Text style={[styles.txt, {lineHeight:24,fontSize:12}]}>{seller.bulletin}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {/*关闭按钮*/}
                        <View style={styles.detail_close}>
                            <AntDesign
                                onPress={() => {
                                    this.setModalVisible(!this.state.visible)
                                }}
                                name={'close'}
                                size={32}
                                color='#fff'/>
                        </View>
                    </ScrollView>

                </Modal>
            </View>
        );
    }
}

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(7,17,27,0.3)',
    },
    brand: {
        width: 30,
        height: 18,
    },
    content_wrapper: {
        flexDirection: 'row',
        paddingTop: 24,
        paddingRight: 12,
        paddingBottom: 18,
        paddingLeft: 24,
    },
    avatar: {},
    content_title: {
        marginTop: 2,
        marginBottom: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },

    description: {
        marginBottom: 7
    },

    txt: {
        color: '#fff',
        fontSize: 14,
    },
    /*按钮*/
    support_count: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.2)',
        right: 12,
        bottom: 14,
        paddingLeft: 8,
        paddingRight: 8,
        height: 24,
        borderRadius: 14,
    },
    bulletin_wrapper: {
        paddingLeft: 12,
        paddingRight: 48,
        backgroundColor: 'rgba(7,17,27,0.2)'
    },
    aleView: {
        position: 'absolute',
        right: 12,
        top: 4
    },
    dialog: {
        width: width,
        height: height,
    },
    dialog_detail: {

        minHeight: height
    },
    dia_content: {
        marginTop: 64,
        paddingBottom: 64
    },
    detail_close: {
        position: 'relative',
        width: 32,
        height: 32,
        marginTop: -64,
        marginLeft: (width / 2) - 16
    },
    supports_list: {
        width: width * 0.8,
    },
    title_li: {
        marginBottom: 20
    }
});
