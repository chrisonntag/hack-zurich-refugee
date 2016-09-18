/**
 * RefuFaq
 * https://github.com/
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  AppRegistry
} from 'react-native';
import HomeScreen from './app/Screens/HomeScreen'

class RefuFaq extends Component {

  render() {
    return (
      <HomeScreen />
    );
  }
}

AppRegistry.registerComponent('RefuFaq', () => RefuFaq);
