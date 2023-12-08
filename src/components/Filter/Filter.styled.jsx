import styled from 'styled-components';

export const Label = styled.label`
display: flex;
flex-direction: column;
`;

export const Input = styled.input`
width: 200px;
margin-bottom: 20px;

&:hover,
&:focus {
  
  outline: 1px solid blue;
}
`;