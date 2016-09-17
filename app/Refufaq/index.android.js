/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  AppRegistry
} from 'react-native';

var DeviceInfo = require('react-native-device-info');

import MainScreen from './app/components/main.js'
import SurveyScreen from './app/components/survey.js'

//will change if all apps from the current apps vendor have been previously uninstalled
const DeviceID = DeviceInfo.getUniqueID();
console.log('Users unique DeviceID is: ' + DeviceID);

class RefuFaq extends Component {

  state = {
    knownUser: true
  }

  _isKnownUser = () => {
    fetch('http://localhost:3000/Refugees/' + DeviceID, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      if (response.json().status === 200) {
        //it's a known user
        return true
      } else {
        //the user is starting the app for the first time
        return false
      }
    })
    .then((response) => console.log(response))
  };

  componentDidMount = () => {
    if (!this._isKnownUser()) {
      this.setState({
        knownUser: false
      })
    }
  }

  render() {
    return (
      <View>
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
