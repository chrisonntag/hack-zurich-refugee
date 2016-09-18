import React, { Component } from 'react';
import {
  Text,
  View,
  Navigator
} from 'react-native';

var Swiper = require('react-native-swiper');
import LandingSite from './LandingScreen'
import InitQuestion from './survey/InitQuestion'
import AgeQuestion from './survey/AgeQuestion'
import CampQuestion from './survey/CampQuestion'

export default class SurveyScreen extends Component {
  render() {
    return (
      <Swiper
        showsButtons={false}
        loop={false}
      >
        <LandingSite
          nav = {this.props.nav}
        />
        <InitQuestion />
        <AgeQuestion />
        <CampQuestion
          deviceId={this.props.deviceId}
          nav = {this.props.nav}
        />
      </Swiper>
    )
  }
}
