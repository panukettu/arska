import React from 'react';
import {StyleSheet, View, Button, AsyncStorage, Text, Modal, Picker} from 'react-native';

import _ from 'lodash';
import update from 'immutability-helper';

import Add from './add/Add';
import Footer from './footer/Footer';
import List from './list/List';
import RoutinePicker from './picker/Picker';
import { setRoutine, getRoutines, removeRoutine, updateRoutine } from './storage/Storage';


export default class Workouts extends React.Component {
  constructor() {
    super();
    
    this.state = {
      currentRoutine: null,
      routines: [],
      workouts: [],
      askRoutineName: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Add add={this.add.bind(this)} shouldRender={this.state.currentRoutine} initNew={this.init.bind(this)}/>
        <RoutinePicker routines={this.state.routines} selectedRoutine={this.state.currentRoutine} handleChange={this.set.bind(this)} deleteRoutine={this.deleteRoutine.bind(this)}/>
        <List remove={this.remove.bind(this)} workouts={this.state.workouts} handleChange={this.handleChange.bind(this)}/>
        <Footer askName={this.state.askRoutineName} handleSubmit={this.save.bind(this)} showInit={this.state.currentRoutine} initNew={this.init.bind(this)}/>
      </View>
    );
  }

  componentDidMount() {
    getRoutines().then(routines => {
      if(routines) {
        this.setState({routines});
      }
    });
  }

  init() {
    this.setState({currentRoutine: null, workouts: []});
  }

  add(workout) {
    let workouts = this.state.workouts.slice();
    let index = workouts.findIndex(w => w.name == workout.name);
    
    if(index === -1) { 
      workouts.push(workout);
      this.setState({workouts: workouts});
    } 
    else {
      alert('Liike on jo listassaa!');
    } 
  }

  remove(workout) {
      // clone the array since it's used as a datasource
      let workouts = this.state.workouts.slice();
      let index = workouts.findIndex(w => w.name === workout.name);
      workouts.splice(index, 1);
      this.setState({workouts});
  }

  set(routine) {
    this.setState({currentRoutine: routine, workouts: routine.workouts});
  }

  save(name) {

    if(!name) {
      this.setState({askRoutineName: true});
    } 
    else {

      let workouts = this.state.workouts.slice();
      let routines = this.state.routines.slice();

      let obj = {
        id: _.uniqueId(),
        name: name,
        workouts: workouts
      }
      
      routines.push(obj);
      setRoutine(obj);
      this.setState({routines: routines, currentRoutine: obj, workouts: obj.workouts, askRoutineName: false});
    }
  }

  deleteRoutine() {
    console.log('Routine DELETE: CALLED');
    let routines = this.state.routines;
    let index = routines.findIndex(r => r.id == this.state.currentRoutine.id);

    console.log('Routine DELETE: ' + routines[index].name);
    routines.splice(index, 1);
    console.log('Routine DELETE: routines left' + routines.length); 
    if(routines.length > 0) {
      this.setState({routines, currentRoutine: routines[index - 1]});
    } else {
      this.setState({routines, currentRoutine: null, workouts: []});
    }

    removeRoutine(this.state.currentRoutine.id);

  }

  updateAndSave(routine) {
    console.log('UpdateAndSave calling updateRoutine with: ' + JSON.stringify(routine));

    let routines = this.state.routines.slice();
    let index = routines.findIndex(r => r.id === routine.id);
    routines[index] = routine;
    this.setState({routines, currentRoutine: routine, workouts: routine.workouts});

    updateRoutine(routine);
  }

  handleChange(item) {
    console.log('HandleChange CALLED: ' + item);
    
    if(this.state.currentRoutine) {
      let workouts = this.state.workouts.slice();
      let index = workouts.findIndex(w => w.name == item.name);
      workouts[index] = item;
      
      console.log('HandleChange workouts to push: ' + JSON.stringify(workouts));
      const currentRoutine = update(this.state.currentRoutine, {
        workouts: {$set: workouts}
      });

      console.log('HandleChange routine afte UPDATE: ' + JSON.stringify(currentRoutine));

      this.updateAndSave(currentRoutine);
    }
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