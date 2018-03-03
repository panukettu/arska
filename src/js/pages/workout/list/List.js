import React from 'react';
import {Text, View, StyleSheet, Button, Dimensions} from 'react-native';
import _ from 'lodash';

import Colors from 'src/js/constants/Colors';


export default class List extends React.Component {
  
  render() {
    const { workouts } = this.props;
      
    if(!workouts || workouts.length === 0) { 
      return (
        <View style={styles.container}>
          <Text style={styles.addTitle}>
            Lisää liike ylempää!
          </Text>
        </View>); 
    };

    const list = workouts.map(workout => {
      return (
        <View key={_.uniqueId()} style={styles.itemContainer}>
          <Text style={styles.itemName}>{workout.name}</Text>
          <Text style={styles.itemBase}>{workout.reps}</Text>
          <Text style={styles.itemBase}>{workout.weight}</Text>
          <Button color={Colors.Red} title=" x " onPress={() => this.props.remove(workout)}></Button>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>
          <Text style={[styles.itemName, {fontSize: 20}]}>Liike</Text>
          <Text style={[styles.itemBase, {fontSize: 20}]}>Toistot</Text>
          <Text style={[styles.itemBase, {fontSize: 20}]}>Paino</Text>
          <View style={{opacity: 0}}>
            <Button title=" x " onPress={() => e.preventDefault}></Button>
          </View>
        </View>
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.Lighter
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: Dimensions.get('window').width * 0.75,
    maxHeight: Dimensions.get('window').height * 0.06,
    backgroundColor: Colors.Darker,
    paddingLeft: 5,
    paddingRight: 15,
    marginBottom: 2
  },
  itemBase: {
    flex: 0.3,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  itemName: {
    flex: 0.4,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  addTitle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 20,
    color: '#FFFFFF'
  }
})