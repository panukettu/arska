import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';

export default class Inputs extends React.Component {

  constructor() {
    super();
    this.state = {
      name: ""
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RkTextInput style={styles.textInput} placeholder='Liikkeen nimi' name="name"/>
        <RkTextInput style={styles.textInput} placeholder='Toistomäärä' name="reps"/>
        <RkTextInput style={styles.textInput} placeholder='Aloituspaino' name="weight"/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})