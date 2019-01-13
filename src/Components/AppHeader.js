import React, { Component } from 'react';
import {
  Header,
  Body,
  Title,
  Left,
  Right
} from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Left />
        <Body>
          <Title>Header</Title>
        </Body>
        <Right />
      </Header>
    )
  }
}
