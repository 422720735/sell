import React, {Component} from 'react'

import {View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, SectionList} from 'react-native';
import ViewUtil from "../../../../common/util/ViewUtil";
import Arrayutil from "../../../../common/util/Arrayutil";
import Contet from "./Contet/Contet";

/*商品列表*/
export default class MenuList extends Component {
    constructor(props) {
        super(props);
        const {foods} = this.props;
        this.state = {
            foods,
            cell: 0  //默认选中第一行
        };
    }


    menuTitle(data) {
        return <View style={styles.menu_item}>

            <Text style={styles.title_style}>{data.item.name}</Text>
        </View>;
    }

    renderLeftItem(item) {
        return item ? <TouchableOpacity onPress={() => this.cellAction(item)}>
            <View style={[styles.menu_item,
                {backgroundColor: item.index == this.state.cell ? '#f3f5f7' : null}
            ]}>
                {item.item.type > 0 ?
                    ViewUtil.getImage(item.index) : null}
                <Text>{item.item.name}</Text>
            </View>
        </TouchableOpacity> : null

    }

    //使用json中的title动态绑定key
    keyExtractor(item: Object, index: number) {
        return item.name
    }

    render() {

        return <View style={styles.container}>
            <View style={styles.left_wap}>
                <FlatList
                    data={this.state.foods} //数据源
                    renderItem={(data) => data.item ? this.renderLeftItem(data) : null}
                    keyExtractor={this.keyExtractor}
                />
            </View>
            <Contet foods={this.state.foods} style={styles.right_wap}/>
        </View>

    }
}
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    /*左边*/
    left_wap: {
        width: 80,
    },
    menu_item: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 54,
        paddingLeft: 12,
        paddingRight: 12,
    },
    txt: {
        fontSize: 12,
        color: 'rgb(240,20,20)',
        fontWeight: '200',
        lineHeight: 14,
    },


    // 右边
    right_wap: {},
    foods_title: {},
    foods_name: {}
});
