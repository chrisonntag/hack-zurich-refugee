import React, { Component } from 'react';
import {
  View
} from 'react-native';

import QuestionInput from './questionInput.js'
import QuestionAnswerList from './questionAnswerList.js'

export default class QuestionAsker extends Component {
  state = { questionsAndAnswers: [] };

  _answerQuestion = (results) => {
    this.setState({questionsAndAnswers: results})
  }

  render() {
    return (
      <View>
        <QuestionInput handleNewAnswer={this._answerQuestion}></QuestionInput>
        <QuestionAnswerList list={this.state.questionsAndAnswers}></QuestionAnswerList>
      </View>
    )
  }
}
