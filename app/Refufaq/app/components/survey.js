import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

export default class SurveyScreen extends Component {
  render() {
    return (
      <View style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text style={{marginTop: 120}}> Thats the survey </Text>
      </View>
    )
  }
}
