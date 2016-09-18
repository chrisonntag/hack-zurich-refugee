import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator
} from 'react-native';

import MainScreen from './MainScreen'
import SurveyScreen from './SurveyScreen'
import VolunteerMainScreen from './volunteer/VolunteerMainScreen'

var DeviceInfo = require('react-native-device-info');

//will change if all apps from the current apps vendor have been previously uninstalled
const DeviceID = DeviceInfo.getUniqueID();
console.log('Users unique DeviceID is: ' + DeviceID);

export default class HomeScreen extends Component {
  state = {
    role: "refugee",
    knownUser: false,
    deviceId: "",
    groupId: 1
  }

  _setKnownUserState = () => {
    // @TODO check if this device was registered before
    fetch('http://localhost:3000/api/Refugees/?deviceId=' + DeviceID, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      // we have seen this device before
      /*this.setState({
        knownUser: true,
        deviceId: DeviceID
      })*/
    })
  };

  componentDidMount = () => {
    this._setKnownUserState()
  }

  render() {
    return (
      <Navigator
        initialRoute={this.state.knownUser ? { id: 'main' } : { id: 'survey' }}
        renderScene={this.navigatorRenderScene}
      />
    )
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'survey':
        return (<SurveyScreen nav={navigator} title="SurveyScreen"/>);
      case 'main':
        return (<MainScreen nav={navigator} title="MainScreen" {...route.passProps} />);
      case 'volunteer':
        return (<VolunteerMainScreen nav={navigator} title="VolunteerScreen" />);
    }
  }
}


/*
(route, navigator) => {
  return this.state.knownUser ? <MainScreen groupId={this.state.groupId} title={route.title} /> : <SurveyScreen nav={navigator} deviceId={this.state.deviceId} title={route.title} />
}}
*/
