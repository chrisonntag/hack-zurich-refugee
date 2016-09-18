import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


export default class AskQuestionView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: ""
    }
  }

  _getAnswer = () => {
    console.log("Frage: "+ this.state.question);
    console.log("GroupId: "+ this.props.groupId);
    fetch('http://localhost:3000/api/Questions/ask', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: this.state.question,
        groupId: this.props.groupId,
      })
    })
    .then((response) =>
      {
        return response.json() // << This is the problem
      })
    .then((responseData) => { // responseData = undefined
       return responseData;
     })
    .then((data) => {
       console.log(data.data.result);
       this.setState({
         answer: data.data.result
       })
     })
     .catch(function(err) {
        console.log(err);
      })
     .done();

  }

  render() {
    return (
      <LinearGradient start={[0.0, 0.25]} end={[0.5, 1.0]} locations={[0,1.0]} colors={['#749E9E', '#BD9D42']} style={styles.linearGradient}>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            autoFocus={true}
            placeholder="Type here to find an answer"
            onChangeText={
              (text) => this.setState({question: text})
            }
            onEndEditing={this._getAnswer}
          />

          <View style={styles.AnswerBox}>
            <Text style={styles.text}>{this.state.answer}</Text>
          </View>
        </View>
      </LinearGradient>
    )
  }
}


var width = Dimensions.get('window').width; //full width

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    width: width,
    marginTop: 40
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '100',
    width: 300,
    textAlign: 'left'
  },
  input: {
    height: 40,
    textAlign: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 3
  },
  AnswerBox: {
    marginTop: 30,
    width: width-40,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
})
