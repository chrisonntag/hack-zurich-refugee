/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './app/components/header.js'
import QuestionInput from './app/components/questionInput.js'
import QuestionAnswerList from './app/components/questionAnswerList.js'

class RefuFaq extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header></Header>
        </View>
        <View style={styles.body}>
          <QuestionInput></QuestionInput>
          <QuestionAnswerList></QuestionAnswerList>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('RefuFaq', () => RefuFaq);
