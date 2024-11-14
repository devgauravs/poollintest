import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Card from '../../components/Card';
import {Colors} from '../../config/theme';
import {OptionsType, QuestionCardType} from './type';


const Options = ({label, isSelect, onPress}: OptionsType) => {
  const handleOptionSelect = () => {
    onPress && onPress(label ?? '');
  };
  return (
    <Card onPress={handleOptionSelect}
      style={[
        styles.options,
        {backgroundColor: isSelect === label ? Colors.green : Colors.white},
      ]}>
      <Text
        style={[
          styles.optionLabel,
          {color: isSelect === label ? Colors.white : Colors.green},
        ]}>
        {label}
      </Text>
    </Card>
  );
};

const QuestionCard: React.FC<QuestionCardType> = ({onOptionSelect, option}) => {

  const handleSelect = (e: string) => {
      onOptionSelect && onOptionSelect(e);
  };


  return (
    <Card disabled={true} style={styles.top}>
      <>
        <Text style={styles.label}>What party do you like most?</Text>
        <Options label="BJP" isSelect={option} onPress={handleSelect}/>
        <Options label="Congress" isSelect={option} onPress={handleSelect}/>
        <Options label="AAP" isSelect={option} onPress={handleSelect}/>
      </>
    </Card>
  );
};

export default QuestionCard;

const styles = StyleSheet.create({
  question: {fontSize: 16, fontWeight: '700', color: Colors.green},
  label: {fontSize: 14, fontWeight: '600', color: Colors.green},
  top: {marginTop: 30},
  options: {width: '100%', marginTop: 10, padding: 15},
  optionLabel: {fontSize: 14, fontWeight: '600'},
});
