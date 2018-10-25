import React, { Component } from 'react';
import { TouchableOpacity, Text }from 'react-native';
import styles from './Shared.styles';

export default class Button extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {onPress, text} = this.props;
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}>
        <Text style={styles.title}>{text}</Text>
      </TouchableOpacity>
    )
  }
}
