import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import {Colors} from '../../config/theme';
import { ButtonType } from './type';

const Button:React.FC<ButtonType> = ({ label, onPress, disabled }) => {
  return (
    <Pressable disabled={disabled} onPress={onPress}
      style={[styles.button, {backgroundColor: disabled ? Colors.dark : Colors.green}]}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
    button: {
        marginVertical: 20,
        height: 55,
        width: '90%',
        backgroundColor: Colors.green,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10
      },
      label: {fontSize: 16, fontWeight: '700', color: Colors.white}
});
