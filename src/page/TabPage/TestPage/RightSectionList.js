/**
 * Created by shaotingzhou on 2017/6/22.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SectionList,
    Dimensions,
    DeviceEventEmitter,
    ScrollView, Image
} from 'react-native';
import GlobalStyles from "../../../common/Styles/GlobalStyles";
import AntDesign from 'react-native-vector-icons/AntDesign';

import Price from '../../../common/Base/Price'
var {width, height} = Dimensions.get('window');
var sectionData = []
export default class RightSectionList extends Component {
    // 构造
    constructor(props) {
        super(props);

    }

    //行
    renderItem = (item) => {
        console.log(item)
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
    }
    //头
    sectionComp = (title) => {
        return <View style={styles.headerTitle}>
            <Text style={{marginLeft: 14, color: 'rgb(147,153,159)'}}>{title}</Text>
        </View>
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

        let Ary = [];
        foods.map((item,index)=> {

            Ary.push({key: item.name,data: item.foods,index})
        });
        return (
            <SectionList
                style={{width: width - 80}}
                renderSectionHeader={(section) => this.sectionComp(section.section.key)} //头
                renderItem={this.renderItem}
                ItemSeparatorComponent={() => {
                    return (<View style={{height: 1, backgroundColor: 'black'}}/>)
                }}//分隔线
                sections={tempArr} //数据
                onViewableItemsChanged={(info) => this.itemChange(info)}  //滑动时调用
            />

        );
    }

    componentDidMount() {
        //收到监听
        this.listener = DeviceEventEmitter.addListener('left', (e) => {
            // console.log(e + 1) // 左边点击了第几行
            // console.log(sectionData) // 数据源
            // console.log(sectionData[e])
            // console.log(sectionData[e].data.length)
            // SectionList实现scrollToIndex需要修改VirtualizedSectionList和SectionList源码
            /*if(e > 0){
                //计算出前面有几行
                var count = 0
                for(var i = 0; i < e; i++){
                    count += sectionData[i].data.length +1
                }
                this.refs.sectionList.scrollToIndex({animated: true, index: count})
            }else {
                this.refs.sectionList.scrollToIndex({animated: true, index: 0})  //如果左边点击第一行,右边则回到第一行
            }*/


        });
    }

    componentWillUnmount() {
        // 移除监听
        this.listener.remove();
    }

    itemChange = (info) => {
        let title = info.viewableItems[0].item.index;
        console.log(title)
        var reg = new RegExp("^[0-9]*$");
        if (reg.test(title) && title >0) {
            // console.log(title);
            DeviceEventEmitter.emit('right',title); //发监听
        }
    }
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
});