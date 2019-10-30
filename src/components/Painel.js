import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Comando from './Comando';
import Entrada from './Entrada';
import Operacao from './Operacao';

export default class Painel extends Component  {
    render() {
        return(
            <View>
                <Entrada />
                <Operacao />
                <Comando />
            </View>   
        )
    }
}