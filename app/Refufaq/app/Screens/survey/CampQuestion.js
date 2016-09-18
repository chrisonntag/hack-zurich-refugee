import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  PickerIOS,
  Platform,
  Navigator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

import MainScreen from '../MainScreen'
import Button from '../../components/button'
import Link from '../../components/link'

var PickerItemIOS = PickerIOS.Item;

let CAMPS = [];

export default class CampQuestion extends Component {

  state = {
    camp: ""
  }

  _renderMainScreen = () => {
    this.props.nav.push({
      id: 'main'
    })
  }

  _handleSubmit = () => {
    this._renderMainScreen()
    /*fetch('http://localhost:3000/api/Refugees', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceId: this.props.deviceId,
        groupId: this.state.camp,
      })
    })
    .then((response) => {
      console.log(response.status)

    })*/
  }

  _loadCamps = () => {
    fetch('http://localhost:3000/api/Groups', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      CAMPS = response;
    })
  }

  render() {
    return (
      <LinearGradient start={[0.0, 0.25]} end={[0.5, 1.0]} locations={[0,1.0]} colors={['#A95D4E', '#AC6B4C']} style={styles.linearGradient}>
        <View style={styles.body}>
          <Text style={styles.title}>
            What camp are you in?
          </Text>

          <PickerIOS
            selectedValue={this.state.camp}
            onValueChange={(camp) => this.setState({camp, modelIndex: 0})}
          >
            {Object.keys(CAMPS).map((camp) => (
              <PickerItemIOS
                key={camp}
                value={CAMPS[camp].id}
                label={CAMPS[camp].name}
              />
            ))}
          </PickerIOS>


        </View>
        <Link value="submit" style={styles.skipLink} onClick={this._handleSubmit}></Link>
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
