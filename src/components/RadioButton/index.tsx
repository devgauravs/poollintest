import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../config/theme';
import { RadioButtonType } from './type';

const RadioButton:React.FC<RadioButtonType> = ({label, onPress, isSelect, style}) => {
  const handleSelect = () => {
    onPress && onPress(label ?? '');
  };
  return (
    <Pressable onPress={handleSelect} style={[styles.row,style]}>
      <View style={styles.radio}>
       {isSelect &&  <View style={styles.solid} />}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  row: {flexDirection: 'row', alignItems: 'center', marginVertical: 8},
  radio: {
    height: 20,
    width: 20,
    borderColor: Colors.dark,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  solid: {height: 12, width: 12, backgroundColor: Colors.button, borderRadius: 6},
  label: {marginLeft: 10, fontSize: 14, fontWeight: '600'},
});
