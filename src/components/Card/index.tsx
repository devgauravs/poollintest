import {Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Colors} from '../../config/theme';
import {CardType} from './type';

const Card: React.FC<CardType> = ({children, style, disabled, onPress}) => {
  return <Pressable onPress={onPress} disabled={disabled} style={[styles.card, style]}>{children}</Pressable>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    width: '90%',
    alignSelf: 'center',
    shadowColor: Colors.black,
    shadowOffset: {height: 1, width: 1},
    shadowRadius: 2,
    shadowOpacity: 2,
    elevation: 3,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
});
