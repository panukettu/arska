// @flow

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Workouts from './src/js/pages/workout/Workouts';
import Header from './src/js/header/Header';

import Colors from './src/js/constants/Colors';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Workouts/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.Darkest,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
