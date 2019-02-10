import React, {Component} from 'react'

import {View, Text, Image, StyleSheet} from 'react-native';
import {PropTypes} from 'prop-types';
// 全星            半星            无星
const CLS_ON = 'on', CLS_HALF = 'half', CLS_OFF = 'off', maxCount = 5;
export default class Star extends Component {
    constructor(props) {
        super(props);
    }

    /*static propTypes = {
        size: PropTypes.number,
        score: PropTypes.number
    };*/

    computedSatar() {
        /*
        * 我们要遍历，但是我们要遍历几次呢
        * 4.2 5
        * 3.9 4
        * 需要得到次数
        * */
        var Key = 0;
        let result = [];
        let score = Math.floor(this.props.score * 2) / 2;
        // 是否有半星
        let hasDecimal = score % 1 !== 0;
        // 有多少颗全星
        let integer = Math.floor(score);
        for (let i = 0; i < integer; i++) {
            switch (this.props.size) {
                case 24:
                    result.push(<Image style={styles.img} key={Key} source={Star_24.on}/>);
                    break;
                case 36:
                    result.push(<Image style={styles.img} key={Key} source={Star_36.on}/>);
                    break;
                default:
                    result.push(<Image style={styles.img} key={Key} source={Star_48.on}/>);
            }
            Key++;
        }
        if (hasDecimal) {
            switch (this.props.size) {
                case 24:
                    result.push(<Image style={styles.img} key={Key} source={Star_24.half}/>);
                    break;
                case 36:
                    result.push(<Image style={styles.img} key={Key} source={Star_36.half}/>);
                    break;
                default:
                    result.push(<Image style={styles.img} key={Key} source={Star_48.half}/>);
            }
            Key++;
        }
        // 不够的表示没有星
        while (result.length < maxCount) {
            switch (this.props.size) {
                case 24:
                    result.push(<Image style={styles.img} key={Key} source={Star_24.off}/>);
                    break;
                case 36:
                    result.push(<Image style={styles.img} key={Key} source={Star_36.off}/>);
                    break;
                default:
                    result.push(<Image style={styles.img} key={Key} source={Star_48.off}/>);
            }
            Key++;
        }
        return result;
    }

    render() {
        const Star = <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingLeft: 22,
            marginTop: 22,
        }}>
            {this.computedSatar()}
        </View>;
        return Star

    }
}

const Star_24 = {
    on: require('./images/star24_on.png'),
    off: require('./images/star24_off.png'),
    half: require('./images/star24_half.png'),
};

const Star_36 = {
    on: require('./images/star36_on.png'),
    off: require('./images/star36_off.png'),
    half: require('./images/star36_half.png'),
};

const Star_48 = {
    on: require('./images/star48_on.png'),
    off: require('./images/star48_off.png'),
    half: require('./images/star48_half.png'),
};


const styles = StyleSheet.create({
    img: {
        marginRight: 22
    }
});


