import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Topo  from './src/components/Topo';
import Resultado from './src/components/Resultado';
import Painel from './src/components/Painel';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground style={{width: '100%', height: '100%', flex: 1, alignItems: 'center', justifyContent: 'center', resizeMode: 'contain'}} style={styles.main}>
          <Topo />
          <Resultado />
          <Painel />
        </ImageBackground>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  main: {
    flex: 1    
  }
});
