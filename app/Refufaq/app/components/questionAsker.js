import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import QuestionInput from './questionInput.js'
import QuestionAnswerList from './questionAnswerList.js'

export default class QuestionAsker extends Component {
  state = {
    questionsAndAnswers: [],
    noResultMessage: false
  };

  _answerQuestion = (results) => {
    if(results.length > 0) {
      this.setState({questionsAndAnswers: results, noResultMessage: false})
    } else {
      this.setState({questionsAndAnswers: [], noResultMessage: true})
    }
  }

  render() {
    if(this.state.noResultMessage) {
      searchResults = <Text> No results :(  </Text>
    } else {

      searchResults = <QuestionAnswerList list={this.state.questionsAndAnswers}></QuestionAnswerList>
    }
    return (
      <View>
        <QuestionInput handleNewAnswer={this._answerQuestion}></QuestionInput>
        {searchResults}
      </View>
    )
  }
}
