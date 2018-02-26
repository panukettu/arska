import React from 'react';
import {StyleSheet, View, Text, TextInput } from 'react-native';

import Add from './add/Add';
import List from './list/List';

export default class Workouts extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Add/>
        <List/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});