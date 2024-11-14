// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { StyleSheet } from 'react-native';
import React from 'react';
import Container from '../../components/Container';
import RegisterForm from './RegisterForm';
import { FormSubmit } from './type';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setFormvalues } from '../../redux/reducer/auth/authSlice';

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSubmit = (e: FormSubmit) => {
    dispatch(setFormvalues(e));
  }
  return <Container>
    <>
    <RegisterForm onSubmit={handleSubmit}/>
    </>
  </Container>;
};

export default Register;

