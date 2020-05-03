import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DealList extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>Deals</Text>
            </View>
        );
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default DealList;