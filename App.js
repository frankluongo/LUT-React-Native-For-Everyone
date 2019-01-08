import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

// npm run ios and npm run android
// facebook.github.io for react native documentation

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput placeholder="Write Text Here..." style={styles.input} />
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
