import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';

let GLOBAL = require('../globals');

export default class QuestionInput extends Component {
  state = { question: 'Food' };

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
    .then((response) => console.log(response))
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
