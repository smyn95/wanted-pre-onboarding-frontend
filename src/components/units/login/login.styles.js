import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 15px;
  margin: 100px auto;
  h1 {
    font-style: italic;
    margin: 0 auto;
  }
  input {
    height: 35px;
    padding: 5px;
  }
  label {
    text-decoration: underline;
    text-align: center;
  }
`;
