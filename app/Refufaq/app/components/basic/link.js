import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';


export default class Button extends Component {

  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight onPress={this.props.onClick}>
          <Text style={styles.text}>{this.props.value}</Text>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  }
});
