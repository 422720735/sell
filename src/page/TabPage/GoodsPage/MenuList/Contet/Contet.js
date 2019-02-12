import React, {Component} from 'react';
import {AppRegistry, StyleSheet, View, Text, SectionList, Image, DeviceEventEmitter} from 'react-native';
import GlobalStyles from "../../../../../common/Styles/GlobalStyles";
import Price from "../../../../../common/Base/Price";

import AntDesign from 'react-native-vector-icons/AntDesign';

export default class Contet extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {foods} = this.props;
        let tempArr = foods.map((item, index) => {
            let tempData = {};
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
    }
    renderItem = (info) => {
        const {item} = info;
        return (<View style={[styles.item, GlobalStyles.borderBottomSolid_one]}>
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
                        <View style={{flexDirection:'row',justifyContent: 'space-between'}}>
                            <Price price={item.price} oldPrice={item.oldPrice}/>
                            <View style={styles.cart_control}>
                                <AntDesign
                                    name={'minuscircleo'}
                                    size={24}
                                    color="#00a0dc"
                                    style={styles.button}
                                />
                                <Text style={[styles.price_txt, styles.num]}>{2}</Text>
                                <AntDesign
                                    name={'pluscircle'}
                                    size={24}
                                    color="#00a0dc"
                                    style={styles.button}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                {/*下*/}
                <View>

                </View>
            </View>

        )
    };
}

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

