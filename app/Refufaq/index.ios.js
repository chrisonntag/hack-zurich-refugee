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

var DeviceInfo = require('react-native-device-info');

import MainScreen from './app/components/mainScreen.js'
import SurveyScreen from './app/components/survey.js'

//will change if all apps from the current apps vendor have been previously uninstalled
const DeviceID = DeviceInfo.getUniqueID();
console.log('Users unique DeviceID is: ' + DeviceID);

class RefuFaq extends Component {

  state = {
    knownUser: false
  }

  _setKnownUserState = () => {
    fetch('http://localhost:3000/Refugees/' + DeviceID, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      // we have seen this device before
      this.setState({
        knownUser: true
      })
    })
  };

  componentDidMount = () => {
    this._setKnownUserState()
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.knownUser ?
          <MainScreen />
         :
          <SurveyScreen />
        }
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
  header: {
    marginTop: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
});
