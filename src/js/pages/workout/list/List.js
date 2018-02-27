import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import _ from 'lodash';

export default class List extends React.Component {
  
  render() {
    const { workouts } = this.props;

    const list = workouts.map(workout => {
      return (
        <View key={_.uniqueId()} style={styles.listItem}>
          <Text>{workout.name}</Text>
          <Text>{workout.reps}</Text>
          <Text>{workout.weight}</Text>
          <Button title="Poista" onPress={() => this.props.remove(workout)}></Button>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        {list}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  listItem: {
    flex: 1,
    flexDirection: 'row'
  }
})