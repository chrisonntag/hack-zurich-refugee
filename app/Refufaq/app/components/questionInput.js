import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';

let GLOBAL = require('../globals');

export default class QuestionInput extends Component {
  state = { question: 'laundry' };

  _submitQuestion = () => {
    fetch(GLOBAL.URL + '/Questions/ask', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: this.state.question
      })
    })
    .then((response) => response.json())
    .then((response) => [{ id: response.data.objectID, question: response.data.question, answer: response.data.solution }])
    .then((response) => this.props.handleNewAnswer(response))
  };

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(question) => this.setState({question})}
          onSubmitEditing={this._submitQuestion}
          value={this.state.question}
        />
      </View>
    )
  }
}
