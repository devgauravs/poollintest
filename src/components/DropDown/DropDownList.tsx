import {FlatList, ListRenderItem, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {DropDownListType, ListItem} from './type';

const DropDownList: React.FC<DropDownListType> = ({data, onSelect}) => {
  const handleSelectItem = (e: ListItem) => {
    onSelect && onSelect(e);
  };

  const renderItem: ListRenderItem<ListItem> = ({item}) => {
    return (
      <Text onPress={() => handleSelectItem(item)} style={styles.label}>
        {item.label}
      </Text>
    );
  };
  return (
    <View style={styles.view}>
      <FlatList scrollEnabled={false} data={data} renderItem={renderItem} />
    </View>
  );
};

export default DropDownList;

const styles = StyleSheet.create({
  view: {flex: 1},
  label: {marginBottom: 8, fontSize: 14, fontWeight: '600'},
});
