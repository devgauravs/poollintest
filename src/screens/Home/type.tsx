export type OptionsType = {
    label?: string;
    onPress?:((e: string) => void);
    isSelect?: string
}

export type QuestionCardType = {
    onOptionSelect?: ((e: string) => void);
    option?:string
}