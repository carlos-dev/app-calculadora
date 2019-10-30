import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Numero from './Numero'

export default class Entrada extends Component  {
    render() {
        return(
            <View style={styles.numeros}>
                <Numero />
                <Numero />
            </View>     
        )
    }
}

const styles = StyleSheet.create({
    numeros: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})