import { StyleProp, ViewStyle } from "react-native";

export type RadioButtonType = {
    label?: string;
    onPress?: ((e: string) => void);
    isSelect?: boolean;
    style?: StyleProp<ViewStyle>
}