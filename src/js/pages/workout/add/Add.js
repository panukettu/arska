import React from 'react';
import {Alert, View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default class Add extends React.Component {

  handleSubmit() {
   const workout = {
     name: this.state.name,
     reps: this.state.reps,
     weight: this.state.weight
   };

   this.props.add(workout);
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
          <TextInput placeholder='Liike' name="name" onChangeText={(name) => this.setState({name})}/>
          <TextInput placeholder='Toistot' name="reps" onChangeText={(reps) => this.setState({reps})}/>
          <TextInput placeholder='Aloituspaino' name="weight" onChangeText={(weight) => this.setState({weight})}/>
        </View>
        <Button onPress={this.handleSubmit.bind(this)} title="Tallenna"/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputs: {
    flex: 1,
    flexDirection: 'column'
  }
})