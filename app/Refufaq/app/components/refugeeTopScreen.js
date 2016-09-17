import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import MainScreen from './mainScreen.js'
import SurveyScreen from './survey.js'

var DeviceInfo = require('react-native-device-info');
//will change if all apps from the current apps vendor have been previously uninstalled
const DeviceID = DeviceInfo.getUniqueID();
console.log('Users unique DeviceID is: ' + DeviceID);

export default class RefugeeTopScreen extends Component {
  state = { screen: "survey" }

  componentDidMount = () => {
    fetch('http://localhost:3000/Refugees/' + DeviceID, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      // we have seen this device before
      this.setState({ screen: "main" })
    })
  }

  render() {
    return (
      <View>
        {(() => {
          switch (this.state.screen) {
            case "main":   return <MainScreen />;
            case "survey": return <SurveyScreen />;
            default:       return <MainScreen />;
          }
        })()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
});
