export type DropDwonType = {
    label?:string;
    error?:string;
    placeholder?:string;
    onSelect?: ((e:string) =>  void);
    isVisible?: boolean;
    onPress?: ((e?: 'Gender' | 'Hobbies' | 'Country' | any) => void);
    data:  Array<ListItem>;
}

export type DropDownListType = {
    data: Array<ListItem>;
    onSelect?: ((e:ListItem) =>  void);
};

export type ListItem = {
    label: string;
    value: string;
};
