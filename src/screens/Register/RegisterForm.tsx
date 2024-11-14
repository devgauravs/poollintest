/* eslint-disable @typescript-eslint/no-shadow */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import TextField from '../../components/TextField';
import DropDwon from '../../components/DropDown';
import Button from '../../components/Button';
import {country, gender, hobbies} from '../../config/Constant';
import Hobbies from './Hobbies';
import {ListItem} from '../../components/DropDown/type';
import {FormType, FormValues} from './type';
import {FormSchema} from '../../config/schema';

const RegisterForm: React.FC<FormType> = ({onSubmit}) => {
  const [isVisible, setVisible] = useState<any>();
  const [hobbieValue, setHobbies] = useState<Array<ListItem>>([]);

  const handleHobbies = (item: ListItem) => {
    setHobbies(prev => {
      if (prev.includes(item)) {
        return prev.filter(e => e.label !== item.label);
      }
      return [...prev, item];
    });
  };

  const handleSubmit = (e: FormValues) => {
    onSubmit && onSubmit({...e, hobbies: hobbieValue});
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        gender: '',
        country: '',
      }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
      enableReinitialize>
      {({values, handleChange, handleSubmit, errors, touched}) => (
        <>
          <TextField
            style={styles.top}
            label="Name"
            placeholder="Enter name"
            onChangeText={handleChange('name')}
            error={errors.name && touched.name ? errors.name : undefined}
          />
          <TextField
            label="Email"
            placeholder="Enter Email"
            onChangeText={handleChange('email')}
            error={errors.email && touched.email ? errors.email : undefined}
          />
          <DropDwon
            onPress={setVisible}
            isVisible={isVisible === 'Gender'}
            data={gender}
            label="Gender"
            onSelect={handleChange('gender')}
            placeholder={values.gender === '' ? 'Select Gender' : values.gender}
            error={errors.gender && touched.gender ? errors.gender : undefined}
          />
          <DropDwon
            onPress={setVisible}
            isVisible={isVisible === 'Country'}
            data={country}
            label="Country"
            onSelect={handleChange('country')}
            placeholder="Select Country"
            error={
              errors.country && touched.country ? errors.country : undefined
            }
          />
          <Hobbies
            selectValue={hobbieValue}
            onPress={handleHobbies}
            label="Hobbies"
            data={hobbies}
          />
          <Button label="Submit" onPress={handleSubmit} />
        </>
      )}
    </Formik>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  top: {marginTop: 20},
});
