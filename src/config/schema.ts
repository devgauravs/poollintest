import * as Yup from 'yup';

export const FormSchema = Yup.object({
    name: Yup.string().required('Please enter name'),
    email: Yup.string().required('Please enter email').email('Please enter valid email address'),
    gender: Yup.string().required('Please select gender'),
    country: Yup.string().required('Please select country'),
});
