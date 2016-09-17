import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';


export default class Button extends Component {

  render() {
    return (
      <View style={this.props.style}>
        <TouchableHighlight style={styles.button} onPress={this.props.onClick}>
          <View style={styles.innerButton}>
            {this.props.icon ?
              <Image
                style={styles.icon}
                source={require(this.props.icon)}
              />
            : null}
              <Text style={styles.text}>{this.props.value}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
  },
  icon: {
    width: 20,
    height: 20
  },
  innerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
