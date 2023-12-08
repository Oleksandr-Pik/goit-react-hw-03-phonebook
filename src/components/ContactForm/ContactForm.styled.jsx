import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  outline: 1px solid;
  padding: 10px;
`;

export const Input = styled.input`
  width: 200px;
  margin-bottom: 20px;

  &:hover,
  &:focus {
    outline: 1px solid blue;
  }
`;

export const Button = styled.button`
  width: fit-content;
`;
