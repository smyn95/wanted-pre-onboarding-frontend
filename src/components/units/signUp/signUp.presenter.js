import React from 'react';
import * as S from './signUp.styles';

export default function SignUpPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <h1>회원가입</h1>
        <input
          type='email'
          placeholder='이메일을 입력하세요.'
          onChange={props.onChangeCredential}
        />
        <input
          type='password'
          placeholder='비밀번호를 입력하세요.'
          onChange={props.onChangeCredential}
        />
        {props.validation.email && props.validation.password ? (
          <button onClick={props.onClickSignUp}>제출하기</button>
        ) : (
          <button disabled style={{ background: 'gray' }}>
            제출하기
          </button>
        )}
      </S.Wrapper>
    </>
  );
}
