import React from 'react';
import { StyleSheet, TextInput, Text, View, Button, Alert } from 'react-native';
import {
  Container,
  Content
} from 'native-base';
import AppHeader from './Components/AppHeader';
import TipCalculator from './Components/TipCalculator';

// import Hello from './Hello';

// npm run ios and npm run android
// facebook.github.io for react native documentation

export default class App extends React.Component {

  alert () {
    Alert.alert(
      'Whaddup hoes?',
      'Where y\'all at?',
      [
        {
          text: 'OK',
          onPress: () => console.log('eat a penis'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('nah'),
        }
      ]
    );
  }

  render() {

    return (
      <Container>
        <AppHeader />
        <Content padder>
          <View>
            <Button
              title="Alert"
              onPress={this.alert}
            />
          </View>
          <TipCalculator />
        </Content>
      </Container>
    );
  }
}
