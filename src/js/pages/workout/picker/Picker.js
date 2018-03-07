import React from 'react';
import { Picker, View, StyleSheet, Text } from 'react-native';

import { getRoutines } from '../storage/Storage';
import _ from 'lodash';


export default class RoutinePicker extends React.Component {
  constructor() {
    super();
    this.state = {
      currrentRoutine: [],
      routines: []
    }
  }

  handleChange(routine) {
    this.props.handleChange(routine);
    this.setState({currentRoutine: routine});
  }

  render() {
    console.log("Pickkeris: " + this.props.routines.length);
    if(this.props.routines.length > 0) {
      // create list of picker items here
      var list = this.props.routines.map(routine => {
        return (
          <Picker.Item key={_.uniqueId()} label={routine.name} value={routine}/>
        )
      });
      return(
        <View>
          <Picker
            style={styles.picker}
            selectedValue={this.state.currentRoutine}
            onValueChange={(itemValue, itemIndex) => this.handleChange(itemValue)}>
            {list}
          </Picker>
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