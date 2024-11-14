import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/routes/MainStack';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Text>Loading....</Text>}>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
