import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

// npm run ios and npm run android
// facebook.github.io for react native documentation

export default class App extends React.Component {

  state = {
    inputValue: ""
  }

  handleChange (text) {
    this.setState({
      inputValue: text
    });
  }

  displayTipValue (number) {
    let tip = 0.00;
    if (number) {
      tip = parseFloat(number) * 0.2;
      tip = this.roundTip(tip)
    }
    return tip;
  }

  roundTip (tip) {
    return Math.round(tip * 100 / 100).toFixed(2);
  }

  render() {
    let { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          ${ this.displayTipValue(inputValue) }
        </Text>
        <TextInput
          value={inputValue}
          placeholder="0.00"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={this.handleChange.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  heading: {
    fontSize: 32
  },
  body: {
    fontSize: 24
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5
  }
});
