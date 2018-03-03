import React from 'react';
import {StyleSheet, View, Button, AsyncStorage, Text} from 'react-native';

import Add from './add/Add';
import List from './list/List';


export default class Workouts extends React.Component {
  constructor() {
    super();
    
    this.state = {
      workouts: [],
    }

    this.get = this.get.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }
  
  get = async () => {
    try {
      let workouts = await AsyncStorage.getItem("workouts");
      return JSON.parse(workouts);
    }
    catch(err) {
      alert("Virhe");
    }
  }

  add(workout) {
    let workouts = this.state.workouts;
    let index = workouts.findIndex(w => w.name == workout.name);

    if(index === -1) { 
      workouts.push(workout);
      this.save(workouts);
    } 
    else {
      alert('Liike on jo listassa!');
    } 
  }

  remove(workout) {
      let workouts = this.state.workouts;  
      let index = workouts.findIndex(w => w.name == workout.name);
      workouts.splice(index, 1);
      this.save(workouts);
  }

  save(workouts) {
    AsyncStorage.setItem("workouts", JSON.stringify(workouts));
    this.setState({workouts});
  }

  render() {
    return (
      <View style={styles.container}>
        <Add add={this.add.bind(this)}/>
        <List remove={this.remove.bind(this)} workouts={this.state.workouts}/>
      </View>
    );
  }

  componentDidMount() {
    this.get().then(workouts => {
      if(workouts) {
        this.setState({workouts});
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch', 
  }
});