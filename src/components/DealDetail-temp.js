import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
import { priceDisplay } from '../util';

class DealDetail extends Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
    }

    render() {
        console.log(this.props.deal);
        const { deal } = this.props;

        return (
            <View style={style.deal}>
                <Image style={style.image} source={{ uri: deal.media[0] }} />
                <View style={style.info}>
                    <Text style={style.title}>{deal.title}</Text>
                    <View style={style.footer}>
                        <Text style={style.cause}>{deal.cause.name}</Text>
                        <Text style={style.price}>{priceDisplay(deal.price)}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

var style = StyleSheet.create({
    deal: {
        marginHorizontal: 12,
        marginTop: 12,
    },
    image: {
        width: '100%',
        height: 150,
        backgroundColor: '#ccc',
    },
    info: {
        padding: 10,
        backgroundColor: '#fff',
        borderColor: '#bbb',
        borderWidth: 1,
        borderTopWidth: 0,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    footer: {
        flexDirection: 'row',
    },
    cause: {
        flex: 2,
    },
    price: {
        flex: 1,
        textAlign: 'right',
    },
});

export default DealDetail;