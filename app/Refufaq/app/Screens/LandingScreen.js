import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Navigator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'
import Link from '../components/link'

export default class Header extends Component {
  _renderLoginSite = () => {
    return(
      <Navigator
        initialRoute={{ title: 'RefuFAQ', index: 0 }}
        renderScene={(route, navigator) => {
          return <MainScreen title={route.title} />
        }}
      />
    );
  }

  render() {
    return (
      <LinearGradient start={[0.0, 0.25]} end={[0.5, 1.0]} locations={[0,1.0]} colors={['#9180EA', '#DD7F87']} style={styles.linearGradient}>
        <View style={styles.body}>
          <Text style={styles.title}>RefuFAQ</Text>
          <Text style={styles.text}>Answering your questions</Text>
        </View>

        <Link style={styles.loginLink} onClick={this._renderLoginSite} value="Group Manager Login" />
      </LinearGradient>
    )
  }
}

var width = Dimensions.get('window').width; //full width

var styles = StyleSheet.create({
  wrapper: {
  },
  loginLink: {
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
    fontSize: 60,
    fontWeight: '100'
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
    marginTop: 30,
    fontWeight: '100',
  }
})
