import React from 'react';
import { StyleSheet, TextInput, Text, View, Button } from 'react-native';
import {
  Container,
  Content
} from 'native-base';
import AppHeader from './Components/AppHeader';

// npm run ios and npm run android
// facebook.github.io for react native documentation

export default class App extends React.Component {

  //
  // REACT STATE / FUNCTIONS
  //

  state = {
    inputValue: "",
    tipAmount: 0.2,
  }

  //
  // FUNCTIONS
  //

  handleChange (text) {
    this.setState({
      inputValue: text
    });
  }

  displayTipValue (number) {
    let tip = 0.00;
    if (number) {
      tip = parseFloat(number) * this.state.tipAmount;
      tip = this.roundTip(tip)
    }
    return tip;
  }



  roundTip (tip) {
    return Math.round(tip * 100 / 100).toFixed(2);
  }

  updateTipAmount (newAmount) {
    this.setState({
      tipAmount: newAmount
    });
  }

  updateCustomTipAmount (customTip) {
    if (customTip) {
      customTip = parseFloat(customTip);
      customTip = this.convertPercent(customTip);
      this.setState({
        tipAmount: customTip
      });
    } else {
      this.setState({
        tipAmount: 0
      });
    }
  }

  convertPercent (number) {
    return number / 100;
  }

  convertTipAmountToPercent (tipAmount) {
    let tipPercent = (tipAmount * 100).toString();
    return tipPercent;
  }

  render() {

    let { inputValue, tipAmount, isReady } = this.state;

    return (
      <Container>
        <AppHeader />
        <Content padder>
        <View style={styles.container}>
          <Text>${ this.displayTipValue(inputValue) }</Text>
          <TextInput
            value={inputValue}
            placeholder="0.00"
            style={styles.input}
            keyboardType="numeric"
            onChangeText={this.handleChange.bind(this)}
          />
          <View style={styles.buttonGroup}>
            <Button title="10%" onPress={this.updateTipAmount.bind(this, 0.1)} />
            <Button title="20%" onPress={this.updateTipAmount.bind(this, 0.2)} />
            <Button title="25%" onPress={this.updateTipAmount.bind(this, 0.25)} />
            <TextInput
              value={(tipAmount * 100).toString()}
              placeholder="20%"
              style={styles.customTip}
              keyboardType="numeric"
              onChangeText={this.updateCustomTipAmount.bind(this)}
            />
          </View>
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  customTip: {
    height: 40,
    width: '60%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5
  },
  heading: {
    fontSize: 32
  },
  body: {
    fontSize: 24
  },
  buttonGroup: {
    flexDirection: 'row'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: '#333',
    borderWidth: 1,
    padding: 5
  }
});
