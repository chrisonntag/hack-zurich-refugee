import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import Question from './question.js'
import Answer from './answer.js'

export default class QuestionAnswer extends Component {
  render() {
    return (
      <View>
        <Question question={this.props.question}></Question>
        <Answer answer={this.props.answer}></Answer>
      </View>
    )
  }
}
