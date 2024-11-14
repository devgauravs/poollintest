import { KeyboardType, StyleProp, ViewStyle } from 'react-native';

export type TextFieldType  = {
    onChangeText?: ((e:string) => void);
    placeholder?:string;
    keyboardType?: KeyboardType;
    label?: string;
    error?: string;
    style?: StyleProp<ViewStyle>
};
