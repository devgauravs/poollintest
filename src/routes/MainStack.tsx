// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteStack} from './type';
import Register from '../screens/Register';
import {useSelector} from 'react-redux';
import {RootStore} from '../redux/store';
import Home from '../screens/Home';
import PollingChart from '../screens/PollingChart';
const Stack = createNativeStackNavigator<RouteStack>();
const MainStack = () => {
  const {userInfo} = useSelector((state: RootStore) => state.auth);
  return (
    <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      {!userInfo ? (
        <Stack.Screen name="Register" component={Register} />
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerTitle: 'Poll'}}
          />
          <Stack.Screen
            name="Polling"
            component={PollingChart}
            options={{headerTitle: 'Poll Chart'}}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
