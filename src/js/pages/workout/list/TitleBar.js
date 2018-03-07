import React from 'react';
import {View, Text, StyleSheet, Button, Dimensions} from 'react-native';

import Colors from 'src/js/constants/Colors';

// TODO: Try to figure dynamic render from props.
// For example, you could set each workout property have a title value. 

export default class TitleBar extends React.Component {
  render() {
    return(
      <View style={styles.row}>
        <Text style={[styles.titleName, {fontSize: 20}]}>Liike</Text>
        <Text style={[styles.titleBase, {fontSize: 20}]}>Toistot</Text>
        <Text style={[styles.titleBase, {fontSize: 20}]}>Paino</Text>
        {/* // 'hack' XD to keep title bar in line with workout rows */}
        <View style={{opacity: 0}}>
            <Button title=" x " onPress={() => e.preventDefault}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  titleBase: {
    flex: 0.3,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  titleName: {
    flex: 0.4,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});