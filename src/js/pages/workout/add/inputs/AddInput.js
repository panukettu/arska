import React from 'react';
import { TextInput } from 'react-native';

export default class AddInput extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(value) {
    this.props.handleChange(value);
  }

  render() {
    return (
      <TextInput 
        style={this.props.style}
        underlineColorAndroid='transparent'
        placeholder={this.props.placeholder}
        placeholderTextColor='#FFFFFF'
        onChangeText={this.handleChange}
        value={this.props.value}
        ref={this.props.inputRef}
        />
    );
  }
}
