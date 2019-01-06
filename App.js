import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Hello from './Hello';

// npm run ios and npm run android

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Hello!!!</Text>
        <Hello styles={styles.body} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32
  },
  body: {
    fontSize: 24
  }
});
