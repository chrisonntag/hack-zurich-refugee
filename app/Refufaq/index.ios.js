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

class RefuFaq extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QuestionList></QuestionList>
      </View>
    );
  }
}

class QuestionList extends Component {
  render() {
    return (
      <View>
        <QuestionAndAnswer question="This is a question" answer="ANSWER"></QuestionAndAnswer>
      </View>
    )
  }
}

class QuestionAndAnswer extends Component {
  render() {
    return (
      <View>
        <Question question={this.props.question}></Question>
        <Answer answer={this.props.answer}></Answer>
      </View>
    )
  }
}
class Question extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.question} </Text>
      </View>
    )
  }
}

class Answer extends Component {
  render() {
    return (
      <View>
        <Text> {this.props.answer} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RefuFaq', () => RefuFaq);
