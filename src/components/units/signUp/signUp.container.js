import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpPresenter from './signUp.presenter';

export default function SignUpContainer() {
  const [credential, setCredential] = useState({
    email: null,
    password: null,
  });
  const [validation, setValidation] = useState({
    email: false,
    password: false,
  });
  const navigator = useNavigate();

  const validateEmail = (email) => {
    const regex = new RegExp('[0-9a-zA-Z-._]+@[0-9a-zA-Z-_.]');
    setValidation({
      email: regex.test(email),
      password: validation.password,
    });
  };

  const validatePassword = (password) => {
    setValidation({
      email: validation.email,
      password: password.length >= 8 ? true : false,
    });
  };

  const onChangeCredential = (event) => {
    if (event.target.type === 'email') {
      validateEmail(event.target.value);
      setCredential({
        email: event.target.value,
        password: credential.password,
      });
    } else if (event.target.type === 'password') {
      validatePassword(event.target.value);
      setCredential({
        email: credential.email,
        password: event.target.value,
      });
    }
  };

  const onClickSignUp = async () => {
    try {
      const access_token = await axios.request({
        url: 'https://pre-onboarding-selection-task.shop/auth/signup',
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        data: {
          email: credential.email,
          password: credential.password,
        },
      });
      if (access_token.data.access_token !== null) {
        localStorage.setItem('access_token', access_token.data.access_token);
        navigator('/todos');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <SignUpPresenter
        validation={validation}
        onClickSignUp={onClickSignUp}
        onChangeCredential={onChangeCredential}
      />
    </>
  );
}
