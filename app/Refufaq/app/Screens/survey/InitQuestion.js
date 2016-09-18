import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import Button from '../../components/button'
import Link from '../../components/link'

export default class InitQuestion extends Component {

  _handleClick = () => {
    console.log("clicked");

  }

  _handleSkip = () => {
    console.log("skipped this question");
  }

  render() {
    return (
      <LinearGradient start={[0.0, 0.25]} end={[0.5, 1.0]} locations={[0,1.0]} colors={['#749E9E', '#BD9D42']} style={styles.linearGradient}>
        <View style={styles.body}>
          <Text style={styles.text}>
            Do you mind answering a few questions to make answering
            questions more relevant to you?
          </Text>

          <Button style={{marginTop: 50}} value="Okay" onClick={this._handleClick}></Button>

        </View>
        <Link value="skip" style={styles.skipLink} onClick={this._handleSkip}></Link>
      </LinearGradient>
    )
  }
}


var width = Dimensions.get('window').width; //full width

var styles = StyleSheet.create({
  skipLink: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 60
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: width
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '100',
    width: 300,
    textAlign: 'center'
  }
})
