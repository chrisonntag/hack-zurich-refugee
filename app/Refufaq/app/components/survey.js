import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

var Swiper = require('react-native-swiper');
import LandingPage from './survey/LandingPage'
import InitQuestion from './survey/InitQuestion'
import AgeQuestion from './survey/AgeQuestion'
import CampQuestion from './survey/CampQuestion'

class SurveyScreen extends Component {

  render() {
    return (
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        loop={false}
      >
        <LandingPage />
        <InitQuestion />
        <AgeQuestion />
        <CampQuestion />
      </Swiper>
    )
  }

}


var styles = StyleSheet.create({
  wrapper: {
  },
  landing: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default SurveyScreen
