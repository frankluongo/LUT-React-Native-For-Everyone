import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

// npm run ios and npm run android
// facebook.github.io for react native documentation

export default class App extends React.Component {

  state = {
    inputValue: "Hello!"
  }

  handleChange (text) {
    this.setState({
      inputValue: text
    });
  }

  render() {
    let { inputValue } = this.state;
    return (
      <View style={styles.container}>
        <Text>
          { inputValue }
        </Text>
        <TextInput
          value={inputValue}
          placeholder="Write Text Here..." style={styles.input}
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
