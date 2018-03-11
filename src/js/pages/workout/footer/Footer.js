import React from 'react'; 
import { View, TextInput, Text, Button, StyleSheet, Dimensions, KeyboardAvoidingView} from 'react-native';

import AddInput from '../add/inputs/AddInput';

export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }

  handleChange(name) {
    this.setState({name});
  }

  handleSubmit() {
    this.props.handleSubmit(this.state.name);
    if(this.state.name) {
      this.setState({name: ''});
    }
  }

  render() {
    if(!this.props.askName && !this.props.showInit) {
      return (
      <View style={styles.container}>
        <Button title="Valmis" onPress={this.handleSubmit.bind(this)}/>
      </View>
      );
    } else if(this.props.showInit) {
      return(
      <View>
        <Button title="Uusi treeni" onPress={this.props.initNew}/>
      </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <AddInput style={styles.button} placeholder='Ohjelman nimi' handleChange={this.handleChange.bind(this)}/>
          <Button title="Ok!" onPress={this.handleSubmit.bind(this)} disabled={!this.state.name.length}></Button>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  button: {
    minHeight: 50,
    color: '#FFFFFF',
    fontSize: 25
  }
});