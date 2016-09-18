import React, { Component, PropTypes } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient'


export default class AskQuestionView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      unanswered_questions: []
    }
  }



  render() {
    return (
      <LinearGradient start={[0.0, 0.25]} end={[0.5, 1.0]} locations={[0,1.0]} colors={['#749E9E', '#BD9D42']} style={styles.linearGradient}>
        <TouchableHighlight style={styles.BackButton} onPress={() => this.props.nav.pop()}>
          <Text>&lt; Back</Text>
        </TouchableHighlight>

        <View style={styles.body}>

          <Text style={styles.text}>There are no unanswered questions yet</Text>
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
    marginTop: 60
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
  },
  BackButton: {
    left: 0,
    marginLeft: 15,
    marginTop: 30,
    position: 'absolute',
    top: 0
  }
})
