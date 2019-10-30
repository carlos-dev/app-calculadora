import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';

import Comando from './Comando';
import Entrada from './Entrada';
import Operacao from './Operacao';

export default class Painel extends Component  {
    render() {
        return(
            <View style={styles.mainContent}>
                <Entrada />
                <Operacao />
                <Comando />
            </View>   
        )
    }
}


const styles = StyleSheet.create({
    mainContent: {
        marginHorizontal: 15,
    }
})