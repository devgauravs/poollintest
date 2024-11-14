/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../config/theme';
import QuestionCard from './QuestionCard';
import Button from '../../components/Button';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setPolling } from '../../redux/reducer/auth/authSlice';
import { useNavigation } from '@react-navigation/native';
import { RootStack } from '../../routes/type';

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {push} = useNavigation<RootStack>();
  const [answer, setAnswer] = useState<string>();
  const handlePress = (e: string) => {
    setAnswer(e);
  };

  const handlePolling = () => {
      dispatch(setPolling(answer));
      push('Polling');
      setAnswer(undefined);
  };


  return (
    <View style={styles.main}>
    <QuestionCard option={answer} onOptionSelect={handlePress}/>
    <Button disabled={!answer} label="Submit" onPress={handlePolling}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    main: {flex: 1, backgroundColor: Colors.white},
});
