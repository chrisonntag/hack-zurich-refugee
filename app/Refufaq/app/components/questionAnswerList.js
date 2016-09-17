import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import QuestionAnswer from './questionAnswer.js'

export default class QuestionAnswerList extends Component {
  render() {
    return (
      <View>
        { this.props.list.map(function(questionAndAnswer) {
          return <QuestionAnswer key={questionAndAnswer.id} question={questionAndAnswer.question} answer={questionAndAnswer.answer}></QuestionAnswer>
        }) }
      </View>
    )
  }
}
