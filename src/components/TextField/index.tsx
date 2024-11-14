import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {TextFieldType} from './type';
import {Colors} from '../../config/theme';

const TextField: React.FC<TextFieldType> = ({
  label,
  error,
  placeholder,
  onChangeText,
  style
}) => {
  return (
    <View style={[styles.margin, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.flex}
          placeholder={placeholder}
          placeholderTextColor={Colors.dark}
          onChangeText={onChangeText}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  margin: {marginHorizontal: 20, marginTop: 10},
  flex: {flex: 1},
  label: {fontSize: 12, fontWeight: '600', marginBottom: 10},
  error: {fontSize: 12, marginLeft: 5, marginTop: 5, color: Colors.error},
  inputView: {
    height: 50,
    width: '100%',
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});
