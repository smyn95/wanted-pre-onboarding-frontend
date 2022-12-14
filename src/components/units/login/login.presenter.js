import React from 'react';
import * as S from './login.styles';

export default function LoginPresenter(props) {
  return (
    <>
      <S.Wrapper>
        <h1>로그인</h1>
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
          <button onClick={props.onClickLogin}>제출하기</button>
        ) : (
          <button disabled style={{ background: 'gray' }}>
            제출하기
          </button>
        )}
        <label onClick={props.onClickRedirect}>회원가입</label>
      </S.Wrapper>
    </>
  );
}
