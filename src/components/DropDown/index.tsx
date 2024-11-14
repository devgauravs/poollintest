import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {DropDwonType, ListItem} from './type';
import {Colors} from '../../config/theme';
import DropDownList from './DropDownList';

const DropDwon: React.FC<DropDwonType> = ({
  label,
  error,
  placeholder,
  onSelect,
  onPress,
  isVisible,
  data,
}) => {
  const [selectValue, setSelectValue] = useState<string>();

  const handleSelect = (e: ListItem) => {
    setSelectValue(e.label);
    onSelect && onSelect(e.label);
    onPress && onPress(undefined);
  };

  const handleShow = () => {
    onPress && onPress(label);
  };

  return (
    <View style={styles.contain}>
      <Text style={styles.label}>{label}</Text>
      <Pressable onPress={handleShow} style={styles.dropView}>
        <Text
          style={[
            styles.value,
            {
              color: selectValue
                ? Colors.black
                : Colors.dark,
            },
          ]}>
          {selectValue ?? placeholder}
        </Text>
      </Pressable>
      {error && <Text style={styles.error}>{error}</Text>}
      {isVisible && (
        <View style={styles.dropDown}>
          <DropDownList onSelect={handleSelect} data={data} />
        </View>
      )}
    </View>
  );
};

export default DropDwon;

const styles = StyleSheet.create({
  contain: {marginHorizontal: 20, marginTop: 10},
  label: {fontSize: 12, fontWeight: '600'},
  error: {fontSize: 12, marginLeft: 5, marginTop: 5, color: Colors.error},
  dropView: {
    height: 50,
    width: '100%',
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  dropDown: {
    width: '100%',
    marginTop: 10,
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {height: 1, width: 1},
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 3,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  value: {fontSize: 14},
});
