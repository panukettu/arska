import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

import Colors from 'src/js/constants/Colors';


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
          <TextInput style={styles.textInput} underlineColorAndroid='transparent' placeholder='Liike' placeholderTextColor='#FFFFFF' name="name" onChangeText={(name) => this.setState({name})}/>
          <TextInput style={styles.textInput} underlineColorAndroid='transparent' placeholder='Toistot' placeholderTextColor='#FFFFFF' name="reps" onChangeText={(reps) => this.setState({reps})} keyboardType='numeric'/>
          <TextInput style={styles.textInput} underlineColorAndroid='transparent' placeholder='Aloituspaino' placeholderTextColor='#FFFFFF'name="weight" onChangeText={(weight) => this.setState({weight})} keyboardType='numeric'/>
        </View>
        <View>
          <Button color={Colors.Lightest} onPress={this.handleSubmit.bind(this)} title="Tallenna"/>
        </View>
      </View>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.Darkest,
  },
  inputs: {
    flex: 1,
    flexDirection: 'column',
  },
  textInput: {
    backgroundColor: Colors.Lighter,
    color: '#FFFFFF',
    margin: 5,
    padding: 5,
    flex: 0.3,
  },
  button: {
    color: Colors.Middle,
  }
})


