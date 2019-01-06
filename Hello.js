import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Hello extends Component {
  render() {
    let { styles } = this.props;
    return (
      <View>
        <Text style={styles}>Here's some paragraph text</Text>
      </View>
    )
  }
}
