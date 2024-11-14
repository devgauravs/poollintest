import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../config/theme';
import QuestionCard from './QuestionCard';

const PollingQuestion = () => {
  const renderItem = () => {
    return (
      <View style={styles.listView}>
        <QuestionCard/>
      </View>
    );
  };
  return (
    <View style={styles.view}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        horizontal
        data={[1, 2, 3]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default PollingQuestion;

const styles = StyleSheet.create({
  question: {
    textAlign: 'center',
    color: Colors.button,
    fontSize: 14,
    fontWeight: '700',
  },
  view: {marginTop: 30},
  listView: {
    width: Dimensions.get('screen').width,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
});
