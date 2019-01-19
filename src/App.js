import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';
import {
  Container
} from 'native-base';
import AppHeader from './Components/AppHeader';
import TipCalculator from './Components/TipCalculator';

// import Hello from './Hello';

// npm run ios and npm run android
// facebook.github.io for react native documentation

export default class App extends React.Component {

  render() {

    return (
      <Container>
        <AppHeader />
        <TipCalculator />
      </Container>
    );
  }
}
