import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class List extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>Harjoitus 1</Text>
        </View>
        <View>
          <Text>Harjoitus 1</Text>
        </View>
        <View>
          <Text>Harjoitus 1</Text>
        </View>
        <View>
          <Text>Harjoitus 1</Text>
        </View>
        <View>
          <Text>Harjoitus 1</Text>
        </View>
        <View>
          <Text>Harjoitus 1</Text>
        </View>
        <View>
          <Text>Harjoitus 1</Text>
        </View>
        <View>
          <Text>Harjoitus 1</Text>
        </View>
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
  }
})