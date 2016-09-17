import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Header from './header.js'
import Button from 'react-native-button'
import RefugeeTopScreen from './refugeeTopScreen'

export default class HomeScreen extends Component {
  state = { screen: "home" }

  _goToRefugeeScreen = () => {
    this.setState({screen: "refugee"})
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Header></Header>
        </View>
        <View style={styles.body}>
          {(() => {
            switch (this.state.screen) {
              case "home": return <Button onPress={this._goToRefugeeScreen}> Refugee </Button>
              case "refugee": return <RefugeeTopScreen />
              case "volunteer": return <RefugeeTopScreen />
            }
          })()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    marginTop: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
});
