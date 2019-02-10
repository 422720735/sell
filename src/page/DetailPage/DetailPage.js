import React, {Component} from 'react';
import {Modal, StyleSheet, Text, View, Dimensions} from 'react-native';
type Props = {};
export default class DetailPage extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    render() {
        return (
            <View>

            </View>
        );
    }
}

const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create({
    dialog: {
        width: width,

    },
    dialog_detail: {
        backgroundColor: 'rgba(7,17,27,0.8)',
        minHeight: height
    }
});
