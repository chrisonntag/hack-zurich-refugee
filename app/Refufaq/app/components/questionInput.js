import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';

export default class QuestionInput extends Component {
  state = { text: 'Useless Placeholder' };

  _submitQuestion = () => {
    fetch('https://api.myjson.com/bins/vfne', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((response) => console.log(response))
  };

  render() {
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this._submitQuestion}
          value={this.state.text}
        />
      </View>
    )
  }
}
