import {FlatList, ListRenderItem, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import {HobbiesType} from './type';
import RadioButton from '../../components/RadioButton';
import {ListItem} from '../../components/DropDown/type';

const Hobbies: React.FC<HobbiesType> = ({data, onPress, label, selectValue}) => {
  const handleSelect = (i: number) => {
    onPress && onPress(data[i]);
  };
  const renderItem: ListRenderItem<ListItem> = ({item, index}) => (
    <RadioButton isSelect={selectValue?.includes(item)}
      onPress={() => handleSelect(index)}
      style={styles.flex}
      label={item.label}
    />
  );

  return (
    <View style={styles.view}>
      <Text style={styles.label}>{label}</Text>
      <FlatList
        style={styles.top}
        scrollEnabled={false}
        numColumns={2}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Hobbies;

const styles = StyleSheet.create({
  view: {marginHorizontal: 20, marginTop: 15},
  flex: {flex: 1},
  label: {fontSize: 14, fontWeight: '600'},
  top: {marginTop: 10},
});
