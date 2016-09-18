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

export default class AgeQuestion extends Component {

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
            How old are you?
          </Text>

          <View style={styles.buttonCollection}>
            <View style={styles.buttonCollectionInner}>
              <Button style={{marginRight: 20}} value="<18" onClick={this._handleClick}></Button>
              <Button style={{marginRight: 20}} value="18-25" onClick={this._handleClick}></Button>
            </View>
            <View style={styles.buttonCollectionInner}>
              <Button style={{marginRight: 20}} value="26-35" onClick={this._handleClick}></Button>
              <Button style={{marginRight: 20}} value="35+" onClick={this._handleClick}></Button>
            </View>
          </View>

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
    width: width
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
