import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import {priceDisplay} from '../util';

class DealItem extends Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
    }

    render() {
        const { deal } = this.props;

        return (
            <View>
                <Image style={style.image} source={{ uri: deal.media[0] }} />
                <View>
                    <Text>{deal.title}</Text>
                    <Text>{deal.cause.name}</Text>
                    <Text>{priceDisplay(deal.price)}</Text>
                </View>
            </View>
        );
    }
}

var style = StyleSheet.create({
    image: {
        flex: 1,
        width: '100%',
        height: 150,
    }
});

export default DealItem;