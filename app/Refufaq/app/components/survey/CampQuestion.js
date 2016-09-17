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

  _handleClick = (event) => {
    console.log("you belong to the age group");
  }

  _handleSkip = () => {
    console.log("skipped this question");
  }

  render() {
    return (
      <LinearGradient start={[0.0, 0.25]} end={[0.5, 1.0]} locations={[0,1.0]} colors={['#A95D4E', '#AC6B4C']} style={styles.linearGradient}>
        <View style={styles.body}>
          <Text style={styles.title}>
            What camp are you in?
          </Text>

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
  title: {
    color: '#fff',
    fontSize: 50,
    fontWeight: '100',
    textAlign: 'center'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCollection: {
    marginTop: 50
  },
  buttonCollectionInner: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20
  }
})
