import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import Button from '../basic/button'
import Link from '../basic/link'

export default class Header extends Component {

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
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '100',
    width: 300,
    textAlign: 'center'
  }
})
