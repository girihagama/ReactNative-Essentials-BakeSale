import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import DealItem from './DealItem';

class DealList extends Component {
    static propTypes = {
        deals: PropTypes.array.isRequired,
    }

    render() {
        return (
            <View style={style.list}>
                <FlatList               
                    data={this.props.deals}
                    renderItem={({ item }) => <DealItem deal={item}/>}
                />
            </View>
        );
    }
}

var style = StyleSheet.create({
    list: {
        flex: 1,
        width: '100%',
        backgroundColor: '#eee',
        padding: 3,
    },
    listItem:{
        fontSize: 10,
    }
});

export default DealList;