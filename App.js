import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


// npm run ios and npm run android

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.view1}></View>
        <View style={styles.view2}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 32
  },
  body: {
    fontSize: 24
  },
  view1: {
    backgroundColor: '#ff00ff',
    height: 100,
    width: '100%',
    flex: 4
  },
  view2: {
    backgroundColor: '#00ffff',
    height: 100,
    width: '100%',
    flex: 1
  }
});
