import React from 'react';
import {AsyncStorage} from 'react-native';
import _ from 'lodash';

export const setRoutine = (routine) => {
  getRoutines().then(res => {
    routine.id = _.uniqueId();
    res.push(routine);
    AsyncStorage.setItem('routines', JSON.stringify(res));
  });
};

export const getRoutines = async() => {
  try {
    let routines = await AsyncStorage.getItem('routines');
    return routines ? JSON.parse(routines) : [];
  } 
  catch(err) {
    alert('virhe hakiessa ohjelmia')
  }  
}

export const removeRoutine = (id) => {
  getRoutines().then(res => {
    let index = res.findIndex(r => r.id == id);
    res.splice(index, 1);
    AsyncStorage.setItem('routines', JSON.stringify(res));
  });
}
