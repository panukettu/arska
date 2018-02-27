import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Header extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Salihelpperi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFFFFF',
  }
})