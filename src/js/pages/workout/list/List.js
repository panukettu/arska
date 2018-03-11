import React from 'react';
import {Text, View, StyleSheet, Button, Dimensions} from 'react-native';
import _ from 'lodash';

import Colors from 'src/js/constants/Colors';
import TitleBar from './TitleBar';


export default class List extends React.Component {
  
  render() {
    const { workouts } = this.props;
     
    if(!workouts || workouts.length === 0) { 
      return (
        <View style={styles.container}>
          <TitleBar/>
          <Text testID='emptyListText' style={styles.addTitle}>
            Lisää liikkeitä!
          </Text>
        </View>
      ); 
    };

    // each workout needs its own row, use map to get the jsx
    const list = workouts.map(workout => {
      return (
        // and a unique key!
        <View key={_.uniqueId()} style={styles.row}>
          <Text style={styles.itemName}>{workout.name}</Text>
          <Text style={styles.itemBase}>{workout.reps}</Text>
          <Text style={styles.itemBase} onPress={() => this.changeWeight(workout)}>{workout.weight}</Text>
          <Button color={Colors.Red} title=" x " onPress={() => this.props.remove(workout)}></Button>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <TitleBar/>
        {list}
      </View>
    );
  }

  changeWeight(item) {
    let workout = Object.assign({}, item);
    workout.weight = 100;
    this.props.handleChange(workout);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.Lighter
  },
  row: {
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
    flexDirection: 'row',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: '#FFFFFF'
  }
})