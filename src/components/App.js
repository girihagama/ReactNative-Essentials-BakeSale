import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class App extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={style.header}>Bake Sale</Text>
                <Text>v 1.0</Text>
            </View>
        );
    }
}

var style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    header:{
        fontSize:40,
    }
});

export default App;