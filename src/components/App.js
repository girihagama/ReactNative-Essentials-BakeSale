import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';
import ajax from '../ajax';
import DealList from './DealList';
import DealDetail from './DealDetail';

class App extends Component {
    state = {
        deals: [],
        currentDealId: null,
    }

    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals();
        //console.log(deals);
        this.setState({ deals });
    }

    setCurrentDeal = (dealId) => {
        this.setState({ currentDealId: dealId }, () => {
            //console.log(_.find(this.state.deals, ['key', this.state.currentDealId]));
        });
    }
    currentDeal = () => {
        return _.find(this.state.deals, ['key', this.state.currentDealId]);
    }

    render() {
        if (this.state.currentDealId) {
            return (
                <DealDetail initialDealData={this.currentDeal()} />
            );
        }
        if (this.state.deals.length > 0) {
            return (
                <View style={style.container}>
                    <DealList deals={this.state.deals} onItemPress={this.setCurrentDeal} />
                </View>
            );
        } else if (this.state.deals.length === 0) {
            return (
                <View style={style.container}>
                    <Text style={style.header}>Bake Sale</Text>
                    <Text style={style.version}>v 1.0</Text>
                </View>
            );
        }
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
        color: 'black',
    }
});

export default App;