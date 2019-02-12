/**
 * Created by shaotingzhou on 2017/6/22.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Platform,
    Dimensions,
    RefreshControl,
    FlatList,
    ActivityIndicator,
    DeviceEventEmitter,
    ScrollView
} from 'react-native';

var {width, height} = Dimensions.get('window');
var dataAry = []

export default class LeftFlatList extends Component {
    // 构造
    constructor(props) {
        super(props);
        const {data} = this.props;
        this.state = {
            dataAry: data,
            cell: 0  //默认选中第一行
        };
    }

    buttomModified() {
        return <View style={{height: 1, backgroundColor: 'rgba(7,17,27,0.1)',marginLeft: 12,marginRight:12}}/>
    }

    render() {
        return (
            <FlatList
                style={{width:80}}
                ref='FlatList'
                data={this.state.dataAry} //数据源
                renderItem={(item) => this.renderRow(item)} //每一行render
                ItemSeparatorComponent={() => {
                    return (this.buttomModified())
                }} //分隔线
                keyExtractor={this.keyExtractor}  //使用json中的title动态绑定key
            />
        );
    }

    //使用json中的title动态绑定key
    keyExtractor(item: Object, index: number) {
        return item.title
    }

    //每一行render
    renderRow = (item) => {
        return (
            <TouchableOpacity onPress={() => this.cellAction(item)}>
                <View style={{flexDirection: 'row', alignItems: 'center',height:54,backgroundColor: item.index == this.state.cell ? '#f3f5f7' : 'rgba(0,0,0,0)'}}>

                    <Text style={{paddingLeft: 12,paddingRight: 12}}>{item.item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    //点击某行
    cellAction = (item) => {
        // alert(item.index)
        if (item.index < this.state.dataAry.length-1) {
            this.setState({
                cell: item.index
            });
            DeviceEventEmitter.emit('left', item.index); //发监听
        }

    }

    componentWillUnmount() {
        // 移除监听
        this.listener.remove();
    }

    componentWillMount() {
        this.listener = DeviceEventEmitter.addListener('right', (e) => {
            // 处理滑动事件
            // this.refs.FlatList.scrollToIndex({animated: true, index: e - 1})
            if (e !== 0) {
                this.setState({
                    cell: e - 1
                })
            }

        });
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    left_list: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 54,
        paddingLeft: 12,
        paddingRight: 12,
    }
});