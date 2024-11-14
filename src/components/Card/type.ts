import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type CardType = {
    children?:React.ReactElement;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
    onPress?: () => void
}
