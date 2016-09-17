/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AppRegistry
} from 'react-native';


import HomeScreen from './app/components/homeScreen.js'


class RefuFaq extends Component {

  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

AppRegistry.registerComponent('RefuFaq', () => RefuFaq);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
});
