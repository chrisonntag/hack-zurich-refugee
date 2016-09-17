import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import QuestionAnswer from './questionAnswer.js'

let questionsAndAnswers = [
  {id: 1, question: "question 1", answer: "Answer!"},
  {id: 2, question: "question 2", answer: "A!"}
]

export default class QuestionAnswerList extends Component {
  render() {
    return (
      <View>
        { questionsAndAnswers.map(function(questionAndAnswer) {
          return <QuestionAnswer key={questionAndAnswer.id} question={questionAndAnswer.question} answer={questionAndAnswer.answer}></QuestionAnswer>
        }) }
      </View>
    )
  }
}
