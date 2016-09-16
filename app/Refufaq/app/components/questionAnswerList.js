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
        <QuestionAnswer question="This is a question" answer="ANSWER"></QuestionAnswer>
      </View>
    )
  }
}
