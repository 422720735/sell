import React from 'react';

import {Image, Text, View, StyleSheet} from 'react-native'

export default class ViewUtil {
    /*header几个活动的图片显示*/
    static getActivityMap(supports, index = 0, type) {
        return (
            <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image
                        style={type === 'minni' ? styles.minniImg : styles.smallImg}
                        source={type === 'minni' ? activityImg1[index] : activityImg2[index]}
                    />
                    <Text style={{fontSize: 14, color: '#fff'}}>
                        {supports.length ? supports[index].description : supports.description
                        }</Text>
                </View>
            </View>
        )
    }

    static getImage(index) {
        return <Image
            style={{width: 12,height: 12,marginRight:3}}
            source={activityImg1[index]}
        />
    }
}

/*
* 这边使用 Image 组件， require 中的图片名称必须为一个静态的字符串信息。不能在 require 中进行拼接
* */
let classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
let b = "../../common/images/" + classMap[2] + "_1.png";
const activityImg1 = [
    // require(b), 这种写法会报错
    require('../../common/images/decrease_1.png'),
    require('../../common/images/discount_1.png'),
    require('../../common/images/special_1.png'),
    require('../../common/images/invoice_1.png'),
    require('../../common/images/guarantee_1.png'),
];

const activityImg2 = [
    // require(b), 这种写法会报错
    require('../../common/images/decrease_2.png'),
    require('../../common/images/discount_2.png'),
    require('../../common/images/special_2.png'),
    require('../../common/images/invoice_2.png'),
    require('../../common/images/guarantee_2.png'),
];

const activityImg3 = [
    // require(b), 这种写法会报错
    require('../../common/images/decrease_3.png'),
    require('../../common/images/discount_3.png'),
    require('../../common/images/special_3.png'),
    require('../../common/images/invoice_3.png'),
    require('../../common/images/guarantee_3.png'),
];

const styles = StyleSheet.create({
    minniImg: {
        width: 12,
        height: 12,
        marginRight: 4
    },
    smallImg: {
        width: 16,
        height: 16,
        marginRight: 6
    }
});