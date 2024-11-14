import { ListItem } from '../../components/DropDown/type';

export type HobbiesType = {
    data: Array<ListItem>;
    onPress?: ((e: ListItem) => void);
    label?: string;
    selectValue?: Array<ListItem>
};


export type FormType = {
    onSubmit?: ((e: FormSubmit) => void);
}

export type FormSubmit = {
    name?:string;
    email?: string;
    gender?: string;
    country?: string;
    hobbies?: Array<ListItem>
}

export type FormValues = {
    name?:string;
    email?: string;
    gender?: string;
    country?: string;
}