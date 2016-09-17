import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import Header from './header.js'
import QuestionAsker from './questionAsker.js'
import QuestionAnswerList from './questionAnswerList.js'

let questionsAndAnswers = [
  {id: 1, question: "question 1", answer: "Answer!"},
  {id: 2, question: "question 2", answer: "A!"}
]

export default class MainScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Header></Header>
        </View>
        <View style={styles.body}>
          <QuestionAsker></QuestionAsker>
          <QuestionAnswerList list={questionsAndAnswers}></QuestionAnswerList>
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