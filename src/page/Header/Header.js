import React, {Component} from 'react';
import {
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity, // 触摸组件TouchableOpacity
    Text, View, Image
} from 'react-native';

type Props = {};
import {PropTypes} from 'prop-types';
import ViewUtil from "../../common/util/ViewUtil";
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class header extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee']
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
    showActivityView(){
     alert(1)
    }
    render() {
        const {seller} = this.props;

        return (
            <View style={styles.container}>
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
                        onPress={()=>{this.showActivityView()}}
                    >
                        <View style={styles.support_count}>
                            <Text style={[styles.txt,{marginRight: 1}]}>{seller.supports.length}个</Text>
                            <AntDesign
                                name={'right'}
                                size={10}
                                color='#fff'
                            />
                        </View>
                    </TouchableHighlight>

                    : null
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
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
        flexDirection:'row',
        alignItems: 'center',
        position: 'absolute',
        backgroundColor: 'pink',//rgba(0,0,0,0.2)
        right: 12,
        bottom: 14,
        paddingLeft: 8,
        paddingRight: 8,
        height: 24,
        borderRadius: 14,
    }
});
