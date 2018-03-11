import React from 'react';
import { Picker, View, StyleSheet, Text, Button} from 'react-native';

import { getRoutines } from '../storage/Storage';
import _ from 'lodash';


export default class RoutinePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      routines: []
    }
  }

  handleChange(routine, index) {
    console.log('RutinePicker HANDLECHANGE FIRE' + index);
    this.props.handleChange(routine);
  }

  handleSubmit() {
    this.props.deleteRoutine();
  }

  render() {
    console.log('RoutinePicker RENDERING: ' + this.props.routines.length + ' routine(s)');
    console.log('RoutinePicker SELECTEDVALUE: ' + JSON.stringify(this.props.selectedRoutine));
    if(this.props.routines.length > 0) {
      // create list of picker items here
      var pickerItems = this.props.routines.map(routine => {
        return (
          <Picker.Item key={_.uniqueId()} label={routine.name} value={routine}/>
        )
      });
      return(
        <View>
          <Picker
            style={styles.picker}
            selectedValue={this.props.selectedRoutine}
            onValueChange={(item, index) => this.handleChange(item, index)}>
            {pickerItems}
          </Picker>
          <Button title="Poista treeni" onPress={() => this.handleSubmit()}/>
        </View>
      );
    } 
    else {
      return null;
    }
  }
}

const styles = {
  picker: {
    color: '#FFFFFF'
  }
}