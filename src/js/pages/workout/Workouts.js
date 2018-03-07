import React from 'react';
import {StyleSheet, View, Button, AsyncStorage, Text, Modal, Picker} from 'react-native';

import Add from './add/Add';
import Footer from './footer/Footer';
import List from './list/List';
import RoutinePicker from './picker/Picker';
import { setRoutine, getRoutines, removeRoutine } from './storage/Storage';


export default class Workouts extends React.Component {
  constructor() {
    super();
    
    this.state = {
      workouts: [],
      currentRoutine: [],
      routines: [],
      askRoutineName: false
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
      alert('Liike on jo listassaa!');
    } 
  }

  remove(workout) {
      // clone the array since it's used as a datasource
      let workouts = this.state.workouts.map(w => w); 
      let index = workouts.findIndex(w => w.name == workout.name);
      workouts.splice(index, 1);
      this.save(workouts);
  }

  save(workouts) {
    AsyncStorage.setItem("workouts", JSON.stringify(workouts));
    this.setState({workouts});
  }

  setRoutine(routine) {
    this.save(routine.workouts);
    this.setState({currentRoutine: routine});
  }

  routineDone(name) {
    if(!name) {
      this.setState({askRoutineName: true});
    } 
    else {
      let obj = {
        name: name,
        workouts: this.state.workouts,
      }
      setRoutine(obj);
      this.state.routines.push(obj);
      this.setState({routines: this.state.routines, askRoutineName: false});
    }
  }

  deleteRoutine() {
    let routines = this.state.routines.map(r => r);
    let index = routines.findIndex(r => r.id == this.state.currentRoutine.id);
    routines.splice(index, 1);
    this.setState({routines});
    removeRoutine(this.state.currentRoutine.id);
  }

  render() {
    return (
      <View style={styles.container}>
        <Add add={this.add.bind(this)}/>
        <RoutinePicker routines={this.state.routines} handleChange={this.setRoutine.bind(this)}/>
        <List remove={this.remove.bind(this)} workouts={this.state.workouts}/>
        <Button onPress={this.deleteRoutine.bind(this)} title="Poista rutiini"/>
        <Footer askName={this.state.askRoutineName} handleSubmit={this.routineDone.bind(this)}/>
      </View>
    );
  }

  componentDidMount() {
    this.get().then(workouts => {
      if(workouts) {
        this.setState({workouts});
      }
    });

    getRoutines().then(routines => {
      this.setState({routines});
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