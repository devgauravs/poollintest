import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RouteStack = {
    Register: undefined,
    Home: undefined,
    Polling: undefined
};


export type RootStack = NativeStackNavigationProp<RouteStack>;
