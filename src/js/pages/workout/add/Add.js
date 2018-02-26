import React from 'react';
import {Alert, View, Text, TextInput, StyleSheet} from 'react-native';
import {RkButton, RkTextInput} from 'react-native-ui-kitten';

export default class Add extends React.Component {
  constructor() {
    super();
    this.state = {
      text: "Erkki"
    }
  }

  handleSubmit() {
   Alert.alert(this.state.name);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputs}>
          <RkTextInput placeholder='Liikkeen nimi' name="name" onChangeText={(name) => this.setState({name})}/>
          <RkTextInput placeholder='Toistomäärä' name="reps" onChangeText={(reps) => this.setState({reps})}/>
          <RkTextInput placeholder='Aloituspaino' name="weight" onChangeText={(weight) => this.setState({weight})}/>
        </View>
        <RkButton onPress={this.handleSubmit.bind(this)}>Mikä on nimi?</RkButton>
        <Text></Text>
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