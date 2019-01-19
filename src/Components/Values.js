import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const roundTip = (tip) => {
  return Math.round(tip * 100 / 100).toFixed(2);
}

const Values = ({ tipPercent, bill }) => {
  let tip = 0.00;
  let total = 0.00;

  if (bill) {
    tip = parseFloat(bill) * tipPercent;
    total = parseFloat(bill) + tip;
    tip = roundTip(tip);
    total = roundTip(total);
  }

  return (
    <View style={styles.values}>
      <Text style={styles.label}>Tip Amount:</Text>
      <Text style={styles.tip}>${tip}</Text>
      <Text style={styles.label}>Total Bill:</Text>
      <Text style={styles.total}>${total}</Text>
    </View>
  )
}

export default Values;

const styles = StyleSheet.create({
  values: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#333333',
    width: '100%'
  },
  label: {
    color: '#ffffff',
  },
  tip: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: 'bold'
  },
  total: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
