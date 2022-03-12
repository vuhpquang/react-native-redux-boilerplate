import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ text = '', onPress = () => { }, colorScheme = 'primary', ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} {...props}>
      <Text style={ }>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
