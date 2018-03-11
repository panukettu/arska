import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

import Colors from 'src/js/constants/Colors';
import AddInput from './inputs/AddInput';

export default class Add extends React.Component {

  constructor() {
    super();
    this.state = {
      name: null,
      reps: null,
      weight: null
    }
    this.baseState = this.state;

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRepsChange = this.handleRepsChange.bind(this);
    this.handleWeightChange = this.handleWeightChange.bind(this);
  }

  render() {
    if(!this.props.shouldRender) {
      return (
        <View style={styles.container}>
          <View style={styles.inputs}>
            {/* <TextInput ref={(input) => {this.textInput = input}} style={styles.textInput} value={this.state.name} underlineColorAndroid='transparent' placeholder='Liike' placeholderTextColor='#FFFFFF' name="name" onChangeText={this.handleNameChange.bind(this)}/> */}
            <AddInput inputRef={el => this.inputElement = el} value={this.state.name} style={styles.textInput} placeholder='Liike' handleChange={this.handleNameChange.bind(this)}/>
            <AddInput style={styles.textInput} value={this.state.reps} placeholder='Toistot' handleChange={this.handleRepsChange.bind(this)}/>
            <AddInput style={styles.textInput} value={this.state.weight} placeholder='Paino' handleChange={this.handleWeightChange.bind(this)}/>
          </View>
          <View>
            <Button color={Colors.Green} onPress={this.handleSubmit.bind(this)} disabled={!this.state.name} title=" Lisää "/>
          </View>
        </View>
      );
    } else {
      return null;
    }
  }

  handleNameChange(name) {
    this.setState({name});
  }

  handleRepsChange(reps) {
    this.setState({reps});
  }

  handleWeightChange(weight) {
    this.setState({weight});
  }

  handleSubmit() {
    const workout = {
      name: this.state.name,
      reps: this.state.reps,
      weight: this.state.weight
    };
    
    this.setState(this.baseState);
    this.props.add(workout);
    this.inputElement.focus();
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


