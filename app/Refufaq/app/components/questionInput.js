import React, { Component } from 'react';
import {
  TextInput,
  View
} from 'react-native';

export default class QuestionInput extends Component {
  state = { text: 'Useless Placeholder' };

  _submitQuestion = () => {
    console.log("WEEEEEEE")
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
