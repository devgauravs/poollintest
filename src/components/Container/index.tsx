import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import {ContainerType} from './type';
import { Colors } from '../../config/theme';

const Container: React.FC<ContainerType> = ({children, style}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.container, style]}>
        <KeyboardAvoidingView style={styles.container}>
          <ScrollView style={styles.scroll}>{children}</ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.white},
  scroll: {flexGrow: 1},
});
