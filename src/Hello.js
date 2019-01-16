import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Hello extends Component {

  renderStyles () {
    let stylesToRender;
    stylesToRender = styles.hello;

    if (this.props.styles) {
      stylesToRender = this.props.styles;
    }

    return stylesToRender;
  }

  render() {
    return (
      <View>
        <Text style={this.renderStyles()}>Here's some paragraph text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  hello: {
    color: '#111111',
    backgroundColor: '#00FF00',
    fontSize: 18
  }
});
