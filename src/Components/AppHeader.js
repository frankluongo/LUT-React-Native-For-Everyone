import React from 'react';
import { StyleSheet, StatusBar, View, Platform } from 'react-native';
import {
  Header,
  Body,
  Title,
  Left,
  Right,
} from 'native-base';

/*

if (Platform.OS === 'ios' || 'android')

*/

const AppHeader = () => (
  <View style={styles.header}>
    <Header>
      <Left />
      <Body>
        <Title>App Header</Title>
      </Body>
      <Right />
    </Header>
  </View>
)

export default AppHeader;


const styles = StyleSheet.create({
  header: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
