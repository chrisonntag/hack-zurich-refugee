import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

export default class PopularQuestionsView extends Component {
  render() {
    return (
      <LinearGradient start={[0.0, 0.25]} end={[0.5, 1.0]} locations={[0,1.0]} colors={['#749E9E', '#BD9D42']} style={styles.linearGradient}>
        <View style={styles.body}>
          <Text style={styles.text}>There are no good rated advices for your camp...</Text>
        </View>
      </LinearGradient>
    )
  }
}


var width = Dimensions.get('window').width; //full width

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: width,
    marginTop: 40
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '100',
    width: 300,
    textAlign: 'left'
  }
})
