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
        <View style={styles.header}>
          <Header></Header>
        </View>
        <View style={styles.body}>
          <QuestionList></QuestionList>
        </View>
      </View>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <View>
        <Text> RefuFAQ</Text>
      </View>
    )
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
