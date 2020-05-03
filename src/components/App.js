import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ajax from '../ajax';
import DealList from './DealList';

class App extends Component {
    state = {
        deals: [],
    }

    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals();
        //console.log(deals);
        this.setState({ deals });
    }

    render() {
        return (
            <View style={style.container}>
                {
                    (this.state.deals.length === 0) ?
                        <View>
                            <Text style={style.header}>Bake Sale</Text>
                            <Text style={style.version}>v 1.0</Text>
                        </View>
                        :
                        <DealList deals={this.state.deals}/>
                }

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
        backgroundColor: 'white',
    },
    header: {
        fontSize: 40,
    },
    version: {
        fontSize: 10,
        textAlign: 'right',
        color:'black',
    }
});

export default App;